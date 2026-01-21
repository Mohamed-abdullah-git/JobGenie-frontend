"use strict";

import { api } from "./api.js";
import { mountPartials } from "./utils.js";

mountPartials();

const list = document.getElementById("recommendations");

async function loadRecommendations() {
  if (!list) return;
  try {
    const data = await api.get("/recommendations");
    list.innerHTML = data
      .map((rec) => `
        <article class="job-card">
          <h3>${rec.title || "Role"}</h3>
          <p class="muted">${rec.reason || "Match"}</p>
        </article>
      `)
      .join("");
  } catch (err) {
    console.error(err);
    list.innerHTML = "<p class=\"muted\">No recommendations yet.</p>";
  }
}

loadRecommendations();
