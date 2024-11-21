document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    window.location.href = 'profile.html';
  } else {
    alert('Login failed!');
  }
});

function logout() {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}
