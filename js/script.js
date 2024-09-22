

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

// Calculation Income and Expenses

document.getElementById('calculate-btn').addEventListener('click', function () {
    // console.log('Calculation button clicked');

    const income = getInputFieldValueById('income-field');
    const software = getInputFieldValueById('software-field');
    const courses = getInputFieldValueById('courses-field');
    const internet = getInputFieldValueById('internet-field');
    // console.table({income, software, courses, internet});

    const totalExpenses = software + courses + internet;
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);

    let remainingBalance = income - totalExpenses;
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
    // console.log(remainingBalance);

    const incomeSummary = document.getElementById('income-summary');
    incomeSummary.classList.remove('hidden');
})

// Calculation Monthly Savings

document.getElementById('calculate-savings-btn').addEventListener('click', function () {

    const savingsPerchantage = getInputFieldValueById('savings-field');
    console.log(savingsPerchantage);

    const income = getInputFieldValueById('income-field');
    const software = getInputFieldValueById('software-field');
    const courses = getInputFieldValueById('courses-field');
    const internet = getInputFieldValueById('internet-field');

    let remainingBalance = income - (software + courses + internet);
    console.log(typeof remainingBalance);
    
    // let savings = document.getElementById('savings');
    // savings.innerText = (savingsPerchantage * remainingBalance) / 100;
    // console.log(remainingBalance - savings);

    let totalSavings = parseFloat(document.getElementById('savings').innerText);
    totalSavings = (savingsPerchantage * remainingBalance) / 100;
    console.log(totalSavings);
    document.getElementById('savings').innerText = totalSavings.toFixed(2);




    document.getElementById('balance').innerText = (remainingBalance - totalSavings).toFixed(2);

})