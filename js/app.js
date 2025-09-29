/* /js/app.js */
async function inject(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(url);
  el.innerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', () => {
  inject('#site-header', '/partials/header.html');
  inject('#site-footer', '/partials/footer.html');
});
