window.onload = function() {
    var form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault(); 
      login();
    };
  
    function login() {
      var idInput = document.querySelector('input[name="id"]');
      var pwInput = document.querySelector('input[name="pw"]');
  
      var id = idInput.value;
      var pw = pwInput.value;
      var users = JSON.parse(localStorage.getItem("users")) || [];
  
      var found = false;
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === id && users[i].pw === pw) {
          found = true;
          break;
        }
      }
  
      if (found) {
        alert("로그인되었습니다!");
        window.location.href = "firstpage.html";

      } else {
        alert(
          "회원정보를 찾을 수 없습니다. 지금 회원가입을 하시겠습니까?"
        );
        window.location.href = "signup_page.html";
      }
    }
  };
  