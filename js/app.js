
var data =  document.getElementById('message');
var button = document.getElementById('activeBtn');
var spanCount= document.getElementById('counter')


<!--funcion contador-->

function countLetters(){
  var valueCountLength = data.value.length;
  var valueCount = 140;
  for (var i = 0; i <= valueCountLength; i++) {
    showCount = valueCount-i;
    spanCount.textContent = showCount;
  }
  if (valueCountLength > 0 && valueCountLength < 119) {
     spanCount.style.color = 'green';
    } else if (valueCountLength >= 120 && valueCountLength <= 130) {
      spanCount.style.color = "orange";
    } else if (valueCountLength > 130 && valueCountLength <= 140) {
      spanCount.style.color = "red";
    }
  }

<!--limpiando contador-->
function cleanCounter(){
    spanCount.textContent = '';
}

function disabledButton(){
  if(data.value.length >140||data.value.length === 0){
     button.disabled = true;
  }else {
    button.disabled = false;
  }
}

<!--funcion conseguir data-->
function getData() {
    var dataValue = data.value;
    <!--nuevo div-->
    var newDiv = document.createElement('div');
    <!--data y estilo en nuevo div-->
    createTweet.appendChild(newDiv);
    newDiv.textContent = dataValue;
    newDiv.classList.add('new-style');
    <!--limpiar data-->
    data.value = "";

}

window.onload = function() {
  if(data.value.length === 0){
     button.disabled = true;
     button.style.background = "grey";

  }else {
    button.disabled = false;
    button.style.background = "red";

  }
  data.addEventListener('keyup', countLetters);
  data.addEventListener('keyup', disabledButton);
  button.addEventListener('click', getData);
  button.addEventListener('click', cleanCounter);
}
