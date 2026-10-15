import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", align === "center" && "text-center", className)}>
      <h2 className="font-heading text-3xl font-bold text-purple md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-ink/70 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
