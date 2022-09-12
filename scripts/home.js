// const btn = document.querySelector(".mobile-menu__btn");
// const header_current = document.querySelector(".header__li");
// const mobile_current = document.querySelector(".mobile-menu__item");

// btn.addEventListener("click", () => {
//     mobile_menu.classList.toggle('menu-open');
// });
// header_current.addEventListener("click", () => header_current.classList.toggle('current'));
// mobile_current.addEventListener("click", () => mobile_current.classList.toggle('current'));


titles = ['Akihabara','Asakusa','Ueno','Nakano', 'Shinjuku', 'Sugamo', 'Akabane', 'Akihabara', 'Ochanomizu', 'Sapporo', 'Tateishi', 'Nakano', 'Shinjuku', 'Otaru', 'Akihabara', 'Kitasenju', 'Sapporo', 'Asakusa', 'Shibuya', 'Shinjuku', 'Shibuya', 'Akihabara', 'Sapporo', 'Sapporo', 'Ootemachi', 'Tateishi', 'Koenji', 'Asakusa', 'Sapporo', 'Ootemachi', 'Kokudo', 'Yokohama', 'Shinjuku', 'Ootemachi', 'Shinbashi', 'Yokohama', 'Shinbashi', 'Ootemachi', 'Shinjuku', 'Shinbashi', 'Shinjuku', 'Yokohama', 'Ueno', 'Tateishi', 'Shinbashi', 'Nakano', 'Shinjuku', 'Shinbashi', 'Shinjuku', 'Asakusa', 'Koenji', 'Shinjuku', 'Shinjuku', 'Sapporo', 'Ootemachi', 'Yokohama', 'Yokohama', 'Uguisudani', 'Tateishi', 'Roppongi', 'Noge', 'Shinjuku', 'Shinjuku', 'Yokohama', 'Musashiseki', 'Sapporo', 'Akabane'];
window.addEventListener('load', function () {
    const images = document.querySelectorAll("img")
    const title = document.querySelector(".title");
    if (images.length=!titles.length){
        console.log('エラー');
    }
    console.log(images);
    let num = 0;
    console.log(images.length);
    console.log(titles.length);
    const element = document.querySelector(".img-display__show");
    element.addEventListener('animationiteration', slide_animate);
    title.innerHTML = titles[num];

    function slide_animate() {
        num++
        title.innerHTML = titles[num];
        const image = document.querySelector("div .active")
        image.classList.remove("active")
        if (num >= images.length) {
            images[0].classList.add("active");
            num = 0;
        }
        else {
            image.nextElementSibling.classList.add("active")
        }
    }

});