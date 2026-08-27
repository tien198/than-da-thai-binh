import { cn } from "@/utilities/ui";

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export { ArrowLeftIcon };
