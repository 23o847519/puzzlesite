document.addEventListener("DOMContentLoaded", function() {
    var lines = [
      "Admirable, mortal. You have proven yourself worthy of traversing the treacherous labyrinth of reasoning that lies ahead. But be warned, what awaits you is a reward shrouded in darkness, a prize coveted by many, but grasped by few.",
      "Be mindful, for our twisted machinations are not easily unraveled.",
      "Proceed with caution, for in our realm, logic is the key, and failure is met with unspeakable consequences."
    ];
  
    var lineNum = 0;
    var linePos = 0;
    var interval = setInterval(writeLine, 1);
  
    function writeLine() {
      if (lineNum < lines.length) {
        var lineId = "line" + (lineNum + 1);
        var lineElem = document.getElementById(lineId);
        lineElem.innerHTML += lines[lineNum][linePos];
        linePos++;
        if (linePos >= lines[lineNum].length) {
          lineNum++;
          linePos = 0;
        }
      } else {
        clearInterval(interval);
        var puzzleBtn = document.getElementById("puzzle-btn");
        if (puzzleBtn) {
          puzzleBtn.style.display = "block";
          puzzleBtn.addEventListener("click", function() {
            window.location.href = "puzzle.html";
          });
        } else {
          console.error("Element with ID 'puzzle-btn' not found.");
        }
      }
    }
  });
  