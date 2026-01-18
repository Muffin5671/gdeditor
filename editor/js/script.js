function readLVLParameters() {
  try {
    let levelName = new URLSearchParams(document.location.search).get('levelName');
  } catch (error) {
    document.location = '../';
  }
  let levelDesc = new URLSearchParams(document.location.search).get('levelDesc');
}
