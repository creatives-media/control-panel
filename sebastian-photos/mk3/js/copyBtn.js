function copyFolderId() {
    let combiner = document.getElementById('combiner');
    let copyFolderId = document.getElementById('copyFolderId');
    
    combiner.select();
    combiner.setSelectionRange(0, 99999)
    document.execCommand('copy');

    copyFolderId.innerHTML = '&nbsp;Done ✔️&nbsp';
    copyFolderId.setAttribute('onClick', 'javascript: blank();');

    combiner.style.color = 'green';
    combiner.style.textAlign = 'center';
    combiner.value = 'Copied in Clipboard';

    setTimeout (
        function () {
        let copyFolderId = document.getElementById('copyFolderId');
        let protocol = 'https://';
        let host = 'photos.sebastian.ghiveci.com/';
        let path = 'folder/';
        let source = protocol+host+path+folderId;

        combiner.value = source;
        combiner.readOnly = true;
        combiner.style.color = '#0000EE';
        copyFolderId.innerHTML = 'Copy Link';
        copyFolderId.setAttribute('onClick', 'javascript: copyFolderId();');
        }, 2000
    );
}