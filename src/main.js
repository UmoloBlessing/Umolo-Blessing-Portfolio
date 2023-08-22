const welcome = alert ('Welcome to Umolo Blessing Johnson Postfolio. Feel Fre to check and contact him. Thank you!!!!!.')

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a'); 
    const loadingContainer = document.getElementById('loadingContainer');
    
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); 
        showLoadingAnimation();

        const href = link.getAttribute('href'); 

        setTimeout(function () {
          window.location.href = href;
        }, 1000); 
      });
    });

    function showLoadingAnimation() {
      loadingContainer.style.display = 'flex';
    }
  });


 