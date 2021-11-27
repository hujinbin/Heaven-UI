<script>
export default {
  name: 'HRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style() {
      const ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  },

  render(h) {
    return h(this.tag, {
      class: [
        'h-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'h-row-flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
}
</script>

<style lang="scss" scoped>
.h-row{
    position: relative;
    box-sizing: border-box;
    &::after{
      content: '';
      display: inline-block;
      clear: both;
    }
}
</style>