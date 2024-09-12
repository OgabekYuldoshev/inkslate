import { Button } from '@/components/ui/button'
import { Editor } from '@tiptap/core'
import { Redo, Undo } from 'lucide-react'
interface Props {
    editor: Editor
}
const UndoRedoButtons = ({ editor }: Props) => {
    return (
        <>
            <Button title='redo' size="icon" variant="ghost" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                <Undo size={18} />
            </Button>
            <Button title='Undo' size="icon" variant="ghost" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                <Redo size={18} />
            </Button>
        </>
    )
}

export default UndoRedoButtons