const welcome = alert ('Welcome to Umolo Blessing Johnson Postfolio. Feel Fre to check and contact him. Thank you!!!!!.')

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a'); 
    const loadingContainer = document.getElementById('loadingContainer');
    
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showLoadingAnimation();

        const href = link.getAttribute('href'); // Get the href attribute of the clicked link

        // Simulate a delay before navigating to the clicked link
        setTimeout(function () {
          window.location.href = href;
        }, 1000); // Adjust the delay time as needed
      });
    });

    function showLoadingAnimation() {
      loadingContainer.style.display = 'flex';
    }
  });


 