document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch('header.html')
        .then(r => r.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initNav();
        })
        .catch(err => console.warn('Header load failed:', err));

    // Load footer
    fetch('footer.html')
        .then(r => r.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.warn('Footer load failed:', err));
});

function initNav() {
    const btn = document.getElementById('hamburger-btn');
    const nav = document.getElementById('mainNav');
    const page = document.body.dataset.page;

    // Highlight active nav link
    if (page) {
        document.querySelectorAll('.nav-links a').forEach(a => {
            const href = a.getAttribute('href') || '';
            if (href.includes(page) || (page === 'index' && href === 'index.html')) {
                a.classList.add('active');
            }
        });
    }

    // Mobile menu toggle
    if (btn && nav) {
        const menuIcon = btn.innerHTML;
        const closeIcon = `<svg fill="none" height="26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="26"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>`;
        let open = false;
        btn.addEventListener('click', () => {
            open = !open;
            nav.classList.toggle('open', open);
            btn.innerHTML = open ? closeIcon : menuIcon;
        });
        // Close on link click
        nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            open = false;
            nav.classList.remove('open');
            btn.innerHTML = menuIcon;
        }));
    }
}