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
    
    var xml = $.parseXML(SLEX_httpGet("https://www.google.com/bookmarks/lookup?output=xml"));
    
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
    list.css("height", "calc(100% - 4.5em)");
    
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
    button.css("font-size", "inherit");
    button.css("box-shadow", "0 0 2px 1px #eee");
    base.append(button);
    button.bind("click", function() {
        close();
    });

    function createLists() {
        
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
        
        var hr = $("<hr>");
        hr.css("border", "none");
        hr.css("width", "100%");
        hr.css("height", "1px");
        hr.css("background-color", "#ccc");
        
        list.css("width", "100%");
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
                        var icon = $("<span></span>");
                        icon.text("■");
                        icon.css("width", "0.8em");
                        icon.css("padding-right", "0.5em");
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
                itemText.css("padding-left", "calc(16px + 0.5em)");
                break;
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

