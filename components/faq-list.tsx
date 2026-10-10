"use client";

import { trackEvent } from "@/lib/analytics";
import { productConfig } from "@/config/product";

const questions = [
  {
    question: "Do I need a Smart TV?",
    answer: "You’ll need a supported screen to show the aquarium. App availability depends on the device and store listings configured for your region. Check our Download page for current options.",
  },
  {
    question: "Do kids need their own accounts?",
    answer: "No. The account belongs to the parent or activity organizer. Kids can make fish together without creating individual accounts.",
  },
  {
    question: "Are the first fish really free?",
    answer: `Yes. New aquariums start with ${productConfig.freeFishCount} free fish credits. You don’t need to enter a payment card to get started.`,
  },
  {
    question: "Is this a subscription?",
    answer: "No. Optional fish packs are designed as one-time purchases. Buy more only when your aquarium needs them. Purchases are not enabled in this preview.",
  },
  {
    question: "Can multiple children add fish to the same aquarium?",
    answer: "That’s the idea! Kids can take turns adding their creations to one shared aquarium.",
  },
  {
    question: "Can children draw on paper?",
    answer: "Absolutely. Print a free fish template, color it with pencils or markers, and use the app flow to bring the drawing into your aquarium.",
  },
  {
    question: "What happens after I use all my fish?",
    answer: "The aquarium stays yours. In the finished product, you’ll be able to add fish credits when you’re ready. Credit purchases are not active in this preview.",
  },
  {
    question: "Can I use the aquarium again later?",
    answer: "Yes. Your aquarium is designed to be a place your family can come back to and keep growing.",
  },
  {
    question: "Can I have more than one aquarium?",
    answer: "The product is designed around a shared aquarium. Multiple aquariums may be supported as the account experience grows.",
  },
];

export function FaqList({ compact = false }: { compact?: boolean }) {
  const list = compact ? questions.slice(0, 5) : questions;
  return (
    <div className="faq-list">
      {list.map((item) => (
        <details className="faq-item" key={item.question} onToggle={(event) => {
          if (event.currentTarget.open) trackEvent("faq_opened", { question: item.question });
        }}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
