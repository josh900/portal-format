setTimeout(function () {
    var collapseButtonJira = document.querySelector('button[data-testid="ContextualNavigation-resize-button"]');
    if (collapseButtonJira && collapseButtonJira.getAttribute('aria-expanded') === 'true') {
        collapseButtonJira.click();
    }

    var collapseButtonConf = document.querySelector('button[data-testid="grid-left-sidebar-resize-button"]');
    if (collapseButtonConf && collapseButtonConf.getAttribute('aria-expanded') === 'true') {
        collapseButtonConf.click();
    }

    // Get the elements
    var titleElement = document.querySelector('.subnavigator-title');
    var headerElement = document.querySelector('.subnav-page-header');

    // Swap the text content
    var temp = titleElement.textContent;
    titleElement.textContent = headerElement.textContent;
    headerElement.textContent = temp;


}, 1500);





setTimeout(function () {
    var link = document.createElement('link');
    link.id = 'myExtensionStyles';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.extension.getURL('stylesall.css');
    (document.head || document.documentElement).appendChild(link);


}, 1000);



setTimeout(function () {
    if (window.location.href.match(/https:\/\/skoop-jira\.atlassian\.net\/wiki\/spaces\/.+\/overview\/.*/)) {

    var link2 = document.createElement('link2');
    link2.id = 'myExtensionStyles';
    link2.rel = 'stylesheet';
    link2.type = 'text/css';
    link2.href = chrome.extension.getURL('confoverview.css');
    (document.head || document.documentElement).appendChild(link2);
    }

}, 1000);
