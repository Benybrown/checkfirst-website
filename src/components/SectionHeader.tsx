interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

/*
  Editorial section header.
  - Eyebrow: mono, uppercase, tracked, with hairline dash before.
  - Title: serif display (Newsreader), large-scale, tight tracking.
  - Description: body sans, generous line-height, ink-500.
*/
export function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  dark,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-14 sm:mb-16 ${
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-3xl"
      }`}
    >
      {tag && (
        <span
          className={`eyebrow mb-6 ${dark ? "eyebrow-dark" : ""} ${
            isCenter ? "justify-center" : ""
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-display tracking-[-0.028em] text-[32px] leading-[1.08] sm:text-[40px] lg:text-[52px] ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[17px] leading-[1.65] sm:text-[18px] ${
            dark ? "text-white/65" : "text-ink-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
