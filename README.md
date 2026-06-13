# 🐣 Edukativní Líheň — Vychovej si příšerku

> Edukativní kvízová hra pro žáky základní školy. Odpovídej správně, krm příšerky a sleduj, jak z vajíčka vyroste roztomilé mládě a pak velký dospělec s parádním doplňkem!

---

## 🎮 Jak hrát

1. Na **rozcestníku** vyber verzi hry — **Dějepis** nebo **Přírodověda**.
2. Vyber si **téma** (např. Komunismus, Trávicí soustava…).
3. Odpovídej na **kvízové otázky** (výběr A–D nebo Pravda/Lež).
4. Každá správná odpověď = **+1 bod → krmení příšerky** 🍎
5. Po **10 bodech** se příšerka vyklube z vajíčka → **Mládě** 🐣  
   Po **30 bodech** vyroste na **Dospělce** s náhodným doplňkem ⭐  
6. Pokud dojdou otázky, točí se dokola — sbírej body dál!

---

## 🗺️ Přímé odkazy na verze

Hru je možné odkázat přímo na konkrétní verzi pomocí URL parametru `?v=`:

| Verze | URL |
|---|---|
| Rozcestník (výběr) | `index.html` |
| Dějepisná verze | `index.html?v=history` |
| Přírodovědná verze | `index.html?v=biology` |

---

## 📚 Obsah témat

### 🇨🇿 Dějepisná verze (Moderní dějiny ČR)

| Maskot | Téma | Popis |
|---|---|---|
| 🖋️ Buditeláček | Národní obrození | Od obrody češtiny po průmyslovou revoluci a secesi |
| 🪖 Bojovníček | 1. světová válka | Příčiny války, legie a vznik Československa |
| 🦅 Sokolík | První republika | Masaryk, demokracie, hospodářský vzestup |
| 🪖 Odbojáček | Protektorát a 2. sv. válka | Nacistická okupace, odboj a osvobození |
| 🔴 Svobodníček | Komunismus | Únor 1948, normalizace, sametová revoluce |

### 🔬 Přírodovědná verze (Lidské tělo — demo)

| Maskot | Téma |
|---|---|
| 🟠 Bříškoun | Trávicí soustava |
| 🔵 Plícník | Dýchací soustava |
| 🩷 Buněk | Rozmnožovací soustava a buňka |

---

## 🛠️ Technologie

- **Čistý HTML5 / CSS3 / ES6 JavaScript** — žádné závislosti, žádný build krok
- Příšerky jsou vykresleny **čistě v CSS** (elipsy, gradients, clip-path, animace)
- **LocalStorage** — ukládání pokroku (odděleně pro každou verzi)
- **[canvas-confetti](https://github.com/catdad/canvas-confetti)** — oslavné konfety při vylíhnutí přes CDN
- **Google Fonts** — Fredoka + Outfit

---

## 📁 Struktura projektu

```
SimiHistoHra/
├── index.html       # Jediná HTML stránka (SPA)
├── config.js        # Data: témata, otázky, prahy, barvy
├── app.js           # Logika hry, routing, animace
├── style.css        # Design systém, CSS příšerky, doplňky
├── merge.js         # Build helper: slučuje history/*.txt do config.js
├── README.md        # Tento soubor
│
└── history/         # Zdrojové otázky z dějepisných textů
    ├── narodni_obrozeni.txt
    ├── prvni_svetova_valka.txt
    ├── prvni_republika.txt
    ├── protektorat.txt
    └── komunismusm.txt
```

---

## ⚙️ Modifikovatelnost (Modding)

Všechna herní data jsou oddělena od kódu v souboru **`config.js`**. Díky tomu lze:

- ✏️ **Přidávat/měnit otázky** bez dotýkání se logiky — stačí editovat pole `questions` v příslušném tématu
- 🎨 **Měnit barevné schema** každého tématu (`theme.primaryColor`, `gradientStart`, `gradientEnd`)
- 🐉 **Přidávat nová témata** — přidej objekt do pole `topics` se svými otázkami, barvami a jménem maskota
- 🎩 **Přidávat doplňky** — přidej objekt do pole `accessories` a odpovídající CSS třídu do `style.css`
- 📈 **Měnit prahy** — hodnoty `thresholds.baby` (výchozí: 10) a `thresholds.adult` (výchozí: 30)

### Formát otázky

```js
{
  type: "abcd",          // nebo "boolean"
  question: "Text otázky?",
  options: ["A", "B", "C", "D"],
  answer: 0,             // Index správné odpovědi (0-based)
  explanation: "Vysvětlení, které se zobrazí po odpovědi."
}
```

---

## 🚀 Spuštění

Stačí otevřít `index.html` v prohlížeči (i přes `file://` protokol — bez serveru).

```bash
# Nebo pokud preferuješ lokální server:
npx serve .
```

---

## 🙏 Inspirace a poděkování

Tato hra byla inspirována projektem **[Informatická líheň](https://informaticka-lihen.lovable.app/)** — skvělou edukativní hrou pro procvičování informatiky, kde hráč krmí příšerky správnými odpověďmi. Velké díky autorům za krásný a motivující koncept! 🎉

Dějepisné otázky jsou zpracovány z učebnice dějepisu pro 5. třídu ZŠ.

---

## 📄 Licence

Volné použití pro vzdělávací účely.
