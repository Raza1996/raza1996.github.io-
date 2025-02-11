
window.addEventListener('resize', function() {
  if (window.innerWidth >= 810) {
      window.location.href = 'index.html';
  }
  console.log("Hello ");
});


document.getElementById("index-about").addEventListener("click", function () {
  window.location = "index.html#about_content";
  
});

document.getElementById("index-projects").addEventListener("click", function () {
  window.location = "index.html#card-content";
  
});

