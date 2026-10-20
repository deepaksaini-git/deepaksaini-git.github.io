document.addEventListener("DOMContentLoaded", function() {
    // Header file ko fetch karke placeholder mein dalna
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Footer file ko fetch karke placeholder mein dalna
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
