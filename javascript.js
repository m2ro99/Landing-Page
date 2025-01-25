const burgerBtn = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

burgerBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
});

document.body.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickInsideBurger = burgerBtn.contains(event.target);

    // If the click is outside both the sidebar and the burger button, close the sidebar
    if (!isClickInsideSidebar && !isClickInsideBurger) {
        sidebar.classList.add('translate-x-full');
    }
});