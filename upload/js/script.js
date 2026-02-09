function gzip(string) {
  const compressed = pako.gzip(string);
  return btoa(String.fromCharCode(...compressed));
}

async function getFileMetadata() {
  let file = document.getElementById('levelFileInput').files[0];
  let fileContent = await file.text();
  return JSON.parse(fileContent).metadata;
}

async function getFileData() {
  let file = document.getElementById('levelFileInput').files[0];
  let fileContent = await file.text();
  return JSON.parse(fileContent).data;
}

async function fileCheck() {
  let levelMetadata = await getFileMetadata();
  let levelData = await getFileData();
  if (document.getElementById('levelFileInput').files[0] == undefined) {
    alert('Please provide a level file.');
  } else {
    window.location.replace('../editor/?levelName=' + encodeURI(levelMetadata.levelName) + '&levelDesc=' + encodeURI(levelMetadata.levelDesc) + '&levelData=' + encodeURI(gzip(JSON.stringify(levelData))));
  }
}
