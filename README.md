# 리눅스·도커 스터디

프로젝트 II 팀 6명의 리눅스·도커 스터디 사이트 저장소예요. GitHub Pages로 바로 배포돼요.

- 사이트: https://hyundai-ai-project2-team5.github.io/linux-docker-study/ (Pages를 켠 뒤)
- 처음이면 사이트의 **쓰는 법** 페이지를 보세요.

| 폴더 | 무엇 | 누가 |
| --- | --- | --- |
| `notes/회차/아이디.md` | 개인 정리 글과 질문 | 모두 (자기 파일만) |
| `sessions/회차.md` | 회차 페이지: 발표 자료, 실습 | 그 회차 주도자 |
| `quiz/회차.md` | 퀴즈 10문항 | 그 회차 주도자 |
| `index.md` `rules.md` `guide.md` | 일정, 규칙, 쓰는 법 | 팀장 |
| `_config.yml` `_layouts/` `_includes/` `assets/` | 사이트 설정 | 팀장 (건드리지 않기) |
| `_sass/` | 윈도우 터미널 테마: 색(`color_schemes/terminal.scss`), 글꼴(`custom/setup.scss`), 꾸미기(`custom/custom.scss`) | 팀장 |

## 팀 컨벤션 적용

팀 `development_convention`(Git & GitHub, Coding, Gradio UI)을 따르되, 문서 사이트라 아래만 가볍게 바꿨어요.

| 팀 컨벤션 | 이 저장소 | 이유 |
| --- | --- | --- |
| `dev`에서 브랜치를 따고 `dev`로 PR | `main`으로 바로 PR (`dev` 없음) | Pages가 `main`에서 배포돼요. `dev`를 거치면 정리 글이 늦게 보여요 |
| 브랜치 `feat/*` `fix/*` `refactor/*` | `docs/회차-아이디`, 설정은 `chore/*` | 글 작업이라 `docs` 유형을 추가했어요 |
| Issue → Branch → PR | 정리 글·퀴즈는 Issue 없이 PR | 매 회차 6명이 올려서 Issue까지 쓰면 너무 많아요. 사이트 설정 작업은 Issue를 만들어요 |
| 승인 2명 이상 | 정리 글은 본인 병합, 회차 페이지·퀴즈는 같이 주도하는 1명 승인 | 퀴즈는 다른 멤버가 보면 정답이 새요 |
| 커밋 `type: 작업 내용`, PR `[Type] 작업 내용`, Squash and merge | 그대로 | |
| JS 2칸·작은따옴표·세미콜론, Prettier `printWidth 100`, class·id kebab-case, LF | 그대로 (`.prettierrc`, `.gitattributes`) | |

## 로컬에서 미리 보기 (선택)

GitHub Pages와 같은 빌더로 확인할 수 있어요 (Docker 필요).

```powershell
docker run --rm -v "${PWD}:/src:ro" -e PAGES_REPO_NWO=hyundai-ai-project2-team5/linux-docker-study `
  --entrypoint bash ghcr.io/actions/jekyll-build-pages:v1.0.13 -c "github-pages build --source /src --destination /tmp/site"
```
