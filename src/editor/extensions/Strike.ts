import {
  Strike as TipTapStrike,
  StrikeOptions as TipTapStrikeOptions,
} from "@tiptap/extension-strike";
import { GeneralOptions } from "../types";
import ActionButton from "@/components/action-button";

export type StrikeOptions = TipTapStrikeOptions &
  GeneralOptions<TipTapStrikeOptions, typeof ActionButton>;

export const Strike = TipTapStrike.extend<StrikeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render({ editor }) {
        return {
          component: ActionButton,
          props: {
            icon: "Strikethrough",
            onClick: () => editor.commands.toggleStrike(),
            onActive: () => editor.isActive("strike") || false,
            disabled: !editor.can().toggleStrike(),
          },
        };
      },
    };
  },
});
