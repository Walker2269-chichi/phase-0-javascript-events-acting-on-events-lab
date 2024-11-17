// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) { // Prevent escaping off the left edge
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const rightEdge = 400; // Assuming the game field width is 400px.
  
    if (left + 40 < rightEdge) { // Prevent escaping beyond 400px minus dodger width (40px)
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
