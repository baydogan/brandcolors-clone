import "./index.css";
import { GrSearch } from "react-icons/gr";
import { GrFormClose } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
import { IoMdLink } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-group">
        <div className="search-input">
          <GrSearch className="search-icon" />
          <input type="search" placeholder="Search Brands" />
          <GrFormClose className="close-icon" />
        </div>
      </div>
      <div className="search-bar-group">
        <div className="toolbar-collection">
          <IoMdDownload />
          <IoMdLink />
          <GrFormClose />
          <span>0 brands collected</span>
        </div>
        <div className="toolbar-download">
          <IoMdDownload />
          <span>All Brands</span>
          <select name="" id=""></select>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
