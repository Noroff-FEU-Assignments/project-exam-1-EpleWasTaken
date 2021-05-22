const apiURL = "https://project-exam1-cms.svanevik.one/wp-json/wc/store/products?category=18";
const allPosts = document.querySelector(".allPostResults");
const moreBtn = document.querySelector("#more_button");



async function fetchAllPosts() {
    try {
        const allPostsFetch = await fetch(apiURL);
        const allPostsResponse = await allPostsFetch.json();

        allPosts.innerHTML = "";

        for(let i = 0; i < allPostsResponse.length; i++) {
            if (i === 8) {
                break;
            }

            allPosts.innerHTML += `<div class="all_post_card">
                                    <a href="/html/singlePost.html?id=${allPostsResponse[i].id}">
                                    <img src="${allPostsResponse[i].images[0].src}" class="all_post_img" alt="${allPostsResponse[i].images[0].alt}">
                                    </a>
                                    <h2 class="all_post_name">${allPostsResponse[i].name}</h2>
                                    <button onclick="window.location='/html/singlePost.html?id=${allPostsResponse[i].id}'" id="view_post">View Post</button>
                                    </div>`

        function showMorePosts() {
            for(let i = 8; i < allPostsResponse.length; i++) {
                allPosts.innerHTML += `<div class="all_post_card">
                                        <a href="/html/singlePost.html?id=${allPostsResponse[i].id}">
                                        <img src="${allPostsResponse[i].images[0].src}" class="all_post_img" alt="${allPostsResponse[i].images[0].alt}">
                                        </a>
                                        <h2 class="all_post_name">${allPostsResponse[i].name}</h2>
                                        <button onclick="window.location='/html/singlePost.html?id=${allPostsResponse[i].id}'" id="view_post">View Post</button>
                                        </div>`

                                        moreBtn.style.display = "none";
            }                                  
        }
        }
    } catch(error) {
        (error)
    }

    moreBtn.addEventListener("click", showMorePosts);
}
fetchAllPosts();

