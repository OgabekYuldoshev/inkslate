import { Bold as TipTapBold } from "@tiptap/extension-bold";
import type { BoldOptions as TipTapBoldOptions } from "@tiptap/extension-bold";
import { GeneralOptions } from "../types";
import ActionButton from "@/components/action-button";

export type BoldOptions = TipTapBoldOptions &
  GeneralOptions<TipTapBoldOptions, typeof ActionButton>;

export const Bold = TipTapBold.extend<BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render({ editor }) {
        return {
          component: ActionButton,
          props: {
            icon: "Bold",
            onClick: () => editor.commands.toggleBold(),
            onActive: () => editor.isActive("bold") || false,
            disabled: !editor.can().toggleBold(),
          },
        };
      },
    };
  },
});
