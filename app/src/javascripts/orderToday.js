var $ = require('jquery');
// module.exports = {
//   init: function(ele, completeData, planData) {
//    var option = {
//       tooltip: {
//         formatter: '{a} <br/>{b} : {c}%',
//       },
//       backgroundColor: 'rgba(255,255,255,0)',
//     //   toolbox: {
//     //     feature: {
//     //       restore: {},
//     //       saveAsImage: {},
//     //     },
//     //   },
//       series: [
//         {
//           name: '业务指标',
//           type: 'gauge',
//           detail: { formatter: '{value}%' },
//           axisLine:{show:false},
//           splitLine:{show:false},
//           data: [{ value: completeData, name: '已完成' ,color:'red'}, { value: planData, name: '计划完成' }],
//         },
//       ],
//     };
//     var dashboardChart = echarts.init(ele.get(0), 'steven.fu');

//     // option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//     dashboardChart.setOption(option);
//     // var shouruChart = echarts.init(ele.get(0), "steven.fu");
//     // shouruChart.setOption(option);
//   },
// };
module.exports={
    init:function(ele,completeData,planData){
        var asd =ele.get(0);
        var pieChart = echarts.init(asd);
        var labelTop = {//上层样式
            normal : {
                color :'#49D991',
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom',
                        fontSize:12,
                     
                     
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };

        var labelTitle = {
            normal : {
                color :'#fff',
                text:percent,
                label : {
                    show : false,
                    position : 'center',
                    formatter : '{c}',
                    textStyle: {
                        // baseline : 'bottom',
                        fontSize:12,
                        color:'#fff'
                    }
                },
                // labelLine : {
                //     show : false
                // }
            }
        }
        var percent = completeData/planData*100+"%"

        var labelBottom = {//底层样式
            normal : {
                color: '#4C84FF',
                label : {
                    show : true,
                    position : 'center',
                    fontSize:12
                },
                labelLine : {
                    show : false
                }
            },
            // emphasis: {//悬浮式样式
            //     color: 'rgba( 0,0,0,0)'
            // }
        };
        // var radius = [80,122];// 半径[内半径，外半径]

        var pieChartOption = {
            title : {
                text: '今日订单',
                left: 12,
                // subtext: '纯属虚构'
                textStyle:{color:"#fff",fontSize:24,   fontWeight:'normal'}
            },
            // legend: {
            //     orient: 'vertical',
            //     x: 'left',
            //     data:['计划完成','已完成',]
            // },
            animation:false,
  
            series : [
                { 
                    type : 'pie',
                    center : ['50%', '55%'],//圆心坐标（div中的%比例）
                    radius : ['45%', '70%'],//半径
 
                    x: '0%', // for funnel
                    itemStyle : labelTitle,//graphStyleA,//图形样式 // 当查到的数据不存在（并非为0），此属性隐藏
                    data : [
                        {name:'计划完成', value:completeData,itemStyle : labelTop},
                        {name:percent, value:planData - completeData, itemStyle : labelBottom}
                    ]
                }
            ]
        };
        pieChart.setOption(pieChartOption);


    }
}