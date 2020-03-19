<template>
    <div id="test">
      <!-- <mavon-editor v-model="value"/> -->
        <!-- 这里是 我的笔记本！ -->
        <!-- <el-row>
            <el-col :span="6">
                <div class="cardItem">
                    <div class="cardItem_txt">
                        <count-to class="cardItem_p0 color-green1" :startVal="startVal" :endVal="vistors"
                            :duration="2000">
                        </count-to>
                        <p class="cardItem_p1">Notebook1</p>
                    </div>
                    <div class="cardItem_icon">
                        <i class="el-icon-document color-green1"></i>
                    </div>
                </div>
            </el-col>

            <el-col :span="18">Test!</el-col>
        </el-row> -->



    </div>
</template>

<script>
    export default {
        name: "test",
        data() {
            return {
              value:''
               
            }
        },
        computed: {
           
        },
        methods: {
           
        }
    }
</script>

<style scoped lang="scss">
    $mgTop: 30px;
  
    @mixin shadow {
      box-shadow: 0 0 10px #e2e2e2;
    }
  
    .testStyle {
      margin-top: 20px;
    }
  
    .color-green1 {
      color: #40c9c6 !important;
    }
  
    .color-blue {
      color: #36a3f7 !important;
    }
  
    .color-red {
      color: #f4516c !important;
    }
  
    .color-green2 {
      color: #34bfa3 !important;
    }
  
    .dashbord {
      background-color: #f0f3f4;
    }
  
    .infoCrads {
      margin: 0 -20px 0 -20px;
  
      .el-col {
        padding: 0 20px;
        
  
        .cardItem {
          height: 108px;
          background: #fff;
        }
      }
    }
  
    .cardItem {
      color: #666;
      @include shadow();
  
      .cardItem_txt {
        float: left;
        margin: 26px 0 0 20px;
  
        .cardItem_p0 {
          font-size: 20px;
          font-weight: bold;
        }
  
        .cardItem_p1 {
          font-size: 16px;
        }
      }
  
      .cardItem_icon {
        float: right;
        margin: 24px 20px 0 0;
  
        i {
          font-size: 55px;
        }
      }
    }
  

  </style>