

// Toggle Area
document.getElementById('history-btn').addEventListener('click', function () {
    // console.log('History button clicked');

    const calculateArea = document.getElementById('calculate-area');
    calculateArea.classList.add('hidden');


    const historyArea = document.getElementById('history-area');
    historyArea.classList.remove('hidden');

    const assistantBtn = document.getElementById('assistant-btn');
    assistantBtn.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    const historyBtn = document.getElementById('history-btn');
    historyBtn.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

})


document.getElementById('assistant-btn').addEventListener('click', function () {
    // console.log('Assistant button clicked');

    const historyArea = document.getElementById('history-area');
    historyArea.classList.add('hidden');

    const calculateArea = document.getElementById('calculate-area');
    calculateArea.classList.remove('hidden');

    const assistantBtn = document.getElementById('assistant-btn');
    assistantBtn.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    const historyBtn = document.getElementById('history-btn');
    historyBtn.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
})