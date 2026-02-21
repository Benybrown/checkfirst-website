interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  dark,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }`}
    >
      {tag && (
        <span
          className={`mb-4 inline-block rounded-full px-3.5 py-1 font-display text-xs font-semibold uppercase tracking-wider ${
            dark
              ? "bg-brand-900/40 text-brand-300"
              : "bg-brand-50 text-brand-700"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[44px] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
