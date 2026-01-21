"use strict";

import { api } from "./api.js";
import { mountPartials } from "./utils.js";

mountPartials();

const textarea = document.getElementById("profile");
const button = document.getElementById("analyze-btn");
const output = document.getElementById("skill-gap-results");

if (button && textarea && output) {
  button.addEventListener("click", async () => {
    output.textContent = "Analyzing...";
    try {
      const result = await api.post("/skill-gap", { profile: textarea.value });
      output.innerHTML = `<div class="ai-output">${result.summary || "No data"}</div>`;
    } catch (err) {
      console.error(err);
      output.textContent = "Unable to analyze.";
    }
  });
}
