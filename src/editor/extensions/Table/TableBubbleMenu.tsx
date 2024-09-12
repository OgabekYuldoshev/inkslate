import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useInkSlateContext } from '@/editor/hooks/useInkSlate'
import { BubbleMenu, isActive, Editor } from '@tiptap/react'
import { BetweenHorizonalEnd, BetweenHorizonalStart, BetweenVerticalEnd, BetweenVerticalStart, Grid2x2X, TableCellsMerge, TableCellsSplit, TableColumnsSplit, TableRowsSplit } from 'lucide-react'
import { sticky, GetReferenceClientRect, } from 'tippy.js'

const TableBubbleMenu = () => {
    const { editor } = useInkSlateContext()
    const shouldShow = ({ editor }: { editor: Editor }) => {
        return isActive(editor.view.state, 'table')
    }

    const getReferenceClientRect: GetReferenceClientRect = () => {
        const {
            view,
            state: {
                selection: { from },
            },
        } = editor

        const node = view.domAtPos(from).node as HTMLElement
        if (!node) {
            return new DOMRect(-1000, -1000, 0, 0)
        }

        const tableWrapper = node?.closest?.('.tableWrapper')
        if (!tableWrapper) {
            return new DOMRect(-1000, -1000, 0, 0)
        }

        const rect = tableWrapper.getBoundingClientRect()

        return rect
    }
    return (
        <BubbleMenu
            shouldShow={shouldShow}
            pluginKey={'table'}
            editor={editor}
            updateDelay={0}
            tippyOptions={{
                offset: [0, 8],
                popperOptions: {
                    modifiers: [{ name: 'flip', enabled: false }],
                },
                maxWidth: 'auto',
                getReferenceClientRect,
                plugins: [sticky],
                sticky: 'popper',
            }}
        >
            <div className='ink-p-1 ink-shadow ink-border ink-rounded ink-flex ink-gap-x-1 ink-bg-background ink-items-center'>
                <Button
                    size="icon"
                    variant="ghost"
                    title="Add Column Before"
                    onClick={() => {
                        editor.chain().focus().addColumnBefore().run()
                    }}
                    disabled={!editor.can().addColumnBefore()}
                >
                    <BetweenHorizonalEnd size={18} />
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    title="Add Column After"
                    onClick={() => {
                        editor.chain().focus().addColumnAfter().run()
                    }}
                    disabled={!editor.can().addColumnAfter()}
                >
                    <BetweenHorizonalStart size={18} />
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    title="Delete Column"
                    onClick={() => {
                        editor.chain().focus().deleteColumn().run()
                    }}
                    disabled={!editor.can().deleteColumn()}
                >
                    <TableColumnsSplit size={18} />
                </Button>
                <Separator className='ink-h-6' orientation="vertical" />
                <Button
                    size="icon"
                    variant="ghost"
                    title="Add Row Before"
                    onClick={() => {
                        editor.chain().focus().addRowBefore().run()
                    }}
                    disabled={!editor.can().addRowBefore()}
                >
                    <BetweenVerticalEnd size={18} />
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    title="Add Row After"
                    onClick={() => {
                        editor.chain().focus().addRowAfter().run()
                    }}
                    disabled={!editor.can().addRowAfter()}
                >
                    <BetweenVerticalStart size={18} />
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    title="Delete Row"
                    onClick={() => {
                        editor.chain().focus().deleteRow().run()
                    }}
                    disabled={!editor.can().deleteRow()}
                >
                    <TableRowsSplit size={18} />
                </Button>
                <Separator className='ink-h-6' orientation="vertical" />
                <Button
                    size="icon"
                    variant="ghost"
                    title="Merge cells"
                    onClick={() => {
                        editor.chain().focus().mergeCells().run()
                    }}
                    disabled={!editor.can().mergeCells()}
                >
                    <TableCellsMerge size={18} />
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    title="Merge cells"
                    onClick={() => {
                        editor.chain().focus().splitCell().run()
                    }}
                    disabled={!editor.can().splitCell()}
                >
                    <TableCellsSplit size={18} />
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    title="Delete table"
                    onClick={() => {
                        editor.chain().focus().deleteTable().run()
                    }}
                    disabled={!editor.can().deleteTable()}
                >
                    <Grid2x2X size={18} />
                </Button>
            </div>
        </BubbleMenu>
    )
}

export default TableBubbleMenu