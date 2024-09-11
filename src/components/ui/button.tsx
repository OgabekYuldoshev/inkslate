import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "ink-inline-flex ink-items-center ink-justify-center ink-whitespace-nowrap ink-rounded-md ink-text-sm ink-font-medium ink-transition-colors focus-visible:ink-outline-none focus-visible:ink-ring-1 focus-visible:ink-ring-ring disabled:ink-pointer-events-none disabled:ink-opacity-50",
  {
    variants: {
      variant: {
        default:
          "ink-bg-primary ink-text-primary-foreground ink-shadow hover:ink-bg-primary/90",
        destructive:
          "ink-bg-destructive ink-text-destructive-foreground ink-shadow-sm hover:ink-bg-destructive/90",
        outline:
          "ink-border ink-border-input ink-bg-background ink-shadow-sm hover:ink-bg-accent hover:ink-text-accent-foreground",
        secondary:
          "ink-bg-secondary ink-text-secondary-foreground ink-shadow-sm hover:ink-bg-secondary/80",
        ghost: "hover:ink-bg-accent hover:ink-text-accent-foreground",
        link: "ink-text-primary ink-underline-offset-4 hover:ink-underline",
      },
      size: {
        default: "ink-h-9 ink-px-4 ink-py-2",
        sm: "ink-h-8 ink-rounded-md ink-px-3 ink-text-xs",
        lg: "ink-h-10 ink-rounded-md ink-px-8",
        icon: "ink-h-9 ink-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
