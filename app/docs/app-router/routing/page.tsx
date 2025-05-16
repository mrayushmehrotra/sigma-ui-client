import { DocLayout } from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"

export default function RoutingPage() {
  const toc = [
    { id: "defining-routes", text: "Defining Routes", level: 2 },
    { id: "nested-routes", text: "Nested Routes", level: 2 },
    { id: "dynamic-routes", text: "Dynamic Routes", level: 2 },
    { id: "parallel-routes", text: "Parallel Routes", level: 2 },
    { id: "layouts", text: "Layouts", level: 2 },
    { id: "templates", text: "Templates", level: 2 },
    { id: "loading-states", text: "Loading States", level: 2 },
    { id: "error-handling", text: "Error Handling", level: 2 },
  ]

  return (
    <DocLayout toc={toc}>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Routing
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn how routing works in Next.js with the App Router.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="defining-routes">
            Defining Routes
          </h2>
          <p className="leading-7">
            Next.js uses a file-system based router where folders are used to define routes. Each folder represents a route segment that maps to a URL segment.
          </p>
          <CodeBlock language="text">
app/
├── page.tsx      # Home page (/)
├── about/
│   └── page.tsx  # About page (/about)
└── blog/
    └── page.tsx  # Blog page (/blog)
          </CodeBlock>
          <p className="leading-7">
            The special <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">page.tsx</code> file is used to make the route publicly accessible. Without it, the route is not accessible even if other files exist in the folder.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="nested-routes">
            Nested Routes
          </h2>
          <p className="leading-7">
            To create a nested route, you can nest folders inside each other:
          </p>
          <CodeBlock language="text">
app/
├── page.tsx          # Home page (/)
└── blog/
    ├── page.tsx      # Blog index page (/blog)
    └── [slug]/
        └── page.tsx  # Blog post page (/blog/post-1)
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="dynamic-routes">
            Dynamic Routes
          </h2>
          <p className="leading-7">
            Dynamic routes are used when you don't know the exact segment names ahead of time. You can create dynamic routes by wrapping a folder name in square brackets:
          </p>
          <CodeBlock language="text">
app/
└── blog/
    └── [slug]/
        └── page.tsx  # Matches /blog/post-1, /blog/post-2, etc.
          </CodeBlock>
          <p className="leading-7">
            You can access the dynamic route parameters in your page component:
          </p>
          <CodeBlock language="tsx">
{`// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>
}`}
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="parallel-routes">
            Parallel Routes
          </h2>
          <p className="leading-7">
            Parallel routes allow you to simultaneously show two or more pages in the same view. They are useful for split views where you need to render content that has separate navigation concerns.
          </p>
          <p className="leading-7">
            Parallel routes are created using the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">@folder</code> convention:
          </p>
          <CodeBlock language="text">
app/
├── page.tsx
├── @dashboard/
│   └── page.tsx  # /dashboard
└── @settings/
    └── page.tsx  # /settings
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="layouts">
            Layouts
          </h2>
          <p className="leading-7">
            Layouts are UI that is shared between multiple pages. A layout does not re-render when a user navigates between pages that share the layout.
          </p>
          <CodeBlock language="tsx">
{`// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>This is the header</header>
        {children}
        <footer>This is the footer</footer>
      </body>
    </html>
  )
}`}
          </CodeBlock>
          <p className="leading-7">
            You can also create nested layouts for specific route segments:
          </p>
          <CodeBlock language="tsx">
{`// app/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>Blog navigation</nav>
      {children}
    </div>
  )
}`}
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="templates">
            Templates
          </h2>
          <p className="leading-7">
            Templates are similar to layouts, but they create a new instance for each child route. This means they re-mount on navigation, unlike layouts which persist across routes.
          </p>
          <CodeBlock language="tsx">
{`// app/template.tsx
export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="template">{children}</div>
}`}
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="loading-states">
            Loading States
          </h2>
          <p className="leading-7">
            A special <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">loading.tsx</code> file can be used to create loading states for specific route segments:
          </p>
          <CodeBlock language="tsx">
{`// app/blog/loading.tsx
export default function Loading() {
  return <div>Loading blog posts...</div>
}`}
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="error-handling">
            Error Handling
          </h2>
          <p className="leading-7">
            A special <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">error.tsx</code> file can be used to define error boundaries for specific route segments:
          </p>
          <CodeBlock language="tsx">
{`'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}`}
          </CodeBlock>
        </div>
      </div>
    </DocLayout>
  )
}