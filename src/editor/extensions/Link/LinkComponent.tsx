import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Editor } from "@tiptap/core"
import { Check, Link, Trash } from "lucide-react"
import { FormEvent, useState } from "react"

type Props = {
  editor: Editor
  onActive(): boolean
  disabled: boolean
}

function Form({ editor, onClose }: { editor: Editor, onClose(): void, }) {
  const [value, setValue] = useState(editor.getAttributes('link').href || '')

  function handleClear() {
    editor.chain().focus().extendMarkRange('link').unsetLink()
      .run()
    onClose()
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    editor.chain().focus().extendMarkRange('link').setLink({ href: value })
      .run()
    setValue("")
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="ink-space-y-2">
      <div className="ink-space-y-1">
        <Label>Link</Label>
        <Input autoFocus type="url" name="link" placeholder="Enter" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className="ink-grid ink-grid-cols-2 ink-gap-x-1">
        <Button type="button" onClick={handleClear}>
          <Trash className="mr-2" size={18} />
          Clear
        </Button>
        <Button type="submit">
          <Check className="mr-2" size={18} />
          Submit
        </Button>
      </div>
    </form>
  )
}
const LinkComponent = ({ editor, onActive, disabled }: Props) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          size={"icon"}
          variant={onActive() ? "secondary" : 'ghost'}
          onClick={(e) => {
            e.preventDefault()
            setOpen(true)
          }}>
          <Link size={18} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form editor={editor} onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )
}

export default LinkComponent