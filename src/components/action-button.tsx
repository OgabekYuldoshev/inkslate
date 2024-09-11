import React from 'react'
import { Toggle } from './ui/toggle'
import { icons } from "lucide-react"


type Props = Omit<React.ComponentProps<typeof Toggle>, "children"> & {
    icon: keyof typeof icons
}
const ActionButton = ({ icon, ...props }: Props) => {
    const IconComponent = icons[icon]
    return (
        <Toggle {...props}>
            <IconComponent size={18} />
        </Toggle>
    )
}

export default ActionButton