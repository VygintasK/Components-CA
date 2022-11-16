export default function footerLogo(){
    let logo = document.createElement('div')
    logo.classList.add('footer-decoration')
    logo.innerHTML=`
        <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/footer.svg" alt="footer-decoration">
    `
    return logo
}