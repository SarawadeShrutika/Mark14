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

    showOutput("Loss is "+loss+" And Loss Percentage is "+LossPrecentage.toFixed(2)+"%");

  }else if(current>initial){
    var profit=(current-initial)*quantity;
    var ProfitPrecentage=(profit/quantity)*100;

    showOutput("Profit is "+ profit +" And Profit Percentage is "+ProfitPrecentage.toFixed(2)+"%");

  }else{
  
    showOutput("No gain,No pain and no pain no gain");
  }

}

function SubmitHandler(){
  var ip=initial_price.value;
  var  qty=stock_quantity.value;
  var cp=current_price.value;
  if(ip=="" || qty=="" || cp=="")
  {
    alert("Please Enter Numbers");
  }else{
CalculateProfitandLoss(Number(ip),Number(qty),Number(cp));
  }
}

function showOutput(message){
  
    output.innerHTML = message;
}
submit_button.addEventListener("click",SubmitHandler);
