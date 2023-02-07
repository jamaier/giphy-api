import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { GiphyService } from "./js/main";

function searchGiphy(search) {
  let promise = GiphyService.searchGiphy(search);
  promise.then(
    function (data) {
      printElements(data);
    },
    function (errorArray) {
      printError(errorArray);
    }
  );
}

//start here
function printElements(resource) {
  document.getElementById("showResults").innerHTML = null;
  document.getElementById("keyword").value = null;

  if (resource.data[1] !== undefined) {
    resource.data.forEach((gif) => {
      const img = document.createElement("img");
      img.setAttribute("src", gif.images.original.url);
      img.setAttribute("width", "150px");
      document.getElementById("showResults").append(img);
    });
  }
}

function printError(error) {
  document.querySelector(
    "#showResults"
  ).innerText = `${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

window.addEventListener("load", () => {
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let search = document.getElementById("keyword").value;
      searchGiphy(search);
    });
});
