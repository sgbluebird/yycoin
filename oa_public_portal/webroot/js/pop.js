/*
 * Compressed by JSA(www.xidea.org)
 */
function addEventCommon($,_,A){if($.attachEvent)$.attachEvent("on"+_,A);else if($.addEventListener)$.addEventListener(_,A,true);else $["on"+_]=A}function parseIntInner($){if($==null||$=="")return 0;return parseInt($)}var g_center_handle,g_pop_h_old=80,g_pop_h=g_pop_h_old;function tip_start(){var A=document.getElementById("g_center_tip");if(!A)return;var $=document.getElementById("g_tip_content1"),_=document.getElementById("g_tip_content2"),B=document.getElementById("g_tip_flag");if($.innerHTML==""&&_.innerHTML=="")return;if(B.value=="1")return;else B.value="1";if(parseIntInner(A.style.height)==0){A.style.display="block";g_center_handle=setInterval("changeH('up')",2)}else g_center_handle=setInterval("changeH('down')",2)}function tip_hiden(){var $=document.getElementById("g_center_tip");if(!$)return;var _=document.getElementById("g_tip_flag");_.value="1";if(parseIntInner($.style.height)!=0)g_center_handle=setInterval("changeH('down')",2)}function changeH($){var _=document.getElementById("g_center_tip");if($=="up")if(parseIntInner(_.style.height)>g_pop_h)clearInterval(g_center_handle);else _.style.height=(parseIntInner(_.style.height)+8).toString()+"px";if($=="down")if(parseIntInner(_.style.height)<8){clearInterval(g_center_handle);_.style.display="none"}else _.style.height=(parseIntInner(_.style.height)-8).toString()+"px"}var timer1,timer2;function loadTip(){document.getElementById("g_center_tip").style.height="0px";var $=document.getElementById("g_tip_content1"),_=document.getElementById("g_tip_content2");if($.innerHTML==""&&_.innerHTML=="")return;else{if(timer1)clearTimeout(timer1);if(timer2)clearTimeout(timer2);timer1=setTimeout("tip_start()",300);timer2=setTimeout("tip_hiden()",8000)}}function $error($){if($==undefined&&Res._Public)reloadTip(Res._Public["REFUSE"],false);else reloadTip($,false)}function $sucess($){reloadTip($,true)}function reloadTip(_,$){if(_.length>45){var B=((_.length-45)/15)+1;g_pop_h=g_pop_h_old+B*12}else g_pop_h=g_pop_h_old;if($){document.getElementById("g_tip_content1").innerHTML=_;document.getElementById("g_tip_content2").innerHTML=""}else{document.getElementById("g_tip_content1").innerHTML="";document.getElementById("g_tip_content2").innerHTML=_}var A=document.getElementById("g_tip_flag");A.value="0";loadTip()}if(window.addEventCommon)window.addEventCommon(window,"load",loadTip)