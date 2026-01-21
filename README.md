# Career Copilot Frontend

Static HTML/CSS/JS scaffold for job search, recommendations, skill-gap, and roadmap views. Pages pull shared navbar/footer partials via `assets/js/utils.js`.

## Structure
- Pages: index, login, register, dashboard, job-search, recommendations, skill-gap, career-roadmap, alerts, job-details
- Assets: CSS in `assets/css`, JS modules in `assets/js`
- Components: `components/navbar.html`, `components/footer.html`, `components/job-card.html`, `components/loader.html`

## Notes
- API calls stubbed in `assets/js/api.js` with `baseUrl` placeholder.
- Partial injection uses fetch; serve via http(s) to avoid CORS/file protocol issues.
