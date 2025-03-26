document.addEventListener('DOMContentLoaded', function() {
    // Încarcă header-ul
    fetch('../HTML/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Încarcă footer-ul
    fetch('../HTML/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

});