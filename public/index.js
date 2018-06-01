$(".numbers").click(function() {
    let input = $(this).html();
    $("#numberMarker").append(input);
  });
  
  $(".clear").click(function() {
    $("#history").empty();
    $("#screen").children().empty();
    $("#oldHistory").empty();
  });
  
  $(".percent").click(function() {
    if ($("#percentMarker").html() != "%") {
      $("#percentMarker").html("%");
    } else if ($("#percentMarker").html() == "%") {
      $("#percentMarker").html("");
    }
  });
  
  $(".sqrt").click(function() {
    if ($("#sqrtMarkerStart").html() === "") {
      $("#sqrtMarkerStart").html("&#8730;(");
      $("#sqrtMarkerEnd")
        .html(")")
        .css("color", "rgb(169,169,169)");
    } else if ($("sqrtMarkerStart").html() !== "") {
      $("#sqrtMarkerStart").html("");
      $("#sqrtMarkerEnd").html("");
    }
  });
  
  $(".sign").click(function() {
    if ($("#signMarker").html() != "-") {
      $("#signMarker").html("-");
    } else if ($("#signMarker").html() == "-") {
      $("#signMarker").html("");
    }
  });
  
  $(".operators").click(function() {
    let operator = $(this).html();
    let input = $("#screen").text();
      input.replace(/\s\s/,/\s/);
    if (operator == "+" && input !== "") {
      $("#history").append(" " + input + "+");
      $("#screen")
        .children()
        .empty();
    } else if (operator == "-" && input !== "") {
      $("#history").append(" " + input + "-");
      $("#screen")
        .children()
        .empty();
    } else if (operator == "×" && input !== "") {
      $("#history").append(" " + input + "&#215;");
      $("#screen")
        .children()
        .empty();
    } else if (operator == "÷" && input !== "") {
      $("#history").append(" " + input + "&#247;");
      $("#screen")
        .children()
        .empty();
    } else if (operator == "=" && input !== "") {
      $("#oldHistory").empty;
      $("#history").append(" " + input + " =");
      let str = $("#history").text();
      let str2 = $("#history").text();
      str = str.replace(" =", "");
      let sqrRootReg = /√\(\d+\.?\d*\)/g;
      if (str.match(sqrRootReg) != null){
      let sqrRoot = str.match(sqrRootReg)[0];
        let sqrtNum = sqrRoot.match(/\d+\.?\d*/);
          sqrtNum = parseFloat(sqrtNum);
          sqrtNum = Math.sqrt(sqrtNum);
        str = str.replace(sqrRootReg, sqrtNum);
      }
      let percentRegEx = /\d+\.?\d*%/;
      if (str.match(percentRegEx) != null){
      let percent_ = str.match(percentRegEx)[0];
        let percentNum = percent_.match(/\d+\.?\d*/);
          percentNum = parseFloat(percentNum);
          percentNum /= 100;
        str = str.replace(percentRegEx, percentNum);
      }
      regex = /[-]?\d+\.?\d*\s.\s[-]?\d+\.?\d*/;
      console.log(str);
  while (regex.exec(str) != null){
      if (/[-]?\d+\.?\d*\s[×]\s[-]?\d+\.?\d*/.test(str)){
          let toMultiply = str.match(/[-]?\d+\.?\d*\s[×]\s[-]?\d+\.?\d*/g);
        console.log(toMultiply);
          for (let i in toMultiply){
              let nums = toMultiply[i].match(/[-]?\d+\.?\d*/g)
              let ans = parseFloat(nums[0], 10) * parseFloat(nums[1], 10);
              str = str.replace(toMultiply[i], ans);
          }      
      }
      else  if (/[-]?\d+\.?\d*\s[÷]\s[-]?\d+\.?\d*/.test(str)){
          let toDivide = str.match(/[-]?\d+\.?\d*\s[÷]\s[-]?\d+\.?\d*/g);
          for (let i in toDivide){
              let nums = toDivide[i].match(/[-]?\d+\.?\d*/g)
              let ans = parseFloat(nums[0], 10) / parseFloat(nums[1], 10);
              str = str.replace(toDivide[i], ans);
          }      
      }
       else if (/[-]?\d+\.?\d*\s[+]\s[-]?\d+\.?\d*/.test(str)){
          let toAdd = str.match(/[-]?\d+\.?\d*\s[+]\s[-]?\d+\.?\d*/g);
          for (let i in toAdd){
              let nums = toAdd[i].match(/[-]?\d+\.?\d*/g)
              let ans = parseFloat(nums[0], 10) + parseFloat(nums[1], 10);
              str = str.replace(toAdd[i], ans);
          }
                
      }
       else if (/[-]?\d+\.?\d*\s[-]\s[-]?\d+\.?\d*/.test(str)){
          let toSubtract = str.match(/[-]?\d+\.?\d*\s[-]\s[-]?\d+\.?d*/g);
          for (let i in toSubtract){
              let nums = toSubtract[i].match(/[-]?\d+\.?\d*/g)
              let ans = parseFloat(nums[0], 10) - parseFloat(nums[1], 10);
              str = str.replace(toSubtract[i], ans); 
          }    
  
      } 
  }
      $("#screen")
      .children()
      .empty();
    $("#history").empty();  
      str = str.replace(/\s/g,"");
      console.log(str);
    $("#numberMarker").html(str);
    $("#oldHistory").html(str2 + " " + str);
    }
    
  });
  