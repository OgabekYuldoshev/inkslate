import { Highlight as TipTapHighlight } from "@tiptap/extension-highlight";
import type {  HighlightOptions as TipTapHighlightOptions } from "@tiptap/extension-highlight";
import { GeneralOptions } from "../types";
import ActionButton from "@/components/action-button";

export type HighlightOptions = TipTapHighlightOptions &
  GeneralOptions<TipTapHighlightOptions, typeof ActionButton>;

export const Highlight = TipTapHighlight.extend<HighlightOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render() {
        return {
          component: ActionButton,
          props: {
            icon: "Highlighter",
            onClick: () => {},
            onActive: () =>  false,
            disabled: false,
          },
        };
      },
    };
  },
});
