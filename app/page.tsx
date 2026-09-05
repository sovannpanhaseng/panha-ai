import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Models } from "@/components/models";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Models />
      </main>
      <SiteFooter />
    </div>
  );
}
