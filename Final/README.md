# Final Portfolio Project

## Live Site
**[jujams.github.io](https://jujams.github.io)**

## Project Summary
This is a creative and interactive personal portfolio website built from scratch using HTML, CSS, and JavaScript. The site features five main pages: Landing, About Me, Skills, Projects, and Contact. Each section is uniquely designed to showcase different skills and work while integrating fun, animated, and responsive elements.

- **Landing page** uses a sun-and-soil metaphor with animations for a personal introduction.
- **About page** features a typewriter aniamtion with a grid layout for a clean and modern look.
- **Skills page** is styled as a Rubik’s Cube, with colorful interactive tiles and tooltip-style hovers.
- **Projects page** uses clickable ice cubes that "spill" into project overlays.
- **Contact page** features a floating bottle animation over a looping waves video background.

## Screen Recording

https://github.com/user-attachments/assets/663f1d90-65bc-4df8-be83-7ed3cc4c41e6


## 💡 Code Snippet I'm Proud Of

```js
// Typewriter effect for About page (about.js)
typingData.forEach(({ elementId, text }) => {
  const destination = document.getElementById(elementId);
  let i = 0;
  const speed = 50;

  function typeWriter() {
    if (i < text.length) {
      destination.innerHTML += text.charAt(i) + '|';
      i++;
      destination.innerHTML = destination.innerHTML.slice(0, -1);
      setTimeout(typeWriter, speed);
    } else {
      destination.innerHTML = text;
    }
  }

  typeWriter();
});
```

**Why it’s cool:**  
This custom typewriter function animates text across multiple sections of my About page, making the content feel more personal and alive. I’m proud of how it creates a smooth typing effect and handles multiple elements in sequence.

## Notes

### What I Struggled With
- Getting the coffe spill animation to work consistently on Projects page
- Getting animations to loop smoothly (e.g., floating bottles)
- Managing layout changes while keeping styles consistent (especially on the Projects and Skills pages)

### What I'm Proud Of
- The Rubik’s Cube skill layout with hover tooltips and animated expansion
- The floating bottles animation on the Contact page that complements the water theme
- The use of metaphor and thoughtful visual design throughout (plants, spill, cubes, bottles)
- Pulling off a clean JavaScript setup with no frameworks

### What I Would Add Next
- A 3D rubik’s cube for the Skills page to make space for new skills
- Real CMS-style content management for adding new projects dynamically
- Adding Blogs page with a blog post carousel
- Adding sound or hover feedback for more interactivity
- Making it mobile responsiveness 
- Changing the font to something that is animated and keeps the user immersed in the experience

---

Built with love, floating bottles, and many ice cubes! I am done with my final project for webdev with Sam! 
