import podcastItem from "./Podcast/pocast.js"

export default function podcasts(props){
    let {title} = props
    const podcasts = document.createElement('div');
    podcasts.classList.add('podcasts');
    podcasts.innerHTML = `
    <h2>${title}</h2>`
    const podcastsWrapper = document.createElement('div');
    podcastsWrapper.classList.add('podcats-wrapper');
    podcasts.append(podcastItem({
        url:'https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png',
        podcastTime: '7:55',
        title:'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
        date:'2022-09-05'
    }),
    podcastItem({
        url:'https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png',
        podcastTime: '7:54',
        title:'Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“',
        date:'2021-08-25'
    }),
    podcastItem({
        url:'https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png',
        podcastTime: '9:22',
        title:'Kaip gyvensime 2031-aisiais? 10 esminių prognozių',
        date:'2021-08-18'
    }),
    podcastItem({
        url:'https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png',
        podcastTime: '9:22',
        title:'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“',
        date:'2021-08-11'
    }))

    return podcasts
}

