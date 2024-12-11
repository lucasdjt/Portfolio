// Script pour afficher les onglets de projets
function showProjectTab(tabId) {
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
document.addEventListener('DOMContentLoaded', function() {
    showProjectTab('tous');
});

// Script pour afficher les onglets des compétences
function showSkillTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

// Script pour afficher et masquer les infos des compétences
function showInfo(id) {
    document.getElementById(id).style.display = 'block';
}

function hideInfo(id) {
    document.getElementById(id).style.display = 'none';
}