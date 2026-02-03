"use client";

import React from 'react';
import { cn } from '@/lib/utils';

type AnimatedTickerHeadingProps = {
  text: string;
  className?: string;
};

export const AnimatedTickerHeading = ({ 
  text, 
  className,
}: AnimatedTickerHeadingProps) => {
  let charIndexCounter = 0;

  return (
    <h1 className={cn(className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {text.split(' ').map((word, wordIdx) => {
          const wordChars = word.split('');
          return (
            <span key={wordIdx} className="inline-block mr-3 md:mr-4">
              {wordChars.map((char, charIdx) => {
                charIndexCounter++;
                return (
                  <span key={charIdx} className="inline-block overflow-hidden align-bottom">
                    <span
                      className="inline-block animate-slide-up-letter"
                      style={{ animationDelay: `${charIndexCounter * 0.05}s` }}
                    >
                      {char}
                    </span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </h1>
  );
};
