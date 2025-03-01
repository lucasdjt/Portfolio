// Script pour afficher les onglets de projets
function showProjectTab(tabId) {
    let projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        let badges = project.querySelectorAll('.badge');
        let hasBadge = Array.from(badges).some(function(badge) {
            return badge.classList.contains('badge-' + tabId.replace(' ', '-'));
        });
        if (tabId === 'tous' || hasBadge) {
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

const titleProjetLoisir = document.querySelectorAll('.titleDonnee');
titleProjetLoisir.forEach(title => {
    title.addEventListener("click", function(event) {
        event.preventDefault();
        let parentDiv = title.closest('.project, .loisir');
        let images = parentDiv.querySelectorAll('.imgproject');
        let tooltip = parentDiv.querySelector('.tooltip');
        if (tooltip) {
            images.forEach(image => image.style.display = 'none');
            tooltip.style.display = 'block';
            title.style.display = 'none';
        }
    });
});

const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tooltip => {
    tooltip.addEventListener("click", function() {
        let parentDiv = tooltip.closest('.project, .loisir');
        let images = parentDiv.querySelectorAll('.imgproject');
        let title = parentDiv.querySelector('.titleDonnee');
        images.forEach(image => image.style.display = 'block');
        tooltip.style.display = 'none';
        if (title) {
            title.style.display = 'block';
        }
    });
});
