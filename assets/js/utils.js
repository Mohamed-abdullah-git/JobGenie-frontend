"use strict";

export function mountPartials() {
  inject("#navbar", "components/navbar.html");
  inject("#footer", "components/footer.html");
}

export function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

async function inject(selector, url) {
  const target = document.querySelector(selector);
  if (!target) return;
  try {
    const res = await fetch(url);
    target.innerHTML = await res.text();
  } catch (err) {
    console.error("Failed to load partial", url, err);
  }
}
