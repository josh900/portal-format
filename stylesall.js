setTimeout(function() {
    var collapseButton = document.querySelector('button[data-testid="ContextualNavigation-resize-button"]');
    if (collapseButton && collapseButton.getAttribute('aria-expanded') === 'true') {
        collapseButton.click();
    }
}, 500);


