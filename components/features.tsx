import { Check, Code, Database, Globe, Layers, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Hybrid Rendering",
    description: "Server and client rendering, static and dynamic sites, all in one."
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Fast Refresh",
    description: "Instant feedback while editing your React components."
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Data Fetching",
    description: "APIs for dynamic content without sacrificing speed."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Zero Config",
    description: "Automatic compilation and bundling. Optimized for production."
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "File-based Routing",
    description: "Every component in the pages directory becomes a route."
  },
  {
    icon: <Check className="h-10 w-10" />,
    title: "Built-in Optimizations",
    description: "Automatic image, font, and script optimizations."
  }
]

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Ship faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The complete Next.js developer platform
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Next.js gives you the best developer experience with all the features you need for production.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border bg-background shadow-sm transition-all hover:shadow-md">
                <CardHeader className="space-y-1">
                  <div className="mb-2 rounded-lg bg-primary/10 inline-flex p-2 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}