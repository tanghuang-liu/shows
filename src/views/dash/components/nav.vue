<template>
  <div class="child">
    <div class="cont" clearfix>
    <div class="left"></div>
    <div class="right ">
       <el-link type="info">信息链接</el-link>
       <el-link type="info">信息链接</el-link>
       <el-link type="info">信息链接</el-link>
       <el-link type="info">信息链接</el-link>
       <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.child{
  width: 100%;
  height: 50px;
  left: 0;
  top: 0;
  position: fixed;
  background: white;
  z-index: 999;
  .cont{
    width: 100%;
    height: 100%;
    .left{
      width: 200px;
      height: 100%;
      background: aquamarine;
      float: left;

    }
    .right{
      float: right;
      max-width:500px;
      height: 100%;
      margin-right: 10%;
      line-height: 50px;
      padding-left: 20px;
    }
  }
}
  ::v-deep.el-link{
        margin-right: 20px;
      }
  ::v-deep.el-avatar{
    vertical-align: middle;
  }   
</style>