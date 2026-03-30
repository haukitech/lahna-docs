@../CLAUDE.md

# Docs Instructions

Lahna Docs is a static documentation site built with Docusaurus 3. It lives in the `docs/` directory.

## Tooling

- Docusaurus 3.9.2, TypeScript config
- Blog is disabled — do not re-enable it
- Docs are served at the root path (`/`), not `/docs/`
- Run `npm run build` to verify the site builds without errors before considering work done
- Run `npm run lint` to check TypeScript (ESLint 9) and Markdown (markdownlint) — fix all errors before finishing

## Content Guidelines

- Write for end users of the platform, not for developers of Lahna itself
- Keep pages focused — one concept per page
- Use YAML code blocks for manifest examples
- Format Markdown tables with aligned columns so they are readable in plain text (non-rendered)
- Generated config files (`docusaurus.config.ts`, `sidebars.ts`, `package.json`, etc.) do not require copyright notices
- Markdown files (`.md`, `.mdx`) do not require copyright notices
- Use Mermaid diagrams when a visual representation clarifies the concept better than prose
