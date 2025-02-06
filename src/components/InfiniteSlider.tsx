import Marquee from "react-fast-marquee";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FiFigma, FiFramer } from "react-icons/fi";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const LOGOS = [
  <FaHtml5 key="html5" size="2em" className="text-sky-300" />,
  <FaCss3 key="css3" size="2em" className="text-sky-300" />,
  <FaJs key="javascript" size="2em" className="text-sky-300" />,
  <BiLogoTypescript key="typescript" size="2em" className="text-sky-300" />,
  <FaReact key="react" size="2em" className="text-sky-300" />,
  <SiNextdotjs key="Next" size="2em" className="text-sky-300" />,
  <SiTailwindcss key="tailwind" size="2em" className="text-sky-300" />,
  <FaGithub key="github" size="2em" className="text-sky-300" />,
  <FiFigma key="figma" size="2em" className="text-sky-300" />,
  <VscVscode key="vscode" size="2em" className="text-sky-300" />,
  <FiFramer key="framer" size="2em" className="text-sky-300" />,
];

export const InfiniteSlider = () => {
  return (
    <Marquee className="bg-sky-700" autoFill pauseOnHover play speed={100}>
      {LOGOS.map((logo, key) => (
        <div key={key} className="mx-4 my-2">
          {logo}
        </div>
      ))}
    </Marquee>
  );
};
