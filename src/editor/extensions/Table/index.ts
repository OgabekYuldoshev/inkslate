import { GeneralOptions } from "@/editor/types";
import TipTapTable from "@tiptap/extension-table";
import { TableRow, TableRowOptions } from "@tiptap/extension-table-row";
import {
  TableHeader,
  TableHeaderOptions,
} from "@tiptap/extension-table-header";
import { TableCell, TableCellOptions } from "@tiptap/extension-table-cell";
import TableButton from "./TableButton";
import TableBubleMenu from "./TableBubbleMenu";

export interface TableOptions
  extends GeneralOptions<TableOptions, typeof TableButton> {
  HTMLAttributes: Record<string, any>;

  row: Partial<TableRowOptions>;
  header: Partial<TableHeaderOptions>;
  cell: Partial<TableCellOptions>;
}

export const Table = TipTapTable.extend<TableOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      resizable: true,
      lastColumnResizable: true,
      allowTableNodeSelection: false,
      render({ editor }) {
        return {
          component: TableButton,
          props: {
            editor,
            disabled: editor.isActive("table") || false,
          },
        };
      },
    };
  },
  addExtensions() {
    return [
      TableRow.configure(this.options.row),
      TableHeader.configure(this.options.header),
      TableCell.configure(this.options.cell),
      // TableCellBackground.configure(this.options.tableCellBackground),
    ];
  },
});

export { TableBubleMenu };
