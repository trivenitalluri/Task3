function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      const jokeText = `${data.setup} 😂 ${data.punchline}`;
      document.getElementById('joke').textContent = jokeText;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      document.getElementById('joke').textContent = 'Oops! Something went wrong. Try again.';
    });
}
