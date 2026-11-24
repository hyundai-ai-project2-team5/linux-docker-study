// 퀴즈 페이지(quiz/*.md)의 마크다운을 풀 수 있는 퀴즈로 바꿔요.
// 쓰는 법: quiz/_template.md 참고. 문제는 "## 제목", 보기는 "- 목록", 정답 보기 끝에 "(정답)", 해설은 "> 인용".
(function () {
  var src = document.getElementById('quiz-source');
  var app = document.getElementById('quiz-app');
  if (!src || !app) return;
  src.style.display = 'none';

  var MARK = /\s*\(정답\)\s*$/;
  var intro = [],
    qs = [],
    cur = null;

  Array.prototype.forEach.call(src.children, function (el) {
    var tag = el.tagName;
    if (tag === 'H2') {
      var h = el.cloneNode(true);
      Array.prototype.forEach.call(h.querySelectorAll('.anchor-heading'), function (a) {
        a.parentNode.removeChild(a);
      });
      cur = { title: h.innerHTML.trim(), body: '', opts: [], answers: [], expl: '' };
      qs.push(cur);
    } else if (!cur) {
      intro.push(el.outerHTML);
    } else if ((tag === 'UL' || tag === 'OL') && cur.opts.length === 0) {
      Array.prototype.forEach.call(el.children, function (li, i) {
        var html = li.innerHTML.trim();
        if (MARK.test(li.textContent)) {
          cur.answers.push(i);
          html = html.replace(/\s*\(정답\)\s*(<\/p>)?\s*$/, '$1');
        }
        cur.opts.push(html);
      });
    } else if (tag === 'BLOCKQUOTE') {
      cur.expl += el.innerHTML;
    } else if (cur.opts.length === 0) {
      cur.body += el.outerHTML; // 문제 본문 (코드 블록 등)
    } else {
      cur.expl += el.outerHTML;
    }
  });

  // 출제자용 점검: 10문항, 3지선다, 정답 1개
  var warns = [];
  if (qs.length !== 10) warns.push('문항 수가 ' + qs.length + '개예요 (10개 권장).');
  qs.forEach(function (q, i) {
    var n = i + 1;
    if (q.opts.length !== 3) warns.push(n + '번 보기가 ' + q.opts.length + '개예요 (3개).');
    if (q.answers.length !== 1)
      warns.push(n + '번 정답 표시 "(정답)"이 ' + q.answers.length + '개예요 (1개).');
  });

  var css = document.createElement('style');
  css.textContent =
    '.qz-warn{border:2px dashed #d4a72c;padding:.75rem 1rem;margin:1rem 0;border-radius:6px}' +
    '.qz-q{border:1px solid rgba(128,128,128,.35);border-radius:8px;padding:1rem;margin:1rem 0}' +
    '.qz-q h3{margin-top:0}' +
    '.qz-opt{display:block;padding:.4rem .5rem;margin:.25rem 0;border-radius:6px;cursor:pointer;border:1px solid transparent}' +
    '.qz-opt input{margin-right:.5rem}' +
    '.qz-opt.right{border-color:#2da44e}' +
    '.qz-opt.wrong{border-color:#cf222e}' +
    '.qz-expl{margin-top:.5rem;padding:.5rem .75rem;border-left:4px solid rgba(128,128,128,.5)}' +
    '.qz-result{font-size:1.4rem;font-weight:700;margin:1rem 0;padding:1rem;border:2px solid #2da44e;border-radius:8px}';
  document.head.appendChild(css);

  var html = intro.join('');
  if (warns.length) {
    html +=
      '<div class="qz-warn"><strong>출제자 점검</strong><ul><li>' +
      warns.join('</li><li>') +
      '</li></ul></div>';
  }
  html += '<form id="qz-form">';
  qs.forEach(function (q, i) {
    html += '<div class="qz-q" data-i="' + i + '"><h3>' + q.title + '</h3>' + q.body;
    q.opts.forEach(function (o, j) {
      html +=
        '<label class="qz-opt" data-j="' +
        j +
        '"><input type="radio" name="q' +
        i +
        '" value="' +
        j +
        '">' +
        o +
        '</label>';
    });
    html += '<div class="qz-expl" hidden></div></div>';
  });
  html +=
    '<button type="submit" class="btn btn-primary">제출</button></form><div id="qz-out"></div>';
  app.innerHTML = html;

  var started = Date.now();
  var form = document.getElementById('qz-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var blank = 0,
      score = 0;
    qs.forEach(function (q, i) {
      if (!form.querySelector('input[name="q' + i + '"]:checked')) blank++;
    });
    if (blank && !window.confirm('안 푼 문제가 ' + blank + '개 있어요. 제출할까요?')) return;

    qs.forEach(function (q, i) {
      var box = form.querySelector('.qz-q[data-i="' + i + '"]');
      var picked = form.querySelector('input[name="q' + i + '"]:checked');
      var pj = picked ? Number(picked.value) : -1;
      var ok = q.answers.indexOf(pj) !== -1;
      if (ok) score++;
      Array.prototype.forEach.call(box.querySelectorAll('.qz-opt'), function (lab) {
        var j = Number(lab.getAttribute('data-j'));
        if (q.answers.indexOf(j) !== -1) {
          lab.classList.add('right');
          lab.insertAdjacentHTML('beforeend', ' ✅');
        } else if (j === pj) {
          lab.classList.add('wrong');
          lab.insertAdjacentHTML('beforeend', ' ❌');
        }
      });
      var ex = box.querySelector('.qz-expl');
      ex.innerHTML =
        (ok ? '<strong>정답</strong>' : '<strong>오답</strong>') + (q.expl ? ' · ' + q.expl : '');
      ex.hidden = false;
    });
    Array.prototype.forEach.call(form.querySelectorAll('input'), function (inp) {
      inp.disabled = true;
    });
    form.querySelector('button[type="submit"]').hidden = true;

    var sec = Math.round((Date.now() - started) / 1000);
    var out = document.getElementById('qz-out');
    out.innerHTML =
      '<div class="qz-result">' +
      score +
      ' / ' +
      qs.length +
      '점 · ' +
      Math.floor(sec / 60) +
      '분 ' +
      (sec % 60) +
      '초</div>' +
      '<p>점수를 퀴즈 담당에게 말해 주세요. 해설은 각 문제 아래에 있어요.</p>' +
      '<button type="button" class="btn" onclick="location.reload()">다시 풀기</button>';
    out.scrollIntoView({ behavior: 'smooth' });
  });
})();
