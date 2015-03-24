var NetflixCommands = require('./commands');
var NetflixCtrl = require('./controller');

var postHandlers = {
  '/netflix/search': 'search',
  '/netflix/launch-media-item': 'launchMediaItem',
  '/netflix/toggle-play-pause': 'togglePlayPause',
  '/netflix/play': 'play',
  '/netflix/pause': 'pause',
  '/netflix/full-screen': 'fullScreen',
  '/netflix/exit-full-screen': 'exitFullScreen',
  '/netflix/rewind': 'rewind',
  '/netflix/fast-forward': 'fastForward',
  '/netflix/toggle-keyframe-mode': 'toggleKeyframeMode',
  '/netflix/frame-back': 'frameBack',
  '/netflix/frame-forward': 'frameForward'
};

class NetflixRemote {
  constructor (server, coreApi) {
    var ctrl = new NetflixCtrl(coreApi.baseController, new NetflixCommands(coreApi));
    coreApi.routeHelper.registerRoutes(server, ctrl, postHandlers);
  }
}

module.exports = NetflixRemote;
