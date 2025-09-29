# 실행방법
```bash
# 의존성 패키지 설치
pnpm install

# 서버 실행
pnpm dev
```

# 폴더 구조
```bash
src/
 ├─ assets/           # 이미지, 폰트, 정적 파일
 ├─ components/       # 공통 컴포넌트 (Header, Footer, Button 등)
 ├─ layouts/          # 페이지 레이아웃 (공통 UI 구조)
 ├─ pages/            # 라우트 단위 페이지 컴포넌트
 │   ├─ Home/
 │   │   ├─ index.jsx
 │   │   └─ Home.css
 │   ├─ About/
 │   │   ├─ index.jsx
 │   │   └─ About.css
 │   └─ NotFound.jsx
 ├─ routes/           # 라우터 설정 모음
 │   └─ AppRouter.jsx
 ├─ hooks/            # 커스텀 훅
 ├─ context/          # React Context 관련 (ex. AuthContext)
 ├─ services/         # API 통신, firebase, axios 등
 ├─ utils/            # 유틸 함수
 ├─ App.jsx
 └─ main.jsx          # 엔트리포인트 (ReactDOM.render or createRoot)
```