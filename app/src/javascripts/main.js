var $ = require('jquery');
// var circleProgress = require("circleProgress")

var tenDaysChart = require('./tenDaysChart');
var orderToday = require('./orderToday');
var inventory = require("./iventoryUtilization");
var pickValue = require("./pickValue");
var staff = require("./staffProgress");

//假数据
var colorList = [
    '#00c5d2',
    '#ef98d0',
    '#802bff',
    '#54c6af',
    '#edcd61',
    '#0081fa',
    '#73e3f8',
    '#ffd473',
    '#1c3a9f',
    '#421b9f',
    '#16889d',
  ];
  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  var data3 = [];

  for (var i = 0; i < 12; i++) {
    xAxisData.push(i + 1 + '月');
    data1.push((Math.random() * 3000).toFixed(2));
    data2.push((Math.random() * 2000).toFixed(2));
    data3.push((Math.random() * 1000).toFixed(2));
  }




//近十日进销监控
$(function() {


  tenDaysChart.init($('#tenDaysChart'), xAxisData, data1, data2, data3);
});

//今日订单
$(function() {
  orderToday.init($('#orderToday'), 3000, 4000);

  $('.list-plan').find("p").text(4000);//计划完成
  $('.list-complete').find("p").text(3000);//已完成
  $('#already-dispatch').text(100); //已调度
  $('#already-send').text(200); //已下发
  $('#already-pick').text(300); //已拣配
  $('#already-review').text(400); //已复核
});

//周转率
$(function(){
	$("#turn-over-ration-svg").find(".change-point").attr({
		offset:'60%'//图形百分比
	});
	$("#turnover-ration").find(".panel-title-value").text("60%")//百分比
})

//库存使用率
$(function(){
	inventory.init($("#inventory-utilization"),xAxisData,data1,"73,217,145");
})

//每小时拣配量
$(function() {
	pickValue.init($('#pick-value'), xAxisData, data1);
  });

  //员工拣配进度
  $(function(){
    var data =[
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'warning'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'warning'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'warning'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'warning'},
      {name:'员工A',group:'A1',solving:'100',unwork:'20',complete:'300',status:'normal'},
    ]
    staff.init($("#staff-progress").find('.tab-body'),data);
  })

  //装车进度
  $(function(){
    var data =[
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},
      {name:'川渝线',group:'100',solving:'100',unwork:'20',complete:'300',status:'normal'},

    ]
    staff.init($("#addToTransport").find('.tab-body'),data);
  })