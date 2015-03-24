var noContentMethods = [
  'togglePlayPause', 'play', 'pause', 'fullScreen', 'exitFullScreen', 'rewind', 'fastForward',
  'toggleKeyframeMode', 'frameBack', 'frameForward'
];

class NetflixCtrl {
  constructor (baseController, cmds) {
    this.cmds = cmds;
    baseController.generateNoContentMethods(this, noContentMethods);
  }

  search (request, reply) {
    this.cmds.search(request.payload.searchTerm);
    reply().code(204);
  }

  launchMediaItem (request, reply) {
    this.cmds.launchMediaItem(request.payload.mediaId);
    reply().code(204);
  }
}

module.exports = NetflixCtrl;
