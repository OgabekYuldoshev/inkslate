import { Editor, Extension } from "@tiptap/core";

export interface GeneralOptions<T, K extends React.ComponentType<any>> {
  render: Render<T, K>;
  toolbar: boolean
}

type RenderOptions<T> = {
  editor: Editor;
  extension: Extension<T>;
};

type RenderReturn<K extends React.ComponentType<any>> = {
  component: K;
  props: React.ComponentProps<K>;
};

type Render<T, K extends React.ComponentType<any>> = (
  options: RenderOptions<T>
) => RenderReturn<K>;
