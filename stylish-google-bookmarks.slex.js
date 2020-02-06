// ==UserScript==
// @name            Stylish Google Bookmarks
// @author          hirohiro716
// @description     Add Google Bookmarks button on body.
// @description:ja  Body要素にGoogleBookmarksボタンを表示する。
// @include         http://*
// @include         https://*
// @version         1.0
// @require         jquery
// @require         api
// @icon            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
// ==/UserScript==

var trigger = $("<div></div>");
trigger.css("position", "fixed");
trigger.css("right", "5px");
trigger.css("bottom", "5px");
trigger.css("z-index", "2147483646");
trigger.css("padding", "10px");
trigger.css("border", "1px solid #ccc");
trigger.css("background-color", "rgba(255,255,255,0.95)");
trigger.hide();
$("body").append(trigger);
var triggerImg = $("<img>");
triggerImg.attr("src", "data:image/png;base64,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");
triggerImg.css("width", "30px");
triggerImg.css("height", "30px");
trigger.append(triggerImg);
var triggerTimeout = null;
function fadeInTrigger() {
    if (triggerTimeout == null) {
        trigger.fadeIn();
    } else {
        clearTimeout(triggerTimeout);
    }
    triggerTimeout = setTimeout(function() {
        triggerTimeout = null;
        trigger.fadeOut();
    }, 1000);
}
$(window).bind("scroll", fadeInTrigger);

trigger.bind("click", function() {
    
    var xml;
	try {
		xml = $.parseXML(SLEX_httpGet("https://www.google.com/bookmarks/lookup?output=xml"));
	} catch (exception) {
		window.open("https://www.google.com/bookmarks/");
		return;
	}
    
    var backupOverflowValue = $("body").css("overflow");
    $("body").css("overflow", "hidden");
    $("body").attr("disabled", "disabled");
    
    var base = $("<div></div>");
    base.css("all", "initial");
    base.css("top", "0.5em");
    base.css("right", "0.5em");
    base.css("bottom", "0.5em");
    base.css("left", "0.5em");
    
    var list = $("<div></div>");
    list.css("height", "calc(100% - 80px - 4.5em)");
    
    createLists();
    
    var button = $("<button>");
    switch (navigator.language.substring(0, 2)) {
    case "ja":
        button.text("閉じる");
        break;
    default:
        button.text("close");
        break;
    }
    button.css("width", "100%");
    button.css("height", "3em");
    button.css("margin-top", "1em");
    button.css("border", "1px solid #ccc");
    button.css("border-radius", "0.5em");
    button.css("background-color", "#f2f2f2");
    button.css("font-size", "inherit");
    button.css("color", "#5F6368");
    button.css("box-shadow", "0 0 2px 1px #eee");
    base.append(button);
    button.bind("click", function() {
        close();
    });

    function createLists() {

    	$("head").html('<style type="text/css">::-webkit-scrollbar {width:0.5em;} ::-webkit-scrollbar-track{background:#f8f8f8; border-radius:0.2em;} ::-webkit-scrollbar-thumb{background:#4285f4; border-radius:0.2em;}</style>');
    	
        base.css("box-sizing", "border-box");
        base.css("position", "fixed");
        base.css("z-index", "2147483647");
        base.css("padding", "1.5em");
        base.css("border", "1px solid #ccc");
        base.css("background-color", "rgba(255,255,255,0.95)");
        base.css("line-height", "1em");
        base.css("font-size", "16px");
        base.css("color", "#333");
        $("body").append(base);
        
        var logo = $("<div></div>");
        logo.css("height", "60px");
        logo.css("margin-bottom", "20px");
        logo.css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYyLjE3NzEyMyAxMi43IgogICBoZWlnaHQ9IjQ4IgogICB3aWR0aD0iMjM1Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI4NC4zKSIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHI9IjUuODEzMTEyMyIKICAgICAgIGN5PSIyOTAuNjUyMzQiCiAgICAgICBjeD0iNi40ODEyODYiCiAgICAgICBpZD0icGF0aDgzOCIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojNTQ5MmVkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjI2NDU4MzMyIiAvPgogICAgPGNpcmNsZQogICAgICAgcj0iNC4wMDkwNDI3IgogICAgICAgY3k9IjI5Mi4yNTU5OCIKICAgICAgIGN4PSIxNy45Njg1MDQiCiAgICAgICBpZD0icGF0aDgzOC0zIgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiNlYTU1NDg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMTgyNDcxMjYiIC8+CiAgICA8Y2lyY2xlCiAgICAgICByPSI0LjAwOTA0MjMiCiAgICAgICBjeT0iMjkyLjI1NTk4IgogICAgICAgY3g9IjI3LjU3NDA5MSIKICAgICAgIGlkPSJwYXRoODM4LTMtMSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojZjljMDMwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjE4MjQ3MTI2IiAvPgogICAgPGNpcmNsZQogICAgICAgcj0iNC4wMDkwNDIzIgogICAgICAgY3k9IjI5Mi4yNTU5OCIKICAgICAgIGN4PSIzNy4xNzk2NzYiCiAgICAgICBpZD0icGF0aDgzOC0zLTEtOCIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojNTQ5MmVkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjE4MjQ3MTI2IiAvPgogICAgPGNpcmNsZQogICAgICAgcj0iNC4wMDkwNDIzIgogICAgICAgY3k9IjI5Mi4yNTU5OCIKICAgICAgIGN4PSI0Ny4zMTQ0MyIKICAgICAgIGlkPSJwYXRoODM4LTMtMS04LTkiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzNlYWM1YztmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4xODI0NzEyNiIgLz4KICAgIDxjaXJjbGUKICAgICAgIHI9IjQuMDA5MDQyMyIKICAgICAgIGN5PSIyOTIuMjU1OTgiCiAgICAgICBjeD0iNTcuNDQ5MTg0IgogICAgICAgaWQ9InBhdGg4MzgtMy0xLTgtOS02IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiNlYTU1NDg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMTgyNDcxMjYiIC8+CiAgPC9nPgo8L3N2Zz4K')");
        logo.css("background-position", "bottom left");
        logo.css("background-size", "auto 50px");
        logo.css("background-repeat", "no-repeat");
        logo.css("padding-left", "52px");
        logo.css("font-size", "20px");
        logo.css("font-weight", "bold");
        switch (navigator.language.substring(0, 2)) {
        case "ja":
            logo.text("Googleブックマーク");
            break;
        default:
            logo.text("Google Bookmarks");
            break;
        }
        base.append(logo);
        
        var hr = $("<hr>");
        hr.css("border", "none");
        hr.css("width", "100%");
        hr.css("height", "1px");
        hr.css("background-color", "#ccc");
        
        list.css("width", "98%");
        list.css("padding-right", "2%");
        list.css("overflow-y", "scroll");
        list.css("overflow-x", "hidden");
        
        var labelDivs = {};
        $(xml).find("bookmark").each(function() {
            var bookmark = $(this);
            var parent;
            if (bookmark.find("label").length == 0) {
                if (list.children().length > 0) {
                    list.append(hr.clone());
                }
                parent = list;
            } else {
                bookmark.find("label").each(function() {
                    var labelText = $(this).text();
                    var labelDiv = labelDivs[labelText];
                    if (labelDiv == undefined) {
                        if (list.children().length > 0) {
                            list.append(hr.clone());
                        }
                        var labelTitleDiv = $("<div></div>");
                        labelTitleDiv.text(labelText);
                        labelTitleDiv.attr("title", labelText);
                        labelTitleDiv.attr("class", "label_title");
                        labelTitleDiv.css("width", "100%");
                        labelTitleDiv.css("padding", "1em 0");
                        labelTitleDiv.css("cursor", "pointer");
                        list.append(labelTitleDiv);
                        setHoverEvent(labelTitleDiv);
                        var icon = $("<img>");
                        icon.attr("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzEwIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiCiAgIHk9IjBweCIKICAgeD0iMHB4IgogICB2ZXJzaW9uPSIxLjEiPjxkZWZzCiAgIGlkPSJkZWZzMTQiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPHJkZjpSREY+PGNjOldvcmsKICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPgo8cGF0aAogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIgogICBpZD0icGF0aDQiCiAgIGQ9Ik0gMTAsMTk2Ljc0Nzg1IFYgOTkzLjA0NjY4IEggOTkwIFYgMzE5LjI0Nzg1IEggNTYxLjMwMDc4IGwgLTEyMi41LC0xMjIuNSB6IiAvPgo8L3N2Zz4=");
                        icon.css("width", "1em");
                        icon.css("padding-right", "0.7em");
                        labelTitleDiv.prepend(icon);
                        labelDiv = $("<div></div>");
                        labelDiv.css("display", "none");
                        labelDiv.css("margin-left", "1em");
                        list.append(labelDiv);
                        labelDivs[labelText] = labelDiv;
                    }
                    labelDiv.append(hr.clone());
                    parent = labelDiv;
                });
            }
            var url = bookmark.find("url").text();
            var item = $("<div></div>");
            item.css("width", "100%");
            item.css("padding", "1em 0");
            item.css("cursor", "pointer");
            item.bind("click", function() {
                navigate(url);
            });
            var itemText = $("<span></span>");
            switch (0) {
            case url.indexOf("http://"):
            case url.indexOf("https://"):
                var urlParts = url.split("/");
                var protocol = urlParts[0];
                var domain = urlParts[2];
                itemText.css("background-image", "url('" + "https://www.google.com/s2/favicons?domain=" + protocol + "//" + domain + "/')");
                itemText.css("background-position", "center left");
                itemText.css("background-repeat", "no-repeat");
                itemText.css("padding-left", "calc(16px + 0.7em)");
                break;
            case url.indexOf("javascript:"):
                itemText.css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzQwIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiCiAgIHk9IjBweCIKICAgeD0iMHB4IgogICB2ZXJzaW9uPSIxLjEiPjxkZWZzCiAgIGlkPSJkZWZzNDQiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPHJkZjpSREY+PGNjOldvcmsKICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPgo8cGF0aAogICBpZD0icGF0aDQiCiAgIGQ9Im0gNzIuNTk5NjA5LDE0OC44NDgzMiBjIC0zNC42LDAgLTYyLjU5OTYwOSwyNC4xMjUgLTYyLjU5OTYwOSw1My44NTE1NiB2IDczNi42MTUyMyBjIDAsMjkuNzI2NTcgMjcuOTk5NjA5LDUzLjkzNzUgNjIuNTk5NjA5LDUzLjkzNzUgSCA5MjcuNSBjIDM0LjUsMCA2Mi41OTk2MSwtMjQuMTI0NzYgNjIuNTk5NjEsLTUzLjkzNzUgViAyMDIuNjExOTkgYyAtMC4xLC0yOS42NDA0IC0yOC4wOTkyMywtNTMuNzYzNjcgLTYyLjY5OTIyLC01My43NjM2NyB6IE0gMzk1LjgwMDc4LDMzNi4yMDc2OSBoIDU5LjM5ODQ0IEwgNDU1LDYzOC45MDg4NiBjIDAsMjcuMiAtMi42MDA3OCw1MC40OTk2MSAtNy44MDA3OCw2OS41OTk2MSAtNS4yLDE5LjEgLTEyLjk5ODQ0LDM0LjQ5OTYxIC0yMy4zOTg0NCw0Ni41OTk2MSAtMTAuNSwxMS45IC0yMy42MDE1NiwyMC41OTk2MSAtMzkuMTAxNTYsMjYuMDk5NjEgLTE1LjYsNS41IC0zMy44LDguMzAwNzggLTU0LjUsOC4zMDA3OCAtMTguMiwwIC0zNC42OTg0NCwtMi44OTk2MSAtNDkuMzk4NDQsLTguNTk5NjEgLTE0LjcsLTUuNyAtMjcuMzAxNTYsLTEzLjg5OTYxIC0zNy42MDE1NiwtMjQuNTk5NjEgLTEwLjQsLTEwLjcgLTE4LjI5ODQ0LC0yMy42MDA3OCAtMjMuODk4NDQsLTM4LjgwMDc4IC01LjYsLTE1LjIgLTguNDAwMzksLTMyLjIwMDc4IC04LjQwMDM5LC01MC44MDA3OCB2IC0xMi4xOTkyMiBoIDU4LjY5OTIyIGMgMCw1NC42IDIwLjIwMTE3LDgyIDYwLjcwMTE3LDgyIDEwLjQsMCAxOS41OTkyMiwtMS4xOTkyMiAyNy42OTkyMiwtMy42OTkyMiA4LjEsLTIuNSAxNC45OTk2MSwtNy4yMDE1NiAyMC41OTk2MSwtMTQuMTAxNTYgNS42LC02LjkgOS45MDA3OCwtMTYuMzk5NjEgMTIuODAwNzgsLTI4LjU5OTYxIDIuOSwtMTIuMyA0LjQwMDM5LC0yOC4yOTk2MSA0LjQwMDM5LC00OC4wOTk2MSB6IG0gMjU1LjUsMTE1LjIwMTE3IGMgODQuOCwwIDEyNy44OTkyMiwzMC4xMDAzOSAxMjkuMTk5MjIsOTAuNDAwMzkgaCAtNTYuNjk5MjIgYyAtMiwtMzAuMSAtMjQuNzAxMTcsLTQ1LjIwMTE3IC02OC4yMDExNywtNDUuMjAxMTcgLTkuNywwIC0xOC41OTg4MywxLjAwMDM5IC0yNi43OTg4MywyLjkwMDM5IC04LjMsMS45IC0xNS4zMDAzOSw0LjcwMDc4IC0yMS40MDAzOSw4LjMwMDc4IC02LjEsMy42IC0xMC44MDExNyw3Ljk5ODgzIC0xNC4yMDExNywxMy4yOTg4MyAtMy4zLDUuMyAtNSwxMS40MDAzOSAtNSwxOC40MDAzOSAwLDYuMyAwLjgwMDM5LDExLjUgMi40MDAzOSwxNS41IDEuNiw0LjEgNS4zMDA3OCw3LjkwMDM5IDExLjMwMDc4LDExLjQwMDM5IDYsMy41IDE0LjgsNi44OTg4MyAyNi41LDEwLjI5ODgzIDExLjcsMy40IDI3LjcsNy41IDQ4LDEyLjUgMTkuNiw0LjcgMzYuNiw5LjYwMTE3IDUxLDE0LjcwMTE3IDE0LjQsNS4xIDI2LjMwMDM5LDExLjIwMDM5IDM1LjkwMDM5LDE4LjQwMDM5IDkuNiw3LjIgMTYuNTk4ODMsMTUuODk4ODMgMjEuMjk4ODMsMjYuMjk4ODMgNC42LDEwLjMgNi45MDAzOSwyMy4zMDA3OCA2LjkwMDM5LDM4LjgwMDc4IDAuMywxNC40IC0yLjgwMDM5LDI3Ljc5OTIyIC04LjkwMDM5LDQwLjE5OTIyIC02LjEsMTIuNCAtMTQuNjk4ODMsMjMuMjAwMzkgLTI1Ljc5ODgzLDMyLjQwMDM5IC0xMS4xLDkuMiAtMjQuNzAxMTcsMTYuMzk5NjEgLTQwLjcwMTE3LDIxLjU5OTYxIC0xNS45LDUuMSAtMzMuODk5MjIsNy43MDExNyAtNTMuNjk5MjIsNy43MDExNyAtODcuNywwIC0xMzQuMDAxMTcsLTM0LjYwMDM5IC0xMzguNzAxMTcsLTEwMy45MDAzOSBoIDU3LjcwMTE3IGMgMC4zLDM5LjEgMjcuMTAwMzksNTguNzk4ODMgODAuNDAwMzksNTguNzk4ODMgMTEuOCwwIDIyLjQsLTEuMjk4NDQgMzEuNSwtMy44OTg0NCA5LjEsLTIuNiAxNi42OTkyMiwtNi4yMDA3OCAyMi42OTkyMiwtMTAuODAwNzggNi4xLC00LjYgMTAuNzAwMzksLTEwLjAwMDc4IDEzLjkwMDM5LC0xNi4zMDA3OCAzLjEsLTYuMiA0LjY5OTIyLC0xMi44OTg4MyA0LjY5OTIyLC0yMC4yOTg4MyAwLC03LjggLTEuMTk5NjEsLTEzLjg5OTYxIC0zLjU5OTYxLC0xOC41OTk2MSAtMi40LC00LjcgLTcuMDAwMzksLTguOSAtMTMuOTAwMzksLTEyLjUgLTYuOCwtMy42IC0xNi40LC03LjIwMTU2IC0yOC41LC0xMC42MDE1NiAtMTIuMiwtMy42IC0yNy45OTk2MSwtNy45IC00Ny41OTk2MSwtMTMgLTE5LjEsLTQuNyAtMzUuNjAwMzksLTkuNDk5MjIgLTQ5LjQwMDM5LC0xNC4xOTkyMiAtMTMuOSwtNC43IC0yNS4xOTk2MSwtMTAuMzk5NjEgLTM0LjA5OTYxLC0xNy4wOTk2MSAtOC45LC02LjggLTE1LjUwMDc4LC0xNS4xMDAzOSAtMTkuODAwNzgsLTI0LjkwMDM5IC00LjMsLTkuOSAtNi4zOTg0NCwtMjIuNCAtNi4zOTg0NCwtMzcuNSAwLC0xMy4zIDIuNzk4NDQsLTI1LjYwMDM5IDguMzk4NDQsLTM2LjkwMDM5IDUuNiwtMTEuNCAxMy42MDE1NiwtMjEuMiAyNC4xMDE1NiwtMjkuNSAxMC40LC04LjMgMjMuMDk4NDQsLTE0Ljc5OTYxIDM3Ljg5ODQ0LC0xOS41OTk2MSAxNSwtNC43IDMxLjUwMTU2LC03LjA5OTYxIDQ5LjYwMTU2LC03LjA5OTYxIHoiCiAgIHN0eWxlPSJmaWxsOiNjY2NjY2M7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9Imc4IgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMTAiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImcxMiIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz48ZwogICBpZD0iZzE0IgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMTYiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImcxOCIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz48ZwogICBpZD0iZzIwIgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMjIiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImcyNCIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz48ZwogICBpZD0iZzI2IgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMjgiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImczMCIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz48ZwogICBpZD0iZzMyIgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMzQiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImczNiIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz4KPHBhdGgKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIKICAgaWQ9InBhdGg0LTMiCiAgIGQ9Im0gMTA2OS4zMjIsMTk5LjMwODIxIHYgNzk2LjI5ODg0IGggOTgwLjAwMDEgViAzMjEuODA4MjEgaCAtNDI4LjY5OTMgbCAtMTIyLjUsLTEyMi41IHoiIC8+PC9zdmc+')");
                itemText.css("background-position", "center left");
                itemText.css("background-size", "auto 1.2em");
                itemText.css("background-repeat", "no-repeat");
                itemText.css("padding-left", "1.7em");
            }
            itemText.css("max-width", "100%");
            itemText.css("white-space", "nowrap");
            itemText.text(bookmark.find("title").text());
            item.append(itemText);
            setHoverEvent(item);
            $(parent).append(item);
        });
        base.append(list);
        
        $("div.label_title").bind("click", function() {
            var labelText = $(this).attr("title");
            var labelDiv = labelDivs[labelText];
            labelDiv.fadeToggle();
        });
        
    }
    
    function navigate(url) {
        location.href = url;
        close();
    }
    
    function setHoverEvent(element) {
        $(element).bind("mouseover", function() {
            $(this).css("opacity", "0.6");
        });
        $(element).bind("mouseout", function() {
            $(this).css("opacity", "1");
        });
    }
    
    function close() {
        $("body").removeAttr("disabled");
        $("body").css("overflow", backupOverflowValue);
        base.remove();
    }
    
});

