$(window).on('load',function(){
	setTimeout(function(){ 
	$('.page-loader').fadeOut('slow');
	},500);
});

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
	
	if (!isMobile()) {
	//place script you don't want to run on mobile here
	//TRY YOUR SCRIPT AS FOLLOWING WAY!!!
	document.write('<script src="assets/animation.js"></script>');
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