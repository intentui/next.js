import { twJoin } from "tailwind-merge";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="text-4xl text-center tracking-tight">
          Intent <span className="text-muted-foreground">UI</span> Starter Kit
        </h1>

        <div
          className={twJoin(
            "mt-6 gap-x-4 flex items-center justify-center",
            "*:hover:underline *:font-medium *:text-primary-subtle-foreground",
          )}
        >
          <a target="_blank" href="https://intentui.com/docs" rel="noopener">
            Docs
          </a>
          <a
            target="_blank"
            href="https://design.intentui.com/blocks"
            rel="noopener"
          >
            Blocks
          </a>
          <a
            target="_blank"
            href="https://design.intentui.com/patterns"
            rel="noopener"
          >
            Patterns
          </a>
          <a
            target="_blank"
            href="https://design.intentui.com/products"
            rel="noopener"
          >
            Templates
          </a>
          <a
            target="_blank"
            href="https://design.intentui.com/docs"
            rel="noopener"
          >
            Docs
          </a>
        </div>
      </div>
    </div>
  );
}
