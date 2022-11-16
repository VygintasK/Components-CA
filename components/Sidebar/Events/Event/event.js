export default function eventItem(props){
    let {url,href,day, month, status, title} = props

    let event = document.createElement('div')
    event.classList.add('event')
    event.innerHTML = `
    <a href="${href}">
    <img src="${url}" width='100%'>
        <div class="content-wrapper">
            
            <div class="date">
                <div class="day">${day}</div>
                <div class="month">${month}</div>
            </div>
            <span class="event-place">${status}</span>
            <h3 class="event-title">${title}</h3>
        </div>
    </a>
    `
    return event
}

