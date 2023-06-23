// Add CSS to the page after a delay of 1 second
setTimeout(function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.extension.getURL('jira.css');
    (document.head || document.documentElement).appendChild(link);
  }, 100);



  