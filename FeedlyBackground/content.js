(function() {
    var keyListener = function(e) {
        if (!e.repeat && e.keyCode === 186) {
            // Find the selected frame's title link
            var targetURL = null
            var inlinedFrame = $('.inlineFrame--selected').find('a.entryTitle')
            var openedArticle = $("[aria-label='Opened Article']").find('a.entryTitle')
            var selectedArticle = $('.entry--selected').find('a.entry__title')
            if (inlinedFrame.length != 0) {
                targetURL = inlinedFrame.attr('href')
            } else if (openedArticle.length != 0) {
                targetURL = openedArticle.attr('href')
            } else if (selectedArticle.length != 0) {
                targetURL = selectedArticle.attr('href')  
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