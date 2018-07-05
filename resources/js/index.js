window.$ = window.jQuery = require('jquery');
window.BootStrap = require('bootstrap');

function LoadPage(PagePath){
  $(location).attr('href','../../pages/loading/index.html?RedirectPath='+PagePath)
};
