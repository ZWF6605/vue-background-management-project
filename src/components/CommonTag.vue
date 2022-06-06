<template>
  <div class="tabs">
    <el-tag
      size="small"
      v-for="(tag, index) in tags"
      :key="index"
      :closable="tag.name !== 'home'"
      :effect="$route.name == tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    handleClose(tag, index) {
      const length = this.tags.length - 1;
      this.close(tag,index)
      if (tag.name !== this.$route.name) {
        return;
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
    ...mapMutations({
        close:'closeTag'
    })
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>