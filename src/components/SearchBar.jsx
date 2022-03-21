import { GrSearch } from "react-icons/gr";
import { GrFormClose } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
import { IoMdLink } from "react-icons/io";

const Searchbar = ({ handleChange, search }) => {
  return (
    <>
      <div className="header">
        <div className="search-bar">
          <div className="toolbar-search">
            <GrSearch style={{ position: "absolute", width: "18px", height: "18px" }} />
            <input value={search} onChange={handleChange} type="text" placeholder="Search Brands" />
            <GrFormClose style={{ width: "18px", height: "18px" }} />
          </div>
        </div>
        <div className="toolbar-group"></div>
      </div>
    </>
  );
};

export default Searchbar;
