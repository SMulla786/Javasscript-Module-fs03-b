function BaharKaFunction() {
  var BaharKaVariable = "main bahar se hun";

  function AndarKaFunction() {
    console.log("andar se use bulaya - ", BaharKaVariable);
  }

  return AndarKaFunction();
}

var closure = BaharKaFunction();

closure();
