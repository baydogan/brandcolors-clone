import { MdOutlineContentCopy } from "react-icons/md";
import { getContrastYIQ } from "../helpers/index";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Brand = ({ props, handleCopy }) => {
  const [isShow, setShow] = useState(-1);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);

  return (
    <div className="brands-list__brand" onClick={() => selectBrands(props)}>
      <h1>{props.title}</h1>
      <ul>
        {props.colors.map((color, index) => (
          <li key={index}>
            <CopyToClipboard text={color}>
              <button
                style={{ backgroundColor: `#${color}`, "--textColor": `${getContrastYIQ(color)}` }}
                onMouseEnter={() => setShow(index)}
                onMouseLeave={() => setShow(-1)}
                onClick={() => handleCopy(color)}
              >
                <span>{isShow == index && <MdOutlineContentCopy className="copy-icon" />}</span>
              </button>
            </CopyToClipboard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brand;
