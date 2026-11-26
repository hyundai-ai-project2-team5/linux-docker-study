# Linux-Docker Study

> **Git Pages:** https://hyundai-ai-project2-team5.github.io/linux-docker-study/

현대 AI Insight Campus AI Service Programming 과정의 2차 프로젝트 팀 5조가 운영한 **4주 Linux-Docker 스터디**입니다.\
회차마다 주도자 2명이 개념 정리와 실습을 맡고 글·질문·퀴즈를 **GitHub PR로 올려** Git Pages에 공개했습니다.

- **기간:** 2026.11.24(화) ~ 12.22(화), 화·목 18:00~19:05 (최대 19:30), 9회차
- **장소:** 강의장 라운지 회의실
- **범위:** Linux 환경과 셸 → 파일·권한·프로세스·네트워크 → Docker 이미지·컨테이너·Dockerfile·Compose
- **방식:** 회차별 공통 범위 개인 학습 → 모임에서 실습 40분 + 퀴즈 20분

## 팀원

| [<img src="https://github.com/Y1OO5B.png?size=120" width="72" height="72" alt="Y1OO5B">](https://github.com/Y1OO5B) | [<img src="https://github.com/Rose-Rosie-Rose.png?size=120" width="72" height="72" alt="Rose-Rosie-Rose">](https://github.com/Rose-Rosie-Rose) | [<img src="https://github.com/hyey00n.png?size=120" width="72" height="72" alt="hyey00n">](https://github.com/hyey00n) | [<img src="https://github.com/qkrrud141.png?size=120" width="72" height="72" alt="qkrrud141">](https://github.com/qkrrud141) | [<img src="https://github.com/doxoba.png?size=120" width="72" height="72" alt="doxoba">](https://github.com/doxoba) | [<img src="https://github.com/dongan0718.png?size=120" width="72" height="72" alt="dongan0718">](https://github.com/dongan0718) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| [Y1OO5B](https://github.com/Y1OO5B) | [Rose-Rosie-Rose](https://github.com/Rose-Rosie-Rose) | [hyey00n](https://github.com/hyey00n) | [qkrrud141](https://github.com/qkrrud141) | [doxoba](https://github.com/doxoba) | [dongan0718](https://github.com/dongan0718) |

## 일정과 주도 순번

| 회차 | 날짜 | 범위 | 주도 |
| --- | --- | --- | --- |
| [1](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/01.html) | 11/24(화) | 0주차 환경 설정 | Y1OO5B (킥오프) | 
| [2](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/02.html) | 11/26(목) | 1주차 터미널·이동, 파일 다루기 | Rose-Rosie-Rose · hyey00n |
| [3](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/03.html) | 12/1(화) | 1주차 권한, 편집기·셸 스크립트 | qkrrud141 · doxoba |
| [4](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/04.html) | 12/3(목) | 2주차 로그·검색, 프로세스·패키지 | Y1OO5B · dongan0718 |
| [5](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/05.html) | 12/8(화) | 2주차 네트워크, 환경변수·SSH | qkrrud141 · hyey00n |
| [6](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/06.html) | 12/10(목) | 3주차 Docker 개념, 이미지 | Rose-Rosie-Rose · doxoba |
| [7](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/07.html) | 12/15(화) | 3주차 컨테이너 실행·관리, 데이터 유지 | Y1OO5B · qkrrud141 |
| [8](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/08.html) | 12/17(목) | 4주차 Dockerfile, 빌드 최적화 | Rose-Rosie-Rose · dongan0718 |
| [9](https://hyundai-ai-project2-team5.github.io/linux-docker-study/sessions/09.html) | 12/22(화) | 4주차 Docker 네트워크, Compose | hyey00n · doxoba |

## 한 회차 흐름

| 시점 | 담당 | 할 일 |
| --- | --- | --- |
| 모임 전날 23시까지 | 주도자가 아닌 멤버 | 교재 범위 학습, `notes/회차/아이디.md`에 질문 1개 이상 등록 |
| 모임 당일 13시까지 | 주도자 2명 | 회차 페이지(발표 자료·실습) 등록, 퀴즈 10문항 사전 작성 |
| 18:00 | 주도자 2명 | 실습 진행자와 퀴즈 담당을 현장에서 결정 |
| 18:00–18:40 | 실습 진행자 | 함께 실습, 종료 시 퀴즈 PR 등록 |
| 18:40–18:45 | 퀴즈 담당 | 쉬는 시간에 퀴즈 PR 승인·병합 |
| 18:45–19:05 | 퀴즈 담당 | 퀴즈 10분 + 해설 10분 |
| 19:05–19:30 | 전원 (필요 시) | 남은 질문, 다음 회차 확인 |
| 다음 회차 전까지 | 주도자 2명 | 멤버 질문에 댓글로 답변 |

## 운영 규칙

### 역할 분담

| 역할 | 하는 일 |
| --- | --- |
| 주도자가 아닌 멤버 | 질문 작성 PR 생성, 모임에서 실습·퀴즈 참여 |
| 주도자 2명 | 회차 페이지 작성(주도자의 정리 역할), 퀴즈 출제, 멤버 질문 PR 확인·병합, 질문 답변 |

- 질문 답변은 질문 글 목록을 위에서부터 반씩 나눠 담당, 다른 주도자 담당 질문에 보충 댓글도 허용
- 두 주도자 모두 답하기 어려운 질문은 "강사님께 여쭤볼게요"로 남기고 다음 모임 퀴즈 이후 함께 정리
- 실습 진행자·퀴즈 담당은 모임 당일 현장에서 정하므로 주도자 두 명 모두 실습과 퀴즈를 숙지

### 퀴즈

- 응시 대상: 주도자 두 명을 제외한 참석자 (결석자는 Git Pages에서 개별 응시)
- 공개 시점: 실습 종료 후 쉬는 시간
- 응시 중 개발자 도구 사용 금지

### GitHub 규칙

팀 프로젝트의 Git 컨벤션을 Git Pages에 맞게 간소화해 적용했습니다.\
작성 순서는 [팀 Notion 작성 방법](https://app.notion.com/p/422d461c2abe80568079d702991e9276)에 정리되어 있습니다.

| 항목 | 규칙 | 결정 이유 |
| --- | --- | --- |
| 배포 브랜치 | `main` 직접 커밋 금지, `main`으로 PR (`dev` 없음) | Git Pages가 `main`에서 배포되므로 `dev`를 거치면 글 공개가 늦어짐 |
| 브랜치 이름 | 글 `docs/회차-아이디`, Git Pages 설정 `chore/*`, 아이디는 소문자 | 글 작업을 구분하기 위해 `docs` 유형 추가 |
| 커밋·PR 제목 | `type: 작업 내용` / `[Type] 작업 내용` (예: `docs: 2회차 질문 추가`, `[Docs] 2회차 질문 (아이디)`) | 팀 컨벤션 유지 |
| Issue | 질문·회차 페이지·퀴즈는 Issue 없이 PR, Git Pages 설정은 Issue → PR | 매 회차 여러 명이 올리는 글까지 Issue를 만들면 관리 부담이 큼 |
| 리뷰·병합 | 멤버 질문은 해당 회차 주도자가 병합, 회차 페이지·퀴즈는 함께 주도하는 1명이 승인, Squash and merge | 퀴즈는 다른 멤버가 미리 보면 정답이 노출됨 |
| 코드 스타일 | JS 2칸·작은따옴표·세미콜론, Prettier `printWidth 100`, class·id kebab-case, LF | 팀 컨벤션 유지 (`.prettierrc`, `.gitattributes`) |

## 공통 교재와 강의안

팀 공통 교재(주차별 HTML)와 관련 자료는 [팀 Private Notion](https://app.notion.com/p/422d461c2abe80568079d702991e9276)에서 관리합니다.

## Git Pages 구현

| 영역 | 사용 기술 | 구현 내용 |
| --- | --- | --- |
| 생성·배포 | Jekyll, GitHub Pages, [just-the-docs](https://github.com/just-the-docs/just-the-docs) v0.10.1 (remote theme) | `main` 병합 후 1~2분 내 자동 배포, 이 README를 Git Pages 첫 화면으로 그대로 사용 |
| 레이아웃 | Liquid (`_layouts/`, `_includes/`) | 회차 글을 기술 블로그 형식(작성자·태그·이전/다음 글)으로 구성, 회차별 질문 목록 자동 수집 |
| 리눅스 터미널 테마 | SCSS (`_sass/`), Ubuntu Sans Mono | 사이드바 제목과 위쪽 막대를 이어서 한 줄의 셸 프롬프트(`hdp2t5@linux-docker:~$ cat README.md`)로, 사이드바를 홈 디렉터리의 `tree` 출력으로, 사이드바 하단을 Ubuntu 로그인 인사말(MOTD)로 표현. 글자색은 GNOME 터미널 기본 팔레트, 사이드바 제목의 프롬프트는 Ubuntu 기본 프롬프트처럼 사용자@호스트 초록·경로 파랑 |
| 색 규칙 | SCSS, Vanilla JS | 리눅스는 운영체제이므로 별도 색 없이 흰색, Ubuntu(배포판) 관련 단어만 Ubuntu 주황 글자·보라 바탕, 도커 핵심 단어와 `docker` 명령만 파란색 |
| 퀴즈 | Vanilla JS (`assets/js/quiz.js`) | 마크다운(문제 `##`, 보기 `-`, 해설 `>`)을 풀이형 퀴즈로 변환, 형식 오류를 출제자에게 표시 |
| 키워드 강조 | Vanilla JS (`assets/js/terminal.js`) | 본문의 Ubuntu 단어, 도커 핵심 단어, `docker` 명령을 찾아 색 규칙 적용 |
| 질문 답변 | [giscus](https://giscus.app) (GitHub Discussions) | 질문 글 하단 댓글창, GitHub 계정으로 답변 |
| 로컬 미리 보기 | Docker (`jekyll-build-pages` 이미지) | GitHub Pages와 동일한 빌더로 로컬 확인 |

### 저장소 구조

| 경로 | 내용 | 담당 |
| --- | --- | --- |
| `README.md` | 소개·일정·규칙 (Git Pages 첫 화면 `index.md`가 이 파일을 그대로 표시) | 팀장 |
| `sessions/회차.md` | 회차 페이지: 발표 자료, 실습 | 해당 회차 주도자 |
| `quiz/회차.md` | 퀴즈 10문항 | 해당 회차 주도자 |
| `notes/회차/아이디.md` | 멤버 질문 | 주도자가 아닌 멤버 (본인 파일만) |
| `schedule.md` | 회차 글 목록 | 팀장 |
| `_config.yml` `_layouts/` `_includes/` `assets/` | Git Pages 설정·레이아웃·스크립트 | 팀장 |
| `_sass/` | 테마: 기본색(`color_schemes/terminal.scss`), 글꼴(`custom/setup.scss`), 꾸미기(`custom/custom.scss`) | 팀장 |