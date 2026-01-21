"use strict";

import { api } from "./api.js";
import { mountPartials } from "./utils.js";

mountPartials();

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await api.post("/auth", data);
      alert("Success");
    } catch (err) {
      console.error(err);
      alert("Auth failed");
    }
  });
}
