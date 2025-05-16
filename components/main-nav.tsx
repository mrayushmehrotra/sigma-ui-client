"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="ml-8 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <svg
          height="20"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <mask
            id="mask0_408_134"
            style={{ maskType: "alpha" }}
            x="0"
            y="0"
            width="180"
            height="180"
          >
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask0_408_134)">
            <circle
              cx="90"
              cy="90"
              r="87"
              fill="black"
              stroke="white"
              strokeWidth="6"
            />
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
              fill="url(#paint0_linear_408_134)"
            />
            <rect
              x="115"
              y="54"
              width="12"
              height="72"
              fill="url(#paint1_linear_408_134)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_408_134"
              x1="109"
              y1="116.5"
              x2="144.5"
              y2="160.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_408_134"
              x1="121"
              y1="54"
              x2="120.799"
              y2="106.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <span className="hidden font-bold sm:inline-block">Sigma UI</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Docs
        </Link>
        <Link
          href="/learn"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/learn")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Learn
        </Link>
        <Link
          href="/templates"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/templates")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Templates
        </Link>
        <Link
          href="/showcase"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/showcase")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Showcase
        </Link>
      </nav>
    </div>
  );
}
