type LogoMarkProps = {
  className?: string;
  /** Thicker, non-scaling strokes so the mark stays legible at small sizes. */
  compact?: boolean;
  title?: string;
};

const SECONDARY_LINES: Array<[number, number, number, number]> = [
  [140, 355, 280, 290],
  [155, 235, 280, 290],
  [245, 140, 280, 290],
  [225, 435, 280, 290],
  [245, 140, 415, 215],
  [385, 85, 415, 215],
  [545, 75, 415, 215],
  [545, 75, 575, 215],
  [695, 115, 575, 215],
  [695, 115, 735, 285],
  [815, 200, 735, 285],
  [865, 315, 735, 285],
  [820, 415, 735, 285],
  [225, 435, 380, 345],
  [450, 445, 625, 345],
  [685, 455, 625, 345],
  [820, 415, 625, 345],
];

const PRIMARY_LINES: Array<[number, number, number, number]> = [
  [415, 215, 575, 215],
  [380, 345, 625, 345],
  [280, 290, 415, 215],
  [280, 290, 380, 345],
  [415, 215, 380, 345],
  [575, 215, 380, 345],
  [575, 215, 625, 345],
  [575, 215, 735, 285],
  [625, 345, 735, 285],
  [380, 345, 310, 445],
  [380, 345, 450, 445],
];

const OUTER_POINTS = [
  [140, 355],
  [155, 235],
  [245, 140],
  [385, 85],
  [545, 75],
  [695, 115],
  [815, 200],
  [865, 315],
  [820, 415],
  [685, 455],
  [450, 445],
  [380, 565],
  [310, 445],
  [225, 435],
];

const HUB_POINTS: Array<[number, number]> = [
  [280, 290],
  [415, 215],
  [575, 215],
  [380, 345],
  [625, 345],
  [735, 285],
];

const OUTER_POINT_STRING = OUTER_POINTS.map(([x, y]) => `${x},${y}`).join(" ");

export function LogoMark({ className, compact = false, title }: LogoMarkProps) {
  const vectorEffect = compact ? "non-scaling-stroke" : undefined;
  const stroke = compact
    ? { secondary: 1.1, primary: 1.3, outer: 1.6, hub: 1.3 }
    : { secondary: 4, primary: 6.5, outer: 9.5, hub: 6.5 };
  const outerRadius = compact ? 24 : 13;
  const hubRadius = compact ? 27 : 15.5;

  return (
    <svg
      className={className}
      viewBox="118 52 770 540"
      fill="none"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}

      <g
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      >
        <g strokeWidth={stroke.secondary} opacity={0.7}>
          {SECONDARY_LINES.map(([x1, y1, x2, y2]) => (
            <line
              key={`${x1}-${y1}-${x2}-${y2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              vectorEffect={vectorEffect}
            />
          ))}
        </g>

        <g strokeWidth={stroke.primary}>
          {PRIMARY_LINES.map(([x1, y1, x2, y2]) => (
            <line
              key={`${x1}-${y1}-${x2}-${y2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              vectorEffect={vectorEffect}
            />
          ))}
        </g>

        <g strokeWidth={stroke.outer}>
          <polygon
            points={OUTER_POINT_STRING}
            vectorEffect={vectorEffect}
          />
          <line
            x1={310}
            y1={445}
            x2={450}
            y2={445}
            vectorEffect={vectorEffect}
          />
        </g>
      </g>

      <g fill="currentColor">
        {OUTER_POINTS.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={outerRadius} />
        ))}
      </g>

      <g
        fill="var(--logo-hole, var(--paper))"
        stroke="currentColor"
        strokeWidth={stroke.hub}
      >
        {HUB_POINTS.map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={hubRadius}
            vectorEffect={vectorEffect}
          />
        ))}
      </g>
    </svg>
  );
}
