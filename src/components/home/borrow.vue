<template lang="html">
    <Panel title="枝速借贷" class="panel">
        <section class="content">
            <router-link :to="{ name: 'home' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" style="width:100%;" alt="">
            </router-link>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
  components: {
    Panel,
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  .content {
    padding-bottom: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
