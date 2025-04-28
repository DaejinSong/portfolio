'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    period: '2023 - 현재',
    role: '프론트엔드 개발자',
    company: '송프로',
    description: [
      '신규 서비스 프론트엔드 개발 및 유지보수',
      'React와 TypeScript를 활용한 웹 애플리케이션 개발',
      '사용자 경험 개선 및 성능 최적화'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    period: '2022 - 2023',
    role: '프로덕트 매니저',
    company: '송프로',
    description: [
      '신규 서비스 기획 및 프로젝트 관리',
      '사용자 리서치 및 데이터 분석',
      '개발팀과 협업하여 제품 로드맵 수립'
    ],
    skills: ['Product Planning', 'User Research', 'Data Analysis', 'Agile']
  },
  {
    period: '2021 - 2022',
    role: 'UI/UX 디자이너',
    company: '송프로',
    description: [
      '웹/앱 서비스 UI/UX 디자인',
      '프로토타입 제작 및 사용성 테스트',
      '디자인 시스템 구축'
    ],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design System']
  }
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex items-center gap-8 p-6 w-full"
    >
      {/* 타임라인 라인 */}
      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
      
      {/* 타임라인 포인트 */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        className="absolute left-[50%] top-[50%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full glowing"
        style={{
          background: 'var(--primary-gradient)'
        }}
      />

      {/* 콘텐츠 카드 */}
      <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
        <div className="card hover-lift">
          <h3 className="text-xl font-semibold text-gradient">{experience.role}</h3>
          <p className="text-blue-400 mt-1">{experience.company}</p>
          <p className="text-gray-400 text-sm mt-1">{experience.period}</p>
          <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
            {experience.description.map((desc, i) => (
              <li key={i} className="text-gray-300 text-sm">{desc}</li>
            ))}
          </ul>
          <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="gradient-border px-3 py-1 text-xs text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* 빈 공간 (반대쪽) */}
      <div className="flex-1" />
    </motion.div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="section-container relative overflow-hidden" ref={sectionRef}>
      {/* 배경 효과 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating" 
          style={{ animationDelay: '-1.5s' }}
        />
      </motion.div>

      <div className="relative z-10">
        {/* 섹션 제목 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            지금까지의 여정을 소개합니다
          </p>
        </motion.div>

        {/* 경험 타임라인 */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 