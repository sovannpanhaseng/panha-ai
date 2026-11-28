import type { ReactNode } from "react";

type ResearchSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function ResearchSection({
  id,
  title,
  children,
}: ResearchSectionProps) {
  return (
    <section
      className="advancement-section"
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="advancement-section__head">
        <h2 className="advancement-section__title" id={`${id}-title`}>
          {title}
        </h2>
      </div>

      <div className="advancement-section__body">{children}</div>
    </section>
  );
}
