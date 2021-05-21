const apiURL = "https://project-exam1-cms.svanevik.one/wp-json/wc/store/products?category=18";
const allPosts = document.querySelector(".allPostResults");
const moreBtn = document.querySelector(".more_button");



async function fetchAllPosts() {
    try {
        const allPostsFetch = await fetch(apiURL);
        const allPostsResponse = await allPostsFetch.json();

        allPosts.innerHTML = "";

        for(let i = 0; i < allPostsResponse.length; i++) {
            if (i === 7) {
                break;
            }

            allPosts.innerHTML += `<div class="post_container">
                                    <div class="post_card">
                                    <a href="/html/singlePostResult.html?id=${allPostsResponse[i].id}">
                                    <img src="${allPostsResponse[i].images[0].src}" class="post_img" alt="${allPostsResponse[i].images[0].alt}">
                                    </a>
                                    </div>
                                    <h2 class="post_name">${allPostsResponse[i].name}</h2>
                                    <button onclick="window.location='/html/singlePostResult.html?id=${allPostsResponse[i].id}'" id="view_post">View Post</button>
                                    </div>`

        function showMorePosts() {
            for(let i = 7; i < allPostsResponse.length; i++) {
                allPosts.innerHTML += `<div class="post_container">
                                        <div class="post_card">
                                        <a href="/html/singlePostResult.html?id=${allPostsResponse[i].id}">
                                        <img src="${allPostsResponse[i].images[0].src}" class="post_img" alt="${allPostsResponse[i].images[0].alt}">
                                        </a>
                                        </div>
                                        <h2 class="post_name">${allPostsResponse[i].name}</h2>
                                        <button onclick="window.location='/html/singlePostResult.html?id=${allPostsResponse[i].id}'" id="view_post">View Post</button>
                                        </div>`

                                        moreBtn.disabled = true;
                                        moreBtn.innerText = "No more posts"
            }                                  
        }
        }
    } catch(error) {
        (error)
    }

    moreBtn.addEventListener("click", showMorePosts);
}
fetchAllPosts();







//         allPostsResponse.forEach(function (post) {
//             allPosts.innerHTML += `<div class="post_container">
//                                     <div class="post_card">
//                                     <a href="/html/singlePostResult.html?id=${post.id}">
//                                     <img src="${post.images[0].src}" class="post_img">
//                                     </a>
//                                     </div>
//                                     <h2 class="post_name">${post.name}</h2>
//                                     <button onclick="window.location='/html/singlePostResult.html?id=${post.id}'" id="view_post">View Post</button>
//                                     </div>`;
//         })
//     } catch (error) {
//         console.log();
//     }
// }