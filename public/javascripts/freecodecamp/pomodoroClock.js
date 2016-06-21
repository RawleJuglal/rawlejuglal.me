$(document).ready(function(){
    var intervalid,howManyBreak =0,initialize = 0;
    
   function checkWidth() {
       var windowsize = $(window).width();
        if (windowsize >= 768) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            $( "#timerBox" ).css({'border-radius':'50%','border': '2px solid white','height':'250px'});
            $('#countdownClock').css('margin-top','8%');
        }
        else
            {
                $('#timerBox').css({'border-radius':0,'border':'none','height':'auto'});
                $('#countdownClock').css('margin-top','0px');
            }
    }
   
   function getId(){
       var $buttonID = $(event.target.id).selector;
       var $windowsize = $(window).width();
       var $currentPeriod = $('#currentPeriod').text();

       if($buttonID == "startButton")
        {
           if(initialize == 0)
            {
              var intialTime = Number($('#sesStartTime').text());
              updateCountdown(intialTime, 0);
              initialize = 1;
              $('#startButton').attr("id", "stopButton").text("Stop");
              if(($currentPeriod == 'Session')&&($windowsize>=768))
                {
                    $('.timerDiv').css('background-color', 'black');
                    $('#timerBox').css('border','2px solid green');
                }
              else
                {
                    $('.timerDiv').css('background-color','green');
                    $('#timerBox').css('border','0');
                }
              intervalid = startTimer();
            }
            else
            {
              var $mLeft =Number($('#countdownClock span:first-child').text());
              var $sLeft = Number($('#countdownClock span:nth-child(2)').text());
              if(($currentPeriod == 'Session')&&($windowsize>=768))
                {
                    $('.timerDiv').css('background-color', 'black');
                    $('#timerBox').css('border','2px solid green');
                }
              else
                {
                    $('.timerDiv').css('background-color','green');
                    $('#timerBox').css('border','0');
                }
              if($mLeft == 0 && $sLeft ==0)
                {
                  var currentSession = Number($('#sesStartTime').text());
                  updateCountdown(currentSession, 0);
                  $('#startButton').attr("id", "stopButton").text("Stop");
                  intervalid = startTimer();
                }
              else
                {
                  $('#startButton').attr("id", "stopButton").text("Stop");
                  intervalid = startTimer();  
                }
            }
        }
       else if($buttonID == "resetButton")
        {
          stopTimer(intervalid);
          var prevTime = Number($('#sesStartTime').text());
           $('#stopButton').attr("id", "startButton").text("Start");
           $('#currentPeriod').text("Session");
          updateCountdown(prevTime, 0);
          if($windowsize>=768)
                {
                    $('.timerDiv').css('background-color', 'black');
                    $('#timerBox').css('border','2px solid white');
                }
          else
                {
                    $('.timerDiv').css('background-color','black');
                    $('#timerBox').css('border','0');
                }
          howManyBreak = 0;
        }
       else if($buttonID == "stopButton")
        {
          $('#stopButton').attr("id", "startButton").text("Start");
          stopTimer(intervalid);
        }
       else
        {
          console.log("Entered else statement for gatherTimeInfo");
          gatherTimeInfo($buttonID);
        }
   }
   
   function updateCountdown(minTime,secTime){
      if(minTime<=9)
        {
          $('#countdownClock span:first-child').text("0"+minTime);
        }
      else
        {
          $('#countdownClock span:first-child').text(minTime);
        }
      
      if(secTime<=9)
        {
          $('#countdownClock span:nth-child(2)').text("0"+secTime);
        }
      else
        {
          $('#countdownClock span:nth-child(2)').text(secTime);
        }
    }
    
   function lowerTime(currentTime, currentBox){
      console.log("Entered the lowerTime function: currentTime is " +currentTime + "currentBox is " + currentBox);
       if(currentTime > 1)
            {
              currentTime--;
              $(currentBox).text(currentTime.toString());
              return currentTime;
            }
          else
            {
              console.log("Entered else statement for alert");
              alert("Cannot set time for less than a minute");
            }
    }

   function addTime(currentTime, currentBox){
       if(currentTime <= 59)
            {
              currentTime++;
              $(currentBox).text(currentTime.toString());
              return currentTime;
            }
          else
            {
              alert("This timer is only available for up to 60 minutes, sorry for the inconvenience");
            }
    }
    
   function gatherTimeInfo(btnID){
      console.log("This is btnID" + btnID)
      var $startTime, $timeBox;
      switch(btnID){
        case "brkMinus":
          $startTime = Number($('#brkStartTime').text());
          $timeBox = $('#brkStartTime');
          lowerTime($startTime, $timeBox); 
          break;
        case "sesMinus":
          $startTime = Number($('#sesStartTime').text());
          $timeBox = $('#sesStartTime');
          $startTime = lowerTime($startTime, $timeBox);
          updateCountdown($startTime,0);
          break;
        case "brkPlus":
          $startTime = Number($('#brkStartTime').text());
          $timeBox = $('#brkStartTime');
          addTime($startTime, $timeBox);
          break;
        case "sesPlus":
          $startTime = Number($('#sesStartTime').text());
          $timeBox = $('#sesStartTime');
          $startTime = addTime($startTime, $timeBox);
          updateCountdown($startTime,0);
          break;
        default:
          alert("An error occured with your selection: "+btnID+" ,please select again or if problem persist contact provider.")
      }
    }
    
   function startTimer(){
      return setInterval(checkFinish,1000);
    }

   function stopTimer(timer){
      clearInterval(timer);  
    }
    
   function checkFinish (){
      var $minLeft = Number($('#countdownClock span:first-child').text())
      var $secLeft = Number($('#countdownClock span:nth-child(2)').text());
      
      if($minLeft ==0 && $secLeft == 0)
        {
          stopTimer(intervalid);
          var $currentPeriod = $('#currentPeriod').text();
          if($currentPeriod == "Session")
            {
              console.log("Entered the $currentPeriod");
              $('#embedBox').html("<iframe id=\"youtubeBox\" style=\"display:none;\" width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/HidqsmMtx_I?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>");
              var intervalRemove = setTimeout(removeAudio, 4000);
            }
          if(howManyBreak == 0)
            {
              moveToBreak();
              howManyBreak = 1;
            }   
        }
      else
        {
          if($secLeft == 0 && $minLeft >=1)
            {
              console.log("Still more than a minute to go");
              $minLeft--;
              $secLeft = 59
              updateCountdown($minLeft, $secLeft);
            }
          else if($secLeft > 0 && $minLeft >=1)
            {
              console.log("Still more than a minute to go");
              $secLeft--;
              updateCountdown($minLeft, $secLeft);
            }
          else
            {
              console.log("Less than a minute");
              $secLeft--;
              updateCountdown($minLeft, $secLeft);
            }
        }
    } 
    
    function moveToBreak(){
       var $windowsize = $(window).width();
       var $currentPeriod = $('#currentPeriod').text();
       if(($currentPeriod == 'Session')&&($windowsize>=768))
                {
                    $('.timerDiv').css('background-color', 'black');
                    $('#timerBox').css('border','2px solid red');
                }
              else
                {
                    $('.timerDiv').css('background-color','red');
                    $('#timerBox').css('border', '0');
                }  
      $('#currentPeriod').text("Break");
      var breakTime = Number($('#brkStartTime').text());
      updateCountdown(breakTime, 0);
      intervalid = startTimer();
    }
    
    function removeAudio(){
      $( "#youtubeBox" ).remove();
      console.log("It has been removed");
    }
   /*INTERFACE*/
    $( "button" ).click(function() {
      getId();
    });

   checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

 