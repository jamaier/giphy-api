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

const printError = (error) => {
  document.querySelector(
    "#showResults"
  ).innerText = `${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
};
//start here
const printElements = (data) => {
  document.getElementById("showResults").innerHTML = null;
  document.getElementById("keyword").value;
  const img = document.createElement("img");
  data.data.forEach((gif) => {
    img.setAttribute("src", gif.images.url);
    document.getElementById("showResults").append(img);
  });
};

window.addEventListener("load", () => {
  document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    searchGiphy();
  });
});
