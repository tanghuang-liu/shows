<template>
      <el-table
              :data="tableData"
              stripe
              height="300px"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="变量"
               >
              </el-table-column>
              <el-table-column
                prop="name"
                label="类型"
               >
              </el-table-column>
           </el-table>
</template>
<script>
export default {
    data(){
        return {
              tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
        }
    }
}
</script>
<style lang="less" scoped>

</style>