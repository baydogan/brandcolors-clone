import Searchbar from "./SearchBar";
import Brand from "./Brand";
import Notification from "./Notification";
import { useBrandsContext } from "../hooks/useBrandsContext";
import { useEffect, useState, useMemo } from "react";
import Sticky from "react-sticky-el";

const Content = () => {
  const { brandsList, copied, setCopied } = useBrandsContext();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  useEffect(() => {
    setTimeout(() => {
      if (copied.copied) {
        setCopied({
          value: "",
          copied: false,
        });
      }
    }, 2000);
  }, [copied.copied]);

  const filteredBrandList = useMemo(() =>
    brandsList.filter((brand) => {
      return brand.title.toLowerCase().includes(search.toLocaleLowerCase());
    })
  );

  return (
    <div className="content">
      <Sticky>
        <Searchbar search={search} handleChange={handleChange} clearSearch={clearSearch} />
      </Sticky>
      {copied.copied && <Notification props={copied} setCopied={setCopied} />}
      <div className="brands-list">
        {filteredBrandList.map((brand, index) => (
          <Brand key={index} props={brand} onClick={() => console.log(brand)} />
        ))}
      </div>
    </div>
  );
};

export default Content;
