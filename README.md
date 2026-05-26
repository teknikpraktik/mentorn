# Mentorn

Ett digitalt mentorsprogram för gymnasieelever. 27 mikrolektioner om mentala modeller, studieteknik och AI-användning, byggt för klassrumsmiljö.

**mentorn.se**

---

## Om programmet

Mentorn samlar tidlösa koncept från psykologi, lärandeforskning och beslutsfattande och gör dem tillgängliga för elever i gymnasiet. Varje lektion introducerar ett koncept, visar ett konkret exempel, leder till en kort diskussion och avslutas med en uppgift.

Koncepten täcker tre områden:

- **Lärande och studieteknik** – spaced repetition, retrieval practice, deliberate practice, the MAP method
- **Tänkande och beslutsfattande** – confirmation bias, second level thinking, sunk cost, alternativkostnad
- **Självledarskap och mindset** – growth mindset, grit, mål vs system, stoicism, ikigai

De flesta uppgifter integrerar AI som ett aktivt lärverktyg, med fokus på att använda AI för att tänka djupare – inte för att slippa tänka.

## Struktur

Varje lektion följer samma format:

1. **Koncept** – kärnan i idén, kort och konkret
2. **Exempel** – igenkännbart scenario med två karaktärer
3. **Diskussion** – parövning med 60-sekunderstimer
4. **Uppgift** – eleven omsätter idén i handling, ofta med AI-stöd

## Teknikstack

Ren HTML, CSS och JavaScript. Inga ramverk, inga beroenden. Delade filer:

- `style.css` – all typografi, färger och komponenter via CSS custom properties
- `nav.js` – stegnavigering
- `timer.js` – diskussionstimern
- `footer.js` – sidfot

## Användning

Öppna `index.html` i en webbläsare. Lektionerna ligger i `koncept/`. Ingen byggprocess krävs.

Lektionerna är tänkta att användas i klassrum med en lärare som leder samtalet. Varje lektion tar 10–30 minuter och kan användas som lektionsstart, mentorstid eller återkommande moment under en termin.

## Licens

© Per Björkman. Alla rättigheter förbehållna.
