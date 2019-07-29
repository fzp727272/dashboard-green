var $ = require('jquery');


module.exports = {
init:function(ele,xAxisData,data1,color){

    var lineColor = "rgba(" + color
      // app.title = '柱状图框选';

 
  
    //   var itemStyle = {
    //       normal: {
    //       },
    //       emphasis: {
    //           barBorderWidth: 1,
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowOffsetY: 0,
    //           shadowColor: 'rgba(0,0,0,0.5)'
    //       }
    //   };
  
      option = {
        //   title: {
        //       text: '出入库展示',
        //       left: 20,
        //       // subtext: '纯属虚构'
        //   },
          backgroundColor: 'rgba(255,255,255,0)',
        //   legend: {
        //       data: ['出库', '入库', '库存',],
        //       y: 5,
        //     //   x:150,
        //       textStyle:{
        //           color:"rgba(255,255,255,.4)"
        //       },
        //       borderRadius:20,
        //       itemWidth:10,
        //       itemHeight:10,
        //       // left: 10
        //   },
          // brush: {
          //     toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
          //     xAxisIndex: 0
          // },
        //   toolbox: {
        //       feature: {
        //           // mark : {show: true},
        //           // dataView : {show: true, readOnly: false},
        //           // magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        //           restore: { show: true },
        //           saveAsImage: { show: true }
        //       },
        //       right:40,
        //       // y: 'bottom'
        //   },
          tooltip: {
              axisPointer:{
                type:'line',
                lineStyle:{
                   width:1,
                   color:lineColor+",.9"
                },
                shadowStyle:{
                    shadowColor:'#000',
                    color:"rgba(8,6,17,.3)",
                    // z:"-100",
                    // opacity:".1"
                    // shadowBlur:20,
                }
              },
              trigger: 'axis',
              showDelay: 0,
              hideDelay: 50,
              transitionDuration:0,
              backgroundColor : 'rgba(0,0,0,0.9)',
            //   borderColor : 'rgba(47,69,84,1)',
              borderRadius : 8,
              borderWidth: 2,
              padding: 4,   
          },
          xAxis: {
              data: xAxisData,
              show:true,
              // name: 'X Axis',
              silent: false,
              splitLine:{
                show:false,
                lineStyle:{
                    color:'rgba(255,255,255,0.3)',
                    width:10,
                }
            } ,
       
     
              splitArea: { show: false }
          },
          yAxis: {
            show:false,
              // inverse: true,
              splitArea: { show: false },
              splitLine: {
                show:true,
                //  改变轴线颜色
                lineStyle: {
                    width:.3,
                    // 使用深浅的间隔色
                    color: ["rgba(255,255,255,.3)"]
                }                            
        },
          
          },
          grid: {
              left: -30,
              right: 0,
              top: 0,
              bottom: 0,
              containLabel: true
          },
          // visualMap: {
          //     type: 'continuous',
          //     dimension: 1,
          //     text: ['High', 'Low'],
          //     inverse: true,
          //     itemHeight: 200,
          //     calculable: true,
          //     min: -2,
          //     max: 6,
          //     top: 60,
          //     left: 10,
          //     inRange: {
          //         colorLightness: [0.4, 0.8]
          //     },
          //     outOfRange: {
          //         color: '#bbb'
          //     },
          //     // controller: {
          //     //     inRange: {
          //     //         color: '#2f4554'
          //     //     }
          //     // }
          // },
  
  
          series: [
              {
                  name: '出库',
                  type: 'line',
                  symbol: "none",
             
                  smooth:true,
                  itemStyle: {

                  },
                  lineStyle:{
                      width:2,
                      shadowColor:"rgba(0,0,0,0.3)",
                      shadowBlur:30,
                      shadowOffsetY:4,
                      color:lineColor+",1)"
                    
                  },
         
                  areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: lineColor+",.4)"},
                                {offset: 0.5, color: lineColor+",.1)"},
                                {offset: 1, color: lineColor+",0)"}
                            ]
                    )
                }},
                  data: data1
              },
     
  
          ]
      };
      var shouruChart = echarts.init(ele.get(0), 'steven.fu');
      shouruChart.setOption(option);
      // myChart.on('brushSelected', renderBrushed);
  
      // function renderBrushed(params) {
      //     var brushed = [];
      //     var brushComponent = params.batch[0];
  
      //     for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
      //         var rawIndices = brushComponent.selected[sIdx].dataIndex;
      //         brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
      //     }
  
      //     myChart.setOption({
      //         title: {
      //             backgroundColor: '#333',
      //             text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
      //             bottom: 0,
      //             right: 0,
      //             width: 100,
      //             textStyle: {
      //                 fontSize: 12,
      //                 color: '#fff'
      //             }
      //         }
      //     });
      // }
    
}
};