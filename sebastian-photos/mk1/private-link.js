window.onload = defaults;

function defaults() {
  document.getElementById('myInput').readOnly = true;
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  var newValue = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

  newValue.style.color = "green";
  newValue.style.textAlign = "center";
  newValue.value = "Link Copied in Clipboard!";
}