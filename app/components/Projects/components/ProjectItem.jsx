import { motion, useTransform } from "framer-motion";
import { Video } from "./Video";

export default function ProjectItem({ project, progress, range }) {
  const scale = useTransform(progress, range, [1, 0.5]);
  const opacity = useTransform(progress, range, [1, 0]);

  return (
    <motion.div
      className="h-screen sticky top-0 flex justify-center items-center"
      key={project.name}
      style={{ opacity, scale }}
    >
      <div className="w-3/4 bg-[#1d1d1d] rounded-xl">
        {/* Video */}
        <div className="p-3 mt-1">
          <div className="h-full rounded-xl overflow-hidden">
            <Video project={project} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
