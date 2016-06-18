var myQuotes = ['You sit there and you thump your Bible, and you say your prayers, and it didn\'t get you anywhere! Talk about your psalms, talk about John 3:16... Austin 3:16 says I just whooped your ass! --Stone Cold Steve Austin','I\'m a limousine-riding, jet-flying, kiss-stealing, wheeling-dealing son of a gun, who\'s kissed all the girls and made them cry. --Ric Flair','Just when you think you know the answers, I change the questions. --Roddy Piper','This is the beginning of a brand new era in the WWE. The era of Wade Barrett. A few weeks ago, I told the world that the \'winds of change\' were blowing here in the WWE. Well today, those winds stop blowing cause change is here, change is now, and it is a change that is going to take Wade Barrett to the WWE heavyweight title --Wade Barrett','Genital warts rule! --Edge & Christian','"If you put a s infront of hitman, you have my exact thoughts on Bret Hart" --Stone Cold Steve Austin','"To be the man, you gotta beat the man." --Ric Flair','“I will give you a show that you\'ve never ever seen before, why?…Because I can" -- Shawn Michaels','"Cut the music... What I\'d like to have right now, is for all you fat, out of shape, Summerslam sweathogs to keep the noise down while I take my robe off, and show the ladies what a real sexy man looks like" --Rick Rude','"Now..onto "Bad Ass" Billy Gunn, The Rock Understands what took place the night you won King Of The Ring. You got down on your knees put your hands together and you said a prayer and it sounded like this "Oh dear God y\'see my names Billy, and I just won King Of The Ring, but theres one problem, everybody still thinks I ABSOLUTELY SUCK!" -- The Rock','"Your Olympic Hero is scheduled to wrestle in a match against the man they call the \Big Red Retard\. And not that I have anything against retarded people, because I don\'t. As a matter of fact, I have a lot of retarded fans out there that admire and respect your Olympic Champion." --Kurt Angle','"Now, Bad Ass, you run your mouth about SummerSlam. Well, here\'s the situation. The Rock says this: if The Rock hits you he\'ll kill you. If he misses, the wind behind the punch will give you pneumonia and you\'ll die anyway, so the choice is yours, jabroni. -- The Rock','"The only reason you were WWE Champion for almost a year was because Triple H didn\'t want to work Tuesdays."-- Paul Heyman','"Because it ain\'t a white thing, it ain\'t a black thing, it\'s just A ME KICKING YOUR ASS THING!!!"--Stone Cold Steve Austin','"Rest in peace" -– Undertaker','"Have a nice day" –-Mick Foley','"I don\'t drink. I don\'t smoke. I don\'t do drugs. My addiction is wrestling." --CM Punk','"Showing off is what you do when your are simply better than everybody else." --Dolph Ziggler','"I\'m here to kick ass and chew bubblegum... And I\'m all out of bubblegum."--Roddy Piper','"What you\'ve lost sight of is what you are, and what you are is what you hate. You\'re the 10-time WWE Champion! You\'re the man! You, like the Red Sox, like Boston, are no longer the underdog! You\'re a dynasty. You are what you hate. You have become the New York Yankees!" --CM Punk','"I have wined and dined with kings and queens, and I\'ve slept in alleys and ate pork and beans!" --"The American Dream" Dusty Rhodes','"If I hit him with my left hand, and he does not fallover. I will walk around him to see what is holding him up"--Harley Race','"I\'d rather hurt a man than love a woman."--Cactus Jack','"Hard work pays off, dreams come true. Bad times don\'t last, but bad guys do."--Scott Hall','"I am the best in the world at what I do." --Chris Jericho','"Blood, sweat and respect. The first two you give, the last you earn." --The Rock','"You hate me? You\'re a grown man wearing a DX shirt! You should hate yourself!" --Kevin Steen'];

var colors = ['red','orange','yellow','green','blue', 'indigo', 'violet'];

var fonts = ["'Oswald', sans-serif", "'Lora', serif", "'Roboto', sans-serif"];

    function tweetIt () {
      var phrase = document.getElementById('quote-text').innerText;
      var tweetUrl = 'https://twitter.com/share?text=' +
        encodeURIComponent(phrase) +
        '.' +
        '&url=' +
        'http://rawlejuglal.me/';
        
      window.open(tweetUrl);
    }
    
$(document).ready(function () {
    
    $( "#getQuote" ).click(function() {
      var myColor = colors[Math.floor(Math.random()*7)]; 
      var quote = myQuotes[Math.floor(Math.random()*27)];
      var font = fonts[Math.floor(Math.random()*3)];
      $('#quoteBox').html("<p id='quote-text'>"+quote+"</p>");
      $('#quote-text').css("color", myColor).css("font-family", font);
      $( "#quoteBox" ).effect( "shake" );
    }); 
    
});

