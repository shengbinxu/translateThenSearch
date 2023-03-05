// window.addEventListener('message', function (event) {
//   console.log(event);
//   // if (event.data && event.data.extensionMessage) {
//   //     alert(event.data.extensionMessage);
//   // }
// });

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.functiontoInvoke == 'translateThenSearch') {
      let googleSearchInput = document.querySelector(`[aria-label="Search"]`);
      googleSearchInput.value = request.en;
      document.querySelector(`[role="search"]`).submit();
    } else if (request.functiontoInvoke == 'getSearchInputValue') {
      let googleSearchInput = document.querySelector(`[aria-label="Search"]`);
      sendResponse({"searchInputValue" : googleSearchInput.value});
    }
  }
);
