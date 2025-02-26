const storyText = document.getElementById('story-text');
const storyImage = document.getElementById('story-image');
const startButton = document.getElementById('next-button');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');
const tooltip = document.getElementById('tooltip');

function updateStory(text) {
    storyText.textContent = ''; // Clear existing text
    
    // Add typing effect with a for loop
    let i = 0;
    const typingSpeed = 30; // milliseconds per character
    
    const typingEffect = setInterval(() => {
        if (i < text.length) {
            storyText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect); // Stop when done
        }
    }, typingSpeed);
}

function changeImage(src) {
    storyImage.src = src;
}

function displayChoices(choice1Text, choice2Text, choice1Action, choice2Action) {
    choice1Button.textContent = choice1Text;
    choice2Button.textContent = choice2Text;

    choice1Button.onclick = choice1Action;
    choice2Button.onclick = choice2Action;

    choice1Button.style.display = 'inline-block';
    choice2Button.style.display = 'inline-block';
}

function hideChoices() {
    choice1Button.style.display = 'none';
    choice2Button.style.display = 'none';
}

function choiceOne() {
    updateStory("You decide to venture into the Forbidden Cavern, rumored to hold dark magic and guarded by a shadow entity. As you step inside, the air grows cold, and whispers echo through the darkness. In the center of the cavern lies a glowing fragment of the shattered crown. But standing in your way is a towering shadow entity with eyes like burning coals. The creature blocks your path—its dark aura pulsates with corruption.");
    changeImage('forbiddenCave.jpg');
    displayChoices('Fight', 'Bargain', fightEntity, bargainEntity);
}

function choiceTwo() {
    updateStory('You follow the map to the Sunken Ruins, hidden beneath an enchanted lake. As you descend into the watery depths, a serene figure appears—a siren who guards another piece of the crown. She offers her blessing to help you claim it, but her intentions are unclear. The blessing may grant you strength or curse you with transformation.');
    changeImage('sunkenRuins.jpg');
    displayChoices('Accept', 'Decline', acceptBlessing, declineBlessing);
}

function fightEntity() {
    updateStory('You draw your weapon and face the shadow entity. After an intense battle, you manage to defeat it, but at a cost—you have absorbed the entity’s dark energy. Power surges through your veins, but corruption gnaws at your soul.');
    changeImage('fight.jpg');
    displayChoices('Embrace the Power','Try to cleanse it',kingOfShadows,death1);
}

function bargainEntity() {
    updateStory('The shadow entity listens as you propose a deal. It offers you a piece of the crown in exchange for a dark pact. The power you seek is within your grasp, but the entity’s terms remain hidden.');
    changeImage('bargain.jpg');
    displayChoices('Break the Pact','Accept the Pact',death1,kingOfShadows);
}

function acceptBlessing() {
    updateStory('You accepted the blessing. The crown\'s power surges through you.');
    changeImage('accept.jpg');
    displayChoices('See your Fate',hero);
}

function declineBlessing() {
    updateStory('You declined the offer and You are able to steal it and escape but then you have a bounty on your head');
    changeImage('decline.jpg');
    displayChoices('See your Fate',death2);
}

function start() {
    updateStory('You are a young explorer with a thirst for adventure and tales of lost treasures. One afternoon, you stumble upon a dusty antique shop tucked away in a narrow alley. Among the cluttered shelves, your eyes catch a tattered map enclosed in a glass frame. The shopkeeper whispers of its legend—the path to the Shattered Crown, an ancient relic said to grant unimaginable power to the one who reforges it. However, every person who tried to claim it has met a mysterious end. Do you dare follow the map’s clues, knowing the risks? Your journey begins now.');
    changeImage('start.jpg');
    displayChoices('Forbidden Cave', 'Sunken Ruins', choiceOne, choiceTwo);
}

function kingOfShadows() {
    updateStory('You choose power. The darkness within you grows, reshaping your soul. With unmatched strength, you reforge the Shattered Crown, but the cost is steep. The land falls into shadow, and you are crowned the King of Shadows—a tyrant feared across kingdoms. The people whisper your name in fear, and though you wield immense power, loneliness is your only companion.');
    changeImage('kingOfShadow.jpg');
    hideChoices();
}

function death1() {
    updateStory('You search for a way to cleanse the corruption, but the dark energy proves too strong. The entity’s curse claims you, and your life fades into legend—a warning to those who crave power without caution.');
    changeImage('death1.jpg');
    hideChoices();
}
function death2() {
    updateStory('You search for a way to cleanse the corruption, but the dark energy proves too strong. The entity’s curse claims you, and your life fades into legend—a warning to those who crave power without caution.');
    changeImage('death1.jpg');
    hideChoices();
}
function hero() {
    updateStory('You search for a way to cleanse the corruption, but the dark energy proves too strong. The entity’s curse claims you, and your life fades into legend—a warning to those who crave power without caution.');
    changeImage('hero.jpg');
    hideChoices();
}
startButton.addEventListener('click', start);

storyImage.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
});

storyImage.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});