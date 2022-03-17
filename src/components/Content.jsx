import Searchbar from "./SearchBar";
import Brand from "./Brand";
import { useBrandsContext } from "../hooks/useBrandsContext";

const Content = () => {
  const { brandsList } = useBrandsContext();
  console.log(brandsList);

  return (
    <div className="content">
      <Searchbar />
      <div className="brands">
        {brandsList.map((brand, index) => (
          <Brand key={index} props={brand} />
        ))}
      </div>
    </div>
  );
};

export default Content;
