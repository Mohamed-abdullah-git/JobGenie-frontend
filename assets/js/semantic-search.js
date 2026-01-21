"use strict";

import { api } from "./api.js";
import { mountPartials, getQueryParam } from "./utils.js";

mountPartials();

const container = document.getElementById("job-detail");
const id = getQueryParam("id");

async function loadDetail() {
  if (!container) return;
  if (!id) {
    container.innerHTML = "<p class=\"muted\">No job selected.</p>";
    return;
  }
  try {
    const job = await api.get(`/jobs/${id}`);
    container.innerHTML = `
      <h2>${job.title || "Role"}</h2>
      <p class="muted">${job.company || "Company"} — ${job.location || "Remote"}</p>
      <p>${job.description || "No description yet."}</p>
    `;
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p class=\"muted\">Unable to load job.</p>";
  }
}

loadDetail();
