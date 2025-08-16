import faculty from "../data/facultyData";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" }
  })
};

const Faculty = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="pt-[6rem] font-[Poppins] py-16 px-6 max-w-7xl mx-auto"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12"
      >
        Meet Our Faculty
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {faculty.map((member, i) => (
          <motion.div
            key={member.id}
            custom={i * 0.15}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
          >
            <motion.img
              src={member.image}
              alt={member.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="w-42 h-42 mx-auto rounded-full border-4 border-blue-100 mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-700">{member.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{member.education}</p>
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold text-blue-600">Experience:</span>{" "}
                {member.experience} years
              </p>
              <p>
                <span className="font-semibold text-blue-600">Specialization:</span>{" "}
                {member.specialization}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faculty;
