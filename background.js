chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      if (details.responseHeaders[i].name.toLowerCase() == 'access-control-allow-origin') {
        details.responseHeaders[i].value = '*';
        break;
      }
    }
    return { responseHeaders: details.responseHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);

