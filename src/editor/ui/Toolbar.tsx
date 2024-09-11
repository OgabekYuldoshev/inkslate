import { useMemo } from "react"
import { useInkSlateContext } from "../hooks/useInkSlate"

const Toolbar = () => {
  const { editor } = useInkSlateContext()

  const items = useMemo(() => {
    const extensions = [...editor.extensionManager.extensions]
    const values = []

    for (const extension of extensions) {
      const { render, toolbar } = extension.options as any
      if (!render || typeof render !== 'function' || !toolbar) {
        continue;
      }
      const _render = render({
        editor,
        extension
      })
      values.push(_render)
    }
    return values
  }, [editor])

  return (
    <div>
      {
        items.map((item, key) => {
          const Component = item.component

          return (
            <Component key={key} {...item.props} />
          )
        })
      }
    </div>
  )
}

export default Toolbar