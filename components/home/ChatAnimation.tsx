"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_MESSAGES = [
  "I love working with Ana!",
  "She has an incredible ability to quickly grasp what you're looking for and translate it into thoughtful, practical options.",
  "She has a true gift for bringing ideas to life – even the wildest ones. Her attention to detail is outstanding, and she works efficiently while maintaining great flexibility in her approach.",
  "I also appreciate how she leverages her experience to refine designs for a better user experience. Ana isn't afraid to experiment, even when faced with ambiguous tasks – she's fantastic to work with.",
];

const MIN_TYPING = 400;
const MAX_TYPING = 1700;
const MS_PER_CHAR = 35;

function getTypingTime(text: string) {
  const raw = text.length * MS_PER_CHAR;
  return Math.min(MAX_TYPING, Math.max(MIN_TYPING, raw));
}

type ChatAnimationProps = {
  messages?: string[];
  disableTypingAnimation?: boolean;
};

export default function ChatAnimation({ messages, disableTypingAnimation }: ChatAnimationProps) {
  const MESSAGES =
    messages && messages.length > 0 ? messages : DEFAULT_MESSAGES;

  const [visibleMessages, setVisibleMessages] = useState(0);
  const [dotsVisible, setDotsVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Observer – startaj animaciju tek kad je blok u viewu
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4, // cca 40% vidljivo
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ✅ Animacija poruka – restart kad se promijeni MESSAGES ili kad dođe u view
  useEffect(() => {
    if (!isInView) return;

    // On mobile or when typing animation is disabled, show all messages immediately
    if (isMobile || disableTypingAnimation) {
      setVisibleMessages(MESSAGES.length);
      setDotsVisible(false);
      return;
    }

    setVisibleMessages(0);
    setDotsVisible(true);

    const timers: number[] = [];
    let time = 0;

    MESSAGES.forEach((msg, index) => {
      const typingTime = getTypingTime(msg);

      // dots ON za ovu poruku
      timers.push(
        window.setTimeout(() => {
          setDotsVisible(true);
        }, time)
      );

      // nakon "tipkanja" pokaži poruku
      time += typingTime;

      timers.push(
        window.setTimeout(() => {
          setVisibleMessages((prev) => prev + 1);
          setDotsVisible(index < MESSAGES.length - 1);
        }, time)
      );

      // mali gap između poruka
      time += 220;
    });

    return () => {
      timers.forEach((id) => clearTimeout(id));
    };
  }, [isInView, MESSAGES, isMobile, disableTypingAnimation]);

  const skipAnimation = isMobile || disableTypingAnimation;

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full items-center justify-center"
    >
      {/* Chat kolona – fiksna širina, poruke rastu iznad dotsa */}
      <div className="flex min-h-[260px] w-[436px] max-w-full flex-col items-start justify-end gap-1 px-4 md:px-0">
        {/* Poruke */}
        {MESSAGES.slice(0, visibleMessages).map((msg, index) => (
          <div
            key={index}
            className={`inline-flex max-w-full rounded-surface bg-color-bg px-3 py-2 ${skipAnimation ? 'animate-slide-in' : 'animate-bubble'}`}
            style={skipAnimation ? { animationDelay: `${index * 50}ms` } : undefined}
          >
            <p className="type-body-sm">{msg}</p>
          </div>
        ))}

        {/* Typing dots – uvijek lijevo, bez teksta (hidden on mobile) */}
        {dotsVisible && !skipAnimation && (
          <div className="inline-flex items-center gap-1 rounded-surface bg-color-bg px-3 py-2 animate-bubble">
            <span className="typing-dot" />
            <span className="typing-dot typing-dot-delay-1" />
            <span className="typing-dot typing-dot-delay-2" />
          </div>
        )}
      </div>
    </div>
  );
}
