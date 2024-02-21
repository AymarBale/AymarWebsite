function openModal(title, description, imagePath, githubLink,langue) {
    var modal = document.getElementById('myModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalDescription = document.getElementById('modalDescription');
    var modalImage = document.getElementById('modalImage');
    var githubLinkElement = document.getElementById('githubLink');
    var language = document.getElementById('language');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imagePath;
    githubLinkElement.href = githubLink;
    language.textContent = langue
    modal.classList.add('show'); // Add the 'show' class to trigger the transition
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.classList.remove('show'); // Remove the 'show' class to trigger the transition
}

