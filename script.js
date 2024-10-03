 // Initialize EmailJS with your user ID
 (function(){
    emailjs.init("6EVU-O4e3XFsZOvCU");
})();



// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_91arug3', 'template_4rg8cvz', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
    });