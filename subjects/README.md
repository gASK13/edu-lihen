# Obsah předmětů

Úplný návod pro ruční i LLM/MCP tvorbu obsahu je v [FORMAT.md](FORMAT.md).

Manifesty jsou generované soubory. Po každé změně `subject.json` nebo souboru v `topics/` spusť:

```powershell
node ../scripts/validate-subjects.mjs
node ../scripts/build-manifest.mjs
```
