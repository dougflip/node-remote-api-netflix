Netflix Plugin for NodeRemoteApi
=================================

This module is a plugin for [NodeRemoteApi](https://github.com/dougflip/node-remote-api/tree/dd/plugins) to provide support for Netflix.

## Installing

- From within your local NodeRemoteApi directory run `npm install node-remote-api-netflix`
- Add an entry to `./src/var/plugins.json`

```
{
  "remotes": [
    "node-remote-api-netflix"
  ]
}
```

When NodeRemote starts up it will check this file to see which plugins have been installed.
This design may change in the future.
