window.onload = function createLVLListItem() {
  let tag = document.createElement('div');
  try {
    let item = Number(item) + 1;
  } catch (error) {
    let item = 0;
  }
  if (item % 2 == 0) {
    tag.innerHTML = '<p style="background-color: var(--gdbrown); width: 500px; margin-top: 0; margin-bottom: 0;"><span class="helvetica">' + JSON.parse(localStorage.GDEditor).metadata.levelName + '</span></p><p style="background-color: var(--gdbrown); color: #00000066; border-bottom: 1.5px #00000066 solid; width: 500px; margin-top: 0; margin-bottom: 0;"><span class="helvetica" style="font-size: 16px;">Last updated: ' + JSON.parse(localStorage.GDEditor).metadata.lastUpdated + '</span></p>';
  }
  document.body.appendChild(tag);
} // to-do: finish this unfinished script
