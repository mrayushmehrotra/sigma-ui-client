import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />

      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                What&apos;s Better than a component Library?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Learn how to build production-grade applications with Next.js
                through our comprehensive course. Start from the basics and
                progress to advanced topics step-by-step.
              </p>
              <div className="mt-8">
                <Link href="/learn">
                  <Button size="lg">Start Learning</Button>
                </Link>
              </div>
            </div>

            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="rounded-2xl border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">Foundations</h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn the fundamentals of Next.js with the basics course.
                  </p>
                </div>
                <div className="rounded-2xl border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">App Router</h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn about the App Router, server components, and more.
                  </p>
                </div>
                <div className="rounded-2xl border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">Create a dashboard</h3>
                  <p className="mt-2 text-muted-foreground">
                    Build a complete dashboard with data fetching and
                    authentication.
                  </p>
                </div>
                <div className="rounded-2xl border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">
                    Create an e-commerce site
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Build a full-featured e-commerce site with payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by the world's most ambitious teams
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center col-span-1 grayscale transition-all duration-200 hover:grayscale-0"
              >
                <div className="h-10 w-32 bg-muted/50 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

