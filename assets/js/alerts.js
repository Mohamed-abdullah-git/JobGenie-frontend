"use strict";

import { api } from "./api.js";
import { mountPartials } from "./utils.js";

mountPartials();

const form = document.getElementById("alerts-form");
const list = document.getElementById("alerts-list");

async function loadAlerts() {
  if (!list) return;
  try {
    const alerts = await api.get("/alerts");
    list.innerHTML = alerts
      .map((alert) => `<p class="muted">${alert.keywords || "Keywords"} — ${alert.location || "Any"}</p>`)
      .join("");
  } catch (err) {
    console.error(err);
    list.innerHTML = "<p class=\"muted\">No alerts yet.</p>";
  }
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await api.post("/alerts", data);
      loadAlerts();
    } catch (err) {
      console.error(err);
      alert("Unable to save alert");
    }
  });
}

loadAlerts();
