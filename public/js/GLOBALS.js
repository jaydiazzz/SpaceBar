window.addEventListener( 'keypress', (function() {
  var strToType = 'burgers',
      strTyped = '';
  return function( event ) {
      var character = String.fromCharCode(event.which);
      strTyped += character;
      if (strToType.indexOf(strTyped) === -1) strTyped = '';
      else if (strTyped === strToType) {
          strTyped = '';
          var burgers = document.createElement("div");
          document.body.appendChild(burgers);
          burgers.classList.add("raining");
          var h1 = document.createElement("h1"),
           h1t = document.createTextNode("IT'S RAINING BURGERS");
           h1.appendChild(h1t);
          document.querySelector(".raining").appendChild(h1t);
      }
  };
}()) );
