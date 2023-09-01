//任意の整数
let num = 30;

//変数numが3と5の倍数の時の出力
if(num%15===0){
 console.log('3と5の倍数です');
//変数numが5の倍数の時の出力
}else if(num%5===0){
  console.log('5の倍数です');
//変数numが3の倍数の時の出力
}
else if(num%3===0){
  console.log('3の倍数です');
}
else console.log(num)
