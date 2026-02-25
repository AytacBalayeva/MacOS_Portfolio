import dayjs from "dayjs";
import { navIcons, navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo9" />
        <p className="font-bold">Aytac' Portfolio</p>
      </div>
      <ul>
        {navLinks.map((item) => (
          <li key={item.id}>
            <p>{name}</p>
          </li>
        ))}
      </ul>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
