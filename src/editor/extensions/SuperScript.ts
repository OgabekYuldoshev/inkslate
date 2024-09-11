import { Superscript as TipTapSuperscript } from "@tiptap/extension-superscript";
import type { SuperscriptExtensionOptions as TipTapSuperscriptOptions } from "@tiptap/extension-superscript";
import { GeneralOptions } from "../types";
import ActionButton from "@/components/action-button";

export type SuperscriptOptions = TipTapSuperscriptOptions &
  GeneralOptions<TipTapSuperscriptOptions, typeof ActionButton>;

export const Superscript = TipTapSuperscript.extend<SuperscriptOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render({ editor }) {
        return {
          component: ActionButton,
          props: {
            icon: "Superscript",
            onClick: () => editor.commands.toggleSuperscript(),
            onActive: () => editor.isActive("superscript") || false,
            disabled: !editor.can().toggleSuperscript(),
          },
        };
      },
    };
  },
});
