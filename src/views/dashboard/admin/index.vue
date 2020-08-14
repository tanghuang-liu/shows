<template>
  <div class="pri">
    <el-row :gutter="10">
      <el-col :span="8">
         <el-tabs type="border-card">
          <el-tab-pane label="读取变量">
            <T-plc/>
          </el-tab-pane>
          <el-tab-pane label="写入变量">配置管理</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="8">
        <div class="head"><el-button type="text" icon="el-icon-caret-right">Run</el-button>
        <el-button type="text" icon="el-icon-caret-right">Copy</el-button></div>
      <el-card class="json-card" shadow="never">
        {{test}}
        </el-card>
      </el-col>
      <el-col :span="8">
         <div class="head"><h4>log</h4> </div>
         <el-card class="log-card" shadow="never"></el-card>
      </el-col>
    </el-row>
      <el-row style="margin-top:20px"> 
            <el-card class="chart-card" shadow="never"></el-card>
      </el-row>
  </div>
</template>
<script>
import TPlc from './coms/TPlc'
export default {
  components:{
     TPlc
  },
    data() {
      return {
        test:'啦啦啦啦啦就\nkkkkkkkk',
      };
    },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.pri{
  background: #f2f2f2;
  height: 100vh;
  padding: 20px;
}
.head{
  width: 100%;
  height: 39px;
  background: white;
  border-bottom: 1px solid #dfe4ed;
  padding-left: 15px;
  h4{
    margin: 0;
    line-height: 39px;
  }
}
.json-card{
  height: 330px;
  white-space: pre-wrap;
}
.log-card{
  height: 330px;
  white-space: pre-wrap;
}
.chart-card{
  height: 450px;
  white-space: pre-wrap;
}


</style>
<style lang="less" scoped>
/deep/.el-tabs--border-card{
  border: none;
  box-shadow: none;
}
/deep/.el-card{
  border: none;
  border-radius: 0;
}
/deep/.el-tabs__header{
  background-color: white;
}
/deep/.el-table-column--selection .cell{
  padding-left: 10px;
}
</style>