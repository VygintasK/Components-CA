export default function newsArticle(props) {
  let {href,url,category,title,date} = props

  const newsArticleElement = document.createElement('div');
  newsArticleElement.classList.add('news-article');

  newsArticleElement.innerHTML = `<a href="${href}">
                                    <div class="image-wrapper">
                                      <img src="${url}">
                                    </div>
                                    <div class="info-wrapper">
                                      <span class="category">${category}</span>
                                      <h3 class="news-title">${title}</h3>
                                      <span class="article-date">${date}</span>
                                    </div>
                                  </a>`;

  return newsArticleElement;
}