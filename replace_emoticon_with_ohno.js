// ==UserScript==
// @name         替換所有噗浪表符成大野智拍手笑
// @version      0.2
// @description  將所有噗浪表符換成大野智拍手笑，當你很想念韓國阿姨的時候可以用
// @match        https://www.plurk.com/*
// @require      https://code.jquery.com/jquery-3.5.1.slim.js
// ==/UserScript==

// Your code here...

'use strict';

$(document).ready(replace_with_ohno);

function replace_with_ohno(){
	setInterval( () => {
		$(".emoticon_my").attr("src", "https://emos.plurk.com/8e67570973b3ff9a77888a773d974fec_w48_h48.gif");
	}, 5000);
}
