"use strict";

import { api } from "./api.js";
import { mountPartials } from "./utils.js";

mountPartials();

const results = document.getElementById("job-results");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-query");

async function renderJobs(items = []) {
  if (!results) return;
  if (!items.length) {
    results.innerHTML = "<p class=\"muted\">No jobs yet.</p>";
    return;
  }
  results.innerHTML = items
    .map((job) => `
      <article class="job-card">
        <h3>${job.title || "Role"}</h3>
        <p class="muted">${job.company || "Company"} — ${job.location || "Remote"}</p>
        <a class="btn ghost" href="job-details.html?id=${job.id || ""}">View</a>
      </article>
    `)
    .join("");
}

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", async () => {
    const query = searchInput.value.trim();
    try {
      const data = query ? await api.get(`/jobs?query=${encodeURIComponent(query)}`) : [];
      await renderJobs(data);
    } catch (err) {
      console.error(err);
      renderJobs([]);
    }
  });
}

renderJobs();
