import Logo from "../../assets/img/brandcolors.jpeg";
import './index.css'

const Sidebar = () => {
  return (
    <>
      <aside>
        <h1 className="logo">
          <img src={Logo} alt="" />
          <a href="">
            Brand<strong>Colors</strong>
          </a>
        </h1>
        <h2>The biggest collection of official brand color codes around. Curated by @brandcolors and friends.</h2>
        <nav>
          <ul>
            <li>
              <a href="">Suggest a Brand</a>
            </li>
            <li>
              <a href="">About BrandColors</a>
            </li>
          </ul>
        </nav>
        <a className="skill-share" href="">
          <span>
            Brand<strong>Colors</strong> + DesignBombs
          </span>{" "}
          <p>
            Learn how to make a website - we have put together an in-depth guide that will help you build your first
            website with WordPress.
          </p>
        </a>
      </aside>
    </>
  );
};

export default Sidebar;
