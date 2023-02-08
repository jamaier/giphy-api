import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { GiphyService, RandomService, TrendingService } from "./js/main";

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

function searchRandom() {
  let promise = RandomService.searchRandom();
  promise.then(
    function (randomData) {
      printElements(randomData);
    },
    function (errorArray) {
      printError(errorArray);
    }
  );
}

function searchTrending() {
  let promise = TrendingService.searchTrending();
  promise.then(
    function (trendingData) {
      printElements(trendingData);
    },
    function (errorArray) {
      printError(errorArray);
    }
  );
}

function printError(error) {
  document.querySelector(
    "#showResults"
  ).innerText = `${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function printElements(resource) {
  document.getElementById("showResults").innerHTML = null;
  document.getElementById("keyword").value = null;
  if (resource.data[0] !== undefined) {
    resource.data.forEach((gif) => {
      const img = document.createElement("img");
      img.setAttribute("src", gif.images.original.url);
      img.setAttribute("width", "150px");
      document.getElementById("showResults").append(img);
    });
  } else {
    const img = document.createElement("img");
    img.setAttribute("src", resource.data.images.original.url);
    document.getElementById("showResults").append(img);
  }
}

window.addEventListener("load", () => {
  document.getElementById("trending").addEventListener('click', searchTrending());
  document.getElementById("random").addEventListener("click", searchRandom);
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let search = document.getElementById("keyword").value;
      searchGiphy(search);
    });
});
