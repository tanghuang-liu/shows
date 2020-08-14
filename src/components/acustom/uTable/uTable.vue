<template>
<div>
  <div v-if="config.type==='new'">
   <el-row>
      <el-input
        v-model="filename"
        placeholder="Please enter the file name (default excel-list)"
        style="width:350px;"
        prefix-icon="el-icon-document"
      />
      <el-button
        type="success"
        size="small"
        icon="el-icon-download"
        @click="push"
      >导出</el-button>
      <el-button type="primary" size="small" icon="el-icon-refresh-right" @click="flush">刷新</el-button>
   </el-row>
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        max-height="760"
        :data="list"
        style="width: 100%;font-size: 10px"
        :row-style="{height:'20px',border:'0px'}"
        :cell-style="{padding:'2px',border:'0px'}"
        :header-cell-style="{height:'0px',margin:'0px',padding:'2px',border:'0px'}"
        :header-row-style="{border:'0px'}"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          v-for="(item,key) in columns"
          :key="key"
          :label="item.label"
          :prop="item.prop"
          :min-width="item.width"
        >
          <template slot-scope="scope">
            <span v-if="item.type">
                <span v-if="item.type==='clip'">
                  <span class="clip">{{ scope.row[item.prop] }}</span>
                  <el-button
                    v-clipboard:copy="scope.row[item.prop]"
                    v-clipboard:success="clipboardSuccess"
                    type="text"
                    size="small"
                  >复制</el-button>
                </span>
                <span v-else-if="item.type==='status'" class="same">
                  <span v-if="scope.row[item.prop]===1">
                    <el-tag type="success" size="mini" style="width:40px; text-align: center;">{{item.options[0]}}</el-tag>
                  </span>
                  <span v-else>
                    <el-tag type="info" size="mini" style="width:40px; text-align: center;">{{item.options[1]}}</el-tag>
                  </span>
                </span>
            </span>
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="100px">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="gotoUpdate(scope.row.id)">修改</el-button>
            <el-button type="text" size="small" @click="deleted(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>  
</div>
</template>
<script>
import request from '@/utils/request'
export default {
  name: 'uTable',
  data(){
    return {
        filename:'',
        listLoading:false,
        sel:[],
        list:[]
    }
  },
  inheritAttrs: false,
  //父组件传递来的参数，type为接收参数的类型，default为默认什么类型
    props: {
        config:{
        type:Object,
        default: {
          type:'new',
          path:'/',    
        }
      },
      columns:{
         type:Array,
          default: []
      },
        api:{
          type:Object,
          default: {
           getList:'',
           del:''
         }
       }
  }, 
  created(){
    this.fetchData()
  },
  methods: {
        fetchData(){
            request({ url: this.api.getList, method: 'get' }).then(res=>{
              this.list=res.data
            })
        },
        gotoUpdate(id){
          this.$router.push({
            path:this.config.path+id
          })
        },
        deleted(id){
          if(id){
             request({ url: this.api.del, method: 'get' }).then(res=>{
               this.fetchData()
             })
          }
        },
         clipboardSuccess() {
          this.$message({
            message: 'Copy successfully',
            type: 'success',
            duration: 1500
          })
    }
        
  }
}
</script>
<style lang="scss" scoped>
.clip {
  display: inline-block;
  width: 200px;
}
.same {
  display: inline-block;
  width: 25%;
}
</style>
