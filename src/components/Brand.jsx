import { MdOutlineContentCopy } from "react-icons/md";
import { getContrastYIQ } from "../helpers/index";
import { useState, useRef } from "react";

const Brand = ({ props }) => {
  const [isShow, setShow] = useState(-1);
  return (
    <div className="brand">
      <h1>{props.title}</h1>
      <ul>
        {props.colors.map((color, index) => (
          <li key={index}>
            <button
              style={{ backgroundColor: `#${color}`, "--textColor": `${getContrastYIQ(color)}` }}
              onMouseEnter={() => setShow(index)}
              onMouseLeave={() => setShow(-1)}
            >
              <span>{isShow == index && <MdOutlineContentCopy className="copy-icon" />}</span>
              <span className="color-hex">{color}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brand;
