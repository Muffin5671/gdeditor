function readLVLParameters() {
  let levelName = new URLSearchParams(window.location.search).get('levelName');
  let levelDesc = new URLSearchParams(window.location.search).get('levelDesc');
}

window.onload = function levelNameDetector() {
  let levelName = new URLSearchParams(window.location.search).get('levelName');
  if (levelName == null) {
    document.location.href = '../';
  }
}

function updateBGCol() {
  document.getElementById('editorBG').style.backgroundColor = document.getElementById('bgColorPicker').value;
} 

function generateLevelData() {
  let levelName = new URLSearchParams(window.location.search).get('levelName');
  let levelDesc = new URLSearchParams(window.location.search).get('levelDesc');
  let levelAuthor = localStorage.GDEditorUsername;
  let lastUpdated = new Date().toDateString();
  let bgColor = document.getElementById('editorBG').style.backgroundColor;
  let levelData = {
    metadata: {
      levelName: levelName,
      levelDesc: levelDesc,
      levelAuthor: levelAuthor,
      lastUpdated: lastUpdated
      },
    bgColor: bgColor,
    grndColor: "rgb(0,0,0)",
    data: [
      {object: 1, x: 15, y: 15},
      {object: 1, x: 45, y: 15}
      ]
  };
  return levelData;
}

function saveLevel() {
  localStorage.GDEditorLevels = JSON.stringify(generateLevelData());
}

function loadLevel(levelData) {
  document.getElementById('editorBG').style.backgroundColor = levelData.bgColor;
}

// copy pasted code from Kanchu on www.stackoverflow.com/questions/13405129/create-and-save-a-file-with-javascript
// i still don't know how to download files on my own :)))
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function saveLVLToFile() {
  download(JSON.stringify(generateLevelData()), 'level.json', 'application/json');
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

async function readObjList() {
  let objList = await getObjList();
}
