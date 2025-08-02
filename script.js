const changeText = document.getElementById('changeText');
const btnChangeText = document.getElementById('btnChangeText');
const resetChangeText = document.getElementById('resetChangeText');
let originalText = changeText.textContent;

btnChangeText.addEventListener('click', function() {
    changeText.textContent = 'Hello JavaScript';
});

resetChangeText.addEventListener('click', function() {
    changeText.textContent = originalText;
});