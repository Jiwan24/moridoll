export type AgeGroup = {
  id: string;
  range: string;
  title: string;
  color: "teal" | "orange" | "yellow" | "green";
  activities: string[];
};

export const ageGuide: AgeGroup[] = [
  {
    id: "18-24",
    range: "18 – 24 bulan",
    title: "Si Penjelajah Kecil",
    color: "teal",
    activities: [
      "Menyentuh tekstur",
      "Menyisir dengan bantuan",
      "Mengenali nama benda dan bagian tubuh",
    ],
  },
  {
    id: "2-3",
    range: "2 – 3 tahun",
    title: "Si Pengikut Instruksi",
    color: "orange",
    activities: [
      "Melepas pakaian boneka",
      "Mengikuti instruksi satu langkah",
      "Mencocokkan tekstur sederhana",
    ],
  },
  {
    id: "3-4",
    range: "3 – 4 tahun",
    title: "Si Mandiri Cilik",
    color: "yellow",
    activities: [
      "Berlatih memasang kancing berukuran sesuai",
      "Mengurutkan rutinitas kebersihan",
      "Menjawab pertanyaan sederhana",
    ],
  },
  {
    id: "4-5",
    range: "4 – 5 tahun",
    title: "Si Pencerita",
    color: "green",
    activities: [
      "Mencoba rangkaian aktivitas berpakaian",
      "Mengikuti instruksi beberapa langkah",
      "Menceritakan kegiatan bermain",
    ],
  },
];
