import "../CSS/tableOfContents.css";
import React from "react";

/**
 * A table of contents with hierarchy and links to jump on the page.
 *
 * @param {Object} props A list of contents.
 * @param {Object[]} props.contents
 * @param {String} contents.text
 * @param {String} contents.id
 * @param {int} contents.indent
 */
export default function TableOfContents({ contents }) {
  return (
    <div className='d-flex flex-column m-2'>
      {contents.map((elem) => (
        <a key={`toc-${elem.id}`} className={`indent-${elem.indent}`} href={`#${elem.id}`}>
          {elem.text}
        </a>
      ))}
    </div>
  );
}
