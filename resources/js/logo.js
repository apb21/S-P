var DomBody = document.getElementById('loading-div');
var two = new Two({fullscreen:true}).appendTo(DomBody);
var Rect1 = two.makeRectangle(100,100,100,100);
//Rect1.fill('black');
//Rect1.noStroke();
two.update();
