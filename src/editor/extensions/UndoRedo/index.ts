import { GeneralOptions } from "@/editor/types";
import History, { HistoryOptions } from "@tiptap/extension-history";
import UndoRedoButtons from "./UndoRedoButtons";

type UndoRedoOptions = GeneralOptions<HistoryOptions, typeof UndoRedoButtons>;

export const UndoRedo = History.extend<UndoRedoOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render({ editor }) {
        return {
          component: UndoRedoButtons,
          props: {
            editor,
          },
        };
      },
    };
  },
});
