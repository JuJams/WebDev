# Portfolio Website - Sanjana Chowdary

## Overview
This is my **personal portfolio website**, showcasing my **projects, blogs, resume, and contact details**. The site is designed with a **gradient color palette**, stylish typography, and modern UI elements.

## Design & Aesthetic
- **Font:** SF UI Display, JetBrains Mono (for blog section)
- **Color Palette:**
  - `#f9e1e0` (Soft Pink)
  - `#feadb9` (Peachy Pink)
  - `#bc85a3` (Muted Purple)
  - `#9799ba` (Cool Blue-Gray)
  - `#4a7ba6` (Deep Blue)
- **Layout:** Clean, centered sections with subtle hover effects

## Tech Stack
- **HTML** (Structure)
- **CSS** (Styling, Flexbox for layout, gradients, and animations)
- **JavaScript** (Resume modal functionality)

## Features
### Home
- Displays my **name in large stylish text**
- Includes a **profile image**

### About Me
- Left side: **My Image**
- Right side: **Text with vertical scrolling**, highlighting my background and interests

### Projects
- Displays **thumbnails** with project names and descriptions
- Clickable links to live projects

### Blog
- **JetBrains Mono font** for coding-inspired look
- Styled blog post with title and engaging content

### Resume
- **Preview Image** (click to enlarge in a modal)
- **Download Button** (Outlined, turns blue on hover)

### Contact
- Clickable **Instagram, LinkedIn, and Email Icons**
- Icons resize on hover for a smooth UI effect

## Snippet of Code I Figured Out

One of the **most useful snippets** I worked on was the **gradient background styling** for the sections:


- I used MDN web docs for reference: [https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient]     
    background: linear-gradient(135deg, #f9e1e0 10%, #feadb9 100%);
This allows smooth color transitions, improving the overall aesthetics. I used W3Schools Gradient Guide for reference.

Additionally, I implemented the resume modal functionality in JavaScript:
    
    function openModal() {
    document.getElementById("resume-modal").style.display = "flex";}
    function closeModal() {
    document.getElementById("resume-modal").style.display = "none";}
This allows users to click on the resume preview to enlarge it while ensuring it closes when clicking outside.

## Next Steps
Yes, I am planning to expand this for my final project. If I had more time, I would:
- Add more blog posts.
- Host more projects.
- Improve UI animations and transitions.
- Enhance mobile responsiveness.
