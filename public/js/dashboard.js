const blogFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();

  if(title && content) {
    const response = await fetch('/api/blog/', {
      method: 'POST',
      body: JSON.stringify(
        {
          title: title,
          content: content
        }
      ),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Please enter in both fields.");
    }
  }
};

document
  .querySelector('#post-btn')
  .addEventListener('click', blogFormHandler);