"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string;
}

export function CodeBlock({
  children,
  language,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    const text = React.Children.toArray(children)[0] as string;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 overflow-hidden rounded-lg border">
      <div className="flex items-center justify-between bg-muted px-4 py-2">
        <div className="text-xs font-medium text-muted-foreground">
          {language || "Code"}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <pre
        className={cn(
          "overflow-x-auto bg-black py-4 text-sm text-white dark:bg-zinc-950",
          className,
        )}
        {...props}
      >
        <code className="px-4">{children}</code>
      </pre>
    </div>
  );
}

