function levelNameCheck() {
  if (document.getElementById('levelNameInput').value == '') {
    alert('Level name cannot be empty!');
  } else {
    window.location.replace('editor/?levelName=' + encodeURI(document.getElementById('levelNameInput').value) + '&levelDesc=' + encodeURI(document.getElementById('levelDescInput').value))
  }
}
