import { motion } from "motion/react";
import {
  Globe,
  Code,
  Building,
  Briefcase,
  Image,
  Video,
  Layout,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Pages",
    description: "Clean and responsive single-page and multi-page websites.",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Custom web applications built for performance and scalability.",
  },
  {
    icon: Building,
    title: "Business Websites",
    description: "Professional websites designed to build trust and credibility.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Personal and professional portfolio websites.",
  },
  {
    icon: Image,
    title: "Poster Designing",
    description: "Creative posters for promotions, events, and branding.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for digital content and marketing.",
  },
  {
    icon: Layout,
    title: "Social Media Thumbnail Designing",
    description: "Eye-catching thumbnails designed for better engagement.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* soft diagonal gradient layer */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#e0f2fe_0%,transparent_40%,#ecfeff_100%)] opacity-70"></div>

    
      {/* subtle radial accents */}
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-blue-200 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 -left-24 w-[28rem] h-[28rem] bg-cyan-200 rounded-full blur-3xl opacity-60"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end digital services to help businesses grow,
            scale, and stand out online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-600 transition">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
