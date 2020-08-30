// Write JavaScript here 
$(function () { //jQuery
  let fbutton = ftoggle(false);
  let stime = {
    start_time:"",
    end_time:"",
    func:{}
  };
  $.datetimepicker.setLocale('ja');     //datetimepickerでローケールを指定
  // moment.jsを使うための設定 ↓ここから
  //　参考URL https://xdsoft.net/jqplugins/datetimepicker/
  $.datetimepicker.setDateFormatter('moment');
  $.datetimepicker.setDateFormatter({
    parseDate: function (date, format) {
        var d = moment(date, format);
        return d.isValid() ? d.toDate() : false;
    },
    
    formatDate: function (date, format) {
        return moment(date).format(format);
    },

    //Optional if using mask input
    formatMask: function(format){
        return format
            .replace(/Y{4}/g, '9999')
            .replace(/Y{2}/g, '99')
            .replace(/M{2}/g, '19')
            .replace(/D{2}/g, '39')
            .replace(/H{2}/g, '29')
            .replace(/m{2}/g, '59')
            .replace(/s{2}/g, '59');
    }
  });
  // moment.jsを使うための設定 ここまで
  
  $('#wkDateTime').datetimepicker({
    
//    format:'DD.MM.YYYY h:mm a',
//    formatTime:'h:mm a',
//    formatDate:'DD.MM.YYYY', 
        
//    format:'YYYY-MM-DDThh:mm',
//    format:'',
    format:'YYYY/MM/DD hh:mm',
    onChangeDateTime:function(dp,$input){
      //alert($input.val())
      console.log($input.val());
//      $('#box1').text($input.val());
      stime.start_time = $input.val();
    }
  });
  var status_start_button = 0;
  stime.func = ftoggle(false); $('#button1').on('click',stime,func1);
//  $("#wkDateTime").datetimepicker(options);

});

function func1(e){
  let status;
  console.log("aaa");
  console.log("%O",e);
  status = e.data.func();
  console.log("Status:"+status);
  if(status){
    console.log("クリア");
    $('#button1').val('クリア');
    let iso = new Date($('#wkDateTime').val());
    
    $('#box1').text(iso.toDateString());
    
    console.log("*Time Description");
    console.log("(1) %s",iso);
    console.log("(2) %s",new Date(iso));
    console.log("(3) %s",new Date('2012-12-24T08:30+09:00'));
    
  }else{
    console.log("決定")
    $('#button1').val('決定');
    $('#box1').text('---');
  }
}

/*************************
クロージャと利用したトグル
*************************/
function ftoggle(init){
  let status = init;
  return function(){
//    console.log(status+"->")
    status = !status;
//    console.log("->"+status);
    return status;
  }  
}




