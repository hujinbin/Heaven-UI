import Vue from 'vue'
import Alert from '../src/alert'

describe('Alert', () => {
    afterEach(() => {
        const el = document.querySelector('.h-alert');
        if (!el) return;
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        if (el.__vue__) {
          el.__vue__.$destroy();
        }
      });
})