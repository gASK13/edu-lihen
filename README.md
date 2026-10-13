# 🐣 Edukativní Líheň — Vychovej si příšerku

Edukativní kvízová hra pro žáky děti i dospělé. Odpovídej správně, krm příšerky a sleduj, jak z vajíčka vyroste roztomilé mládě a pak velký dospělec s parádním doplňkem!

## Jak hra funguje

1. Rozcestník se automaticky vykreslí z dostupných předmětů.
2. Po výběru předmětu se načte jeho seznam kapitol.
3. Otázky se stáhnou až při otevření konkrétní kapitoly.
4. Správná odpověď přidá bod danému maskotovi!
5. Po čase se příšerka vyklube z vajíčka → **Mládě** 🐣
   Pokud víš vše, vyroste na **Dospělce** s náhodným doplňkem ⭐
6. Pokud dojdou otázky, točí se dokola — sbírej body dál!

## Kde hrát?

Hru je možné si zahrát na [https://gask13.github.io/edu-lihen/](https://gask13.github.io/edu-lihen/).

## Inspirace a poděkování

Tato hra byla inspirována projektem **[Informatická líheň](https://informaticka-lihen.lovable.app/)** — skvělou edukativní hrou pro procvičování informatiky, kde hráč krmí příšerky správnými odpověďmi. Děti ji chtěly hned adaptovat na jiná témata a tak vznikla EDU Líheň. Velké díky autorům za inspiraci! 🎉

## Obsah a přidávání předmětů

Obsah není v JavaScriptu natvrdo. Je uložený v `subjects/`:

```text
subjects/
  manifest.json                 # generovaný – neupravovat ručně
  physics/
    subject.json                # metadata a karta předmětu
    manifest.json               # generovaný – seznam kapitol
    topics/
      physics_basics.json       # kapitola včetně otázek
```

Podrobný formát, pravidla validace, příklady pro `subject.json` a `topic. Son` i prompt pro LLM jsou v [subjects/FORMAT.md](subjects/FORMAT.md).

Po pushi do `main` GitHub Actions obsah automaticky zvaliduje, vytvoří všechny manifesty a publikuje hru na GitHub Pages. Při přidání JSONu tedy není potřeba nic generovat ani commitovat ručně.

(Pro nepovinnou lokální kontrolu použij `node scripts/validate-subjects.mjs` a `node scripts/build-site.mjs`. Na Windows, kde PowerShell blokuje `npm.ps1`, používej tyto příkazy s `node` přímo.)

## Současný Obsah ukázkových témat

### Dějepisná verze (Moderní dějiny ČR)

| Maskot | Téma | Popis |
|---|---|---|
| 🖋️ Buditeláček | Národní obrození | Od obrody češtiny po průmyslovou revoluci a secesi |
| 🪖 Bojovníček | 1. světová válka | Příčiny války, legie a vznik Československa |
| 🦅 Sokolík | První republika | Masaryk, demokracie, hospodářský vzestup |
| 🪖 Odbojáček | Protektorát a 2. sv. válka | Nacistická okupace, odboj a osvobození |
| 🔴 Svobodníček | Komunismus | Únor 1948, normalizace, sametová revoluce |

### Přírodovědná verze (Lidské tělo — demo)

| Maskot | Téma |
|---|---|
| 🟠 Bříškoun | Trávicí soustava |
| 🔵 Plícník | Dýchací soustava |
| 🩷 Buněk | Rozmnožovací soustava a buňka |

## Technologie

- čisté HTML, CSS a JavaScript bez běhových závislostí,
- JSON manifesty a lazy-loading obsahu,
- CSS příšerky; návrhová laboratoř je v `mascot-lab.html`,
- Nunito s podporou české diakritiky,
- `canvas-confetti` a Google Fonts z CDN.

## Lokální spuštění

Použij libovolný statický HTTP server v kořeni projektu. Otevírání přes `file://` nebude fungovat, protože hra načítá JSON přes `fetch`.

## Nasazení

Hra je publikovaná na GitHub Pages - [gask13.github.io/edu-lihen](https://gask13.github.io/edu-lihen/). Workflow `.github/workflows/pages.yml` validuje JSON, generuje manifesty a nasazuje statický artefakt. V repozitáři musí být v `Settings → Pages → Source` zvolené **GitHub Actions**.
