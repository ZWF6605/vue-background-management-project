<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <common-tag></common-tag>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from '../components/CommonTag';

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
};
</script>

<style lang="less">
.flex-design {
display: flex;
  flex-direction: column;
}
.el-header {
  background: #333;
}
.el-main {
  .flex-design();
  padding-top: 0;
  .manage{
    flex:1;
    .flex-design();
  }
}
</style>