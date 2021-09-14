let grayBookmark = document.getElementById('gray-bookmark');
let greenBookmark = document.getElementById('green-bookmark');
let bookmarkColor = document.getElementById('bookmark-color');
var bookmarked = document.createTextNode("ed");
let backProject = document.getElementById('back-project');
let backgroundImage = document.getElementById('background-image');
let aboutSection = document.getElementById('about-this');
function bookMark() {
    if (greenBookmark.classList.contains('hidden')) {
        grayBookmark.classList.add('hidden');
        greenBookmark.classList.remove('hidden');
        bookmarkColor.classList.add('text-darkCyan');
        bookmarkColor.appendChild(bookmarked);
    } else {
        grayBookmark.classList.remove('hidden');
        greenBookmark.classList.add('hidden');
        bookmarkColor.classList.remove('text-darkCyan');
        bookmarkColor.removeChild(bookmarked);
    }
}
function backThisProject (){
    if(backProject.classList.contains('hidden')){
        backProject.classList.remove('hidden');
        backgroundImage.classList.add('opacity-50');
        aboutSection.classList.add('opacity-50');
    }
}
function closeModal (){
    if (backgroundImage.classList.contains('opacity-50')){
        backProject.classList.add('hidden');
        backgroundImage.classList.remove('opacity-50');
        aboutSection.classList.remove('opacity-50');
    }
}