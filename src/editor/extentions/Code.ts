import { Code as TipTapCode } from "@tiptap/extension-code";
import type { CodeOptions as TipTapCodeOptions } from "@tiptap/extension-code";
import { GeneralOptions } from "../types";
import ActionButton from "@/components/action-button";

export type CodeOptions = TipTapCodeOptions &
  GeneralOptions<TipTapCodeOptions, typeof ActionButton>;

export const Code = TipTapCode.extend<CodeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render({ editor }) {
        return {
          component: ActionButton,
          props: {
            icon: "Code",
            onClick: () => editor.commands.toggleCode(),
            onActive: () => editor.isActive("code") || false,
            disabled: !editor.can().toggleCode(),
          },
        };
      },
    };
  },
});
