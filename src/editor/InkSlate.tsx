import Content from "./ui/Content"
import { Highlight, MainKit } from "./extentions"
import { InkSlateProvider } from "./hooks/useInkSlate"
import Toolbar from "./ui/Toolbar"

const extensions = [
    MainKit.configure({
        placeholder: {
            placeholder: 'Write something …'
        }
    }),
    Highlight.configure({
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