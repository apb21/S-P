function ShowLogo(){
  var config1 = liquidFillGaugeDefaultSettings();
  config1.textSize = 0;
  config1.displayPercent = false;
  config1.waveRise = false;
  config1.waveHeight = 0.1;
  config1.waveAnimateTime = 6000;
  var gauge1 = loadLiquidFillGauge("loading-gauge", 60, config1);
};
function RedirectToPage(){
  var RedirectPage = window.location.href.split("?").pop().split('=').pop();
  window.setTimeout(function(){window.location.href=RedirectPage;},3000);
};
ShowLogo();
/*
$( window ).on('resize',function(){
  location.reload()
});
*/
RedirectToPage();
