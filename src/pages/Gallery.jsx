import galleryImages from "../data/galleryData";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" }
  })
};

const Gallery = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white font-[Poppins] pt-[6rem]"
    >
      {/* Video Section */}
      <section className="w-full h-[80vh] relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/videos/36 MB.mp4"
        />
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-4xl md:text-6xl font-bold text-center"
          >
            Our Glimpses
          </motion.h1>
        </motion.div>
      </section>

      {/* Image Grid Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-blue-600 text-center mb-10"
        >
          Memories at Gokul Computers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={img.url}
                alt={img.alt || `Gallery ${index + 1}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
