/**
 * Hra: Líheň příšerek
 * Hlavní aplikační logika (SPA router, state management, kvíz a animace)
 *
 * Verze podporuje:
 *  - Rozcestník (Landing screen) pro výběr verze (Dějepis / Přírodověda)
 *  - URL parametr ?v=history nebo ?v=biology pro přímé odkázání
 *  - Persistenci stavu v localStorage odděleně pro každou verzi
 *  - Nekonečné točení otázek a bodovací prahy z config.js
 */

document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // GLOBÁLNÍ KONFIGURACE (načte se po výběru verze)
  // ============================================================
  let CONFIG = null;
  let currentVersion = null; // "history" nebo "biology"

  // ============================================================
  // HERNÍ STAV
  // ============================================================
  let gameState = {
    scores: {},
    accessories: {},
    currentTopic: null,
    quizSession: {
      questions: [],
      currentIndex: 0,
      score: 0
    }
  };

  // ============================================================
  // HTML ELEMENTY
  // ============================================================
  const elMainTitle       = document.getElementById("main-title");
  const elMainSubtitle    = document.getElementById("main-subtitle");
  const elLandingScreen   = document.getElementById("landing-screen");
  const elLobbyScreen     = document.getElementById("lobby-screen");
  const elQuizScreen      = document.getElementById("quiz-screen");
  const elTopicsGrid      = document.getElementById("topics-grid");

  const elBtnResetAll     = document.getElementById("btn-reset-all");
  const elBtnGoHome       = document.getElementById("btn-go-home");
  const elBtnBackToLobby  = document.getElementById("btn-back-to-lobby");
  const elBtnNextQuestion = document.getElementById("btn-next-question");

  const elQuizTitle           = document.getElementById("quiz-title");
  const elMascotSpeech        = document.getElementById("mascot-speech");
  const elMascotContainer     = document.getElementById("quiz-mascot-container");
  const elMascotName          = document.getElementById("quiz-mascot-name");
  const elMascotStage         = document.getElementById("quiz-mascot-stage");
  const elMascotPoints        = document.getElementById("quiz-mascot-points");
  const elMascotNextThreshold = document.getElementById("quiz-mascot-next-threshold");
  const elMascotProgressBar   = document.getElementById("quiz-mascot-progress-bar");

  const elQuestionCounter    = document.getElementById("question-counter");
  const elSessionScore       = document.getElementById("quiz-session-score");
  const elQuestionText       = document.getElementById("question-text");
  const elOptionsContainer   = document.getElementById("options-container");

  const elFeedbackPanel      = document.getElementById("feedback-panel");
  const elFeedbackIcon       = document.getElementById("feedback-icon");
  const elFeedbackTitle      = document.getElementById("feedback-title");
  const elFeedbackExplanation = document.getElementById("feedback-explanation");

  // ============================================================
  // TEXTY MASKOTŮ
  // ============================================================
  const MASCOT_SPEECHES = {
    egg: [
      "Klep, klep... Je tam někdo? Pomoz mi se vylíhnout! 🥚",
      "Slyším tě! Odpověz správně a pomoz mi ven!",
      "Uvnitř je tma, už se těším na svět! 🌟",
      "Bude ze mě parádní příšerka, slibuju!"
    ],
    baby: [
      "Ahoj! Mám strašný hlad, nakrmíš mě? 😋",
      "Mňam, ta minulá otázka byla skvělá!",
      "Cítím, jak rostu! Ještě pár správných odpovědí! 🌱",
      "Jsi super trenér! Společně to zvládneme!",
      "Zkusíme další otázku? Už se těším!"
    ],
    adult: [
      "Páni, podívej se na mě! Jsem velký a silný! 💪",
      "Můj doplněk mi hrozně sluší, že? 😎",
      "Můžeme trénovat dál, chci vědět úplně všechno!",
      "Děkuji ti za péči! Jsi nejlepší!",
      "Učení je zábava! Pojďme na další otázku!"
    ],
    correct: [
      "Mňam! To bylo výborné! 😋",
      "Jupí! Máš pravdu! 🎉",
      "Skvěle! Trefa do černého! ✨",
      "Ooo, to mi chutnalo! Jen tak dál!",
      "Super! Věděl jsem, že to zvládneš! 🌟"
    ],
    incorrect: [
      "Aujá! To nevadí, učíme se dál! 💖",
      "Nevadí, příště to určitě trefíš! 💪",
      "Těsně vedle! Ale aspoň jsme o něco chytřejší!",
      "Z chyb se učíme nejlíp, hlavu vzhůru! 🌷",
      "Jejda, to nevadí. Zkusíme další?"
    ]
  };

  // ============================================================
  // INIT a ROUTING
  // ============================================================
  function init() {
    // Zkontroluj URL parametr ?v=history nebo ?v=biology
    const urlParams = new URLSearchParams(window.location.search);
    const versionParam = urlParams.get("v");

    if (versionParam === "history") {
      launchVersion("history");
    } else if (versionParam === "biology") {
      launchVersion("biology");
    } else {
      // Zobraz rozcestník
      showScreen(elLandingScreen);
      elBtnGoHome.style.display = "none";
      elBtnResetAll.style.display = "none";
    }

    setupEventListeners();
  }

  // Aktivuje verzi hry (history / biology)
  function launchVersion(version) {
    currentVersion = version;
    CONFIG = (version === "history") ? CONFIG_HISTORY : CONFIG_BIOLOGY;

    // Nastav titulky
    elMainTitle.textContent = CONFIG.gameTitle;
    elMainSubtitle.textContent = CONFIG.gameSubtitle;

    // Zobraz tlačítko Domů a Reset
    elBtnGoHome.style.display = "flex";
    elBtnResetAll.style.display = "flex";

    // Inicializuj progress pro danou verzi
    loadProgress();

    // Nastav téma lobbys
    resetThemeToDefault();
    renderLobby();
    showScreen(elLobbyScreen);
  }

  // ============================================================
  // SPRÁVA OBRAZOVEK
  // ============================================================
  function showScreen(screenEl) {
    [elLandingScreen, elLobbyScreen, elQuizScreen].forEach(s => {
      s.classList.remove("active");
    });
    screenEl.classList.add("active");
  }

  // ============================================================
  // STAV HRY (LocalStorage – oddělené klíče pro každou verzi)
  // ============================================================
  function storageKey() {
    return `simi_histo_hra_progress_${currentVersion}`;
  }

  function loadProgress() {
    const savedData = localStorage.getItem(storageKey());
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        gameState.scores = parsed.scores || {};
        gameState.accessories = parsed.accessories || {};
        // Doplň témata, která ještě nemají skóre (např. při přidání nových)
        CONFIG.topics.forEach(topic => {
          if (!(topic.id in gameState.scores)) gameState.scores[topic.id] = 0;
          if (!(topic.id in gameState.accessories)) gameState.accessories[topic.id] = null;
        });
      } catch (e) {
        console.error("Chyba při načítání progressu", e);
        resetState();
      }
    } else {
      resetState();
    }
  }

  function saveProgress() {
    localStorage.setItem(storageKey(), JSON.stringify({
      scores: gameState.scores,
      accessories: gameState.accessories
    }));
  }

  function resetState() {
    gameState.scores = {};
    gameState.accessories = {};
    CONFIG.topics.forEach(topic => {
      gameState.scores[topic.id] = 0;
      gameState.accessories[topic.id] = null;
    });
    saveProgress();
  }

  // ============================================================
  // VÝPOČET STÁDIA VÝVOJE
  // ============================================================
  function getMascotStage(points) {
    const thresh = CONFIG.thresholds;
    if (points < thresh.baby) {
      return { id: "egg", name: "Vajíčko 🥚", min: 0, max: thresh.baby };
    } else if (points < thresh.adult) {
      return { id: "baby", name: "Mládě 🐣", min: thresh.baby, max: thresh.adult };
    } else {
      return { id: "adult", name: "Dospělec ⭐", min: thresh.adult, max: thresh.adult };
    }
  }

  // ============================================================
  // CSS OBRÁZKY PŘÍŠEREK — Speciální prvky pro každé téma
  // ============================================================

  // Vrátí HTML speciálního prvku pro dospělou příšerku (téma-specifické)
  function getSpecialFeatureHTML(topicId) {
    const featureMap = {
      // Biologie
      "digestive":       `<div class="feature-belly"></div>`,
      "respiratory":     `<div class="feature-lungs"><div class="lung-flap left"></div><div class="lung-flap right"></div></div>`,
      "reproductive":    `<div class="feature-satellites"><div class="satellite-cell"></div><div class="satellite-cell"></div></div>`,
      // Dějepis
      "obrozeni":        `<div class="feature-pen"></div>`,
      "prvni_valka":     `<div class="feature-helmet"></div>`,
      "prvni_republika": `<div class="feature-sokol-hat"></div>`,
      "protektorat":     `<div class="feature-beret"></div>`,
      "komunismus":      `<div class="feature-freedom-cap"></div>`,
    };
    return featureMap[topicId] || "";
  }

  function getMascotHTML(topicId, points, accessoryId) {
    const stage = getMascotStage(points);

    if (stage.id === "egg") {
      return `
        <div class="mascot-egg">
          <div class="egg-spots"></div>
        </div>
        <div class="mascot-shadow"></div>
      `;
    }

    if (stage.id === "baby") {
      return `
        <div class="mascot-baby">
          <div class="baby-spots"></div>
          <div class="mascot-face">
            <div class="mascot-eyes">
              <div class="eye left"></div>
              <div class="eye right"></div>
            </div>
            <div class="mascot-cheeks">
              <div class="cheek left"></div>
              <div class="cheek right"></div>
            </div>
            <div class="mascot-mouth"></div>
          </div>
          <div class="mascot-feet">
            <div class="foot left"></div>
            <div class="foot right"></div>
          </div>
        </div>
        <div class="mascot-shadow"></div>
      `;
    }

    // Dospělec — téma-specifický prvek + doplněk
    const specialFeature = getSpecialFeatureHTML(topicId);
    let accessoryHTML = "";
    if (accessoryId) {
      const acc = CONFIG.accessories.find(a => a.id === accessoryId);
      if (acc) accessoryHTML = `<div class="accessory-overlay ${acc.cssClass}"></div>`;
    }

    return `
      <div class="mascot-adult">
        ${specialFeature}
        <div class="mascot-arms">
          <div class="arm left"></div>
          <div class="arm right"></div>
        </div>
        <div class="mascot-face">
          <div class="mascot-eyes">
            <div class="eye left"></div>
            <div class="eye right"></div>
          </div>
          <div class="mascot-cheeks">
            <div class="cheek left"></div>
            <div class="cheek right"></div>
          </div>
          <div class="mascot-mouth"></div>
        </div>
        <div class="mascot-feet">
          <div class="foot left"></div>
          <div class="foot right"></div>
        </div>
        ${accessoryHTML}
      </div>
      <div class="mascot-shadow"></div>
    `;
  }

  // ============================================================
  // LOBBY
  // ============================================================
  function renderLobby() {
    elTopicsGrid.innerHTML = "";

    // Nastav popis lobbys z konfigurace
    const lobbyIntro = elLobbyScreen.querySelector(".lobby-intro");
    if (lobbyIntro) {
      lobbyIntro.querySelector("h2").textContent =
        currentVersion === "history"
          ? "Vyber historické období a pomoz příšerkám vyrůst! 🇨🇿"
          : "Vyber část lidského těla a pomoz příšerkám vyrůst! 🔬";
    }

    CONFIG.topics.forEach(topic => {
      const points = gameState.scores[topic.id] || 0;
      const accessoryId = gameState.accessories[topic.id];
      const stage = getMascotStage(points);

      let pct = 0;
      if (stage.id === "egg") {
        pct = (points / stage.max) * 100;
      } else if (stage.id === "baby") {
        pct = ((points - stage.min) / (stage.max - stage.min)) * 100;
      } else {
        pct = 100;
      }

      const card = document.createElement("div");
      card.className = "topic-card";
      card.style.setProperty("--card-grad-start", topic.theme.gradientStart);
      card.style.setProperty("--card-grad-end", topic.theme.gradientEnd);
      card.style.setProperty("--card-color", topic.theme.primaryColor);

      // CSS proměnné příšerky v rámci karty
      const mascotStyle = `--primary-color: ${topic.theme.primaryColor}; --accent-color: ${topic.theme.accentColor};`;

      card.innerHTML = `
        <h3 class="card-title">${topic.title}</h3>
        <p class="card-desc">${topic.description}</p>

        <div class="card-mascot-preview" style="${mascotStyle}">
          <div class="mascot-sprite-wrapper">
            ${getMascotHTML(topic.id, points, accessoryId)}
          </div>
        </div>

        <div class="card-progress-section">
          <div class="card-progress-info">
            <span class="card-stage-name">${stage.name} — ${topic.mascotName}</span>
            <span>${points} ${pluralBody(points)}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
          </div>
        </div>

        <button class="btn-play-topic" data-topic-id="${topic.id}">
          Procvičovat a krmit 🍎
        </button>
      `;

      elTopicsGrid.appendChild(card);
    });

    document.querySelectorAll(".btn-play-topic").forEach(btn => {
      btn.addEventListener("click", e => {
        startQuiz(e.target.getAttribute("data-topic-id"));
      });
    });
  }

  function pluralBody(n) {
    if (n === 1) return "bod";
    if (n >= 2 && n <= 4) return "body";
    return "bodů";
  }

  // ============================================================
  // KVÍZ — SPUŠTĚNÍ
  // ============================================================
  function startQuiz(topicId) {
    const topic = CONFIG.topics.find(t => t.id === topicId);
    if (!topic) return;

    gameState.currentTopic = topic;
    applyTopicTheme(topic);

    elQuizTitle.textContent = topic.title;
    elMascotName.textContent = topic.mascotName;

    gameState.quizSession.questions = shuffleArray([...topic.questions]);
    gameState.quizSession.currentIndex = 0;
    gameState.quizSession.score = 0;

    elFeedbackPanel.style.display = "none";
    elFeedbackPanel.className = "feedback-panel";

    showScreen(elQuizScreen);
    updateMascotUI();
    renderQuestion();

    const points = gameState.scores[topic.id] || 0;
    sayRandomSpeech(getMascotStage(points).id);
  }

  // ============================================================
  // TÉMA (CSS proměnné)
  // ============================================================
  function applyTopicTheme(topic) {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", topic.theme.primaryColor);
    root.style.setProperty("--accent-color", topic.theme.accentColor);
    root.style.setProperty("--gradient-start", topic.theme.gradientStart);
    root.style.setProperty("--gradient-end", topic.theme.gradientEnd);
  }

  function resetThemeToDefault() {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", "#6366f1");
    root.style.setProperty("--accent-color", "#e0e7ff");
    root.style.setProperty("--gradient-start", "#4f46e5");
    root.style.setProperty("--gradient-end", "#6366f1");
  }

  // ============================================================
  // MASKOT — UI AKTUALIZACE
  // ============================================================
  function updateMascotUI() {
    const topic = gameState.currentTopic;
    const points = gameState.scores[topic.id] || 0;
    const accessoryId = gameState.accessories[topic.id];
    const stage = getMascotStage(points);

    // Nastav CSS proměnné příšerky pro správné barvy
    elMascotContainer.style.setProperty("--primary-color", topic.theme.primaryColor);
    elMascotContainer.style.setProperty("--accent-color", topic.theme.accentColor);

    elMascotContainer.innerHTML = `
      <div class="mascot-sprite-wrapper" id="quiz-mascot-wrapper">
        ${getMascotHTML(topic.id, points, accessoryId)}
      </div>
    `;

    elMascotStage.textContent = `Stádium: ${stage.name}`;
    elMascotPoints.textContent = points;

    if (stage.id === "adult") {
      elMascotNextThreshold.textContent = "MAX";
      elMascotProgressBar.style.width = "100%";
    } else {
      elMascotNextThreshold.textContent = stage.max;
      let pct = stage.id === "egg"
        ? (points / stage.max) * 100
        : ((points - stage.min) / (stage.max - stage.min)) * 100;
      elMascotProgressBar.style.width = `${pct}%`;
    }
  }

  // ============================================================
  // MASKOT — NÁLADA A ŘEČ
  // ============================================================
  function sayRandomSpeech(type) {
    const speeches = MASCOT_SPEECHES[type];
    if (speeches && speeches.length > 0) {
      elMascotSpeech.textContent = speeches[Math.floor(Math.random() * speeches.length)];
    }
  }

  function setMascotMood(mood) {
    const wrapper = document.getElementById("quiz-mascot-wrapper");
    if (!wrapper) return;
    wrapper.classList.remove("happy", "sad");
    if (mood) wrapper.classList.add(mood);
  }

  // ============================================================
  // KVÍZ — RENDEROVÁNÍ OTÁZKY
  // ============================================================
  function renderQuestion() {
    const session = gameState.quizSession;
    const question = session.questions[session.currentIndex];

    setMascotMood(null);
    elQuestionCounter.textContent = `Otázka ${session.currentIndex + 1}`;
    elSessionScore.textContent = session.score;
    elQuestionText.textContent = question.question;

    elOptionsContainer.innerHTML = "";
    elBtnNextQuestion.disabled = true;
    elFeedbackPanel.style.display = "none";
    elFeedbackPanel.className = "feedback-panel";

    const isBoolean = question.type === "boolean";

    question.options.forEach((optionText, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";

      if (!isBoolean) {
        const letter = String.fromCharCode(65 + idx);
        btn.innerHTML = `<span class="option-badge">${letter}</span><span class="option-text-span">${optionText}</span>`;
      } else {
        const icon = idx === 0 ? "✅" : "❌";
        btn.innerHTML = `<span class="option-badge">${icon}</span><span class="option-text-span">${optionText}</span>`;
      }

      btn.addEventListener("click", () => handleAnswerSelect(idx));
      elOptionsContainer.appendChild(btn);
    });
  }

  // ============================================================
  // KVÍZ — ZPRACOVÁNÍ ODPOVĚDI
  // ============================================================
  function handleAnswerSelect(selectedIdx) {
    const session = gameState.quizSession;
    const question = session.questions[session.currentIndex];
    const optionButtons = elOptionsContainer.querySelectorAll(".option-btn");

    optionButtons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIdx === question.answer;
    const topicId = gameState.currentTopic.id;

    if (isCorrect) {
      optionButtons[selectedIdx].classList.add("selected-correct");
      optionButtons.forEach((btn, i) => {
        if (i !== selectedIdx) btn.classList.add("fade-out");
      });

      const oldPoints = gameState.scores[topicId] || 0;
      const newPoints = oldPoints + 1;
      gameState.scores[topicId] = newPoints;
      session.score += 1;
      saveProgress();

      checkGrowth(topicId, oldPoints, newPoints);
      updateMascotUI();
      triggerFeedingAnimation(optionButtons[selectedIdx]);

      setMascotMood("happy");
      sayRandomSpeech("correct");

      elFeedbackPanel.className = "feedback-panel success";
      elFeedbackIcon.textContent = "✨";
      elFeedbackTitle.textContent = "✨ Správně!";
      elFeedbackExplanation.textContent = question.explanation;

    } else {
      optionButtons[selectedIdx].classList.add("selected-incorrect");
      optionButtons[question.answer].classList.add("show-correct");
      optionButtons.forEach((btn, i) => {
        if (i !== selectedIdx && i !== question.answer) btn.classList.add("fade-out");
      });

      setMascotMood("sad");
      sayRandomSpeech("incorrect");

      elFeedbackPanel.className = "feedback-panel error";
      elFeedbackIcon.textContent = "💡";
      elFeedbackTitle.textContent = "💡 Tahle odpověď není správně";

      const selectedText = question.options[selectedIdx];
      const correctText  = question.options[question.answer];
      elFeedbackExplanation.textContent =
        `Vybráno: „${selectedText}" — tato možnost není správně.\n` +
        `Správně mělo být: „${correctText}".\n\n` +
        question.explanation;
    }

    elFeedbackPanel.style.display = "flex";
    elBtnNextQuestion.disabled = false;
  }

  // ============================================================
  // RŮST PŘÍŠERKY
  // ============================================================
  function checkGrowth(topicId, oldPoints, newPoints) {
    const oldStage = getMascotStage(oldPoints);
    const newStage = getMascotStage(newPoints);

    if (oldStage.id !== newStage.id) {
      // Přidělíme náhodný doplněk při dosažení dospělce
      if (newStage.id === "adult" && !gameState.accessories[topicId]) {
        const accs = CONFIG.accessories;
        if (accs.length > 0) {
          gameState.accessories[topicId] = accs[Math.floor(Math.random() * accs.length)].id;
          saveProgress();
        }
      }

      setTimeout(() => triggerConfettiCelebration(newStage.id), 500);

      setTimeout(() => {
        if (newStage.id === "baby") {
          elMascotSpeech.textContent = "Jupí! Vyklubal jsem se z vajíčka! 🐣 Teď jsem roztomilé mládě!";
        } else if (newStage.id === "adult") {
          const accId  = gameState.accessories[topicId];
          const accName = CONFIG.accessories.find(a => a.id === accId)?.name || "doplněk";
          elMascotSpeech.textContent = `Hurááá! Stal se ze mě dospělec! 🌟 A podívej, mám nový doplněk: ${accName}!`;
        }
      }, 1200);
    }
  }

  // ============================================================
  // ANIMACE KRMENÍ
  // ============================================================
  function triggerFeedingAnimation(sourceButton) {
    const btnRect     = sourceButton.getBoundingClientRect();
    const mascotWrap  = document.getElementById("quiz-mascot-wrapper");
    if (!mascotWrap) return;
    const mascotRect  = mascotWrap.getBoundingClientRect();

    const particle = document.createElement("div");
    particle.className = "food-particle";
    const foodEmojis = ["🍪", "🍎", "🍓", "🍬", "🧁", "🍩", "🧀", "🥕", "📚", "⭐"];
    particle.textContent = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];

    particle.style.cssText = `
      left: ${btnRect.left + btnRect.width / 2 - 10}px;
      top:  ${btnRect.top  + btnRect.height / 2 - 10}px;
      position: fixed;
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      z-index: 9999;
    `;
    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.left      = `${mascotRect.left + mascotRect.width / 2 - 10}px`;
      particle.style.top       = `${mascotRect.top  + mascotRect.height / 2 + 10}px`;
      particle.style.transform = "scale(1.5) rotate(360deg)";
      particle.style.opacity   = "0.8";
    });

    setTimeout(() => particle.remove(), 850);
  }

  // ============================================================
  // KONFETY
  // ============================================================
  function triggerConfettiCelebration(stageId) {
    if (typeof confetti !== "function") return;

    if (stageId === "baby") {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    } else if (stageId === "adult") {
      const end = Date.now() + 2500;
      (function frame() {
        confetti({ particleCount: 5, angle: 60,  spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      }());
    }
  }

  // ============================================================
  // EVENT LISTENERY
  // ============================================================
  function setupEventListeners() {

    // --- Výběr verze na rozcestníku ---
    const cardHistory  = document.getElementById("card-select-history");
    const cardBiology  = document.getElementById("card-select-biology");

    if (cardHistory) {
      cardHistory.querySelector(".btn-launch-version").addEventListener("click", () => {
        launchVersion("history");
      });
    }
    if (cardBiology) {
      cardBiology.querySelector(".btn-launch-version").addEventListener("click", () => {
        launchVersion("biology");
      });
    }

    // --- Tlačítko Domů ---
    elBtnGoHome.addEventListener("click", () => {
      showScreen(elLandingScreen);
      elBtnGoHome.style.display    = "none";
      elBtnResetAll.style.display  = "none";
      resetThemeToDefault();
      // Obnov výchozí titulky
      elMainTitle.textContent    = "Edukativní Líheň";
      elMainSubtitle.textContent = "Vychovej si své pomocníky správnými odpověďmi!";
    });

    // --- Zpět do lobby ---
    elBtnBackToLobby.addEventListener("click", () => {
      resetThemeToDefault();
      applyTopicTheme({ theme: { primaryColor: "#6366f1", accentColor: "#e0e7ff", gradientStart: "#4f46e5", gradientEnd: "#6366f1" }});
      // Aplikuj téma lobbys podle verze
      renderLobby();
      showScreen(elLobbyScreen);
    });

    // --- Pokračovat na další otázku ---
    elBtnNextQuestion.addEventListener("click", () => {
      const session = gameState.quizSession;
      session.currentIndex += 1;

      if (session.currentIndex >= session.questions.length) {
        // Otočit dokola
        session.questions  = shuffleArray([...gameState.currentTopic.questions]);
        session.currentIndex = 0;
      }

      // Re-aplikujeme téma aktivního tématu (pro správné barvy příšerky)
      applyTopicTheme(gameState.currentTopic);

      renderQuestion();

      const points = gameState.scores[gameState.currentTopic.id] || 0;
      sayRandomSpeech(getMascotStage(points).id);
    });

    // --- Reset ---
    elBtnResetAll.addEventListener("click", () => {
      if (confirm("Opravdu chceš smazat všechny body a začít se všemi příšerkami znovu od vajíčka?")) {
        resetState();
        renderLobby();
        if (typeof confetti === "function") {
          confetti({ particleCount: 40, angle: 270, spread: 40, origin: { y: 0.1 } });
        }
      }
    });
  }

  // ============================================================
  // HELPERS
  // ============================================================
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // ============================================================
  // START
  // ============================================================
  init();
});
