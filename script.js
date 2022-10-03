var initial_price=document.querySelector('#initalPrice');
var stock_quantity= document.querySelector('#stocks_quantity');
var current_price= document.querySelector('#current_price');

var submit_button=document.querySelector('#submit_btn');
var output= document.querySelector('#output_box');


function CalculateProfitandLoss(initial,quantity,current){
  if(initial>current)
  {
    var loss=(initial-current)*quantity;
    var LossPrecentage=(loss/quantity)*100;

    console.log("Loss Percentage is "+LossPrecentage);

  }else if(current>initial){
    var profit=(current-initial)*quantity;
    var ProfitPrecentage=(profit/quantity)*100;

    console.log("Profit Percentage is "+ProfitPrecentage);

  }else{
    console.log("No gain,No pain and no pain no gain");
  }

}

function SubmitHandler(){
  var ip=Number(initial_price.value);
  var  qty=Number(stock_quantity.value);
  var cp=Number(current_price.value);

CalculateProfitandLoss(ip,qty,cp);
}
submit_button.addEventListener("click",SubmitHandler);
