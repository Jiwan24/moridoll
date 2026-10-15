"use client";

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
  return (
    <div role="tablist" className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeId === tab.id}
          onClick={() => onChange(tab.id)}
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
