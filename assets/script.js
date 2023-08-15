'use strict';
const currentDate = document.getElementById("currentdate"); currentDate.innerHTML = `${new Date().getFullYear()}`;
const CustomAlert = document.getElementById("nocopy");
$('img').on('dragstart', function(event) { event.preventDefault(); });

function click(event) {
    const template = document.getElementByID('#dns').content.cloneNode(true);
    const element = template.querySelector('.floating-text') //replace class with yours
    element.style.left = `${event.clientX}px`
    element.style.top = `${event.clientY}px`
    document.appendChild(element);
  };

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
   });

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        var CustomAlert = {};

        CustomAlert.alert = function(message, title) {
            document.body.innerHTML += '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

            var dialogoverlay = document.getElementById('dialogoverlay');
            var dialogbox = document.getElementById('dialogbox');
            var winH = window.innerHeight;

            dialogoverlay.style.height = winH + "px";
            dialogbox.style.top = "100px";
            dialogoverlay.style.display = "block";
            dialogbox.style.display = "block";

            document.getElementById('dialogboxhead').style.display = 'block';

            if (typeof title === 'undefined') {
                document.getElementById('dialogboxhead').style.display = 'none';
            } else {
                document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
            }

            document.getElementById('dialogboxbody').innerHTML = message;
            document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" id="customAlertOkButton">OK</button>';

            // Attach event listener to the parent element using event delegation
            document.getElementById('dialogboxfoot').addEventListener('click', function(event) {
                if (event.target.id === 'customAlertOkButton') {
                    CustomAlert.ok();
                }
            });
        };

        CustomAlert.ok = function() {
            var dialogbox = document.getElementById('dialogbox');
            var dialogoverlay = document.getElementById('dialogoverlay');
          
            dialogbox.style.display = "none";
            dialogoverlay.style.display = "none";
        };

        CustomAlert.alert("You are not allowed to enter context menu!", "Heads Up!");
    }
    return false;
};

function copyDns(event) {
  const element = document.querySelector('#dns');
  const textToCopy = element.value || element.textContent;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Text copied to clipboard:', textToCopy);
      showNotification('Text copied to clipboard', event.clientX, event.clientY);
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard:', error);
      showNotification('Failed to copy text', event.clientX, event.clientY);
    });
}

function showNotification(message, clickX, clickY) {
    const notification = document.createElement('div');
    notification.classList.add('floating-notification');
    notification.textContent = message;
    document.body.appendChild(notification);
  
    const notificationWidth = notification.offsetWidth;
    const notificationHeight = notification.offsetHeight;
  
    const notificationX = clickX - notificationWidth / 2;
    const notificationY = clickY + 10;
  
    notification.style.left = notificationX + 'px';
    notification.style.top = notificationY + 'px';
  
    let offsetY = 0;
    const moveDownInterval = setInterval(() => {
      offsetY += 1;
      notification.style.transform = `translateY(${offsetY}px)`;
  
      if (offsetY >= notificationHeight + 10) {
        clearInterval(moveDownInterval);
        notification.remove();
      }
    }, 10);
  }
  
  const specificElement = document.querySelector('#dns');
  specificElement.addEventListener('click', copyDns);


  $(document).ready(() => {
    let ip = $(".serverip").attr("data-ip");
    let port = $(".serverip").attr("data-port");
    if (port == "" || port == null) port = "25565";
    if (ip == "" || ip == null) return console.error("Error fetching player count - is the IP set correctly in the HTML?");
    updatePlayercount(ip, port);
    // Updates every minute (not worth changing due to API cache)
    setInterval(() => {
        updatePlayercount(ip, port);
    }, 60000);
});

const updatePlayercount = (ip, port) => {
    $.get(`https://api.bybilly.uk/api/players/${ip}/${port}`, (result) => {
        if (result.hasOwnProperty('online')) {
            $(".serverip").html(result.online);
        } else {
            $(".playercount").html("Server isn't online!");
        }
    });
};

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