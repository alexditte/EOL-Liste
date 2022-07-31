<template>
  <v-card>
    <v-card-title class="headline">
      {{$store.state.counter.counter}} EOL Übersicht: (Investment-taugliche) LEGO® Sets vor der Rente
    </v-card-title>
    <v-btn
                        @click="$store.commit('counter/increment')"
                        >++
                    </v-btn>
    <v-card-text>
      <h4>Zur begleitenden Podcast Episode geht es hier entlang (klick)</h4>
      <p>
        mir selbst auferlegter Leitsatz im Bezug aufs LEGO-Investment ist: Kaufe
        so spät wie möglich und so günstig wie möglich! Daraus resultierend ist
        wohl eine der meist gestellten Fragen an mich: Wann gehen welche Sets in
        Rente? Wann sind sie End of Life (EOL)?
      </p>
      <h4>Wann geht LEGO Set XYZ EOL?</h4>
      <p>
        Diese Frage ist eine der schwierigsten im ganzen Game. LEGO selbst gibt
        in den seltensten Fällen den Hinweis darauf, dass ein Set der Rente nahe
        ist. Es kommt vor, dass einige Artikel im Onlineshop als
        „Auslaufartikel“ gekennzeichnet werden. Aber selbst diese Hinweise sind
        mitunter nicht 100%ig verlässlich. Gelegentlich werden Lebenszyklen von
        intern bereits abgeschriebenen Sets verlängert, weil plötzlich eine
        erhöhte Nachfrage am Markt da ist.
      </p>
      <h4>Fast 10 Jahre im Handel</h4>
      <p>
        Bei einigen Themenbereichen, wie zum Beispiel den Speed Champions, kann
        man relativ sicher die Lebenszyklen der einzelnen Sets vorhersehen. In
        anderen Linien, wie Creator Expert beispielsweise, gibt es mitunter
        Überraschungen. Die Sets Tower Bridge (10214) oder auch der VW Bulli
        (10220) kratzten mit ihrem „Überlebenswillen“ fast an der Dekade (10
        Jahre im Handel).
      </p>
      <h4>Erfahrung, Informationen, Gefühl</h4>
<p>Um den Abverkaufs-Zeitpunkt eines einzelnen LEGO-Sets zu bestimmen, benötigt man eine gesunde Mischung aus Erfahrung bezüglich der einzelnen Lebenszyklen vorhergehender Sets, Insiderinformationen und einem gewissen Bauchgefühl.</p>
Die EOL-Temperatur
Das hilft Dir erst einmal herzlich wenig, wenn ich hier von meinen Gefühlen spreche. Die sind für Dich schwer duplizierbar. Daher habe ich eine Maßeinheit entwickelt, die Dir dabei helfen soll, Dich im Dschungel der LEGO-Sets zurechtzufinden. Die EOL-Temperatur.

Mithilfe dieser „Maßeinheit“ in Verbindung mit einer ständig aktualisierten Liste möchte ich Dir ein Hilfsmittel mit an die Hand geben, welches Du nutzen kannst, um Deine Rendite mit mehr Struktur zu maximieren.

LEGO EOL-Liste: ständig aktualisiert
Die folgende Auflistung wird fortlaufend in Bezug auf die EOL-Temperatur der einzelnen Sets überprüft. Wichtig: Natürlich hat diese Liste keine 100%ig sichere Aussagekraft, sondern ist eben eine Mischung aus meinen Informationen, Erfahrungen und meinem Bauchgefühl.

Nur Rendite relevante Sets
Ich werde, um die Übersicht für Dich als Investor möglichst überschaubar zu halten, nur renditerelevante Sets in dieser Liste führen. Also Sets, in die sich eine Investition meiner Meinung nach als lukrativ erweisen könnte.

Die Übersicht ist nach LEGO-Themengebieten geordnet und enthält neben der Setnummer, der UVP (Unverbindliche Preisempfehlung) auch beispielsweise den Erscheinungsmonat des jeweiligen Bausatzes. In der letzten Spalte jeder Zeile findest Du die grafische Darstellung der EOL-Temperatur.

EOL-Temperatur: Erklärung
Die Grafik zeigt eine in sechs Bereiche unterteilte Farb-Skala. Der grüne Bereich steht für Sets, die zwar aus Renditesicht interessant sind, deren Rente aber noch relativ weit entfernt ist. Je mehr sich der Zeiger nach rechts, in den rötlichen Bereich verschiebt, umso größer ist in meinen Augen die Wahrscheinlichkeit einer nahenden Einstellung der Produktion des jeweiligen Sets. Ab rot halte ich eine Einstellung (End of Life) in naher Zukunft für sehr wahrscheinlich.

Fortlaufende Aktualisierungen
Eine komplette Aktualisierung ist nicht alle paar Wochen möglich – oder nötig. Sie wird dann erfolgen, wenn es Sinn macht und ich es zeitlich einrichten kann. Ich habe mir jedoch Eure Anregungen zu Herzen genommen und nun für jede Kategorie ein separates Aktualisierungsdatum hinzugefügt. Somit kann ich die Aktualisierungen partiell für einzelne Themenbereiche vornehmen und muss keine Woche Urlaub nehmen, um die Komplettliste zu überarbeiten. Das Aktualisierungsdatum der einzelnen Kategorie findest Du über dem jeweiligen Themengebiet.

Als Amazon-Partner & LEGO Affiliate Partner verdienen wir an qualifizierten Verkäufen eine kleine Provision, die uns hilft, diese Seite werbefrei zu halten und unsere laufenden Kosten zu decken. Falls Du über unsere Links etwas bestellst, hast Du dadurch keinerlei Nachteile, der Preis bleibt gleich. Vielen Dank für Deine Unterstützung!
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  computed: {
    todos () {
      this.$store.commit('counter/increment')
      return this.$store.state.counter.counter
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('counter/increment')
    },
  }
}
</script>