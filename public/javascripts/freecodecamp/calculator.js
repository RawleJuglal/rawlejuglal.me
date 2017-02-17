var oper1='', oper2='', num1='', num2='';

function doAddition(currentTotal, num){
 // console.log("This is current total: " + currentTotal + " and this is it's type:" + typeof currentTotal);
  currentTotal = Number(currentTotal);
  num = Number(num);
  //console.log("After number,This is current total: " + currentTotal + " and this is it's type:" + typeof currentTotal);
  return (currentTotal+num).toString();
}

function doSubtraction(currentTotal, num){
  currentTotal = Number(currentTotal);
  num = Number(num);
  return (currentTotal-num).toString();
}

function doMultiplication(currentTotal, num){
  currentTotal = Number(currentTotal);
  num = Number(num);
  return (currentTotal*num).toString();
}

function doDivision(currentTotal, num){
  currentTotal = Number(currentTotal);
  num = Number(num);
  return (currentTotal/num).toString();
}

function clearMemory(){
  oper1='', oper2='', num1='', num2='';
}

function clearScreen(){
  if(oper1 == null)
        {
          num1 = '';
        }
      else
        {
          num2 = '';          
        }
}

function doPercentage(currentTotal, num){
  currentTotal = Number(currentTotal);
  num = Number(num);
  return currentTotal*(num/100).toString();
}

function getId(){
  var $buttonID = (event.target.innerHTML);
  if($buttonID == "AC")
    {
      clearMemory();
      updateDisplay('0');
    }
  else if($buttonID == "CE")
    {
      clearScreen();
      updateDisplay('0');
    }
  else
    {
      updateMath($buttonID);
    } 
}

function updateMath(ckey){
   if(ckey == "=")
     {
       if(oper1 != '')
         {
           whichExpression(oper1);
           oper1 = '';
           num2 = '';
           updateDisplay(num1);
         }
     }
   else if(ckey == "+" || ckey == "-" || ckey == "X" || ckey == "/")
    {
      if(oper1 == '')
        {
          $('.panel-body p').remove();
          updateDisplay(ckey);  
          oper1 = ckey
        }
      else
        {
          $('.panel-body p').remove(); 
          oper2 = ckey;
          whichExpression(oper1);
          num2 = '';
          updateDisplay(num1);
          oper1 = oper2;
          oper2 = '';
        }
  }
  else
    {
      if(ckey == '%' && num1 != '')
        {
          num2 = doPercentage(num1, num2);
          updateDisplay(num2);
        }
      else
        {
          if(oper1 == ''){
            $('.panel-body p').remove();
            num1 = num1.concat(ckey);
            updateDisplay(num1);
          }
          else
            {
              $('.panel-body p').remove();
              num2 = num2.concat(ckey);
              updateDisplay(num2);
            }
        }
    }
}

function whichExpression(op){
   switch (op) {
            case "+":
              num1 = doAddition(num1, num2);
              break;
            case "-":
              num1 = doSubtraction(num1, num2);
              break;
            case "X":
              num1 = doMultiplication(num1, num2);
              break;
              case "/":
              num1 =  doDivision(num1, num2);
              break;
            default:
             alert("An error has occured, please try again after clearing with AC")
              break;
          }
}

function updateDisplay(item){
  $('.panel-body').html('<p class="pull-right">' + item + '</p>');
}

$( "button" ).click(function() {
     $( this ).removeClass('button[focus]');
  getId();
});