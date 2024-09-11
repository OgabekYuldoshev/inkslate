import React from 'react'
import { Toggle } from './ui/toggle'
import { icons } from "lucide-react"


type Props = Omit<React.ComponentProps<typeof Toggle>, "children" | 'pressed' | 'onPressedChange'> & {
    onActive?: () => boolean
    icon: keyof typeof icons
}
const ActionButton = ({ icon, onActive, ...props }: Props) => {
    const IconComponent = icons[icon]

    return (
        <Toggle {...props} pressed={onActive?.()}>
            <IconComponent size={18} />
        </Toggle>
    )
}

export default ActionButton