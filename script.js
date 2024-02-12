document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("reset").addEventListener("click", function() {
      var envelope = document.querySelector(".envelope");
      envelope.classList.remove("open");
      setTimeout(function() {
        envelope.classList.add("open");
      }, 500);
    });
  });
  