function openDlManager() {
  let protocol = 'https://';
  let host = 'apps.creatives-media.ghiveci.com/';
  let internalPath = 'download-manager/mk3/';
  let source = '&source=rush.sebastian.ghiveci.com';

  // Base64 Encoding
  let Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
  
  // For OneDrive
  if (oneDrv.includes('.') && dlStatus.includes('1')) {
    let extractedLink = oneDrv.substr(0,48);
    console.log(extractedLink);
    let encodedLink = Base64.encode(extractedLink);
    console.log(encodedLink);
    let dlLocation = protocol+host+internalPath+encodedLink+'?t=1drv'+source;
    console.log("1drv Opertional and returend " + dlLocation);
    window.open(dlLocation, "_blank");
  }
  else if (oneDrv.includes('.') && dlStatus.includes('0')) {
    let extractedLink = oneDrv.substr(0,48);
    console.log(extractedLink);
    let encodedLink = Base64.encode(extractedLink);
    console.log(encodedLink);
    let dlLocation = protocol+host+internalPath+encodedLink+'?t=expired'+source;
    console.log("1drv Opertional and returend " + dlLocation);
    window.open(dlLocation, "_blank");
  }
  // For Direcct Links
  else if (directLink.includes('.') && dlStatus.includes('1')) {
    let linkNoProtocol = directLink.substr(8);
    console.log(linkNoProtocol);
    let encodedLink = Base64.encode(linkNoProtocol);
    console.log(encodedLink);
    let dlLocation = protocol+host+internalPath+encodedLink+'?t=direct'+source;
    console.log("Direct Link Operationl and returned " + dlLocation);
    window.open(dlLocation, "_blank");
  }
  else if (directLink.includes('.') && dlStatus.includes('0')) {
    let linkNoProtocol = directLink.substr(8);
    console.log(linkNoProtocol);
    let encodedLink = Base64.encode(linkNoProtocol);
    console.log(encodedLink);
    let dlLocation = protocol+host+internalPath+encodedLink+'?t=expired'+source;
    console.log("Direct Link Operationl and returned " + dlLocation);
    window.open(dlLocation, "_blank");
  }
  // Status 1 without a given link
  else if (dlStatus.includes('1') || dlStatus.includes('0')) {
    let combiner = document.getElementById('combiner');
    combiner.style.color = 'red';
    combiner.style.textAlign = 'center';
    combiner.value = 'Destination Missing!';
    setTimeout (
      function () {
        let protocol = 'https://';
        let host = 'photos.sebastian.ghiveci.com/';
        let path = 'folder/';
        let source = protocol+host+path+folderId;

        combiner.value = source;
        combiner.readOnly = true;
        combiner.style.color = '#0000EE';
      }, 2000
    );
  }
  // For The Demo & Temp
  else if (dlStatus.includes('demo') || dlStatus.includes('temp')) {
    let dlLocation = protocol+host+internalPath+'QHNlYmFwdGNkIG9uIEluc3RhZ3JhbSA6KQ=='+'?t='+dlStatus+source;
    window.open(dlLocation, "_blank");
    console.log("Demo & Temp Operational for: "+dlLocation);
  }
}