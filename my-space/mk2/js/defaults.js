window.onload = defaults;

function defaults() {
  let combiner = document.getElementById("combiner");
  let protocol = 'https://';
  let host = 'my-space.sebastian.ghiveci.com/';
  let path = 'folder/';

  let source = protocol+host+path+folderId;

  combiner.value = source;
  combiner.readOnly = true;
}