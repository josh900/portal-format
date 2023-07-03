setTimeout(function() {
    var collapseButton = document.querySelector('button[data-testid="ContextualNavigation-resize-button"]');
    if (collapseButton && collapseButton.getAttribute('aria-expanded') === 'true') {
        collapseButton.click();
    }

    // Get the elements
    var titleElement = document.querySelector('.subnavigator-title');
    var headerElement = document.querySelector('.subnav-page-header');
  
    // Swap the text content
    var temp = titleElement.textContent;
    titleElement.textContent = headerElement.textContent;
    headerElement.textContent = temp;
  
}, 1500);


