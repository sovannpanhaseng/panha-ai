import type { CSSProperties } from "react";

const COLORS = {
  bayon: "#1f5a45",
  qwen: "#7c5cff",
  glm: "#8a8f8b",
  openai: "#000000",
  gemma: "#00d17a",
} as const;

type Bar = {
  label: string;
  detail?: string;
  value: number;
  display: string;
  color: string;
};

type BarChartProps = {
  title: string;
  note: string;
  max: number;
  ticks: number[];
  unit?: string;
  bars: Bar[];
};

function BarChart({ title, note, max, ticks, unit = "", bars }: BarChartProps) {
  const chartStyle = {
    "--chart-columns": bars.length,
    "--chart-min-width": `${40 + bars.length * 72}px`,
  } as CSSProperties;

  return (
    <figure className="article-chart">
      <figcaption className="article-chart__caption">
        <span className="article-chart__title">{title}</span>
        <span className="article-chart__note">{note}</span>
      </figcaption>

      <div className="article-chart__scroll">
        <div className="article-chart__chart" style={chartStyle}>
          <div className="article-chart__axis" aria-hidden="true">
            {ticks.map((tick) => (
              <span
                className="article-chart__tick"
                key={tick}
                style={{ bottom: `${(tick / max) * 100}%` }}
              >
                {tick}
                {unit}
              </span>
            ))}
          </div>

          <div className="article-chart__plot">
            <div className="article-chart__grid" aria-hidden="true">
              {ticks.map((tick) => (
                <span
                  className={`article-chart__gridline${
                    tick === 0 ? " is-base" : ""
                  }`}
                  key={tick}
                  style={{ bottom: `${(tick / max) * 100}%` }}
                />
              ))}
            </div>

            <div className="article-chart__bars">
              {bars.map((bar) => (
                <div className="article-chart__column" key={bar.label}>
                  <span className="article-chart__value">{bar.display}</span>
                  <span
                    className="article-chart__bar"
                    style={{
                      height: `${(bar.value / max) * 100}%`,
                      minHeight: bar.value > 0 ? 2 : 0,
                      background: bar.color,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="article-chart__labels">
            {bars.map((bar) => (
              <div className="article-chart__label" key={bar.label}>
                <span>{bar.label}</span>
                {bar.detail ? (
                  <span className="article-chart__detail">{bar.detail}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

export function TokenizerChart() {
  return (
    <BarChart
      title="Tokens on the tokenizer development corpus"
      note="Billions of tokens. Lower is better."
      max={7}
      ticks={[0, 2, 4, 6]}
      bars={[
        {
          label: "Bayon",
          value: 1.389,
          display: "1.389B",
          color: COLORS.bayon,
        },
        {
          label: "o200k_base",
          detail: "OpenAI tokenizer",
          value: 3.057,
          display: "3.057B",
          color: COLORS.openai,
        },
        {
          label: "Qwen2.5",
          value: 6.021,
          display: "6.021B",
          color: COLORS.qwen,
        },
      ]}
    />
  );
}

export function LanguageBleedChart() {
  return (
    <BarChart
      title="Language Bleed Ratio"
      note="Share of generated tokens outside Khmer Unicode ranges. Lower is better."
      max={20}
      ticks={[0, 5, 10, 15, 20]}
      unit="%"
      bars={[
        {
          label: "Bayon",
          value: 0.06,
          display: "0.06%",
          color: COLORS.bayon,
        },
        {
          label: "Qwen-SEA-LION-v4.5-27B-IT",
          value: 0.54,
          display: "0.54%",
          color: COLORS.qwen,
        },
        {
          label: "GPT-OSS-120B",
          value: 18.25,
          display: "18.25%",
          color: COLORS.openai,
        },
      ]}
    />
  );
}

export function InstructionTuningChart() {
  return (
    <BarChart
      title="Bayon before and after instruction tuning"
      note="Same tokenizer and evaluation protocol. Lower is better."
      max={100}
      ticks={[0, 25, 50, 75, 100]}
      unit="%"
      bars={[
        {
          label: "Bayon (pre-SFT)",
          value: 80.59,
          display: "80.59%",
          color: COLORS.bayon,
        },
        {
          label: "Bayon (instruction-tuned)",
          value: 0.06,
          display: "0.06%",
          color: COLORS.bayon,
        },
      ]}
    />
  );
}

export function TaskEvaluationChart() {
  return (
    <BarChart
      title="Khmer historical and regional QA"
      note="Correct answers out of 201. Higher is better; parameter counts are shown under each model."
      max={200}
      ticks={[0, 50, 100, 150, 200]}
      bars={[
        {
          label: "GLM-4.7",
          detail: "—",
          value: 117,
          display: "117 / 201",
          color: COLORS.glm,
        },
        {
          label: "Gemma 4 IT",
          detail: "31B",
          value: 103,
          display: "103 / 201",
          color: COLORS.gemma,
        },
        {
          label: "Qwen-SEA-LION-v4.5-IT",
          detail: "27B",
          value: 88,
          display: "88 / 201",
          color: COLORS.qwen,
        },
        {
          label: "GPT-OSS",
          detail: "120B",
          value: 54,
          display: "54 / 201",
          color: COLORS.openai,
        },
        {
          label: "Bayon (instruction-tuned)",
          detail: "100M",
          value: 15,
          display: "15 / 201",
          color: COLORS.bayon,
        },
        {
          label: "Qwen2.5-Instruct",
          detail: "500M",
          value: 4,
          display: "4 / 201",
          color: COLORS.qwen,
        },
        {
          label: "Bayon (pre-SFT)",
          detail: "100M",
          value: 0,
          display: "0 / 201",
          color: COLORS.bayon,
        },
      ]}
    />
  );
}
