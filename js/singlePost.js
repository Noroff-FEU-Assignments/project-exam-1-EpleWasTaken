const singlePost = document.querySelector(".singlePostResult");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://project-exam1-cms.svanevik.one/wp-json/wc/store/products/" + id;

async function fetchSinglePost() {
    try {
        const fetchResponse = await fetch(url);

        const fetchResult = await fetchResponse.json();

        singlePost.innerHTML = "";

        createHTML(fetchResult);
    } catch(error) {
        console.log(error);
    }
}

fetchSinglePost();

function createHTML(sPost) {
    singlePost.innerHTML = `<div class="post_card">
                                    <img class="post_img" id="image_modal" src="${sPost.images[0].src}" alt="${sPost.images[0].alt}">
                                    <div id="modal_container" class="modal">
                                    <img class="modal_image" id="img1">
                                    <span class="close_modal"><i class="fas fa-times"></i></span>
                                </div>
                            <div class="text_container">
                                <h2 class="post_name">${sPost.name}</h2>
                                ${sPost.short_description}
                                ${sPost.description}
                            </div>`;



    var modal_container = document.getElementById("modal_container");
    var open_image = document.getElementById("image_modal");
    var modal_image = document.getElementById("img1");
    open_image.onclick = function () {
        modal_container.style.display = "block";
        modal_image.src = this.src;
    };

    var span = document.getElementsByClassName("close_modal")[0];

    span.onclick = function () {
        modal_container.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal_container) {
            modal_container.style.display = "none"
        }
    };
}
