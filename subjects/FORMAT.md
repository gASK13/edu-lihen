# Formát obsahu pro Edukativní Líheň

Tento dokument je zdroj pravdy pro člověka i LLM/MCP. Data jsou vždy validní JSON v UTF-8; žádné komentáře, koncové čárky ani JavaScriptové proměnné.

## Pravidla struktury

```text
subjects/<id-predmetu>/
  subject.json
  topics/<id-kapitoly>.json
```

- `<id-predmetu>` a `<id-kapitoly>`: malá písmena, číslice a podtržítko; musí být unikátní.
- `subjects/manifest.json` a `subjects/<id>/manifest.json` neupravuj ručně.
- Pro novou kapitolu stačí nový JSON v `topics/`; nemusí se upravit HTML ani JavaScript.
- Pro nový předmět vytvoř novou složku se `subject.json` a alespoň jednou kapitolou.

## `subject.json`

```json
{
  "schemaVersion": 1,
  "id": "chemistry",
  "card": {
    "order": 4,
    "label": "Chemická verze",
    "title": "Chemická líheň ⚗️",
    "description": "Objevuj látky a jejich proměny.",
    "tags": [{ "label": "Reagík", "color": "#9a3412", "background": "#ffedd5" }],
    "buttonLabel": "Spustit chemii",
    "colors": { "start": "#f97316", "end": "#c2410c" }
  },
  "gameTitle": "Chemická Líheň",
  "gameSubtitle": "Míchej znalosti, ne neznámé látky!",
  "thresholds": { "baby": 5, "adult": 10 },
  "accessories": [
    { "id": "bowtie", "name": "Červený motýlek", "cssClass": "acc-bowtie" }
  ]
}
```

Povinné jsou `schemaVersion`, `id`, `card`, `gameTitle`, `gameSubtitle` a platné prahy. `card.order` určuje pořadí v rozcestníku. `cssClass` doplňku musí existovat ve `style.css`; v opačném případě se doplněk nevykreslí.

## `topic.json`

```json
{
  "schemaVersion": 1,
  "subjectId": "chemistry",
  "id": "latky",
  "title": "Látky kolem nás",
  "description": "Pevné, kapalné a plynné látky.",
  "mascotName": "Reagík",
  "mascotType": "chemistry",
  "theme": {
    "primaryColor": "#f97316",
    "accentColor": "#ffedd5",
    "gradientStart": "#fb923c",
    "gradientEnd": "#c2410c"
  },
  "questions": []
}
```

`subjectId` musí přesně odpovídat `id` v `subject.json`. `mascotType` je připravené metadata pro budoucí systém příšerek; současná hra využívá zejména `id` kapitoly pro tematický CSS prvek.

## Otázky

### Výběr A–D

```json
{
  "type": "abcd",
  "question": "Která látka je při pokojové teplotě kapalná?",
  "options": ["Led", "Voda", "Vzduch", "Sůl"],
  "answer": 1,
  "explanation": "Voda je při běžné pokojové teplotě kapalná."
}
```

### Pravda / lež

```json
{
  "type": "boolean",
  "question": "Vzduch je plyn.",
  "options": ["Pravda", "Lež"],
  "answer": 0,
  "explanation": "Vzduch je směs plynů."
}
```

`answer` je index od nuly. U `abcd` jsou vyžadované alespoň dvě možnosti; běžně používej čtyři. Vysvětlení piš stručně, věcně a přátelsky; zobrazí se hned po odpovědi.

## Příšerky a barvy

- Používej kontrastní `primaryColor` a světlou `accentColor`.
- Nový speciální rys příšerky vyžaduje CSS a jeho mapování v `app.js`; samotné JSON metadata nový tvar ještě nevykreslí.
- Zatím používej existující doplňky: `glasses`, `hat`, `bowtie`, `crown`. Jejich CSS třídy jsou `acc-glasses`, `acc-hat`, `acc-bowtie`, `acc-crown`.
- Návrhy nových tvarů lze zkoušet v `mascot-lab.html`; do hry je přidej až po vizuálním schválení.

## Postup a kontrola

1. Vytvoř nebo uprav JSON.
2. Spusť `node scripts/validate-subjects.mjs` v kořeni projektu.
3. Spusť `node scripts/build-manifest.mjs` v kořeni projektu.
4. Ověř rozcestník, nový předmět/kapitolu a alespoň jednu správnou i chybnou odpověď.
5. Zahrň do commitu také změněné manifesty.

## Prompt pro LLM/MCP

```text
Vytvoř pouze validní UTF-8 JSON pro Edukativní Líheň podle subjects/FORMAT.md.
Nevkládej Markdown ani komentáře. Použij schemaVersion 1.
Předmět: [ID A NÁZEV]. Kapitola: [ID A NÁZEV].
Dodrž subjectId, čtyři možnosti u typu abcd, index answer od nuly a stručné české vysvětlení.
Nevymýšlej cssClass doplňku ani speciální rys příšerky, pokud nejsou v dokumentaci.
```
