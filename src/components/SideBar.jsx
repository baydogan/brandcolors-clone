import Logo from "../assets/img/brandcolors.jpeg";
import Modal from './Modal'
import { useToggle } from "../hooks/useToggle";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useToggle();
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="side-bar">
      <div className="logo">
        <img className="logo" src={Logo} alt="" />
        <h1>
          <a href="">
            Brand<strong>Colors</strong>
          </a>
        </h1>
      </div>
      <div className="second-section">
        <div className="description">
          The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Suggest a Brand</a>
            </li>
            <li>
             <button onClick={setIsOpen}>About BrandColors</button>
            </li>
          </ul>
        </nav>
        <div className="skillshare">
          <a href="">
            <span>
              Brand<strong>Colors</strong> + DesignBombs
            </span>
            Learn how to make a website - we have put together an in-depth guide that will help you build your first
            website with WordPress.
          </a>
        </div>
        {isOpen && <Modal closeModal={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Sidebar;
