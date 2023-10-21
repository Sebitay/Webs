let inputSearch = document.getElementById("search-input");
let iconSearch = document.getElementById("search-icon");
let matchSearch = document.getElementById("search-list");

let populateMatchList = (matchList) => {
  // delete previous childs
  while (matchSearch.firstChild) {
    matchSearch.removeChild(matchSearch.firstChild);
  }

  for (confTitle of matchList) {
    let option = document.createElement("p");
    option.innerText = confTitle;
    matchSearch.append(option);
  }
  matchSearch.hidden = false;
};

let jqueryAJAX = (url) => {
  /*
    Advantages:
    1. Easy to use: jQuery simplifies a lot of the complexities of AJAX, making it easier to use, especially for beginners.
    2. Cross-browser compatibility: jQuery handles a lot of the cross-browser inconsistencies automatically, which can make your code simpler and more reliable.
    3. Strong community and resources: jQuery has been around for a long time and has a large community, which means there are many resources, tutorials, and third-party plugins available.

    Disadvantages:
    1. Additional dependency: jQuery is an additional library that you have to load into your project, which can increase the load time and complexity of your website.
    2. Overkill for simple projects: If all you're doing is AJAX, jQuery might be overkill. Modern browsers provide similar functionality natively through the Fetch API.
    3. Declining popularity: The need for jQuery is lessening as modern browsers continue to evolve and standardize, meaning fewer developers are learning or using jQuery.
    */
  $.ajax({
    url: url,
    type: "GET",
    success: (ajaxResponse) => {
      // the received data is already parsed into a JavaScript object
      populateMatchList(ajaxResponse["data"]);
      console.log(ajaxResponse);
    },
    error: (error) => {
      console.error("Error:", error);
    },
  });
};

let xhrAJAX = (url) => {
  /*
    Advantages:
    1. Wide browser compatibility: XHR has been around for a long time and is supported in virtually all browsers, including older ones.
    2. Fine-grained control: XHR provides a lot of control over the AJAX request, allowing you to handle different events and stages of the request. 

    Disadvantages:
    1. Complex and verbose: Making an AJAX request with XHR requires more code and is more complex than using jQuery or the Fetch API.
    2. Manual JSON parsing: Unlike Fetch and jQuery, XHR doesn't automatically parse JSON responses to JavaScript objects. You have to do this manually.
  */

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let ajaxResponse = JSON.parse(xhr.responseText);
      populateMatchList(ajaxResponse["data"]);
      console.log(ajaxResponse);
    } else if (xhr.status != 200) {
      console.error("Error:", xhr.status, xhr.statusText);
    }
  };

  xhr.send();
};

let fetchAJAX = (url) => {
  /*
    Advantages:
    1. Simple and modern: The Fetch API provides a simpler, more powerful, and more flexible alternative to XHR.
    2. Promise-based: Fetch uses Promises, which can make your code cleaner and easier to understand, especially for complex, asynchronous operations.
    3. Automatic JSON parsing: Fetch can automatically parse JSON responses to JavaScript objects.

    Disadvantages:
    1. Browser compatibility: While most modern browsers support Fetch, it's not available in Internet Explorer and older versions of other browsers.
    2. No automatic request cancelation: Unlike XHR, Fetch doesn't provide a built-in way to cancel a request.
    3. Poor error handling: By default, Fetch only rejects a Promise on network failure, not on HTTP error status (like 404 or 500). 
    */
  fetch(url) // 1 acceder al url
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // 2 parseamos el response a un json
    })
    .then((ajaxResponse) => {
      populateMatchList(ajaxResponse["data"]); // 3 le pasamos el data a populate...()
      console.log(ajaxResponse);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};

let ajaxMethod = "fetch";

let ajaxHandlerMapper = {
  jquery: jqueryAJAX,
  xhr: xhrAJAX,
  fetch: fetchAJAX,
};

let handleAJAX = (event) => {
  let ajaxHandler = ajaxHandlerMapper[ajaxMethod];
  ajaxHandler(`http://localhost:8007/get-conf/${event.target.value}`);
};

inputSearch.addEventListener("input", handleAJAX);
iconSearch.addEventListener("click", () => console.log("hola"));
