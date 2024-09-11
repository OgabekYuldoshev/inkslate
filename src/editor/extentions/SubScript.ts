import { Subscript as TipTapSubscript } from "@tiptap/extension-subscript";
import type { SubscriptExtensionOptions as TipTapSubscriptOptions } from "@tiptap/extension-subscript";
import { GeneralOptions } from "../types";
import ActionButton from "@/components/action-button";

export type SubscriptOptions = TipTapSubscriptOptions &
  GeneralOptions<TipTapSubscriptOptions, typeof ActionButton>;

export const Subscript = TipTapSubscript.extend<SubscriptOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render({ editor }) {
        return {
          component: ActionButton,
          props: {
            icon: "Subscript",
            onClick: () => editor.commands.toggleSubscript(),
            onActive: () => editor.isActive("subscript") || false,
            disabled: !editor.can().toggleSubscript(),
          },
        };
      },
    };
  },
});
