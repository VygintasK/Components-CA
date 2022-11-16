import newsArticle from "./newsArticle.js";

export default function secondaryNews() {
  const secondaryNews = document.createElement('div');
  secondaryNews.classList.add('secondary-news');

  secondaryNews.append(
    newsArticle({
      href:'#',
      url:'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg',
      category:'TECHNOLOGIJŲ RITMU',
      title:'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
      date:'2022-08-23'
    }),
    newsArticle({
      href:'#',
      url:'https://codeacademy.lt/wp-content/uploads/2021/09/mintosko-Ro0PNXcpCus-unsplash-1024x705.jpg',
      category:'TECHNOLOGIJŲ RITMU',
      title:'Ar skaitmeninė mada išties yra ekologiška industrijos gelbėtoja?',
      date:'2022-09-23'
    }), 
    newsArticle({
      href:'#',
      url:'https://codeacademy.lt/wp-content/uploads/2021/09/image-1024x576.jpeg',
      category:'TECHNOLOGIJŲ RITMU',
      title:'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
      date:'2022-10-23'
    }), 
    newsArticle({
      href:'#',
      url:'https://codeacademy.lt/wp-content/uploads/2021/08/pexels-tima-miroshnichenko-6474485-1024x583.jpg',
      category:'TECHNOLOGIJŲ RITMU',
      title:'Kodėl technologijų milžinės skuba papildytosios realybės produktus diegti prekyboje?',
      date:'2022-11-23'
    }) );
  
  return secondaryNews;
}