import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "ink-flex ink-h-9 ink-w-full ink-rounded-md ink-border ink-border-input ink-bg-transparent ink-px-3 ink-py-1 ink-text-sm ink-shadow-sm ink-transition-colors file:ink-border-0 file:ink-bg-transparent file:ink-text-sm file:ink-font-medium placeholder:ink-text-muted-foreground focus-visible:ink-outline-none focus-visible:ink-ring-1 focus-visible:ink-ring-ring disabled:ink-cursor-not-allowed disabled:ink-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
