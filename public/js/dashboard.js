const blogFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();
  const userId = document.querySelector('#username').getAttribute('userid');

  if(title && content) {
    const response = await fetch('/api/blog/', {
      method: 'POST',
      body: JSON.stringify({ title, content, userId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("Please enter in both fields.");
    }
  }
};

document
  .querySelector('#post-btn')
  .addEventListener('click', blogFormHandler);