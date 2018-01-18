
$(document).ready(function(){

	// Portfolio Preview Toggles
	$('.preview-toggle').click(function(){
		event.preventDefault();
		$(this).parent().parent().next('.preview').toggleClass('active');
		$(this).toggleClass('active');
	});

	// Portfolio More Button
	$('.more-button').click(function(){
		event.preventDefault();
		$('.portfolio-post.archive').toggleClass('active');
		$(this).toggleClass('active');
	});
});



function init() {
	var imgDefer = document.getElementsByTagName('img');
	for (var i=0; i<imgDefer.length; i++) {
		if(imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
		}
	}
}
window.onload = init;


