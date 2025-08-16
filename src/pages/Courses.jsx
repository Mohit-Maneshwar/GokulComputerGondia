import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import courses from "../data/coursesData";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" }
  })
};

const Courses = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white font-[Poppins] py-16 px-6 max-w-7xl mx-auto pt-[6rem]"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-4xl md:text-6xl font-bold text-blue-600 text-center mb-12"
      >
        Our Courses
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            custom={0.1 * i}
            variants={fadeInUp}
          >
            <Link to={`/courses/${course.id}`} className="block group">
              <div className="bg-white border rounded-lg shadow hover:shadow-lg p-6 transition">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded mb-4 w-full h-40 object-cover group-hover:scale-105 transition"
                />
                <h2 className="text-2xl font-bold text-blue-600 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
