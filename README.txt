Projekt: Klausur-Selbsttest (History China)

Zweck
- Sehr einfacher, lokaler Selbsttest zum Lernen fuer die Klausur.
- Fokus auf Funktion statt auf perfektes Frontend oder Accessibility.
- Fragen werden im Chat geliefert und direkt in HTML uebernommen.

Dateien
- index.html: Uebersichtsseite mit 4 Bloecken und verlinkten Vorlesungen.
- styles.css: Kleine, getrennte Basis-Styles fuer Lesbarkeit und Abstaende.
- script.js: Separate JS-Logik fuer die Auswertung beim Submit.
- vl1.html: Aktuelle Testseite fuer Vorlesung 1 (enthaelt alle bisher eingetragenen Fragen).
- vl2.html ... vl10.html: Platzhalter-Testseiten fuer die restlichen Vorlesungen.

Wichtige Regeln fuer weitere KIs
- Die 4 inhaltlichen Hauptbloecke bleiben erhalten.
- Die Vorlesungsnamen bleiben erhalten.
- Fragen sollen moeglichst 1:1 aus User-Text uebernommen werden.
- Bevorzugtes Format pro Aussage:
  - "Frage: ..."
  - "Antwort: ..."
  - Danach Wahr/Falsch-Auswahl.
- Keine komplexen Frameworks oder Build-Tools einfuehren.
- Kein CSS-Overengineering; einfache Styles reichen.

Fragen hinzufuegen (bestehendes Muster)
1. In der passenden Vorlesung im Formular einen neuen Block mit class="question" anlegen.
2. Richtige Loesung in data-answer setzen.
   - Wahr/Falsch: data-answer="wahr" oder data-answer="falsch"
   - Textfragen: mehrere gueltige Loesungen mit | trennen, z. B. data-answer="1949|neunzehnhundertneunundvierzig"
3. Innerhalb des Frage-Blocks immer ein Ergebnisfeld lassen:
   - <span class="result"></span>

Wie die Auswertung funktioniert
- Submit wird pro Vorlesungsformular abgefangen.
- Alle .question[data-answer]-Elemente werden geprueft.
- Bei Radiofragen wird die ausgewaehlte Option verglichen.
- Bei Textfragen wird der Text normalisiert (trim + lowercase) und verglichen.
- Ergebnis je Frage: ✅ oder ❌.
- Unten steht Score: x/y richtig.

Hinweise
- Wenn in einer Vorlesung noch keine .question-Elemente existieren, zeigt Submit "Keine Fragen vorhanden.".
- Fokus ist Desktop und lokale Nutzung zum Lernen; Markup ist bewusst einfach gehalten.
- Es wird kein <details>-Ausklappen mehr verwendet; Navigation laeuft ueber Links auf der index.html.
