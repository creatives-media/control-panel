function copyLink() {
    let privateLink = document.getElementById('pLink');
    let copyButton = document.getElementById('copy');
    
    privateLink.select();
    privateLink.setSelectionRange(0, 99999)
    document.execCommand('copy');

    copyButton.innerHTML = '&nbsp;Done ✔️&nbsp';
    copyButton.setAttribute('onClick', 'javascript: blank();');

    privateLink.style.color = 'green';
    privateLink.style.textAlign = 'center';
    privateLink.value = 'Copied in Clipboard';

    setTimeout (
        function () {
        let copyButton = document.getElementById('copy');
        let protocol = 'https://';
        let host = 'photos.sebastian.ghiveci.com/';
        let path = 'folder/';
        let source = protocol+host+path+linkID;

        privateLink.value = source;
        privateLink.readOnly = true;
        privateLink.style.color = '#0000EE';
        copyButton.innerHTML = 'Copy Link';
        copyButton.setAttribute('onClick', 'javascript: copyLink();');
        }, 2000
    );
}