
const stopWatchView = document.querySelector('#stop-watch-view');
console.log('id', stopWatchView);

const pTag = document.querySelector('p');
console.log('pTag', pTag);

const divClass = document.querySelector('.my-class');
console.log("divClass", divClass);

const allParagraphs = document.querySelectorAll('p');
console.log('allParagraphs', allParagraphs);

const allListItems = document.querySelectorAll('.list-item');
console.log('all list Items', allListItems);

let counter = 1;
allListItems.forEach(function (listItem) {
    console.log('list item', listItem);
    listItem.innerHTML = counter++;
});

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// run for each element in the array
arr.forEach(function (value) {
    console.log(value);
});