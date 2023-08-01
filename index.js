import data from './data.json' assert { type: 'json' };

var resultsBreakdownContainer = document.getElementById('results__breakdown-container');

for (const d in data) {
    resultsBreakdownContainer.innerHTML += `<div class="results__summary-item flex--space-between border-radius-p5"><div class="results__group"><img src="${data[d].icon}" alt="">${data[d].category}</div>${data[d].score} / 100</div>`
}