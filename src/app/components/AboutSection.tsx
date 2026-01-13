import { motion } from "motion/react";
import { Users, Target, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* background accents */}
      <div className="absolute -top-24 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ABOUT US
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We craft digital solutions that are modern, scalable, and built
            for long-term success.
          </p>
        </motion.div>

        {/* main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-xl border border-white/60"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-14">
            Nexo Infotech is a team of passionate professionals focused on
            delivering reliable, scalable, and high-quality digital solutions
            that help businesses grow and stand out in the digital world.
          </p>

          {/* feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* card 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 text-center shadow-md hover:shadow-xl border border-blue-100"
            >
              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Young Team
              </h3>
              <p className="text-gray-600">
                Developing professionals committed to delivering the best results
              </p>
            </motion.div>

            {/* card 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-2xl bg-gradient-to-br from-cyan-50 to-white p-6 text-center shadow-md hover:shadow-xl border border-cyan-100"
            >
              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-cyan-600 flex items-center justify-center group-hover:scale-110 transition">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Client-Focused
              </h3>
              <p className="text-gray-600">
                Your vision and goals guide every decision we make
              </p>
            </motion.div>

            {/* card 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6 text-center shadow-md hover:shadow-xl border border-indigo-100"
            >
              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center group-hover:scale-110 transition">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quality Driven
              </h3>
              <p className="text-gray-600">
                We maintain high standards in every project we deliver
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
