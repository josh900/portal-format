document.getElementById('toggleButton').addEventListener('click', function() {
    chrome.storage.sync.get('enabled', function(data) {
      var enabled = !data.enabled;
      chrome.storage.sync.set({enabled: enabled});
      document.getElementById('toggleButton').innerText = enabled ? 'Disable' : 'Enable';
    });
  });
  
  chrome.storage.sync.get('enabled', function(data) {
    document.getElementById('toggleButton').innerText = data.enabled ? 'Disable' : 'Enable';
  });