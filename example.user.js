// ==UserScript==
// @name        theme detector for moodle
// @namespace   Violentmonkey Scripts
// @match       https://moodle.bbbaden.ch/*
// @grant       none
// @version     1.0
// @author      black-backdoor (https://github.com/black-backdoor)
//
// @require     https://github.com/BBBaden-Moodle-userscripts/MoodleThemeDetector/raw/main/MoodleThemeDetector.lib.user.js
//
// @description 03/01/2024, 20:10:39
// ==/UserScript==


const head = document.head;
const theme = MoodleThemeDetector.detectTheme(head);

console.log("Website theme:" + theme);