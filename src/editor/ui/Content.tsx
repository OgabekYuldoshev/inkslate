import { useInkSlateContext } from '../hooks/useInkSlate'
import { EditorContent } from '@tiptap/react'

const Content = () => {
  const { editor } = useInkSlateContext()
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Content