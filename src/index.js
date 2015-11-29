const buildCommands = require('./commands')
const buildCtrl = require('./controller')

const configure = (coreApi) => {
    const cmds = buildCommands(coreApi);
    const ctrl = buildCtrl(coreApi.baseController, cmds);

    coreApi.addRoutes({
        '/netflix/search': ctrl.search,
        '/netflix/launch-media-item': ctrl.launchMediaItem,
        '/netflix/toggle-play-pause': ctrl.togglePlayPause,
        '/netflix/play': ctrl.play,
        '/netflix/pause': ctrl.pause,
        '/netflix/full-screen': ctrl.fullScreen,
        '/netflix/exit-full-screen': ctrl.exitFullScreen,
        '/netflix/rewind': ctrl.rewind,
        '/netflix/fast-forward': ctrl.fastForward,
        '/netflix/toggle-keyframe-mode': ctrl.toggleKeyframeMode,
        '/netflix/frame-back': ctrl.frameBack,
        '/netflix/frame-forward': ctrl.frameForward
    });
};

module.exports = { configure };
