// Saves options to chrome.storage
function save_options() {
    var status = document.getElementById('status');
    var hotkey = document.getElementById('hotkey').value.trim();
    if (hotkey.length != 1) {
        status.textContent = 'Hotkey must be single character.';
        setTimeout(function () {
            status.textContent = '';
        }, 2000);
        return;
    }
    chrome.storage.sync.set({ hotkey: hotkey }, function () {
        // Update status to let user know options were saved.
        status.textContent = 'Hotkey saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 2000);
    });
}

function restore_options() {
    // Use default hotkey ';'
    chrome.storage.sync.get({ hotkey: ';' }, function (items) {
        document.getElementById('hotkey').value = items.hotkey;
    });
};

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('set').addEventListener('click', save_options);