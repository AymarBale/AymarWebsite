let linkElement ;
let email = "aymarbale@gmail.com";
  let subject;
  let message = "This is the body of the email. Feel free to modify.";


function sendEmail(){
    linkElement = document.getElementById("sendEmail");
    subject = document.getElementById("subjectContact").value;
    message = "Hi my name is "+document.getElementById("contactName").value+",\n"+document.getElementById("subjectMessage").value;
    generateMailtoLink(email,subject,message)
    
}

function generateMailtoLink(email, subject, message) {
    // Validate email to avoid potential security risks
    if (!validateEmail(email)) {
      console.error("Invalid email address");
      return;
    }

    // Encode subject and message for proper URL formatting
    var encodedSubject = encodeURIComponent(subject);
    var encodedMessage = encodeURIComponent(message);

    // Construct the mailto link
    var mailtoLink = "mailto:" + email + "?subject=" + encodedSubject + "&body=" + encodedMessage;
    linkElement.href = mailtoLink;
    // Log the generated mailto link (you can modify this part based on your needs)
    

    // Alternatively, you can open the link in a new tab/window
     window.open(mailtoLink);
  }

  function validateEmail(email) {
    // Simple email validation, you can use a more robust validation method if needed
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Example usage
  

  