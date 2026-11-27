import Link from "next/link";

type NewsCardProps = {
  title: string;
  date: string;
  category: string;
  excerpt?: string;
  href?: string;
  external?: boolean;
  className?: string;
  titleAs?: "h2" | "h3";
};

export function NewsCard({
  title,
  date,
  category,
  excerpt,
  href,
  external,
  className,
  titleAs = "h2",
}: NewsCardProps) {
  const Heading = titleAs;
  const classes = ["news-card", href ? "news-card--link" : "", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <div className="news-card__meta">
        <span className="news-card__date">{date}</span>
        <span className="news-card__category">{category}</span>
      </div>

      <Heading className="news-card__title">{title}</Heading>
      {excerpt ? <p className="news-card__excerpt">{excerpt}</p> : null}
    </>
  );

  if (href && external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
