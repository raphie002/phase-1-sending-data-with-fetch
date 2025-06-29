// Add your code here
function submitData(name, email) {
  // Create a new div to display messages (id or error)
  const messageDiv = document.createElement('div');
  document.body.appendChild(messageDiv);

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ name: name, email: email })
  })
  .then(response => {
    if (!response.ok) {
      // If the response is not OK (e.g., 404, 500), throw an error
      // This will be caught by the .catch() block
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Test 2: Handle the Response - append new id to the DOM
    const idParagraph = document.createElement('p');
    idParagraph.textContent = `New user ID: ${data.id}`;
    messageDiv.appendChild(idParagraph);
    return data; // Return data for chaining if needed by tests
  })
  .catch(error => {
    // Test 3: Handle Errors - append error message to the DOM
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = `Error: ${error.message}`;
    messageDiv.appendChild(errorParagraph);
    console.error('There was a problem with the fetch operation:', error);
  });
}