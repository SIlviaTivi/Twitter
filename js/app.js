
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
     spanCount.style.color = 'rgb(68, 48, 73)';
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
    newDiv.textContent = time() + ' |  ' +dataValue;
    newDiv.classList.add('new-style');
    <!--limpiar data-->
    data.value = "";

}

function time() {
	var getTime = new Date();
	var hours = getTime.getHours();
	var minutes = getTime.getMinutes();
  var time;

		if (hours >= 12 && hours <= 24) {
		time = hours + ':' + minutes  + ' PM';
	} else {
		time = hours + ':' + minutes  + ' AM';
	}
	return time;
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
