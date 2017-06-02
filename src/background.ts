declare const chrome;

setInterval(() => {

    let rules = fetchRules();
    const types = rules.map((rule) => rule.resourceType);
    const urls = rules.map((rule) => `*://${rule.domain}/*`);

    if(rules.length) {
        chrome.webRequest.onBeforeRequest.addListener(handlerRequest, {types, urls}, ['blocking']);
    }

    function handlerRequest(request) {
        if(!window['isActive']) { return; }

        const rule = rules.filter((rule) =>  rule.resourceType === request.type && request.url.match(rule.domain))[0];

        try {
            const coerceWith = eval(rule.coerceWith);
            const url = coerceWith(request.url);
            console.info('Redirecting request: ', url);

            return {
                redirectUrl: url
            }
        }
        catch(e) {
         console.warn('Coerce with fail.')
        }
    }

    function fetchRules(){
        const rawRules = localStorage.getItem('rules');
        if(!rawRules) {return [];}

        const rules = JSON.parse(rawRules);
        return rules.filter((rule) => rule.active)
    }
}, 5000);