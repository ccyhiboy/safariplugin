// ==UserScript==
// @name         Redirect Google.cn to Google.com
// @namespace    https://github.com/
// @version      1.1
// @description  自动将国行 Safari 默认的 Google.cn 搜索重定向到 Google.com
// @match        *://*.google.cn/*
// @match        *://google.cn/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = new URL(window.location.href);
    if (currentUrl.hostname.endsWith('google.cn')) {
        currentUrl.hostname = currentUrl.hostname.replace(/google\.cn$/, 'google.com');
        window.location.replace(currentUrl.toString());
    }
})();