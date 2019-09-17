<template>
  <div class="star star-24" :class="'star-'+size">
    <span class="star-item" v-for="(starclass, index) in starClassS" :class="starclass" :key="index"></span>
  </div>
</template>

<script>
export default {
  name: 'Star',
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClassS () {
      const {score} = this
      const scs = []
      const scoreIntege = Math.floor(score)
      for (var i = 0; i < scoreIntege; i++) {
        scs.push('on')
      }
      if ((score - scoreIntege) * 10 >= 5) {
        scs.push('half')
      }
      while (scs.length < 5) {
        scs.push('off')
      }
      return scs
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../assets/images/stars/star48_on')
        &.half
          bg-image('../../assets/images/stars/star48_half')
        &.off
          bg-image('../../assets/images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../assets/images/stars/star36_on')
        &.half
          bg-image('../../assets/images/stars/star36_half')
        &.off
          bg-image('../../assets/images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../assets/images/stars/star24_on')
        &.half
          bg-image('../../assets/images/stars/star24_half')
        &.off
          bg-image('../../assets/images/stars/star24_off')
</style>
