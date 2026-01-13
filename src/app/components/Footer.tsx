export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
              FUSIONIX TECHNOLOGIES
            </h3>
            <p className="text-gray-400">Building modern digital solutions</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">Ready to start your project?</p>
            <p className="text-gray-400 mb-2">
              Email:{" "}
              <a
                href="mailto:fusionixtechnologies@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                fusionixtechnologies@gmail.com
              </a>
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact us today →
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} NEXO INFOTECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
