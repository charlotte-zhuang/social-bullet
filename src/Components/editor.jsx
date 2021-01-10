import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

/**
 * A rich text editor with special bullet support.
 *
 * @param {Object} props HTML formatted text.
 * @param {String} props.text
 * @param {Function} props.handleTextChange
 */
export default function Editor({ text, handleTextChange }) {
  return (
    <ReactQuill
      value={text}
      onChange={handleTextChange}
      modules={Editor.modules}
      formats={Editor.formats}
    />
  );
}

Editor.modules = {
  keyboard: {
    bindings: {
      spaceLists: {
        key: " ",
        format: {
          blockquote: false,
          list: false,
          codeBlock: false,
        },
        offset: 1,
        prefix: /^[!?>]/,
        handler: function (range) {
          switch (this.quill.getText(range.index - 1, 1)) {
            case "!":
              this.quill.formatLine(range.index, 1, "list", "bullet");
              break;
            case "?":
              this.quill.formatLine(range.index, 1, "list", "bullet");
              break;
            case ">":
              this.quill.formatLine(range.index, 1, "blockquote", true);
              break;
            default:
              break;
          }
          this.quill.deleteText(range.index - 1, 1);
          this.quill.setSelection(range.index - 1);
        },
      },
      deleteFormat: {
        key: "backspace",
        format: ["blockquote", "list"],
        offset: 0,
        handler: function () {
          this.quill.format("list", false);
          this.quill.format("blockquote", false);
        },
      },
    },
  },
  toolbar: [
    { header: [false, 1, 2, 3] },
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    { list: "bullet" },
    { list: "ordered" },
    "link",
    "code-block",
  ],
};

Editor.formats = [
  "bold",
  "italic",
  "strike",
  "underline",
  "blockquote",
  "header",
  "indent",
  "list",
  "code-block",
];
