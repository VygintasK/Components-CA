export default function footerCertif(){
    let certif = document.createElement('div')
    certif.classList.add('footer-certificates')
    certif.innerHTML=`
        <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/sertika.svg" width="97" height="44" alt="Sertika">
    `
    return certif
}