/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML 내보내기 설정
  images: {
    unoptimized: true,  // GitHub Pages를 위한 이미지 설정
  },
  basePath: '/portfolio',  // GitHub Pages의 레포지토리 이름과 동일하게 설정
}

module.exports = nextConfig 