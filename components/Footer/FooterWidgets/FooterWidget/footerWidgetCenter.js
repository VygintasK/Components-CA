
export default function footerWidgetCenter(){
    let widgetCenter = document.createElement('div')
    widgetCenter.classList.add('footer-widget-center')
    widgetCenter.innerHTML = `
    <ul>
        <li>
            <h2>Vilnius</h2>
        </li>
        <li><a href="#">Saulėtakio al. 15, 
            <br>
            Vilnius</a>
        </li>
        <li><a href="#">Antakalnio g. 17, 
            <br>
            Vilnius</a>
        </li>
    </ul>
    `
    return widgetCenter
}