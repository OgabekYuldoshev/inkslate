import { Underline as TipTapUnderline } from "@tiptap/extension-underline";
import type { UnderlineOptions as TipTapUnderlineOptions } from "@tiptap/extension-underline";
import { GeneralOptions } from "../types";
import ActionButton from "@/components/action-button";

export type UnderlineOptions = TipTapUnderlineOptions &
  GeneralOptions<TipTapUnderlineOptions, typeof ActionButton>;

export const Underline = TipTapUnderline.extend<UnderlineOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render({ editor }) {
        return {
          component: ActionButton,
          props: {
            icon: "Underline",
            onPressedChange: () => editor.commands.toggleUnderline(),
            pressed: editor.isActive("underline") || false,
            disabled: !editor.can().toggleUnderline(),
          },
        };
      },
    };
  },
});
