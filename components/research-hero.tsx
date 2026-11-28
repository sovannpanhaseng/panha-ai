type ResearchHeroProps = {
  title: string;
  lede: string;
};

export function ResearchHero({ title, lede }: ResearchHeroProps) {
  return (
    <section className="advancements-hero">
      <div className="advancements-hero__card">
        <div className="home-hero__lava" aria-hidden="true">
          <span className="home-hero__blob home-hero__blob--1" />
          <span className="home-hero__blob home-hero__blob--2" />
        </div>

        <div className="advancements-hero__content">
          <h1 className="advancements-hero__title">{title}</h1>
          <p className="advancements-hero__lede">{lede}</p>
        </div>
      </div>
    </section>
  );
}
