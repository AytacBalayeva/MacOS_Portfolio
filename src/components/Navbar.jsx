import dayjs from "dayjs";
import { navIcons, navLinks } from "../constants";
import useWindowStore from "../store/window";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo9" className="dark:invert" />
        <p className="font-bold">Aytac' Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="relative">
          {navIcons.map(({ id, img, type }) => (
            <li
              key={id}
              onClick={
                type === "toggle-theme"
                  ? () => {
                      setIsOpen((prev) => !prev);
                    }
                  : null
              }
            >
              <img className="dark:invert" src={img} alt={`icon-${id}`} />
            </li>
          ))}
          {isOpen && (
            <ThemeSwitcher isOpen={isOpen} onClose={() => setIsOpen(false)} />
          )}
        </ul>
        <time className="dark:text-white">
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
