'use strict';

(function () {
    var ipfsPathRegExp = /^(\/[a-zA-Z0-9-_]{46})\//;
    var ipfsPathPrefix = (window.location.pathname.match(ipfsPathRegExp) || [])[1] || '';

    window.__GATSBY_IPFS_PATH_PREFIX__ = ipfsPathPrefix;
})();
