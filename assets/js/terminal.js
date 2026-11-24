// 본문에서 리눅스 관련 단어는 초록색(.linux-word), 도커 관련 단어와 명령은 파란색(.docker-word, .docker-code)으로 강조해요.
// 사이드바 회차 메뉴에는 [N] 뒤에 Linux/Docker 칩을 붙여요 (분야 정보는 _includes/head_custom.html의 window.studyFields).
(function () {
  var WORD_PATTERN = /(Dockerfile|Docker|docker|도커|컨테이너|Compose|compose|Linux|리눅스|Ubuntu|우분투)/g;
  var LINUX_WORDS = { Linux: true, 리눅스: true, Ubuntu: true, 우분투: true };
  var CODE_PATTERN = /^\s*(docker|Dockerfile|compose\.ya?ml)/;
  var SKIP_TAGS = { SCRIPT: true, STYLE: true, PRE: true, CODE: true, TEXTAREA: true };
  var FIELD_NAMES = { linux: 'Linux', docker: 'Docker' };

  function markCode(root) {
    Array.prototype.forEach.call(root.querySelectorAll('code'), function (el) {
      if (!el.closest('pre') && CODE_PATTERN.test(el.textContent)) {
        el.classList.add('docker-code');
      }
    });
  }

  function isSkipped(node, root) {
    var el = node.parentElement;
    while (el && el !== root) {
      if (
        SKIP_TAGS[el.tagName] ||
        el.classList.contains('docker-word') ||
        el.classList.contains('linux-word') ||
        el.classList.contains('post-chip')
      ) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  function markWords(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var targets = [];
    while (walker.nextNode()) {
      var node = walker.currentNode;
      WORD_PATTERN.lastIndex = 0;
      if (WORD_PATTERN.test(node.nodeValue) && !isSkipped(node, root)) {
        targets.push(node);
      }
    }
    targets.forEach(function (node) {
      var frag = document.createDocumentFragment();
      node.nodeValue.split(WORD_PATTERN).forEach(function (part, i) {
        if (!part) {
          return;
        }
        if (i % 2 === 1) {
          var span = document.createElement('span');
          span.className = LINUX_WORDS[part] ? 'linux-word' : 'docker-word';
          span.textContent = part;
          frag.appendChild(span);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  function addNavChips() {
    var fields = window.studyFields || {};
    var links = document.querySelectorAll('.site-nav a.nav-list-link');
    Array.prototype.forEach.call(links, function (a) {
      var field = fields[new URL(a.href, document.baseURI).pathname];
      var match = a.textContent.trim().match(/^(\[\d+\])\s*(.*)$/);
      if (!FIELD_NAMES[field] || !match || a.querySelector('.nav-chip')) {
        return;
      }
      var chip = document.createElement('span');
      chip.className = 'post-chip post-chip-' + field + ' nav-chip';
      chip.textContent = FIELD_NAMES[field];
      a.textContent = match[1] + ' ';
      a.appendChild(chip);
      a.appendChild(document.createTextNode(match[2]));
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    addNavChips();
    // 본문, 사이드바 메뉴, 글 위쪽 경로(breadcrumb)에 같은 규칙을 적용해요.
    ['.main-content', '.site-nav', '.breadcrumb-nav'].forEach(function (selector) {
      var root = document.querySelector(selector);
      if (!root) {
        return;
      }
      markCode(root);
      markWords(root);
    });
  });
})();
