import { useRef } from "react";
import { useScroll } from "framer-motion";
import ProjectItem from "./components/ProjectItem";
import { projectsArray } from "./ProjectsHelper";

export default function Projects() {
  // * Hooks
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end center"],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => console.log(scrollYProgress.current));
  // }, [scrollYProgress]);

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="container w-full flex justify-center items-center">
        {/* Cards container */}
        <div ref={container} className="w-full">
          {projectsArray.map((proj, i) => {
            return (
              <ProjectItem
                project={proj}
                progress={scrollYProgress}
                range={proj.range}
                key={proj.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
