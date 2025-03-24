async function loadHeaderFooter() {
    const headerResponse = await fetch('header.html');
    const headerHtml = await headerResponse.text();
    document.querySelector('header').outerHTML = headerHtml;

    const footerResponse = await fetch('footer.html');
    const footerHtml = await footerResponse.text();
    document.querySelector('footer').outerHTML = footerHtml;
}

loadHeaderFooter();