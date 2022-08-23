window.onload = defaults;

function defaults() {
  let privateLink = document.getElementById("pLink");
  let protocol = 'https://';
  let host = 'photos.sebastian.ghiveci.com/';
  let path = 'folder/';
  let source = protocol+host+path+linkID;

  privateLink.value = source;
  privateLink.readOnly = true;
}