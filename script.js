window.addEventListener('scroll', function() {
    const flowers = document.querySelectorAll('.flower-img'); // Select all .flower-img elements
    const scrollPosition = window.scrollY;

    flowers.forEach(flower => {
        flower.style.transform = `rotate(${scrollPosition}deg)`;
    });
});