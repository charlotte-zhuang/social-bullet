import React from "react";
import IconCard from "./iconCard";

/**
 * A list of iconCards wrapped from left to right, top to bottom; and centered.
 * 
 * @param {Object} props arr: Array of Users or Projects
 * @param {Object[]} props.arr
 * @param {'sm' | 'md' | 'lg'} props.size
 */
export default function IconTiles({ arr, size }) {
  return (
    <div class='d-flex flex-wrap justify-content-center align-items-center full-width'>
      {arr.map((elem) => (
        <IconCard
          imgSrc={elem.pictureSource}
          size={size}
          text={elem.name}
          url={elem.url}
        />
      ))}
    </div>
  );
}
