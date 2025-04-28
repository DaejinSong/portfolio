'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-50" />
      
      {/* 배경 블러 효과 */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
      </motion.div>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 텍스트 영역 */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 pb-2 leading-normal"
            >
              송프로
            </motion.h2>
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mt-4"
            >
              Frontend Developer / Technical Architect
            </motion.h3>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-400 mt-6 max-w-lg"
            >
              최신 기술과 아키텍처를 활용하여 확장 가능하고 유지보수가 용이한 웹 서비스를 설계하고 개발합니다.
              React, TypeScript, Next.js를 기반으로 견고한 프론트엔드 아키텍처를 구축하며, 최적의 사용자 경험을 제공합니다.
            </motion.p>
            
            {/* CTA 버튼 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 space-x-4"
            >
              <button className="btn-primary">
                포트폴리오 보기
              </button>
              <button className="btn-secondary">
                연락하기
              </button>
            </motion.div>
          </motion.div>

          {/* 프로필 이미지 영역 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src="/profile.jpg"
                  alt="송프로의 프로필"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 