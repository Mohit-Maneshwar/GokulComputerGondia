import { motion } from "framer-motion";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <div className="bg-white font-[Poppins] text-gray-900 flex flex-col gap-8 pt-20">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative bg-blue-200 py-28 md:py-36 text-center text-black font-[Poppins]"
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl text-blue-600 font-bold mb-6"
          >
            Welcome to Gokul Computers
          </motion.h1>
          <motion.p
            custom={0.2}
            variants={fadeInUp}
            className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed"
          >
            Established in 2007, Gokul Computers is Gondia’s premier institute
            for cutting-edge computer education. We have been transforming
            careers for over 15 years by empowering students with practical
            skills, industry-relevant knowledge, and real-world experience.
          </motion.p>
          <motion.p
            custom={0.4}
            variants={fadeInUp}
            className="text-gray-700 text-base md:text-lg mb-8"
          >
            Our focus on hands-on training, experienced faculty, and dynamic
            courses makes us a trusted choice for students and professionals
            alike.
          </motion.p>
          <motion.a
            custom={0.6}
            variants={fadeInUp}
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition font-bold py-4 px-10 rounded-full shadow"
          >
            Join Now
          </motion.a>

          <motion.div
            className="flex  flex-wrap justify-center gap-6 text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "15+ Years", desc: "of Excellence in IT Education" },
              {
                title: "30+ Courses",
                desc: "covering Software & Hardware Skills",
              },
              { title: "10,000+", desc: "Students & Professionals Trained" },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={0.2 * i}
                variants={fadeInUp}
                className=" bg-blue-300 rounded-lg shadow p-6 w-60"
              >
                <h3 className="text-blue-600 text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Journey */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-10 items-center"
      >
        <motion.img
          custom={0.1}
          variants={fadeInUp}
          src={image1}
          alt="Our Journey"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <motion.div custom={0.3} variants={fadeInUp} className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Journey</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2007, Gokul Computers started with a mission to provide
            quality IT education in Gondia. Over the years, we have grown to
            become one of the most trusted institutions in the region, training
            thousands of students and professionals in computer technologies. We
            continually evolve our curriculum to match the latest industry
            trends, ensuring our students stay ahead in the ever-changing tech
            world.
          </p>
        </motion.div>
      </motion.section>

      {/* Leading Institute */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50 py-20 px-6 text-center font-[Poppins]"
      >
        <motion.div
          custom={0.1}
          variants={fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 leading-tight">
            Leading Computer Education Institute
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg md:text-xl mb-6 leading-relaxed">
            Since 2007, Gokul Computers has been at the forefront of IT
            education...
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
            Established with a vision to bridge the gap between academic
            learning...
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              {
                title: "Expert Trainers",
                desc: "Learn from experienced instructors who guide you with real-world insights.",
              },
              {
                title: "Hands-On Learning",
                desc: "Practical sessions ensure you gain confidence and industry-ready skills.",
              },
              {
                title: "Comprehensive Courses",
                desc: "Wide range of programs covering programming, web development, networking, and more.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={0.2 * i}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow p-6 w-64 text-left hover:shadow-xl transition"
              >
                <h3 className="text-blue-600 text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Expertise & Courses */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-10 items-center"
      >
        <motion.div
          custom={0.1}
          variants={fadeInUp}
          className="flex-1 order-2 md:order-1"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Our Expertise & Courses
          </h2>
          <p className="text-gray-700 mb-4">
            Gokul Computer is an expert in learning content development,
            training delivery, education process management, and project
            development.
          </p>
          <p className="text-gray-700">
            The Computer and IT courses running at Gokul Computers include:
            Basics, MS-Office, C, C++, Java, Advanced Java, Oracle, Visual
            Basic, VB.Net, ASP.Net, C#.Net, Web Page Designing, PHP and MySQL,
            Hardware, Networking, Photoshop, Flash, Coreldraw, Graphic Design,
            Website Development, Search Engine Optimization, Software Testing,
            MS Project, Dot Net Courses, E-commerce, Java Scripting, University
            Syllabus of BE, Poly, BCCA, BCA, MCA, MCM, BSc, MSc, 11th & 12th IT
            and CS State CBSE Course, and Live Projects.
          </p>
          <p className="text-gray-700 mt-4">
            Project guidance is provided for final-year students. Crash,
            fast-track, and regular batches for every course are available.
          </p>
        </motion.div>
        <motion.img
          custom={0.3}
          variants={fadeInUp}
          src={image2}
          alt="Our Expertise"
          className="rounded-lg shadow-lg w-full md:w-1/2 order-1 md:order-2"
        />
      </motion.section>
    </div>
  );
};

export default About;
