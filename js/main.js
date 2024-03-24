
    document.addEventListener("mousemove", parallax);
    function parallax(e){
      document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 300;
        var y = (e.clientY * moving_value) / 300;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }




// Modal 

var modal = document.getElementById('modal');
var modalClose = document.getElementById('close');
modalClose.addEventListener('click', function() {

	modal.style.display = 'none';
})


//  global handler

document.addEventListener('click', function(e) {
	if(e.target.className.indexOf('small-img') !== -1){
		var img = e.target;
		var modalImg = document.getElementById('modal-content');
		var captionText = document.getElementById('caption')
		modal.style.display = 'block';
		modalImg.src = img.src;
		captionText.innerHTML = img.alt;
	}
});