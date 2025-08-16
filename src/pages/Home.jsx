import { motion } from "framer-motion";
import muneshSir from "../assets/muneshSir.png";

// Reusable animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Home = () => {
  return (
    <div className="font-[Poppins] flex gap-[2rem] flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-200 text-black font-[JetBrains Mono] min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-5xl md:text-8xl font-bold leading-snug md:leading-tight mb-12"
          >
            We only <span className="text-blue-600">teach</span>
            <br />
            what we are
            <br />
            really <em className="italic font-bold text-blue-600">good</em> at.
          </motion.h1>
          <motion.a
            variants={fadeUp}
            custom={0.3}
            href="/courses"
            className="inline-block md:inline-block w-full md:w-auto bg-blue-600 text-white font-bold py-4 md:py-4 px-8 md:px-10 rounded-full shadow hover:bg-blue-700 transition text-center"
          >
            Check Courses – Make an Impact
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-12 right-6 max-w-xs text-xs md:text-sm text-gray-700 leading-relaxed text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Get ready to{" "}
          <span className="text-blue-600">accelerate your career</span> with
          customized courses and leave your mark in the tech industry.
        </motion.div>
      </section>

      {/* Features/Highlights */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Expert Faculty",
            desc: "Our experienced instructors guide you at every step towards success.",
          },
          {
            title: "Modern Facilities",
            desc: "State-of-the-art labs and classrooms enhance your learning experience.",
          },
          {
            title: "Certified Courses",
            desc: "Wide range of industry-relevant courses to boost your career.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg shadow hover:shadow-xl transition p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About Snippet */}
      <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1663090073232-a7e475ef1f38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
          alt="Students learning"
          className="rounded-lg shadow-lg w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-4">
            At Gokul Computer, we focus on hands-on training, updated
            curriculum, and personalized attention to help our students succeed
            in the ever-evolving IT industry.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow hover:bg-blue-700 transition"
          >
            Learn More About Us
          </a>
        </motion.div>
      </section>

      {/* Who We Are */}
      <motion.section
        className="bg-blue-100 py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Who We Are??
          </h2>
          
            
              <p className="font-[Inter] text-base md:text-lg text-blue-700 leading-relaxed text-justify border-l-4 border-blue-500 pl-6 shadow-sm rounded-md bg-blue-50 p-6">
                At{" "}
                <span className="font-semibold text-blue-600">
                  Gokul Computers
                </span>
                , we are not just an institute — we are a mission-driven
                community passionate about delivering top-tier IT education
                since 2007. Our focus is on nurturing practical skills and
                making students industry-ready through a dynamic curriculum and
                hands-on training.
                <br />
                <br />
                We specialize in learning content development, training
                delivery, education process management, and custom project
                development. Whether you’re a beginner or aiming to upskill, we
                cater to all with our beginner to advanced-level courses.
                <br />
                <br />
                Our curriculum includes a wide range of subjects such as:
                <span className="font-medium">
                  {" "}
                  MS-Office, C, C++, Java, Advanced Java, Oracle, VB.Net,
                  ASP.Net, C#.Net, PHP & MySQL, Web Development, HTML, CSS,
                  JavaScript, Python, Graphic Design (Photoshop, CorelDRAW,
                  Flash), SEO, Software Testing, Hardware & Networking, and Dot
                  Net Technologies
                </span>
                .
                <br />
                <br />
                In addition to these, we also provide training aligned with
                University syllabi for BE, Polytechnic, BCCA, BCA, MCA, MCM,
                BSc, MSc, and classes for 11th & 12th IT and CS (State & CBSE).
                Our institute supports both academic excellence and industry
                preparation.
                <br />
                <br />
                Every learner gets the opportunity to work on{" "}
                <span className="text-blue-600 font-semibold">
                  Live Projects
                </span>
                with real-world applications. We also offer dedicated project
                guidance for final-year students to help them complete their
                academic journey successfully.
                <br />
                <br />
                Our training is available in{" "}
                <span className="font-medium">
                  Crash, Fast Track, and Regular batches
                </span>
                to suit your timing and learning needs. Over the years, we’ve
                proudly trained thousands of students and professionals who are
                now contributing meaningfully to the tech world.
                <br />
                <br />
                <span className="font-semibold text-blue-700">Join us</span> and
                be part of an institution that believes in quality, commitment,
                and career success.
              </p>
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="bg-white py-16 px-6 text-center max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-4xl font-bold mb-10 text-gray-900"
        >
          Testimonials
        </motion.h2>

        <motion.blockquote
          variants={fadeUp}
          custom={0.2}
          className="bg-gray-50 p-8 rounded shadow mb-12 max-w-3xl mx-auto"
        >
          <p className="text-gray-700 italic mb-4 text-lg md:text-xl leading-relaxed">
            “Since long ago, Gokul Computers is one of the trusted institutions
            in the district for its academic excellence.”
          </p>
          <footer className="text-blue-600 font-bold">
            — Mr. Vinod Bisen, Director, "OrisonHost"
          </footer>
        </motion.blockquote>

        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded shadow max-w-4xl mx-auto"
          variants={fadeUp}
          custom={0.4}
        >
          <img
            src={muneshSir}
            alt="Dr. Munesh Thakre"
            className="rounded-full w-40 h-40 object-cover mx-auto md:mx-0"
          />
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">
              Dr. Munesh Thakre
            </h3>
            <p className="text-gray-700 mb-2 font-semibold">Our Director</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ph.D., M. Phil. (IT), MCA, MCM, M.Com, B.Ed., PGDCCA, PGDCA
              <br />
              Assistant Professor - Dept. of Computer Management,
              <br />
              N.M.D. College, Gondia
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-blue-600 text-white py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Contact us today and take the first step towards a brighter future.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition"
        >
          Contact Now
        </a>
      </motion.section>
    </div>
  );
};

export default Home;
