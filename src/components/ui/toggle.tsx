import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "ink-inline-flex ink-items-center ink-justify-center ink-rounded-md ink-text-sm ink-font-medium ink-transition-colors hover:ink-bg-muted hover:ink-text-muted-foreground focus-visible:ink-outline-none focus-visible:ink-ring-1 focus-visible:ink-ring-ring disabled:ink-pointer-events-none disabled:ink-opacity-50 data-[state=on]:ink-bg-accent data-[state=on]:ink-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "ink-bg-transparent",
        outline:
          "ink-border ink-border-input ink-bg-transparent ink-shadow-sm hover:ink-bg-accent hover:ink-text-accent-foreground",
      },
      size: {
        default: "ink-h-8 ink-px-2",
        lg: "ink-h-10 ink-px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
