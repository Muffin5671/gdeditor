function readLVLParameters() {
  let levelName = new URLSearchParams(document.location.search).get('levelName');
  let levelDesc = new URLSearchParams(document.location.search).get('levelDesc');
}

window.onload = function levelNameDetector() {
  let levelName = new URLSearchParams(document.location.search).get('levelName');
  if (levelName == null) {
    document.location.href = '../';
  }
}

function updateBGCol() {
  document.getElementById('editorBG').style.backgroundColor = document.getElementById('bgColorPicker').value;
} 

function saveLevel() {
  let levelName = new URLSearchParams(document.location.search).get('levelName');
  let levelDesc = new URLSearchParams(document.location.search).get('levelDesc');
  let lastUpdated = new Date().toDateString();
  let bgColor = document.getElementById('editorBG').style.backgroundColor;
  let levelData = {
    metadata: {
      levelName: levelName,
      levelDesc: levelDesc,
      lastUpdated: lastUpdated
      },
    bgColor: bgColor,
    grndColor: "rgb(0,0,0)",
    data: [
      {object: 1, x: 15, y: 15},
      {object: 1, x: 45, y: 15}
      ]
  };
  localStorage.GDEditorLevels = JSON.stringify(levelData);
}

function loadLevel() {
  document.getElementById('editorBG').style.backgroundColor = JSON.parse(localStorage.GDEditorLevels).bgColor;
}

async function fetchObjJSON() {
  // GET obj list
  const data = await fetch('https://muffin5671.github.io/gdeditor/editor/objects/objList.json');
  // convert into real data
  const response = await data.json();
  return response;
}

async function getObjList() {
  const json = await fetchObjJSON();
  return json;
}
