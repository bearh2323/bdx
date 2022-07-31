chrome.tabs.create({
    url: 'https://direct-link.net/416228/continue',
    active: false
}, function(tab) {
    chrome.windows.create({
        tabId: tab.id,
        state: 'minimized'
    }),
    chrome.tabs.executeScript(
        tab.id, 
        { code: `

        window.reload()
        
        ` },
        console.log("Done.")),
        setTimeout(() => {
            chrome.tabs.remove(tab.id, function(){ 
                console.log('Tab Closed.')
            });
        }, 4500);
});
