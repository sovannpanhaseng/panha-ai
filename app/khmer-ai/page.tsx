import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khmer AI: Language Models and Research in Cambodia | Panha AI",
  description:
    "Understand Khmer AI, Khmer language models, NLP research, datasets, and the development of language technology for Cambodia.",
};

export default function KhmerAiPage() {
  return (
    <main id="main" className="article-page">
      <div className="article-page__inner">
        <article>
          <header className="article-head">
            <h1 className="article-title">
              What Is Khmer AI, and Why Does Cambodia Need It?
            </h1>
          </header>

          <div className="article-body">
            <p>
              Khmer AI is the work of making artificial intelligence useful in
              the Khmer language. It includes Khmer language models, natural
              language processing, speech and document technologies, datasets,
              evaluation methods, and the applications that allow people to use
              software in Khmer rather than translating their needs into another
              language.
            </p>

            <p>
              For Cambodia, this is not only a technical question. A system that
              can answer questions, summarize a document, or explain a public
              service in English but not in Khmer excludes most of the country
              from the benefits of AI. Khmer AI is about treating Khmer as a
              first-class language: its script, its grammar, its vocabulary, and
              the ways its speakers actually use it.
            </p>

            <h2>What Is Khmer AI?</h2>

            <p>
              Khmer AI is not a single model or product. It is a field of
              research and engineering concerned with how machines understand,
              generate, and work with Khmer. The most visible part of that work
              is the language model: a system trained on large amounts of text to
              predict language patterns and, after further training, follow
              instructions, answer questions, write, translate, and reason.
            </p>

            <p>
              A Khmer language model can be general-purpose or specialized. It
              might be designed for conversation, document analysis, customer
              support, education, or public information. It might run in a data
              center or on a local device. What makes it a Khmer model is not
              only that it has seen Khmer text, but that its vocabulary,
              training data, evaluation, and behavior are designed around the
              language.
            </p>

            <p>
              Khmer AI also includes systems that are not language models in the
              conversational sense: Khmer speech recognition, text-to-speech,
              optical character recognition for printed and handwritten
              documents, machine translation, search, and tools that help
              preserve and organize Khmer-language material. These systems often
              share the same foundations: data, tokenization, modeling, and
              evaluation.
            </p>

            <p>
              The term is sometimes used more broadly to describe AI development
              in Cambodia as a whole, including computer vision, audio, robotics,
              and world models. Those areas matter, and this page returns to
              them below. Panha AI&apos;s own work sits in the language layer,
              which remains comparatively underdeveloped in open Khmer AI
              research.
            </p>

            <h2>Why Does Cambodia Need Khmer AI?</h2>

            <p>
              Khmer is the official language of Cambodia and is spoken by more
              than sixteen million people. It is also one of the languages that
              remains underrepresented in the global language-model ecosystem.
              Most large models are developed for English and a small number of
              other high-resource languages. Khmer is often an afterthought:
              present in the training data, but inefficiently represented and
              rarely evaluated well.
            </p>

            <p>
              That gap has practical consequences. Public services, legal
              information, health guidance, education, financial tools, and
              everyday software are increasingly mediated by language
              technology. If those systems work poorly in Khmer, Khmer speakers
              either have to rely on another language or accept lower-quality
              results. Both outcomes widen existing inequalities.
            </p>

            <p>Khmer AI matters for several connected reasons:</p>

            <ul>
              <li>
                <strong>Access:</strong> People should be able to ask questions,
                understand documents, and use digital services in the language
                they speak most comfortably.
              </li>
              <li>
                <strong>Representation:</strong> Khmer-language text, speech, and
                cultural knowledge should be part of the data from which AI
                systems learn, not a small residue left after English.
              </li>
              <li>
                <strong>Quality:</strong> Systems designed around Khmer can avoid
                some of the fragmentation, translation artifacts, and unwanted
                language mixing that affect multilingual models adapted from
                elsewhere.
              </li>
              <li>
                <strong>Sovereignty:</strong> Cambodia needs researchers,
                institutions, and developers who can build, inspect, and
                maintain language technology for their own context.
              </li>
              <li>
                <strong>Preservation:</strong> Better digital tools can support
                the documentation, search, and study of Khmer-language material,
                including historical and cultural texts.
              </li>
            </ul>

            <h2>Where Khmer AI Efforts Are Concentrated Today</h2>

            <p>
              Most visible Khmer AI efforts today are concentrated in computer
              vision, audio, and robotics. In Cambodia, these areas attract
              applied projects, demonstrations, and hardware-oriented
              experimentation: systems that inspect images, recognize or
              synthesize speech, monitor roads or crops, automate equipment, or
              support physical operations. They address real problems, and they
              are an important part of a mature AI ecosystem.
            </p>

            <p>
              Very few open efforts have focused on Khmer natural language
              processing, pretrained language models, and world models. NLP work
              requires unglamorous infrastructure: cleaned corpora, tokenizers,
              training pipelines, evaluation sets, and people who can read and
              judge Khmer output. Pretrained language models require compute,
              engineering, and repeated experiments before they become useful.
              World models — systems that learn how an environment behaves and
              changes, for simulation, planning, and embodied AI — are even less
              established in the Cambodian context.
            </p>

            <p>
              This imbalance is understandable. A camera-based demo can show a
              result quickly. A robot can be seen moving. A language model&apos;s
              progress is often measured in loss curves, token efficiency, and
              evaluation tables that mean little outside research. Data work is
              slow, and its failures are easy to hide until a model is deployed.
              The incentives favor visible applications over the foundations
              beneath them.
            </p>

            <p>
              The consequence is a gap between the application layer and the
              language layer. A vision system can detect something in an image,
              but it still needs language to explain the finding, record a
              report, answer a follow-up question, or coordinate a response. A
              speech interface needs language understanding to turn recognized
              words into action. A robot needs instructions, representations of
              its environment, and a way to communicate uncertainty. Without
              Khmer-language foundations, these systems either operate in
              English or depend on a multilingual model that was not designed
              for Khmer.
            </p>

            <p>
              Panha AI&apos;s focus is deliberately on this thinner layer. Rather
              than treating Khmer NLP as a small feature added to an
              application, Panha AI works on the resources that make Khmer
              language technology possible: open corpora such as KhmerPile,
              Khmer-focused tokenization and pretrained models such as Bayon,
              the Panha model family, and evaluation methods that measure
              Khmer-specific behavior. That focus is a bet that language
              resources are foundational infrastructure, not a side project.
            </p>

            <h2>The Technical Challenge of Khmer</h2>

            <p>
              Khmer is not simply English with different words. Its writing
              system, word structure, and digital footprint create specific
              problems for language models. Understanding those problems is
              necessary for judging whether a model is genuinely capable in
              Khmer or only appears to be.
            </p>

            <p>
              <strong>Script and segmentation.</strong> Khmer is written in an
              abugida with combining marks, stacked consonants, and no spaces
              between words. Deciding where one word ends and another begins is
              context-dependent. A model must learn these boundaries implicitly,
              and any tool that splits Khmer text into smaller units must do so
              without destroying meaning.
            </p>

            <p>
              <strong>Tokenization and the token tax.</strong> Language models
              process text as tokens, not as characters or words. A tokenizer
              built mainly for English can represent a short Khmer passage with
              far more tokens than an equivalent English passage. That
              “token tax” increases training and inference costs, shortens the
              effective context window, and makes Khmer information less
              efficiently represented inside the model.
            </p>

            <p>
              Panha AI&apos;s Bayon work illustrates the scale of the issue. On
              the tokenizer development corpus, Bayon&apos;s Khmer-focused
              5,000-token vocabulary produced approximately 1.389 billion
              tokens, compared with 6.021 billion using Qwen2.5&apos;s tokenizer
              and 3.057 billion using o200k_base. That is a 4.33&times; reduction
              against Qwen2.5 and a 2.20&times; reduction against o200k_base on
              that corpus.
            </p>

            <p>
              <strong>Data scarcity and data quality.</strong> Khmer has a
              substantial web presence, but far less high-quality, openly
              available text than English. Web data also contains duplicates,
              mixed-language pages, extraction errors, and material of uneven
              quality. Building a Khmer corpus is therefore not just a matter of
              downloading pages; it requires filtering, scoring, deduplication,
              and documentation.
            </p>

            <p>
              <strong>Cross-language interference.</strong> Multilingual models
              can leak words, characters, or grammatical patterns from other
              languages into Khmer output. This is sometimes called language
              bleeding. A model may produce a sentence that is mostly Khmer but
              includes Chinese, Thai, or Latin-script fragments. The problem is
              especially visible in smaller models and in languages with limited
              training data.
            </p>

            <p>
              <strong>Evaluation.</strong> Fluency is not the same as
              correctness. A response can be grammatically plausible Khmer and
              still be factually wrong, culturally inappropriate, or unsafe.
              Khmer AI needs evaluation sets written by Khmer speakers, tasks
              that reflect real use, and metrics that measure script fidelity,
              comprehension, reasoning, and helpfulness separately.
            </p>

            <h2>What Khmer Language Models Need</h2>

            <p>
              A capable Khmer language model depends on several layers of work.
              Weakness in any one layer limits the rest.
            </p>

            <div className="article-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">What it does</th>
                    <th scope="col">Why it matters for Khmer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data</td>
                    <td>Supplies the text and instructions a model learns from.</td>
                    <td>
                      Determines coverage of Khmer vocabulary, registers,
                      domains, and contemporary usage.
                    </td>
                  </tr>
                  <tr>
                    <td>Tokenizer</td>
                    <td>Turns text into the units a model processes.</td>
                    <td>
                      Affects efficiency, context length, and how well Khmer
                      words and script are represented.
                    </td>
                  </tr>
                  <tr>
                    <td>Architecture</td>
                    <td>Defines how the model stores and combines information.</td>
                    <td>
                      Controls capacity, speed, memory use, and suitability for
                      local hardware.
                    </td>
                  </tr>
                  <tr>
                    <td>Instruction tuning</td>
                    <td>Teaches the model to follow requests and format answers.</td>
                    <td>
                      Shapes helpfulness, answer style, and consistency in Khmer.
                    </td>
                  </tr>
                  <tr>
                    <td>Evaluation</td>
                    <td>Measures what the model can and cannot do.</td>
                    <td>
                      Reveals whether performance is real, culturally grounded,
                      and safe for intended uses.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>How Khmer AI Is Built</h2>

            <p>
              <strong>Collect and curate data.</strong> The process begins with
              Khmer text from sources such as web crawls, public documents,
              books, and carefully licensed collections. The data is filtered
              for language, quality, duplication, and suitability. Metadata is
              retained so that researchers can inspect and reproduce the
              pipeline.
            </p>

            <p>
              <strong>Design the tokenizer.</strong> A Khmer-focused tokenizer
              is trained on representative Khmer text so that common words and
              script patterns are represented efficiently. Byte fallback can
              preserve coverage for characters outside the learned vocabulary.
              The goal is not merely a smaller vocabulary, but a better
              relationship between Khmer text and the model&apos;s input units.
            </p>

            <p>
              <strong>Pretrain the model.</strong> During pretraining, the model
              learns statistical patterns from large amounts of text. For Khmer,
              the corpus should include more than one genre and more than one
              period. A model trained only on news articles will struggle with
              conversation; a model trained only on formal prose will struggle
              with everyday language.
            </p>

            <p>
              <strong>Instruction-tune and align.</strong> Pretraining teaches
              language patterns, but it does not automatically produce a useful
              assistant. Instruction tuning uses examples of requests and
              responses to teach format, helpfulness, and task behavior. For
              Khmer, this stage is also where script consistency and answer
              style can be strengthened.
            </p>

            <p>
              <strong>Evaluate and iterate.</strong> Evaluation should combine
              automated metrics with human review. Perplexity and token counts
              describe efficiency; task accuracy describes capability; human
              evaluation describes naturalness, cultural fit, and usefulness.
              None of these alone is enough.
            </p>

            <p>
              <strong>Deploy responsibly.</strong> A model that cannot run on
              available hardware, or that costs too much per request, will not
              reach the people who need it. Efficient architectures, quantized
              models, and local deployment are part of making Khmer AI
              accessible rather than theoretical.
            </p>

            <h2>Language Models Are Only One Part of Khmer AI</h2>

            <p>
              Conversation is the most visible application of language models,
              but Khmer AI covers a wider range of technologies. Progress in one
              area can support the others, and the same data infrastructure
              often serves multiple applications.
            </p>

            <ul>
              <li>
                <strong>Speech recognition and synthesis:</strong> Transcription,
                voice interfaces, accessibility tools, and archives of spoken
                Khmer.
              </li>
              <li>
                <strong>Optical character recognition:</strong> Digitizing
                printed books, administrative records, and historical documents
                in Khmer script.
              </li>
              <li>
                <strong>Machine translation:</strong> Khmer-to-English and
                English-to-Khmer systems that preserve meaning, terminology, and
                register.
              </li>
              <li>
                <strong>Information retrieval:</strong> Search and question
                answering over Khmer documents, including material that has
                never been well indexed.
              </li>
              <li>
                <strong>Education and public information:</strong> Tools that
                explain concepts, summarize services, and support learning in
                Khmer.
              </li>
            </ul>

            <p>
              These systems raise their own technical and ethical questions.
              Speech data is harder to collect and share than text. OCR must
              handle variation in fonts, paper, and handwriting. Translation
              can erase nuance. A useful Khmer AI ecosystem needs specialists
              in each area, not only general-purpose chatbots.
            </p>

            <h2>Evaluating Khmer AI Beyond Fluency</h2>

            <p>
              The most important question about a Khmer AI system is not whether
              it can produce a Khmer sentence. It is whether the sentence is
              correct, appropriate, and useful for the task at hand. Evaluation
              should therefore be designed around real Khmer use rather than
              convenience for benchmark developers.
            </p>

            <p>
              <strong>Linguistic fidelity.</strong> Does the output use Khmer
              script consistently? Are words spelled correctly? Are particles,
              classifiers, and honorifics used appropriately? A model can be
              fluent in a shallow sense while making errors that a native
              speaker immediately notices.
            </p>

            <p>
              <strong>Task performance.</strong> Can the model answer questions,
              summarize a document, extract information, or follow instructions
              accurately? Benchmarks should include tasks that Cambodian users
              actually need, not only translated versions of English exams.
            </p>

            <p>
              <strong>Cultural and regional knowledge.</strong> Khmer language
              is tied to Cambodian history, institutions, geography, and social
              norms. Evaluation should test whether a model understands this
              context without inventing facts or imposing foreign assumptions.
            </p>

            <p>
              <strong>Safety and uncertainty.</strong> A useful model should know
              when it does not know. It should avoid confident fabrication,
              recognize sensitive topics, and communicate limitations clearly in
              Khmer.
            </p>

            <p>
              Panha AI introduced the Language Bleed Ratio (LBR) to measure one
              narrow but important dimension of Khmer generation: the proportion
              of generated tokens containing characters outside Khmer Unicode
              ranges. On a 201-question Khmer historical and regional benchmark,
              Bayon achieved an LBR of 0.06% after instruction tuning. The metric
              is useful for studying script consistency, but it is not a measure
              of grammatical quality, factual accuracy, or general intelligence.
            </p>

            <h2>Panha AI&apos;s Work on Khmer AI</h2>

            <p>
              Panha AI is an independent Cambodian research project working on
              the data, models, and evaluation methods needed for Khmer language
              technology. Its work is organized around several connected
              projects.
            </p>

            <p>
              <strong>Bayon</strong> is a 100-million-parameter Khmer-focused
              language model built to explore native-language specialization
              from the ground up. It uses a custom Khmer tokenizer, Khmer
              pretraining data, and linguistically constrained instruction
              tuning. Bayon was designed as a compact model that can be trained
              and studied with limited computational resources.
            </p>

            <p>
              <strong>KhmerPile</strong> is an open Khmer-language text corpus
              built from Common Crawl. The current release contains
              approximately 627,000 documents after deduplication, with metadata
              preserved for research and reproducibility. It is intended to
              reduce the cost of building and studying Khmer language models.
            </p>

            <p>
              <strong>Panha</strong> is a family of Khmer-first language models
              and related language technology. Together with Bayon and
              KhmerPile, it contributes to a broader effort to make Khmer AI
              research more open, measurable, and useful for Cambodia.
            </p>

            <p>
              These projects are documented in Panha AI&apos;s research releases.
              You can explore the work in{" "}
              <Link href="/advancements">Advancements</Link>, browse the{" "}
              <Link href="/models">models</Link> and{" "}
              <Link href="/datasets">datasets</Link>, or read the{" "}
              <Link href="/publications">papers</Link>.
            </p>

            <h2>Why Open Research Matters for Khmer AI</h2>

            <p>
              Khmer AI is still a small field relative to the scale of the
              language community it serves. Open datasets, model weights,
              evaluation resources, and documentation allow researchers to build
              on existing work instead of reproducing the same pipelines in
              isolation. They also make it possible for outside researchers to
              inspect claims, test models on their own data, and identify
              failures that a single team might miss.
            </p>

            <p>
              Openness is not only about releasing files. It is also about
              describing limitations, documenting data sources, and being clear
              about what a model has and has not been evaluated on. For a
              language with limited digital resources, that kind of transparency
              is part of the infrastructure.
            </p>

            <p>
              At the same time, open research should be responsible research.
              Datasets can contain personal information, copyrighted material,
              or harmful content. Models can be used for purposes their
              developers did not intend. Khmer AI needs practices for licensing,
              filtering, documentation, and review alongside technical progress.
            </p>

            <h2>Sovereignty Requires the Whole Stack</h2>

            <p>
              AI sovereignty is often described as building or owning a model.
              That is too narrow. Sovereignty is the ability to make informed
              choices across the whole stack: data, compute, models,
              evaluation, deployment, and governance. It means being able to
              build what is needed, inspect how it works, adapt it to local
              conditions, and maintain it over time.
            </p>

            <p>
              For Khmer AI, that stack spans computer vision, audio, natural
              language processing, pretrained foundation models, world models,
              and robotics. Each area has its own data requirements, talent
              pipeline, hardware constraints, benchmarks, and failure modes. A
              country cannot be sovereign in AI if it can see and hear but
              cannot read, reason, or explain. It also cannot be sovereign if it
              can converse but cannot perceive the physical world or act within
              it.
            </p>

            <p>
              These layers reinforce one another. Language models make vision
              and audio systems easier to use. Speech and vision provide
              language models with information from the physical world. World
              models support planning, simulation, and robotics. Robots generate
              data and create demanding tests for perception, language, and
              decision-making. A gap in any layer becomes a dependency on
              systems built elsewhere.
            </p>

            <p>
              The goal is not for every laboratory or company to work on every
              layer. It is for Cambodia&apos;s ecosystem as a whole to cover
              them, with enough depth that the layers can connect. That requires
              sustained investment in datasets, evaluation, compute, education,
              and institutions, not only in demonstrations. It also requires
              researchers who can specialize without being isolated, and
              support for the slow infrastructure work that makes rapid
              application development possible.
            </p>

            <p>
              Panha AI contributes to one part of that stack: Khmer NLP
              resources and pretrained language models. That focus is
              intentional, but it is not a claim that language alone is
              sufficient. A sovereign Khmer AI capability will require strong
              work in perception, speech, world modeling, robotics, and the
              language technologies that connect them. The point is to build
              the missing layer, not to pretend it is the only layer.
            </p>

            <h2>The Road Ahead</h2>

            <p>
              The next stage of Khmer AI is not simply larger models or a single
              application category. It is better foundations across the stack:
              more diverse and carefully documented Khmer data, tokenizers that
              respect the structure of the language, benchmarks written by Khmer
              speakers, and deployment methods that work within local
              constraints.
            </p>

            <p>
              Speech, OCR, computer vision, world models, robotics, and
              domain-specific applications will matter as much as conversational
              models. So will the institutions and people who can maintain these
              systems over time. A language technology ecosystem is built
              through sustained work on data, evaluation, engineering, and
              community.
            </p>

            <p>
              Khmer AI will be judged not by whether a demo can produce a
              sentence, but by whether Khmer speakers can rely on the result.
              That standard is higher, and it is the one that matters.
            </p>

            <p>
              To learn more about Panha AI&apos;s approach, read{" "}
              <Link href="/about">About Panha AI</Link> or explore the{" "}
              <Link href="/objectives">research objectives</Link>.
            </p>
          </div>

          <p className="article-back">
            <Link href="/advancements">Explore Panha AI research</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
