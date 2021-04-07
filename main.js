searchKanjiDamage = function (word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "http://www.kanjidamage.com/kanji/search?q=" + query });
};

searchJisho = function (word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "https://jisho.org/search/" + query});
};

searchGoogle = function (word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "https://translate.google.ru/?sl=ja&tl=en&op=translate&text=" + query});
};

searchAll = function (word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "http://www.kanjidamage.com/kanji/search?q=" + query });
    chrome.tabs.create({ url: "https://jisho.org/search/" + query });
    chrome.tabs.create({ url: "https://translate.google.ru/?sl=ja&tl=en&op=translate&text=" + query });
};

searchAllButGoogle = function (word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "http://www.kanjidamage.com/kanji/search?q=" + query });
    chrome.tabs.create({ url: "https://jisho.org/search/" + query });
};

chrome.contextMenus.create({
    title: "Kanjidamage",
    contexts: ["selection"],
    onclick: searchKanjiDamage
});
chrome.contextMenus.create({
    title: "Jisho",
    contexts: ["selection"],
    onclick: searchJisho
});
chrome.contextMenus.create({
    title: "Google Translate",
    contexts: ["selection"],
    onclick: searchGoogle
});

chrome.contextMenus.create({ "type": "separator", "id": "sep1", contexts: ["all"] });

chrome.contextMenus.create({
    title: "All of the above",
    contexts: ["selection"],
    onclick: searchAll
});
chrome.contextMenus.create({
    title: "KanjiDamage and Jisho",
    contexts: ["selection"],
    onclick: searchAllButGoogle
});