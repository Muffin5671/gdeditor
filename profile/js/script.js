function userNameCheck() {
  if (document.getElementById('userNameInput').value == '' || /\s/.test(document.getElementById('userNameInput').value)) {
    alert('Username cannot be empty!');
  } else {
    if (document.getElementById('userNameInput').value == 'MuffinGDYT') {
      localStorage.GDEditorDev = true;
    } else {
      localStorage.removeItem('GDEditorDev');
    }
    console.log('Successfully changed username!');
    window.location.replace('../?u=' + encodeURI(document.getElementById('userNameInput').value));
  }
}
