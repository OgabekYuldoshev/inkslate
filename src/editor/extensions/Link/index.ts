import {
  Link as TipTapLink,
  LinkOptions as TipTapLinkOptions,
} from "@tiptap/extension-link";
import LinkComponent from "./LinkComponent";
import { GeneralOptions } from "@/editor/types";

export type LinkOptions = TipTapLinkOptions &
  GeneralOptions<TipTapLinkOptions, typeof LinkComponent>;

export const Link = TipTapLink.extend<LinkOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: true,
      render({editor}){
        return {
          component: LinkComponent,
          props: {
            editor,
            onActive: () => editor.isActive('link') || false,
            disabled: !editor.can().setLink({ href: '' }),
          },
        };
      }
    };
  },
});
