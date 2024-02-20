function openModal(title, description, imagePath, githubLink) {
    var modal = document.getElementById('myModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalDescription = document.getElementById('modalDescription');
    var modalImage = document.getElementById('modalImage');
    var githubLinkElement = document.getElementById('githubLink');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imagePath;
    githubLinkElement.href = githubLink;

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}