import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Models } from "@/components/models";
import { Datasets } from "@/components/datasets";
import { PageToc } from "@/components/page-toc";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <div className="site" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />

        <div className="page-body">
          <PageToc />
          <About />
          <Models />
          <Datasets />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
