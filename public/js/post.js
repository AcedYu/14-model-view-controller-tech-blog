const commentFormHandler = async (event) => {
  event.preventDefault();
  const content = document.querySelector('#comment').value.trim();
  const postId = document.querySelector('#username').getAttribute('postid');

  if (content && postId) {
    const response = await fetch('/api/comment/', {
      method: 'POST',
      body: JSON.stringify(
        {
          content: content,
          blog_id: postId
        }
      ),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Please enter content before submitting.");
    }
  }
};

document
  .querySelector('#comment-btn')
  .addEventListener('click', commentFormHandler);