window.onload = function() {
    var form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault(); 
      submitForm();
    };
  
    function submitForm() {
      var nameInput = document.querySelector('input[name="name"]');
      var idInput = document.querySelector('input[name="id"]');
      var pwInput = document.querySelector('input[name="pw"]');
  
      var name = nameInput.value;
      var id = idInput.value;
      var pw = pwInput.value;
  
      var users = JSON.parse(localStorage.getItem("users")) || [];
  
      users.push({
        name: name,
        id: id,
        pw: pw
      });
  
      localStorage.setItem("users", JSON.stringify(users));
  
      alert(
        "회원가입이 완료되었습니다. " +
          name +
          "님, 눈송서점에 오신 것을 환영합니다!"
      );
  
      window.location.href = "login_page.html";
    }
  };
  