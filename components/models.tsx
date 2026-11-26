export function Models() {
  return (
    <section className="section" id="models">
      <div className="section__inner">
        <div className="section__body">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            02 — Models
          </p>

          <div className="section__head">
            <h2 className="display">Models</h2>
            <p className="section__intro">
              Language models designed, trained, and evaluated for Khmer.
            </p>
          </div>

          <article className="card">
            <div className="card__visual card__visual--bayon">
              <span className="tag">bayon</span>

              <div className="card__heading">
                <h3 className="card__name">Bayon</h3>
                <p className="card__script" lang="km">
                  បាយ័ន
                </p>
              </div>

              <div className="card__art" aria-hidden="true">
                <svg
                  className="card__temple"
                  viewBox="110 70 580 350"
                  preserveAspectRatio="xMidYMax slice"
                  fill="none"
                >
                  <path
                    className="temple-distant"
                    d="M0 355C20 337 42 340 58 355C72 330 94 331 110 355C126 337 148 340 164 355C181 329 204 332 220 355C238 335 258 338 275 355C293 325 316 328 332 355C350 333 372 336 389 355C407 326 430 329 447 355C465 334 487 337 503 355C520 328 544 331 560 355C578 333 600 336 617 355C635 326 658 329 675 355C694 333 716 337 732 355C750 329 778 332 800 350L800 420L0 420Z"
                  />

                  <g
                    transform="translate(0 45)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  >
                    <path
                      className="temple-stone"
                      d="M285 355V315H305V280H325V245H350V220H375V190H425V220H450V245H475V280H495V315H515V355Z"
                    />
                    <path
                      className="temple-stone temple-stone--2"
                      d="M325 280V245L340 225V205L355 188L370 205V225L385 245V280Z"
                    />
                    <path
                      className="temple-stone temple-stone--3"
                      d="M360 245V205L375 185V165L400 142L425 165V185L440 205V245Z"
                    />
                    <path
                      className="temple-stone temple-stone--2"
                      d="M415 280V245L430 225V205L445 188L460 205V225L475 245V280Z"
                    />
                    <path
                      className="temple-detail"
                      d="M382 177Q400 160 418 177L415 199Q400 210 385 199Z"
                    />
                    <path
                      className="temple-base"
                      d="M305 315H495V335H305Z"
                    />
                    <path
                      className="temple-base temple-base--deep"
                      d="M285 335H515V355H285Z"
                    />
                  </g>

                  <path
                    className="temple-canopy"
                    d="M0 325C22 302 45 306 63 325C80 294 108 298 126 325C145 301 169 305 187 325C207 290 236 294 253 325C274 299 298 303 317 325C337 290 367 294 385 325C406 298 430 301 449 325C470 290 500 294 518 325C539 298 563 301 582 325C602 292 631 296 649 325C670 299 694 303 713 325C733 294 762 298 780 325C789 316 796 317 800 321L800 420L0 420Z"
                  />

                  <path
                    className="temple-canopy temple-canopy--deep"
                    d="M0 350C35 322 68 328 98 351C128 319 164 324 194 351C226 318 260 324 291 351C322 319 358 324 390 351C421 318 457 324 488 351C520 319 555 324 586 351C617 318 653 324 684 351C716 319 750 325 800 342L800 420L0 420Z"
                  />

                  <g className="temple-tree">
                    <path d="M35 390V270L8 315H24L4 350H21L2 385Z" />
                    <path d="M120 395V280L94 320H110L90 355H106L87 392Z" />
                    <path d="M685 395V275L659 317H675L655 353H671L652 392Z" />
                    <path d="M770 395V285L747 322H762L742 357H757L740 395Z" />
                  </g>

                  <g className="temple-tree">
                    <path d="M35 402V320L12 355H25L7 380H22L5 405Z" />
                    <path d="M120 405V330L98 361H111L94 387H108L93 410Z" />
                    <path d="M685 405V325L663 358H676L658 385H672L656 410Z" />
                    <path d="M770 405V335L750 365H762L746 391H759L746 412Z" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="card__body">
              <p className="card__text">
                Bayon is the first native, from-scratch decoder-only generative
                Khmer language model. Unlike many existing models that are
                simply fine-tuned versions of Western or multilingual
                architectures, this model was built and pretrained entirely
                from scratch by Cambodians, for Cambodia.
              </p>

              <a
                className="arrow-link"
                href="https://huggingface.co/attentionlab/bayon"
                target="_blank"
                rel="noreferrer"
              >
                Explore the model
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
