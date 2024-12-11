
// script.js

function showTab(tabId) {
    var projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        if (tabId === 'tous' || project.classList.contains(tabId)) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
}

// Par défaut, afficher tous les projets
showTab('tous');

    function showInfo(id) {
        document.getElementById(id).style.display = 'block';
    }

    function hideInfo(id) {
        document.getElementById(id).style.display = 'none';
    }

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var formData = new FormData(this);
    
        fetch('send_mail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Message envoyé avec succès');
        })
        .catch(error => {
            alert('Erreur lors de l\'envoi du message');
            console.error('Error:', error);
        });
    });
    