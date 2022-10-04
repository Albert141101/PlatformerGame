$(document).ready(() => {
    let gameName = $("<h1/>").appendTo(document.querySelector('.menu'));
    let buttonPlay = $("<button/>").attr("id", "setTimeout").appendTo(document.querySelector('.menu'));
    let Start = $("#setTimeout");

    gameName.text('Mickey Mouse');
    buttonPlay.text('Play');
    Start.click(changeView);
});