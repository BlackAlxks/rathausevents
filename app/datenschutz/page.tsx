/* Datenschutz-Seite - Route: /datenschutz */

export default function DatenschutzPage() {
  return (
    <main>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              Die folgende Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir bei der Nutzung dieser Website verarbeiten und zu welchen Zwecken wir dies tun. Diese Website dient in erster Linie der Information über Veranstaltungen und Locations im Historischen Rathaus Friedrichshagen sowie der Kontaktaufnahme zur Planung von Events. Es gibt keinen Online-Shop und keine direkte Zahlungsabwicklung über diese Seite.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">1. Verantwortlicher</h2>
            <p className="leading-relaxed mb-4">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="mb-8 pl-4">
              <p className="font-bold">Brau- und Genusswerkstatt Berlin-Friedrichshagen AG</p>
              <p>Geschäftsbereich „Rathaus Events"</p>
              <p>Bölschestraße 87/88</p>
              <p>12587 Berlin</p>
              <p className="mt-4">Telefon: +49 162 45 33 204</p>
              <p>E-Mail: post@brauerei-friedrichshagen.de</p>
              <p className="mt-4">
                Für Anfragen, die sich konkret auf diese Website oder das Kontaktformular beziehen, können Sie sich zusätzlich an folgende Adresse wenden:
              </p>
              <p>E-Mail: kontakt@polymedia.agency</p>
            </div>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="leading-relaxed mb-4">
              Wenn Sie unsere Website besuchen, werden verschiedene personenbezogene Daten verarbeitet. Personenbezogene Daten sind Informationen, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p className="leading-relaxed mb-4">
              Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist oder Sie uns eine Einwilligung erteilt haben. Die Verarbeitung erfolgt auf Basis der DSGVO, insbesondere auf Grundlage von:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder vorvertragliche Maßnahmen)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, etwa für die technische Bereitstellung der Website)</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), sofern wir diese im Einzelfall einholen</li>
            </ul>
            <p className="leading-relaxed mb-8">
              Soweit in dieser Erklärung keine speziellere Speicherdauer genannt wird, verbleiben personenbezogene Daten bei uns, bis der Zweck der Verarbeitung entfällt oder Sie einer Verarbeitung wirksam widersprechen beziehungsweise eine erteilte Einwilligung widerrufen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">3. Hosting und Server-Logfiles</h2>
            <p className="leading-relaxed mb-4">
              Diese Website wird bei einem externen Dienstleister (Hosting-Provider) betrieben. Die Nutzung eines Hosting-Providers erfolgt im Interesse einer sicheren und zuverlässigen Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Hosting-Provider besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.
            </p>
            <p className="leading-relaxed mb-4">
              Beim Aufruf unserer Website werden automatisch technisch notwendige Daten erfasst und in sogenannten Server-Logfiles gespeichert. Zu diesen Daten zählen insbesondere:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP-Adresse des anfragenden Endgeräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Unterseiten / Dateien</li>
              <li>übertragene Datenmenge</li>
              <li>verwendeter Browser und Betriebssystem</li>
              <li>Referrer-URL (Webseite, von der aus der Zugriff erfolgt)</li>
            </ul>
            <p className="leading-relaxed mb-8">
              Die Verarbeitung dieser Daten erfolgt, um die Funktionsfähigkeit der Website sicherzustellen, Sicherheitsvorfälle zu erkennen und die Stabilität unseres Systems zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht. Die Logfiles werden regelmäßig und automatisiert gelöscht, sobald sie für die genannten Zwecke nicht mehr benötigt werden.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">4. Kontaktaufnahme (E-Mail / Kontaktformular)</h2>
            <p className="leading-relaxed mb-4">
              Wenn Sie uns per E-Mail oder über ein Kontaktformular auf dieser Website kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten (z. B. Name, Kontaktdaten, Inhalt Ihrer Nachricht), um Ihr Anliegen zu bearbeiten.
            </p>
            <p className="font-bold mb-2">Zweck der Verarbeitung</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Beantwortung Ihrer Anfrage</li>
              <li>Vorbereitung und Abstimmung von Veranstaltungen, Besichtigungen oder Angeboten</li>
              <li>Rückfragen im Rahmen laufender Kommunikation</li>
            </ul>
            <p className="font-bold mb-2">Rechtsgrundlagen</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage mit einem Vertragsverhältnis oder einer Veranstaltungsanfrage zusammenhängt oder auf einen solchen Vertrag abzielt</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO, in allen übrigen Fällen (berechtigtes Interesse an der effizienten Bearbeitung von Anfragen)</li>
            </ul>
            <p className="leading-relaxed mb-8">
              Die von Ihnen übermittelten Daten verbleiben bei uns, solange dies zur Bearbeitung der Anfrage erforderlich ist. Darüber hinaus können gesetzliche Aufbewahrungsfristen (z. B. aus Handels- oder Steuerrecht) eine längere Speicherung erforderlich machen. Eine Weitergabe Ihrer Anfrage an Dritte erfolgt nur, soweit dies zur Bearbeitung Ihres Anliegens zwingend erforderlich ist (z. B. interne Abstimmung innerhalb der Brau- und Genusswerkstatt Berlin-Friedrichshagen AG oder mit eng verbundenen Dienstleistern im Rahmen Ihrer Veranstaltung) oder eine gesetzliche Verpflichtung besteht.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
            <p className="leading-relaxed mb-4">
              Unsere Website kann sogenannte „Cookies" einsetzen. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und Informationen enthalten können.
            </p>
            <p className="leading-relaxed mb-4">
              Wir verwenden – soweit technisch notwendig – Cookies, um:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>grundlegende Funktionen der Website bereitzustellen</li>
              <li>die Nutzung der Seite technisch störungsfrei zu ermöglichen</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Diese technisch notwendigen Cookies beruhen auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionsfähigen Website).
            </p>
            <p className="leading-relaxed mb-8">
              Analyse-, Tracking- oder Marketing-Cookies setzen wir derzeit nicht ein. Sollte sich dies zukünftig ändern, passen wir diese Datenschutzerklärung entsprechend an und holen – soweit erforderlich – eine Einwilligung ein. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden, Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen und das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei Deaktivierung technisch notwendiger Cookies kann die Funktionalität der Website eingeschränkt sein.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">6. Externe Links und eingebundene Inhalte</h2>
            <p className="leading-relaxed mb-4">
              Auf unserer Website können Verlinkungen zu externen Webseiten Dritter (z. B. OpenStreetMap, Social-Media-Profile, Ticketanbieter oder Dienstleister) eingebunden sein. Beim Klick auf einen solchen Link verlassen Sie unsere Website. Für die Verarbeitung Ihrer Daten auf den verlinkten Seiten ist ausschließlich der jeweilige Betreiber verantwortlich. Es gelten die Datenschutzhinweise des jeweiligen Anbieters.
            </p>
            <p className="leading-relaxed mb-8">
              Sofern wir in Zukunft Funktionen wie eingebettete Karten, Videos oder Social-Media-Plugins direkt auf der Seite technisch integrieren, werden wir diese Datenschutzerklärung entsprechend ergänzen.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">7. Empfänger von personenbezogenen Daten</h2>
            <p className="leading-relaxed mb-4">
              Innerhalb der Brau- und Genusswerkstatt Berlin-Friedrichshagen AG erhalten nur diejenigen Stellen Zugriff auf Ihre Daten, die diese zur Erfüllung der genannten Zwecke benötigen. Externe Dienstleister (z. B. Hosting-Provider, IT-Dienstleister) verarbeiten Daten ausschließlich auf Grundlage eines Auftragsverarbeitungsvertrages und nur nach unseren Weisungen.
            </p>
            <p className="leading-relaxed mb-8">
              Eine Übermittlung in Drittländer außerhalb der EU beziehungsweise des EWR findet im Rahmen dieser Website derzeit nicht statt.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">8. Ihre Rechte</h2>
            <p className="leading-relaxed mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen folgende Rechte in Bezug auf Ihre personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Zur Ausübung dieser Rechte können Sie sich jederzeit an die oben genannte verantwortliche Stelle wenden.
            </p>
            <p className="leading-relaxed mb-8">
              Sie haben außerdem das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">9. Datensicherheit</h2>
            <p className="leading-relaxed mb-4">
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen. Hierzu gehören insbesondere die Nutzung von verschlüsselten Verbindungen (SSL/TLS) beim Aufruf der Website, regelmäßige Sicherheitsüberprüfungen und eine dem Stand der Technik entsprechende Serverkonfiguration.
            </p>
            <p className="leading-relaxed mb-8">
              Bitte beachten Sie, dass eine Datenübertragung im Internet (z. B. per E-Mail) trotz aller Maßnahmen Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <hr className="my-8 border-neutral-300" />

            <h2 className="text-2xl font-bold mb-4">10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="leading-relaxed mb-8">
              Diese Datenschutzerklärung ist aktuell und hat den Stand Januar 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann eine Anpassung dieser Erklärung erforderlich werden. Die jeweils aktuelle Fassung ist jederzeit auf dieser Website abrufbar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
