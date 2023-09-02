chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    const newHeaders = details.responseHeaders.filter(header => {
      return header.name.toUpperCase() !== "X-FRAME-OPTIONS";
    });

    return { responseHeaders: newHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);
