const url = "https://project-exam1-cms.svanevik.one/wp-json/wc/store/products?category=18";
const carousel = document.querySelector(".slider");


async function indexCarousel() {
    try {
        const carouselFetch = await fetch(url);

        const carouselResults = await carouselFetch.json();

        carousel.innerHTML = "";

        for(let i = 0; i < carouselResults.length; i++) {
            carousel.innerHTML +=  `<section class="blog_posts">
                                    <h4 class="blog_title">${carouselResults[i].name}</h4>
                                    <a href="/html/singlePostResult.html?id=${carouselResults[i].id}">
                                    <img src="${carouselResults[i].images[0].src}" class="index_post_img">
                                    </a>
                                    </section>`;
            if (i === 3) {
                break;
            }
        }

    } catch (error) {

    }
}

indexCarousel();

const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");


var sectionIndex = 0;

leftArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});

rightArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});




















// leftButton.onclick = function() {
//     document.querySelector(".carousel_posts").scrollLeft -= 20;
// }

// rightButton.onclick = function() {
//     document.querySelector(".carousel_posts").scrollRight += 20;
// }





// rightButton.addEventListener("click", function (event) {
//     carousel.scrollLeft += imageWidth;
//     event.preventDefault();
// });

// leftButton.addEventListener("click", function (event) {
//     carousel.scrollLeft -= imageWidth;
//     event.preventDefault();
// });




