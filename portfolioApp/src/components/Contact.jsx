import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl text-primary-DEFAULT" />,
      title: "Email",
      detail: "sevda.abbasi@email.com",
      link: "mailto:sevda.abbasi@email.com",
    },
    {
      icon: <FaPhone className="text-3xl text-primary-DEFAULT" />,
      title: "Telefon",
      detail: "+90 555 555 5555",
      link: "tel:+905555555555",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary-DEFAULT" />,
      title: "Konum",
      detail: "İstanbul, Türkiye",
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      link: "https://github.com",
      name: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://linkedin.com",
      name: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      link: "https://twitter.com",
      name: "Twitter",
      color: "hover:bg-sky-500",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Arkaplan Dekorasyonu */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

      {/* Dekoratif Şekiller */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-DEFAULT/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Benimle <span className="text-gradient">İletişime Geçin</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projeleriniz veya iş birliği fırsatları için benimle iletişime
            geçebilirsiniz. Size en kısa sürede dönüş yapacağım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sol Taraf - İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* İletişim Kartları */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white p-6 rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary-DEFAULT/10 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.detail}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Sosyal Medya Linkleri */}
            <div className="bg-white p-6 rounded-2xl shadow-custom">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Sosyal Medya
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:text-white transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sağ Taraf - İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-custom"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Mesaj Gönderin
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Adınız</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-DEFAULT/20 transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-DEFAULT/20 transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Konu</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-DEFAULT/20 transition-colors"
                  placeholder="Mesajınızın konusu"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Mesajınız</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-DEFAULT/20 transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-custom btn-primary inline-flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Mesaj Gönder
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
