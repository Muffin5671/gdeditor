function readLVLParameters() {
  let levelName = new URLSearchParams(document.location.search).get('levelName');
  let levelDesc = new URLSearchParams(document.location.search).get('levelDesc');
}

function updateBGCol() {
  document.getElementById('editorBG').style.backgroundColor = document.getElementById('bgColorPicker').value;
} 

function getLevelData() {
  let levelData = {
    "metadata": {
      "levelName":levelName,
      "levelDesc":levelDesc,
      "lastUpdated":lastUpdated
      },
    "bgColor":document.getElementById('editorBG').style.backgroundColor,
    "grndColor":"rgb(0,0,0)",
    "data": [
      {"object":1,"x":15,"y":15},
      {"object":1,"x":45,"y":15}
      ]
  };
}
function saveLevel() {
  let levelName = new URLSearchParams(document.location.search).get('levelName');
  let levelDesc = new URLSearchParams(document.location.search).get('levelDesc');
  let lastUpdated = new Date().toDateString();
  getLevelData();
  localStorage.GDEditor = JSON.stringify(levelData);
}

function loadLevel() {
  document.getElementById('editorBG').style.backgroundColor = JSON.parse(localStorage.GDEditor).bgColor;
}

function setupSaveLVLAsFile(url, filename) {
  // and then some copy and pasted code 
  // i do not know how to download files in js
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "file-name";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function saveLVLAsFile() {
  const file = new Blob([getLevelData()], { type: "text/plain" });
  const url = window.URL.createObjectURL(file);
  setupSaveLVLAsFile(url, JSON.parse(localStorage.GDEditor).metadata.levelName + ".json");
  window.URL.revokeObjectURL(url);
}
