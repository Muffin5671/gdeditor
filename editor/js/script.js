function readLVLParameters() {
  let levelName = new URLSearchParams(document.location.search).get('levelName');
  let levelDesc = new URLSearchParams(document.location.search).get('levelDesc');
}

function updateBGCol() {
  document.getElementById('editorBG').style.backgroundColor = document.getElementById('bgColorPicker').value;
} 

function saveLevel() {
  let levelName = new URLSearchParams(document.location.search).get('levelName');
  let levelDesc = new URLSearchParams(document.location.search).get('levelDesc');
  let lastUpdated = new Date();
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
  localStorage.GDEditor = JSON.stringify(levelData);
}

function loadLevel() {
  document.getElementById('editorBG').style.backgroundColor = JSON.parse(localStorage.GDEditor).bgColor;
}
