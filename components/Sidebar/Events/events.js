import eventItem from "./Event/event.js";

export default function events(proprs){
    let {title,url} = proprs
    const events = document.createElement('div');
    events.classList.add('events');
    events.innerHTML = `
    <h2>${title}</h2>
    <div class="image-wrapper">
    </div>`
    events.append(
    eventItem({
        url: 'https://codeacademy.lt/wp-content/uploads/2022/10/MicrosoftTeams-image-20-1024x1024.png',
        href:'#',
        day:'15',
        month:'SPA',
        status:'online',
        title:'TestCon Europe 2022'
        }),
    eventItem({
        url:'',
        href:'#',
        day:'27',
        month:'RUG',
        status:'offline',
        title:'Intro: „Salesforce“ CRM'
    }),
    eventItem({
        url:'',
        href:'#',
        day:'5',
        month:'RGP',
        status:'online',
        title:'Intro: Dirbtinis intelektas ir Duomenų mokslas'
    }))
    
    return events
}