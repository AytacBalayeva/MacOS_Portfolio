import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { socials } from "../constants";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/aytac.jpg"
          alt="Aytac"
          className="w-30 rounded-full"
        />
        <h3>Let's connect</h3>
        <p>
          Whether you have a project in mind, an opportunity to share, or just
          want to geek out over code — I'd love to hear from you.
        </p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} rel="noopener noreferrer" title={text}>
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
