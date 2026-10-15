export type PackageItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const packageItems: PackageItem[] = [
  {
    id: "boneka",
    title: "Boneka Interaktif",
    description: "Fitur berpakaian, menyisir rambut, dan menyikat gigi.",
    icon: "Baby",
  },
  {
    id: "kaus-kaki",
    title: "Kaus Kaki Sensorik",
    description: "Variasi tekstur untuk eksplorasi sentuhan.",
    icon: "Footprints",
  },
  {
    id: "cube",
    title: "Sensory Cube",
    description: "Kubus dengan beragam tekstur untuk stimulasi sensorik.",
    icon: "Box",
  },
  {
    id: "buku",
    title: "Buku Panduan",
    description: "Arahan aktivitas lengkap untuk orang tua.",
    icon: "BookOpen",
  },
  {
    id: "lagu",
    title: "Lagu Edukatif via QR Code",
    description: "Scan untuk mendengarkan lagu edukatif yang menyenangkan.",
    icon: "QrCode",
  },
  {
    id: "kemasan",
    title: "Kemasan Praktis",
    description: "Mudah digunakan dan disimpan kembali.",
    icon: "Package",
  },
];
