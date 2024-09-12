function openChatWindow() {
    var chatWindow = document.getElementsByClassName("outer__wrapper")[0];
    if (chatWindow.style.display === "block") {
        chatWindow.style.display = "none";
    } else {
        chatWindow.style.display = "block";
    }
}