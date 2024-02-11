var selectedImages = [];

function previewImage() {
  var fileInput = document.querySelector("input[type=file]");
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var reader = new FileReader();

    reader.onloadend = function() {
      selectedImages.push(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}

// 입력 정보 저장해서 search_result_page로 전달하는 코드
window.onload = function() {
    var form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 기본 동작 방지
      handleSubmit();
    };

// 폼 제출 시 호출되는 함수
    function handleSubmit() {
  // 입력된 값 가져오기
    var booktitle = document.getElementsByName("booktitle")[0].value;
    var subject = document.getElementsByName("subject")[0].value;
    var quality = document.querySelector('input[name="quality"]:checked').value;
    var comment = document.getElementsByName("comment")[0].value;
    var contact = document.querySelector('input[type="tel"]').value;
    var purchaseYear = document.getElementsByName("purchaseyear")[0].value;
    var publishYear = document.getElementsByName("publishyear")[0].value;
    var publisher = document.getElementsByName("publisher")[0].value;
    var author = document.getElementsByName("author")[0].value;
    var listPrice = document.getElementsByName("listprice")[0].value;
    var price = document.getElementsByName("price")[0].value;
    //var image = document.querySelector('input[type="file"]').files[0].name;

    var bookinfo = JSON.parse(localStorage.getItem("users"))||[];

    bookinfo.push({
        booktitle:booktitle,
        subject:subject, 
        quality:quality,
        comment:comment,
        contact:contact,
        purchaseYear:purchaseYear,
        publishYear:publishYear,
        publisher:publisher,
        author:author,
        listPrice:listPrice,
        price:price,
        //image:image
    });

    localStorage.setItem("bookinfo", JSON.stringify(bookinfo))
 

    alert("판매하실 도서 " + booktitle + "의 상품등록이 완료되었습니다. 첫 페이지로 돌아가 다른 학생들이 등록한 도서를 검색해보세요!");

  // 첫 페이지로 이동
    window.location.href = "firstpage.html";
    }
};