let isBlockingEnabled = false;

document.getElementById("enable").addEventListener("click", function() {
    isBlockingEnabled = true;
    alert("Tab blocking enabled!");
});

document.getElementById("disable").addEventListener("click", function() {
    isBlockingEnabled = false;
    alert("Tab blocking disabled!");
});

window.addEventListener("beforeunload", function(event) {
    if (isBlockingEnabled) {
        event.preventDefault();
        event.returnValue = "";
    }
});

window.open = function() {
    if (isBlockingEnabled) {
        alert("New tabs are blocked!");
        return null;
    } else {
        return window.__proto__.open.apply(window, arguments);
    }
};
