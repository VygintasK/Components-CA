import mainNews from "./mainNews.js";
import secondaryNews from "./secondaryNews.js";
import allNewsButton from "./allNewsButton.js";

export default function news(props) {
  let {title}=props
  let titleNews = document.createElement('h1')
  titleNews.textContent = title
  
  const newsElement = document.createElement('div');
  newsElement.classList.add('news');

   

  newsElement.append(titleNews, mainNews(), secondaryNews(),allNewsButton({title: 'Visos naujienos'}));

  return newsElement;
}