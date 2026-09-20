// Offline logic smoke test; this does not substitute for visual review.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..', 'pet');
const html = fs.readFileSync(path.join(root, 'preview.html'), 'utf8');
const source = html.match(/<script>([\s\S]*?)<\/script>/)[1];
function run(reduced) {
  const elements = new Map();
  const timers = new Map();
  let timerId = 0;
  function node() {
    return { children: [], attrs: {}, handlers: {}, hidden: false,
      style: { setProperty(k, v) { this[k] = v; } },
      classList: { toggle() {} },
      append(v) { this.children.push(v); },
      setAttribute(k, v) { this.attrs[k] = v; },
      addEventListener(k, fn) { this.handlers[k] = fn; } };
  }
  function get(id) {
    if (!elements.has(id)) elements.set(id, node());
    return elements.get(id);
  }
  const document = { hidden: false, getElementById: get,
    createElement: node, createTextNode: text => ({ text }),
    querySelectorAll: () => get('states').children, addEventListener() {} };
  class LocalImage {
    set src(value) {
      this._src = value;
      assert(fs.existsSync(path.join(root, value.split('?')[0])));
      this.naturalWidth = 1536; this.naturalHeight = 1872;
      this.onload();
    }
    get src() { return this._src; }
  }
  const window = {
    matchMedia: () => ({ matches: reduced, addEventListener() {} }),
    clearTimeout: id => timers.delete(id),
    setTimeout: (fn, ms) => { timers.set(++timerId, { fn, ms }); return timerId; }
  };
  vm.runInNewContext(source, { document, window, Image: LocalImage, Date });
  assert.equal(get('sprite').hidden, false);
  assert.equal(get('states').children.length, 9);
  assert.equal(timers.size, reduced ? 0 : 1);
  get('states').children.forEach((button, row) => {
    button.handlers.click();
    assert.equal(get('sprite').style.backgroundPosition, `0px ${-row * 208}px`);
    assert.equal(button.attrs['aria-pressed'], 'true');
  });
  get('size-two').handlers.click();
  assert.equal(get('sprite').style.backgroundPosition, '0px -3328px');
  if (reduced) get('play').handlers.click();
  const { fn, ms } = [...timers.values()][0];
  assert.equal(ms, 150);
  fn();
  assert.equal(get('sprite').style.backgroundPosition, '-384px -3328px');
  get('play').handlers.click();
  assert.equal(timers.size, 0);
  assert.equal(get('play').textContent, '播放动画');
}
run(false);
run(true);
console.log('PASS: local asset, 9 states, frame offsets, 2× scale, timing, pause, reduced motion.');
