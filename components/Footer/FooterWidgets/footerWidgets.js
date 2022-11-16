import footerWidgetLeft from "./FooterWidget/footerWidgetLeft.js"
import footerWidgetCenter from "./FooterWidget/footerWidgetCenter.js"
import footerWidgetRight from "./FooterWidget/footerWidgetRight.js"

export default function footerWidgets(){
    let widgets = document.createElement('div')
    widgets.classList.add('footer-widgets')
    widgets.append(footerWidgetLeft(),footerWidgetCenter(), footerWidgetRight())

    return widgets
}

// {/* <div class="footer-widgets"> */}