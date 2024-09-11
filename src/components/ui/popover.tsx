import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "ink-z-50 ink-w-72 ink-rounded-md ink-border ink-bg-popover ink-p-4 ink-text-popover-foreground ink-shadow-md ink-outline-none data-[state=open]:ink-animate-in data-[state=closed]:ink-animate-out data-[state=closed]:ink-fade-out-0 data-[state=open]:ink-fade-in-0 data-[state=closed]:ink-zoom-out-95 data-[state=open]:ink-zoom-in-95 data-[side=bottom]:ink-slide-in-from-top-2 data-[side=left]:ink-slide-in-from-right-2 data-[side=right]:ink-slide-in-from-left-2 data-[side=top]:ink-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
