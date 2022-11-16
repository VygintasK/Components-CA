
export default function podcastItem(props) {
    const{url,podcastTime,title,date} = props 
    let podcast = document.createElement('div')
    podcast.classList.add('podcast')
    podcast.innerHTML = `
    <img class="podcast-image" src="${url}">
    <span class="podcast-time">Trukme: ${podcastTime}</span>
    <button class="podcast-play">Play</button>
    <div class="podcast-info">
        <h3 class="podcast-title">${title}</h3>
        <span class="podcast-date">${date}</span>
    </div>`

    return podcast
}
