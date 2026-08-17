# Profile Site Learning Roadmap

## Project intent

Build this as a first website and a learning project. Start with web fundamentals and only introduce tools when they solve a problem you understand.

## Initial technology choices

- Use plain HTML, CSS, and JavaScript.
- Host through GitHub Pages from the `karthik330.github.io` repository.
- Do not use Jekyll, Rails, React, Tailwind, or another framework for the first version.
- Jekyll and GitHub Pages Ruby gems may remain installed globally, but are not part of this project at this stage.

## Initial files

```text
karthik330.github.io/
├── index.html
├── style.css
└── script.js
```

## Suggested first-page content

- Name and role: Karthikeyan, Ruby on Rails Engineer
- Short introduction / About me
- Skills: Ruby, Rails, JavaScript, Testing
- Project cards
- Contact links: GitHub, LinkedIn, Email

The first goal is to understand how HTML provides structure and CSS changes appearance. Do not optimize for a polished design immediately.

## Phases

### 1. Simple static page

Create `index.html` and `style.css`. Build the profile content with clear sections.

### 2. Learn HTML while building

Use and understand headings (`h1`), paragraphs (`p`), semantic sections (`section`), and links (`a`) as the page needs them. Learn by adding real content rather than finishing a large course first.

### 3. Learn CSS and UI

Style the page and learn selectors, properties, the box model, spacing, borders, colors, fonts, Flexbox, CSS Grid, and basic UI/UX principles.

### 4. Make it responsive

Test the page on mobile. Learn responsive layouts, mobile-first thinking, media queries, relative units, viewport sizes, Flexbox, and Grid.

### 5. Add JavaScript interactions

Only after HTML and CSS feel comfortable. Possible exercises: dark mode, project filtering, and smooth-scrolling navigation.

### 6. Use GitHub data

Use the GitHub API to retrieve repositories, stars, languages, and descriptions, then render project data dynamically. This is a JavaScript learning exercise.

### 7. Introduce a framework later

Consider React or Next.js only when repetition or UI complexity reveals the problem a framework solves (for example, repeated project cards).

## Workflow

Use Git throughout. After each meaningful improvement, commit and push; GitHub Pages will deploy the static site.

```bash
git add .
git commit -m "Add projects section"
git push
```

## Desired progression

HTML structure -> CSS/UI -> responsive design -> JavaScript interaction -> GitHub API dynamic data -> React/Next.js if needed.
