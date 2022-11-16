import newsArticle from "./newsArticle.js"

export default function mainNews() {
  const mainNews = document.createElement('div')
  mainNews.classList.add('main-news')

  mainNews.append(
    newsArticle({
      href:'#',
      url:'https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1024x994.jpg',
      category:'NAUJIENOS',
      title:'Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?',
      date:'2022-03-23'
    }), 
    newsArticle({
      href:'#',
      url:'https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg',
      category:'NAUJIENOS',
      title:'„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį',
      date:'2022-03-24'
    })
    )

  return mainNews
}