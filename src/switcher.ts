(() => {
    toggle();
    setEventListener();

    function toggle() {
        window['isActive'] = !window['isActive'];

        if(window['isActive']) {
            chrome.browserAction.setIcon({path: "./on.png"});
        } else {
            chrome.browserAction.setIcon({path: "./off.png"});
        }
    }

    function setEventListener() : void {
        chrome.browserAction.onClicked.addListener(toggle);
    }
})();