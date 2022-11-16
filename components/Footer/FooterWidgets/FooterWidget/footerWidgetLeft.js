
export default function footerWidgetLeft(){
    let widgetLeft = document.createElement('div')
    widgetLeft.classList.add('footer-widget-left')
    widgetLeft.innerHTML = `
    <ul>
        <li class="menu-item"><a href="#">Studentams</a></li>
        <li class="menu-item"><a href="#">Jei galiu aš - gali ir tu!</a></li>
        <li class="menu-item"><a href="#">Verslui</a></li>
        <li class="menu-item"><a href="#">Programos</a></li>
        <li class="menu-item"><a href="#">Nemokamos Studijos</a></li>
        <li class="menu-item"><a href="#">UŽT kursai</a></li>
        <li class="menu-item"><a href="#">Programavimo kalbos</a></li>
        <li class="menu-item"><a href="#">Apie mus</a></li>
        <li class="menu-item"><a href="#">Naujienos</a></li>
        <li class="menu-item"><a href="#">karjera - We are hiring!</a></li>
        <li class="menu-item"><a href="#">ES parama</a></li>
        <li class="menu-item"><a href="#">Kontaktai</a></li>
    </ul>
    `
    return widgetLeft
}