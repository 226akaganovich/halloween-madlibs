document.getElementById('generateStory').addEventListener('click', function() {
    let adjective = prompt("Enter an adjective (e.g., spooky):");
    let noun1 = prompt("Enter a noun (e.g., pumpkin):");
    let verb1 = prompt("Enter a verb (e.g., jump):");
    let adjective2 = prompt("Enter another adjective (e.g., creepy):");
    let noun2 = prompt("Enter another noun (e.g., ghost):");
    let adverb = prompt("Enter an adverb (e.g., quickly):");
    let verb2 = prompt("Enter another verb (e.g., dance):");

    let story = `Once upon a time in a ${adjective} ${noun1}, a creature decided to ${verb1} through the ${adjective2} forest. Suddenly, it saw a ${noun2} that ${adverb} ${verb2}. They both celebrated Halloween together!`;
    
    document.getElementById('madLibStory').innerText = story;
});
