
document.addEventListener("DOMContentLoaded", () => {
    const wallpapers = document.querySelectorAll('.slide-in');
    wallpapers.forEach((wallpaper, index) => {
        setTimeout(() => {
            wallpaper.style.animationDelay = `${index * 0.5}s`;
            wallpaper.classList.add('visible');
        }, 100);
    });
});
