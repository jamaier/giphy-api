import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { GiphyService } from "./js/main";

function searchGiphy(userSearchQuery) {
  let promise = GiphyService.showGiphy(userSearchQuery);
  promise.then(function() {
    printElement(giphyData);
  }, function(giphyErrorArray) {
    printElement(giphyErrorArray);
  });
}

function printElement() {
  document.getElementById('ShowResults').innerHTML = null;
  document.getElementById('keyword').value;
}

function handleForm() {
  let searchKeyword = document.getElementById("keyword").value;
}

window.addEventListener('load', function() {
  event.preventDefault();
  document.getElementById('searchForm').addEventListener('submit', handleForm);
  searchGiphy();
  printElement();
});