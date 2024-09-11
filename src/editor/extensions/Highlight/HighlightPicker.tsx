import ColorPicker from '@/components/color-picker'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Editor } from '@tiptap/core'
import { Highlighter } from 'lucide-react'
import { useState } from 'react'

type Props = {
    editor: Editor
    onActive(): boolean
    disabled: boolean
}

const HighlightPicker = ({ editor, disabled, onActive }: Props) => {
    const [isOpen, setOpen] = useState(false)
    function handleSelect(color: string) {
        editor.chain().focus().setHighlight({ color }).run()
        setOpen(false)
    }

    function handleReset() {
        editor.chain().focus().unsetHighlight().run()
        setOpen(false)
    }

    return (
        <Popover open={isOpen}>
            <PopoverTrigger asChild>
                <Button
                    disabled={disabled}
                    size={"icon"}
                    variant={onActive() ? "secondary" : 'ghost'}
                    onClick={(e) => {
                        e.preventDefault()
                        setOpen(true)
                    }}>
                    <Highlighter size={18} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='ink-bg-none ink-border-none ink-shadow-none ink-w-fit ink-p-0'>
                <ColorPicker
                    color={'#000000'}
                    onChange={handleSelect}
                    onReset={handleReset}
                />
            </PopoverContent>
        </Popover>
    )
}

export default HighlightPicker