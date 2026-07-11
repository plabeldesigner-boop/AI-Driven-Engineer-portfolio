/* --- Contact Form Submission Handler --- */

async function submitEngineForm(event) {
  event.preventDefault();

  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const subject = document.getElementById('form-subject').value;
  const message = document.getElementById('form-message').value;
  const statusBox = document.getElementById('form-status-box');
  const submitBtn = document.getElementById('submit-btn');

  // Disable button and show sending state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  statusBox.style.display = 'none';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, subject, message })
    });

    const result = await response.json();

    if (result.success) {
      statusBox.className = 'form-status-box success-msg';
      statusBox.textContent = 'Thank you! Your message has been sent successfully. I will get back to you shortly.';
      statusBox.style.display = 'block';
      
      // Clear form
      document.getElementById('contact-engine-form').reset();
    } else {
      statusBox.className = 'form-status-box error-msg';
      statusBox.textContent = `Error: ${result.message}`;
      statusBox.style.display = 'block';
    }
  } catch (err) {
    statusBox.className = 'form-status-box error-msg';
    statusBox.textContent = `Network Error: ${err.message}`;
    statusBox.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
}
