function myMove() {
    var link = document.getElementById("link"); 
    link.style.color = '#A69B63';
    var elem = document.getElementById("myAnimation");  
     elem.style.display = 'block';
    var pos = 0;
    // speed 
    var id = setInterval(frame, 9);
    function frame() {
      if (pos == 660) {
        clearInterval(id);
        elem.style.display = 'none';
        // elem.style.display = 'none';
      } else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }
  }