function reverseString() {
    const input = document.getElementById('inputText').value;
    const reversed = input.split('').reverse().join('');
    const resultDiv = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');

    resultDiv.textContent = reversed;
    copyBtn.style.display = reversed ? 'block' : 'none';
}

function copyResult() {
    const text = document.getElementById('result').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyBtn');
        const original = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => btn.textContent = original, 1500);
    });
}