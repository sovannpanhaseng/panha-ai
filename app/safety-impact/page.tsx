import Link from "next/link";
import type { Metadata } from "next";
import { CurrentMonth } from "@/components/current-month";

export const metadata: Metadata = {
  title: "Safety & Impact — Panha AI",
  description:
    "Panha AI's approach to safety, responsibility, and the real-world impact of Khmer language technology.",
};

const MONTH_FALLBACK = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
}).format(new Date());

export default function SafetyImpactPage() {
  return (
    <main id="main" className="article-page">
      <div className="article-page__inner">
        <article>
          <header className="article-head">
            <h1 className="article-title">Safety &amp; Impact</h1>
          </header>

          <div className="article-body">
            <p>
              As of <CurrentMonth fallback={MONTH_FALLBACK} />, Panha AI has not
              developed any technology intended or designed to facilitate harm
              against humanity. Our research and development activities remain
              focused on language models, natural language processing, datasets,
              and related language technologies. We currently do not possess the
              technical capabilities or resources to develop technologies
              specifically designed to cause large-scale physical harm.
            </p>

            <p>
              Nevertheless, we recognize that technological capabilities
              evolve, and that technologies developed for beneficial purposes
              can carry risks of misuse. We therefore consider vigilance,
              responsible development, and appropriate safeguards essential
              responsibilities as our research progresses.
            </p>

            <h2>Why Safety and Impact Matter for Khmer AI</h2>

            <p>
              Most discussions of AI safety focus on extreme risks. Those risks
              deserve attention. For language technology, safety also appears
              in smaller, more immediate failures: an inaccurate summary, a
              fabricated fact, a mistranslation, a culturally inappropriate
              response, or a system that works well in English but fails in
              Khmer.
            </p>

            <p>
              Impact is the other side of the same question. A technology can
              be safe in a narrow technical sense and still exclude the people
              it was meant to serve. The development of Khmer AI therefore
              requires attention to both how systems fail and who gains access
              to them.
            </p>

            <h2>Our Approach to Safety</h2>

            <p>
              Panha AI treats safety as part of the research process rather than
              a final checklist. Our approach is shaped by the limits of a small
              independent project, the characteristics of Khmer, and the
              contexts in which language technology may be used.
            </p>

            <ul>
              <li>
                <strong>Document intended use and limitations:</strong> Released
                models and datasets should be accompanied by clear descriptions
                of what they were designed for, what they have been evaluated
                on, and where they are likely to fail.
              </li>
              <li>
                <strong>Measure what we claim:</strong> Capability claims should
                be supported by evaluation. When a result is preliminary, we
                should say so rather than presenting it as a general measure of
                quality.
              </li>
              <li>
                <strong>Evaluate in Khmer:</strong> Script consistency,
                grammaticality, cultural context, and factual accuracy matter
                separately. A single benchmark cannot establish that a model is
                safe or useful.
              </li>
              <li>
                <strong>Keep humans in the loop:</strong> Language technology
                should support human judgment, not replace it in decisions that
                carry material consequences.
              </li>
              <li>
                <strong>Release responsibly:</strong> Openness improves scrutiny
                and reproducibility, but it also affects how quickly a system
                can spread. Release decisions should account for capability,
                documentation, licensing, and intended use.
              </li>
            </ul>

            <h2>What We Evaluate</h2>

            <p>
              Our evaluations are currently focused on the technical behavior of
              Khmer language models and the quality of the data used to build
              them. This is not yet a comprehensive safety program, and we do
              not present it as one.
            </p>

            <ul>
              <li>
                <strong>Linguistic fidelity:</strong> Whether a model produces
                Khmer script consistently, uses the language naturally, and
                avoids unwanted foreign-language output.
              </li>
              <li>
                <strong>Task behavior:</strong> Whether a model can answer
                questions, follow instructions, and produce useful responses in
                the domains it was trained for.
              </li>
              <li>
                <strong>Factual reliability:</strong> Whether claims are
                accurate and whether the model communicates uncertainty instead
                of inventing details.
              </li>
              <li>
                <strong>Harmful content and misuse:</strong> Whether outputs
                reproduce bias, facilitate deception, or provide dangerous
                guidance without appropriate caution.
              </li>
              <li>
                <strong>Data and privacy:</strong> What data was used, how it
                was filtered, what limitations it carries, and what should not
                be inferred from its presence in a corpus.
              </li>
              <li>
                <strong>Deployment context:</strong> Whether a system is being
                used for low-stakes experimentation or in a setting where errors
                could affect health, legal standing, finances, or personal
                safety.
              </li>
            </ul>

            <p>
              Current model-specific findings are documented in the{" "}
              <Link href="/models/bayon">Bayon model card</Link> and the{" "}
              <Link href="/news/2026-07-02">release notes</Link>. Dataset
              limitations are documented in the{" "}
              <Link href="/news/2026-09-14">KhmerPile release</Link>.
            </p>

            <h2>Impact</h2>

            <p>
              Khmer AI can expand access to information, tools, and research
              capacity. It can also reproduce existing inequalities, concentrate
              power, or create new forms of dependency. The outcome depends on
              how the technology is built, who is involved, and how it is
              deployed.
            </p>

            <ul>
              <li>
                <strong>Access and inclusion:</strong> Khmer speakers should be
                able to use digital systems in their own language, including
                people who are not fluent in English or unfamiliar with
                AI interfaces.
              </li>
              <li>
                <strong>Research capacity:</strong> Open datasets, models, and
                documentation can help Cambodian researchers and developers
                build expertise that remains in the region.
              </li>
              <li>
                <strong>Public information and education:</strong> Language tools
                can make services and educational material easier to understand,
                provided that errors are visible and correctable.
              </li>
              <li>
                <strong>Cultural continuity:</strong> Better digital tools can
                support the organization, search, and study of Khmer-language
                material, including historical and cultural texts.
              </li>
              <li>
                <strong>Risk of dependency:</strong> If Khmer AI is built only
                by adapting systems from elsewhere, important decisions about
                data, evaluation, and deployment will continue to be made
                outside Cambodia.
              </li>
              <li>
                <strong>Risk of harm:</strong> Inaccurate, biased, or misleading
                outputs can spread quickly, particularly where users have few
                alternatives for verification.
              </li>
            </ul>

            <p>
              Being local does not automatically make a system responsible. The
              impact of Khmer AI should be judged by whether it improves
              people&apos;s ability to understand, decide, and participate, not
              simply by whether a model can produce convincing Khmer text.
            </p>

            <h2>Open Research and Responsibility</h2>

            <p>
              Panha AI works on open datasets, model weights, evaluation
              resources, and research documentation. Openness allows others to
              inspect results, test models on their own data, and build on
              previous work. It also creates risks: released capabilities can be
              used for purposes their developers did not intend.
            </p>

            <p>
              We therefore aim to release artifacts with enough context to
              support responsible use, including intended uses, known
              limitations, evaluation results, data documentation, and licensing
              information. We do not treat openness as a substitute for safety,
              and we do not treat safety concerns as a reason to hide failures.
            </p>

            <h2>The Panha Charter</h2>

            <p>
              The Panha Charter establishes the philosophical and behavioral
              principles guiding the Panha family of language models. It serves
              as a shared foundation for how these models are expected to
              interact with users, approach disagreements, handle sensitive
              subjects, and respond to requests that may present risks of harm.
            </p>

            <p>
              Rather than prescribing identical responses in every situation,
              the Charter establishes underlying principles intended to remain
              consistent across different models, capabilities, and deployment
              environments.
            </p>

            <p>
              Its principles guide model behavior, including the treatment of
              user autonomy, intellectual freedom, political neutrality,
              responsible assistance, and circumstances in which safety
              concerns may warrant intervention or escalation.
            </p>

            <p>
              As the Panha family evolves, implementations of the Charter may be
              adapted to account for changes in model architecture,
              capabilities, and deployment contexts while retaining its
              underlying philosophical commitments.
            </p>

            <p>
              Read the <Link href="/charter">Panha Charter</Link> for the
              full set of principles guiding the Panha family of models.
            </p>

            <h2>Limitations</h2>

            <p>
              Panha AI is an independent research project, not a certified
              safety organization or a regulator. Our current models are small,
              our evaluation sets are limited, and our safety work is still
              developing. The absence of a reported problem does not mean that a
              system is safe.
            </p>

            <p>
              This page describes our approach at a particular point in time. It
              is not a certification, a guarantee, or a complete account of
              every risk. As our capabilities and research change, this page
              should change with them.
            </p>

            <h2>Reporting Concerns</h2>

            <p>
              We welcome reports of harmful outputs, data problems, evaluation
              errors, or potential misuse involving Panha AI models and
              datasets. Useful reports include the model or dataset involved, a
              description of the issue, and steps to reproduce it where
              possible.
            </p>

            <p>
              Contact:{" "}
              <a href="mailto:sovannpanha359.seng@gmail.com">
                sovannpanha359.seng@gmail.com
              </a>
            </p>
          </div>

          <p className="article-back">
            <Link href="/">Back to home</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
