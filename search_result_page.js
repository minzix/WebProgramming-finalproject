window.addEventListener("DOMContentLoaded", function() {
  var searchResultsContainer = document.getElementById("search-results-container");

  // URL에서 쿼리 매개변수(searchResults)를 가져와서
  var searchParams = new URLSearchParams(window.location.search);
  var searchResults = JSON.parse(searchParams.get("searchResults"));

  if (searchResults && searchResults.length > 0) {
    // 검색 결과를 반복하여 각 책의 정보를 출력
    searchResults.forEach(function(book) {
      var bookContainer = document.createElement("div");
      bookContainer.className = "book-container";

      var bookInfo = document.createElement("div");
      bookInfo.className = "book-info";

      var bookTitle = document.createElement("h2");
      bookTitle.textContent = "책 제목 : " + book.booktitle;
      bookInfo.appendChild(bookTitle);

      var bookSubject = document.createElement("p");
      bookSubject.textContent = "과목명 : " + book.subject;
      bookInfo.appendChild(bookSubject);

      var bookQuality = document.createElement("p");
      bookQuality.textContent = "상태 : " + book.quality;
      bookInfo.appendChild(bookQuality);

      var bookComment = document.createElement("p");
      bookComment.textContent = "설명 : " + book.comment;
      bookInfo.appendChild(bookComment);

      var bookContact = document.createElement("p");
      bookContact.textContent = "판매자 연락처 : " + book.contact;
      bookInfo.appendChild(bookContact);

      var bookPurchaseYear = document.createElement("p");
      bookPurchaseYear.textContent = "구입 연도 : " + book.purchaseYear;
      bookInfo.appendChild(bookPurchaseYear);

      var bookPublishYear = document.createElement("p");
      bookPublishYear.textContent = "출판 연도 : " + book.publishYear;
      bookInfo.appendChild(bookPublishYear);

      var bookPublisher = document.createElement("p");
      bookPublisher.textContent = "출판사 : " + book.publisher;
      bookInfo.appendChild(bookPublisher);

      var bookAuthor = document.createElement("p");
      bookAuthor.textContent = "저자 : " + book.author;
      bookInfo.appendChild(bookAuthor);

      var bookListPrice = document.createElement("p");
      bookListPrice.textContent = "원가 : " + book.listPrice;
      bookInfo.appendChild(bookListPrice);

      var bookPrice = document.createElement("p");
      bookPrice.textContent = "판매가 : " + book.price + " ( " + (1-book.price/book.listPrice)*100 + "% Off )";
      bookInfo.appendChild(bookPrice);

      bookContainer.appendChild(bookInfo);
      searchResultsContainer.appendChild(bookContainer);
    });
  } else {
    // 일치하는 책이 없는 경우 메시지 출력
    var noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "검색어와 일치하는 책이 없습니다.";
    searchResultsContainer.appendChild(noResultsMessage);
  }
});