import { MdOutlineContentCopy } from "react-icons/md";
import { getContrastYIQ } from "../helpers/index";
import { useState, useRef } from "react";

const Brand = ({ props }) => {
  const [isShow, setShow] = useState(false);
  const buttonRef = useRef(null);
  return (
    <div className="brand">
      <h1>{props.title}</h1>
      <ul>
        {props.colors.map((color, index) => (
          <li key={index}>
            <button
              style={{ backgroundColor: `#${color}`, "--textColor": `${getContrastYIQ(color)}` }}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <span>{isShow && <MdOutlineContentCopy />}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brand;
