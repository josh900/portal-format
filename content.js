function main() {

  // Create the navigation bar
  var navBar = document.createElement('div');
  navBar.style.height = '56px';
  navBar.style.color = 'white';
  navBar.style.display = 'flex';
  navBar.style.justifyContent = 'start';
  navBar.style.alignItems = 'center';
  navBar.style.fontSize = '14px';
  navBar.style.gap = '15px';
  navBar.style.position = 'fixed';
  navBar.style.width = 'calc(100% - 400px)';
  navBar.style.top = '0';
  navBar.style.zIndex = '1000';
  navBar.style.paddingLeft = '15px';

  var headers = {
    'My Portal': 'https://skoop-jira.atlassian.net/wiki/spaces/MP/overview?mode=global',
    'Triage': 'https://skoop-jira.atlassian.net/wiki/spaces/PCO/overview?mode=global',
    'Clients': 'https://skoop-jira.atlassian.net/wiki/spaces/PCO/overview?mode=global',
    'Wiki': 'https://skoop-jira.atlassian.net/wiki/spaces/WIKI/overview?mode=global',
    'General': 'https://skoop-jira.atlassian.net/wiki/spaces/PGEN/overview?mode=global',
    'Tech': 'https://skoop-jira.atlassian.net/wiki/spaces/PTECH/overview?mode=global',
    'Design': 'https://skoop-jira.atlassian.net/wiki/spaces/PDES/overview?mode=global',
    'Routines': 'https://skoop-jira.atlassian.net/wiki/spaces/PASK/overview?mode=global',
    'Products': 'https://skoop-jira.atlassian.net/wiki/spaces/PPO/overview?mode=global'
  };

  
  // Create header links
  for (let header in headers) {
    var a = document.createElement('a');
    a.textContent = header;
    a.href = headers[header];
    a.style.cursor = 'pointer';
    a.style.color = 'white';
    a.className = 'header-link'; // Add this line
    navBar.appendChild(a);
  }

  document.body.prepend(navBar);
  

  function replaceButtons() {
    var buttons = document.querySelectorAll('div.ap-container.conf-macro.output-block');
    buttons.forEach(function (button) {
      var url = button.querySelector('iframe').src;
      var urlMatch = url.match(/url=([^&]+)/);
      var originalUrl = urlMatch ? decodeURIComponent(urlMatch[1]) : '';
      var newButton = document.createElement('button');
      newButton.textContent = 'NEW';
      newButton.style.cursor = 'pointer';
      newButton.style.borderRadius = '3px';
      newButton.style.width = '50px';
      newButton.style.height = '26px';
      newButton.style.borderWidth = '0px';
      newButton.style.backgroundColor = 'lightblue';

      newButton.addEventListener('click', function (e) {
        e.stopPropagation();
        var modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.zIndex = '10000';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        var iframe = document.createElement('iframe');
        iframe.src = originalUrl;
        iframe.style.width = '70%'; // Changed to 70%
        iframe.style.height = 'calc(70% - 30px)'; // Changed to 70%
        iframe.style.border = 'none';
        iframe.style.position = 'absolute';
        iframe.style.left = '15%'; // Adjusted to center the iframe
        iframe.style.top = 'calc(15% + 30px)'; // Adjusted to center the iframe
        iframe.style.borderRadius = '0 0 10px 10px'; // Add this line
        var closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.right = 'calc(0% + 5px)';
        closeButton.style.top = 'calc(0% + 5px)';
        closeButton.style.zIndex = '10001';
        closeButton.style.cursor = 'pointer';
        closeButton.style.borderRadius = '3px';
        closeButton.style.padding = '2px 5px';
        closeButton.style.width = '30px';
        closeButton.style.height = '30px';
        closeButton.style.fontSize = '12px';
        closeButton.style.backgroundColor = 'lightgrey';
        closeButton.style.border = 'none';
        closeButton.addEventListener('click', function () {
          document.body.removeChild(modal);
        });
        var header = document.createElement('div'); // Add this line
        header.style.width = '70%'; // Changed to 70%
        header.style.height = '40px'; // Add this line
        header.style.position = 'absolute'; // Add this line
        header.style.left = '15%'; // Adjusted to center the header
        header.style.top = '15%'; // Adjusted to center the header
        header.style.backgroundColor = '#fff'; // Add this line
        header.style.borderRadius = '10px 10px 0 0'; // Add this line
        header.appendChild(closeButton); // Add this line
        modal.appendChild(header); // Add this line
        modal.appendChild(iframe);
        document.body.appendChild(modal);
        function closeModal() {
          var closeButton = iframe.contentDocument.querySelector('#issue-create-submit');
          if (closeButton) {
            closeButton.click();
          }
          setTimeout(function () {
            document.body.removeChild(modal);
            window.location.reload();
          }, 1000);
        }
        iframe.addEventListener('load', function () {
          var closeButton = iframe.contentDocument.querySelector('#issue-create-submit');
          if (closeButton) {
            closeButton.addEventListener('click', closeModal);
          }
        });
        var newTabButton = document.createElement('button');
        newTabButton.textContent = 'Open in new tab';
        newTabButton.style.position = 'absolute';
        newTabButton.style.right = 'calc(0% + 40px)';
        newTabButton.style.top = 'calc(0% + 5px)';
        newTabButton.style.width = '100px';
        newTabButton.style.height = '30px';
        newTabButton.style.zIndex = '10001';
        newTabButton.style.cursor = 'pointer';
        newTabButton.style.borderRadius = '3px';
        newTabButton.style.padding = '2px 5px';
        newTabButton.style.border = 'none';
        newTabButton.style.fontSize = '12px';
        newTabButton.style.backgroundColor = 'lightgrey';
        newTabButton.addEventListener('click', function () {
          window.open(originalUrl, '_blank');
        });
    
        header.appendChild(newTabButton); // Add this line
      });
      button.parentNode.replaceChild(newButton, button);
    });
  }

  function openLinkInModal(link) {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.zIndex = '10000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    var iframe = document.createElement('iframe');
    iframe.src = link;
    iframe.style.width = '95%'; // Changed to 95%
    iframe.style.height = 'calc(95% - 30px)'; // Changed to 95%
    iframe.style.border = 'none';
    iframe.style.position = 'absolute';
    iframe.style.left = '2.5%'; // Adjusted to center the iframe
    iframe.style.top = 'calc(2.5% + 30px)'; // Adjusted to center the iframe
    iframe.style.borderRadius = '0 0 10px 10px'; // Add this line
    var closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.right = 'calc(0% + 5px)';
    closeButton.style.top = 'calc(0% + 5px)';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.zIndex = '10001';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '3px';
    closeButton.style.padding = '2px 5px';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '12px';
    closeButton.style.backgroundColor = 'lightgrey';
    closeButton.addEventListener('click', function () {
      document.body.removeChild(modal);
    });
    var header = document.createElement('div'); // Add this line
    header.style.width = '95%'; // Changed to 95%
    header.style.height = '40px'; // Add this line
    header.style.position = 'absolute'; // Add this line
    header.style.left = '2.5%'; // Adjusted to center the header
    header.style.top = '2.5%'; // Adjusted to center the header
    header.style.backgroundColor = '#fff'; // Add this line
    header.style.borderRadius = '10px 10px 0 0'; // Add this line
    header.appendChild(closeButton); // Add this line
    modal.appendChild(header); // Add this line
    modal.appendChild(iframe);
    document.body.appendChild(modal);
    var newTabButton = document.createElement('button');
    newTabButton.textContent = 'Open in new tab';
    newTabButton.style.position = 'absolute';
    newTabButton.style.right = 'calc(0% + 40px)';
    newTabButton.style.top = 'calc(0% + 5px)';
    newTabButton.style.width = '100px';
    newTabButton.style.height = '30px';
    newTabButton.style.zIndex = '10001';
    newTabButton.style.cursor = 'pointer';
    newTabButton.style.borderRadius = '3px';
    newTabButton.style.padding = '2px 5px';
    newTabButton.style.border = 'none';
    newTabButton.style.fontSize = '12px';
    newTabButton.style.backgroundColor = 'lightgrey';
    newTabButton.addEventListener('click', function () {
      window.open(link, '_blank');
    });
  
    header.appendChild(newTabButton); // Add this line
  }

  document.body.addEventListener('click', function (event) {
    var target = event.target;
    if (target.tagName === 'IMG' && target.parentNode.tagName === 'A' && !target.parentNode.classList.contains('header-link')) {
      event.preventDefault();
      openLinkInModal(target.parentNode.href);
    } else if (target.tagName === 'A' && !target.classList.contains('header-link')) {
      event.preventDefault();
      openLinkInModal(target.href);
    }
  });
  

  replaceButtons();

  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (mutation.type === 'childList') {
        replaceButtons();
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

    // Add CSS to the page
    setTimeout(function() {
      var link = document.createElement('link');
      link.id = 'myExtensionStyles';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = chrome.extension.getURL('styles.css');
      (document.head || document.documentElement).appendChild(link);
    }, 1000); // delay of 2 seconds
  }

function removeChanges() {
  // Remove CSS from the page
  var link = document.getElementById('myExtensionStyles');
  if (link) {
    link.parentNode.removeChild(link);
  }
}

chrome.storage.sync.get('enabled', function(data) {
  if (data.enabled !== false) { // Default to enabled if not set
    main();
  }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (changes.enabled) {
    window.location.reload(true);
  }
});