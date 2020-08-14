<template>
  <div>
    <update-dialog :visible.sync="testVisible" @confirm="update" :columns="this.columns"></update-dialog>
     <div>admin</div>
        <el-button type="primary"   @click="_beUpdate">确认</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
    testVisible:false,
    columns:[{
          prop: 'exam',
          label: '实例',
          data: 0,
          type:'select',
          options: [
              {
                data: 0,
                label: '禁用'
              },
              {
                data: 1,
                label: '可用'
              }
            ]
        }]
    }
  },
  methods:{
    _beUpdate(){
     this.testVisible=true
    },
    update(obj){
       console.log(obj)
    }
  }
}
</script>