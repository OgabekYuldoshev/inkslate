import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Editor } from '@tiptap/core'
import { Table } from 'lucide-react'
import { useState } from 'react'


const generateArray = (length: number) => Array.from({ length }).map((_, index) => index + 1)

interface Props {
    editor: Editor
    disabled: boolean
}

const TableButton = ({ editor, disabled }: Props) => {
    const [isOpen, setOpen] = useState(false)

    function onCreateTable(rows: number, cols: number) {
        editor
            .chain()
            .focus()
            .insertTable({ rows, cols, withHeaderRow: false })
            .run()
    }

    return (
        <Popover open={isOpen} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    disabled={disabled}
                    size={"icon"}
                    variant={'ghost'}
                    onClick={(e) => {
                        e.preventDefault()
                        setOpen(true)
                    }}>
                    <Table size={18} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='ink-w-fit'>
                <GridList onSelect={onCreateTable} />
            </PopoverContent>
        </Popover>
    )
}

const GRID_ROW = 10
const GRID_COL = 10

function GridList({ onSelect }: { onSelect(rows: number, cols: number): void }) {
    const [grid, setGrid] = useState([0, 0])

    return (
        <div className='ink-flex ink-flex-col ink-items-center ink-justify-center'>
            <div className='ink-flex ink-space-x-0.5'>
                {
                    generateArray(GRID_ROW).map((row) => (
                        <div key={row} className='ink-space-y-0.5'>
                            {generateArray(GRID_COL).map((col) => (
                                <div
                                    key={`${row}-${col}`}
                                    className={cn(
                                        'ink-size-5 ink-border ink-rounded ink-transition-all',
                                        (col <= grid[1] && row <= grid[0]) && "ink-bg-primary"
                                    )}
                                    onMouseOver={() => setGrid([row, col])}
                                    onMouseDown={() => {
                                        onSelect(row, col)
                                        setGrid([0, 0])
                                    }}
                                />
                            ))}
                        </div>
                    ))}
            </div>
            <p>{grid[0]}x{grid[1]}</p>
        </div>
    )
}

export default TableButton