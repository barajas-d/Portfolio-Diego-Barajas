/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY <= 100) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function copyEmailToClipboard(){
    let email = 'diegobarajas102030@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        // Notify the user that the text has been copied
        var toastEmailEl = document.getElementById('emailToast');
        var toastEmail = new bootstrap.Toast(toastEmailEl);

        toastEmail.show();
        updateToastEmail(5);

    })
    .catch(function(err) {
        // Handle any errors that may occur
        console.error('Could not copy email: ', err);
    });;
}


function updateToastEmail(counter){
    // Get the label element
    if (counter != 0){
        var label = document.getElementById('counterToast');
        // Update the label text with the current time
        label.textContent = counter;
        console.log("counter : " + counter);
        counter = counter -1;
        // Call updateLabel function every second (1000 milliseconds)
        waitForOneSecond().then(() => {
            updateToastEmail(counter)
        })
    }
}

async function waitForOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1000 milliseconds
}


function downloadCV(){
    var pdfUrl = './resources/CV_DiegoBarajas.pdf';

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = "_blank" //open in new tab

    // Append the link to the document body and click it
    document.body.appendChild(link);
    link.click();

    // Remove the temporary link
    document.body.removeChild(link);
}
