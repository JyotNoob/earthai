document.getElementById('questionForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('response');
    const answerParagraph = document.getElementById('answer');
    
    responseDiv.style.display = 'none';  // Hide previous responses
    
    // Sending the request to OpenAI's API using Fetch API
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your-openai-api-key'
        },
        body: JSON.stringify({
            model: "text-davinci-003",  // or GPT-4 if you're using that
            prompt: `You are an AI that knows everything about Earth. You can answer questions about Earth's geography, climate, environment, and more. Question: ${question}`,
            max_tokens: 150,
            temperature: 0.7
        })
    });
    
    const data = await response.json();
    const answer = data.choices[0].text.trim();
    
    answerParagraph.textContent = answer;
    responseDiv.style.display = 'block';  // Show the response
});
