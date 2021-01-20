(function() {
    var keyListener = function(e) {
        if (!e.repeat && e.keyCode === 186) {
            // Find the selected frame's title link
            var targetURL = null
            var selectedFrame = $('.inlineFrame--selected').find('a.entryTitle')
            var openedArticle = $("[aria-label='Opened Article']").find('a.entryTitle')
            if (selectedFrame.length != 0) {
                targetURL = selectedFrame.attr('href')
            } else if (openedArticle.length != 0) {
                targetURL = openedArticle.attr('href')
            } else {
                console.log("No target URLs found")
            }

            if (targetURL != null){
                chrome.runtime.sendMessage({url: targetURL});
            }
        }
    }
  
    // Keydown only once
    window.addEventListener('keydown', keyListener, false);
  })();