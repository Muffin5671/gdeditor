// create levels / dev stuff
// i also never memorized how to add elements :))))
window.onload = function createLVLListItem() {
  try {
    let tag = document.createElement('div');
    tag.innerHTML = '<p style="background-color: var(--gdbrown); width: 500px; margin-top: 0; margin-bottom: 0;"><span class="helvetica">' + JSON.parse(localStorage.GDEditorLevels).metadata.levelName + '</span></p><p style="background-color: var(--gdbrown); color: #00000066; border-bottom: 1.5px #00000066 solid; width: 500px; margin-top: 0; margin-bottom: 0;"><span class="helvetica" style="font-size: 16px;">Last updated: ' + JSON.parse(localStorage.GDEditor).metadata.lastUpdated + '</span></p>';
    document.body.appendChild(tag);
  } catch (error) {
    let tag = document.createElement('div');
    if (!(JSON.parse(localStorage.GDEditorDev) == null)) {
      tag.innerHTML = '<p><span class="helvetica">An <cr>error</cr> occured while loading level list.</span></p><br><code>' + error + '</code>';
      document.body.appendChild(tag);
    } else {
      tag.innerHTML = '<p><span class="helvetica">An <cr>error</cr> occured while loading level list.</span></p>';
      document.body.appendChild(tag);
    }
  }
  if (new URLSearchParams(document.location.search).get('clearMessage') == 1) {
    let tag = document.createElement('div');
    tag.innerHTML = '<p style="color: #00000066; font-style: italic; margin-top: 0;"><span class="helvetica">Successfully cleared all levels.</span></p>';
    document.body.appendChild(tag);
  }
}

// delete all levels function
function clearAllLVLs() {
  if (confirm('Are you sure you want to delete all of your levels?')) {
    if (confirm('Are you REALLY sure you want to delete ALL of your created levels? This cannot be undone.')) {
      localStorage.removeItem('GDEditorLevels');
      window.location.href = 
    '/gdeditor/mylevels/?clearMessage=1';
    }
  }
}
