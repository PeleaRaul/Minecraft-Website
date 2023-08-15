var canvas; var context; var screenH; var screenW; var stars = []; var fps = 60; var numStars = 500;

$('document').ready(function() {
	screenH = $(window).height();
	screenW = $(window).width();
	canvas = $('#space');
	canvas.attr('height', screenH);
	canvas.attr('width', screenW);
	context = canvas[0].getContext('2d');
	for(var i = 0; i < numStars; i++) {
		var x = Math.round(Math.random() * screenW);
		var y = Math.round(Math.random() * screenH);
		var length = 1 + Math.random() * 1.5;
		var opacity = Math.random();
		var star = new Star(x, y, length, opacity);
		stars.push(star);
	}
	animateInterval = setInterval(animate, 1000 / fps);
});
function animate() {
	context.clearRect(0, 0, screenW, screenH);
	$.each(stars, function() {
		this.draw(context);
	})
}
function stopAnimation()
{
     clearInterval(animateInterval);
}
function Star(x, y, length, opacity) {
	this.x = parseInt(x);
	this.y = parseInt(y);
	this.length = parseInt(length);
	this.opacity = opacity;
	this.factor = 1;
	this.increment = Math.random() * .03;
}
Star.prototype.draw = function() {
	context.rotate((Math.PI * 1 / 10));
	context.save();
	context.translate(this.x, this.y);
	if(this.opacity > 1) {
		this.factor = -1;
	}
	else if(this.opacity <= 0) {
		this.factor = 1;
		
		this.x = Math.round(Math.random() * screenW);
		this.y = Math.round(Math.random() * screenH);
	}
		
	this.opacity += this.increment * this.factor;
	
	context.beginPath()
	for (var i = 5; i--;) {
		context.lineTo(0, this.length);
		context.translate(0, this.length);
		context.rotate((Math.PI * 2 / 10));
		context.lineTo(0, - this.length);
		context.translate(0, - this.length);
		context.rotate(-(Math.PI * 6 / 10));
	}
	context.lineTo(0, this.length);
	context.closePath();
	context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
	context.shadowBlur = 5;
	context.shadowColor = '#fff';
	context.fill();
	
	context.restore();
}

  /* 
© 2023 AppoDev's Minecraft Server Template. All rights reserved.

Statement/Declaration of Rights

Subject to the provisions of this notice, this website and all its content, information,
or material is the copyright of AppoDev's Minecraft Server Template, together with its licensors. Accordingly,
your use of our website or its services does not constitute any license to use the copyright in our website.

Except to the extent permitted by the applicable copyright law or AppoDev's Minecraft Server Template, 
any form of use, reproduction, or redistribution of part of all of the content, information, or material
on this website in any form is hereby prohibited without license or permission.

You may not, except otherwise with prior permission and express written consent by the AppoDev's Minecraft Server Template, 
copy, download, print, extract, exploit, adapt, edit, modify, republish, reproduce, rebroadcast, duplicate, distribute, 
or publicly display any of the content, information, or material on this website for non-personal or commercial purposes, 
except for any other use as permitted by the applicable copyright law.

You may also not transmit, host, or store any such content, information, or material in any form or through any means, 
including but not limited to photocopying, recording, or in any print, electronic or digital form, or on any other website.

However, you are permitted to copy the content, information, or material on this website for personal use, 
educational use of individual third parties, government use, or any other use permitted under the applicable 
copyright law while acknowledging this author AppoDev's Minecraft Server Template as the source of any such content, information, or material.

Subject to our terms & conditions, you are not permitted to post information or add content copyrighted by third parties. 
Pursuant to the Digital Millennium Copyright Act (DMCA), AppoDev's Minecraft Server Template will respond to takedown notices 
or abuse reports by copyright owners to remove any abusive or infringing content on this website.

AppoDev's Minecraft Server Template will not be responsible for the quality, accuracy, completeness,
or appropriateness of the content, information, or material on this website.

Removing any copyright claim or "this data" from the code, you may face applicable copyright laws!
*/