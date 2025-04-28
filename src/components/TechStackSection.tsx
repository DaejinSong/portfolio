'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TechCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 1-100
    color: string;
  }[];
}

const techStack: TechCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
      { name: "Next.js", level: 80, color: "from-gray-600 to-gray-400" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-blue-500" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 75, color: "from-green-500 to-green-700" },
      { name: "Express", level: 70, color: "from-gray-500 to-gray-700" },
      { name: "PostgreSQL", level: 65, color: "from-blue-700 to-indigo-700" }
    ]
  },
  {
    name: "Design",
    skills: [
      { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
      { name: "Adobe XD", level: 80, color: "from-pink-600 to-pink-400" },
      { name: "Photoshop", level: 75, color: "from-blue-600 to-blue-800" }
    ]
  }
];

const SkillBar = ({ skill, index, isInView }: { skill: TechCategory['skills'][0]; index: number; isInView: boolean }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </div>
  );
};

const CategorySection = ({ category, isInView }: { category: TechCategory; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
    >
      <h3 className="text-xl font-semibold text-white mb-6">{category.name}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  );
};

const TechStackSection = () => {
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
            Tech Stack
          </h2>
          <p className="text-gray-400 mt-4">
            주요 기술 스택을 소개합니다
          </p>
        </motion.div>

        {/* 기술 스택 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category) => (
            <CategorySection key={category.name} category={category} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection; 