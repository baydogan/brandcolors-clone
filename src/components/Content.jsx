import Searchbar from "./SearchBar";
import Brand from "./Brand";
import { useBrandsContext } from "../hooks/useBrandsContext";

const Content = () => {
  const { brandCollection } = useBrandsContext();
  console.log(brandCollection);

  return (
    <div className="content">
      <Searchbar />
      <div className="brands">
        {brandCollection.map((brand, index) => (
          <Brand key={index} props={brand} />
        ))}
      </div>
    </div>
  );
};

export default Content;
