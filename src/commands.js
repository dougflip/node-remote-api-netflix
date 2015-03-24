const BASE_SEARCH_URL = 'http://movies.netflix.com/WiSearch?v1=';
const BASE_MEDIA_URL = 'http://movies.netflix.com/WiPlayer?movieid=';

class NetflixCommands {
  constructor (coreApi) {
    this.coreApi = coreApi;
  }

  search (searchTerm) {
    this.coreApi.browser.launch(BASE_SEARCH_URL + encodeURIComponent(searchTerm));
  }

  launchMediaItem (mediaId) {
    this.coreApi.browser.launch(BASE_MEDIA_URL + mediaId);
  }

  togglePlayPause() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('Space');
  }

  play() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('Prior') // page up;
  }

  pause() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('Next') // page down;
  }

  fullScreen() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('f');
  }

  exitFullScreen() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('Escape');
  }

  rewind() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('shift+Left');
  }

  fastForward() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('shift+Right');
  }

  toggleKeyframeMode() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('ctrl+space');
  }

  frameBack() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('Left');
  }

  frameForward() {
    this.coreApi.mouse.clickAtPolarAndRestore(0, 0);
    this.coreApi.keyboard.sendKeys('Right');
  }
}

module.exports = NetflixCommands;
