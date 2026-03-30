// AboutMe로 스크롤 이동
const scrollToAboutmeBtn = document.getElementById('scrollToAboutmeBtn');
const aboutmeSection = document.getElementById('aboutme');

if (scrollToAboutmeBtn && aboutmeSection) {
    scrollToAboutmeBtn.addEventListener('click', function () {
        aboutmeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// 메뉴 클릭 시 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});