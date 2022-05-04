function beerBottles() {
  var i = 99;

  // Create a variable to store the lyrics of the song. 
  var lyricsHtml = "";

  while (i >= 0) {
    if (i > 1) {
        // Append the lyricsHtml variable by adding each line of the song (lyricsHtml += or lyricsHtml = lyricsHtml +) for each iteration of the while loop. 
      lyricsHtml += "<p>" +
        i +
          " bottles of beer on the wall, " +
          i +
          " bottles of beer. Take one down and pass it around, " +
          (i - 1) +
          " bottles of beer on the wall.</p>"
      ;
    } else if (i === 1) {
        lyricsHtml += "<p>" +
        i +
          " bottle of beer on the wall, " +
          i +
          " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.</p>"
      ;
    } else {
        lyricsHtml += "<p>" +
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.</p>"
      ;
    }

    i--;
  }
  // Replace the existing contents of an element with new content (lyricsHtml)
  document.getElementById("bottles-of-beer-result").innerHTML = lyricsHtml;
}

document.querySelector("#bottles-of-beer-btn").addEventListener("click", (e) => {
    e.preventDefault();
    beerBottles();
});

