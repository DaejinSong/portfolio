'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const contacts = [
  {
    title: "Email",
    value: "leepro@naver.com",
    icon: "📧",
    link: "mailto:leepro@naver.com"
  },
  {
    title: "Phone",
    value: "+082-1234-5678",
    icon: "📱",
    link: "tel:+0821234567"
  },
  {
    title: "GitHub",
    value: "github.com/leepro",
    icon: "💻",
    link: "https://github.com/leepro"
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/leepro",
    icon: "👔",
    link: "https://linkedin.com/in/leepro"
  }
];

const ContactCard = ({ contact, index }: { contact: typeof contacts[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl">{contact.icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
            {contact.title}
          </h3>
          <p className="text-gray-400 text-sm">{contact.value}</p>
        </div>
      </div>
    </motion.a>
  );
};

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden w-full" ref={sectionRef}>
      {/* 배경 효과 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 제목 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Contact
          </h2>
          <p className="text-gray-400 mt-4">
            언제든 연락주세요
          </p>
        </motion.div>

        {/* 연락처 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 