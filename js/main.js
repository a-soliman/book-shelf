function bookSearch() {
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ''
  console.log(search)

  $.ajax({
    url:"https://www.googleapis.com/books/v1/volumes?q=" +search,
    dataType: "json",

    success: function(data) {
      console.log(data)
      var results = document.getElementById('results')
      for (var i = 0; i < data.items.length; i++) {
        //creating a cardholder
        var cardHolder = document.createElement('div')
        cardHolder.setAttribute('class', 'col-md-4 col-sm-6 col-xs-12 card-holder')
        //creating a card 
        var card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.setAttribute('style', 'background: url(' + data.items[i].volumeInfo.imageLinks.thumbnail +') no-repeat; background-size: cover; ' ) 
        
        //creating text holder
        var textHolder = document.createElement('div')
        textHolder.setAttribute('class', 'text')

        //creating a title holder
        var title = document.createElement('h2')
        title.innerHTML = data.items[i].volumeInfo.title


        //creating author holder
        var author = document.createElement('h4')
        author.innerHTML = "By: " + data.items[i].volumeInfo.authors

        //creating date holder
        var date =document.createElement('p')
        date.innerHTML = data.items[i].volumeInfo.publishedDate

        //creating an image holder
        var image = document.createElement('img')
        // image.setAttribute('src', data.items[i].volumeInfo.imageLinks.thumbnail)

        //apending to the text holder    

        //appending to card 
        textHolder.appendChild(title)
        textHolder.appendChild(author)
        textHolder.appendChild(date)

        //appending to the card
        card.appendChild(textHolder)

        // card.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>" + "<p>" + data.items[i].volumeInfo.publishedDate + "</p>" + '<img src="' + data.items[i].volumeInfo.imageLinks.thumbnail  + '">'
        cardHolder.appendChild(card)
        results.appendChild(cardHolder)

        //animating the text.. 
        $('.card').hover(
          function() { $(this).children('.text').stop().animate({top: -5 }, 250) },
          function() { $(this).children('.text').stop().animate({top: -136}, 250) } 
    )
      }
    },
    type: 'GET'
  })
}
document.getElementById('button').addEventListener('click', bookSearch, false)


