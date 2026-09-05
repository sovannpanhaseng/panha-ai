import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Models } from "@/components/models";
import { Datasets } from "@/components/datasets";
import { PageToc } from "@/components/page-toc";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="relative flex-1">
        <PageToc />
        <Hero />
        <Models />
        <Datasets />
      </main>
      <SiteFooter />
    </div>
  );
}
