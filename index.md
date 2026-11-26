---
title: README.md
nav_order: 1
---
{%- comment -%}
  사이트 첫 화면은 저장소의 README.md를 그대로 보여 줘요. 내용은 README.md에서만 고쳐요.
  - README 맨 위의 "Git Pages" 링크 줄은 이 사이트 자신이라 여기서는 숨겨요 (custom.scss의 .readme).
  - 일정표(README의 첫 번째 표)는 회차 열을 좁게 보여 줘요.
  - README를 <div markdown="1"> 안에 바로 넣으면 줄 끝 \ 줄바꿈이 글자로 찍혀요.
    그래서 README를 먼저 markdownify로 HTML로 바꾼 뒤 div 안에 넣어요.
{%- endcomment -%}
{%- capture readme -%}{% include_relative README.md %}{%- endcapture -%}
<div class="readme">
{{ readme | markdownify }}
</div>
