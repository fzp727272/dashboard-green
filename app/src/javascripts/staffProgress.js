var $ = require('jquery');

module.exports = {
  insert: function(ele, item) {
    var html =
      '<div  class="table-list' +
      ' ' +
      item.status +
      '">\
<div class="column">' +
      item.name +
      '</div>\
<div class="column">' +
      item.group +
      '</div>\
<div class="column">' +
      item.solving +
      '</div>\
<div class="column">' +
      item.unwork +
      '</div>\
<div class="column tag">' +
      item.complete +
      '</div>\
</div>';
    ele.prepend(html);
    // clearTimeout(time)
  },
  init: function(ele, data) {
    var $this = this;
      var length = data.length ;
      var begin = 0
function render (){
    if(begin <length){
        $this.insert(ele, data[begin]);
    begin++
    setTimeout(render,1000)
    }else{
        return
    }
    
}
render()


    // data.map((item,key) => {
    
    //   var $this = this;
    //  setTimeout(function() {
    //     console.log(key);
    //     $this.insert(ele, item);
    //   }),
    //  1000*key
    // });
  },
};
