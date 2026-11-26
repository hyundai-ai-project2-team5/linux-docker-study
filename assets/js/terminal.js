// 본문에서 Ubuntu(리눅스 배포판) 단어는 Ubuntu 주황 글자 + 보라 바탕(.ubuntu-word),
// 도커 핵심 단어와 docker 명령은 파란색(.docker-word, .docker-code)으로 강조해요.
// Linux·리눅스는 운영체제라 대표색이 없어서 강조하지 않아요.
(function () {
  var WORD_PATTERN = /(Dockerfile|Docker|docker|도커|컨테이너|Compose|compose|Ubuntu|우분투)/g;
  var UBUNTU_WORDS = { Ubuntu: true, 우분투: true };
  var CODE_PATTERN = /^\s*(docker|Dockerfile|compose\.ya?ml)/;
  var SKIP_TAGS = { SCRIPT: true, STYLE: true, PRE: true, CODE: true, TEXTAREA: true };

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
        el.classList.contains('ubuntu-word') ||
        el.classList.contains('ubuntu') ||
        el.classList.contains('post-chip') ||
        el.classList.contains('post-author') || // 작성자@linux-docker의 docker는 호스트 이름이라 강조하지 않아요
        el.classList.contains('post-tags')
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
          span.className = UBUNTU_WORDS[part] ? 'ubuntu-word' : 'docker-word';
          span.textContent = part;
          frag.appendChild(span);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  // 커서(사이드바 제목 끝, 명령 줄 끝): 링크(외부 사이트, 주소창, 북마크)로 처음 들어온 페이지에서만 깜빡여요.
  // 사이트 안에서 다른 페이지를 누르면 커서는 켜진 채로 있어요.
  function blinkOnLanding() {
    var cursors = document.querySelectorAll('.cmd-cursor');
    var fromInside = false;
    try {
      fromInside = new URL(document.referrer).origin === location.origin;
    } catch (e) {
      fromInside = false;
    }
    if (!fromInside) {
      Array.prototype.forEach.call(cursors, function (cursor) {
        cursor.classList.add('is-blinking');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    blinkOnLanding();
    // 본문과 사이드바 메뉴에 같은 규칙을 적용해요.
    ['.main-content', '.site-nav'].forEach(function (selector) {
      var root = document.querySelector(selector);
      if (!root) {
        return;
      }
      markCode(root);
      markWords(root);
    });
  });
})();
