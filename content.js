(function() {
    var keyListener = function(e) {
        if (e.keyCode === 186) {
            // Find the selected frame's title link
            var selectedFrame = $('.inlineFrame--selected').find('a.entryTitle')
            if (selectedFrame.length === 0) {
                // No selected frame
                console.log("No selected frame found")
            } else {
                var targetURL = selectedFrame.attr('href')
                chrome.runtime.sendMessage({url: targetURL});
            }
        }
    }
  
    // Need to be a keydown event to prevent feedly's nonsense
    window.addEventListener('keydown', keyListener, false);
  })();