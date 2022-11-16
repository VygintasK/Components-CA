import events from "./Events/events.js";
import podcasts from "./Podcasts/podcasts.js"
import allNewsButton from "../News/allNewsButton.js"


export default function sidebar(){
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const eventsWrapper = document.createElement('div');
    eventsWrapper.classList.add('events-wrapper');

    sidebar.append(
        podcasts({title:'Podcastai ir radio laidos'}),
        events({title:'EVENTS'}),
        allNewsButton({title:'Daugiau'}))
    return sidebar
}