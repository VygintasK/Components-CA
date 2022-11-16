
export default function footerInfo(){
    let footer = document.createElement('div')
    footer.classList.add('footer-info')
    footer.innerHTML=`
        <div class="copyright">
            © By UAB Programuok | CodeAcademy šeimos narys – 
            <a href="#">CodeAcademy Kids</a>
        </div>
        <div class="privacy-policy">
            <a href="#">Privatumo politika</a>
        </div>
    `
    return footer
}