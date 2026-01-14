// Language Switcher - ESM Module
// Handles Korean/English language switching

/**
 * Translation data
 */
const translations = {
  ko: {
    // Meta
    title: '이재혁 | Frontend Developer',
    description: '사용자 경험과 코드 품질을 함께 설계하는 프론트엔드 개발자 이재혁의 포트폴리오',
    keywords: '프론트엔드 개발자, React, TypeScript, 웹 개발자, 포트폴리오, 이재혁, Frontend Developer',
    
    // Hero
    heroName: '이재혁',
    heroRole: 'Frontend Developer',
    heroIntro: '사용자 경험과 코드 품질을 함께 설계하는 프론트엔드 개발자',
    heroLinksLabel: '연락처 및 소셜 링크',
    emailLabel: '이메일로 연락하기',
    githubLabel: 'GitHub 프로필 보기',
    blogLabel: '블로그 보기',
    instagramLabel: '인스타그램 프로필 보기',
    
    // Sections
    aboutHeading: 'About',
    aboutText1: 'React와 TypeScript 기반으로 서비스의 구조와 유지보수성을 고민하며 개발해왔습니다. 단순히 기능을 구현하는 것을 넘어, 사용자가 신뢰할 수 있고 개발자가 오래 관리할 수 있는 코드를 만드는 것을 목표로 합니다.',
    aboutText2: '실무 경험과 개인 프로젝트를 통해 프론트엔드와 백엔드, 그리고 배포 환경까지 서비스 전반의 흐름을 이해하고 있습니다.',
    
    experienceHeading: 'Experience',
    experience1Title: '보보스링크 (파견)',
    experience1Period: '2023.06 – 2025.03 (1년 9개월)',
    experience1Role: 'Bixby Capsule QA (파견 업체 업무)',
    experience1Items: [
      '서비스 유지보수 및 사용자 이슈 분석·처리',
      '신규 기능 QA 및 버그 재현, 수정 작업',
      '삼성 노트, 계산기 등 다양한 Bixby Capsule 담당'
    ],
    experience2Title: '한국마사회 (PA) 비정규직',
    experience2Period: '2020.02 – 2022.02',
    experience2Items: [
      '고객 응대 및 편의 시설 관리',
      '현장 커뮤니케이션 경험'
    ],
    
    educationHeading: 'Education',
    education1Title: '가톨릭관동대학교',
    education1Period: '2022.02 졸업',
    education1Desc: '전자공학과 | 총동아리연합회 활동',
    education2Title: '경일 게임 아카데미',
    education2Period: '2022.08 - 2023.05',
    education2Desc: '블록체인 기반 핀테크 및 응용 SW개발자 양성과정',
    
    skillsHeading: 'Skills',
    
    projectsHeading: 'Projects',
    project1Title: '득근득근 (Deukgeun)',
    project1Period: '2024.07 - 2024.11',
    project1Desc: '운동 기록 관리와 커뮤니티 기능을 결합한 헬스 플랫폼',
    project1Items: [
      'React + TypeScript 기반 SPA 아키텍처 설계',
      '운동 기록, 루틴, 체중 관리 및 커뮤니티 기능 구현',
      'JWT 인증, Google reCAPTCHA, API Rate Limiting 적용',
      'Docker + PM2 기반 배포 및 운영 환경 구성'
    ],
    project1LiveLabel: '득근득근 프로젝트 라이브 사이트 보기',
    project1GithubLabel: '득근득근 프로젝트 GitHub 저장소 보기',
    
    // Footer
    footerCopyright: '© 2026 이재혁',
    footerLinksLabel: '소셜 미디어 링크',
    
    // Toast
    emailCopied: '이메일 주소가 클립보드에 복사되었습니다: ',
    emailAddress: '이메일 주소: ',
    
    // Button
    switchToEnglish: 'English',
    switchToKorean: '한국어',
    
    // Long sections
    growthHeading: '코드 속에서 시작되는 나만의 성장 여정',
    growthText1: '이러한 가치는 대학 시절의 첫 프로젝트에서부터 시작되었습니다. 제 코드가 화면에 구현되어 실제로 문제를 해결하는 것을 보며 느꼈던 큰 흥미와 성취감은, 이후 국비 교육과 실무 경험을 통해 더욱 구체적인 개발 철학으로 자리 잡았습니다.',
    growthText2: '보보스링크 파견 업무로 Bixby Capsule QA를 담당하며, 삼성 노트, 계산기 등 다양한 캡슐을 담당하며 협업과 소통의 중요성을 깊이 체감했습니다. 부서마다 다른 시각과 용어 사용으로 인해 발생하는 오해를 줄이고자, 개발 용어를 명확히 숙지하고 필요에 따라 쉽게 풀어 설명하여 원활한 소통을 하려 노력했습니다.',
    growthText3: '또한 발견된 이슈를 문서화하고 시각화하여 문제를 직관적으로 이해하고 효율적으로 대응할 수 있게 노력했습니다. 이러한 경험은 개인 프로젝트에도 고스란히 이어졌습니다. 가독성을 높이기 위해 직관적인 변수명과 함수명을 사용하고, 반복되는 로직은 재사용 가능한 모듈로 분리하며 지속적으로 코드를 개선했습니다.',
    growthText4: '이 과정들은 저를 단순히 코드를 작성하는 개발자를 넘어, 서비스 전체의 구조와 확장성을 고민하는 개발자로 성장하도록 이끌었습니다.',
    
    workExperienceHeading: '실무 경험을 통해 배우고 다진 문제 해결과 구조 설계',
    workExperienceText1: '제가 개발자로서 본격적인 성장을 시작한 곳은 국비 교육과 보보스링크 파견 업무(Bixby Capsule QA)에서의 경험입니다. 단순 QA 업무에 그치지 않고, 삼성 노트와 같은 실제 서비스의 캡슐을 담당하며 개발과 협업 전반에 걸친 문제 해결 능력을 몸으로 익혔습니다.',
    workExperienceText2: '가장 큰 배움은 효과적인 소통과 협업의 중요성이었습니다. 개발 부서와 기획 부서 간의 소통 과정에서 각자의 관점 차이를 직접 경험하며, 상대방의 입장에서 문제를 이해하고 기술적인 내용을 비기술적인 언어로 풀어 설명하는 법을 익혔습니다. 이러한 노력 덕분에 업무 소통 시 불필요한 오해를 줄이고, 보다 명확하게 의견을 전달할 수 있었습니다.',
    workExperienceText3: '두 번째는 문서화와 시각화의 힘을 깨달은 것입니다. QA 과정에서 발견한 이슈를 플로우차트, 표, Jira 기록 등으로 구조화하여 정리했습니다. 단순히 문제점을 나열하는 것이 아니라, 문제의 근본적인 원인을 명확히 파악하고 누구나 직관적으로 이해할 수 있도록 노력했습니다.',
    workExperienceText4: '이런 접근 방식은 개인 프로젝트에서도 그대로 적용되었습니다. 체계적인 아키텍처를 구성하고, 직관적인 변수 및 함수명을 사용하며, 재사용할 수 있는 모듈을 설계하여 코드의 가독성과 유지보수성을 높이려 노력했습니다. 이러한 노력은 단지 코드를 완성하는 것에 그치지 않고, 서비스의 확장성을 고려하는 저만의 습관을 형성하게 해주었습니다.',
    
    standardsHeading: '경험과 실천으로 형성된 나만의 개발 기준',
    standardsText1: '저는 좋은 코드를 "가독성, 유지보수성, 확장성을 갖춘 코드"라고 정의하며, 이 철학을 실무와 개인 프로젝트에서 꾸준히 고민하고 실천하고 있습니다.',
    standardsText2: 'React와 Node.js, MySQL을 활용한 개인 프로젝트를 진행하면서, 단순히 기능을 구현하는 것에 그치지 않고 화면과 서버, 데이터베이스를 연결하는 데이터 흐름 전체를 이해하고 설계하는 데 집중했습니다. 사용자가 입력한 데이터가 서버를 거쳐 화면에 표시되기까지의 과정을 하나하나 고민하며, 데이터 누락과 오류를 방지하고 효율적인 쿼리를 작성하려 노력했습니다.',
    standardsText3: '물론, EC2 빌드 과정에서 폴더 중복, 환경 설정 오류, 코드 간 호환성 문제 등 다양한 시행착오도 겪었습니다. 하지만 저는 임시방편으로 문제를 해결하기보다는 근본 원인을 분석하고, 공통 데이터 구조를 정의하며 동일한 기준으로 작업할 수 있는 규칙을 마련하려 노력했습니다.',
    standardsText4: '더 나아가 반복되는 기능은 재사용 가능한 모듈로 분리하여, 신규 팀원이 합류하거나 유지보수를 진행할 때도 효율적으로 대응할 수 있도록 구조를 개선했습니다. 이러한 경험은 단순 기능 구현을 넘어, 안정적이고 확장 가능한 시스템을 설계하는 것이 왜 중요한지를 깨닫게 해주었습니다.',
    
    scalabilityHeading: '확장성과 안정성의 균형을 찾아서',
    scalabilityText1: '프론트엔드 개발자로서의 전문성을 심화하면서도, 서비스 전체를 아우르고 주도적으로 개선할 수 있는 T자형 개발자로 성장하기 위해 꾸준히 노력하고 있습니다.',
    scalabilityText2: '현재 프론트엔드 분야에서는 React와 JavaScript, TypeScript를 기반으로 안정적인 아키텍처와 모듈화된 구조를 설계하는 데 집중하고 있으며, 이를 실제 프로젝트에 적용하며 실력을 다지고 있습니다.',
    scalabilityText3: '프론트엔드 외에도 Node.js, Express, MySQL, TypeORM을 활용해 백엔드 로직과 데이터베이스 설계를 경험하고 있습니다. 또한 CI/CD 환경 구축, 서버 로그 관리, 빌드 및 배포 자동화 과정을 직접 시도하며 인프라 전반에 대한 이해를 넓히고 있습니다.',
    scalabilityText4: '저의 학습 과정은 이론 → 실습 → 개선의 사이클로 이루어집니다. 새로운 기술을 배우면 즉시 프로젝트에 적용해 보고, 그 과정에서 발생하는 문제를 직접 해결하며 깊이 있는 이해를 쌓는 방식입니다. 예를 들어, 백엔드 개발 중 타입 시스템 불일치나 빌드 오류 같은 난관에 부딪혔을 때, 이를 해결하는 과정에서 자연스럽게 타입 안정성을 확보하고, DTO와 엔티티 간의 일관성을 관리하며, 모듈 구조를 개선하는 역량을 체득할 수 있었습니다.',
    scalabilityText5: 'CI/CD와 테스트 코드 작성을 직접 경험하며 단순히 작동하는 코드를 넘어, 안정적이고 확장할 수 있는 코드의 중요성을 깨달았습니다. 이제는 서비스의 데이터 흐름, 아키텍처의 일관성, 코드 품질, 그리고 운영 안정성까지 함께 고려하며 개발하고 있습니다.',
    
    personalityHeading: '버그도 공감하는 성격, 나만의 개발 스타일',
    personalityText1: '저의 성격은 개인적인 감정보다는 타인을 배려하는 것을 우선시하는 편입니다. 문제가 생겼을 때 단순히 결과만 보지 않고 과정을 되짚어보며 원인을 파악하는 것을 선호합니다. 이런 성격은 개발 과정에서도 확연하게 드러나 버그를 찾거나 코드를 최적화할 때 매우 유용합니다.',
    personalityText2: '저의 성격의 단점 중 하나는 과정 중심의 접근 방식이 때때로 시간을 더 소모할 수 있다는 것입니다. 그러나 이런 점은 동시에 장점이기도 합니다. 왜냐하면 이 과정을 통해 문제의 근본적인 원인을 찾아낼 수 있기 때문입니다. 이는 장기적으로 보면 프로젝트의 품질을 향상시키는 데 도움이 됩니다.',
    personalityText3: '개발에 대한 저의 자세는 책임감이 크고 항상 도전적입니다. 저는 일을 하는 것이 단순히 받은 연봉에 비례하는 것이 아니라 제가 얼마나 더 나아지고 싶은지 얼마나 더 성장하고 싶은지에 따라 달라진다고 믿습니다. 따라서 "받은 만큼 일하지 않고 받고 싶은 만큼 일하자"가 제 모토입니다.',
    personalityText4: '개발에 대한 저의 태도는 항상 배움과 발전을 중요시하는 것입니다. 새로운 기술을 배우고 에러를 고치며 지속적인 연구와 개발을 통해 소프트웨어 개발 분야에서의 나의 역량을 향상시키고자 합니다. 프로젝트가 완료되었다고 해서 만족하지 않습니다. 항상 더 좋은 방법이나 다른 접근법을 찾기 위해 연구를 지속합니다.',
    
    teamGrowthHeading: '팀과 함께 배우고 성장하는 개발자',
    teamGrowthText1: '회사의 성장을 함께 만들어갈 개발자로서, 저는 사용자 경험과 안정적인 코드를 중요하게 생각합니다. 이는 회사가 추구하는 안정적인 서비스 운영과 효율적인 팀 협업이라는 목표와 자연스럽게 맞닿아 있다고 생각합니다.',
    teamGrowthContributionHeading: '회사에 기여할 수 있는 나의 강점',
    teamGrowthContribution1Title: '코드 품질과 효율성 향상',
    teamGrowthContribution1Text: '이전 프로젝트에서 React와 TypeScript를 활용해 코드를 구조화하고 관리하기 쉽게 정리했던 경험이 있습니다. 이러한 경험을 바탕으로, 회사의 서비스도 안정적으로 운영될 수 있도록 작은 부분부터 차근차근 개선에 기여하고 싶습니다.',
    teamGrowthContribution2Title: '협업 문화 개선',
    teamGrowthContribution2Text: '팀원들이 효율적으로 함께 일할 수 있도록, 설계 패턴과 작업 가이드를 공유하며 서로 배우고 도움을 주고받는 환경을 만들고자 합니다. 이를 통해 팀의 생산성과 소통을 조금씩 높이는 데 보탬이 되고 싶습니다.',
    teamGrowthVisionHeading: '실질적인 가치 창출과 비전',
    teamGrowthVisionText1: '제 역할은 단순한 업무 수행을 넘어, 사용자와 조직 모두에게 긍정적인 영향을 줄 수 있도록 노력하는 것이라고 생각합니다.',
    teamGrowthVisionText2: '사용자 중심의 서비스 개선: 사용자 의견과 데이터를 살펴 불편한 점을 찾아내고, 이를 기능이나 UI/UX 개선에 반영하며 서비스 안정성과 만족도를 조금씩 높이는 데 기여하고 싶습니다.',
    teamGrowthVisionText3: '장기적으로는 서비스의 큰 그림을 이해하고, 개발 과정에서 학습하며 팀과 함께 성장하는 개발자가 되고 싶습니다. 개인의 성장과 회사의 목표를 함께 맞춰 나가면서, 서비스와 팀 발전에 조금이나마 도움이 되는 역할을 하고 싶습니다.',
    teamGrowthVisionText4: '앞으로도 저는 프론트엔드라는 주력 분야의 깊이를 더하면서도, 백엔드와 인프라에 대한 넓은 이해를 바탕으로 진정한 T자형 개발자로 성장해 나갈 것입니다. 꾸준한 학습과 실천을 통해 안정적이고 확장할 수 있는 시스템을 구축하고, 팀의 성과와 사용자 경험 개선에 실질적으로 기여하는 개발자가 되는 것이 저의 최종 목표입니다.'
  },
  en: {
    // Meta
    title: 'JaeHyuk Lee | Frontend Developer',
    description: 'Frontend developer who designs both user experience and code quality - JaeHyuk Lee\'s portfolio',
    keywords: 'Frontend Developer, React, TypeScript, Web Developer, Portfolio, JaeHyuk Lee, 이재혁',
    
    // Hero
    heroName: 'JaeHyuk Lee',
    heroRole: 'Frontend Developer',
    heroIntro: 'A frontend developer who designs both user experience and code quality',
    heroLinksLabel: 'Contact and Social Links',
    emailLabel: 'Contact via email',
    githubLabel: 'View GitHub profile',
    blogLabel: 'View blog',
    instagramLabel: 'View Instagram profile',
    
    // Sections
    aboutHeading: 'About',
    aboutText1: 'I develop services using React and TypeScript, prioritizing structure and maintainability. My goal extends beyond feature implementation—I aim to create code that users can trust and developers can maintain long-term.',
    aboutText2: 'Through professional experience and personal projects, I understand the complete service flow from frontend and backend to deployment environments.',
    
    experienceHeading: 'Experience',
    experience1Title: 'Boboslink (Contract)',
    experience1Period: '2023.06 – 2025.03 (1 year 9 months)',
    experience1Role: 'Bixby Capsule QA (Contract work)',
    experience1Items: [
      'Service maintenance and user issue analysis/resolution',
      'New feature QA, bug reproduction, and correction',
      'Responsible for various Bixby Capsules such as Samsung Notes and Calculator'
    ],
    experience2Title: 'Korea Racing Authority (PA) Non-regular employee',
    experience2Period: '2020.02 – 2022.02',
    experience2Items: [
      'Customer service and facility management',
      'On-site communication experience'
    ],
    
    educationHeading: 'Education',
    education1Title: 'Catholic Kwandong University',
    education1Period: 'Graduated 2022.02',
    education1Desc: 'Department of Electronic Engineering | Student Council Union Activities',
    education2Title: 'Kyungil Game Academy',
    education2Period: '2022.08 - 2023.05',
    education2Desc: 'Blockchain-based Fintech and Applied Software Developer Training Course',
    
    skillsHeading: 'Skills',
    
    projectsHeading: 'Projects',
    project1Title: 'Deukgeun (득근득근)',
    project1Period: '2024.07 - 2024.11',
    project1Desc: 'Health platform combining exercise record management and community features',
    project1Items: [
      'Designed SPA architecture based on React + TypeScript',
      'Implemented exercise records, routines, weight management, and community features',
      'Applied JWT authentication, Google reCAPTCHA, API Rate Limiting',
      'Configured deployment and operational environment using Docker + PM2'
    ],
    project1LiveLabel: 'View Deukgeun project live site',
    project1GithubLabel: 'View Deukgeun project GitHub repository',
    
    // Footer
    footerCopyright: '© 2026 JaeHyuk Lee',
    footerLinksLabel: 'Social Media Links',
    
    // Toast
    emailCopied: 'Email address copied to clipboard: ',
    emailAddress: 'Email address: ',
    
    // Button
    switchToEnglish: 'English',
    switchToKorean: '한국어',
    
    // Long sections
    growthHeading: 'My Growth Journey Starting from Code',
    growthText1: 'These values began with my first project in college. The excitement and sense of achievement I felt when seeing my code solve real problems evolved into a concrete development philosophy through government-funded training and professional experience.',
    growthText2: 'As a Bixby Capsule QA contractor at Boboslink, I handled various capsules including Samsung Notes and Calculator, deeply experiencing the importance of collaboration and communication. To reduce misunderstandings from different perspectives and terminology across departments, I learned to clearly understand development terms and explain them in accessible language when needed.',
    growthText3: 'I also documented and visualized discovered issues so problems could be understood intuitively and addressed efficiently. These experiences directly influenced my personal projects. I continuously improved code by using intuitive variable and function names for better readability, and separating repeated logic into reusable modules.',
    growthText4: 'These experiences shaped me into a developer who considers overall service structure and scalability, beyond simply writing code.',
    
    workExperienceHeading: 'Problem Solving and Structure Design Learned Through Professional Experience',
    workExperienceText1: 'My serious growth as a developer began through government-funded training and my experience as a Bixby Capsule QA contractor at Boboslink. Beyond simple QA work, I developed problem-solving skills across development and collaboration by handling capsules for real services like Samsung Notes.',
    workExperienceText2: 'The most important lesson was the value of effective communication and collaboration. Through interactions between development and planning departments, I experienced different perspectives firsthand, learned to understand problems from others\' viewpoints, and how to explain technical content in non-technical language. These efforts helped reduce misunderstandings and enabled clearer communication.',
    workExperienceText3: 'Second, I realized the power of documentation and visualization. I structured issues discovered during QA into flowcharts, tables, and Jira records. Rather than simply listing problems, I worked to identify root causes and make them intuitively understandable to anyone.',
    workExperienceText4: 'I applied this approach directly to my personal projects. I improved code readability and maintainability by building systematic architectures, using intuitive variable and function names, and designing reusable modules. These efforts went beyond code completion, forming my habit of considering service scalability.',
    
    standardsHeading: 'My Development Standards Formed Through Experience and Practice',
    standardsText1: 'I define good code as "code with readability, maintainability, and scalability," and I consistently apply this philosophy in both professional work and personal projects.',
    standardsText2: 'While working on personal projects using React, Node.js, and MySQL, I focused on understanding and designing the complete data flow connecting screens, servers, and databases, rather than just implementing features. I carefully considered each step from user input to screen display, working to prevent data loss and errors while writing efficient queries.',
    standardsText3: 'I encountered various challenges during EC2 build processes, such as folder duplication, environment configuration errors, and code compatibility issues. However, rather than applying temporary fixes, I analyzed root causes, defined common data structures, and established consistent working standards.',
    standardsText4: 'I further improved the structure by separating repeated functionality into reusable modules, enabling efficient responses when new team members join or maintenance is needed. These experiences taught me why designing stable and scalable systems matters beyond simple feature implementation.',
    
    scalabilityHeading: 'Finding the Balance Between Scalability and Stability',
    scalabilityText1: 'While deepening my frontend expertise, I consistently work to grow as a T-shaped developer who can understand and proactively improve entire services.',
    scalabilityText2: 'In frontend development, I focus on designing stable architectures and modular structures using React, JavaScript, and TypeScript, strengthening my skills through real project applications.',
    scalabilityText3: 'Beyond frontend, I also work with backend logic and database design using Node.js, Express, MySQL, and TypeORM. I\'m expanding my infrastructure understanding by directly working with CI/CD setup, server log management, and build and deployment automation.',
    scalabilityText4: 'My learning follows a cycle of theory → practice → improvement. When I learn a new technology, I immediately apply it to a project and build deep understanding by solving problems that arise. For example, when facing type system mismatches or build errors during backend development, I naturally gained skills in type safety, managing consistency between DTOs and entities, and improving module structures.',
    scalabilityText5: 'Through direct experience with CI/CD and test code, I realized the importance of stable and scalable code beyond simply working code. Now I develop while considering service data flow, architectural consistency, code quality, and operational stability together.',
    
    personalityHeading: 'A Personality That Empathizes Even with Bugs, My Development Style',
    personalityText1: 'My personality prioritizes caring for others over personal emotions. When problems arise, I prefer tracing back the process to identify causes rather than just looking at results. This trait is evident in my development work and proves valuable when finding bugs or optimizing code.',
    personalityText2: 'One limitation of my process-centered approach is that it can sometimes take more time. However, this is also a strength—through this process, I find root causes. Long-term, this improves project quality.',
    personalityText3: 'My approach to development is highly responsible and always challenging. I believe my work should reflect how much I want to improve and grow, not just the salary I receive. My motto is: "Don\'t work as much as you receive, but work as much as you want to receive."',
    personalityText4: 'I always value learning and growth in development. I continuously improve my software development capabilities by learning new technologies, fixing errors, and ongoing research. I don\'t stop at project completion—I keep researching to find better methods and approaches.',
    
    teamGrowthHeading: 'A Developer Who Learns and Grows with the Team',
    teamGrowthText1: 'As a developer who will help drive the company\'s growth, I value user experience and stable code. This naturally aligns with goals of stable service operation and efficient team collaboration.',
    teamGrowthContributionHeading: 'My Strengths That Can Contribute to the Company',
    teamGrowthContribution1Title: 'Code Quality and Efficiency Improvement',
    teamGrowthContribution1Text: 'I have experience structuring and organizing code using React and TypeScript in previous projects. Based on this, I want to contribute to improvements step by step, starting with small parts, so the company\'s services can operate stably.',
    teamGrowthContribution2Title: 'Collaboration Culture Improvement',
    teamGrowthContribution2Text: 'I want to create an environment where team members work together efficiently by sharing design patterns and work guides, learning from each other, and helping each other. Through this, I want to contribute to gradually increasing team productivity and communication.',
    teamGrowthVisionHeading: 'Creating Real Value and Vision',
    teamGrowthVisionText1: 'I see my role as having a positive impact on both users and the organization, beyond simply performing tasks.',
    teamGrowthVisionText2: 'User-centered service improvement: I want to contribute to gradually improving service stability and satisfaction by examining user feedback and data, identifying pain points, and reflecting them in features or UI/UX improvements.',
    teamGrowthVisionText3: 'Long-term, I want to become a developer who understands the big picture of services, learns through the development process, and grows with the team. I want to play a role that helps service and team development, even if small, while aligning personal growth with company goals.',
    teamGrowthVisionText4: 'Moving forward, I will continue growing as a true T-shaped developer by deepening my frontend expertise while building on a broad understanding of backend and infrastructure. My ultimate goal is to become a developer who substantially contributes to team performance and user experience improvement by building stable and scalable systems through consistent learning and practice.'
  }
};

/**
 * Get current language from localStorage or default to 'ko'
 */
export function getCurrentLanguage() {
  const saved = localStorage.getItem('portfolio-language');
  return saved || 'ko';
}

/**
 * Set current language in localStorage
 */
function setCurrentLanguage(lang) {
  localStorage.setItem('portfolio-language', lang);
}

/**
 * Update HTML lang attribute
 */
function updateHtmlLang(lang) {
  document.documentElement.lang = lang;
}

/**
 * Update meta tags
 */
function updateMetaTags(lang) {
  const t = translations[lang];
  
  document.title = t.title;
  document.querySelector('meta[name="description"]').setAttribute('content', t.description);
  document.querySelector('meta[name="keywords"]').setAttribute('content', t.keywords);
  
  // Open Graph
  document.querySelector('meta[property="og:title"]').setAttribute('content', t.title);
  document.querySelector('meta[property="og:description"]').setAttribute('content', t.description);
  
  // Twitter
  document.querySelector('meta[property="twitter:title"]').setAttribute('content', t.title);
  document.querySelector('meta[property="twitter:description"]').setAttribute('content', t.description);
}

/**
 * Update page content using data-translate attributes and direct selectors
 */
function updateContent(lang) {
  const t = translations[lang];
  
  if (!t) {
    console.error(`Translation data not found for language: ${lang}`);
    return;
  }
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach((el) => {
    const key = el.getAttribute('data-translate');
    if (key && t[key]) {
      // Check if translation contains HTML tags (like <strong>)
      if (t[key].includes('<strong>') || t[key].includes('<em>') || t[key].includes('<br>')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    } else if (key && !t[key]) {
      console.warn(`Translation key "${key}" not found for language "${lang}"`);
    }
  });
  
  // Update aria-label attributes
  document.querySelectorAll('[data-translate-aria]').forEach((el) => {
    const key = el.getAttribute('data-translate-aria');
    if (t[key]) {
      el.setAttribute('aria-label', t[key]);
    }
  });
  
  // Hero section (special handling - direct selectors for reliability)
  const heroH1 = document.querySelector('.hero-text h1');
  if (heroH1) heroH1.textContent = t.heroName;
  
  const heroRole = document.querySelector('.hero-text .role');
  if (heroRole) heroRole.textContent = t.heroRole;
  
  const heroIntro = document.querySelector('.hero-text .intro');
  if (heroIntro) heroIntro.textContent = t.heroIntro;
  
  const heroLinks = document.querySelector('.hero-text .links');
  if (heroLinks) heroLinks.setAttribute('aria-label', t.heroLinksLabel);
  
  // Hero links
  const heroLinkElements = document.querySelectorAll('.hero-text .links a');
  if (heroLinkElements.length >= 4) {
    heroLinkElements[0].setAttribute('aria-label', t.emailLabel);
    heroLinkElements[1].setAttribute('aria-label', t.githubLabel);
    heroLinkElements[2].setAttribute('aria-label', t.blogLabel);
    heroLinkElements[3].setAttribute('aria-label', t.instagramLabel);
  }
  
  // Experience section (special handling for lists)
  const exp1Items = document.querySelectorAll('[data-translate="experience1Item1"], [data-translate="experience1Item2"], [data-translate="experience1Item3"]');
  exp1Items.forEach((el, i) => {
    if (t.experience1Items[i]) el.textContent = t.experience1Items[i];
  });
  
  const exp2Items = document.querySelectorAll('[data-translate="experience2Item1"], [data-translate="experience2Item2"]');
  exp2Items.forEach((el, i) => {
    if (t.experience2Items[i]) el.textContent = t.experience2Items[i];
  });
  
  // Project items (special handling for lists)
  const projectItems = document.querySelectorAll('[data-translate="project1Item1"], [data-translate="project1Item2"], [data-translate="project1Item3"], [data-translate="project1Item4"]');
  projectItems.forEach((el, i) => {
    if (t.project1Items[i]) el.textContent = t.project1Items[i];
  });
  
  // Language button
  const langButton = document.querySelector('.language-switcher');
  if (langButton) {
    langButton.textContent = lang === 'ko' ? t.switchToEnglish : t.switchToKorean;
    langButton.setAttribute('aria-label', lang === 'ko' ? 'Switch to English' : '한국어로 전환');
  }
}

/**
 * Switch language
 */
export function switchLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Language ${lang} not supported`);
    return;
  }
  
  updateHtmlLang(lang);
  updateMetaTags(lang);
  updateContent(lang);
  setCurrentLanguage(lang);
}

/**
 * Initialize language switcher
 */
export function initLanguageSwitcher() {
  const currentLang = getCurrentLanguage();
  switchLanguage(currentLang);
  
  // Add event listener to language button
  const langButton = document.querySelector('.language-switcher');
  if (langButton) {
    langButton.addEventListener('click', () => {
      const currentLang = getCurrentLanguage();
      const newLang = currentLang === 'ko' ? 'en' : 'ko';
      switchLanguage(newLang);
    });
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
