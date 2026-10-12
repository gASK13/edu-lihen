# Edukativní Líheň

Webová kvízová hra pro děti: správné odpovědi krmí příšerku, která roste z vajíčka přes mládě až do dospělce.

## Jak hra funguje

1. Rozcestník se automaticky vykreslí z dostupných předmětů.
2. Po výběru předmětu se načte jeho seznam kapitol.
3. Otázky se stáhnou až při otevření konkrétní kapitoly.
4. Správná odpověď přidá bod danému maskotovi; postup se ukládá do `localStorage` zvlášť pro každý předmět.

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

Podrobný formát, pravidla validace, příklady pro `subject.json` a `topic.json` i prompt pro LLM jsou v [subjects/FORMAT.md](subjects/FORMAT.md).

```powershell
node scripts/validate-subjects.mjs
node scripts/build-manifest.mjs
```

Na Windows, kde PowerShell blokuje `npm.ps1`, používej uvedené příkazy s `node` přímo. GitHub Actions stejné kontroly spouští automaticky při push a pull requestu do `main`.

## Technologie

- čisté HTML, CSS a JavaScript bez běhových závislostí,
- JSON manifesty a lazy-loading obsahu,
- CSS příšerky; návrhová laboratoř je v `mascot-lab.html`,
- Nunito s podporou české diakritiky,
- `canvas-confetti` a Google Fonts z CDN.

## Lokální spuštění

Použij libovolný statický HTTP server v kořeni projektu. Otevírání přes `file://` nebude fungovat, protože hra načítá JSON přes `fetch`.

## Nasazení

Hra je publikovaná na [gask13.github.io/edu-lihen](https://gask13.github.io/edu-lihen/). Workflow `.github/workflows/subjects.yml` ověřuje JSON a kontroluje, zda jsou manifesty aktuální; samotné nastavení GitHub Pages nemění.
