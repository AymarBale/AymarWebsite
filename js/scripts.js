document.getElementById('sendEmailButton').addEventListener('click', () => {
    const to = prompt('Enter recipient email:');
    const subject = prompt('Enter email subject:');
    const text = prompt('Enter email body:');

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `to=${to}&subject=${subject}&text=${text}`
    })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
});