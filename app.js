const container = document.querySelector(".news");
const options = document.querySelector("select");
const topNews = document.querySelector(".top");

var html = "";
options.addEventListener('change', (e) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${e.target.value}&apiKey=5f240f203bbc4de58390a1e7794ba966`)
        .then((res) => {
            (res.data.articles).map((article) => {
                html += `
                    <div class="message">
                    <img src="${article.urlToImage}" alt="">
                    <div class="content">
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank"><button>READ MORE</button></a>
                    </div>
                    </div>
                `
            });
            container.innerHTML = html;
            html = "";
        })
        .catch((err) => {
            console.log(err);
        })
})

topNews.addEventListener("click", (e) => {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5f240f203bbc4de58390a1e7794ba966`)
        .then((res) => {
            (res.data.articles).map((article) => {
                html += `
                    <div class="message">
                    <img src="${article.urlToImage}" alt="">
                    <div class="content">
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank"><button>READ MORE</button></a>
                    </div>
                    </div>
                `
            });
            container.innerHTML = html;
            html = "";
        })
        .catch((err) => {
            console.log(err);
        })
})

window.addEventListener("load", (e) => {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5f240f203bbc4de58390a1e7794ba966`)
        .then((res) => {
            (res.data.articles).map((article) => {
                html += `
                    <div class="message">
                    <img src="${article.urlToImage}" alt="">
                    <div class="content">
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank"><button>READ MORE</button></a>
                    </div>
                    </div>
                `
            });
            container.innerHTML = html;
            html = "";
        })
        .catch((err) => {
            console.log(err);
        })
})