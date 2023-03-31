// window.addEventListener('message', function (event) {
//   console.log(event);
//   // if (event.data && event.data.extensionMessage) {
//   //     alert(event.data.extensionMessage);
//   // }
// });

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (location.href.startsWith("https://bard.google.com")) {
      var searchInput = document.getElementsByTagName('textarea')[0];
    } else {
      var searchInput = document.getElementsByTagName("input")[0];      
    }
    if (request.functiontoInvoke == 'translateThenSearch') {
      if (location.href.startsWith("https://bard.google.com")) {
        searchInput.value = request.en;
        searchInput.dispatchEvent(new Event('input'))
        document.querySelector(`[mattooltip="Submit"]`).click();
      } else {
        searchInput.value = request.en;
        document.querySelector(`[role="search"]`).submit();
      }
    } else if (request.functiontoInvoke == 'getSearchInputValue') {
      sendResponse({"searchInputValue" : searchInput.value});
    }
  }
);
