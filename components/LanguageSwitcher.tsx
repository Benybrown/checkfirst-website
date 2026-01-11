'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languages, LanguageCode } from '@/lib/i18n';

const languageColors: Record<string, { bg: string; border: string }> = {
  en: { bg: 'bg-gradient-to-br from-blue-400 to-blue-600', border: 'border-blue-400' },
  fr: { bg: 'bg-gradient-to-br from-purple-400 to-indigo-600', border: 'border-purple-400' },
  ar: { bg: 'bg-gradient-to-br from-emerald-400 to-teal-600', border: 'border-emerald-400' },
  es: { bg: 'bg-gradient-to-br from-orange-400 to-red-500', border: 'border-orange-400' },
};

const languageLabels: Record<string, string> = {
  en: 'En',
  fr: 'Fr',
  ar: 'Ar',
  es: 'Es',
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: LanguageCode) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Satellite positions: arc from 180° (left) to 270° (bottom)
  // Order matches languages array: en, fr, ar, es
  const satellitePositions = [
    { x: 0, y: 45 },     // En - 270° (bottom)
    { x: -39, y: 23 },   // Fr - 210° (between)
    { x: -23, y: 39 },   // Ar - 240° (between)
    { x: -45, y: 0 },    // Es - 180° (left)
  ];

  return (
    <div className="relative" ref={containerRef}>
      {/* Container for globe + satellites */}
      <div className="relative w-10 h-10">
        {/* Globe Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative w-10 h-10 rounded-full
            bg-slate-900/80 backdrop-blur-sm
            shadow-lg shadow-purple-500/20
            hover:shadow-purple-500/40 hover:scale-110
            transition-all duration-300 z-20
            flex items-center justify-center
            ${isOpen ? 'scale-110 shadow-purple-500/40' : ''}
          `}
          aria-label="Select language"
        >
          <svg
            className="w-5 h-5 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </button>

        {/* Satellite Language Buttons */}
        {languages.map((language, index) => {
          const colors = languageColors[language.code];
          const isSelected = currentLanguage.code === language.code;
          const pos = satellitePositions[index];

          return (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`
                absolute w-5 h-5 rounded-full
                ${colors.bg}
                text-white text-[10px] font-bold
                shadow-md
                flex items-center justify-center
                transition-all duration-300 ease-out
                z-10
                ${isOpen
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
                }
                ${isSelected
                  ? 'ring-2 ring-white ring-offset-1 ring-offset-slate-900'
                  : 'hover:scale-110 hover:z-30'
                }
              `}
              style={{
                left: '50%',
                top: '50%',
                transform: isOpen
                  ? `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`
                  : 'translate(-50%, -50%)',
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
              title={language.nativeName}
            >
              {/* Shine effect */}
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/40 to-transparent" />
              <span className="relative z-10">{languageLabels[language.code]}</span>
            </button>
          );
        })}

        {/* Connection lines (optional decorative) */}
        {isOpen && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            style={{ width: '100px', height: '100px', left: '-45px', top: '-20px' }}
          >
            {satellitePositions.map((pos, index) => (
              <line
                key={index}
                x1="65"
                y1="40"
                x2={65 + pos.x}
                y2={40 + pos.y}
                stroke="rgba(139, 92, 246, 0.3)"
                strokeWidth="1"
                className="transition-all duration-300"
                style={{
                  opacity: isOpen ? 0.4 : 0,
                  transitionDelay: `${index * 40}ms`,
                }}
              />
            ))}
          </svg>
        )}
      </div>
    </div>
  );
}
