  function handleSearch() {

    var searchInput = document.getElementById("search-input").value;
    console.log(searchInput);
    var bookinfo = JSON.parse(localStorage.getItem("bookinfo")) || [];

    var searchResults = bookinfo.filter(function(book) {
      if (typeof book.booktitle === 'string') {
        return book.booktitle.includes(searchInput);
      }
      return false;
    });
    

    if (searchResults.length > 0) {
      var searchParams = new URLSearchParams();
      searchParams.append("searchResults", JSON.stringify(searchResults));
      window.location.href = "search_result_page.html?" + searchParams.toString();
    } else {
      alert("검색어와 일치하는 책이 없습니다.");
    }
  }

