'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Project A",
    description: "React와 TypeScript를 활용한 웹 애플리케이션. 사용자 경험을 최우선으로 고려한 인터페이스 설계.",
    image: "/project1-placeholder.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Project B",
    description: "Next.js와 GraphQL을 활용한 풀스택 웹 서비스. 실시간 데이터 처리와 최적화된 성능 제공.",
    image: "/project2-placeholder.png",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Project C",
    description: "모바일 최적화된 반응형 웹 애플리케이션. 크로스 플랫폼 호환성과 접근성 고려.",
    image: "/project3-placeholder.png",
    tags: ["React Native", "Redux", "Firebase"],
    link: "#"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
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
            Projects
          </h2>
          <p className="text-gray-400 mt-4">
            주요 프로젝트를 소개합니다
          </p>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 