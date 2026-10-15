export type Aspect = {
  id: string;
  title: string;
  description: string;
  color: "teal" | "orange" | "yellow" | "green";
  icon: string; // lucide icon name
};

export const aspects: Aspect[] = [
  {
    id: "sensorik",
    title: "Sensorik",
    description: "Mengenali berbagai tekstur lewat sensory cube & kaus kaki sensorik.",
    color: "teal",
    icon: "Fingerprint",
  },
  {
    id: "motorik",
    title: "Motorik Halus",
    description: "Melatih koordinasi mata-tangan: melepas pakaian, kancing, menyisir.",
    color: "orange",
    icon: "Hand",
  },
  {
    id: "bahasa",
    title: "Bahasa",
    description: "Mengenal nama benda & bagian tubuh, bernyanyi lewat lagu edukatif.",
    color: "yellow",
    icon: "MessageCircle",
  },
  {
    id: "kemandirian",
    title: "Kemandirian",
    description: "Berpakaian, menyisir rambut, menyikat gigi.",
    color: "green",
    icon: "Star",
  },
];
