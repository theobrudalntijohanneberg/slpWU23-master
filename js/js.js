
  var x = document.getElementById("audio1"); 
  var y = document.getElementById("audio2"); 
  var z = document.getElementById("audio3"); 
  document.getElementById("picture1").addEventListener("click", playAudio1);
  document.getElementById("picture2").addEventListener("click", playAudio2);
  document.getElementById("picture3").addEventListener("click", playAudio3);

  function playAudio1() { 
    x.play(); 
  } 
  function playAudio2() { 
    y.play(); 
  } 
  function playAudio3() { 
    z.play(); 
  } 
  
  
 

  