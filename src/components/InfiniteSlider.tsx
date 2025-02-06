import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FiFigma, FiFramer } from "react-icons/fi";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const LOGOS = [
  <FaHtml5 key="html5" size="2em" className="text-sky-950" />,
  <FaCss3 key="css3" size="2em" className="text-sky-950" />,
  <FaJs key="javascript" size="2em" className="text-sky-950" />,
  <BiLogoTypescript key="typescript" size="2em" className="text-sky-950" />,
  <FaReact key="react" size="2em" className="text-sky-950" />,
  <SiTailwindcss key="tailwind" size="2em" className="text-sky-950" />,
  <SiNextdotjs key="Next" size="2em" className="text-sky-950" />,
  <FaGithub key="github" size="2em" className="text-sky-950" />,
  <FiFigma key="figma" size="2em" className="text-sky-950" />,
  <VscVscode key="figma" size="2em" className="text-sky-950" />,
  <FiFramer key="framer" size="2em" className="text-sky-950" />,
];

export const InfiniteSlider = () => {
  return (
    <div className="group relative m-auto overflow-hidden bg-sky-200 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex size-10 w-[calc(250px*10)] group-hover:[animation-play-state:paused]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
