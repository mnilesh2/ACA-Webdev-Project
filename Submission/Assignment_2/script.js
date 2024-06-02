let myDiv = document.getElementById('box');


myDiv.addEventListener('mouseover', function() {
    myDiv.style.backgroundColor = 'red';
});
myDiv.addEventListener('mouseout', function() {
    myDiv.style.backgroundColor = null;
});