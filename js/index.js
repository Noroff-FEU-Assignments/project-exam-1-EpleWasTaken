// Index API fetch for the carousel

const url = "https://project-exam1-cms.svanevik.one/wp-json/wc/store/products?category=18";
const carousel = document.querySelector(".slider");


async function indexCarousel() {
    try {
        const carouselFetch = await fetch(url);

        const carouselResults = await carouselFetch.json();

        carousel.innerHTML = "";

        for(let i = 0; i < carouselResults.length; i++) {
            carousel.innerHTML +=  `<section class="blog_posts">
                                    <a href="/html/singlePost.html?id=${carouselResults[i].id}">
                                    <img src="${carouselResults[i].images[0].src}" class="index_post_img" alt="${carouselResults[i].images[0].alt}">
                                    </a>
                                    <h4 class="blog_title">${carouselResults[i].name}</h4>
                                    <button onclick="window.location='/html/singlePost.html?id=${carouselResults[i].id}'" id="view_post">View Post</button>
                                    </section>
                                    `;
                                    if (i === 7) {
                                        break;
                                    };
        }

    } catch (error) {

    }
}

indexCarousel();



// Carousel Slider

const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");


var sectionIndex = 0;


leftArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -12.5 + '%)';
});

rightArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -12.5 + '%)';
});

