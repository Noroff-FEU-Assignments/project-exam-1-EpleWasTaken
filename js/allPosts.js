const allPosts = document.querySelector(".allPostResults");

const testURL = "https://project-exam1-cms.svanevik.one/wp-json/wc/store/products?category=18";

async function fetchAllPosts() {
    try {
        const allPostsFetch = await fetch(testURL);

        const allPostsResponse = await allPostsFetch.json();

        allPosts.innerHTML = "";

        allPostsResponse.forEach(function (post) {
            allPosts.innerHTML += `<div class="post_card">
                                    <a href="/html/singlePostResult.html?id=${post.id}">
                                    <img src="${post.images[0].src}" class="post_img">
                                    </a>
                                    <h2 class="post_name">${post.name}</h2>
                                    <button onclick="window.location='/html/singlePostResult.html?id=${post.id}'" id="view_post">View Post</button>
                                    </div>`;
        })
    } catch (error) {
        console.log();
    }
}

fetchAllPosts();