Build a plain, resume-style single page at `/` — white background, dark text, system font, no animations or gradients.

## Changes

1. **src/routes/__root.tsx** — update head metadata:
   - title: "Piyush Prasad — Aspiring Cloud & DevOps Engineer"
   - description + og:title/og:description matching

2. **src/routes/index.tsx** — replace placeholder with the resume content:
   - Header: name (h1), title, contact line (email, phone, LinkedIn, GitHub as links)
   - Sections in order with `<h2>` headings and `<ul>` bullets:
     Summary, Experience, Projects (project link → https://kamleshprasad.xyz), Skills (comma list), Education, Certifications, Languages
   - Max width ~720px, centered, generous vertical spacing, `text-gray-900` on white, base font size ~16px, semantic HTML only

3. No new files, no dependencies, no images. Uploaded resume.pdf used only as content reference (already transcribed in the request).

## Style constraints
- Plain Tailwind utilities only: `max-w-2xl mx-auto px-6 py-12`, `text-gray-900`, `bg-white`, `space-y-8`, `list-disc pl-5`
- No shadcn components, no icons, no cards, no borders beyond a thin `<hr>` between header and body if useful
- Links: underlined, inherit color