$(function(){
  $('#id_1').on('mousedown',bt1_down);
  $('#id_1').on('mouseup',function(){
    console.log('up');
  });
  
});

//　仮引数eが無くても　argumentsを調べれると引数の数がわかる 
function bt1_down(e){
  console.log('down');
  console.log('arguments %O', arguments); //引数を調べる argumentsオブジェクト
  console.log('%d',arguments.length);
  console.log('%O',arguments[0]);
}