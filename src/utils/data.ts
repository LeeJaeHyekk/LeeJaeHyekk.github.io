// Data for portfolio website
import type { PersonalInfo, Project, Experience, Skill } from '../types'

export const personalInfo: PersonalInfo = {
  name: '이재혁',
  role: 'Frontend Developer',
  intro: '사용자 경험과 코드 품질을 함께 설계하는 프론트엔드 개발자',
  profileImage: 'assets/images/profile.jpg',
  links: {
    email: 'ssy960105@gmail.com',
    github: 'https://github.com/LeeJaeHyekk',
    blog: 'https://ssy9960105.tistory.com/'
  }
}

export const aboutText = {
  paragraph1: 'React와 TypeScript 기반으로 서비스의 구조와 유지보수성을 고민하며 개발해왔습니다. 단순히 기능을 구현하는 것을 넘어, 사용자가 신뢰할 수 있고 개발자가 오래 관리할 수 있는 코드를 만드는 것을 목표로 합니다.',
  paragraph2: '실무 경험과 개인 프로젝트를 통해 프론트엔드와 백엔드, 그리고 배포 환경까지 서비스 전반의 흐름을 이해하고 있습니다.',
  image: 'assets/images/about.jpg'
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    icon: 'assets/images/frontend-icon.svg',
    items: ['React, TypeScript, Vite', 'Zustand, Redux', 'React Router, React Hook Form']
  },
  {
    category: 'Backend',
    icon: 'assets/images/backend-icon.svg',
    items: ['Node.js, Express', 'TypeORM, MySQL', 'JWT, bcrypt, reCAPTCHA']
  },
  {
    category: 'Infra',
    icon: 'assets/images/infra-icon.svg',
    items: ['AWS EC2, S3', 'Nginx, PM2', 'Docker, docker-compose']
  }
]

export const projects: Project[] = [
  {
    id: 'deukgeun',
    title: '득근득근 (Deukgeun)',
    description: '운동 기록 관리와 커뮤니티 기능을 결합한 헬스 플랫폼',
    image: 'assets/images/project-deukgeun.jpg',
    points: [
      'React + TypeScript 기반 SPA 아키텍처 설계',
      '운동 기록, 루틴, 체중 관리 및 커뮤니티 기능 구현',
      'JWT 인증, Google reCAPTCHA, API Rate Limiting 적용',
      'Docker + PM2 기반 배포 및 운영 환경 구성'
    ],
    stack: ['React', 'TypeScript', 'Express', 'MySQL', 'Docker', 'AWS'],
    links: {
      live: 'https://www.devtrail.net',
      github: 'https://github.com/LeeJaeHyekk/deukgeun_ReactProject'
    }
  }
]

export const experiences: Experience[] = [
  {
    id: 'boboslink',
    company: '보보스링크 (파견)',
    period: '2023.06 – 2025.03',
    image: 'assets/images/experience-boboslink.jpg',
    description: [
      '서비스 유지보수 및 사용자 이슈 분석·처리',
      '신규 기능 QA 및 버그 재현, 수정 작업',
      '프론트엔드–백엔드 협업 경험'
    ]
  },
  {
    id: 'kra',
    company: '한국마사회',
    period: '2020.02 – 2022.02',
    image: 'assets/images/experience-kra.jpg',
    description: [
      '고객 응대 및 편의 시설 관리',
      '현장 커뮤니케이션 경험'
    ]
  }
]
