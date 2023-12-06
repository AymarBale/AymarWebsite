let contactBut ;let contectSection;
document.addEventListener('DOMContentLoaded', function() {
    contactBut = document.getElementById('contactMeBut');
    contectSection = document.getElementById('nav-8');
    contactBut.addEventListener('click', function() {
        // Scroll to the specific section (section2 in this case)
        contectSection.scrollIntoView({ behavior: 'smooth' });
    });
});

