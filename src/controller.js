module.exports = (baseCtrl, cmds) => {
    return {
        search(req, reply) {
            cmds.search(req.payload.searchTerm);
            reply().code(204);
        },
        launchMediaItem(req, reply) {
            cmd.launchMediaItem(req.payload.mediaId);
            reply().code(204);
        },
        togglePlayPause: baseCtrl.passthrough(cmds.togglePlayPause),
        play: baseCtrl.passthrough(cmds.play),
        pause: baseCtrl.passthrough(cmds.pause),
        fullScreen: baseCtrl.passthrough(cmds.fullScreen),
        exitFullScreen: baseCtrl.passthrough(cmds.exitFullScreen),
        rewind: baseCtrl.passthrough(cmds.rewind),
        fastForward: baseCtrl.passthrough(cmds.fastForward),
        toggleKeyframeMode: baseCtrl.passthrough(cmds.toggleKeyframeMode),
        frameBack: baseCtrl.passthrough(cmds.frameBack),
        frameForward: baseCtrl.passthrough(cmds.frameForward)
    };
};
