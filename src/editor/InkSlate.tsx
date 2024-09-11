import Content from "./ui/Content"
import { Bold, MainKit } from "./extentions"
import { InkSlateProvider } from "./hooks/useInkSlate"
import Toolbar from "./ui/toolbar"
import { Underline } from "./extentions/Underline"

const extensions = [
    MainKit.configure({
        placeholder: {
            placeholder: 'Write something …'
        }
    }),
    Bold.configure({
        toolbar: true
    }),
    Underline.configure({
        toolbar: true
    })
]

const ReactInkSlate = () => {
    return (
        <div className="inkslate">
            <InkSlateProvider extensions={extensions}>
                <Toolbar/>
                <Content />
            </InkSlateProvider>
        </div>
    )
}

export default ReactInkSlate