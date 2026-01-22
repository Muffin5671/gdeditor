window.onload = function createLVLListItem() {
  try {
    let tag = document.createElement('div');
    tag.innerHTML = '<p style="background-color: var(--gdbrown); width: 500px; margin-top: 0; margin-bottom: 0;"><span class="helvetica">' + JSON.parse(localStorage.GDEditor).metadata.levelName + '</span></p><p style="background-color: var(--gdbrown); color: #00000066; border-bottom: 1.5px #00000066 solid; width: 500px; margin-top: 0; margin-bottom: 0;"><span class="helvetica" style="font-size: 16px;">Last updated: ' + JSON.parse(localStorage.GDEditor).metadata.lastUpdated + '</span></p>';
    document.body.appendChild(tag);
  } catch (error) {
    let tag = document.createElement('div');
    tag.innerHTML = '<p><span class="helvetica">An <cr>error</cr> occured while loading level list.</span></p>';
    document.body.appendChild(tag);
  }
}
