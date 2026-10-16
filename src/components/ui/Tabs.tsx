"use client";

import { useRef, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
  accentColor?: string;
}

export default function Tabs({ tabs, activeId, onChange }: TabsProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % tabs.length;
      onChange(tabs[next].id);
      buttonRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + tabs.length) % tabs.length;
      onChange(tabs[prev].id);
      buttonRefs.current[prev]?.focus();
    }
  }

  return (
    <div role="tablist" className="flex flex-wrap gap-2">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => { buttonRefs.current[index] = el; }}
          role="tab"
          id={`tab-${tab.id}`}
          aria-selected={activeId === tab.id}
          aria-controls={`panel-${tab.id}`}
          tabIndex={activeId === tab.id ? 0 : -1}
          onClick={() => onChange(tab.id)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={cn(
            "px-5 py-2 rounded-full font-heading font-semibold text-sm transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px]",
            activeId === tab.id
              ? "bg-purple text-white shadow"
              : "bg-white text-ink/70 hover:bg-purple/10 border border-purple/20"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
