function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const roln =formData.get('rol');
    const num = formData.get('num');
    
    const displayData = document.getElementById('displayData');
    displayData.innerHTML = `
        <h2>Registration Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>roll no:</strong>${roln}</p>
        <p><strong>Number:</strong> ${num}</p>
    `;
}
