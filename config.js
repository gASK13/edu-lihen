/**
 * Hra: Líheň příšerek
 * Konfigurační soubor obsahující verze pro Dějepis i Přírodovědu.
 */

const CONFIG_BIOLOGY = {
  gameTitle: "Přírodovědná Líheň",
  gameSubtitle: "Vychovej si své pomocníky z biologie správnými odpověďmi!",
  thresholds: {
    baby: 5,
    adult: 10
  },
  accessories: [
    { id: "glasses", name: "Chytré brýle", cssClass: "acc-glasses" },
    { id: "hat", name: "Elegantní cylindr", cssClass: "acc-hat" },
    { id: "bowtie", name: "Červený motýlek", cssClass: "acc-bowtie" },
    { id: "crown", name: "Zlatá korunka", cssClass: "acc-crown" }
  ],
  topics: [
  {
    "id": "digestive",
    "title": "Trávicí soustava",
    "description": "Zjisti, jak tělo zpracovává jídlo a získává z něj sílu!",
    "mascotName": "Bříškoun",
    "mascotType": "digestive",
    "theme": {
      "primaryColor": "#f97316",
      "accentColor": "#ffedd5",
      "gradientStart": "#ff8008",
      "gradientEnd": "#ffc837"
    },
    "questions": [
      {
        "type": "abcd",
        "question": "Kde začíná trávicí soustava člověka?",
        "options": [
          "V žaludku",
          "V ústní dutině",
          "V tenkém střevě",
          "V jícnu"
        ],
        "answer": 1,
        "explanation": "Trávení začíná v ústní dutině, kde zuby potravu rozmělní a sliny ji začnou chemicky rozkládat."
      },
      {
        "type": "abcd",
        "question": "Který orgán je nejdelší částí trávicí soustavy a dochází v něm k hlavnímu vstřebávání živin?",
        "options": [
          "Žaludek",
          "Tlusté střevo",
          "Tenké střevo",
          "Jícen"
        ],
        "answer": 2,
        "explanation": "Tenké střevo dospělého člověka je dlouhé asi 5 až 6 metrů a vstřebává se v něm většina živin z potravy do krve."
      },
      {
        "type": "abcd",
        "question": "Jaká je hlavní funkce tlustého střeva?",
        "options": [
          "Vstřebávání vody a zahušťování zbytků potravy",
          "Mletí potravy pomocí kyseliny chlorovodíkové",
          "Výroba žluči pro trávení tuků",
          "Vdechování kyslíku"
        ],
        "answer": 0,
        "explanation": "V tlustém střevě se ze zbytků potravy vstřebává voda a minerální látky, čímž se nestrávený obsah zahušťuje."
      },
      {
        "type": "abcd",
        "question": "Který velký orgán produkuje žluč, jež pomáhá tělu trávit tuky?",
        "options": [
          "Slinivka břišní",
          "Ledviny",
          "Játra",
          "Srdce"
        ],
        "answer": 2,
        "explanation": "Játra jsou největším vnitřním orgánem těla. Produkují žluč, která se ukládá ve žlučníku a pomáhá štěpit tuky."
      },
      {
        "type": "boolean",
        "question": "Žaludek produkuje silnou kyselinu chlorovodíkovou, která pomáhel rozkládat potravu a ničí choroboplodné zárodky.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Žaludeční šťávy obsahují kyselinu chlorovodíkovou a enzymy, které štěpí bílkoviny a pomáhají chránit tělo před infekcí z potravy."
      },
      {
        "type": "abcd",
        "question": "Která trubice spojuje ústní dutinu se žaludkem?",
        "options": [
          "Průdušnice",
          "Jícen",
          "Tenké střevo",
          "Močovod"
        ],
        "answer": 1,
        "explanation": "Jícen je svalová trubice, která posouvá sousta potravy z úst do žaludku pomocí vlnivých pohybů (peristaltiky)."
      },
      {
        "type": "boolean",
        "question": "Zuby slouží pouze k mluvení a nemají s trávicí soustavou nic společného.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež! Zuby jsou počátečním mechanickým článkem trávicí soustavy. Bez nich bychom nemohli potravu rozkousat na menší kousky."
      }
    ]
  },
  {
    "id": "respiratory",
    "title": "Dýchací soustava",
    "description": "Prozkoumej, jak tělo získává kyslík ze vzduchu a jak vydechuje odpadní látky!",
    "mascotName": "Plícník",
    "mascotType": "respiratory",
    "theme": {
      "primaryColor": "#0ea5e9",
      "accentColor": "#e0f2fe",
      "gradientStart": "#00c6ff",
      "gradientEnd": "#0072ff"
    },
    "questions": [
      {
        "type": "abcd",
        "question": "Který plyn vdechujeme ze vzduchu a je naprosto nezbytný pro život našich buněk?",
        "options": [
          "Oxid uhličitý",
          "Dusík",
          "Kyslík",
          "Vodík"
        ],
        "answer": 2,
        "explanation": "Při nadechnutí dostáváme do těla kyslík, který buňky využívají k tvorbě energie pro pohyb a růst."
      },
      {
        "type": "abcd",
        "question": "Který plyn vydechujeme jako odpadní produkt práce našeho těla?",
        "options": [
          "Kyslík",
          "Oxid uhličitý",
          "Helium",
          "Vodní páru"
        ],
        "answer": 1,
        "explanation": "Buňky při své práci produkují oxid uhličitý jako odpad. Ten putuje krví zpět do plic, odkud ho vydechujeme."
      },
      {
        "type": "abcd",
        "question": "Kde přesně v plicích dochází k výměně plynů mezi vzduchem a krví?",
        "options": [
          "V průduškách",
          "V plicních sklípcích",
          "V nosohltanu",
          "V bránici"
        ],
        "answer": 1,
        "explanation": "Výměna plynů probíhá v plicních sklípcích (alveolách). Jsou to mikroskopické bublinky obklopené tenoučkými cévami."
      },
      {
        "type": "abcd",
        "question": "Jak se nazývá plochý sval pod plícemi, který se při nádechu stahuje dolů a je hlavním dýchacím svalem?",
        "options": [
          "Bránice",
          "Srdce",
          "Břišní sval",
          "Mezižeberní sval"
        ],
        "answer": 0,
        "explanation": "Bránice je nejdůležitější dýchací sval. Její pohyb dolů nasává vzduch do plic, její uvolnění směrem nahoru vzduch vyfukuje."
      },
      {
        "type": "boolean",
        "question": "Prach a nečistoty ze vzduchu jsou v našich dýchacích cestách zachycovány drobnými řasinkami a hlenem.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Sliznice dýchacích cest obsahuje řasinky a hlen. Ty fungují jako přírodní filtr, který zachytí prach a mikroby a posouvá je ven."
      },
      {
        "type": "abcd",
        "question": "Co tvoří ochrannou klec kolem našich plic a srdce, aby se nezranily?",
        "options": [
          "Páteř",
          "Žebra a hrudní kost",
          "Žaludek",
          "Kůže"
        ],
        "answer": 1,
        "explanation": "Hrudní koš složený z žeber a hrudní kosti tvoří pevnou schránku chránící citlivé plíce a srdce před vnějšími nárazy."
      },
      {
        "type": "boolean",
        "question": "Plíce jsou jako dva velké prázdné nafukovací balónky bez jakékoliv vnitřní struktury.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež! Plíce mají houbovitou strukturu a větví se do milionů drobných průdušinek zakončených sklípky. Nejsou to prázdné vaky."
      }
    ]
  },
  {
    "id": "reproductive",
    "title": "Rozmnožovací soustava",
    "description": "Poznej základy buňky, dědičnosti a jak začíná nový lidský život!",
    "mascotName": "Buněk",
    "mascotType": "reproductive",
    "theme": {
      "primaryColor": "#ec4899",
      "accentColor": "#fce7f3",
      "gradientStart": "#f857a6",
      "gradientEnd": "#ff5858"
    },
    "questions": [
      {
        "type": "abcd",
        "question": "Jak se nazývá základní stavební jednotka všech živých organismů, ze které se skládá i lidské tělo?",
        "options": [
          "Orgán",
          "Tkáň",
          "Buňka",
          "Kost"
        ],
        "answer": 2,
        "explanation": "Buňka je základní jednotkou života. Naše tělo je složeno z bilionů různých buněk (svalových, kostních, nervových atd.)."
      },
      {
        "type": "abcd",
        "question": "Jak se nazývá splynutí mužské pohlavní buňky (spermie) a ženské pohlavní buňky (vajíčka)?",
        "options": [
          "Dělení",
          "Oplodnění",
          "Růst",
          "Dýchání"
        ],
        "answer": 1,
        "explanation": "Oplodnění je okamžik, kdy se spojí informace ze spermie a vajíčka, čímž vznikne první buňka nového človíčka."
      },
      {
        "type": "abcd",
        "question": "Kde v těle maminky roste a vyvíjí se miminko před svým narozením?",
        "options": [
          "V žaludku",
          "V děloze",
          "Ve vaječníku",
          "V močovém měchýři"
        ],
        "answer": 1,
        "explanation": "Miminko roste v děloze. Je to pružný svalový orgán, který se dokáže zvětšit a chrání plod po dobu 9 měsíců těhotenství."
      },
      {
        "type": "abcd",
        "question": "Která část buňky nese dědičné informace a geny, které určují například barvu očí nebo vlasů?",
        "options": [
          "Krev",
          "Jádro buňky s DNA",
          "Buněčná stěna",
          "Svalové vlákno"
        ],
        "answer": 1,
        "explanation": "V jádru každé buňky je uložena DNA ve formě chromozomů. Zde jsou zapsány geny určující naše dědičné vlastnosti."
      },
      {
        "type": "boolean",
        "question": "Pohlavní buňky (spermie a vajíčka) linemen přesně poloviční počet chromozomů než ostatní běžné buňky v těle.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda! Běžná buňka má 46 chromozomů. Spermie a vajíčka mají 23 chromozomů, aby po jejich spojení mělo miminko opět správný počet 46."
      },
      {
        "type": "boolean",
        "question": "Všechny vlastnosti dítěte jsou určeny pouze a jen matkou; otec nepředává žádné dědičné informace.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež! Dítě dědí přesně polovinu genetických informací od matky a druhou polovinu od otce."
      }
    ]
  }
]
};

const CONFIG_HISTORY = {
  gameTitle: "Dějepisná Líheň",
  gameSubtitle: "Provázej příšerky moderní historií ČR od národního obrození po komunismus!",
  thresholds: {
    baby: 10,
    adult: 30
  },
  accessories: [
    { id: "glasses", name: "Chytré brýle", cssClass: "acc-glasses" },
    { id: "hat", name: "Elegantní cylindr", cssClass: "acc-hat" },
    { id: "bowtie", name: "Červený motýlek", cssClass: "acc-bowtie" },
    { id: "crown", name: "Zlatá korunka", cssClass: "acc-crown" }
  ],
  topics: [
  {
    "id": "obrozeni",
    "title": "Národní obrození",
    "description": "Jak čeština chytila druhý dech a zrodil se moderní český národ!",
    "mascotName": "Buditeláček",
    "mascotType": "obrozeni",
    "theme": {
      "primaryColor": "#d97706",
      "accentColor": "#fef3c7",
      "gradientStart": "#f59e0b",
      "gradientEnd": "#d97706"
    },
    "questions": [
      {
        "type": "abcd",
        "question": "Kdo mluvil v českých zemích česky na počátku národního obrození?",
        "options": [
          "Šlechta a bohatí měšťané",
          "Pouze učitelé a vědci",
          "Prostí lidé, především na venkově",
          "Císař a jeho dvůr"
        ],
        "answer": 2,
        "explanation": "Vzdělaní lidé, měšťané a šlechta mluvili převážně německy. Čeština se zachovala hlavně díky prostým lidem na venkově."
      },
      {
        "type": "abcd",
        "question": "Která událost z roku 1789 přinesla do Evropy myšlenky volnosti, rovnosti a bratrství?",
        "options": [
          "Průmyslová revoluce",
          "Třicetiletá válka",
          "Husitské války",
          "Velká francouzská revoluce"
        ],
        "answer": 3,
        "explanation": "Velká francouzská revoluce šířila přesvědčení, že lidé se rodí svobodní a rovní, což ovlivnilo celou Evropu."
      },
      {
        "type": "abcd",
        "question": "Co byla tzv. Česká expedice, kterou založil Václav Matěj Kramerius?",
        "options": [
          "Tajná vojenská organizace",
          "Vydavatelství a knihkupectví českých novin a knih",
          "Spolek cestovatelů do Ameriky",
          "První česká univerzita"
        ],
        "answer": 1,
        "explanation": "Česká expedice pomáhala šířit češtinu vydáváním prvních českých novin a knih pro širší veřejnost."
      },
      {
        "type": "abcd",
        "question": "Kdo se nejvíce zasloužil o zdokonalení češtiny a tvorbu nových českých odborných slov?",
        "options": [
          "Josef Jungmann",
          "Karel IV.",
          "Jan Hus",
          "František Josef I."
        ],
        "answer": 0,
        "explanation": "Josef Jungmann vytvořil rozsáhlý slovník, vymýšlel nová slova a ukázal, že čeština může sloužit i pro vědu a moderní literaturu."
      },
      {
        "type": "abcd",
        "question": "Ve které divadelní hře poprvé zazněla píseň Kde domov můj?",
        "options": [
          "Libuše",
          "Prodaná nevěsta",
          "Fidlovačka aneb Žádný hněv a žádná rvačka",
          "Rusalka"
        ],
        "answer": 2,
        "explanation": "Píseň zazněla ve hře Josefa Kajetána Tyla s názvem Fidlovačka a rychle zlidověla."
      },
      {
        "type": "abcd",
        "question": "Kdo složil hudbu k dnešní státní hymně Kde domov můj?",
        "options": [
          "Antonín Dvořák",
          "Bedřich Smetana",
          "František Škroup",
          "Leoš Janáček"
        ],
        "answer": 2,
        "explanation": "Autorem hudby k písni Kde domov můj je skladatel František Škroup."
      },
      {
        "type": "abcd",
        "question": "Jak se jmenovala oblíbená loutková postava, kterou u nás proslavil Matěj Kopecký?",
        "options": [
          "Spejbl",
          "Kašpárek",
          "Hurvínek",
          "Mánička"
        ],
        "answer": 1,
        "explanation": "Matěj Kopecký jezdil s loutkovým divadlem po venkově a jeho nejznámější postavou byl Kašpárek."
      },
      {
        "type": "abcd",
        "question": "Který historik a politik napsal dílo Dějiny národu českého v Čechách a v Moravě?",
        "options": [
          "František Palacký",
          "Alois Jirásek",
          "Karel Havlíček Borovský",
          "Karel Jaromír Erben"
        ],
        "answer": 0,
        "explanation": "František Palacký tímto dílem podpořil národní hrdost a sebevědomí Čechů."
      },
      {
        "type": "abcd",
        "question": "Čemu se věnovali spisovatelé Božena Němcová a Karel Jaromír Erben?",
        "options": [
          "Sbírali lidové pohádky a pověsti",
          "Psali učebnice matematiky",
          "Vymýšleli nová technická slova",
          "Překládali z němčiny do latiny"
        ],
        "answer": 0,
        "explanation": "Cestovali mezi prostými lidmi a zapisovali ústně tradované pohádky a lidové příběhy."
      },
      {
        "type": "boolean",
        "question": "Po porážce revoluce v roce 1848 bylo konečně zrušeno poddanství a s ním spojená robota.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Ačkoliv revoluce nedosáhla všech cílů, z poddaných se stali svobodní občané a nemuseli již robotovat pro šlechtu."
      },
      {
        "type": "boolean",
        "question": "Během průmyslové revoluce měli dělníci výborné pracovní podmínky a vysoké platy.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Dělníci pracovali až 16 hodin denně, měli nízké mzdy, a dokonce i děti musely pracovat v továrnách."
      },
      {
        "type": "abcd",
        "question": "Jaký vynález z Británie nastartoval průmyslovou revoluci a nahradil lidskou práci v továrnách?",
        "options": [
          "Elektromotor",
          "Parní stroj",
          "Spalovací motor",
          "Knihtisk"
        ],
        "answer": 1,
        "explanation": "Parní stroj, který zdokonalil James Watt, umožnil masivní rozvoj továren a železnice."
      },
      {
        "type": "abcd",
        "question": "Který český vynález bratrance Veverkových usnadnil zemědělcům práci na poli?",
        "options": [
          "Traktor",
          "Secí stroj",
          "Ruchadlo",
          "Kombajn"
        ],
        "answer": 2,
        "explanation": "Ruchadlo byl speciální typ pluhu, který půdu nejen kypřil, ale rovnou ji i obracel."
      },
      {
        "type": "abcd",
        "question": "Pro jaký architektonický sloh z přelomu 18. a 19. století jsou typické antické sloupy a trojúhelníkové štíty?",
        "options": [
          "Gotika",
          "Baroko",
          "Secese",
          "Klasicismus (empír)"
        ],
        "answer": 3,
        "explanation": "Klasicismus se inspiroval starověkým Řeckem a Římem, empírový sloh prosazoval např. Napoleon."
      },
      {
        "type": "abcd",
        "question": "Který český novinář ostře kritizoval vládu po roce 1848 a byl za to poslán do vyhnanství v Brixenu?",
        "options": [
          "František Palacký",
          "Karel Havlíček Borovský",
          "Josef Kajetán Tyl",
          "Karel Hynek Mácha"
        ],
        "answer": 1,
        "explanation": "Karel Havlíček Borovský se nevzdal svých názorů ani v době přísné cenzury, proto ho úřady násilně přestěhovaly do Alp."
      },
      {
        "type": "abcd",
        "question": "V roce 1867 se habsburská říše rozdělila na dva rovnoprávné celky. Jaké?",
        "options": [
          "Česko a Slovensko",
          "Rakousko a Uhersko",
          "Německo a Itálie",
          "Rakousko a Česko"
        ],
        "answer": 1,
        "explanation": "Vzniklo Rakousko-Uhersko. Češi bohužel svou samosprávu nezískali, což vedlo k nespokojenosti."
      },
      {
        "type": "abcd",
        "question": "Z jakých prostředků byla převážně financována stavba Národního divadla v Praze?",
        "options": [
          "Z darů od císaře",
          "Ze státních daní",
          "Z celonárodních veřejných sbírek",
          "Z prodeje vstupenek z jiných divadel"
        ],
        "answer": 2,
        "explanation": "Lidé pořádali sbírky (Heslo: Národ sobě), na divadlo přispívali jak bohatí měšťané, tak chudí lidé."
      },
      {
        "type": "abcd",
        "question": "Jakou slavnostní operou od Bedřicha Smetany se poprvé otevíralo Národní divadlo?",
        "options": [
          "Prodaná nevěsta",
          "Rusalka",
          "Čert a Káča",
          "Libuše"
        ],
        "answer": 3,
        "explanation": "Opera Libuše byla napsána přímo pro slavnostní příležitosti národa a dodnes se hraje jen při výjimečných událostech."
      },
      {
        "type": "boolean",
        "question": "Krátce po otevření v roce 1881 Národní divadlo vyhořelo.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Divadlo bylo ale díky obrovské vlně vlastenectví velmi rychle znovu postaveno a otevřeno roku 1883."
      },
      {
        "type": "abcd",
        "question": "Jak se jmenoval vlastenecký tělocvičný spolek založený roku 1862?",
        "options": [
          "Skaut",
          "Sokol",
          "Orel",
          "Junák"
        ],
        "answer": 1,
        "explanation": "Sokol pořádal nejen pravidelná cvičení, ale i slavnostní slety a výlety. Velmi tím posiloval národní sebevědomí."
      },
      {
        "type": "abcd",
        "question": "Co bylo hlavní atrakcí Zemské jubilejní výstavy v Praze (1891), kterou zkonstruoval F. Křižík?",
        "options": [
          "První parní vlak",
          "Světelná fontána",
          "Národní divadlo",
          "První letadlo"
        ],
        "answer": 1,
        "explanation": "Křižíkova světelná fontána stříkala vodu desítky metrů vysoko a byla barevně osvětlena elektrickými lampami."
      },
      {
        "type": "abcd",
        "question": "Jak se jmenoval první u nás továrně vyrobený automobil z roku 1895?",
        "options": [
          "Škoda Fabia",
          "Laurin a Klement",
          "Tatra 603",
          "Präsident"
        ],
        "answer": 3,
        "explanation": "Automobil Präsident byl vyroben v Kopřivnici na Moravě."
      },
      {
        "type": "boolean",
        "question": "Koncem 19. století začaly být parní stroje v továrnách pomalu nahrazovány elektromotory.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Elektřina přinesla technicko-vědeckou revoluci. Byla levnější, účinnější a začala pohánět i tramvaje a osvětlovat města."
      },
      {
        "type": "abcd",
        "question": "Jaký architektonický sloh, inspirovaný přírodou a rostlinnými motivy, převládal na přelomu 19. a 20. století?",
        "options": [
          "Baroko",
          "Gotika",
          "Secese",
          "Románský sloh"
        ],
        "answer": 2,
        "explanation": "Secese je charakteristická obrovskou zdobností, rostlinnými ornamenty a použitím materiálů jako ocel a sklo."
      },
      {
        "type": "abcd",
        "question": "Který český malíř se na konci 19. století celosvětově proslavil v secesním stylu?",
        "options": [
          "Josef Mánes",
          "Alfons Mucha",
          "Josef Václav Myslbek",
          "Mikoláš Aleš"
        ],
        "answer": 1,
        "explanation": "Alfons Mucha proslul svými secesními plakáty a obrazy nejen u nás, ale i v Paříži a USA."
      },
      {
        "type": "abcd",
        "question": "Které významné dílo vytvořil malíř Josef Mánes pro Staroměstský orloj?",
        "options": [
          "Sochu svatého Václava",
          "Zlatý kalich",
          "Kalendárium",
          "Obraz Libuše"
        ],
        "answer": 2,
        "explanation": "Mánes namaloval slavnou desku s 12 medailony představujícími měsíce v roce. Dnes je na orloji kopie."
      },
      {
        "type": "abcd",
        "question": "Kdo je autorem slavné sochy svatého Václava na koni, která stojí na Václavském náměstí v Praze?",
        "options": [
          "František Palacký",
          "Josef Václav Myslbek",
          "Alfons Mucha",
          "Josef Jungmann"
        ],
        "answer": 1,
        "explanation": "J. V. Myslbek byl jedním z nejvýznamnějších sochařů konce 19. století."
      },
      {
        "type": "abcd",
        "question": "Který světově proslulý český skladatel napsal hudební díla jako Rusalka či Symfonie Z Nového světa?",
        "options": [
          "Antonín Dvořák",
          "Bedřich Smetana",
          "František Škroup",
          "Leo Janáček"
        ],
        "answer": 0,
        "explanation": "Antonín Dvořák je jedním z nejslavnějších českých skladatelů, jeho hudba je hrána po celém světě."
      },
      {
        "type": "abcd",
        "question": "Do kolika let věku se po zavedení povinné školní docházky v 19. století musely děti vzdělávat?",
        "options": [
          "Od 6 do 10 let",
          "Od 6 do 14 let",
          "Od 8 do 12 let",
          "Od 7 do 15 let"
        ],
        "answer": 1,
        "explanation": "Díky této reformě téměř všichni v českých zemích uměli číst a psát, a to včetně dívek."
      },
      {
        "type": "abcd",
        "question": "Co to byla tzv. Minerva, založená v Praze roku 1890?",
        "options": [
          "První továrna na šicí stroje",
          "První dívčí gymnázium",
          "Nová odrůda pšenice",
          "Obchodní společnost"
        ],
        "answer": 1,
        "explanation": "Šlo o první gymnázium pro dívky, díky kterému mohly ženy později začít studovat i na univerzitě."
      },
      {
        "type": "boolean",
        "question": "Před první světovou válkou vznikl organizovaný spolek pro mládež s názvem Skaut (Junák).",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Skauting se k nám dostal před první světovou válkou a učil děti lásce k přírodě, morálce a samostatnosti."
      },
      {
        "type": "abcd",
        "question": "Jak se nazývaly domy se společným sociálním zařízením na chodbě, ve kterých bydlely dělnické rodiny?",
        "options": [
          "Zámky",
          "Vily",
          "Pavlačové domy",
          "Paneláky"
        ],
        "answer": 2,
        "explanation": "V bytech o jedné místnosti na tzv. pavlačích (venkovních chodbách) se tísnily početné dělnické rodiny s minimálním komfortem."
      },
      {
        "type": "abcd",
        "question": "Která plodina se začala více pěstovat v souvislosti s rozvojem cukrovarnictví?",
        "options": [
          "Pšenice",
          "Kukuřice",
          "Řepa cukrovka",
          "Brambory"
        ],
        "answer": 2,
        "explanation": "Potravinářský průmysl v českých zemích obrovsky rostl a české cukrovary patřily k nejlepším na světě."
      },
      {
        "type": "abcd",
        "question": "Co znamenal termín 'cenzura', který zavedl režim před rokem 1848 (a znovu po něm)?",
        "options": [
          "Povinnost pěstovat brambory",
          "Úřední kontrola a zákaz vydávání nepohodlných novin a knih",
          "Povolení k výstavbě železnice",
          "Odměna pro nejlepší učitele"
        ],
        "answer": 1,
        "explanation": "Vláda nechtěla, aby se šířily myšlenky o rovnoprávnosti, proto policie kontrolovala tiskoviny."
      },
      {
        "type": "boolean",
        "question": "Práce dětí mladších 9 let (později 12 let) byla v továrnách od roku 1842 zakázána.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Předtím musely v továrnách pracovat i malé děti, a to za pouhou poloviční mzdu. Až tento zákon zavedl aspoň základní ochranu."
      }
    ]
  },
  {
    "id": "prvni_valka",
    "title": "1. světová válka",
    "description": "Období velkého konfliktu a zrodu československých legií.",
    "mascotName": "Bojovníček",
    "mascotType": "prvni_valka",
    "theme": {
      "primaryColor": "#64748b",
      "accentColor": "#f1f5f9",
      "gradientStart": "#94a3b8",
      "gradientEnd": "#475569"
    },
    "questions": [
      {
        "type": "abcd",
        "question": "Proč před válkou narůstalo napětí mezi nejvýznamnějšími evropskými státy?",
        "options": [
          "Kvůli náboženským rozdílům",
          "Z důvodu boje o vlastnictví kolonií a nerovnoměrného vývoje",
          "Kvůli vynálezu nových zbraní",
          "Z důvodu snahy sjednotit Evropu"
        ],
        "answer": 1,
        "explanation": "Příčinou byl nerovnoměrný hospodářský vývoj a snaha o získání výhod plynoucích z vlastnictví kolonií v Africe a Asii."
      },
      {
        "type": "abcd",
        "question": "Který panovnický rod vládl v době vypuknutí války v naší zemi?",
        "options": [
          "Přemyslovci",
          "Lucemburkové",
          "Habsburkové",
          "Jagellonci"
        ],
        "answer": 2,
        "explanation": "Naše území bylo součástí habsburské monarchie (Rakousko-Uherska)."
      },
      {
        "type": "abcd",
        "question": "Kdy přesně vypukla první světová válka?",
        "options": [
          "Na jaře 1918",
          "V zimě 1916",
          "Na podzim 1915",
          "V létě 1914"
        ],
        "answer": 3,
        "explanation": "Válka vypukla v létě roku 1914."
      },
      {
        "type": "abcd",
        "question": "Co se stalo záminkou k vyhlášení války?",
        "options": [
          "Atentát na následníka trůnu v Sarajevu",
          "Potopení obchodní lodi",
          "Napadení Francie Německem",
          "Nedostatek potravin v Evropě"
        ],
        "answer": 0,
        "explanation": "Záminkou byl úspěšný atentát na synovce císaře, Františka Ferdinanda d'Este, během jeho pobytu v Sarajevu."
      },
      {
        "type": "boolean",
        "question": "Během první světové války se bojovalo výhradně na území Evropy.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Válka zasáhla i Afriku a Asii, zapojily se do ní například i Japonsko a USA. Bojovalo se na souši, na moři i ve vzduchu."
      },
      {
        "type": "abcd",
        "question": "Které nové zbraně se v této válce poprvé ve velkém používaly?",
        "options": [
          "Oštěpy a luky",
          "Meče a štíty",
          "Tanky, kulomety a jedovaté plyny",
          "Laserové pušky"
        ],
        "answer": 2,
        "explanation": "Používaly se nové zbraně – kulomety, dalekonosná děla, tanky, plamenomety a jedovaté plyny."
      },
      {
        "type": "abcd",
        "question": "Co se využívalo k ničení nepřátelských lodí na moři?",
        "options": [
          "Vzducholodě",
          "Ponorky",
          "Tanky",
          "Letadla"
        ],
        "answer": 1,
        "explanation": "K ničení lodí se využívaly ponorky."
      },
      {
        "type": "abcd",
        "question": "Které státy stály na straně takzvané Dohody?",
        "options": [
          "Rakousko-Uhersko a Německo",
          "Velká Británie, Francie a Rusko",
          "Itálie a Turecko",
          "Španělsko a Švýcarsko"
        ],
        "answer": 1,
        "explanation": "Státy tzv. Dohody byly Velká Británie, Francie a Rusko."
      },
      {
        "type": "abcd",
        "question": "Kdo byl hlavním spojencem Rakouska-Uherska v této válce?",
        "options": [
          "Rusko",
          "Francie",
          "Německo",
          "USA"
        ],
        "answer": 2,
        "explanation": "Proti sobě stály na jedné straně Rakousko-Uhersko a Německo."
      },
      {
        "type": "boolean",
        "question": "V roce 1917 byla v Rusku svržena carská vláda a byl zaveden komunistický režim.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Mapa i text učebnice uvádí, že v roce 1917 zde proběhla revoluce a carská vláda byla svržena."
      },
      {
        "type": "abcd",
        "question": "Kdo musel během války zastoupit muže v továrnách a na polích?",
        "options": [
          "Zahraniční dělníci",
          "Ženy a větší děti",
          "Váleční zajatci",
          "Starostové měst"
        ],
        "answer": 1,
        "explanation": "Většina mužů narukovala do armády. Ženy a větší děti je musely zastoupit v továrnách i na polích."
      },
      {
        "type": "abcd",
        "question": "Co byl přídělový systém zavedený během války?",
        "options": [
          "Systém přidělování zbraní vojákům",
          "Určoval, kolik si lidé mohou koupit potravin či uhlí na lístky",
          "Způsob rozdělování půdy rolníkům",
          "Náborový systém do armády"
        ],
        "answer": 1,
        "explanation": "Byl zaveden přídělový systém (lístky), který určoval, kolik si lidé smějí koupit mouky, chleba, cukru atd."
      },
      {
        "type": "boolean",
        "question": "Nedostatek a hlad za války způsobily, že se mezi vyčerpanými lidmi snadno šířily smrtelné epidemie.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Mezi hladovými a vyčerpanými lidmi se snadno šířily epidemie smrtelných nemocí."
      },
      {
        "type": "abcd",
        "question": "Jak se nazývaly dobrovolnické vojenské jednotky Čechů a Slováků v zahraničí?",
        "options": [
          "Družiny",
          "Legie",
          "Prapory",
          "Gardy"
        ],
        "answer": 1,
        "explanation": "Češi společně se Slováky vytvářeli dobrovolnické vojenské jednotky, kterým se začalo říkat legie."
      },
      {
        "type": "abcd",
        "question": "Proti komu československé legie bojovaly?",
        "options": [
          "Proti Francii a Velké Británii",
          "Proti Rusku",
          "Proti Rakousku-Uhersku a Německu",
          "Proti USA"
        ],
        "answer": 2,
        "explanation": "V legiích bojovali Češi a Slováci proti Rakousku-Uhersku a Německu."
      },
      {
        "type": "abcd",
        "question": "Ve kterých státech československé legie především vznikaly?",
        "options": [
          "V Německu a Rakousku",
          "V Rusku, ve Francii a v Itálii",
          "Ve Španělsku a Portugalsku",
          "V Japonsku a Číně"
        ],
        "answer": 1,
        "explanation": "Legie se utvářely ze zajatců a přeběhlíků v Rusku, ve Francii a v Itálii."
      },
      {
        "type": "boolean",
        "question": "Legionáři sami sebe označovali jako „bratři“ nebo „dobrovolníci“.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Vojáci, které dnes označujeme jako legionáře, si sami říkali „dobrovolníci“ a „bratři“."
      },
      {
        "type": "abcd",
        "question": "Kdo byl nejvýznamnějším politikem, který odjel do zahraničí připravovat samostatnost československého státu?",
        "options": [
          "Karel I.",
          "František Ferdinand d'Este",
          "Tomáš Garrigue Masaryk",
          "František Josef I."
        ],
        "answer": 2,
        "explanation": "Tomáš Garrigue Masaryk se vydal do zahraničí a pustil se do akce na zřízení samostatného státu."
      },
      {
        "type": "abcd",
        "question": "Kdo nejvíce pomáhal T. G. Masarykovi u představitelů cizích států s myšlenkou samostatnosti?",
        "options": [
          "Rakouští důstojníci",
          "Čeští a slovenští krajané v USA, Rusku a jinde",
          "Němečtí obchodníci",
          "Švýcarští bankéři"
        ],
        "answer": 1,
        "explanation": "Získával pro ni podporu jednak u představitelů českých a slovenských krajanů v USA, Rusku, Anglii a Francii."
      },
      {
        "type": "abcd",
        "question": "Jací dva další významní muži byli nejbližšími spolupracovníky T. G. Masaryka?",
        "options": [
          "Karel I. a František Josef I.",
          "Edvard Beneš a Milan Rastislav Štefánik",
          "František Kupka a Jan Hus",
          "Jan Amos Komenský a Karel IV."
        ],
        "answer": 1,
        "explanation": "Důležitými Masarykovými spolupracovníky byli Edvard Beneš a Slovák Milan Rastislav Štefánik."
      },
      {
        "type": "abcd",
        "question": "Jaké měl Milan Rastislav Štefánik původní povolání a pozici za války?",
        "options": [
          "Zemědělec a pěšák",
          "Astronom a důstojník letectva Francie",
          "Právník a diplomat",
          "Továrník a dodavatel zbraní"
        ],
        "answer": 1,
        "explanation": "M. R. Štefánik byl astronom a meteorolog, v době války důstojník letectva Francie."
      },
      {
        "type": "abcd",
        "question": "Kde se odehrála jedna z nejvýznamnějších bitev našich legionářů v Rusku?",
        "options": [
          "U Verdunu",
          "U Zborova",
          "U Lipska",
          "U Waterloo"
        ],
        "answer": 1,
        "explanation": "Nejvýznamnější bitvou, v níž čs. legionáři ukázali své nasazení, byla bitva u Zborova (na území dnešní Ukrajiny)."
      },
      {
        "type": "boolean",
        "question": "Legionářů bylo velmi málo, v celém Rusku jich bojovalo jen kolem jednoho tisíce.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. V roce 1918 dosáhly legie v Rusku počtu 60–70 tisíc mužů."
      },
      {
        "type": "abcd",
        "question": "Kdo se ujal vlády v Rakousku-Uhersku po smrti císaře Františka Josefa I. v roce 1916?",
        "options": [
          "Karel I.",
          "Ferdinand I.",
          "Masaryk",
          "Štefánik"
        ],
        "answer": 0,
        "explanation": "Během války (1916) zemřel František Josef I. a vlády se ujal jeho prasynovec Karel I."
      },
      {
        "type": "abcd",
        "question": "Kdy byl přesně vyhlášen samostatný československý stát?",
        "options": [
          "1. ledna 1914",
          "28. října 1918",
          "11. listopadu 1918",
          "8. května 1945"
        ],
        "answer": 1,
        "explanation": "Dne 28. října vešlo ve známost, že Rakousko-Uhersko přijalo podmínky Dohody a na Václavském náměstí byla vyhlášena samostatnost."
      },
      {
        "type": "abcd",
        "question": "Kdy oficiálně skončila první světová válka porážkou Německa a Rakouska-Uherska?",
        "options": [
          "V říjnu 1918",
          "V listopadu 1918",
          "V prosinci 1918",
          "V lednu 1919"
        ],
        "answer": 1,
        "explanation": "Válka skončila až v listopadu roku 1918 porážkou Rakouska-Uherska a Německa."
      },
      {
        "type": "boolean",
        "question": "Po skončení první světové války zůstalo Rakousko-Uhersko zachováno v původní podobě.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Rakousko-Uhersko se rozpadlo a vytvořily se z něj další samostatné státy."
      },
      {
        "type": "abcd",
        "question": "Přibližně kolik vojáků zahynulo v důsledku první světové války?",
        "options": [
          "Asi 1 milion",
          "Asi 5 milionů",
          "Asi 10 milionů",
          "Asi 50 milionů"
        ],
        "answer": 2,
        "explanation": "V textu se uvádí: „Zahynulo v ní asi 10 milionů lidí.“"
      },
      {
        "type": "abcd",
        "question": "Jaká nemoc postihla Evropu i české země na podzim 1918 a zabila další desítky milionů lidí?",
        "options": [
          "Černý kašel",
          "Španělská chřipka",
          "Cholera",
          "Mor"
        ],
        "answer": 1,
        "explanation": "Na podzim roku 1918 Evropu postihla pandemie tzv. španělské chřipky, která zasáhla i české země."
      },
      {
        "type": "boolean",
        "question": "Pojem „první světová válka“ se používal již od jejího začátku v roce 1914.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Zpočátku se jí říkalo „velká válka“ nebo jen „světová válka“. Jako první se začala označovat až poté, co vypukla druhá."
      }
    ]
  },
  {
    "id": "prvni_republika",
    "title": "První republika",
    "description": "Zlatá éra svobodného Československa s T. G. Masarykem.",
    "mascotName": "Sokolík",
    "mascotType": "prvni_republika",
    "theme": {
      "primaryColor": "#059669",
      "accentColor": "#ecfdf5",
      "gradientStart": "#10b981",
      "gradientEnd": "#047857"
    },
    "questions": [
      {
        "type": "abcd",
        "question": "Kdo se stal prvním prezidentem nového československého státu?",
        "options": [
          "Edvard Beneš",
          "Tomáš Garrigue Masaryk",
          "Milan Rastislav Štefánik",
          "Emil Hácha"
        ],
        "answer": 1,
        "explanation": "Tomáš Garrigue Masaryk byl nejrespektovanější osobností nového státu a do funkce byl zvolen hned několikrát za sebou."
      },
      {
        "type": "abcd",
        "question": "Které z následujících území NEPATŘILO do Československé republiky?",
        "options": [
          "Čechy",
          "Slovensko",
          "Podkarpatská Rus",
          "Halič"
        ],
        "answer": 3,
        "explanation": "Československo tvořily Čechy, Morava, Slezsko, Slovensko a Podkarpatská Rus. Halič součástí nebyla."
      },
      {
        "type": "abcd",
        "question": "Proč se nová republika nazývala „československá“?",
        "options": [
          "Byl to překlad z němčiny",
          "Češi a Slováci byli oficiálně vydáváni za jeden národ",
          "Žili zde pouze Češi a Slováci",
          "Byl to Masarykův pseudonym"
        ],
        "answer": 1,
        "explanation": "Název odrážel tehdejší politiku, podle které Češi a Slováci tvořili společně jeden takzvaný československý národ."
      },
      {
        "type": "abcd",
        "question": "Která národnostní menšina tvořila v ČSR asi čtvrtinu obyvatel (více než bylo Slováků)?",
        "options": [
          "Poláci",
          "Maďaři",
          "Němci",
          "Rusíni"
        ],
        "answer": 2,
        "explanation": "V ČSR žilo obrovské množství Němců, tvořili zhruba čtvrtinu všech obyvatel státu."
      },
      {
        "type": "abcd",
        "question": "Jak se nazývaly pohraniční oblasti v českých zemích, kde převažovalo německé obyvatelstvo?",
        "options": [
          "Slezsko",
          "Sudety",
          "Bavorsko",
          "Těšínsko"
        ],
        "answer": 1,
        "explanation": "Tato území se nazývala Sudety. Místní Němci později požadovali připojení těchto oblastí k Německu."
      },
      {
        "type": "abcd",
        "question": "Které dvě písně spojila nová československá státní hymna?",
        "options": [
          "Kde domov můj a Nad Tatrou sa blýska",
          "Kde domov můj a Hej Slované",
          "Čechy krásné a Nad Tatrou sa blýska",
          "Moravo, Moravo a Hej Slované"
        ],
        "answer": 0,
        "explanation": "Státní hymnou se stala první sloka české písně Kde domov můj, na kterou navazovala první sloka slovenské Nad Tatrou sa blýska."
      },
      {
        "type": "abcd",
        "question": "Který významný malíř a grafik připravoval první československé bankovky (státovky) a poštovní známky?",
        "options": [
          "Josef Lada",
          "Max Švabinský",
          "Alfons Mucha",
          "Václav Špála"
        ],
        "answer": 2,
        "explanation": "Alfons Mucha byl světoznámý secesní umělec, který státu pomáhal s grafickou podobou nových platidel a známek."
      },
      {
        "type": "abcd",
        "question": "Který z těchto názvů NEBYL navrhován jako jméno pro novou československou měnu místo koruny?",
        "options": [
          "Sokol",
          "Řepa",
          "Káně",
          "Orel"
        ],
        "answer": 3,
        "explanation": "O jménu peněz se diskutovalo, navrhovaly se názvy jako řepa, sokol, lev nebo káně. Orel mezi nimi nebyl. Nakonec ale zůstala koruna."
      },
      {
        "type": "abcd",
        "question": "Která důležitá změna v právech nastala v první republice pro ženy?",
        "options": [
          "Musely povinně pracovat v továrnách",
          "Získaly volební právo",
          "Nesmely studovat na univerzitách",
          "Musely odevzdat majetek státu"
        ],
        "answer": 1,
        "explanation": "Československo bylo demokratickým státem, který zaručoval stejná práva všem, a ženy tak získaly možnost volit."
      },
      {
        "type": "abcd",
        "question": "Na kolik hodin denně byla zákonem omezena maximální pracovní doba dělníků?",
        "options": [
          "Na 6 hodin",
          "Na 8 hodin",
          "Na 10 hodin",
          "Na 12 hodin"
        ],
        "answer": 1,
        "explanation": "Uzákonění osmihodinové pracovní doby patřilo k velkým změnám, které výrazně zlepšily podmínky dělníků."
      },
      {
        "type": "abcd",
        "question": "Co se stalo se šlechtickými tituly za první republiky?",
        "options": [
          "Mohly se kupovat za peníze",
          "Dědily se pouze po mužské linii",
          "Byly zrušeny",
          "Získávali je zasloužilí politici"
        ],
        "answer": 2,
        "explanation": "Stát zrušil veškeré šlechtické výsady i tituly a začal přerozdělovat půdu velkostatkářů."
      },
      {
        "type": "abcd",
        "question": "Která část státu byla hlavním tahounem hospodářství a průmyslu?",
        "options": [
          "Slovensko",
          "České země",
          "Podkarpatská Rus",
          "Těšínsko"
        ],
        "answer": 1,
        "explanation": "Zatímco na Slovensku nebo Podkarpatské Rusi převažovalo zemědělství, české země měly nejvyspělejší průmysl a továrny."
      },
      {
        "type": "abcd",
        "question": "Která firma z první republiky se celosvětově proslavila výrobou obuvi ve Zlíně?",
        "options": [
          "Škoda",
          "Tatra",
          "Baťa",
          "ČKD"
        ],
        "answer": 2,
        "explanation": "Baťovy obuvnické závody založili sourozenci Baťovi. Firma dodávala kvalitní a levné boty nejen u nás, ale i do zahraničí."
      },
      {
        "type": "abcd",
        "question": "Která světová událost tvrdě zasáhla československé hospodářství ve 30. letech?",
        "options": [
          "První světová válka",
          "Světová hospodářská krize",
          "Španělská chřipka",
          "Ropná krize"
        ],
        "answer": 1,
        "explanation": "Světová hospodářská krize vypukla v roce 1929 v USA a v následujících letech přinesla i k nám pokles výroby a nezaměstnanost."
      },
      {
        "type": "abcd",
        "question": "Kdo byl druhým prezidentem Československa (po odstoupení T. G. Masaryka)?",
        "options": [
          "Milan Hodža",
          "Edvard Beneš",
          "Konrad Henlein",
          "Emil Hácha"
        ],
        "answer": 1,
        "explanation": "Edvard Beneš byl Masarykův nejbližší spolupracovník. Prezidentem se stal v roce 1935, v době blížící se hrozby nacistického Německa."
      },
      {
        "type": "abcd",
        "question": "Jakou obranu budovalo Československo v pohraničí proti hrozbě nacistického Německa?",
        "options": [
          "Dlouhý vodní příkop",
          "Vysokou kamennou zeď",
          "Soustavu vojenských pevností",
          "Mínová pole"
        ],
        "answer": 2,
        "explanation": "Armáda spoléhala na důmyslný systém vojenských betonových pevností vybudovaných na hranicích."
      },
      {
        "type": "abcd",
        "question": "Ve kterém roce byla podepsána Mnichovská dohoda?",
        "options": [
          "1918",
          "1929",
          "1935",
          "1938"
        ],
        "answer": 3,
        "explanation": "Dne 29. září 1938 schválily v Mnichově čtyři mocnosti požadavek Hitlera na postoupení našeho pohraničí Německu."
      },
      {
        "type": "abcd",
        "question": "Které státy jednaly v Mnichově o postoupení československého pohraničí?",
        "options": [
          "Německo, Itálie, Francie, Velká Británie",
          "Německo, Polsko, Maďarsko, Rakousko",
          "Německo, SSSR, USA, Francie",
          "Československo, Německo, Francie, Velká Británie"
        ],
        "answer": 0,
        "explanation": "Dohodu ujednali zástupci těchto čtyř států. Zástupci Velké Británie a Francie doufali, že ústupkem Hitlerovi zabrání válce."
      },
      {
        "type": "abcd",
        "question": "Kdo zastupoval Československo při podpisu Mnichovské dohody?",
        "options": [
          "Edvard Beneš",
          "Tomáš Garrigue Masaryk",
          "Emil Hácha",
          "Nikdo, nebyli jsme k jednání přizváni"
        ],
        "answer": 3,
        "explanation": "Protože o našem území jednali zástupci jiných zemí bez naší účasti, vžilo se pro tuto událost rčení „o nás bez nás“."
      },
      {
        "type": "abcd",
        "question": "Jak se změnil název státu po ztrátě pohraničí (tzv. druhá republika)?",
        "options": [
          "Česká a Slovenská republika",
          "Česko-Slovensko",
          "Protektorát Čechy a Morava",
          "Československé království"
        ],
        "answer": 1,
        "explanation": "Stát byl přejmenován na Česko-Slovensko. Spojovník symbolizoval změněné poměry v oslabeném státě."
      },
      {
        "type": "abcd",
        "question": "Kdo nahradil odstoupivšího E. Beneše ve funkci prezidenta za tzv. druhé republiky?",
        "options": [
          "Konrad Henlein",
          "Emil Hácha",
          "Jan Syrový",
          "Klement Gottwald"
        ],
        "answer": 1,
        "explanation": "Emil Hácha nastoupil do velmi obtížné situace po odstoupení E. Beneše v roce 1938."
      },
      {
        "type": "abcd",
        "question": "Jaký architektonický styl uplatněný v první republice reprezentuje brněnská vila Tugendhat?",
        "options": [
          "Secese",
          "Baroko",
          "Funkcionalismus",
          "Gotika"
        ],
        "answer": 2,
        "explanation": "Funkcionalismus sázel na jednoduchost a účelnost. Vila Tugendhat patří mezi stavby zařazené na seznam památek UNESCO."
      },
      {
        "type": "abcd",
        "question": "Který moderní komunikační prostředek u nás začal pravidelně vysílat v roce 1923?",
        "options": [
          "Internet",
          "Televize",
          "Rozhlas",
          "Barevný film"
        ],
        "answer": 2,
        "explanation": "První rozhlasové vysílání začalo z pražského studia v roce 1923. Televizní vysílání se začalo zkoušet až mnohem později."
      },
      {
        "type": "abcd",
        "question": "Jak se jmenoval velmi oblíbený dětský zájmový spolek českých skautů?",
        "options": [
          "Sokol",
          "Orel",
          "Pionýr",
          "Junák"
        ],
        "answer": 3,
        "explanation": "Mládež ráda chodila do přírody a trampovala. Český skauting byl spojen s organizací jménem Junák."
      },
      {
        "type": "abcd",
        "question": "Který slavný komiks pro mládež od spisovatele Jaroslava Foglara začal vycházet v roce 1938?",
        "options": [
          "Ferda Mravenec",
          "Rychlé šípy",
          "Čtyřlístek",
          "Spejbl a Hurvínek"
        ],
        "answer": 1,
        "explanation": "Rychlé šípy vycházely v časopise Mladý hlasatel a inspirovaly děti k zakládání vlastních čtenářských klubů."
      },
      {
        "type": "abcd",
        "question": "Ve kterém městě byla v roce 1919 založena Masarykova univerzita?",
        "options": [
          "V Praze",
          "V Brně",
          "V Bratislavě",
          "V Olomouci"
        ],
        "answer": 1,
        "explanation": "Nové univerzity vznikly už v roce 1919 – Masarykova univerzita sídlila v Brně, Univerzita Komenského v Bratislavě."
      },
      {
        "type": "abcd",
        "question": "Kdo tvořil slavnou loutkovou dvojici z divadla Josefa Skupy v Plzni?",
        "options": [
          "Voskovec a Werich",
          "Pat a Mat",
          "Spejbl a Hurvínek",
          "Křemílek a Vochomůrka"
        ],
        "answer": 2,
        "explanation": "Legendární loutky Spejbla a Hurvínka představil ve 20. letech loutkář Josef Skupa."
      },
      {
        "type": "abcd",
        "question": "Kteří herci byli hlavními tvářemi pražského Osvobozeného divadla?",
        "options": [
          "Jiří Voskovec a Jan Werich",
          "Josef Skupa a Eduard Bass",
          "Karel a Josef Čapkovi",
          "Ondřej Sekora a Josef Lada"
        ],
        "answer": 0,
        "explanation": "Jiří Voskovec a Jan Werich patřili mezi nejoblíbenější herce, divadlo bylo známé svým humorem i pozdějším varováním před nacismem."
      },
      {
        "type": "abcd",
        "question": "Který spisovatel psal díla pro děti (např. Dášeňku), ale zároveň varoval před ohrožením demokracie Německem?",
        "options": [
          "Jaroslav Foglar",
          "Karel Čapek",
          "Ondřej Sekora",
          "Franz Kafka"
        ],
        "answer": 1,
        "explanation": "Karel Čapek byl jedním z našich nejvýznamnějších autorů. Jeho romány i divadelní hry často upozorňovaly na nebezpečí diktatur."
      },
      {
        "type": "abcd",
        "question": "Který světově proslulý spisovatel židovského původu žil v Praze a psal svá díla německy?",
        "options": [
          "Eduard Bass",
          "Josef Lada",
          "Franz Kafka",
          "Leoš Janáček"
        ],
        "answer": 2,
        "explanation": "Franz Kafka patří k celosvětově nejuznávanějším autorům pražské německé literatury."
      },
      {
        "type": "abcd",
        "question": "Který hudební skladatel získal v této době světové uznání (autor opery Příhody lišky Bystroušky)?",
        "options": [
          "Bedřich Smetana",
          "Antonín Dvořák",
          "Leoš Janáček",
          "Jaroslav Heyrovský"
        ],
        "answer": 2,
        "explanation": "Leoš Janáček patřil mezi nejvýznamnější skladatele doby a proslavil českou hudbu daleko za hranicemi."
      },
      {
        "type": "boolean",
        "question": "Tomáš Garrigue Masaryk vykonával funkci prezidenta nepřetržitě od vzniku státu až do své smrti v roce 1937.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. TGM se z důvodu pokročilého věku vzdal funkce už na konci roku 1935. Zemřel o dva roky později."
      },
      {
        "type": "boolean",
        "question": "Československo patřilo v období první republiky svými továrnami mezi nejvyspělejší státy světa.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Náš průmysl získal skvělou pověst a výrobky se hojně vyvážely do zahraničí."
      },
      {
        "type": "boolean",
        "question": "Podkarpatská Rus byla hlavním průmyslovým centrem státu, kde nebyla téměř žádná negramotnost.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Podkarpatská Rus naopak patřila k nejzaostalejším oblastem v Evropě a byla tam velmi vysoká míra negramotnosti."
      },
      {
        "type": "boolean",
        "question": "Dívky měly za první republiky stejné podmínky pro vzdělávání na středních a vysokých školách jako chlapci.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Na vzdělání byl kladen velký důraz a dívky měly zajištěny rovné podmínky přístupu ke studiu."
      }
    ]
  },
  {
    "id": "protektorat",
    "title": "Protektorát a 2. sv. válka",
    "description": "Temná léta okupace a hrdinný domácí i zahraniční odboj.",
    "mascotName": "Odbojáček",
    "mascotType": "protektorat",
    "theme": {
      "primaryColor": "#dc2626",
      "accentColor": "#fee2e2",
      "gradientStart": "#ef4444",
      "gradientEnd": "#991b1b"
    },
    "questions": [
    {
      "type": "abcd",
      "question": "Kdy přesně Adolf Hitler přinutil prezidenta Emila Háchu k souhlasu s předáním českých zemí pod ochranu Říše?",
      "options": ["1. září 1939", "15. března 1939", "17. listopadu 1939", "8. května 1945"],
      "answer": 1,
      "explanation": "Dne 15. března 1939 donutil Hitler Háchu k souhlasu, čímž byl následně vyhlášen Protektorát Čechy a Morava."
    },
    {
      "type": "abcd",
      "question": "Co se stalo se Slovenskem těsně před vytvořením Protektorátu Čechy a Morava?",
      "options": ["Stalo se také protektorátem", "Bylo připojeno k Maďarsku", "Slováci vytvořili samostatný stát", "Připojilo se k Sovětskému svazu"],
      "answer": 2,
      "explanation": "Slováci usilující o samostatnost s nacisty dojednali vytvoření samostatného slovenského státu."
    },
    {
      "type": "abcd",
      "question": "Jaký titul nesl Hitlerův zástupce, který měl skutečnou moc v Protektorátu Čechy a Morava?",
      "options": ["Prezident protektorátu", "Říšský protektor", "Německý král", "Říšský kancléř"],
      "answer": 1,
      "explanation": "Úřad prezidenta sice zůstal, ale skutečnou moc nad českými zeměmi měl říšský protektor."
    },
    {
      "type": "abcd",
      "question": "Jak se nazývala německá tajná státní policie, která tvrdě kontrolovala společnost a trestala nesouhlas?",
      "options": ["Wehrmacht", "Luftwaffe", "Gestapo", "KGB"],
      "answer": 2,
      "explanation": "Společenský život kontrolovalo gestapo (Geheime Staatspolizei)."
    },
    {
      "type": "abcd",
      "question": "17. listopadu 1939 došlo v reakci na studentské protesty a pohřeb zastřeleného studenta k uzavření čeho?",
      "options": ["Všech obchodů a trhů", "Českých vysokých škol", "Divadel a kin", "Hranic protektorátu"],
      "answer": 1,
      "explanation": "Němci tvrdě zasáhli, 9 studentů popravili a české vysoké školy byly na znamení trestu uzavřeny."
    },
    {
      "type": "abcd",
      "question": "Která událost z 1. září 1939 oficiálně zahájila druhou světovou válku?",
      "options": ["Útok Německa na Polsko", "Útok Německa na Francii", "Atentát na Hitlera", "Svržení atomové bomby"],
      "answer": 0,
      "explanation": "1. září 1939 Německo vojensky napadlo Polsko, což rozpoutalo druhou světovou válku."
    },
    {
      "type": "boolean",
      "question": "Sovětský svaz bojoval od samého začátku války v roce 1939 po boku Velké Británie a Francie proti Německu.",
      "options": ["Pravda", "Lež"],
      "answer": 1,
      "explanation": "Lež. V roce 1939 Sovětský svaz dokonce napadl Polsko společně s Německem. Na stranu spojenců se přidal až poté, co ho Německo samo napadlo v roce 1941."
    },
    {
      "type": "abcd",
      "question": "Které tři silné státy stály v čele Spojenců bojujících proti nacistickému režimu?",
      "options": ["Německo, Itálie, Japonsko", "USA, Velká Británie, Sovětský svaz", "Francie, Polsko, Československo", "Velká Británie, Čína, Austrálie"],
      "answer": 1,
      "explanation": "Země bojující proti nacistické rozpínavosti se nazývaly Spojenci a stály v čele s USA, Velkou Británií a Sovětským svazem."
    },
    {
      "type": "abcd",
      "question": "Kterého dne vstoupila v platnost kapitulace Německa a my jej slavíme jako Den vítězství?",
      "options": ["15. března", "8. května", "17. listopadu", "28. října"],
      "answer": 1,
      "explanation": "Dne 8. května 1945 podepsali velitelé německých armád kapitulaci, čímž skončila válka v Evropě."
    },
    {
      "type": "abcd",
      "question": "Která dramatická událost donutila v srpnu 1945 Japonsko ke konečné kapitulaci?",
      "options": ["Svržení atomových bomb na města Hirošima a Nagasaki", "Smrt japonského císaře", "Vylodění Američanů v Tokiu", "Pověstná japonská zima a nedostatek jídla"],
      "answer": 0,
      "explanation": "Japonský císař podepsal kapitulaci teprve po svržení dvou zničujících atomových bomb v srpnu 1945."
    },
    {
      "type": "abcd",
      "question": "Jak se nazývali členové ozbrojených oddílů domácího odboje, kteří v lesích přepadali německé jednotky a ničili mosty?",
      "options": ["Výsadkáři", "Partyzáni", "Junáci", "Sokolové"],
      "answer": 1,
      "explanation": "Šlo o partyzány. Skrývali se a prováděli záškodnickou činnost, za kterou hrozila okamžitá smrt."
    },
    {
      "type": "abcd",
      "question": "Kdo byl vůdčím představitelem našeho zahraničního odboje a vytvořil v Londýně prozatímní vládu?",
      "options": ["Emil Hácha", "Tomáš Garrigue Masaryk", "Edvard Beneš", "Klement Gottwald"],
      "answer": 2,
      "explanation": "Zahraniční odboj vedl bývalý prezident Edvard Beneš a z Londýna spolupracoval se Spojenci."
    },
    {
      "type": "abcd",
      "question": "Ve kterých legendárních vojenských jednotkách se proslavili českoslovenští piloti (např. v bitvě o Anglii)?",
      "options": ["V americké pěchotě", "V sovětských tankových praporech", "V britském královském letectvu (RAF)", "Ve francouzském námořnictvu"],
      "answer": 2,
      "explanation": "Čeští letci sloužili v britském královském letectvu (RAF) v bombardovacích i stíhacích perutích."
    },
    {
      "type": "abcd",
      "question": "Kdo byl Reinhard Heydrich?",
      "options": ["Nový zastupující říšský protektor, který omezil práva Čechů", "Velitel československých letců v Británii", "Prezident protektorátu", "Vůdce samostatného slovenského státu"],
      "answer": 0,
      "explanation": "Heydrich přijel do Prahy jako zastupující říšský protektor a rozpoutal obrovskou vlnu zatýkání a poprav."
    },
    {
      "type": "abcd",
      "question": "Kteří dva výsadkáři z Londýna úspěšně provedli atentát na Reinharda Heydricha?",
      "options": ["Jan Žižka a Jan Hus", "Edvard Beneš a Emil Hácha", "Jan Kubiš a Jozef Gabčík", "Alois Vašátko a František Peřina"],
      "answer": 2,
      "explanation": "Čech Jan Kubiš a Slovák Jozef Gabčík měli za úkol Heydricha zabít, což se jim v květnu 1942 podařilo."
    },
    {
      "type": "abcd",
      "question": "Jaká krutá odveta potkala po atentátu na Heydricha obce Lidice a Ležáky?",
      "options": ["Byly opevněny a staly se vojenskými základnami", "Němci je vypálili, muže zastřelili a ženy s dětmi odvezli", "Obyvatelé dostali zákaz vycházení", "Všechny domy byly zbourány kvůli stavbě dálnice"],
      "answer": 1,
      "explanation": "Nacistická msta byla strašná – Lidice a Ležáky byly pro výstrahu zcela vypáleny a zničeny, většina obyvatel zavražděna."
    },
    {
      "type": "abcd",
      "question": "Která armáda na konci války osvobodila převážnou většinu území Československa z východu?",
      "options": ["Americká armáda", "Britská armáda", "Francouzská armáda", "Sovětská Rudá armáda"],
      "answer": 3,
      "explanation": "Největší část našeho území včetně Prahy osvobodila sovětská Rudá armáda (a bojoval v ní i československý sbor)."
    },
    {
      "type": "abcd",
      "question": "Které armádě připadlo podle dohod osvobození západních Čech, tedy i měst Plzeň nebo Karlovy Vary?",
      "options": ["Americké armádě", "Sovětské armádě", "Polské armádě", "Rumunské armádě"],
      "answer": 0,
      "explanation": "Na pomyslné demarkační čáře (České Budějovice - Plzeň - Karlovy Vary) musely zastavit americké jednotky."
    },
    {
      "type": "boolean",
      "question": "Lidé v protektorátu mohli i přes zákaz bezpečně poslouchat zahraniční rozhlas, protože se to nedalo vystopovat a nehrozil za to žádný postih.",
      "options": ["Pravda", "Lež"],
      "answer": 1,
      "explanation": "Lež. Rádia měla speciální cedulky varující, že poslech zahraničního rozhlasu se trestá káznicí i smrtí."
    },
    {
      "type": "abcd",
      "question": "Kterou zásadní a trvalou změnu v silniční dopravě zavedla německá okupace ze dne na den?",
      "options": ["Zákaz vlastnit auta pro civilisty", "Zrušení světelných křižovatek", "Jízdu po pravé straně (jízda vpravo)", "Omezení rychlosti na 30 km/h"],
      "answer": 2,
      "explanation": "Za trvalou změnu spojenou s německou okupací bývá považována jízda vpravo."
    },
    {
      "type": "abcd",
      "question": "Co byl tzv. přídělový systém?",
      "options": ["Rozdělování školních pomůcek zdarma", "Nákup potravin a oblečení pouze na speciální potravinové či oděvní lístky", "Povinnost odevzdat státu úrodu z vlastních zahrádek", "Zabírání volných pokojů v domech pro německé důstojníky"],
      "answer": 1,
      "explanation": "Aby měla německá armáda dostatek jídla, zavedl se přídělový systém. Běžní lidé mohli základní věci kupovat jen s přidělenými lístky."
    },
    {
      "type": "abcd",
      "question": "V jakém pořadí musely být nově psány úřední nápisy na všech obchodech a budovách v protektorátu?",
      "options": ["Česko-německé", "Německo-české", "Pouze německé", "Slovensko-české"],
      "answer": 1,
      "explanation": "Úředním jazykem se stala němčina. Všechny nápisy byly povinně dvojjazyčné s němčinou na prvním místě."
    },
    {
      "type": "abcd",
      "question": "Výuka kterých školních předmětů byla proškrtána a záměrně omezena, aby se děti neučily o samostatném Československu?",
      "options": ["Matematika a fyzika", "Tělocvik a hudební výchova", "Dějepis a občanská výchova", "Chemie a přírodopis"],
      "answer": 2,
      "explanation": "Byla snížena hodinová dotace dějepisu a občanské výchovy a z učebnic byly odstraňovány \"závadné\" texty."
    },
    {
      "type": "abcd",
      "question": "Co se pro všechny Čechy stalo po okupaci povinnou povinností v oblasti pracovního nasazení?",
      "options": ["Mohli si svobodně vybírat práci po celé Evropě", "Museli mít pracovní knížku a často byli odveleni na nucené práce pro válečnou výrobu (i do Německa)", "Práce pro německé továrny byla pouze dobrovolná", "Děti od 10 let musely pracovat na poli"],
      "answer": 1,
      "explanation": "Češi měli Němcům sloužit. Zavedla se pracovní knížka, lidé museli pracovat až 60 hodin týdně pro válečnou výrobu, a to i nuceně v Říši."
    },
    {
      "type": "abcd",
      "question": "Co se stalo s lidmi židovského původu krátce po zřízení protektorátu podle nových zákonů?",
      "options": ["Získali nová volební privilegia", "Museli se vystěhovat do USA", "Ztratili svá občanská práva, nesměli do parků, divadel a byl jim zabaven majetek", "Stali se vysoce postavenými úředníky státu"],
      "answer": 2,
      "explanation": "Podle říšských zákonů ztratili Židé občanská práva. Byli omezeni v pohybu, vzdělání a jejich majetek byl zabavován."
    },
    {
      "type": "abcd",
      "question": "Jaké viditelné označení museli Židé starší šesti let nosit povinně na svém vrchním oblečení?",
      "options": ["Červený kříž", "Bílou pásku na rukávu", "Žlutou šesticípou Davidovu hvězdu s nápisem Jude", "Zelený trojúhelník"],
      "answer": 2,
      "explanation": "Jako ponížení a znak rasové příslušnosti museli nosit žlutou šesticípou hvězdu (Davidovu hvězdu)."
    },
    {
      "type": "abcd",
      "question": "Které české pevnostní město nacisté vyklidili a přeměnili na sběrný koncentrační tábor pro Židy?",
      "options": ["Prahu", "Terezín", "Lidice", "Plzeň"],
      "answer": 1,
      "explanation": "Židé byli soustřeďováni v Terezíně, odkud byli následně vlaky odváženi dále do vyhlazovacích táborů."
    },
    {
      "type": "abcd",
      "question": "Romové z protektorátu byli posíláni do tzv. cikánských koncentračních táborů. Kde se nacházely?",
      "options": ["V Terezíně a Lidicích", "V Letech u Písku a v Hodoníně u Kunštátu", "V Praze a Brně", "V Mauthausenu a Dachau"],
      "answer": 1,
      "explanation": "Romové byli před odsunem do vyhlazovacích táborů vězněni právě v Letech u Písku a v Hodoníně u Kunštátu."
    },
    {
      "type": "abcd",
      "question": "Jaké slovo označuje nacistické plánovité, hromadné vyvražďování židovského a romského obyvatelstva?",
      "options": ["Protektorát", "Mobilizace", "Holokaust (nebo také šoa)", "Kapitulace"],
      "answer": 2,
      "explanation": "Nacistické masové vyvražďování 6 milionů Židů a statisíců Romů se souhrnně označuje pojmem holokaust."
    },
    {
      "type": "boolean",
      "question": "Památku konkrétních obětí holokaustu nám dnes v chodnících před jejich bývalými domy připomínají malé dlažební kostky s mosaznou destičkou, zvané \"kameny zmizelých\".",
      "options": ["Pravda", "Lež"],
      "answer": 0,
      "explanation": "Pravda. Tyto kameny nesou jméno zavražděného člověka a nachází se obvykle u domu, kde před válkou naposledy žil."
    },
    {
      "type": "abcd",
      "question": "Co se po 15. březnu 1939 stalo s Podkarpatskou Rusí, tehdejší nejvýchodnější částí naší republiky?",
      "options": ["Stala se součástí Polska", "Zůstala samostatným státem", "Zabralo ji Maďarsko", "Stala se sovětskou republikou"],
      "answer": 2,
      "explanation": "Slováci vytvořili samostatný stát, Češi a Moravané spadli pod protektorát a zbytek Podkarpatské Rusi zabralo Maďarsko."
    },
    {
      "type": "abcd",
      "question": "Jak se odhaduje celkový počet všech obětí 2. světové války po celém světě?",
      "options": ["Kolem 5 milionů lidí", "Kolem 20 milionů lidí", "50 až 60 milionů lidí", "Více než 100 milionů lidí"],
      "answer": 2,
      "explanation": "Zahynulo 50-60 milionů lidí, z toho naprostou většinu (asi 40 milionů) tvořili civilisté."
    },
    {
      "type": "boolean",
      "question": "Jelikož potravin na lístky byl stálý nedostatek a často šlo o nekvalitní náhražky, lidé jídlo potají sháněli na tzv. černém trhu.",
      "options": ["Pravda", "Lež"],
      "answer": 0,
      "explanation": "Pravda. Systém přídělů nestačil, děti trpěly podvýživou, a proto lidé s velkým rizikem trestu kupovali potraviny na nelegálním černém trhu."
    },
    {
      "type": "abcd",
      "question": "Jaký termín přesně označuje nenávist a nepřátelství výhradně vůči lidem židovského původu a náboženství?",
      "options": ["Šovinismus", "Antisemitismus", "Nacionalismus", "Pacifismus"],
      "answer": 1,
      "explanation": "Jednou z konkrétních forem rasismu, zaměřenou na židovské obyvatelstvo, je antisemitismus."
    },
    {
      "type": "abcd",
      "question": "Kolik občanů tehdejšího Československa (vojáků i civilistů) podle odhadů za 2. světové války celkem padlo, bylo popraveno nebo zavražděno?",
      "options": ["Okolo 5 000", "Zhruba 50 000", "Asi 350 000", "Více než milion"],
      "answer": 2,
      "explanation": "Za protektorátu a druhé světové války celkem padlo, bylo popraveno nebo zavražděno v táborech na 350 000 Čechoslováků."
    }
  ]
  },
  {
    "id": "komunismus",
    "title": "Komunismus",
    "description": "Život za železnou oponou, boj za svobodu a pád režimu roku 1989.",
    "mascotName": "Svobodníček",
    "mascotType": "komunismus",
    "theme": {
      "primaryColor": "#be123c",
      "accentColor": "#ffe4e6",
      "gradientStart": "#e11d48",
      "gradientEnd": "#881337"
    },
    "questions": [
      {
        "type": "abcd",
        "question": "Které území bylo po skončení druhé světové války postoupeno Sovětskému svazu?",
        "options": [
          "Slovensko",
          "Podkarpatská Rus",
          "Sudety",
          "Slezsko"
        ],
        "answer": 1,
        "explanation": "Podkarpatská Rus, která před válkou patřila Československu, se po ní stala součástí Sovětského svazu."
      },
      {
        "type": "abcd",
        "question": "Kolik lidí německé národnosti bylo po válce vysídleno z Československa?",
        "options": [
          "Cca 300 tisíc",
          "Cca 1 milion",
          "Cca 3 miliony",
          "Cca 5 milionů"
        ],
        "answer": 2,
        "explanation": "Československá vláda rozhodla o vysídlení téměř všech sudetských Němců, což byly asi 3 miliony lidí."
      },
      {
        "type": "abcd",
        "question": "Která strana vyhrála parlamentní volby v Československu v roce 1946?",
        "options": [
          "Demokratická strana",
          "Komunistická strana Československa (KSČ)",
          "Sociální demokracie",
          "Strana zelených"
        ],
        "answer": 1,
        "explanation": "Ve volbách v roce 1946 získala nejvíce hlasů KSČ v čele s Klementem Gottwaldem."
      },
      {
        "type": "abcd",
        "question": "Který nekomunistický ministr zahraničí a syn prvního prezidenta zemřel za nevyjasněných okolností brzy po únorovém puči?",
        "options": [
          "Tomáš Garrigue Masaryk",
          "Edvard Beneš",
          "Jan Masaryk",
          "Milan Rastislav Štefánik"
        ],
        "answer": 2,
        "explanation": "Jan Masaryk byl nalezen mrtev pod okny svého bytu. Podle všeho šlo o vraždu, ačkoli komunisté tvrdili, že spáchal sebevraždu."
      },
      {
        "type": "abcd",
        "question": "Jak se nazýval americký program obnovy hospodářství, který Československo na nátlak Stalina odmítlo?",
        "options": [
          "Gottwaldův plán",
          "Rooseveltův plán",
          "Marshallův plán",
          "Trumanova doktrína"
        ],
        "answer": 2,
        "explanation": "Marshallův plán měl pomoci obnovit válkou zničenou Evropu, ale Stalin zakázal Československu pomoc přijmout."
      },
      {
        "type": "boolean",
        "question": "V únoru 1948 podali někteří demokratičtí ministři demisi, aby usnadnili komunistům převzetí moci.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Demisi podali na protest proti chování komunistů a v naději, že je prezident nepříjme a vyhlásí předčasné volby."
      },
      {
        "type": "abcd",
        "question": "Jak se jmenovaly ilegální ozbrojené oddíly KSČ, které podporovaly komunistický puč v únoru 1948?",
        "options": [
          "Sbor národní bezpečnosti",
          "Lidové milice",
          "Pionýr",
          "Rudá armáda"
        ],
        "answer": 1,
        "explanation": "Lidové milice byly soukromou armádou komunistické strany, kterou použili k zastrašení politických oponentů."
      },
      {
        "type": "abcd",
        "question": "Kdo se stal prezidentem republiky bezprostředně po abdikaci Edvarda Beneše v roce 1948?",
        "options": [
          "Antonín Zápotocký",
          "Alexander Dubček",
          "Klement Gottwald",
          "Ludvík Svoboda"
        ],
        "answer": 2,
        "explanation": "Po komunistickém puči a odstoupení nemocného Edvarda Beneše se stal prezidentem Klement Gottwald."
      },
      {
        "type": "abcd",
        "question": "Jak se obrazně říkalo přísně hlídané hranici, která oddělovala demokratické státy Západu od komunistických států Východu?",
        "options": [
          "Železná opona",
          "Berlínská zeď",
          "Ocelová hranice",
          "Rudá linie"
        ],
        "answer": 0,
        "explanation": "Železná opona oddělovala svobodný svět od komunistického a byla hlídána ostnatým drátem a strážními věžemi."
      },
      {
        "type": "abcd",
        "question": "Co bylo symbolem komunismu, který měl reprezentovat spojení dělníků a rolníků?",
        "options": [
          "Kladivo a kovadlina",
          "Srp a kladivo",
          "Meč a pluh",
          "Hvězda a měsíc"
        ],
        "answer": 1,
        "explanation": "Společně s rudou pěticípou hvězdou byl srp a kladivo hlavním znakem komunistické ideologie."
      },
      {
        "type": "abcd",
        "question": "Která významná právnička a politička byla nespravedlivě odsouzena k smrti ve vykonstruovaném politickém procesu?",
        "options": [
          "Milada Horáková",
          "Božena Němcová",
          "Ema Destinnová",
          "Alice Masaryková"
        ],
        "answer": 0,
        "explanation": "Milada Horáková byla obětí politických procesů 50. let. Za její milost se přimlouval i Albert Einstein."
      },
      {
        "type": "abcd",
        "question": "Kde byli často nuceni pracovat političtí vězni za velmi tvrdých podmínek?",
        "options": [
          "V textilních továrnách",
          "Při stavbě dálnic",
          "V uranových dolech",
          "V JZD"
        ],
        "answer": 2,
        "explanation": "Uran, těžený politickými vězni za nebezpečných podmínek, se odvážel do Sovětského svazu k výrobě jaderných zbraní."
      },
      {
        "type": "boolean",
        "question": "Během znárodňování si mohli zemědělci ponechat svá pole, pokud odváděli státu daně.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Soukromí zemědělci byli donuceni odevzdat půdu, dobytek i stroje a vstoupit do Jednotných zemědělských družstev (JZD)."
      },
      {
        "type": "abcd",
        "question": "Co to byly tzv. „pětiletky“?",
        "options": [
          "Povinná vojenská služba na pět let",
          "Tresty pro politické vězně",
          "Centrální ekonomické plány na pět let dopředu",
          "Pravidelné sjezdy KSČ"
        ],
        "answer": 2,
        "explanation": "Stát řídil hospodářství pomocí pětiletek, které přesně určovaly, co a kolik se bude vyrábět."
      },
      {
        "type": "abcd",
        "question": "Na jaký průmysl se komunistické hospodářství zaměřovalo nejvíce na úkor spotřebního zboží?",
        "options": [
          "Textilní a potravinářský",
          "Zbrojní a těžký",
          "Služby a turismus",
          "Informační technologie"
        ],
        "answer": 1,
        "explanation": "Důraz byl kladen na těžbu, hutnictví, strojírenství a zbrojní průmysl podle potřeb Sovětského svazu."
      },
      {
        "type": "abcd",
        "question": "Co se stalo při tzv. měnové reformě v roce 1953?",
        "options": [
          "Zavedlo se euro",
          "Lidé přišli o většinu svých úspor",
          "Všichni dostali státní příspěvek",
          "Zrušily se papírové bankovky"
        ],
        "answer": 1,
        "explanation": "Peníze byly měněny v nevýhodném kurzu (např. 50:1), čímž stát de facto zabavil lidem jejich úspory."
      },
      {
        "type": "abcd",
        "question": "Jaký nový oficiální název dostal stát po přijetí nové ústavy v roce 1960?",
        "options": [
          "Československá republika",
          "Československá demokratická republika",
          "Československá socialistická republika (ČSSR)",
          "Česko-Slovenská republika"
        ],
        "answer": 2,
        "explanation": "Nová ústava v roce 1960 zavedla název ČSSR a výslovně v ní byla zakotvena vedoucí úloha KSČ ve společnosti."
      },
      {
        "type": "boolean",
        "question": "Účast v parlamentních volbách za komunistického režimu byla dobrovolná a lidé mohli vybírat z mnoha různých stran.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Účast byla povinná a voliči vhazovali do urny pouze jeden lístek s jednotnou kandidátkou schválenou KSČ."
      },
      {
        "type": "abcd",
        "question": "Co znamenal pojem „podpultové zboží“?",
        "options": [
          "Zboží, které se prodávalo pouze na trzích",
          "Zboží, které se válelo po zemi",
          "Nedostatkové zboží, které prodavači schovávali pod pultem pro známé",
          "Zboží podřadné kvality"
        ],
        "answer": 2,
        "explanation": "Kvůli nedostatku základních věcí (např. ovoce nebo lepší maso) se oblíbené zboží dalo sehnat jen přes známosti."
      },
      {
        "type": "abcd",
        "question": "Který cizí jazyk se musely děti ve školách za komunismu povinně učit?",
        "options": [
          "Angličtinu",
          "Němčinu",
          "Ruštinu",
          "Francouzštinu"
        ],
        "answer": 2,
        "explanation": "Ruština byla povinná jako projev podřízenosti a přátelství k Sovětskému svazu."
      },
      {
        "type": "abcd",
        "question": "Které tradiční a populární organizace byly komunisty zakázány?",
        "options": [
          "Pionýr a ČSM",
          "Junák (Skaut) a Sokol",
          "KSČ a JZD",
          "StB a SNB"
        ],
        "answer": 1,
        "explanation": "Skaut a Sokol byly zakázány, protože reprezentovaly demokratické hodnoty. Místo nich musely děti do Pionýra."
      },
      {
        "type": "abcd",
        "question": "Jak se jmenovala organizace, která nahradila Skauta a vychovávala děti v duchu komunismu?",
        "options": [
          "Orel",
          "Sojka",
          "Jiskra",
          "Pionýr"
        ],
        "answer": 3,
        "explanation": "Pionýr fungoval podle sovětského vzoru a děti zde byly vedeny k budování socialismu."
      },
      {
        "type": "boolean",
        "question": "Cenzura znamená, že lidé mají naprostou svobodu slova a tisk může psát o čemkoliv.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Cenzura je naopak státní kontrola informací. Noviny, rádio i televize musely hlásat jen to, co strana dovolila."
      },
      {
        "type": "abcd",
        "question": "Jak se nazývala masová tělovýchovná vystoupení, která nahradila sokolské slety?",
        "options": [
          "Olympiády",
          "Spartakiády",
          "Sokolovny",
          "Družby"
        ],
        "answer": 1,
        "explanation": "Spartakiády se konaly každých pět let a sloužily komunistům k obrovské politické propagandě."
      },
      {
        "type": "abcd",
        "question": "Jaký postoj měl komunistický režim k náboženství a církvi?",
        "options": [
          "Plně je podporoval",
          "Byl k nim neutrální",
          "Potlačoval je a věřící i kněze pronásledoval",
          "Udělal z křesťanství státní náboženství"
        ],
        "answer": 2,
        "explanation": "Víra v Boha byla označována za přežitek. Kněží a řeholníci byli vězněni a šikanováni."
      },
      {
        "type": "abcd",
        "question": "Jaká tajná policie sledovala lidi, sbírala na ně informace a zatýkala kritiky režimu?",
        "options": [
          "KGB",
          "Gestapo",
          "StB (Státní bezpečnost)",
          "CIA"
        ],
        "answer": 2,
        "explanation": "StB udržovala ve společnosti atmosféru strachu. Lidé se báli mluvit na veřejnosti, protože se navzájem udávali."
      },
      {
        "type": "abcd",
        "question": "Kdo stál v čele KSČ v roce 1968 a byl hlavní tváří tzv. „Pražského jara“?",
        "options": [
          "Gustáv Husák",
          "Klement Gottwald",
          "Alexander Dubček",
          "Antonín Novotný"
        ],
        "answer": 2,
        "explanation": "Alexander Dubček byl symbolem snahy o uvolnění komunistického režimu a zrušení cenzury."
      },
      {
        "type": "abcd",
        "question": "Jaký slavný dokument sepsal spisovatel Ludvík Vaculík na popud vědců během Pražského jara?",
        "options": [
          "Charta 77",
          "Dva tisíce slov",
          "Několik vět",
          "Deklarace nezávislosti"
        ],
        "answer": 1,
        "explanation": "Manifest Dva tisíce slov podepsalo mnoho lidí. Odsuzoval předchozí chyby komunistů a vyzýval k dalším změnám."
      },
      {
        "type": "abcd",
        "question": "K jaké události došlo v noci na 21. srpna 1968?",
        "options": [
          "K sametové revoluci",
          "K vojenské okupaci Československa",
          "K úmrtí Klementa Gottwalda",
          "K vyhlášení nezávislosti"
        ],
        "answer": 1,
        "explanation": "Vedení Sovětského svazu nesouhlasilo s demokratickými změnami a nařídilo armádám Varšavské smlouvy násilně obsadit naši zemi."
      },
      {
        "type": "abcd",
        "question": "Který vysokoškolský student se v lednu 1969 upálil na protest proti potlačování svobod a rezignaci společnosti?",
        "options": [
          "Jan Zajíc",
          "Jan Patočka",
          "Jan Masaryk",
          "Jan Palach"
        ],
        "answer": 3,
        "explanation": "Jan Palach obětoval svůj život jako „živá pochodeň“, aby probudil občany z letargie po srpnové okupaci."
      },
      {
        "type": "abcd",
        "question": "Jak se nazývá období po roce 1969, kdy se k moci dostal Gustáv Husák a obnovil tvrdý režim?",
        "options": [
          "Normalizace",
          "Pražské jaro",
          "První republika",
          "Protektorát"
        ],
        "answer": 0,
        "explanation": "Proces „normalizace“ znamenal návrat k totalitě, obnovení cenzury, čistky ve společnosti a uzavření hranic."
      },
      {
        "type": "abcd",
        "question": "Jak byli označováni lidé, kteří veřejně odmítali přistoupit na komunistickou přetvářku a nesouhlasili s režimem?",
        "options": [
          "Kolaboranti",
          "Pionýři",
          "Disidenti",
          "Milicionáři"
        ],
        "answer": 2,
        "explanation": "Disidenti (z angl. dissent = nesouhlas) pořádali tajné přednášky, vydávali knihy a byli režimem tvrdě pronásledováni."
      },
      {
        "type": "abcd",
        "question": "Jak se jmenoval dokument z roku 1977, který upozorňoval na nedodržování lidských práv v Československu?",
        "options": [
          "Dva tisíce slov",
          "Charta 77",
          "Tříkrálová deklarace",
          "Moskevský protokol"
        ],
        "answer": 1,
        "explanation": "K autorům Charty 77 patřili Václav Havel a Jan Patočka. Signatáři tohoto dokumentu byli následně vyhazováni z práce i vězněni."
      },
      {
        "type": "boolean",
        "question": "Děti disidentů a lidí vyloučených z práce z politických důvodů mohly v době normalizace bez problémů studovat na vysokých školách.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 1,
        "explanation": "Lež. Režim trestal i rodinné příslušníky. Děti nepřátel státu měly často zakázáno studovat a musely vykonávat nekvalifikovanou práci."
      },
      {
        "type": "boolean",
        "question": "Během normalizace (v 70. a 80. letech) mohla v Československu působit dočasně umístěná sovětská armáda.",
        "options": [
          "Pravda",
          "Lež"
        ],
        "answer": 0,
        "explanation": "Pravda. Od vpádu vojsk v srpnu 1968 tu zůstaly sovětské jednotky „dočasně“ rozmístěné až do roku 1991, aby chránily socialistické zřízení."
      }
    ]
  }
]
};

// Určení, která konfigurace se načte (podle globální proměnné nastavené v app.js)
let CONFIG = CONFIG_BIOLOGY; // Výchozí
