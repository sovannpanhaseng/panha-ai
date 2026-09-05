export function Models() {
  return (
    <section id="models">
      <div className="mx-auto grid max-w-6xl px-6 py-24 md:grid-cols-[0.8fr_2.2fr] md:py-32">
        <div className="col-start-2">
          <div className="mb-8 flex items-center justify-between gap-6">
            <p className="max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Models
            </p>
          </div>

          <article className="group relative grid overflow-hidden rounded-2xl border border-foreground/20 bg-card transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-2">
            {/* Illustration */}
            <div className="relative flex min-h-72 flex-col overflow-hidden border-b border-border bg-[#6699b5] p-8 md:min-h-[28rem] md:border-b-0 md:border-r md:p-12 lg:p-16">
              {/* Blue sky */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-[#4f86aa] via-[#6d9fba] to-[#527d72]"
              />

              {/* Model label */}
              <span className="absolute right-8 top-8 z-30 rounded-md bg-white/15 px-2 py-1 font-mono text-xs lowercase tracking-wide text-white/70 backdrop-blur-sm md:right-12 md:top-12">
                bayon
              </span>

              {/* Model name */}
              <h2 className="relative z-30 mt-2 font-serif text-6xl leading-[0.9] tracking-tight text-white/90 sm:text-7xl lg:text-8xl">
                Bayon
                <span className="mt-4 block text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  (បាយ័ន)
                </span>
              </h2>

              {/* Landscape */}
              <div
                aria-hidden="true"
                className="absolute inset-x-[-5%] bottom-0 z-10 blur-[5px]"
              >
                <svg
                  viewBox="0 0 800 420"
                  className="h-auto w-full"
                  preserveAspectRatio="xMidYMax slice"
                >
                  {/* Distant forest */}
                  <path
                    d="
                      M0 355
                      C20 337 42 340 58 355
                      C72 330 94 331 110 355
                      C126 337 148 340 164 355
                      C181 329 204 332 220 355
                      C238 335 258 338 275 355
                      C293 325 316 328 332 355
                      C350 333 372 336 389 355
                      C407 326 430 329 447 355
                      C465 334 487 337 503 355
                      C520 328 544 331 560 355
                      C578 333 600 336 617 355
                      C635 326 658 329 675 355
                      C694 333 716 337 732 355
                      C750 329 778 332 800 350
                      L800 420
                      L0 420
                      Z
                    "
                    fill="#3e684e"
                  />

                  {/* Bayon temple peak */}
                  <g
                    transform="translate(0 45)"
                    fill="#747976"
                    stroke="#5b605d"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  >
                    {/* Main stepped temple mass */}
                    <path
                      d="
                        M285 355
                        V315
                        H305
                        V280
                        H325
                        V245
                        H350
                        V220
                        H375
                        V190
                        H425
                        V220
                        H450
                        V245
                        H475
                        V280
                        H495
                        V315
                        H515
                        V355
                        Z
                      "
                    />

                    {/* Left tower */}
                    <path
                      d="
                        M325 280
                        V245
                        L340 225
                        V205
                        L355 188
                        L370 205
                        V225
                        L385 245
                        V280
                        Z
                      "
                      fill="#686d69"
                    />

                    {/* Center tower */}
                    <path
                      d="
                        M360 245
                        V205
                        L375 185
                        V165
                        L400 142
                        L425 165
                        V185
                        L440 205
                        V245
                        Z
                      "
                      fill="#6e736f"
                    />

                    {/* Right tower */}
                    <path
                      d="
                        M415 280
                        V245
                        L430 225
                        V205
                        L445 188
                        L460 205
                        V225
                        L475 245
                        V280
                        Z
                      "
                      fill="#686d69"
                    />

                    {/* Small central face / tower detail */}
                    <path
                      d="
                        M382 177
                        Q400 160 418 177
                        L415 199
                        Q400 210 385 199
                        Z
                      "
                      fill="#7b7f7b"
                    />

                    {/* Lower stepped blocks */}
                    <path d="M305 315H495V335H305Z" fill="#626764" />
                    <path d="M285 335H515V355H285Z" fill="#595e5b" />
                  </g>

                  {/* Dense forest canopy — raised higher */}
                  <path
                    d="
                      M0 325

                      C22 302 45 306 63 325
                      C80 294 108 298 126 325
                      C145 301 169 305 187 325
                      C207 290 236 294 253 325
                      C274 299 298 303 317 325
                      C337 290 367 294 385 325
                      C406 298 430 301 449 325
                      C470 290 500 294 518 325
                      C539 298 563 301 582 325
                      C602 292 631 296 649 325
                      C670 299 694 303 713 325
                      C733 294 762 298 780 325
                      C789 316 796 317 800 321

                      L800 420
                      L0 420
                      Z
                    "
                    fill="#294b39"
                  />

                  {/* Thick foreground forest */}
                  <path
                    d="
                      M0 350

                      C35 322 68 328 98 351
                      C128 319 164 324 194 351
                      C226 318 260 324 291 351
                      C322 319 358 324 390 351
                      C421 318 457 324 488 351
                      C520 319 555 324 586 351
                      C617 318 653 324 684 351
                      C716 319 750 325 800 342

                      L800 420
                      L0 420
                      Z
                    "
                    fill="#1f3d2e"
                  />

                  {/* Tall tree silhouettes */}
                  <g fill="#1b382b">
                    <path d="M35 390V270L8 315H24L4 350H21L2 385Z" />
                    <path d="M120 395V280L94 320H110L90 355H106L87 392Z" />

                    <path d="M685 395V275L659 317H675L655 353H671L652 392Z" />
                    <path d="M770 395V285L747 322H762L742 357H757L740 395Z" />
                  </g>

                  {/* Simplified trees */}
                  <g fill="#1b382b">
                    <path d="M35 402V320L12 355H25L7 380H22L5 405Z" />
                    <path d="M120 405V330L98 361H111L94 387H108L93 410Z" />
                    <path d="M685 405V325L663 358H676L658 385H672L656 410Z" />
                    <path d="M770 405V335L750 365H762L746 391H759L746 412Z" />
                  </g>

                  {/* Slight atmospheric tint */}
                  <rect
                    x="0"
                    y="0"
                    width="800"
                    height="420"
                    fill="#6b9ab0"
                    opacity="0.08"
                  />
                </svg>
              </div>

              {/* Soft atmospheric fade */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#244536]/35 to-transparent"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-10 p-8 md:p-12 lg:p-16">
              <div>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Bayon is the first native, from-scratch decoder-only
                  generative Khmer language model. Unlike many existing models
                  that are simply fine-tuned versions of Western or multilingual
                  architectures, this model was built and pretrained entirely
                  from scratch by Cambodians, for Cambodia.
                </p>
              </div>

              <a
                href="https://huggingface.co/attentionlab/bayon"
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm font-medium text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground"
              >
                Explore the model
                <span
                  aria-hidden="true"
                  className="text-base transition-transform duration-200 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
