// 본문에서 도커와 관련된 단어와 명령을 파란색(.docker-word, .docker-code)으로 강조해요.
(function () {
  var WORD_PATTERN = /(Dockerfile|Docker|docker|도커|컨테이너|Compose|compose)/g;
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
      if (SKIP_TAGS[el.tagName] || el.classList.contains('docker-word')) {
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
          span.className = 'docker-word';
          span.textContent = part;
          frag.appendChild(span);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('.main-content');
    if (!main) {
      return;
    }
    markCode(main);
    markWords(main);
  });
})();
