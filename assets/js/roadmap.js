"use strict";

import { api } from "./api.js";
import { mountPartials } from "./utils.js";

mountPartials();

const goalInput = document.getElementById("goal");
const button = document.getElementById("roadmap-btn");
const output = document.getElementById("roadmap");

if (button && goalInput && output) {
  button.addEventListener("click", async () => {
    output.textContent = "Generating...";
    try {
      const result = await api.post("/roadmap", { goal: goalInput.value });
      output.innerHTML = `<div class="ai-output">${result.plan || "No plan yet."}</div>`;
    } catch (err) {
      console.error(err);
      output.textContent = "Unable to generate roadmap.";
    }
  });
}
