// Story Structure Object
const story = {
    start: {
        id: "start",
        text: [
            "You are a hero on a quest to reforge the legendary Crown of Echoes, shattered long ago. The kingdom's fate depends on your success. Your journey begins at the crossroads, where you must choose your first destination."
        ],
        image: "images/start.jpg",
        tooltip: "Three paths lie before you, each holding a different danger and piece of the crown.",
        choices: ["chainOfEchoes", "sunkenRuins", "whisperingGrove"]
    },
    
    // Chain of Echoes Path
    chainOfEchoes: {
        id: "chainOfEchoes",
        text: [
            "You travel to the ominous Chain of Echoes, a series of caverns where whispers of the past reverberate through the darkness. As you enter, shadows begin to coalesce around you.",
            "A voice speaks directly into your mind: 'Seeker of the crown, you have found the first fragment... but at what cost will you claim it?'",
            "The shadows offer you power—dark and ancient. You sense that this power comes with a price, but it might help you on your quest."
        ],
        image: "images/chain_of_echoes.jpg",
        tooltip: "The shadows seem to be studying you, waiting for your decision.",
        choices: ["acceptPower", "rejectPower"],
        clue: "The crown fragment glows with purple energy, responding to the darkness."
    },
    
    acceptPower: {
        id: "acceptPower",
        text: [
            "You reach out your hand and allow the shadows to envelop you. Power courses through your veins as ancient knowledge fills your mind.",
            "You feel the darkness changing you, becoming a part of you. The crown fragment levitates and hovers before you.",
            "Will you fully embrace this dark power, or attempt to contain it while taking only what you need?"
        ],
        image: "images/accept_power.jpg",
        tooltip: "The shadows cling to you eagerly, perhaps too eagerly.",
        choices: ["embraceDarkness", "containPower"],
        inventory: "Shadow essence"
    },
    
    embraceDarkness: {
        id: "embraceDarkness",
        text: [
            "You surrender completely to the darkness, allowing it to transform you. Power unlike anything you've ever known floods through your body.",
            "The crown fragment melds with your very being. You can feel the other fragments calling to you across the land.",
            "As you leave the Chain of Echoes, you notice your reflection in a pool of water—your eyes now glow with an unearthly light, and shadows seem to follow your every move."
        ],
        image: "images/embrace_darkness.jpg",
        tooltip: "You've changed fundamentally, and there may be no going back.",
        choices: ["kingOfShadowsPath"],
        inventory: "Crown fragment (corrupted)"
    },
    
    containPower: {
        id: "containPower",
        text: [
            "You struggle to maintain control, accepting only enough power to claim the crown fragment while resisting the shadows' complete influence.",
            "It takes all your willpower, but you manage to contain the darkness. The fragment comes to your hand, still glowing with purple energy.",
            "Though you've resisted total corruption, you can feel the shadows lingering at the edges of your consciousness, waiting for a moment of weakness."
        ],
        image: "images/contain_power.jpg",
        tooltip: "Your will is strong, but the shadows are patient.",
        choices: ["sunkenRuins", "whisperingGrove"],
        inventory: "Crown fragment (Chain of Echoes)"
    },
    
    rejectPower: {
        id: "rejectPower",
        text: [
            "You step back from the shadows, refusing their dark offer. 'I will find another way,' you declare firmly.",
            "The shadows writhe in apparent anger, but then seem to respect your decision. They part to reveal the crown fragment, untainted by their influence.",
            "As you take the fragment, you feel a sense of inner strength. The path ahead may be harder without the shadows' power, but your will remains your own."
        ],
        image: "images/reject_power.jpg",
        tooltip: "Sometimes refusing power requires more strength than accepting it.",
        choices: ["sunkenRuins", "whisperingGrove"],
        inventory: "Crown fragment (pure)"
    },
    
    // Sunken Ruins Path
    sunkenRuins: {
        id: "sunkenRuins",
        text: [
            "You journey to the Sunken Ruins, once a great temple now half-submerged in a murky lake. Legend says one of the crown fragments is hidden within its depths.",
            "As you wade through the flooded chambers, ancient mechanisms spring to life around you. The water begins to glow with an eerie blue light.",
            "You discover an underwater passage leading to a sealed chamber. The door bears inscriptions in an ancient tongue."
        ],
        image: "images/sunken_ruins.jpg",
        tooltip: "The water feels unnaturally warm against your skin.",
        choices: ["decipherRiddle", "forceEntry"],
        clue: "The inscription mentions 'transformation' and 'waters of change.'"
    },
    
    decipherRiddle: {
        id: "decipherRiddle",
        text: [
            "You study the ancient inscriptions carefully, attempting to decipher their meaning. It appears to be a riddle.",
            "The inscription reads: 'Speak the name of what is always changing yet remains the same, what dies each night and is reborn each morning.'",
            "What is your answer to the riddle?"
        ],
        image: "images/decipher_riddle.jpg",
        tooltip: "The answer might be something cyclical in nature.",
        userInput: true,
        inputAnswer: "moon",
        correctPath: "openChamber",
        wrongPath: "wrongAnswer"
    },
    
    wrongAnswer: {
        id: "wrongAnswer",
        text: [
            "As you speak your answer, the water around you bubbles ominously. Nothing happens for a moment, then suddenly the chamber begins to shake.",
            "Water rushes in from hidden channels, forcing you to swim quickly back the way you came. The passage seals behind you.",
            "You'll need to find another approach or perhaps search for more clues elsewhere before returning."
        ],
        image: "images/wrong_answer.jpg",
        tooltip: "Perhaps there are clues in other locations that could help.",
        choices: ["sunkenRuins", "chainOfEchoes", "whisperingGrove"]
    },
    
    openChamber: {
        id: "openChamber",
        text: [
            "You speak the word 'moon' and the ancient door rumbles open, revealing a chamber lined with luminescent crystals.",
            "In the center floats the crown fragment, suspended in a column of glowing water. As you approach, the water begins to swirl around you.",
            "The moment your fingers touch the fragment, the water envelops your arm. You feel a strange tingling sensation spreading through your body."
        ],
        image: "images/open_chamber.jpg",
        tooltip: "The water seems to be reacting to both you and the crown fragment.",
        choices: ["fightCurse", "embraceChange"]
    },
    
    forceEntry: {
        id: "forceEntry",
        text: [
            "Impatient with riddles, you use your strength to force the ancient door open. The stone groans in protest but eventually gives way.",
            "Water rushes through the opening, carrying you into a crystal-lined chamber. The crown fragment floats in a column of glowing water at the center.",
            "The disruption has triggered something—the water begins to surge around you with unnatural intensity. As you grab the fragment, the water envelops your body."
        ],
        image: "images/force_entry.jpg",
        tooltip: "Perhaps there was wisdom in the patient approach.",
        choices: ["fightCurse", "embraceChange"]
    },
    
    fightCurse: {
        id: "fightCurse",
        text: [
            "You feel your body changing—scales beginning to form on your skin, your lungs adapting to breathe water. Fighting against the transformation, you struggle to maintain your human form.",
            "The water seems almost alive, insistent on changing you. You have two options: try to resist completely, or seek a cure for what's happening to you.",
            "Your choice will determine whether you can maintain control of your destiny or be forever altered by the crown's power."
        ],
        image: "images/fight_curse.jpg",
        tooltip: "The changes may be inevitable, but perhaps they can be managed.",
        choices: ["resistTransformation", "findCure"],
        inventory: "Crown fragment (water-touched)"
    },
    
    resistTransformation: {
        id: "resistTransformation",
        text: [
            "You focus all your willpower on rejecting the transformation. For a moment, it seems to be working—the scales recede, your breathing normalizes.",
            "But then pain lances through your body. The fragment in your hand pulses with energy that courses through you. The water's magic is too powerful to deny completely.",
            "You manage to escape the ruins, but the transformation continues more slowly. You find yourself increasingly drawn to bodies of water, your humanity gradually slipping away."
        ],
        image: "images/resist_transformation.jpg",
        tooltip: "Some forces cannot be resisted, only directed.",
        choices: ["wandererPath"],
    },
    
    findCure: {
        id: "findCure",
        text: [
            "Accepting that you cannot stop the transformation through willpower alone, you focus on escaping the ruins to seek a cure.",
            "Legend speaks of healers in distant lands who might know how to reverse such magic. You must decide whether to prioritize your cure or continue seeking the remaining crown fragments.",
            "Either way, time is not on your side—the transformation progresses with each passing day."
        ],
        image: "images/find_cure.jpg",
        tooltip: "The crown's completion might itself offer a solution.",
        choices: ["seekHealers", "wandererPath"],
    },
    
    seekHealers: {
        id: "seekHealers",
        text: [
            "You journey to the fabled healers, but find only ruins—they have been gone for generations. In their abandoned dwelling, you discover ancient texts.",
            "The texts suggest that the transformation is not a curse but a gift—one that will allow you to access realms and powers beyond human understanding.",
            "But to complete this 'gift,' you would need to surrender your human form entirely. The choice is now yours."
        ],
        image: "images/seek_healers.jpg",
        tooltip: "What appears to be a curse may be a different kind of blessing.",
        choices: ["wandererPath", "embraceChange"]
    },
    
    embraceChange: {
        id: "embraceChange",
        text: [
            "Instead of fighting the transformation, you surrender to it. Your body adapts rapidly—gills form at your neck, your skin develops a faint iridescent sheen like scales.",
            "With the transformation comes new awareness. You can sense the currents of magic flowing through the world, particularly the pull of the remaining crown fragments.",
            "You are no longer fully human, but you have gained power beyond what your human form could contain. The waters of the ruins feel like home now."
        ],
        image: "images/embrace_change.jpg",
        tooltip: "Your new form grants both power and insight.",
        choices: ["returnToLand", "exploreDeeper"],
        inventory: "Crown fragment (water-blessed)"
    },
    
    returnToLand: {
        id: "returnToLand",
        text: [
            "Though the water calls to you, you choose to return to the surface world. Your transformation makes traveling on land uncomfortable but not impossible.",
            "You can sense the remaining crown fragments more clearly now. Their magic resonates with your changed form.",
            "People shrink away from your altered appearance, but your new abilities more than compensate for this isolation."
        ],
        image: "images/return_to_land.jpg",
        tooltip: "You straddle two worlds now, belonging fully to neither.",
        choices: ["whisperingGrove", "chainOfEchoes"]
    },
    
    exploreDeeper: {
        id: "exploreDeeper",
        text: [
            "Embracing your new aquatic nature, you dive deeper into the flooded ruins, discovering passages and chambers that would be inaccessible to humans.",
            "In the deepest chamber, you find an unexpected truth—the ruins were once home to an ancient civilization of water-dwellers, the original crafters of the crown.",
            "Their spirits recognize your transformed state and share ancient knowledge. You learn that the crown's true purpose is far different from what the surface dwellers believe."
        ],
        image: "images/explore_deeper.jpg",
        tooltip: "Some truths can only be found by those willing to dive into the unknown.",
        choices: ["wandererPath"],
        clue: "The crown was meant to bridge worlds, not to rule them."
    },
    
    // Whispering Grove Path
    whisperingGrove: {
        id: "whisperingGrove",
        text: [
            "The Whispering Grove looms before you, ancient trees with silver bark stretching toward the sky. Voices seem to travel on the wind, speaking in half-heard fragments.",
            "This sacred place is said to be home to the forest guardians who protect the third fragment of the crown. They are known to test those who seek their treasure.",
            "As you enter the grove, the whispers grow louder. 'Face your past,' they seem to say. 'Face your truth.'"
        ],
        image: "images/whispering_grove.jpg",
        tooltip: "The trees seem to bend slightly toward you, as if listening.",
        choices: ["faceGuardians", "listenWhispers"]
    },
    
    listenWhispers: {
        id: "listenWhispers",
        text: [
            "You sit quietly among the roots of a massive silver tree, focusing on the whispers. Gradually, they become clearer—they're speaking of your past deeds.",
            "Some remind you of moments of courage and compassion. Others speak of mistakes, failures, and regrets. All seem to be weighing your worthiness.",
            "A particularly loud whisper asks: 'Why do you seek the crown? Speak your true purpose.'"
        ],
        image: "images/listen_whispers.jpg",
        tooltip: "The grove seems to be evaluating your character.",
        userInput: true,
        inputValidator: function(input) {
            // This evaluates the intent behind the answer
            const input_lower = input.toLowerCase();
            if (input_lower.includes("power") || input_lower.includes("wealth") || input_lower.includes("glory")) {
                return "selfishPath";
            } else if (input_lower.includes("peace") || input_lower.includes("protect") || input_lower.includes("help") || input_lower.includes("heal") || input_lower.includes("restore")) {
                return "noblePathWhispers";
            } else {
                return "neutralPathWhispers";
            }
        }
    },
    
    selfishPath: {
        id: "selfishPath",
        text: [
            "The whispers grow harsh and accusatory as your true intentions are revealed. The trees seem to close in around you, their branches blocking the light.",
            "'The crown is not a tool for personal gain,' the voices admonish. 'You are not worthy of its power.'",
            "The grove begins to shift, the paths changing until you find yourself back at the entrance, expelled from the sacred place. You'll need to prove your worth elsewhere or return with more noble intentions."
        ],
        image: "images/selfish_path.jpg",
        tooltip: "Some treasures cannot be claimed by those with selfish hearts.",
        choices: ["chainOfEchoes", "sunkenRuins"]
    },
    
    neutralPathWhispers: {
        id: "neutralPathWhispers",
        text: [
            "The whispers consider your answer, neither approving nor condemning. The grove remains neutral, waiting to see your actions rather than judging your words.",
            "'Your purpose is unclear, even to yourself,' they observe. 'Seek clarity before seeking power.'",
            "The path forward opens, but it's clear the guardians will be watching your choices carefully."
        ],
        image: "images/neutral_path.jpg",
        tooltip: "Actions speak louder than words to the ancient guardians.",
        choices: ["faceGuardians"]
    },
    
    noblePathWhispers: {
        id: "noblePathWhispers",
        text: [
            "The whispers grow warm and approving. The silver trees seem to glow faintly in response to your noble intentions.",
            "'Your heart speaks truth,' they acknowledge. 'But intention must be matched with courage and wisdom.'",
            "The path deeper into the grove clears before you, leading toward a shimmering clearing where the guardians await."
        ],
        image: "images/noble_path_whispers.jpg",
        tooltip: "A worthy heart is the first step toward a worthy quest.",
        choices: ["meetGuardians"],
        clue: "The guardians value sacrifice made for others above all else."
    },
    
    faceGuardians: {
        id: "faceGuardians",
        text: [
            "You stride confidently into the heart of the grove, calling out to the guardians to face you directly. The whispers cease abruptly, and an unnatural silence falls.",
            "Three figures materialize before you—neither fully human nor entirely spirit. They wear armor of bark and leaves, their eyes ancient and knowing.",
            "'Few call us forth so boldly,' the central guardian speaks. 'Are you here to be tested, or merely to take?'"
        ],
        image: "images/face_guardians.jpg",
        tooltip: "Boldness has brought you face to face with the guardians, but what comes next?",
        choices: ["acceptTest", "demandFragment"]
    },
    
    meetGuardians: {
        id: "meetGuardians",
        text: [
            "Following the path to the clearing, you find three guardians waiting for you. Unlike the imposing figures of legend, they appear as elderly caretakers of the forest, wise and gentle.",
            "'We have listened to your heart,' the eldest says. 'But the crown fragment cannot be given lightly, even to one with good intentions.'",
            "'Will you accept our test?' they ask. 'To prove not just your worth, but your understanding?'"
        ],
        image: "images/meet_guardians.jpg",
        tooltip: "These guardians seem to offer guidance as much as challenge.",
        choices: ["acceptTest", "askNature"]
    },
    
    askNature: {
        id: "askNature",
        text: [
            "'Before I accept,' you say, 'tell me the nature of this test.'",
            "The guardians nod approvingly at your caution. 'The test is one of choice,' they explain. 'You will face a moment where personal gain and greater good conflict.'",
            "'Your decision in that moment will determine your worthiness. Do you still wish to proceed?'"
        ],
        image: "images/ask_nature.jpg",
        tooltip: "Wisdom often begins with asking the right questions.",
        choices: ["acceptTest", "declineTest"]
    },
    
    declineTest: {
        id: "declineTest",
        text: [
            "'I am not ready for such a test,' you admit honestly. 'I need time to consider what you've said.'",
            "The guardians regard you with newfound respect. 'Knowing one's limits is itself a form of wisdom,' the youngest says.",
            "'Return when you are prepared to face yourself truly. The grove will welcome you.'"
        ],
        image: "images/decline_test.jpg",
        tooltip: "Sometimes the wisest choice is to walk away and prepare.",
        choices: ["chainOfEchoes", "sunkenRuins"]
    },
    
    demandFragment: {
        id: "demandFragment",
        text: [
            "'I have no time for tests,' you declare. 'The kingdom needs the crown restored. Give me the fragment that is rightfully mine to claim.'",
            "The guardians' expressions harden. 'It is not yours by right, but by worth,' the leader corrects coldly.",
            "'You have failed the first test—humility. Leave this place until you have learned what cannot be taught.'"
        ],
        image: "images/demand_fragment.jpg",
        tooltip: "Pride comes before a fall, especially in sacred places.",
        choices: ["forceConfrontation", "retreatGrove"]
    },
    
    forceConfrontation: {
        id: "forceConfrontation",
        text: [
            "Refusing to be dismissed, you draw your weapon. 'I will not leave empty-handed,' you declare.",
            "The guardians sigh collectively, as if disappointed but not surprised. The forest itself seems to respond to your aggression—roots erupt from the ground, trees bend and reach.",
            "You find yourself entangled and immobilized. 'Violence is the tool of those without wisdom,' the guardians pronounce as they fade away, leaving you to struggle free alone."
        ],
        image: "images/force_confrontation.jpg",
        tooltip: "Some powers cannot be overcome by force.",
        choices: ["kingOfShadowsPath"]
    },
    
    retreatGrove: {
        id: "retreatGrove",
        text: [
            "Swallowing your pride, you back down. 'I... apologize for my presumption,' you manage to say.",
            "The guardians' stern expressions soften slightly. 'Pride is a difficult foe to overcome,' the youngest acknowledges.",
            "'Return when you are ready to be tested rather than to demand. The path remains open to those who seek growth.'"
        ],
        image: "images/retreat_grove.jpg",
        tooltip: "Admitting a mistake takes its own kind of courage.",
        choices: ["chainOfEchoes", "sunkenRuins"]
    },
    
    acceptTest: {
        id: "acceptTest",
        text: [
            "'I accept your test,' you declare, 'whatever it may be.'",
            "The guardians nod in unison. 'Then follow,' they command, leading you deeper into the grove to a pool of crystal-clear water.",
            "'Look into the pool,' they instruct. 'Face the truth of your past, the moments that have shaped you. Then make your choice.'"
        ],
        image: "images/accept_test.jpg",
        tooltip: "The test has already begun, though you may not realize it.",
        choices: ["gazePool"]
    },
    
    gazePool: {
        id: "gazePool",
        text: [
            "You kneel beside the pool and gaze into its depths. The water shows you visions of your past—moments of both triumph and failure.",
            "You see times when you helped others at personal cost, and times when fear or ambition led you astray. The visions are unflinching in their honesty.",
            "Finally, the water shows you a crossroads—one path leads to personal glory but abandons those who need you; the other requires sacrifice but helps many."
        ],
        image: "images/gaze_pool.jpg",
        tooltip: "The visions show not just what was, but what could be.",
        choices: ["chooseSelf", "chooseSacrifice"]
    },
    
    chooseSelf: {
        id: "chooseSelf",
        text: [
            "You reach toward the vision of personal glory. 'I have sacrificed enough,' you think. 'I deserve recognition and power.'",
            "As your fingers touch the water, the vision dissolves. The guardians look at you with neither judgment nor surprise.",
            "'You have chosen,' the eldest says simply. They offer you the crown fragment, but something about it seems diminished, its glow muted."
        ],
        image: "images/choose_self.jpg",
        tooltip: "You have what you came for, but at what cost?",
        choices: ["wandererPath"],
        inventory: "Crown fragment (diminished)"
    },
    
    chooseSacrifice: {
        id: "chooseSacrifice",
        text: [
            "You reach toward the vision of sacrifice and service to others. 'Some things are more important than personal gain,' you think.",
            "As your fingers touch the water, the vision brightens. The pool's surface begins to glow with a golden light that spreads to encompass you.",
            "The guardians look on with approval. 'You have chosen well,' the eldest says, and presents you with the crown fragment, which shines with brilliant clarity."
        ],
        image: "images/choose_sacrifice.jpg",
        tooltip: "True power often comes from putting others before oneself.",
        choices: ["heroPath"],
        inventory: "Crown fragment (radiant)"
    },
    
    // Ending Paths
    kingOfShadowsPath: {
        id: "kingOfShadowsPath",
        text: [
            "Your journey takes a dark turn as the shadows' influence grows stronger. You find the remaining crown fragments with supernatural ease, drawn to their power.",
            "With each fragment added to your collection, your transformation accelerates. Your human compassion fades, replaced by cold ambition and hunger for control.",
            "When you finally reforge the Crown of Echoes, its power melds with the darkness inside you. You return to the kingdom not as its savior, but as its new master."
        ],
        image: "images/king_of_shadows.jpg",
        tooltip: "Power always comes with a price.",
        choices: ["kingOfShadowsEnding"]
    },
    
    kingOfShadowsEnding: {
        id: "kingOfShadowsEnding",
        text: [
            "You claim the throne, the Crown of Echoes a twisted thing of beauty and terror upon your brow. Those who once called you hero now kneel in fear.",
            "The shadows that once offered you power now serve your every command. The kingdom prospers in some ways—no external enemy dares challenge your might.",
            "But joy and freedom fade under your rule. You have become the King of Shadows, a tyrant feared across the land. The crown is reforged, but at the cost of your humanity."
        ],
        image: "images/king_ending.jpg",
        tooltip: "ENDING: KING OF SHADOWS",
        isEnding: true,
        endingType: "dark"
    },
    
    wandererPath: {
        id: "wandererPath",
        text: [
            "Though you possess a fragment of the crown, you find yourself increasingly disconnected from your original purpose. The crown's magic has changed you in subtle ways.",
            "You drift from place to place, neither hero nor villain, but something in between—a figure of mystery and occasional wonder to those you encounter.",
            "The fragment you carry sometimes whispers to you of possibilities, of powers you might have claimed, of destinies left unfulfilled."
        ],
        image: "images/wanderer_path.jpg",
        tooltip: "Not all who wander are lost, but some certainly are.",
        choices: ["wandererEnding"]
    },
    
    wandererEnding: {
        id: "wandererEnding",
        text: [
            "Years pass, and your legend grows even as you fade. Stories speak of a mysterious figure who appears during times of need, then vanishes just as quickly.",
            "The crown remains unforged, its fragments scattered once more across the land. Perhaps another hero will one day take up the quest you abandoned.",
            "You have become the Wanderer, a living myth, neither bound by destiny nor free from it. The crown's song still echoes in your dreams, a reminder of what might have been."
        ],
        image: "images/wanderer_ending.jpg",
        tooltip: "ENDING: THE WANDERER",
        isEnding: true,
        endingType: "neutral"
    },
    
    heroPath: {
        id: "heroPath",
        text: [
            "With the third fragment in hand, you sense that you're ready to complete your quest. The three pieces call to each other, yearning to be whole again.",
            "Your journey has changed you—not with dark power or physical transformation, but with wisdom and compassion earned through difficult choices.",
            "You travel to the sacred forge where the Crown of Echoes was first created. There, under the light of a full moon, you begin the reforging ritual."
        ],
        image: "images/hero_path.jpg",
        tooltip: "The true hero's journey ends where it began—with purpose and clarity.",
        choices: ["heroEnding"]
    },
    
    heroEnding: {
        id: "heroEnding",
        text: [
            "The fragments meld together in the sacred fire, becoming whole once more. As the Crown of Echoes cools, its true beauty is revealed—not a tool of domination, but a symbol of harmony and protection.",
            "When you place it upon your head, knowledge flows into you—the crown was created to protect the realm from ancient threats, to bring balance between human and magical worlds.",
            "You return to the kingdom as a true hero, not to rule but to serve and protect. Your legend will live on for generations, inspiring others to choose sacrifice over glory, wisdom over power."
        ],
        image: "images/hero_ending.jpg",
        tooltip: "ENDING: THE TRUE HERO",
        isEnding: true,
        endingType: "good"
    }
};

// Global variables
let currentState = "start";
let collectedClues = [];
let inventory = [];
let storyProgress = [];

// DOM References
const storyImage = document.getElementById("story-image");
const paragraph1 = document.getElementById("paragraph1");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const nextParagraph = document.getElementById("next-paragraph");
const backButton = document.getElementById("back-button");
const tooltip = document.getElementById("tooltip");
const inputContainer = document.getElementById("input-container");
const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");
const cluesContainer = document.getElementById("clues-container");
const cluesList = document.getElementById("clues-list");
const inventoryList = document.getElementById("inventory-list");
const choicesContainer = document.getElementById("choices-container");

// Initialize the story
function initializeStory() {
    updateStoryState(story.start);
    document.addEventListener("keydown", handleKeyPress);
    storyImage.addEventListener("mouseover", showTooltip);
    storyImage.addEventListener("mouseout", hideTooltip);
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    choice1.addEventListener("click", () => makeChoice(0));
    choice2.addEventListener("click", () => makeChoice(1));
    choice3.addEventListener("click", () => makeChoice(2));
    nextParagraph.addEventListener("click", showNextParagraph);
    backButton.addEventListener("click", goBack);
    submitButton.addEventListener("click", processUserInput);
}

// Update the story state
function updateStoryState(state) {
    currentState = state.id;
    storyProgress.push(currentState);
    
    // Update the image
    if (state.image) {
        storyImage.src = state.image;
        storyImage.alt = state.id;
    }
    
    // Set tooltip content
    if (state.tooltip) {
        tooltip.textContent = state.tooltip;
    }
    
    // Display text
    if (state.text && state.text.length > 0) {
        showText(state.text);
    }
    
    // Add clue if present
    if (state.clue && !collectedClues.includes(state.clue)) {
        addClue(state.clue);
    }
    
    // Add inventory item if present
    if (state.inventory && !inventory.includes(state.inventory)) {
        addInventoryItem(state.inventory);
    }
    
    // Handle user input if needed
    if (state.userInput) {
        showUserInputForm();
    } else {
        hideUserInputForm();
    }
    
    // Update choices
    updateChoices(state);
    
    // Check if this is an ending
    if (state.isEnding) {
        handleEnding(state);
    }
}

// Show story text
function showText(textArray) {
    let currentTextIndex = 0;
    
    // Display the first paragraph
    paragraph1.textContent = textArray[currentTextIndex];
    paragraph1.classList.add("fade-in");
    
    // If there are more paragraphs, show the next button
    if (textArray.length > 1) {
        nextParagraph.classList.remove("hidden");
        nextParagraph.dataset.maxIndex = textArray.length - 1;
        nextParagraph.dataset.currentIndex = currentTextIndex;
    }else {
        nextParagraph.classList.add("hidden");
    }
}