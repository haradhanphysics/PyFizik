document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    mermaid.initialize({
        startOnLoad: true
    });

    // Initialize Bootstrap dropdowns
    var dropdownElements = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElements.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });
});

$(document).ready(function() {
    $('.dropdown-toggle').dropdown();
    $('.dropdown-submenu a').on("click", function(e) {
        var submenu = $(this).next('ul');
        $('.dropdown-menu').not(submenu).removeClass('show');
        submenu.toggleClass('show');
        e.stopPropagation();
        e.preventDefault();
    });

    // Ensure dropdowns are shown on hover
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
    });
});