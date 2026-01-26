function userNameCheck() {
  if (document.getElementById('userNameInput').value == '') {
    alert('Username cannot be empty!');
  } else {
    if (document.getElementById('userNameInput').value == 'MuffinGDYT') {
      localStorage.GDEditorDev = true;
    } else {
      localStorage.GDEditorDev = false;
    }
    window.location.replace('editor/?levelName=' + encodeURI(document.getElementById('levelNameInput').value))
  }
}
