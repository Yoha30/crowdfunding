let grayBookmark = document.getElementById('gray-bookmark');
let greenBookmark = document.getElementById('green-bookmark');
let bookmarkColor = document.getElementById('bookmark-color');
var bookmarked = document.createTextNode("ed");
let backProject = document.getElementById('back-project');
let backgroundImage = document.getElementById('background-image');
let aboutSection = document.getElementById('about-this');
let logo = document.getElementById('logo');
let line = document.querySelector('#horizontal-line');
let firstSelcted = document.getElementById('selcted-section');
let inputOne = document.querySelector('input[name="bamboo"]:checked');
let secondLine = document.getElementById('second-line');
let secondSection = document.getElementById('second-section');
let position = document.getElementById('black-edition');
let button = document.getElementById('button');
let completed = document.getElementById('complete');
let mainSection = document.getElementById('main-section');
let analysis = document.getElementById('analysis-section');

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

function backThisProject() {
    if (backProject.classList.contains('hidden')) {
        backProject.classList.remove('hidden');
        backgroundImage.classList.add('opacity-50');
        aboutSection.classList.add('opacity-50');
        logo.classList.add('hidden');
    }
}

function closeModal() {
    if (backgroundImage.classList.contains('opacity-50')) {
        backProject.classList.add('hidden');
        backgroundImage.classList.remove('opacity-50');
        aboutSection.classList.remove('opacity-50');
        logo.classList.remove('hidden');
    }
}

function checked() {
    line.classList.remove('hidden');
    firstSelcted.classList.remove('hidden');
    firstSelcted.classList.add('flex');
}

function blackedition() {
    secondLine.classList.remove('hidden');
    secondSection.classList.remove('hidden');
    secondSection.classList.add('flex');
    position.classList.add('bottom-105');
    position.classList.remove('bottom-85');
}

function complete() {
    completed.classList.remove('hidden');
    backProject.classList.add('hidden');
    mainSection.classList.add('opacity-80');
    analysis.classList.add('opacity-60');

}
