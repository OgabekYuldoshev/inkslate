import { Highlight as TipTapHighlight } from "@tiptap/extension-highlight";
import type { HighlightOptions as TipTapHighlightOptions } from "@tiptap/extension-highlight";
import { GeneralOptions } from "@/editor/types";
import HighlightPicker from "./HighlightPicker";

export type HighlightOptions = TipTapHighlightOptions &
  GeneralOptions<TipTapHighlightOptions, typeof HighlightPicker>;

export const Highlight = TipTapHighlight.extend<HighlightOptions>({
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
