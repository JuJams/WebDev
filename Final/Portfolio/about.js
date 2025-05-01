// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Each object in this array contains the ID of an element and the text that should be typed into it
  const typingData = [
    {
      elementId: "typedtext",
      text: "hey i'm sanjana :) i grew up loving simple things like plants, colors, books, and just making spaces feel cozy. i live in new york city now — it's loud and wild, but i find little peaceful corners where i can just breathe and notice small things most people miss."
    },
    {
      elementId: "typedtext2",
      text: "when i'm not out and about, you'll usually find me at home surrounded by my plants. taking care of them — watering, repotting, even talking to them sometimes lol — always calms me down. they're like my little peaceful buddies."
    },
    {
      elementId: "typedtext3",
      text: "i weirdly love cleaning and organizing. i'll start rearranging a whole closet randomly at midnight because it “felt like the right time.” making spaces feel clean, cozy, and alive just makes me so happy."
    },
    {
      elementId: "typedtext4",
      text: "i read a lot — sometimes novels, sometimes random articles, sometimes design books. i'm not super strict about it. if it looks interesting, i'll dive in. i love learning little things from everywhere."
    }
  ];

  // Loop through each item in the typingData array
  typingData.forEach(({ elementId, text }) => {
    // Get the DOM element where the text should be typed
    const destination = document.getElementById(elementId);
    let i = 0;
    const speed = 50; // Typing speed in milliseconds

    // This function creates the typewriter effect
    function typeWriter() {
      if (i < text.length) {
        // Add one character and a blinking cursor
        destination.innerHTML += text.charAt(i) + '|'; 
        i++;
        // Keep only one cursor by removing the last character before appending the next
        destination.innerHTML = destination.innerHTML.slice(0, -1); 
        // Schedule the next character
        setTimeout(typeWriter, speed); 
      } else {
        // When done, display the full text without the cursor
        destination.innerHTML = text; 
      }
    }

    // Start the typing animation for this element
    typeWriter(); 
  });
});