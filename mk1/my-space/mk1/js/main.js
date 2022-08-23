window.onload = defaults;

function defaults() {
  let privateLink = document.getElementById("pLink");
  let protocol = 'https://';
  let host = 'my-space.creatives-media.ghiveci.com/';
  let path = 'private/';
  let source = protocol+host+path+linkID;

  privateLink.value = source;
  privateLink.readOnly = true;
}