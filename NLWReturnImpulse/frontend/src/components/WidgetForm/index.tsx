import { useDebugValue, useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/images/bug.svg";
import ideaImageUrl from "../../assets/images/idea.svg";
import thoughtImageUrl from "../../assets/images/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

// Object.entries(feedbackTypes) =>
/**
 * [
 *  ["BUG", { title: "Problema", image: { source: "...", alt: "..." } }],
 * ["IDEA", { title: "Ideia", image: { source: "...", alt: "..." } }],
 * ["OTHER", { title: "Outro", image: { source: "...", alt: "..." } }]
 * ]
 */

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400 items-center">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.rocketseat.com.br/"
        >
          Rocketseat
        </a>
        <a
          className="underline underline-offset-2 items-center flex flex-col"
          href="https://joneskleber.eti.br"
        >
          © Jones Kleber
        </a>
      </footer>
    </div>
  );
}
