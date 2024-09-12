import Content from "./ui/Content"
import { MainKit } from "./extensions"
import { InkSlateProvider } from "./hooks/useInkSlate"
import Toolbar from "./ui/Toolbar"
import { UndoRedo } from "./extensions/UndoRedo"

const extensions = [
    MainKit.configure({
        placeholder: {
            placeholder: 'Write something …'
        }
    }),
    UndoRedo.configure({
        toolbar: true
    })
]

const ReactInkSlate = () => {
    return (
        <div className="inkslate">
            <InkSlateProvider extensions={extensions}>
                <Toolbar />
                <Content />
            </InkSlateProvider>
        </div>
    )
}

export default ReactInkSlate