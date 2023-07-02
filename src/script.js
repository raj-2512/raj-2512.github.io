function fadeIn(element, callback) {
    if (element.style.opacity === '' || parseFloat(element.style.opacity) === 0) {
        element.style.opacity = 0;
        element.style.display = 'block';

        var opacity = 0;
        var interval = setInterval(function() {
            opacity += 0.1;
            element.style.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(interval);
                callback();
            }
        }, 30);
    }
}

function myFunction() {
    var sectionIds = ["about", "skills", "projects", "navbar"];
    var scrollToSkills = false;

    sectionIds.forEach(function(sectionId) {
        var section = document.getElementById(sectionId);
        fadeIn(section, function() {
            if (sectionId === "about" && !scrollToSkills) {
                section.scrollIntoView({ behavior: "smooth" });
                scrollToSkills = true;
            }
        });
    });
}

myFunction();

