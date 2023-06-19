const refreshLink = document.getElementById('dashboardTitle');

refreshLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  location.reload(); // Refresh the page
});
