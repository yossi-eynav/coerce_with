(() => {
    toggle();
    setEventListener();

    function toggle() {
        window['isActive'] = !window['isActive'];

        if(window['isActive']) {
            chrome.browserAction.setIcon({path: "./on.svg"});
        } else {
            chrome.browserAction.setIcon({path: "./off.svg"});
        }
    }

    function setEventListener() : void {
        chrome.browserAction.onClicked.addListener(toggle);
    }
})();