import '../CSS/tableOfContents.css';
import React from 'react';
import '../CSS/listView.css';

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
		<div className="d-flex flex-column pl-2 pr-2 first-gap-fix full-width">
			{contents.map((elem) => (
				<a key={`toc-${elem.id}`} className={`panel-text toc-link normal-text-link advent-font indent-${elem.indent}`} href={`#${elem.id}`}>
					{elem.text}
				</a>
			))}
		</div>
	);
}
