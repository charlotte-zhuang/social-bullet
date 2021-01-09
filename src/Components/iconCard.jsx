import "../CSS/iconCard.css";
import React from "react";
import { Link } from "react-router-dom";

/**
 * A clickable thumbnail with a caption.
 *
 * @param {Object} props
 * @param {String} props.imgSrc
 * @param {'sm' | 'md' | 'lg'} props.size
 * @param {String?} props.alt
 * @param {String} props.text
 * @param {String} props.url
 */
export default function IconCard({ imgSrc, size, alt = "", text, url }) {
  return (
    <Link className={`iconCard-${size}`} to={url}>
      <div className='d-flex flex-column justify-content-center'>
        {" "}
        <img src={imgSrc} alt={alt} />
        <h4>{text}</h4>
      </div>
    </Link>
  );
}
