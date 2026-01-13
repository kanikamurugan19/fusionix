import { motion } from "motion/react";
import {
  MessageSquare,
  Palette,
  Code,
  TestTube,
  Rocket,
} from "lucide-react";

const steps = [
  { number: 1, icon: MessageSquare, title: "Discuss" },
  { number: 2, icon: Palette, title: "Design" },
  { number: 3, icon: Code, title: "Develop" },
  { number: 4, icon: TestTube, title: "Test" },
  { number: 5, icon: Rocket, title: "Deploy" },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A simple, transparent workflow that ensures quality delivery
            at every stage.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-between relative max-w-6xl mx-auto">
          {/* timeline line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-400 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/80 backdrop-blur shadow-lg flex items-center justify-center mb-4">
                <step.icon className="w-9 h-9 text-blue-600" />
              </div>

              <span className="mb-2 text-sm font-semibold text-blue-600">
                Step {step.number}
              </span>

              <h3 className="text-lg font-bold text-gray-900">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden max-w-xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <step.icon className="w-7 h-7 text-white" />
              </div>

              <div>
                <span className="text-sm font-semibold text-blue-600">
                  Step {step.number}
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
