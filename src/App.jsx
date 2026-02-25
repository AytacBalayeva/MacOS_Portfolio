import gsap from "gsap";
import { Navbar, Welcome, Dock } from "./components";
import { Draggable } from "gsap/draggable";
import { Terminal } from "./Windows";

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
    </main>
  );
};

export default App;
