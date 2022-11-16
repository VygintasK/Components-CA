import footerWidgets from "./FooterWidgets/footerWidgets.js"
import footerInfo from "./footerInfo.js"
import footerLogo from "./footerlogo.js"
import footerCertif from "./footerCertificates.js"

export default function footer(){


    let footer = document.createElement('footer')
    footer.classList.add('site-footer')

    let footerContainer =document.createElement('div')
    footerContainer.classList.add('footer-container', 'wrap')
    footerContainer.innerHTML =`
    <div class="footer-logo">
        <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-white.svg" alt="company-logo">
    </div>
    `
    footerContainer.append(footerWidgets(),footerInfo(),footerCertif(),footerLogo())
    footer.append(footerContainer)
return footer
}