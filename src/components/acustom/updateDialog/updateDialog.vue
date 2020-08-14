<template>
  <el-dialog title="提示" v-bind="$attrs"  v-on="$listeners" :visible.sync="visibleDialog">
        <el-form
          ref="ruleForm"
          :model="columns"
          status-icon
          label-width="100px"
          class="demo-ruleForm"
        >
         <!--表单项遍历 -->
          <el-form-item
            v-for="(item,index) in columns"
            :key="item.key"
            :rules="rules[item.prop]"
            :label="item.label"
            :prop="'columns.'+index+'.data'" 
          >
          <!--判断是否需要改变类型 -->
            <span v-if="item.type">
               <!--判断是否具体改变成什么类型 -->
                 <span v-if="item.type==='select'">
                  <el-select v-model="item.data" placeholder="请选择" style="width: 80%" size="mini">
                    <el-option
                      v-for="i in item.options"
                      :key="i.data"
                      :label="i.label"
                      :value="i.data"
                    />
                  </el-select>
                 </span>
                <span v-else-if="item.type==='pass'">
                  <el-input  v-model="item.data"  size="mini" style="width: 80%" show-password></el-input>
                </span>
            </span>
            <span v-else>
              <el-input v-model="item.data" size="mini" style="width: 80%" />
            </span>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" size="mini" @click=" _handleConfirm('ruleForm')">确认</el-button>
          <el-button
            size="mini"
            @click="visibleDialog=false"
          >取消</el-button>
        </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'updateDialog',
  data(){
    return {
        config:{
          title:'提示'
        }
    }
  },
  inheritAttrs: false,
  //父组件传递来的参数，type为接收参数的类型，default为默认什么类型
    props: {
        visible: {
          type: Boolean,
          default: false
        },
        config:{
        type:Object,
        default: {}
        },
        columns:{
          type:Array,
          default:[]
        },
        rules:{
          type:Array,
          default:[]
        }
  }, 
   computed: {
    // 通过计算属性，对.sync进行转换，外部也可以直接使用visible.sync
    visibleDialog: {
      get() {
        return this.visible;
      },
      //加了setter之后，计算属性=某个值 才能生效
      set(val) {
        this.$emit("update:visible",val);
      }
    }
  },
  methods: {
        // 对外抛出 confirm事件
        _handleConfirm(formName) {
          this.$refs[formName].validate((valid) => {
          let tmp={}
          this.columns.forEach(e => {
            tmp[e.prop]=e.data
          });
          this.$emit("confirm",tmp);
           this.visibleDialog=false
          })
        }
        
  }
}
</script>
<style lang="scss" scoped>

</style>
