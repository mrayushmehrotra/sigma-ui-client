"use client";
import { DocLayout } from "@/components/doc-layout";
import Breadcrumb from "@/components/ui/breadcumber";
import CodePreviewScreen from "@/components/ui/CodePreviewScreen";

export default function InstallationPage() {
  const toc = [
    { id: "system-requirements", text: "System Requirements", level: 2 },
    { id: "automatic-installation", text: "Automatic Installation", level: 2 },
    { id: "manual-installation", text: "Manual Installation", level: 2 },
    {
      id: "running-the-development-server",
      text: "Running the Development Server",
      level: 2,
    },
  ];

  return (
    <DocLayout toc={toc}>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <Breadcrumb />
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Button
          </h1>
          <p className="text-lg text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        <CodePreviewScreen />
      </div>
    </DocLayout>
  );
}
