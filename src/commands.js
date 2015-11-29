var R = require('ramda');

const BASE_SEARCH_URL = 'http://movies.netflix.com/WiSearch?v1=';
const BASE_MEDIA_URL = 'http://movies.netflix.com/WiPlayer?movieid=';

module.exports = coreApi => {
    const clickThenKeys = (keys) => {
        return () => {
            coreApi.mouse.clickAtPolarAndRestore(0,0);
            coreApi.keyboard.sendKeys(keys);
        };
    };

    return {
        search: q => coreApi.browser.launch(BASE_SEARCH_URL + encodeURIComponent(q)),
        launchMediaItem: id => coreApi.browser.launch(BASE_MEDIA_URL + id),
        togglePlayPause: clickThenKeys('Space'),
        play: clickThenKeys('Prior'),
        pause: clickThenKeys('Next'),
        fullScreen: clickThenKeys('f'),
        exitFullScreen: clickThenKeys('Escape'),
        rewind: clickThenKeys('shift+Left'),
        fastForward: clickThenKeys('shift+Right'),
        toggleKeyframeMode: clickThenKeys('ctrl+Space'),
        frameBack: clickThenKeys('Left'),
        frameForward: clickThenKeys('Right')
    };
};
