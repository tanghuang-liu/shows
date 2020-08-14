<template>
    <div class="pri">
          <Nav/>
          <div class="greet"></div>
          <div class="mybody">
               <el-row :gutter="30">
              <el-col :span="15">
                  <el-row><panel-group/></el-row>
                   <el-row>
                  <el-card class="map-card" shadow="never" id="allmap"></el-card>
                 </el-row>
              </el-col>
              <el-col :span="9">
                 <el-row>
                  <el-card class="box-card" shadow="never"></el-card>
                 </el-row>
                  <el-row> <el-card class="board-card" shadow="never"></el-card></el-row>
              </el-col>
            </el-row>
          </div>
    </div>
</template>
<script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=PfZO9TkeRBD5slW61NBvLxnUqdFhGG6O"></script>
<script>
import Nav from './components/nav'
import PanelGroup from './components/PanelGroup'
export default {
    components:{
        Nav,
        PanelGroup
    },mounted() {
        this.baiduMap()
    },
    methods:{
        baiduMap(){
            var map = new BMapGL.Map("allmap");    // 创建Map实例
            map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19);  // 初始化地图,设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            map.setHeading(64.5);
            map.setTilt(73);
        }
    }
}
</script>
<style lang="scss" scoped>
.pri{
    width: 100%;
    height: 2000px;
    background: #f2f2f2;
   .greet{
       margin-top: 50px;
       height: 70px;
       width: 100%;
   }
   .mybody{
       padding:0 30px 0 30px;
        .map-card{
         width: 100%;
         height: 643px;
       }
       .box-card{
         margin-top: 20px;
         width: 100%;
         height: 450px;
       }
       .board-card{
         margin-top: 20px;
         width: 100%;
         height: 300px;
       }
       
   }
}
::v-deep.el-card{
    border: none;
}
</style>