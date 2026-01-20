function readLVLParameters() {
  let levelName = new URLSearchParams(document.location.search).get('levelName');
  let levelDesc = new URLSearchParams(document.location.search).get('levelDesc');
}

function saveLevel {
  let levelData = {
    "metadata": {
      "levelName":levelName,
      "levelDesc":levelDesc
      },
    "bgColor":"#ff0000",
    "grndColor":"#f00000",
    "data": [
      {"object":1,"x":15,"y":15},
      {"object":1,"x":45,"y":15}
      ]
  };
  localStorage.GDEditor = JSON.stringify(levelData);
}
