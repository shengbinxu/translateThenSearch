chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "translationContextMenu",
    "title": "翻译成英文再搜",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == 'translationContextMenu') {
    console.log(clickData);
    text = clickData.selectionText;
    translateThenSearch(text);
  }
});

function translateThenSearch(input) {
  fetch("https://gke-goole-translation-service-n3bw52mqjq-as.a.run.app/translation?term=" + encodeURIComponent(input), {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then(function (response) {
      console.info('fetch()', response);
      chrome.tabs.query({
        "active": true,
        "currentWindow": true
      },
        function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "translateThenSearch",
            "en": response.text
          });
        }
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

chrome.commands.onCommand.addListener(async (command) => {
  console.log(`Command "${command}" triggered`);
  if (command == "translate-then-search") {
    chrome.tabs.query({
      "active": true,
      "currentWindow": true
    },
      async function (tabs) {
        const response = await chrome.tabs.sendMessage(tabs[0].id, {
          "functiontoInvoke": "getSearchInputValue",
        });
        console.log(response);
        var searchInputValue = response.searchInputValue;
        translateThenSearch(searchInputValue);
      }
    );
  }
});