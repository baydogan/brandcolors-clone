import { GrSearch } from "react-icons/gr";
import { GrFormClose } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
import { IoMdLink } from "react-icons/io";

const Searchbar = ({ handleChange, search, clearSearch }) => {
  return (
    <>
      <div className="header">
        <div className="header__toolbar-search">
          <GrSearch style={{ position: "absolute", width: "18px", height: "18px" }} />
          <input className="search" value={search} onChange={handleChange} type="text" placeholder="Search Brands" />
          {search.length > 0 && <GrFormClose onClick={clearSearch} style={{ width: "18px", height: "18px" }} />}
        </div>
        <div className="toolbar-group"></div>
      </div>
    </>
  );
};

export default Searchbar;
