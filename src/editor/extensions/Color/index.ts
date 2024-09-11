import TipTapColor, { ColorOptions as TipTapColorOptions } from "@tiptap/extension-color";
import { GeneralOptions } from "@/editor/types";
import HighlightPicker from "./ColorPicker";

export type ColorOptions = TipTapColorOptions &
  GeneralOptions<TipTapColorOptions, typeof HighlightPicker>;

export const Color = TipTapColor.extend<ColorOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render({ editor }) {
        return {
          component: HighlightPicker,
          props: {
            editor,
            onActive: () => editor.isActive("highlight") || false,
            disabled: !editor.can().setHighlight(),
          },
        };
      },
    };
  },
});
