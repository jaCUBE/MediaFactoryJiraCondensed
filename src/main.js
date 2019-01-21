// ==UserScript==
// @name         MEDIA FACTORY: JIRA Kanban Board Condensed
// @namespace    http://jira.mediafactory.cz/
// @version      3.2.0
// @description  Make your eyes *not* to bleed with new board.
// @author       Jakub Rychecký <jakub@rychecky.cz>
// @match        *jira.mediafactory.cz/secure/RapidBoard.jspa?*rapidView=*
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        none
// ==/UserScript==

import JiraBoard from './JiraBoard';

$(() => {
    window.jiraBoard = new JiraBoard();
});
