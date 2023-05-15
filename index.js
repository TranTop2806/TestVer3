function numberOneTriangle(num) {
    if (num < 1 || num > 10) {
      console.log("Vui lòng nhập số nguyên trong khoảng từ 1 đến 10.");
      return;
    }
  
    for (var i = 1; i <= num; i++) {
      var row = "";
      for (var j = 1; j <= i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
numberOneTriangle(5)