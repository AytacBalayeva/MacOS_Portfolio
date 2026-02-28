import gsap from "gsap";
import { Navbar, Welcome, Dock, Home } from "./components";
import { Draggable } from "gsap/Draggable";
import {
  Contact,
  Finder,
  Image,
  Resume,
  Safari,
  Terminal,
  Text,
} from "./Windows";
import useThemeStore from "./store/theme";
import { useEffect } from "react";

gsap.registerPlugin(Draggable);
const App = () => {
  const { initTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, []);
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
    </main>
  );
};

export default App;
