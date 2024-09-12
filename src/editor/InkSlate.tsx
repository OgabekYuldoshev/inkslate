import Content from "./ui/Content"
import { MainKit, Table } from "./extensions"
import { InkSlateProvider } from "./hooks/useInkSlate"
import Toolbar from "./ui/Toolbar"
import TableBubbleMenu from "./extensions/Table/TableBubbleMenu"

const extensions = [
    MainKit.configure({
        placeholder: {
            placeholder: 'Write something …'
        }
    }),
    Table.configure({
        toolbar: true
    })
]

const ReactInkSlate = () => {
    return (
        <div className="inkslate">
            <InkSlateProvider extensions={extensions}>
                <Toolbar />
                <Content />
                <TableBubbleMenu/>
            </InkSlateProvider>
        </div>
    )
}

export default ReactInkSlate