export class GiphyAPI {
  static giphy() {
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userSearchQuery}&limit=25&offset=0&rating=g&lang=en`;

    request.addEventListener("loadend", function () {
      let response = JSON.parse(this.responseText);
      if (this.status === 200) {
        printElements(response);
      } else {
        printError(this, response);
      }
    });

    request.open("GET", url, true);
    request.send();
  }
}
