document.getElementById('fetch-btn').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch('/api/python');
        const data = await response.json();
        
        resultDiv.innerHTML = `
            <p><strong>Response Status:</strong> ${data.status}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">Error connecting to API: ${error.message}</p>`;
    }
});
