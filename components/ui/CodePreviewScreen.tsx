import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "../code-block";

const CodePreviewScreen = () => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const buttonCode = `
<button 
  type="button"
  className="bg-white px-3 py-2 rounded-sm text-black hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  aria-label="Example button"
>
  Button
</button>
  `.trim();

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-4 mb-2">
        <button
          type="button"
          className={cn(
            "cursor-pointer p-2",
            activeTab === "preview" && "border-b border-white",
          )}
          onClick={() => setActiveTab("preview")}
          aria-current={activeTab === "preview" ? "page" : undefined}
        >
          Preview
        </button>
        <button
          type="button"
          className={cn(
            "cursor-pointer p-2",
            activeTab === "code" && "border-b border-white",
          )}
          onClick={() => setActiveTab("code")}
          aria-current={activeTab === "code" ? "page" : undefined}
        >
          Code
        </button>
      </div>
      <div className="border flex items-center justify-center h-full border-zinc-400 min-h-[40vh] rounded-sm p-4">
        {activeTab === "preview" ? (
          <button
            type="button"
            className="bg-white px-3 py-2 rounded-sm text-black hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Example button"
          >
            Button
          </button>
        ) : (
          <div className="w-full">
            <CodeBlock language="jsx">{buttonCode}</CodeBlock>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreviewScreen;
