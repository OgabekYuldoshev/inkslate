import { useEditor, UseEditorOptions } from "@tiptap/react";
import constate from "constate";

export type InkSlateProps = UseEditorOptions;

export const useInkSlate = (props: InkSlateProps) => {
  const editor = useEditor(props);

  if (!editor) {
    throw new Error("[InkSlate]: Editor is not available!");
  }

  return { editor };
};

const [InkSlateProvider, useInkSlateContext] = constate(useInkSlate);

export { InkSlateProvider, useInkSlateContext };
