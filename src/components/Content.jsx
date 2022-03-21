import Searchbar from "./SearchBar";
import Brand from "./Brand";
import Notification from "./Notification";
import { useBrandsContext } from "../hooks/useBrandsContext";
import { useEffect, useState, useMemo } from "react";

const Content = () => {
  const { brandsList, copied, setCopied } = useBrandsContext();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCopy = (color) => {
    setCopied({
      value: color,
      copied: true,
    });
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
  }, [copied]);

  const filteredBrandList = useMemo(() =>
    brandsList.filter((brand) => {
      return brand.title.toLowerCase().includes(search.toLocaleLowerCase());
    })
  );

  return (
    <div className="content">
      <Searchbar search={search} handleChange={handleChange} />
      {copied.copied && <Notification props={copied} setCopied={setCopied} />}
      <div className="brands">
        {filteredBrandList.map((brand, index) => (
          <Brand key={index} props={brand} handleCopy={handleCopy} />
        ))}
      </div>
    </div>
  );
};

export default Content;
