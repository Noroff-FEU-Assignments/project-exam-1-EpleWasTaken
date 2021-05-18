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
    } catch {
        console.log();
    }
}

fetchSinglePost();

function createHTML(sPost) {
    singlePost.innerHTML = `<div class="post_card">
                            <img src="${sPost.images[0].src}" class="post_img">
                            <h2 class="post_name">${sPost.name}</h2>
                            ${sPost.description}
                            </div>`;
}









// const singlePost = document.querySelector(".singlePostResult");

// const url = " https://project-exam1-cms.svanevik.one/wp-json/wc/store/products?id=40";

// singlePost.innerHTML =