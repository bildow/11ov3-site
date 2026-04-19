/* /js/app.js */
async function inject(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`failed to load ${url}`);
    el.innerHTML = await res.text();
    activateInjectedScripts(el);
  } catch (err) {
    console.error('[11ov3] partial load failed:', err);
  }
}

function activateInjectedScripts(root) {
  const scripts = root.querySelectorAll('script');
  for (const script of scripts) {
    const next = document.createElement('script');
    for (const { name, value } of script.attributes) {
      next.setAttribute(name, value);
    }
    if (script.textContent) {
      next.textContent = script.textContent;
    }
    script.replaceWith(next);
  }
}

function wireMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isHidden));
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    inject('#site-header', '/partials/header.html'),
    inject('#site-footer', '/partials/footer.html'),
  ]);
  wireMobileMenu();
});
