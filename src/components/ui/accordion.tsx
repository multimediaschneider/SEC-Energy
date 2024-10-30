import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ContractingAccordion = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const accordionData = [
    {
      id: 1,
      question: "Was ist Wärmecontracting und wie funktioniert es?",
      answer:
        "Wärmecontracting ist ein innovatives Geschäftsmodell, bei dem ein spezialisierter Dienstleister (Contractor) die komplette Planung, Installation, Finanzierung und den Betrieb Ihrer Heizungsanlage übernimmt. Sie zahlen nur für die gelieferte Wärme - ähnlich wie beim Stromversorger. Der Contractor kümmert sich um Wartung, Reparaturen und Optimierung der Anlage.",
    },
    {
      id: 2,
      question: "Welche Vorteile bietet Wärmecontracting?",
      answer:
        "Die Vorteile sind vielfältig: keine hohen Investitionskosten zu Beginn, professionelle Wartung und Service inklusive, Energiekosteneinsparung durch moderne Technik, planbare monatliche Kosten, Risikominimierung durch Komplettservice, und Sie profitieren von der Expertise eines Fachunternehmens. Zusätzlich tragen Sie aktiv zum Klimaschutz bei.",
    },
    {
      id: 3,
      question: "Für welche Immobilien eignet sich Wärmecontracting?",
      answer:
        "Wärmecontracting ist besonders geeignet für: Mehrfamilienhäuser und Wohnanlagen, Gewerbeimmobilien und Bürogebäude, Hotels und Gastronomiebetriebe, öffentliche Einrichtungen, Industrie- und Produktionsanlagen. Auch für Einfamilienhäuser kann sich Contracting unter bestimmten Voraussetzungen lohnen.",
    },
    {
      id: 4,
      question: "Wie lange läuft ein Contracting-Vertrag?",
      answer:
        "Typische Vertragslaufzeiten liegen zwischen 10 und 15 Jahren. Diese Zeitspanne ermöglicht es dem Contractor, die Investition in moderne Anlagentechnik zu refinanzieren und Ihnen gleichzeitig attraktive Konditionen anzubieten. Die genaue Laufzeit wird individuell vereinbart und hängt von verschiedenen Faktoren wie Anlagengröße und Investitionsvolumen ab.",
    },
    {
      id: 5,
      question: "Wie läuft der Wechsel zu Wärmecontracting ab?",
      answer:
        "Der Prozess läuft in mehreren Schritten ab: 1. Erstberatung und Analyse Ihrer aktuellen Situation, 2. Detaillierte Bestandsaufnahme und Potenzialermittlung, 3. Erstellung eines individuellen Angebots, 4. Vertragsabschluss bei Interesse, 5. Planung und Installation der neuen Anlage, 6. Übernahme des laufenden Betriebs. Wir begleiten Sie dabei durch den gesamten Prozess.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {accordionData.map((item) => (
        <div
          key={item.id}
          className="border border-emerald-200 rounded-lg overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full p-4 text-left bg-emerald-50 hover:bg-emerald-100 transition-colors duration-200 flex justify-between items-center"
            aria-expanded={openItems.has(item.id)}
            aria-controls={`content-${item.id}`}
          >
            <span className="text-lg font-semibold text-emerald-800">
              {item.question}
            </span>
            <ChevronDown
              className={`w-6 h-6 text-emerald-600 transition-transform duration-300 ${
                openItems.has(item.id) ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id={`content-${item.id}`}
            role="region"
            className={`transition-all duration-300 ease-in-out ${
              openItems.has(item.id)
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="p-4 text-gray-700 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContractingAccordion;
