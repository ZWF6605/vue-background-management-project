<template>
  <!-- 菜单栏 -->
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- logo -->
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>

    <!-- 遍历没有子路由的数组并展示出来（path为唯一标识） -->
    <el-menu-item
      v-for="item in noChildren"
      :key="item.path"
      :index="item.path + ''"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 遍历有子路由的数组并展示出来（path为唯一标识） -->
    <el-submenu
      v-for="item in hasChildren"
      :key="item.path"
      :index="item.path + ''"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <!-- 遍历子路由里的数组并展示出来 -->
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subIndex"
      >
        <el-menu-item :index="subIndex + ''" @click="clickMenu(subItem)">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      //
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 跳转目标路由
    clickMenu(item) {
      // 加层判断，避免重复push到同一个页面
      if (this.$route.path !== item.path) {
        // 判断当前页面是不是等于item数组传下来的path
        this.$router.push({
          path: item.name,
        });
        this.$store.commit('selectMenu',item)
      }
    },
  },
  computed: {
    // 筛选并返回没有子路由的数组
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    // 筛选并返回有子路由的数组
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    // 侧边栏是否打开
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>


<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>>
