# LeeJaeHyekk.github.io

프론트엔드 개발자 이재혁의 포트폴리오 웹사이트입니다.

## 🌐 웹사이트

**Live Site**: https://LeeJaeHyekk.github.io

## ✨ 주요 기능

- **다국어 지원**: 한국어/영어 언어 전환 기능 (localStorage 기반 언어 저장)
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 대응
- **SEO 최적화**: Meta tags, Open Graph, Twitter Cards, JSON-LD 구조화 데이터
- **접근성**: ARIA 속성, Semantic HTML, 키보드 네비게이션 지원
- **성능 최적화**: CSS/JS 압축, 이미지 최적화 (WebP), Resource Hints
- **보안**: Content Security Policy (CSP) 적용
- **현대적인 UX**: Toast 알림, 이메일 클립보드 복사 기능

## 🛠️ 기술 스택

### Frontend
- **HTML5**: Semantic HTML 구조
- **CSS3**: 모듈화된 CSS 아키텍처
  - CSS Variables
  - Flexbox & Grid
  - Media Queries
  - Custom Properties
- **JavaScript (ES6+)**: 
  - ESM (ECMAScript Modules)
  - Modern JavaScript 문법
  - LocalStorage API
  - Clipboard API

### 도구 및 최적화
- **CSS 압축**: csso-cli
- **이미지 최적화**: WebP 포맷 지원
- **호스팅**: GitHub Pages

## 📁 프로젝트 구조

```
LeeJaeHyekk.github.io/
├── assets/                    # 정적 자산
│   └── images/               # 이미지 파일
│       ├── photo.jpg         # 프로필 이미지 (원본, fallback)
│       └── photo.webp        # 프로필 이미지 (최적화, WebP)
├── css/                      # 스타일시트
│   ├── variables.css         # CSS 변수 정의
│   ├── reset.css             # CSS Reset
│   ├── base.css              # 기본 스타일
│   ├── layout.css            # 레이아웃 스타일
│   ├── utilities.css         # 유틸리티 클래스
│   ├── responsive.css        # 반응형 스타일
│   ├── style.css             # 메인 스타일시트 (모듈 import)
│   ├── style.min.css         # 압축된 CSS (프로덕션)
│   └── components/           # 컴포넌트별 스타일
│       ├── hero.css          # Hero 섹션
│       ├── card.css          # 카드 컴포넌트
│       ├── timeline.css      # 타임라인 컴포넌트
│       ├── skills.css        # 스킬 섹션
│       ├── projects.css      # 프로젝트 섹션
│       ├── experience.css    # 경험 섹션
│       ├── footer.css        # 푸터
│       ├── toast.css         # Toast 알림
│       └── language-switcher.css  # 언어 전환 버튼
├── js/                       # JavaScript 모듈 (ESM)
│   ├── language-switcher.js  # 다국어 전환 기능
│   ├── email-handler.js      # 이메일 클립보드 복사 및 Toast
│   └── protection.js         # 콘텐츠 보호 기능
├── .well-known/              # 웹 표준 설정
│   └── appspecific/
│       └── com.chrome.devtools.json  # Chrome DevTools 설정
├── index.html                # 메인 페이지 (SPA)
├── robots.txt                # 검색 엔진 크롤러 가이드
├── sitemap.xml               # 사이트맵 (SEO)
├── .nojekyll                 # GitHub Pages Jekyll 비활성화
├── .gitignore                # Git 무시 파일 목록
├── package.json              # 프로젝트 설정 및 스크립트
└── README.md                 # 프로젝트 문서
```

## 🎨 디자인 특징

- **모던한 디자인**: 깔끔하고 신뢰감 있는 UI/UX
- **카드 기반 레이아웃**: 섹션별 카드 디자인
- **타임라인**: 경력 및 학력 시각화
- **부드러운 애니메이션**: CSS transitions 및 transforms
- **다크 모드 대응**: CSS 변수 기반 테마 시스템 준비

## 📋 섹션 구성

1. **Hero**: 프로필 사진, 이름, 역할, 소개, 소셜 링크
2. **About**: 개발 철학 및 경험 소개
3. **Experience**: 보보스링크 (Bixby Capsule QA), 한국마사회 경력
4. **Education**: 가톨릭관동대학교, 경일 게임 아카데미
5. **Skills**: Frontend, Backend, Infra 기술 스택
6. **Projects**: 득근득근 (Deukgeun) 프로젝트
7. **성장 여정**: 개발자로서의 성장 스토리
8. **실무 경험**: 문제 해결과 구조 설계 경험
9. **개발 기준**: 코드 품질에 대한 철학
10. **확장성과 안정성**: T자형 개발자로의 성장
11. **성격과 개발 스타일**: 개인적 특성과 개발 접근법
12. **팀과 함께 성장**: 팀 기여도 및 비전

## 🚀 시작하기

### 로컬 개발 환경 설정

1. **저장소 클론**
```bash
git clone https://github.com/LeeJaeHyekk/LeeJaeHyekk.github.io.git
cd LeeJaeHyekk.github.io
```

2. **의존성 설치** (선택사항)
```bash
npm install
```

3. **로컬 서버 실행**

**방법 1: Python HTTP Server**
```bash
python -m http.server 8000
```

**방법 2: Node.js http-server**
```bash
npx http-server -p 8000
```

**방법 3: VS Code Live Server**
- VS Code에서 `index.html` 우클릭 → "Open with Live Server"

4. **브라우저에서 확인**
```
http://localhost:8000
```

### CSS 압축

```bash
npm run minify-css
```

또는

```bash
npx csso-cli css/style.css -o css/style.min.css
```

## 🌍 다국어 지원

- **기본 언어**: 한국어 (`lang="ko"`)
- **지원 언어**: 한국어, 영어
- **언어 전환**: Hero 섹션의 언어 전환 버튼 클릭
- **언어 저장**: localStorage를 통한 사용자 언어 설정 저장

### 번역 구조

- 모든 번역 데이터는 `js/language-switcher.js`에 정의
- HTML 요소에 `data-translate` 속성으로 번역 키 지정
- 동적 콘텐츠 업데이트를 위한 `aria-live` 속성 적용

## 🔒 보안 기능

- **Content Security Policy (CSP)**: XSS 공격 방지
- **콘텐츠 보호**: 우클릭 방지, 텍스트 선택 방지, 드래그 방지
- **키보드 단축키 차단**: 개발자 도구 접근 제한

## ♿ 접근성

- **ARIA 속성**: `aria-label`, `aria-live`, `aria-labelledby` 등
- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` 사용
- **키보드 네비게이션**: 모든 인터랙티브 요소 키보드 접근 가능
- **스크린 리더 지원**: 동적 콘텐츠 변경 시 `aria-live`로 알림
- **모션 감소 지원**: `prefers-reduced-motion` 미디어 쿼리

## 📱 반응형 디자인

- **모바일**: 768px 이하
- **태블릿**: 768px ~ 1024px
- **데스크톱**: 1024px 이상

## 🔍 SEO 최적화

- **Meta Tags**: Description, Keywords, Author
- **Open Graph**: 소셜 미디어 공유 최적화
- **Twitter Cards**: Twitter 공유 최적화
- **JSON-LD**: 구조화된 데이터 (Schema.org)
- **Canonical URL**: 중복 콘텐츠 방지
- **robots.txt**: 검색 엔진 크롤러 가이드
- **sitemap.xml**: 사이트맵 제공

## 📦 배포

### GitHub Pages

1. **저장소 설정**
   - Settings → Pages
   - Source: `main` branch
   - Folder: `/ (root)`

2. **자동 배포**
   - `main` 브랜치에 푸시 시 자동 배포
   - 배포 완료까지 1-2분 소요

## 📝 업데이트 이력

### 주요 변경사항
- ✅ 다국어 지원 (한국어/영어)
- ✅ 모듈화된 CSS 아키텍처
- ✅ ESM 기반 JavaScript 구조
- ✅ SEO 최적화 완료
- ✅ 접근성 개선
- ✅ 성능 최적화 (CSS/JS 압축, 이미지 최적화)
- ✅ 현대적인 UX (Toast 알림, 클립보드 복사)

## 🛠️ 개발 가이드

### CSS 구조

CSS는 기능별로 모듈화되어 있습니다:

- `variables.css`: CSS 변수 (색상, 간격, 폰트 등)
- `reset.css`: 브라우저 기본 스타일 리셋
- `base.css`: 기본 요소 스타일
- `layout.css`: 레이아웃 관련 스타일
- `utilities.css`: 유틸리티 클래스
- `components/*.css`: 컴포넌트별 스타일
- `responsive.css`: 반응형 스타일

### JavaScript 구조

모든 JavaScript는 ESM 모듈로 작성되었습니다:

- `language-switcher.js`: 언어 전환 로직 및 번역 데이터
- `email-handler.js`: 이메일 클립보드 복사 및 Toast 알림
- `protection.js`: 콘텐츠 보호 기능

### 번역 추가 방법

1. `js/language-switcher.js`의 `translations` 객체에 번역 추가
2. HTML 요소에 `data-translate="keyName"` 속성 추가
3. 필요시 `updateContent` 함수에 특별 처리 로직 추가

## 📄 라이선스

© 2026 이재혁. All rights reserved.

## 📧 연락처

- **Email**: ssy02134@naver.com
- **GitHub**: [@LeeJaeHyekk](https://github.com/LeeJaeHyekk)
- **Blog**: [ssy9960105.tistory.com](https://ssy9960105.tistory.com/)
- **Instagram**: [@ljh96_01](https://www.instagram.com/ljh96_01)
