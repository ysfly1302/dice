
    // JSを読み込むタイミングを指定
document.addEventListener("DOMContentLoaded",function () { //スクリプトを記述
    // ノード取得
const dice1 = document.getElementById('dice')
    //サイの目を取得
    function number(){
      const number = Math.floor(Math.random()*6)+1;
            dice1.innerHTML = number;
           }
    //クリックイベント
    dice1.addEventListener("click", number, false);
  });

document.addEventListener("DOMContentLoaded",function(){
  const saikoro1 = document.getElementById('saikoro')
  const images =['diceimg/1.jpg','diceimg/2.jpg','diceimg/3.jpg','diceimg/4.jpg','diceimg/5.jpg','diceimg/6.jpg'];

  function image(){
    const imageNo = Math.floor( Math.random() * images.length)
    saikoro1.src = images[imageNo];
  }

saikoro1.addEventListener("click",image,false);
});
