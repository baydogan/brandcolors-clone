import { MdOutlineContentCopy } from "react-icons/md";
import { getContrastYIQ } from "../helpers/index";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useBrandsContext } from "../hooks/useBrandsContext";

const Brand = ({ props }) => {
  const [isShow, setShow] = useState(-1);
  const { selected, setSelected, copied, setCopied } = useBrandsContext();

  const handleSelect = () => {
    if (selected.includes(props)) {
      setSelected(selected.filter((item) => item !== props));
    } else {
      setSelected([...selected, props]);
    }
  };

  const handleCopy = (color) => {
    setCopied({
      value: color,
      copied: true,
    });
  };

  return (
    <div
      onClick={handleSelect}
      className={`brands-list__brand ${selected.includes(props) ? "brands-list__brand-selected" : ""}`}
    >
      <div className="brands-list__brand--link">
        <h1>{props.title}</h1>
      </div>

      {props.colors.map((color, index) => (
        <CopyToClipboard text={color}>
          <button
            style={{ backgroundColor: `#${color}`, "--textColor": `${getContrastYIQ(color)}` }}
            onMouseEnter={() => setShow(index)}
            onMouseLeave={() => setShow(-1)}
            onClick={() => handleCopy(color)}
          >
            {isShow == index && (
              <div className="brands-list__brand--info">
                <MdOutlineContentCopy className="copy-icon" />
                {selected.includes(props) && <span>#{color}</span>}
              </div>
            )}
          </button>
        </CopyToClipboard>
      ))}
    </div>
  );
};

export default Brand;
