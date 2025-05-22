"use client";
import { CodeBlock } from "@/components/code-block";
import { DocLayout } from "@/components/doc-layout";
import Breadcrumb from "@/components/ui/breadcumber";
import CodePreview from "@/components/ui/CodePreview";
import Link from "next/link";

export default function NavbarPage() {
  const navbarCode = `
<nav className="bg-gray-900 px-4 py-3 shadow-lg">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-8">
      <h1 className="text-white text-xl font-bold">Logo</h1>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </div>
    </div>
    <button 
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Sign In
    </button>
  </div>
</nav>
  `.trim();

  const preview = (
    <>
      <nav className=" sticjy top-0  bg-gray-900 px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-white text-xl font-bold">Logo</h1>
            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </div>
      </nav>
    </>
  );

  return (
    <DocLayout>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <Breadcrumb />
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Navbar
          </h1>
          <p className="text-lg text-muted-foreground">
            A Responsive Navigation Bar with Modern Design
          </p>
        </div>
        <CodePreview code={navbarCode} preview={preview} language="jsx" />
      </div>
      <div className="lg:mt-8 md:mt-4 sm:mt-2">
        <h1 className="text-2xl font-bold tracking-tight">
          Integration with Shadcn UI
        </h1>
        <CodeBlock>
          npx shadcn@latest add https://sigma-ui-mu.vercel.app/r/navbar
        </CodeBlock>
        <span className="text-gray-500">
          Customizable navbar component built with{" "}
          <Link
            href="https://ui.shadcn.com/docs"
            className="ml-1 mr-1 text-white"
          >
            shadcn/ui
          </Link>
          foundations
        </span>
      </div>
    </DocLayout>
  );
}
