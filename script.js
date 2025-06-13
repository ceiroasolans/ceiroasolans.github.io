

///////////////////////////////////////////////////////////////////////////////////////
//                                       PREP
///////////////////////////////////////////////////////////////////////////////////////

// //Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");

const trainingVideos = [
    { id: "0", src: "0681.mp4", type: "Anger" }, 
   { id: "1", src: "0645.mp4", type: "Calmness" }, 
    { id: "2", src: "0970.mp4", type: "Excitement" }, 
    { id: "3", src: "0489.mp4", type: "Fear" }, 
    { id: "4", src: "0087.mp4", type: "Joy" },
    { id: "5", src: "0299.mp4", type: "Sadness" },
];

const videos = [
    { id: "0", src: "0277.mp4", type: "Joy" },
    { id: "1", src: "0273.mp4", type: "Joy" },
    { id: "2", src: "0689.mp4", type: "Joy" },
    { id: "3", src: "0762.mp4", type: "Joy" },
    { id: "4", src: "0981.mp4", type: "Joy" },
    { id: "5", src: "1432.mp4", type: "Joy" },
    { id: "6", src: "2013.mp4", type: "Joy" },
    { id: "7", src: "2102.mp4", type: "Joy" },
    { id: "8", src: "2113.mp4", type: "Joy" },
    { id: "9", src: "2117.mp4", type: "Joy" }, 

    { id: "10", src: "0090.mp4", type: "Calmness" },
    { id: "11", src: "1592.mp4", type: "Calmness" },
    { id: "12", src: "0397.mp4", type: "Calmness" },
     { id: "13", src: "0743.mp4", type: "Calmness" },
    { id: "14", src: "1216.mp4", type: "Calmness" },
    { id: "15", src: "1357.mp4", type: "Calmness" },
    { id: "16", src: "0636.mp4", type: "Calmness" }, 
    { id: "17", src: "0198.mp4", type: "Calmness" },
    { id: "18", src: "1620.mp4", type: "Calmness" },
    { id: "19", src: "1988.mp4", type: "Calmness" }, 

    { id: "20", src: "0041.mp4", type: "Excitement" },
    { id: "21", src: "0264.mp4", type: "Excitement" },
    { id: "22", src: "1131.mp4", type: "Excitement" }, 
    { id: "23", src: "0540.mp4", type: "Excitement" },
    { id: "24", src: "0899.mp4", type: "Excitement" },
    { id: "25", src: "1130.mp4", type: "Excitement" },
    { id: "26", src: "1570.mp4", type: "Excitement" }, 
    { id: "27", src: "1718.mp4", type: "Excitement" },
    { id: "28", src: "1781.mp4", type: "Excitement" },
    { id: "29", src: "2078.mp4", type: "Excitement" },

    { id: "30", src: "0225.mp4", type: "Anger" },
    { id: "31", src: "0948.mp4", type: "Anger" }, 
    { id: "32", src: "1901.mp4", type: "Anger" }, 
    { id: "33", src: "0955.mp4", type: "Anger" },
    { id: "34", src: "1229.mp4", type: "Anger" },
    { id: "35", src: "0827.mp4", type: "Anger" }, 
    { id: "36", src: "1576.mp4", type: "Anger" },
    { id: "37", src: "1844.mp4", type: "Anger" },
    { id: "38", src: "2014.mp4", type: "Anger" },
    { id: "39", src: "2090.mp4", type: "Anger" },

    { id: "40", src: "0015.mp4", type: "Fear" },
    { id: "41", src: "0564.mp4", type: "Fear" },
    { id: "42", src: "0025.mp4", type: "Fear" }, 
    { id: "43", src: "1001.mp4", type: "Fear" },
    { id: "44", src: "1214.mp4", type: "Fear" },
    { id: "45", src: "1679.mp4", type: "Fear" }, 
    { id: "46", src: "1419.mp4", type: "Fear" },
    { id: "47", src: "1767.mp4", type: "Fear" },
    { id: "48", src: "1931.mp4", type: "Fear" },
    { id: "49", src: "1964.mp4", type: "Fear" },

    { id: "50", src: "0009.mp4", type: "Sadness" },
    { id: "51", src: "0611.mp4", type: "Sadness" }, 
    { id: "52", src: "2136.mp4", type: "Sadness" },
    { id: "53", src: "0700.mp4", type: "Sadness" },
    { id: "54", src: "0803.mp4", type: "Sadness" }, 
    { id: "55", src: "0860.mp4", type: "Sadness" }, 
    { id: "56", src: "1164.mp4", type: "Sadness" },
    { id: "57", src: "0975.mp4", type: "Sadness" }, 
    { id: "58", src: "1623.mp4", type: "Sadness" }, 
    { id: "59", src: "1959.mp4", type: "Sadness" } 
];
let masterRowWithAllData = null;

//  SHUFFLE
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const order = [ "Calmness", "Fear","Joy", "Anger", "Excitement", "Sadness", ];
function generateVideoSequence(videosByType, order) {
    let sequence = [];
    for (let type of order) {
        if (videosByType[type] && videosByType[type].length > 0) {
            sequence.push(videosByType[type].shift());
        } else {
            console.warn(`No more videos available for type: ${type}`);
        }
    }
    return { sequence: sequence, videosByType: videosByType };
}



//PAIRING Block 1
function findBestTriplet1(n1, n2, n3, target=5) {
    let bestSum = -1;
    let bestSD = Infinity;
    let best = { x12: 0, x13: 0, x23: 0 };
  
    for (let x12 = 0; x12 <= target; x12++) {
      for (let x13 = 0; x13 <= target; x13++) {
        for (let x23 = 0; x23 <= target; x23++) {
          // Check usage constraints
          if ((x12 + x13) <= n1 && 
              (x12 + x23) <= n2 &&
              (x13 + x23) <= n3) {
            const sum = x12 + x13 + x23;
            if (sum > bestSum) {
              bestSum = sum;
              // Compute standard deviation
              const mean = sum / 3;
              const variance = ((x12 - mean)**2 + (x13 - mean)**2 + (x23 - mean)**2) / 3;
              const sd = Math.sqrt(variance);
              bestSD = sd;
              best = { x12, x13, x23 };
            } else if (sum === bestSum) {
              // Among ties in sum, pick the smallest std dev
              const mean = sum / 3;
              const variance = ((x12 - mean)**2 + (x13 - mean)**2 + (x23 - mean)**2) / 3;
              const sd = Math.sqrt(variance);
              if (sd < bestSD) {
                bestSD = sd;
                best = { x12, x13, x23 };
              }
            }
          }
        }
      }
    }
    return best;
  }

 function generatePairsForGroup(videos, emotionGroup, target=5) {
    // Example: emotionGroup = ["Joy","Calmness","Excitement"]
    const [emoA, emoB, emoC] = emotionGroup;
  
    // Group videos by emotion, shuffle each
    const groups = {};
    emotionGroup.forEach(emo => {
      groups[emo] = videos.filter(v => v.type === emo);
      shuffleArray(groups[emo]);
    });
  
    // Count how many in each
    const nA = groups[emoA].length;
    const nB = groups[emoB].length;
    const nC = groups[emoC].length;
  
    // Decide how many combos for (A,B), (A,C), (B,C)
    const { x12, x13, x23 } = findBestTriplet1(nA, nB, nC, target);
  
    let pairs = [];
  
    // Make x12 pairs for (A,B)
    for (let i = 0; i < x12; i++) {
      const videoA = groups[emoA].shift();
      const videoB = groups[emoB].shift();
      pairs.push([videoA, videoB]);
    }
    // Make x13 pairs for (A,C)
    for (let i = 0; i < x13; i++) {
      const videoA = groups[emoA].shift();
      const videoC = groups[emoC].shift();
      pairs.push([videoA, videoC]);
    }
    // Make x23 pairs for (B,C)
    for (let i = 0; i < x23; i++) {
      const videoB = groups[emoB].shift();
      const videoC = groups[emoC].shift();
      pairs.push([videoB, videoC]);
    }
  
    // Leftovers: try to pair them across different emotions
    let leftovers = [];
    emotionGroup.forEach(emo => {
      while (groups[emo].length) {
        leftovers.push({ video: groups[emo].shift(), emotion: emo });
      }
    });
  
    while (leftovers.length >= 2) {
      let found = false;
      for (let i = 0; i < leftovers.length; i++) {
        for (let j = i+1; j < leftovers.length; j++) {
          if (leftovers[i].emotion !== leftovers[j].emotion) {
            pairs.push([leftovers[i].video, leftovers[j].video]);
            leftovers.splice(j,1);
            leftovers.splice(i,1);
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) break; // can't form cross-emotion leftover pairs
    }
  
    return pairs;
  }

  const positiveEmotions = ["Joy", "Calmness", "Excitement"];
  const negativeEmotions = ["Fear", "Anger", "Sadness"];
  
  const positiveMain = videos.filter(v => positiveEmotions.includes(v.type));
  const negativeMain = videos.filter(v => negativeEmotions.includes(v.type));
  
  // shuffle them if desired
  shuffleArray(positiveMain);
  shuffleArray(negativeMain);
  
  const positivePairs = generatePairsForGroup(positiveMain, positiveEmotions, 5);
  const negativePairs = generatePairsForGroup(negativeMain, negativeEmotions, 5);
  
  function interleavePairs(posPairs, negPairs) {
    const result = [];
    const maxLen = Math.max(posPairs.length, negPairs.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < posPairs.length) result.push(posPairs[i]);
      if (i < negPairs.length) result.push(negPairs[i]);
    }
    return result;
  }
  
  const allPairs = interleavePairs(positivePairs, negativePairs);



let startTime; 
function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}

function createSurvey(surveyName, questions, onSubmit) {

    console.log(questions)
    const surveyContainer = document.createElement('div');
    surveyContainer.className = 'survey-container';
    surveyContainer.style.position = 'relative'; // Ensures it stays at the top
    surveyContainer.style.top = '0'; 
    document.body.style.alignItems = 'flex-start';

    const responses = {};

    questions.forEach((questionObj, index) => {
        

        const question = document.createElement("p");
        question.style.fontWeight = 'bold'; 
        question.style.textAlign = 'center';
        question.textContent = questionObj.text;

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");

        questionObj.scaleValues.forEach((value, i) => {
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");

            const number = document.createElement("div");
            number.textContent = value;
            number.classList.add("likert-number");
            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");
            if (Array.isArray(questionObj.scale) && i < questionObj.scale.length) {
                label.textContent = questionObj.scale[i];
            }
            likertBox.appendChild(label);

            likertBox.onclick = function() {
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                responses[`${questionObj.id}`] = value.toString();
                likertBox.style.backgroundColor = "#d8d8d8";
            };

            likertContainer.appendChild(likertBox);
        });

        surveyContainer.appendChild(question);
        surveyContainer.appendChild(likertContainer);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        let allAnswered = true;
        questions.forEach((questionObj) => {
            if (!responses[`${questionObj.id}`]) {
                allAnswered = false;
            }
        });

        if (allAnswered) {
            onSubmit(responses);
            surveyContainer.style.display = "none"; 
            document.body.style.alignItems = 'center';
        } else {
            alert("Please answer all questions.");
        }
    };

    surveyContainer.appendChild(submitButton);
    document.body.appendChild(surveyContainer);
}




//                                                  RATINGS

function showPredictionInput(onSubmit) {
    // Create a container that is centered in the viewport
    const container = document.createElement('div');
    container.id = 'predictionInputContainer';
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.textAlign = 'center';
    container.style.minWidth = '280px';
    container.style.maxWidth = '600px';
    container.style.width = '90%';
    container.style.padding = '20px';
    container.style.border = '1px solid #333';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    container.style.backgroundColor = '#fff';
    container.style.zIndex = '1000';
    container.style.fontFamily = "'Helvetica Neue', Arial, sans-serif";
    container.style.color = '#333';
  
    // Question text
    const question = document.createElement('p');
    question.textContent = "What do you think is going to happen in this video?";
    question.style.fontSize = '1.2em';
    question.style.marginBottom = '15px';
    container.appendChild(question);
  
    // Text area
    const textArea = document.createElement('textarea');
    textArea.style.width = '90%';
    textArea.style.maxWidth = '500px';
    textArea.style.margin = '0 auto';
    textArea.style.height = '100px';
    textArea.style.fontSize = '1em';
    textArea.style.padding = '8px';
    textArea.style.border = '1px solid #ccc';
    textArea.style.borderRadius = '4px';
    textArea.placeholder = "Type your thoughts here...";
    container.appendChild(textArea);
  
    // Warning message (initially hidden)
    const warning = document.createElement('p');
    warning.textContent = "";
    warning.style.color = 'red';
    warning.style.marginTop = '10px';
    warning.style.display = 'none';
    container.appendChild(warning);
  
    // Next button (always enabled)
    const nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.style.marginTop = '15px';
    nextButton.style.padding = '8px 16px';
    nextButton.style.fontSize = '1em';
    nextButton.style.border = '1px solid #333';
    nextButton.style.borderRadius = '0px';
    nextButton.style.backgroundColor = '#fff';
    nextButton.style.color = '#333';
    nextButton.style.cursor = 'pointer';
    container.appendChild(nextButton);
  
    // Append the container to the body
    document.body.appendChild(container);
  
    // Helper: count words in the text
    function countWords(str) {
      return str.trim().split(/\s+/).filter(word => word.length > 0).length;
    }
  
    // If user typed enough words after seeing the warning, hide the warning
    textArea.addEventListener('input', () => {
      const wordCount = countWords(textArea.value);
      if (wordCount >= 6) {
        warning.style.display = 'none';
      }
    });
  
    // Next button click
    nextButton.addEventListener('click', () => {
      const wordCount = countWords(textArea.value);
      if (wordCount < 6) {
        warning.textContent = "Please try to reflect a little deeper in what might happen in this video";
        warning.style.display = 'block';
      } else {
        // Remove the container and pass the text to onSubmit
        document.body.removeChild(container);
        onSubmit(textArea.value.trim());
      }
    });
  }

//PreTrial Forecasting
let currentForecast = {}; 
function Forecasting(videoId, onSubmit) {
    const questions = [
        { id: "interestForecast", text: "How interesting do you think this video will be?", scale: ["Not interesting at all", " ", " ", "Somewhat interesting", " ", " ", "Very interesting"], scaleValues: [0, 1, 2, 3, 4, 5, 6] }, 
        { id: "valenceForecast", text: "How do you think this video will make you feel?", scale: ["Very unpleasant, negative", " ", " ", "Neutral", " ", " ", "Very pleasant, positive"], scaleValues: [-3, -2, -1, 0, 1, 2, 3] }
    ];

    createSurvey("Forecasting", questions, function(forecast) {
        console.log("Survey Responses:", forecast);
        onSubmit(forecast);
    });
}

const videoTypeRatings = {
    "Excitement": ["interested, excited"], 
    "Amusement": ["amused, funny"], 
    "Joy": ["joyful, happy"],
    "Craving": ["craving, tempted"], 
    "Calmness": ["calm, relaxed"],
    "Disgust": ["disgusted, gross"],
    "Anger": ["angry, annoyed"], 
    "Sadness": ["sad, down"], 
    "Fear": ["anxious, afraid"] 
};

const videoTypeRatingsCounter = {
    "Excitement": ["disgusted, gross"],
    "Amusement": ["sad, down"],
    "Joy": ["angry, annoyed"],
    "Craving": ["disgusted, gross"], 
    "Calmness": ["anxious, afraid"], 
    "Disgust": ["interested, excited"], 
    "Anger": ["joyful, happy"],  
    "Sadness": ["amused, funny"], 
    "Fear": ["calm, relaxed"] 
}; 


//PostTrial Rating
function EmoRatingTrain(videoId, onSubmit) {
    document.body.classList.add('instructions-body-align');
    feedbackContainer.innerHTML = '';


    const videoTypeRatings = {
        "Excitement": ["interested, excited"], 
        "Joy": ["joyful, happy"], 
        "Calmness": ["calm, relaxed"],
        "Anger": ["angry, annoyed"], 
        "Sadness": ["sad, down"], 
        "Fear": ["anxious, afraid"] 
    };

    // const videoTypeRatingsCounter = {
    //     "Excitement": ["sad"],
    //     "Amusement": ["afraid"],
    //     "Joy": ["disgusted"],
    //     "Craving": ["tempted"], 
    //     "Calmness": ["angry"], 
    //     "Disgust": ["joyful"], 
    //     "Anger": ["calm"],  
    //     "Sadness": ["excited"], 
    //     "Fear": ["amused"] 
    // };

    const videoTypeRatingsCounter = {
        "Excitement": ["sad, down"],
        "Joy": ["angry, annoyed"],
        "Calmness": ["anxious, afraid"], 
        "Anger": ["joyful, happy"],  
        "Sadness": ["excited, interested"], 
        "Fear": ["calm, relaxed"] 
    }; 

    const video = trainingVideos.find(v => v.id === videoId);

    if (!video) {
        console.error(`Video with id ${videoId} not found.`);
        return;
    }

    // Get the appropriate ratings for this video type
    const ratings = videoTypeRatings[video.type];
    const ratingsCounter = videoTypeRatingsCounter[video.type];

    if (!ratings) {
        console.error(`No ratings found for video type ${video.type}`);
        return;
    }

    const questions = [
        { id: "interest", text: "How interesting was this experience? ", scale: ["Not interesting at all"," "," ", "Somewhat interesting"," ", " ","Very interesting"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "valence", text: "How do you feel right now?", scale: ["Very unpleasant, negative"," ", " ","Neutral", " ", " ", "Very pleasant, positive"], scaleValues: [-3, -2, -1, 0, 1, 2, 3] },
        { id: "targetEmo", text: `To what extent do you feel ${ratings}?`, scale: [`Not at all ${ratings}`, " ", " ", `Somewhat ${ratings}`, " ", " ",  `Very ${ratings}`], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "counterEmo", text: `To what extent do you feel ${ratingsCounter}?`, scale: [`Not at all ${ratingsCounter}`, " ", " ", `Somewhat ${ratingsCounter}`, " ", " ", `Very ${ratingsCounter}`], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "watchAgain", text: "Would you want to watch a similar video?", scale: ["No, never!", " ", " ", "Maybe", " ", " ", "Yes, anytime!"], scaleValues: [0, 1, 2, 3, 4, 5, 6] }
    ];

    const responses = {};

    questions.forEach((questionObj, index) => {
        const question = document.createElement("p");
        question.style.fontWeight = 'bold';
        question.style.textAlign = 'center';
        question.textContent = questionObj.text;

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");

        questionObj.scaleValues.forEach((value, i) => {
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");

            const number = document.createElement("div");
            number.textContent = value;
            number.classList.add("likert-number");
            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");
            label.textContent = questionObj.scale[i];
            likertBox.appendChild(label);

            likertBox.onclick = function() {
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                responses[questionObj.id] = value.toString();
                likertBox.style.backgroundColor = "#d8d8d8";
            };

            likertContainer.appendChild(likertBox);
        });

        feedbackContainer.appendChild(question);
        feedbackContainer.appendChild(likertContainer);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        if (Object.keys(responses).length === questions.length) {
            onSubmit(responses);
            document.body.classList.remove('instructions-body-align');
        } else {
            alert("Please answer all questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}
function EmoRating(videoId, onSubmit) {
    document.body.classList.add('instructions-body-align');
    feedbackContainer.innerHTML = '';
    const video = videos.find(v => v.id === videoId);

    if (!video) {
        console.error(`Video with id ${videoId} not found.`);
        return;
    }

    const ratings = videoTypeRatings[video.type];
    const ratingsCounter = videoTypeRatingsCounter[video.type];

    const questions = [
        { id: "interest", text: "How interesting was this experience?", scale: ["Not interesting at all", " ", " ", "Somewhat interesting", " ", " ", "Very interesting"], scaleValues: [0, 1, 2, 3, 4, 5, 6] }, 
        { id: "valence", text: "How do you feel right now?", scale: ["Very unpleasant, negative"," ", " ","Neutral", " ", " ", "Very pleasant, positive"], scaleValues: [-3, -2, -1, 0, 1, 2, 3] },
        { id: "targetEmo", text: `To what extent do you feel ${ratings}?`, scale: [`Not at all ${ratings}`, " ", " ", `Somewhat ${ratings}`, " ", " ",  `Very ${ratings}`], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "counterEmo", text: `To what extent do you feel ${ratingsCounter}?`, scale: [`Not at all ${ratingsCounter}`, " ", " ", `Somewhat ${ratingsCounter}`, " ", " ", `Very ${ratingsCounter}`], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
       ];

    createSurvey("EmoRating", questions, function(responses) {
        onSubmit(responses);
        document.body.classList.remove('instructions-body-align');
    });
}

// Global variable to store the SID number
function generateUniqueKey() {
    const length = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const participantUniqueKey = generateUniqueKey();

// Make sure SID is 10 digits
function isValidSID(sid) {
    return /^\d{10}$/.test(sid);
}

let participantChoices = [];
participantChoices.push({
    windowSizeHeight: window.innerHeight,
    windowSizeWidth: window.innerWidth,
    screenSizeHeight: window.screen.height,
    screenSizeWidth: window.screen.width
});



  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

//                                 INTRO EXPERIMENT

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

//                              PREP

let participantSID, age, racialIdentity, genderIdentity, fatherEducation, motherEducation, familyIncome, yearInSchool, timestamp1, relationship, politics, exercise, diet, sleep, stress;
function intro() {
    timestamp1 = new Date();

    // Student enter SID 
    participantSID = prompt("To receive credit, please enter your SID number:", "");
    console.log(participantSID)
    
    // Keep prompting the user until they provide a valid 10-digit SID
    while (!isValidSID(participantSID)) {
        participantSID = prompt("Invalid SID. Please enter a 10-digit SID number:", "");
    }

    if (participantSID === "1234567890") {
        consent();
        return; // Exit the function early
    }


    message.innerHTML = `
    <div style="max-width: 800px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
        <h1 style="text-align: center; font-weight: bold;">Welcome to the Video Perceptions and Personality Pilot Study!</h1>
        <p>The purpose of this study is to explore how different people perceive and feel about a wide variety of videoclips.</p>
        <p>In this experiment, you will:</p>
        <ol style="padding-left: 30px; margin-top: 10px;">
            <li style="margin-bottom: 10px;">Answer a few questions about yourself</li>
            <li style="margin-bottom: 10px;">Watch and rate a series of videos</li>
            <li style="margin-bottom: 10px;">Complete a battery of questionnaires</li>
        </ol>
        <p><strong>IMPORTANT</strong>: <i>For this study, it is important that you watch the screen the entire time. IOW, you can't look at or play with your phone during the experiment. To make sure that people are indeed watching, we will use your camera to monitor your gaze throughout the experiment. We will <strong>not</strong> record or store any video of you or your face. You will receive credit only if you look at the screen the entire time!</i></p>
        <br><p style="text-align: center;">The study will take 60 minutes, and must be completed in a single sitting.</p>
        <div style="text-align: center;">
            <button onclick="submitConsent()">Continue</button>
        </div>
    </div>
`;
message.style.display = 'block';
    message.style.display = 'block';
    // Define what happens when the consent is submitted
    window.submitConsent = function() {
        message.style.display = 'none';
        consent(); // Call the function to start the experiment
    };
}


function consent() {
    document.body.classList.add('instructions-body-align');
    let message = document.getElementById("message"); 
    message.style.display = 'block';
    message.style.marginTop = '0'; // Set top margin to 0
    message.style.maxWidth = '800px'; // Set maximum width
    message.style.marginLeft = 'auto'; // Center horizontally
    message.style.marginRight = 'auto'; // Center horizontally
    message.style.padding = '20px'; // Set padding
    message.style.fontFamily = "'Helvetica Neue', Arial, sans-serif"; // Set font
    message.style.lineHeight = '1.6'; // Set line height
    message.style.textAlign = 'left'; // Set text alignment
    message.style.color = '#333'; // Set text color
    message.style.overflow = 'auto';
    
    message.innerHTML = `
        <div style="max-width: 800px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
            <h1>CONSENT TO PARTICIPATE IN RESEARCH</h1>
            <h3>Welcome to the Videoclip Perceptions and Personality Study!</h3>
            <p>My name is Conrado Eiroa-Solans, MS. I am a graduate student in the psychology department conducting this study. The purpose of this study is to explore how different people perceive and feel about a wide variety of video clips and how they respond emotionally.</p>
            <p>The procedures in this research were approved by the CPHS as part of the research on Situational Strategies Study CPHS #2023-05-16378. </p>
            <br><p><strong>In this experiment, you will:</strong> </p>
            <ol style="padding-left: 30px; margin-top: 10px;">
                <li style="margin-bottom: 10px;">Answer a few <i>questions</i> about yourself.</li>
                <li style="margin-bottom: 10px;">Watch and rate a few short <i>videos</i>.</li>
                <li style="margin-bottom: 10px;">Decide which <i>videos</i> you want to watch, and rate how you feel.</li>
                <li style="margin-bottom: 10px;">Complete a battery of <i>questionnaires</i> about your emotions and personality.</li>
                <li style="margin-bottom: 10px;">Make more choices on the same set of <i>videos</i>, and rate how you feel.</li>
                <li style="margin-bottom: 10px;">Share <i>your opinion about the study </i> and receive a completion code. Make sure you save this until you receive RPP credit.</li>
            </ol><br>
            <p style="color: #d9534f;"><strong></strong><i> <strong>The study will take a maximum of 120 minutes and needs to be completed in a single sitting. Please plan accordingly and respond as truthfully as possible all throughout. We understand it is a long experiment, and certain parts can feel repetitive. Please do your best to respond in ways that represent you as a person. <u>Your accuracy and sincerity are the backbone of our science!</i></u></strong> </p><br>
            <p><strong>Risks and discomforts:</strong> You may find some of the videoclips unpleasant or even gross. There will be no videoclips with any sexual content. Moreover, as with all research, there is a chance that confidentiality could be compromised; however, my research team will be taking precautions to minimize this risk.</p>
            <p><strong>Benefits:</strong> There is no direct benefit to you, although some individuals may enjoy watching some of these video clips. The results from the study may help us understand how different people respond to different video clips.</p>
            <p><strong>Confidentiality:</strong> The study data will be handled as confidentially as possible, and your responses to the videoclips and questionnaires will never be connected with your name. At some point, we will ask you for access to your camera feed so we can track your <u>gaze</u> during the videos. We will NOT record or store any video of you or your face.</p>
            <p><strong>Retaining research records:</strong> When the research is completed, my research team will save your responses for possible use in future research done by ourselves or others indefinitely.</p>
            <p><strong>Rights:</strong> Participation in this research is completely voluntary. You can stop participating at any time if you find the videos make you too uncomfortable.</p>
            <br><p>If you wish to participate in this study, please check the box below:</p>
            <input type="checkbox" id="participantConsent" style="margin-bottom: 20px;">
            <label for="participantConsent">I voluntarily agree to participate in this study</label>
            <div style="text-align: center;">
                <button onclick="submitConsent()">Agree and Continue</button>
            </div>
        </div>
    `;
    message.style.display = 'block';

    // Define what happens when the consent is submitted
    window.submitConsent = function() {
        let participantConsent = document.getElementById("participantConsent").checked;
        if (!participantConsent) {
            alert("Please check the box to give your consent and continue.");
            return false;
        }
        message.style.display = 'none'; // Hide the message
        document.body.classList.remove('instructions-body-align');
        
        setTimeout(function() {
            importantScreen();
        }, 100); // 100ms delay
    };
}


function importantScreen() {
    // Create an isolated full-screen overlay for the important screen
    const overlay = document.createElement('div');
    overlay.id = 'importantScreenOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255,255,255,0.95)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '10000';

    // Content container
    const content = document.createElement('div');
    content.style.maxWidth = '800px';
    content.style.padding = '20px';
    content.style.fontFamily = "'Helvetica Neue', Arial, sans-serif";
    content.style.lineHeight = '1.6';
    content.style.textAlign = 'center';
    content.style.color = '#333';

    content.innerHTML = `
        <p style="color:red; font-weight:bold; margin-top:0;">IMPORTANT:</p>
        <p style="font-weight:bold; margin-bottom:2rem;">
            At the end of this study, you will receive personalized feedback about your personality and emotional tendencies.
            Please do your best to always respond truthfully and honestly.
        </p>
        <button id="importantContinueBtn">Continue</button>
    `;
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Continue button behavior
    document.getElementById('importantContinueBtn').addEventListener('click', () => {
        document.body.removeChild(overlay);
        demographics();
    });
}


// Demographics
function demographics() {
    document.body.classList.add('instructions-body-align');

    // Main wrapper
    let wrapper = document.createElement('div');
    wrapper.id = "demographicsContainer";
    wrapper.style.marginTop = '0rem'; // before 20rem
    wrapper.style.top = '0';
    wrapper.style.paddingBottom = '5rem';
    wrapper.style.fontFamily = "'Arial', sans-serif";

    // Adding a header
    let header = document.createElement('h2');
    header.textContent = "Please respond to the following questions about yourself";
    header.style.textAlign = 'center';
    header.style.marginBottom = '2rem';
    wrapper.appendChild(header);

    // Helper function to generate a styled label
    function createStyledLabel(content) {
        let label = document.createElement('label');
        label.textContent = content;
        label.style.fontWeight = 'bold';
        label.style.display = 'block';
        label.style.textAlign = 'left';
        label.style.marginTop = '2rem';
        return label;
    }

    // Track sliders' interactions
    let slidersInteracted = {
        ageSlider: false,
        incomeSlider: false
    };

    // Helper function to create and style a slider
    function createStyledSlider(min, max, sliderName) {
        let div = document.createElement('div');

        noUiSlider.create(div, {
            start: [(min + max) / 2],
            range: {
                'min': [min],
                'max': [max]
            },
            format: {
                to: function (value) {
                    return parseInt(value);
                },
                from: function (value) {
                    return parseInt(value);
                }
            },
            tooltips: true
        });

        div.noUiSlider.on('change', () => {
            slidersInteracted[sliderName] = true;
            checkAllAnswered();
        });

        let minMaxLabel = document.createElement('div');
        minMaxLabel.style.display = 'flex';
        minMaxLabel.style.justifyContent = 'space-between';
        minMaxLabel.appendChild(document.createTextNode(min.toString()));
        let spacer = document.createElement('span');
        spacer.style.flexGrow = '1';
        minMaxLabel.appendChild(spacer);
        minMaxLabel.appendChild(document.createTextNode(max.toString()));

        let container = document.createElement('div');
        container.appendChild(div);
        container.appendChild(minMaxLabel);
        return container;
    }
    function createStyledSlider2(min, max, sliderName, step = 5) {
        let div = document.createElement('div');

        noUiSlider.create(div, {
            start: [(min + max) / 2],
            range: {
                'min': [min],
                'max': [max]
            },
            step: step, 
            format: {
                to: function (value) {
                    return parseInt(value);
                },
                from: function (value) {
                    return parseInt(value);
                }
            },
            tooltips: true
        });

        div.noUiSlider.on('change', () => {
            slidersInteracted[sliderName] = true;
            checkAllAnswered();
        });

        let minMaxLabel = document.createElement('div');
        minMaxLabel.style.display = 'flex';
        minMaxLabel.style.justifyContent = 'space-between';
        minMaxLabel.appendChild(document.createTextNode(min.toString()));
        let spacer = document.createElement('span');
        spacer.style.flexGrow = '1';
        minMaxLabel.appendChild(spacer);
        minMaxLabel.appendChild(document.createTextNode(max.toString()));

        let container = document.createElement('div');
        container.appendChild(div);
        container.appendChild(minMaxLabel);
        return container;
    }


    // Helper function to generate radio buttons
    function createRadioButtons(name, options) {
        let div = document.createElement('div');
        div.style.marginTop = '0.5rem';
        
        for (let option of options) {
            let label = document.createElement('label');
            label.style.display = 'block';
            label.style.textAlign = 'left';
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = name;
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            div.appendChild(label);
        }
        return div;
    }

    function createRadioButtons2(name, options) { //This one displays them horizontally
        let div = document.createElement('div');
        div.style.marginTop = '0.5rem';
        div.style.display = 'flex';  // Set to flex to display items in a row
        div.style.flexWrap = 'wrap'; // Allows items to wrap to the next line
    
        for (let option of options) {
            let label = document.createElement('label');
            label.style.display = 'inline-flex'; // Display label in a row
            label.style.marginRight = '15px'; // Spacing between each radio button
            label.style.alignItems = 'center'; // Align items vertically for better appearance
            label.style.textAlign = 'left';
    
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = name;
            radio.value = option;
    
            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + option)); // Add a space before the option text
    
            div.appendChild(label);
        }
    
        return div;
    }

    // Helper function to generate checkboxes
    function createCheckboxes(name, options) {
        let div = document.createElement('div');
        div.style.marginTop = '0.5rem';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';

        for (let option of options) {
            let label = document.createElement('label');
            label.style.display = 'inline-flex';
            label.style.marginRight = '15px';
            label.style.alignItems = 'center';

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = name;
            checkbox.value = option;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(' ' + option));

            div.appendChild(label);
        }

        return div;
    }

    // Append and style each question and input
    wrapper.appendChild(createStyledLabel('What is your age?'));
    wrapper.appendChild(createStyledSlider(18, 80, 'ageSlider'));
    let ageSlider = wrapper.querySelector("#demographicsContainer div.noUi-target");
    if (ageSlider) {
     ageSlider.noUiSlider.set(80);
    }
    
    wrapper.appendChild(createStyledLabel('Which of the following describes your ethnic background? Check all that apply')); //Race
    wrapper.appendChild(createCheckboxes('racialIdentity', ['Asian', 'Black', 'Latino', 'Native American', 'White']));

    wrapper.appendChild(createStyledLabel('What is your gender identity?')); //Gender
    wrapper.appendChild(createRadioButtons2('genderIdentity', ['Female', 'Male', 'Non-binary']));

    wrapper.appendChild(createStyledLabel('What is the highest level of education obtained by your father?')); //Father edu
    wrapper.appendChild(createRadioButtons('fatherEducation', ['Some high school', 'High school diploma', 'Associate degree', 'Bachelors degree', 'Masters degree', 'PhD or other']));

    wrapper.appendChild(createStyledLabel('What is the highest level of education obtained by your mother?')); // mother edu
    wrapper.appendChild(createRadioButtons('motherEducation', ['Some high school', 'High school diploma', 'Associate degree', 'Bachelors degree', 'Masters degree', 'Ph.D. or other']));

    wrapper.appendChild(createStyledLabel('What is your family income (approximately), in thousands of dollars?')); //income
    wrapper.appendChild(createStyledSlider2(0, 1000, 'incomeSlider'));
    let incomeSlider = wrapper.querySelectorAll("#demographicsContainer div.noUi-target")[1];
    if (incomeSlider) {
        incomeSlider.noUiSlider.set(0);
    }

    wrapper.appendChild(createStyledLabel('What year are you in?')); //school year
    wrapper.appendChild(createRadioButtons2('yearInSchool', ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Foreign Student / Visiting']));

    wrapper.appendChild(createStyledLabel('What is your relationship status?')); //relationship
    wrapper.appendChild(createRadioButtons('relationship', ['Single', 'Non-monogamous dating', 'Monogamous dating', 'Domestic partnership', 'Married']));


    wrapper.appendChild(createStyledLabel('Where would you place your current political views?')); //politics
    wrapper.appendChild(createRadioButtons('politics', ['Strong Democrat', 'Democrat', 'Left-leaning', 'Independent', 'Right-leaning', 'Republican', 'Strong Republican']));

    

    wrapper.appendChild(createStyledLabel('How many hours do you exercise per week?')); //exercise
    wrapper.appendChild(createStyledSlider(0, 14, 'exerciseSlider'));
    let exerciseSlider = wrapper.querySelectorAll("#demographicsContainer div.noUi-target")[2];
    if (exerciseSlider) {
        exerciseSlider.noUiSlider.set(0);
    }

    wrapper.appendChild(createStyledLabel('How would you rate your diet?')); //diet
    wrapper.appendChild(createRadioButtons2('diet', ['Not very healthy', 'Somewhat healthy', 'Healthy', 'Very healthy']));

    wrapper.appendChild(createStyledLabel('How would you rate the quality of your sleep?')); //sleep
    wrapper.appendChild(createRadioButtons2('sleep', ['Terrible', 'Poor', 'Acceptable', 'Good', 'Excellent']));

    wrapper.appendChild(createStyledLabel('What are your general levels of stress?')); //stress
    wrapper.appendChild(createRadioButtons2('stress', ['No stress', 'Low', 'Moderate', 'High', 'Extremely high']));

    // Create the button
    let nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.style.display = "none";  
nextButton.onclick = function() {
    // Extract data from the UI elements before hiding the demographics container
    age = document.querySelector('.noUi-tooltip').textContent;  // Gets the value from the age slider's tooltip
    const selected = document.querySelectorAll('input[name="racialIdentity"]:checked');
    racialIdentity = Array.from(selected).map(el => el.value);
    genderIdentity = document.querySelector('input[name="genderIdentity"]:checked').value;
    fatherEducation = document.querySelector('input[name="fatherEducation"]:checked').value;
    motherEducation = document.querySelector('input[name="motherEducation"]:checked').value;
    familyIncome = document.querySelectorAll('.noUi-tooltip')[1].textContent;  // Gets the value from the income slider's tooltip
    yearInSchool = document.querySelector('input[name="yearInSchool"]:checked').value;
    relationship = document.querySelector('input[name="relationship"]:checked').value;
    politics = document.querySelector('input[name="politics"]:checked').value;
    exercise = document.querySelectorAll('.noUi-tooltip')[2].textContent;
    diet = document.querySelector('input[name="diet"]:checked').value;
    sleep = document.querySelector('input[name="sleep"]:checked').value;
    stress = document.querySelector('input[name="stress"]:checked').value;

    let demoContainer = document.getElementById('demographicsContainer');
    demoContainer.parentNode.removeChild(demoContainer);  // Remove the demographics container from the DOM
        
    document.body.classList.remove('instructions-body-align');

    setTimeout(function() {
        MoviePreferences();
    }, 100); // 100ms delay

};
    

    wrapper.appendChild(nextButton);
    // Check if all questions are answered
    function checkAllAnswered() {
        let allRadios = wrapper.querySelectorAll('input[type="radio"]');
        let answeredQuestions = new Set();
        allRadios.forEach(radio => {
            if (radio.checked) {
                answeredQuestions.add(radio.name);
            }
        });

        // Also check sliders
        let allSlidersAnswered = Object.values(slidersInteracted).every(val => val === true);

        if (answeredQuestions.size === 9 && allSlidersAnswered) {
            nextButton.style.marginTop = '30px'; 
            nextButton.style.display = "block";
        } else {
            nextButton.style.display = "none";
        }
    }

    // Add event listeners to radio buttons
    let allRadios = wrapper.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
        radio.addEventListener('change', checkAllAnswered);
    });

    // Append to main container
    document.getElementById('mainContainer').appendChild(wrapper);
}

let moviePreferences = {};
function MoviePreferences() {
    
    document.body.classList.add('instructions-body-align');
    feedbackContainer.innerHTML = '';

    const genres = [
        "Adventure", "Action", "Comedy", "Drama", "Horror", "Fiction", "Romance", "Documentary", "Thriller"
    ];
    
    const scale = ["Hate it", "Neutral", "Love it"];

    

    // Create main question title at the top
    const mainQuestion = document.createElement("p");
    mainQuestion.style.fontWeight = 'bold'; 
    mainQuestion.style.textAlign = 'center';
    mainQuestion.textContent = "How much do you like the following genres of movies?";
    feedbackContainer.appendChild(mainQuestion);

    genres.forEach((genre) => {
        const genreTitle = document.createElement("p");
        genreTitle.style.fontWeight = 'bold'; 
        genreTitle.style.textAlign = 'left';
        genreTitle.textContent = genre;

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");

        for(let i = -3; i <= 3; i++){
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");
            likertBox.style.width = '60px';

            const number = document.createElement("div");
            number.textContent = i;
            number.classList.add("likert-number");
            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");
            likertBox.appendChild(label);

            if (i === -3) label.textContent += scale[0]; 
            else if (i === 0) label.textContent += scale[1];
            else if (i === 3) label.textContent += scale[2];

            likertBox.onclick = function() {
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                
                moviePreferences[genre] = i.toString();
                
                likertBox.style.backgroundColor = "#d8d8d8";  
                
            };

            likertContainer.appendChild(likertBox);
        }

        feedbackContainer.appendChild(genreTitle);
        feedbackContainer.appendChild(likertContainer);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginBottom = '30px';
    submitButton.onclick = () => {
        if (Object.keys(moviePreferences).length === genres.length) {
            //onSubmit(moviePreferences);
            document.body.classList.remove('instructions-body-align');
            setTimeout(function() {
                baselineEmo();
            }, 100); 
        } else {
            alert("Please answer all questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}

//Baseline Emo
let baselineEmoResponses = {};
function baselineEmo() {
    window.scrollTo(0, 0);
    setTimeout(function() {
        document.body.classList.add('instructions-body-align');
    }, 100); 
    feedbackContainer.innerHTML = '';

  //const emotions = ["Active, engaged", "Sad, down", "Pleasant, positive", "Disgusted, gross", "Joyful, happy", "Anxious, afraid", "Amused, funny", "Interested, excited", "Angry, annoyed", "Unpleasant, negative", "Craving, tempted", "Inactive, still", "Enthusiastic, elated", "Calm, relaxed"]; 
  const emotions = ["Pleasant", "Negative",  "Joyful",  "Annoyed",  "Calm",   "Afraid",  "Excited",  "Sad", "Interested", "Anxious", "Enthusiastic", "Bored",  "Happy", "Angry", "Relaxed", "Amused",  "Down", "Positive", "Unpleasant" ]; 
  const emotionResponses = {};



// Add header
const header = document.createElement("p");
header.style.fontWeight = 'bold';
header.style.textAlign = 'center'; 
header.style.padding = '20px 0';
header.textContent = "Please rate the extent to which you feel right now:";
feedbackContainer.appendChild(header);

emotions.forEach(emotion => {
    const emotionContainer = document.createElement("div");
    emotionContainer.style.display = "flex";
    emotionContainer.style.justifyContent = "space-between";
    emotionContainer.style.alignItems = "center";
    emotionContainer.style.paddingBottom = "10px";

    const question = document.createElement("p");
    question.style.fontWeight = 'bold';
    question.style.flex = "1";
    question.style.marginRight = "10px";
    question.textContent = emotion;
    emotionContainer.appendChild(question);

    const likertContainer = document.createElement("div");
    likertContainer.classList.add("likert-container");
    likertContainer.style.flex = "2"; 

    for (let i = 0; i <= 6; i++) {
        const likertBox = document.createElement("div");
        likertBox.classList.add("likert-box");
        likertBox.style.width = "60px";
        likertBox.style.height = "65px";

        const number = document.createElement("div");
        number.textContent = i.toString();
        number.classList.add("likert-number");
        number.style.lineHeight = "20px";
        likertBox.appendChild(number);

        const label = document.createElement("div");
        label.classList.add("likert-label");

        // Dynamically set label text based on emotion and scale position
        if (i === 0) label.textContent = `Not ${emotion} at all`;
        else if (i === 3) label.textContent = `Somewhat ${emotion}`;
        else if (i === 6) label.textContent = `Very ${emotion}`;
        likertBox.appendChild(label);

        (function(currentIndex, currentEmotion) {
            likertBox.onclick = function() {
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                emotionResponses[currentEmotion] = currentIndex;
                likertBox.style.backgroundColor = "#d8d8d8";
            };
        })(i, emotion);

        likertContainer.appendChild(likertBox);
    }

    emotionContainer.appendChild(likertContainer);
    feedbackContainer.appendChild(emotionContainer);
});

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px"; 
    submitButton.onclick = () => {
        if (emotions.every(emotion => emotion in emotionResponses)) {
            baselineEmoResponses = Object.keys(emotionResponses).reduce((acc, key) => {
                acc[key] = emotionResponses[key].toString();
                return acc;
            }, {});
            feedbackContainer.style.display = "none";
            feedbackContainer.style.marginTop = '0px';  
            //document.body.style.alignItems = '';
            document.body.classList.remove('instructions-body-align'); 
            baselineSymptoms();
        } else {
            alert("Please answer all the questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}


let baselineSymptomsResponses = {};
function baselineSymptoms() {
    window.scrollTo(0, 0);
    setTimeout(function() {
        document.body.classList.add('instructions-body-align');
    }, 100); 
    feedbackContainer.innerHTML = '';

    // Center the entire container
    feedbackContainer.style.display = "flex";
    feedbackContainer.style.flexDirection = "column";
    feedbackContainer.style.alignItems = "center";
    feedbackContainer.style.justifyContent = "center";

    const symptoms = [
        "I found it hard to wind down",
        "I was aware of dryness of my mouth",
        "I couldn’t seem to experience any positive feeling at all",
        "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
        "I found it difficult to work up the initiative to do things",
        "I tended to over-react to situations",
        "I experienced trembling (e.g. in the hands)",
        "I felt that I was using a lot of nervous energy",
        "I was worried about situations in which I might panic and make a fool of myself",
        "I felt that I had nothing to look forward to",
        "I found myself getting agitated",
        "I found it difficult to relax",
        "I felt down-hearted and blue",
        "I was intolerant of anything that kept me from getting on with what I was doing",
        "I felt I was close to panic",
        "I was unable to become enthusiastic about anything",
        "I felt I wasn’t worth much as a person",
        "I felt that I was rather touchy",
        "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
        "I felt scared without any good reason",
        "I felt that life was meaningless"
    ];

    const symptomResponses = {};

    // Add header
    const header = document.createElement("p");
    header.style.fontWeight = 'bold';
    header.style.textAlign = 'center'; 
    header.style.padding = '20px 0';
    header.textContent = "Over the course of today...";
    feedbackContainer.appendChild(header);

    symptoms.forEach(emotion => {
        // Each row: question (left) + scale (right)
        const emotionContainer = document.createElement("div");
        emotionContainer.style.display = "flex";
        emotionContainer.style.alignItems = "center";  // Vertically center question + boxes
        emotionContainer.style.width = "70%";          // Adjust width as needed
        emotionContainer.style.minWidth = "600px";
        emotionContainer.style.marginBottom = "10px";
        emotionContainer.style.borderRadius = "4px";

        // Question text on the left
        const question = document.createElement("p");
        question.style.fontWeight = "bold";    
        question.style.flex = "0 0 45%";       
        question.style.margin = "0";           
        question.style.lineHeight = "1.2";

        // Center the question text horizontally & vertically
        question.style.display = "flex";
        question.style.alignItems = "center";
        question.style.justifyContent = "center"; 
        question.style.textAlign = "center";

        question.textContent = emotion;
        emotionContainer.appendChild(question);

        // Likert scale container on the right
        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");
        likertContainer.style.flex = "0 0 60%";  
        likertContainer.style.display = "flex";
        likertContainer.style.justifyContent = "flex-start";
        likertContainer.style.alignItems = "stretch";
        likertContainer.style.margin = "0";
        likertContainer.style.padding = "0";
        likertContainer.style.gap = "0";  
        likertContainer.style.flexGrow = "0";
        likertContainer.style.flexShrink = "0";

        for (let i = 0; i <= 4; i++) {
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");

            // Override existing .likert-box CSS
            likertBox.style.flex = "0 0 20%";          
            likertBox.style.border = "1px solid #ccc"; 
            likertBox.style.margin = "0";
            likertBox.style.padding = "0";
            likertBox.style.boxSizing = "border-box";
            likertBox.style.backgroundColor = "transparent"; 
            likertBox.style.display = "flex";
            likertBox.style.flexDirection = "column";
            likertBox.style.alignItems = "center";
            likertBox.style.justifyContent = "flex-start";
            likertBox.style.cursor = "pointer";
            likertBox.style.height = "60px";

            // Number (not bold, top)
            const number = document.createElement("div");
            number.textContent = i.toString();
            number.style.fontWeight = "normal";  
            number.style.fontSize = "16px";
            number.style.marginTop = "5px";
            likertBox.appendChild(number);

            // Label (small, below number)
            const label = document.createElement("div");
            label.style.fontWeight = "normal";
            label.style.fontSize = "11px";
            label.style.lineHeight = "1.2";
            label.style.textAlign = "center";
            label.style.marginTop = "2px";

            if (i === 0) label.textContent = "Not at all";
            else if (i === 2) label.textContent = "Somewhat";
            else if (i === 4) label.textContent = "Very much";

            likertBox.appendChild(label);

            // On click, highlight the chosen box
            (function(currentIndex, currentEmotion) {
                likertBox.onclick = function() {
                    // Clear any existing highlights
                    likertContainer.querySelectorAll(".likert-box").forEach(box => {
                        box.style.backgroundColor = "transparent";
                    });
                    symptomResponses[currentEmotion] = currentIndex;
                    likertBox.style.backgroundColor = "#ddd";
                };
            })(i, emotion);

            likertContainer.appendChild(likertBox);
        }

        emotionContainer.appendChild(likertContainer);
        feedbackContainer.appendChild(emotionContainer);
    });

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px"; 
    submitButton.onclick = () => {
        // Check if all are answered
        if (symptoms.every(emotion => emotion in symptomResponses)) {
            baselineSymptomsResponses = Object.keys(symptomResponses).reduce((acc, key) => {
                acc[key] = symptomResponses[key].toString();
                return acc;
            }, {});
            feedbackContainer.style.display = "none";
            feedbackContainer.style.marginTop = '0px';  
            document.body.classList.remove('instructions-body-align'); 
            GazeCalibration();
        } else {
            alert("Please answer all the questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}


//Instructions with WebGazer
let timeOut = false;
function GazeCalibration() {
    let message = document.getElementById("message");
        message.innerHTML = `
            <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Eye-tracking Calibration</strong>
                <p style="margin-top: 20px;">Now we will calibrate the eye-tracking functionality. Again, <strong>we will NOT record any video footage</strong>. The camera will <u>only</u> be used to detect your gaze, and we will <u>only</u> store your predicted gaze point in the screen.</p>
                <p style ="margin-top:20px;">When you click "next" you will be asked for permission to turn on your camera. Make sure you click allow!</p>
                
            </div>
        `;
        message.style.display = 'block';  // Make sure the message is visible



    clearButtons();
    addButton(createButton("Next", () => {
        message.style.display = 'none';  // Make sure the message is visible
        let videoPage = document.getElementById("video");
        message.innerHTML = `
            <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Eye-tracking Calibration</strong>
                <p> To help with the gaze tracking, please sit up with your face inside of the green square. When you are ready, and you see your face being correctly captured by the grids, click on next to move to calibration section!</p>
            </div>
        `;
        message.style.display = 'block';  // Make sure the message is visible

        // Initialize Webgazer and start gaze tracking
        let lastRecordingTime = null;
        let dataPoints = [];


        //old, now attempting to make data prettier
        webgazer.setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                console.log("data=null")
                return;
            }

                // Add the data to dataPoints array
                dataPoints.push({
                    x: data.x,
                    y: data.y
                });

            // Check if at least 500 milliseconds have passed since the last recording. Draw average. 
            const currentTime = new Date().getTime();
            if (!lastRecordingTime || currentTime - lastRecordingTime >= 500) {
                // Calculate the average of x and y coordinates
                if (dataPoints.length > 0) {
                    let avgX = dataPoints.reduce((sum, point) => sum + point.x, 0) / dataPoints.length;
                    let avgY = dataPoints.reduce((sum, point) => sum + point.y, 0) / dataPoints.length;

                    console.log(`Average for last 500ms: (${avgX}, ${avgY})`);

                    participantChoices.push({
                        gazingPointX: avgX,
                        gazingPointY: avgY
                    });

                    // Clear the dataPoints array for the next interval
                    dataPoints = [];
                }

                lastRecordingTime = currentTime;
            }
        }).begin();




        webgazer.setTracker("TFFacemesh"); //set a tracker module
        webgazer.setRegression("ridge"); //set a regression module

        webgazer.showPredictionPoints(false); // Show gaze prediction points on the screen

        // Start tracking gaze
        webgazer.showVideo(true); // Show webcam video feed
        webgazer.showFaceOverlay(true); // Hide face overlay (optional)

        clearButtons();


        setTimeout(function () {
        addButton(createButton("Next", () => {
        clearButtons();
        message.style.display = 'none';  // Make sure the message is visible

        message.innerHTML = `
            <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                <p style="margin-top: 20px;">Look at the calibration point and <i>slowly</i> click the point 5 times. After finishing clicking on all points, they will automatically disappear, and you will be provided with a score of accuracy!</p>
            </div>
        `;
        message.style.display = 'block';  // Make sure the message is visible

        function calibration() {
            document.body.classList.add('no-select');
            clearButtons();

            webgazer.showPredictionPoints(true);
            // Array of calibration points (x, y) screen coordinates
            const calibrationPoints = [
                { x: window.innerWidth / 4, y: 30 }, // Top left
                { x: window.innerWidth - 100, y: window.innerHeight - 50 }, // Bottom right
                { x: 50, y: window.innerHeight - 50 }, // Bottom left
                { x: window.innerWidth - 100, y: 30 }, // Top right
                { x: window.innerWidth / 2, y: window.innerHeight - 50 }, // Bottom middle
                { x: window.innerWidth / 2, y: 30 }, // Top middle
                { x: 50, y: window.innerHeight / 2 }, // Middle left
                { x: window.innerWidth - 100, y: window.innerHeight / 2 }, // Middle right
                { x: window.innerWidth / 2, y: window.innerHeight / 2 }, // Middle
              ];

            // Counter to track the number of clicks for each calibration point
            const clickCounts = new Array(calibrationPoints.length).fill(0);

            // Function to create a calibration button
            function createCalibrationButton(pointIndex) {
              const button = document.createElement('button');
              button.textContent = 'Click Me';
              button.className = 'calibration-button';
              button.style.position = 'absolute';
              button.style.left = `${calibrationPoints[pointIndex].x}px`;
              button.style.top = `${calibrationPoints[pointIndex].y}px`;

              button.addEventListener('click', () => {
                if (clickCounts[pointIndex] < 6) {
                  // Increment click count
                  clickCounts[pointIndex]++;
                  if (clickCounts[pointIndex] === 5) {
                    // Once clicked 5 times, move to the next calibration point
                    moveToNextCalibrationPoint();
                  }
                }
              });

              return button;
            }

            // Initialize an array to store distances from the center point
            const distancesFromCenter = [];
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Create the red fixation point for accuracy calculation
            const fixationPoint = document.createElement("div");

                fixationPoint.style.width = "10px"; // Adjust the size as needed
                fixationPoint.style.height = "10px"; // Adjust the size as needed
                fixationPoint.style.backgroundColor = "red";
                fixationPoint.style.borderRadius = "50%"; // Makes it a circle
                fixationPoint.style.position = "absolute";
                fixationPoint.style.top = "50%"; // Position it vertically at the middle
                fixationPoint.style.left = "50%"; // Position it horizontally at the middle
                fixationPoint.style.transform = "translate(-50%, -50%)"; // Center it precisely

            var storedArray = [[], []];

            function collectingPrediction() {
                    console.log("Collecting testing points")
                    var prediction = webgazer.getCurrentPrediction();
                    console.log("prediction: ",prediction);
                    prediction.then(function(value) {
                        console.log("value", value)
                        var pointX = value.x;
                        console.log("Stored pointX: ", pointX)
                        storedArray[0].push(pointX);
                        var pointY = value.y;
                        console.log("Stored pointY: ", pointY)
                        storedArray[1].push(pointY);
                    })
            }

            function precisionCalculation() {
                // Hide fixation point
                fixationPoint.style.display = 'none';
                console.log("Stored array: ", storedArray)

                var x = storedArray[0];
                var y = storedArray[1];
                console.log("Stored array:  - X array:",x)

                for (let n = 0; n < x.length; n++) {
                    console.log("storedPoints - xn:",x[n])
                    let xDiff = x[n] - centerX
                    let yDiff = y[n] - centerY
                    // Calculate the Euclidean distance between the gaze point and the center point
                    const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
                    console.log("distance - xn", distance)
                    // Add the distance to the distancesFromCenter array
                    distancesFromCenter.push(distance);
                }

                console.log("total distance array:", distancesFromCenter)

                // Now you have an array distancesFromCenter with distances for each gaze point

                // Calculate accuracy metrics based on the distances, e.g., average distance
                const averageDistance = distancesFromCenter.reduce((acc, curr) => acc + curr, 0) / distancesFromCenter.length;
                // You can define a threshold to determine if a gaze point is accurate or not
                const accuracyThreshold = Math.sqrt(Math.pow(window.innerHeight / 3 - window.innerHeight / 2, 2) + Math.pow(window.innerWidth / 3 - window.innerWidth / 2, 2));
                // Count the number of accurate gaze points based on the threshold
                const accurateGazePoints = distancesFromCenter.filter(distance => distance <= accuracyThreshold).length;
                // Calculate the accuracy percentage

                // Stricter method with threshold
                const accuracyPercentage2 = (accurateGazePoints / distancesFromCenter.length) * 100;
                let accuracyPercentage = (100 - (averageDistance/window.innerHeight / 2 * 100)).toFixed(2);



                // Now you have the accuracy metrics, such as average distance and accuracy percentage
                console.log("Average Distance:", averageDistance);
                console.log("Accuracy Percentage:", accuracyPercentage);
                console.log("Accuracy Percentage2:", accuracyPercentage2)
                console.log("accuracyThreshold:", accuracyThreshold)
                participantChoices.push({
                    GazingAccuracyStrict: accuracyPercentage2,
                    GazingAccuracy: accuracyPercentage
                });

                message.style.display = 'none';  // Make sure the message is visible
                let videoPage = document.getElementById("video");
                webgazer.showPredictionPoints(false);

                //Accuracy % message
                message.innerHTML = `
                   <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                       <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">The accuracy score is:</strong>
                       <p style="text-align: center;">${accuracyPercentage}%</p>
                       </div>
               `;

                message.style.display = 'block';  // Make sure the message is visible
                //message.innerHTML += accuracyPercentage
//                message.innerHTML += accuracyPercentage2

                // Provide options to recalibrate or move to next
                clearButtons();
                let recalibrateButton = createButton("Recalibrate", () => {
                    message.style.display = 'none';  
                    webgazer.showPredictionPoints(true);
                    calibration();
                });
                recalibrateButton.style.marginTop = '10px';  
                addButton(recalibrateButton);

                let nextButton = createButton("Next", () => {
                    message.style.display = 'none';  
                    webgazer.showVideo(false); // Show webcam video feed
                    webgazer.pause();
                    trainingInstructions();
                });
                nextButton.style.marginTop = '30px';
                addButton(nextButton);
            }
           
                


            // Function to move to the next calibration point
            function moveToNextCalibrationPoint() {
              currentCalibrationPointIndex++;
              if (currentCalibrationPointIndex < calibrationPoints.length) {
                // Create and add the next calibration button
                const nextButton = createCalibrationButton(currentCalibrationPointIndex);

                // Replace the current button with the next button
                document.body.replaceChild(nextButton, currentButton);

                // Update the reference to the current button
                currentButton = nextButton;
              } else {
                // Calibration is complete
                console.log('Calibration completed.');
                currentButton.remove(); // Remove the last button

                message.style.display = 'none';  // Make sure the message is visible
                  webgazer.showPredictionPoints(false);
                  let videoPage = document.getElementById("video");
                  message.innerHTML = `
                    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                        <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Please stare at the center of the screen without moving your mouse. The accuracy calculation will automatically start in 7 seconds. </strong>
                    </div>
                  `;
                message.style.display = 'block';  // Make sure the message is visible

                setTimeout(function() {
                  // Hide the elements after the initial 7 seconds
                  message.style.display = 'none';
                  webgazer.showPredictionPoints(true);
                  // Append the fixation point to the body element (or any other container you prefer)
                  document.body.appendChild(fixationPoint);

                  // Collect prediction points for 1000 times
                    function count(times) {
                      var n = 0
                      console.log("Now start collecting prediction points")
                      collectingPrediction();
                      while (n < times) {
                        // collect points for n times
                        n += 1;

                      }
                    }
                    count(1000);
                  setTimeout(function() {
                    // After collecting prediction, start calculating precision
                    precisionCalculation();
                  }, 1000);
                }, 7000); // Initial 7 seconds delay
              }
            }

            // Start calibration by creating the first button
            let currentCalibrationPointIndex = 0;
            let currentButton = createCalibrationButton(currentCalibrationPointIndex);
            document.body.appendChild(currentButton);

        }

        setTimeout(function () {
            calibration(); // call calibration function
            message.style.display = 'none';
        }, 5000);


        clearButtons();
        document.body.classList.remove('no-select');

        }))
        }, 7000);

    }));
};


  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

//                                      EXPERIMENT

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

function playVideoUntil3Seconds(onComplete) {
    let startTime = Date.now();
    let cumulativeTime = 0;
    videoPlayer.style.display = "block";
    videoPlayer.play();
    webgazer.resume();
    console.log("resumed")
    document.body.focus();


    videoPlayer.onended = videoPlayer.onpause = () => {
        cumulativeTime += Date.now() - startTime; // add time of current play to cumulativeTime
        if (cumulativeTime < 4000) {
            // check if cumulativeTime is less than 3 seconds
            startTime = Date.now(); // reset startTime for the next play
            videoPlayer.play(); // immediately replay video
            webgazer.resume();
            console.log("resumed")

        } else {
            webgazer.pause()
            console.log("paused")
            videoPlayer.onended = videoPlayer.onpause = null; // remove the listeners once done
            onComplete();
        }
    };
};

function playNoVideoUntil3Seconds(onComplete) {
    let fixationCross = document.getElementById("fixationCross");
    let startTime = Date.now();
    let cumulativeTime = 0;

    videoPlayer.style.display = "none";
    fixationCross.style.display = "block"; // Show the fixation cross

    // Create or select a message element
    let fixationMessage = document.getElementById('fixationMessage');
    if (!fixationMessage) {
        fixationMessage = document.createElement('div');
        fixationMessage.id = 'fixationMessage';
        fixationMessage.textContent = 'Please look at the fixation cross';
        fixationMessage.style.position = 'fixed';
        fixationMessage.style.top = '50px'; // Adjust as needed
        fixationMessage.style.left = '50%';
        fixationMessage.style.transform = 'translateX(-50%)';
        fixationMessage.style.fontSize = '20px'; // Adjust font size as needed
        fixationMessage.style.color = 'black'; // Adjust text color as needed
        document.body.appendChild(fixationMessage);
    }

    // Display the message
    fixationMessage.style.display = 'block';

    videoPlayer.play();
    webgazer.resume();
    console.log("resumed");
    document.body.focus();

    videoPlayer.onended = videoPlayer.onpause = () => {
        cumulativeTime += Date.now() - startTime;

        if (cumulativeTime < 6000) {
            startTime = Date.now();
            videoPlayer.play();
            webgazer.resume();
        } else {
            webgazer.pause()
            videoPlayer.onended = videoPlayer.onpause = null; 
            fixationCross.style.display = "none"; // Hide the fixation cross
            fixationMessage.style.display = 'none'; // Hide the message
            onComplete();
        }
    };
}


let choice;
let trialNum = 0 ;
//                              TRAINING SET

function trainingInstructions() {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
            <p style="margin-top: 20px;"><strong>Now you will watch a series of videos.</strong> In every trial, you will:</p>
            <ol style="padding-left: 30px; margin-top: 20px;">
                <li style="margin-bottom: 10px;">See a screenshot from a video for 3 seconds</li>
                <li style="margin-bottom: 10px;">Rate how you expect to feel upon watching it</li>
                <li style="margin-bottom: 10px;">Watch the video</li>
                <li style="margin-bottom: 10px;">Report how you feel</li>
            </ol>
        </div>
    `;
    message.style.display = 'block';

    clearButtons();
    addButton(createButton("Begin", () => {
        message.style.display = 'none'; // Hide the message
        clearButtons();
        trainingSet(); // Replace with the actual next step of the experiment
    }));
}

function trainingSet(){ 
    participantChoices.push({
        part: "Training_Start"
    });
    clearButtons();

    let currentVideoIndex = 0;
    let videosByType = {};

    // Start tracking gaze
    webgazer.showPredictionPoints(false);
    webgazer.showVideo(false); 
    webgazer.showFaceOverlay(false);

    // Group the videos by type
    for (let video of trainingVideos) {
        if (!videosByType[video.type]) {
            videosByType[video.type] = [];
        }
        videosByType[video.type].push(video);
    }

    // Shuffle each category
    for (let type in videosByType) {
        shuffleArray(videosByType[type]);
    }
  
    let sequenceData = generateVideoSequence(videosByType, order);
    let shuffledVideos = sequenceData.sequence;
    videosByType = sequenceData.videosByType;
    let roundNumber = 1; 

    function playVideoUntil3Seconds(onComplete) {
        let startTime = Date.now();
        let cumulativeTime = 0;
        videoPlayer.style.display = "block";
        videoPlayer.play();
        webgazer.resume();
        document.body.focus();

        videoPlayer.onended = videoPlayer.onpause = () => {
            cumulativeTime += Date.now() - startTime;
            if (cumulativeTime < 6000) {
                startTime = Date.now();
                videoPlayer.play();
                webgazer.resume();
            } else {
                webgazer.pause();
                videoPlayer.onended = videoPlayer.onpause = null;
                onComplete();
            }
        };
    }

    function playNextVideo() {
        if (currentVideoIndex < shuffledVideos.length) {
            const video = shuffledVideos[currentVideoIndex];
            console.log("video:", video, "; roundNumber =", roundNumber);
            videoPlayer.src = video.src;

            videoPlayer.onloadedmetadata = () => {
                videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek 60%
                videoPlayer.onseeked = () => {
                    videoPlayer.onseeked = null;
                    videoPlayer.pause();
                    webgazer.resume();
                    videoPlayer.style.display = "block"; // Show still frame

                    participantChoices.push({ part: "Still frame" });

                    // Show still for 3s
                    setTimeout(() => {
                        videoPlayer.style.display = "none"; 
                        webgazer.pause();
                        participantChoices.push({ part: "End still frame" });

                        // Forecast
                        Forecasting(video.id, (forecastData) => {
                            currentForecast = forecastData;

                            // Now show the prediction text input screen
                            showPredictionInput((predictionText) => {
                                // Save the entered prediction text into your forecast data object
                                currentForecast.predictionText = predictionText;

                                // Now show the video fully
                                videoPlayer.currentTime = 0;
                                videoPlayer.style.display = "block";
                                playVideoUntil3Seconds(() => {
                                    videoPlayer.style.display = "none";
                                    clearButtons();

                                    // Post rating
                                    EmoRatingTrain(video.id, (emoRatings) => {
                                        feedbackContainer.style.display = "none";
                                        trialNum++;

                                        // Add training trial to participantChoices
                                        // NOTE: We now use "chosen_vID" and "chosen_VideoType" to match the CSV header.
                                        participantChoices.push({
                                            choice: "play",
                                            trialNum: trialNum,
                                            // For training, mark videoA_src as the video src and videoB_src as "N/A"
                                            vID_A: "N/A",
                                            vID_B: "N/A",
                                            chosen_vID: video.src,
                                            chosen_VideoType: video.type,
                                            reactionTime: "NA",
                                            valenceForecast: currentForecast["valenceForecast"],
                                            interestForecast: currentForecast["interestForecast"],
                                            interest: emoRatings.interest, 
                                            valence: emoRatings.valence,
                                            targetEmo: emoRatings.targetEmo,
                                            counterEmo: emoRatings.counterEmo,
                                            watchAgain: emoRatings.watchAgain,
                                            predictionText: currentForecast.predictionText,
                                            SID: participantSID,
                                            uniqueKey: participantUniqueKey,
                                            startTime: timestamp1,
                                            age: age,
                                            racialIdentity: racialIdentity,
                                            genderIdentity: genderIdentity,
                                            fatherEducation: fatherEducation,
                                            motherEducation: motherEducation,
                                            familyIncome: familyIncome,
                                            yearInSchool: yearInSchool,
                                            relationship: relationship,
                                            politics: politics,
                                            exercise: exercise,
                                            diet: diet, 
                                            sleep: sleep,
                                            stress: stress, 
                                            B_Pleasant: baselineEmoResponses["Pleasant"],
                                            B_Negative: baselineEmoResponses["Negative"],
                                            B_Joyful: baselineEmoResponses["Joyful"],
                                            B_Annoyed: baselineEmoResponses["Annoyed"],
                                            B_Calm: baselineEmoResponses["Calm"],
                                            B_Afraid: baselineEmoResponses["Afraid"],
                                            B_Excited: baselineEmoResponses["Excited"],
                                            B_Sad: baselineEmoResponses["Sad"],
                                            B_Interested: baselineEmoResponses["Interested"],
                                            B_Anxious:   baselineEmoResponses["Anxious"],
                                            B_Enthusiastic:      baselineEmoResponses["Enthusiastic"],
                                            B_Bored:     baselineEmoResponses["Bored"],
                                            B_Happy: baselineEmoResponses["Happy"],
                                            B_Angry:         baselineEmoResponses["Angry"],
                                            B_Relaxed:         baselineEmoResponses["Relaxed"],
                                            B_Amused:         baselineEmoResponses["Amused"],
                                            B_Down:         baselineEmoResponses["Down"],
                                            B_Positive:         baselineEmoResponses["Positive"],
                                            B_Unpleasant:         baselineEmoResponses["Unpleasant"],
                                            BS_1:         baselineSymptomsResponses["I found it hard to wind down"],
                                            BS_2:         baselineSymptomsResponses["I was aware of dryness of my mouth"],
                                            BS_3:         baselineSymptomsResponses["I couldn’t seem to experience any positive feeling at all"],
                                            BS_4:         baselineSymptomsResponses["I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)"],
                                            BS_5:         baselineSymptomsResponses["I found it difficult to work up the initiative to do things"],
                                            BS_6:         baselineSymptomsResponses["I tended to over-react to situations"],
                                            BS_7:         baselineSymptomsResponses["I experienced trembling (e.g. in the hands)"],
                                            BS_8:         baselineSymptomsResponses["I felt that I was using a lot of nervous energy"],
                                            BS_9:         baselineSymptomsResponses["I was worried about situations in which I might panic and make a fool of myself"],
                                            BS_10:         baselineSymptomsResponses["I felt that I had nothing to look forward to"],
                                            BS_11:         baselineSymptomsResponses["I found myself getting agitated"],
                                            BS_12:         baselineSymptomsResponses["I found it difficult to relax"],
                                            BS_13:         baselineSymptomsResponses["I felt down-hearted and blue"],
                                            BS_14:         baselineSymptomsResponses["I was intolerant of anything that kept me from getting on with what I was doing"],
                                            BS_15:         baselineSymptomsResponses["I felt I was close to panic"],
                                            BS_16:         baselineSymptomsResponses["I was unable to become enthusiastic about anything"],
                                            BS_17:         baselineSymptomsResponses["I felt I wasn’t worth much as a person"],
                                            BS_18:         baselineSymptomsResponses["I felt that I was rather touchy"],
                                            BS_19:         baselineSymptomsResponses["I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)"],
                                            BS_20:         baselineSymptomsResponses["I felt scared without any good reason"],
                                            BS_21:         baselineSymptomsResponses["I felt that life was meaningless"],
                                            ...moviePreferences
                                        });
                                        console.log("trying to save csv");
                                        generateAndUploadCSV(participantChoices);
                                        showFixationCross(playNextVideo);
                                    });
                                });
                                currentVideoIndex++;
                            });
                        });
                    }, 3000);
                };
            };
        } else {
            roundNumber++;
            let nextOrder = order;
            sequenceData = generateVideoSequence(videosByType, nextOrder);
            shuffledVideos = sequenceData.sequence;
            videosByType = sequenceData.videosByType;
            currentVideoIndex = 0;
            if (shuffledVideos.length > 0) {
                playNextVideo();
            } else {
                console.log("Calling PostExperimentalEmo");
                experimentalInstructions(participantChoices);
            }
        }
    }
    playNextVideo();
}


//                              MAIN EXPERIMENT
function experimentalInstructions(onComplete) {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
            <p><strong>Now you will have the ability to decide whether you want to watch the following videos. </strong>In every trial, you will:</p>
            <ol style="padding-left: 30px; margin-top: 20px;">
                <li style="margin-bottom: 10px;">See screenshots from two videos</li>
                <li style="margin-bottom: 10px;">Rate how you expect to feel if you watched them</li>
                <li style="margin-bottom: 10px;">Decide which video to watch
                </li>
                <li style="margin-bottom: 10px;">Report how you feel</li> <br>
            </ol>
            <p>*<u>If you don’t make a choice within 7 seconds, something will be decided for you at random.</u></p>
        </div>
    `;
    message.style.display = 'block';
    
    clearButtons();
    addButton(createButton("Continue", () => {
        message.style.display = 'none'; // Hide the message
        clearButtons();
        Experiment(participantChoices); // Continue with the experiment
    }));
}


function interim() {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
            <h2><strong>You are 2/3 of the way through the experiment!</strong></h2>
            <p>If you need a brief break, now is a good time to pause. Please note that only participants who complete the full experiment will receive credit.</p>
            <p><em>Important:</em> Do not refresh the webpage, as doing so may result in the loss of your progress.</p>
            <div style="text-align: center; margin-top: 20px;">
                <button id="continueBlock2Button" disabled>Continue</button>
            </div>
        </div>
    `;
    message.style.display = 'block';

    clearButtons();
    // Attach the "Continue" logic:
    let btn = document.getElementById("continueBlock2Button");
    
    // Enable the button after a 3-second delay
    setTimeout(() => {
        btn.disabled = false;
    }, 3000);

    btn.onclick = () => {
        message.style.display = 'none';
        clearButtons();
        // Start the next block of the experiment
        experimentalInstructionsBlock2();
    };
}
function experimentalInstructionsBlock2() {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
            <p><strong>Now you will complete a <u>second</u> video-choosing task involving the same set of videos.</strong></p>
            <p>Like before, you will:
            <ol style="padding-left: 30px; margin-top: 10px;">
                <li style="margin-bottom: 10px;">See images from two videos and report how each video might make you feel.</li>
                <li style="margin-bottom: 10px;">Choose which video you want to watch.</li>
                <li style="margin-bottom: 10px;">Report how you feel.</li>
            </ol>
            </p>
            <div style="text-align: center; margin-top: 20px;">
                <button id="continueBlock2Button">Let's go!</button>
            </div>
        </div>
    `;
    message.style.display = 'block';

    clearButtons();
    // We attach the “Continue” logic:
    let btn = document.getElementById("continueBlock2Button");
    btn.onclick = () => {
        message.style.display = 'none'; 
        clearButtons();
        // Start the actual block 2 procedure
        ExperimentBlock2(participantChoices);
    };
}


//Set up for block 2
let approachedVideos = [];
let avoidedVideos = [];
let videoOvercameMap = {};
let videoLostMap = {};

function findBestTriplet(n1, n2, n3, target=5) {
    let bestSum = -1;
    let bestSD = Infinity;
    let best = { x12: 0, x13: 0, x23: 0 };
  
    for (let x12 = 0; x12 <= target; x12++) {
      for (let x13 = 0; x13 <= target; x13++) {
        for (let x23 = 0; x23 <= target; x23++) {
          // Constraints
          if ((x12 + x13) <= n1 && 
              (x12 + x23) <= n2 &&
              (x13 + x23) <= n3) {
            let sum = x12 + x13 + x23;
            if (sum > bestSum) {
              bestSum = sum;
              let mean = sum / 3;
              let variance = ((x12-mean)**2 + (x13-mean)**2 + (x23-mean)**2) / 3;
              let sd = Math.sqrt(variance);
              bestSD = sd;
              best = { x12, x13, x23 };
            } else if (sum === bestSum) {
              let mean = sum / 3;
              let variance = ((x12-mean)**2 + (x13-mean)**2 + (x23-mean)**2) / 3;
              let sd = Math.sqrt(variance);
              if (sd < bestSD) {
                bestSD = sd;
                best = { x12, x13, x23 };
              }
            }
          }
        }
      }
    }
    return best;
  }

  function groupVideosByEmotionWithWinsLosses(videos, overcameMap, lostMap) {
    let groups = {};
    for (let v of videos) {
      if (!groups[v.type]) groups[v.type] = [];
      // attach overcame/lost sets if present
      v._overcame = overcameMap[v.id] || new Set();
      v._lost = lostMap[v.id] || new Set();
      groups[v.type].push(v);
    }
    for (let emo in groups) {
      shuffleArray(groups[emo]);
    }
    return groups;
  }
  function synergyScore(v1, v2) {
    const overcameOverlap = intersectionSize(v1._overcame, v2._overcame);
    const lostOverlap = intersectionSize(v1._lost, v2._lost);
    return overcameOverlap + lostOverlap;
  }
  
  function intersectionSize(setA, setB) {
    if (!setA || !setB) return 0;
    let smaller = setA.size < setB.size ? setA : setB;
    let bigger = setA.size < setB.size ? setB : setA;
    let count = 0;
    for (let val of smaller) {
      if (bigger.has(val)) count++;
    }
    return count;
  }

  function synergyMatchPair(arrA, arrB, count) {
    let pairs = [];
    
    // We'll do up to 'count' picks or until arrA or arrB empties out
    for (let c = 0; c < count; c++) {
      if (arrA.length === 0 || arrB.length === 0) break;
  
      let bestScore = -1;
      let bestAi = -1;
      let bestBi = -1;
  
      // search all combos
      for (let i=0; i < arrA.length; i++) {
        for (let j=0; j < arrB.length; j++) {
          let sc = synergyScore(arrA[i], arrB[j]);
          if (sc > bestScore) {
            bestScore = sc;
            bestAi = i;
            bestBi = j;
          }
        }
      }
      if (bestAi >= 0 && bestBi >= 0) {
        let videoA = arrA.splice(bestAi,1)[0];
        // after splicing from arrA, indices in arrB are unaffected
        let videoB = arrB.splice(bestBi,1)[0];
        pairs.push([videoA, videoB]);
      } else {
        // no possible pair found 
        break;
      }
    }
    return pairs;
  }

function recordBlock1Choice(twoVideos, chosenLabel) {
    let chosenVideo, notChosenVideo;
    if (chosenLabel === "A") {
        chosenVideo = twoVideos[0];
        notChosenVideo = twoVideos[1];
    } else {
        chosenVideo = twoVideos[1];
        notChosenVideo = twoVideos[0];
    }
    approachedVideos.push(chosenVideo);
    avoidedVideos.push(notChosenVideo);

    // Mark overcame
    if (!videoOvercameMap[chosenVideo.id]) {
        videoOvercameMap[chosenVideo.id] = new Set();
    }
    videoOvercameMap[chosenVideo.id].add(notChosenVideo.type);

    // Mark lost
    if (!videoLostMap[notChosenVideo.id]) {
        videoLostMap[notChosenVideo.id] = new Set();
    }
    videoLostMap[notChosenVideo.id].add(chosenVideo.type);
}



//// BLOCK 1

function Experiment() {
    participantChoices.push({
        part: "Experiment_Start"
    });
    clearButtons();

    let currentVideoIndex = 0;
    let videosByType = {};

    // Start tracking gaze
    webgazer.showPredictionPoints(false);
    webgazer.showVideo(false); // Show webcam video feed
    webgazer.showFaceOverlay(false); // Hide face overlay (optional)
    playAllPairs(0);
}

// Show side-by-side still, choose, watch, rate
function playAllPairs(index) {
    if (index >= allPairs.length) {
        // We have finished Block 1
        console.log("Finished Block 1!");
        console.log("approachedVideos length:", approachedVideos.length);
        console.log("avoidedVideos length:", avoidedVideos.length);

        // AFTER Block 1, go to the PostExperimentalInstructions + choiceMotivation + 
        // all the questionnaires up through IdealAffect2
        PostExperimentalInstructions(participantChoices);
        return;
    }
    runPairTrial(allPairs[index], () => {
        playAllPairs(index + 1);
    });
}

function runPairTrial(twoVideos, onComplete) {
    let choiceStartTime;

    dualForecast(twoVideos, (forecastData) => {
        clearButtons();
        feedbackContainer2.innerHTML = "";

        const choiceContainer = document.createElement("div");
        choiceContainer.style.display = 'flex';
        choiceContainer.style.justifyContent = 'space-between';
        choiceContainer.style.margin = '0px auto 200px auto';
        choiceContainer.style.width = '90%';
        choiceContainer.style.maxWidth = '1200px';
        choiceContainer.style.border = 'none';
        choiceContainer.style.background = 'none';

        const boxA = document.createElement("div");
        boxA.innerText = "Video A";
        boxA.style.flex = '1';
        boxA.style.marginRight = '20px';
        boxA.style.backgroundColor = '#fff';
        boxA.style.border = '1px solid #333';
        boxA.style.color = '#333';
        boxA.style.fontSize = '4rem';
        boxA.style.textAlign = 'center';
        boxA.style.padding = '150px 50px';
        boxA.style.cursor = 'pointer';
        boxA.style.borderRadius = '12px';
        boxA.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';

        const boxB = document.createElement("div");
        boxB.innerText = "Video B";
        boxB.style.flex = '1';
        boxB.style.marginLeft = '20px';
        boxB.style.backgroundColor = '#fff';
        boxB.style.border = '1px solid #333';
        boxB.style.color = '#333';
        boxB.style.fontSize = '4rem';
        boxB.style.textAlign = 'center';
        boxB.style.padding = '150px 50px';
        boxB.style.cursor = 'pointer';
        boxB.style.borderRadius = '12px';
        boxB.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';

        choiceContainer.appendChild(boxA);
        choiceContainer.appendChild(boxB);
        document.body.appendChild(choiceContainer);

        choiceStartTime = performance.now();

        boxA.onclick = () => {
            const choiceTime = performance.now() - choiceStartTime;
            choiceContainer.remove();
            watchChosenVideo(twoVideos[0], "A", forecastData, choiceTime, twoVideos, onComplete);
        };

        boxB.onclick = () => {
            const choiceTime = performance.now() - choiceStartTime;
            choiceContainer.remove();
            watchChosenVideo(twoVideos[1], "B", forecastData, choiceTime, twoVideos, onComplete);
        };

        setTimeout(() => {
            if (document.body.contains(choiceContainer)) {
                (Math.random() < 0.5 ? boxA : boxB).click();
            }
        }, 7000);
    });
}
  

//    BLOCK 2

function generatePairsForValenceBlock2(videos, emotionTypes, overcameMap, lostMap) {
    // Group by emotion, attach overcame/lost sets
    let groups = groupVideosByEmotionWithWinsLosses(videos, overcameMap, lostMap);

    // For example, emotionTypes might be ["Joy","Calmness","Excitement"]
    // Find which of these actually have videos
    let nonEmptyEmotions = emotionTypes.filter(e => groups[e] && groups[e].length > 0);
    if (nonEmptyEmotions.length < 2) {
        // If there's only 1 (or 0) distinct emotion with videos, skip THIS subset
        console.log("Skipping subset for", emotionTypes, "because only one or zero distinct emotions found:", nonEmptyEmotions);
        return [];
    }

    const [emoA, emoB, emoC] = emotionTypes;
    let arrA = groups[emoA] || [];
    let arrB = groups[emoB] || [];
    let arrC = groups[emoC] || [];

    let nA = arrA.length, nB = arrB.length, nC = arrC.length;

    // 1) Balanced distribution
    const { x12, x13, x23 } = findBestTriplet(nA, nB, nC, 5);

    // 2) synergy approach for x12 combos from arrA & arrB
    let pairs = [];
    let pairAB = synergyMatchPair(arrA, arrB, x12);
    pairs.push(...pairAB);

    // synergy for x13 combos from arrA & arrC
    let pairAC = synergyMatchPair(arrA, arrC, x13);
    pairs.push(...pairAC);

    // synergy for x23 combos from arrB & arrC
    let pairBC = synergyMatchPair(arrB, arrC, x23);
    pairs.push(...pairBC);

    // 3) leftover synergy among all three
    let leftover = [];
    leftover.push(...arrA.map(v => ({ video: v, emotion: emoA })));
    leftover.push(...arrB.map(v => ({ video: v, emotion: emoB })));
    leftover.push(...arrC.map(v => ({ video: v, emotion: emoC })));

    // pick leftover pairs based on highest synergy across different emotions
    while (true) {
        if (leftover.length < 2) break;
        let bestS = -1, bestI = -1, bestJ = -1;
        for (let i = 0; i < leftover.length; i++) {
            for (let j = i + 1; j < leftover.length; j++) {
                if (leftover[i].emotion !== leftover[j].emotion) {
                    let sc = synergyScore(leftover[i].video, leftover[j].video);
                    if (sc > bestS) {
                        bestS = sc;
                        bestI = i;
                        bestJ = j;
                    }
                }
            }
        }
        if (bestI >= 0 && bestJ >= 0) {
            let vidA = leftover[bestI].video;
            let vidB = leftover[bestJ].video;
            // remove the second index first (to not shift the first)
            leftover.splice(bestJ, 1);
            leftover.splice(bestI, 1);
            pairs.push([vidA, vidB]);
        } else {
            break; // no cross-emotion leftover found
        }
    }

    return pairs;
}


 function generateBlock2Pairs(approachedArr, avoidedArr, overcameMap, lostMap) {
    const positiveTypes = ["Joy","Calmness","Excitement"];
    const negativeTypes = ["Fear","Anger","Sadness"];
  
    // Approach subsets
    let approachedPos = approachedArr.filter(v => positiveTypes.includes(v.type));
    let approachedNeg = approachedArr.filter(v => negativeTypes.includes(v.type));
  
    let approachedPosPairs = generatePairsForValenceBlock2(approachedPos, positiveTypes, overcameMap, lostMap);
    let approachedNegPairs = generatePairsForValenceBlock2(approachedNeg, negativeTypes, overcameMap, lostMap);
  
    // Avoid subsets
    let avoidedPos = avoidedArr.filter(v => positiveTypes.includes(v.type));
    let avoidedNeg = avoidedArr.filter(v => negativeTypes.includes(v.type));
  
    let avoidedPosPairs = generatePairsForValenceBlock2(avoidedPos, positiveTypes, overcameMap, lostMap);
    let avoidedNegPairs = generatePairsForValenceBlock2(avoidedNeg, negativeTypes, overcameMap, lostMap);
  
    let allPairs = [];
  
    approachedPosPairs.forEach(p => 
      allPairs.push({ pair:p, matchedTrialsExhausted:0, type:"approach", valence:"positive" })
    );
    approachedNegPairs.forEach(p => 
      allPairs.push({ pair:p, matchedTrialsExhausted:0, type:"approach", valence:"negative" })
    );
    avoidedPosPairs.forEach(p => 
      allPairs.push({ pair:p, matchedTrialsExhausted:0, type:"avoid", valence:"positive" })
    );
    avoidedNegPairs.forEach(p => 
      allPairs.push({ pair:p, matchedTrialsExhausted:0, type:"avoid", valence:"negative" })
    );
  
    shuffleArray(allPairs);
    return allPairs;
  }


  function ExperimentBlock2(participantChoices) {
    participantChoices.push({ block: "2", part: "Experiment_Start_Block2" });
    clearButtons();

    let block2Pairs = generateBlock2Pairs(approachedVideos, avoidedVideos, videoOvercameMap, videoLostMap);
  
    if (block2Pairs.length === 0) {
        checkBlock3();
        return;
    }

    // Pass participantChoices along to the next function
    playAllPairsBlock2(block2Pairs, 0, participantChoices);
}

function playAllPairsBlock2(pairs, index, participantChoices) {
    if (index >= pairs.length) {
        checkBlock3(); 
        return;
    }
    // Pass participantChoices into runPairTrialBlock2
    runPairTrialBlock2(pairs[index], () => {
        playAllPairsBlock2(pairs, index + 1, participantChoices);
    }, participantChoices);
}



function runPairTrialBlock2(pairObj, onComplete, participantChoices) {
    const twoVideos = pairObj.pair;
    const matchedTrialsExhausted = pairObj.matchedTrialsExhausted;
    let choiceStartTime;

    dualForecast(twoVideos, (forecastData) => {
        clearButtons();
        feedbackContainer2.innerHTML = "";

        const choiceContainer = document.createElement("div");
        choiceContainer.style.display = 'flex';
        choiceContainer.style.justifyContent = 'space-between';
        choiceContainer.style.margin = '0px auto 200px auto';
        choiceContainer.style.width = '90%';
        choiceContainer.style.maxWidth = '1200px';
        choiceContainer.style.border = 'none';
        choiceContainer.style.background = 'none';

        const boxA = document.createElement("div");
        boxA.innerText = "Video A";
        boxA.style.flex = '1';
        boxA.style.marginRight = '20px';
        boxA.style.backgroundColor = '#fff';
        boxA.style.border = '1px solid #333';
        boxA.style.color = '#333';
        boxA.style.fontSize = '4rem';
        boxA.style.textAlign = 'center';
        boxA.style.padding = '150px 50px';
        boxA.style.cursor = 'pointer';
        boxA.style.borderRadius = '12px';
        boxA.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';

        const boxB = document.createElement("div");
        boxB.innerText = "Video B";
        boxB.style.flex = '1';
        boxB.style.marginLeft = '20px';
        boxB.style.backgroundColor = '#fff';
        boxB.style.border = '1px solid #333';
        boxB.style.color = '#333';
        boxB.style.fontSize = '4rem';
        boxB.style.textAlign = 'center';
        boxB.style.padding = '150px 50px';
        boxB.style.cursor = 'pointer';
        boxB.style.borderRadius = '12px';
        boxB.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';

        choiceContainer.appendChild(boxA);
        choiceContainer.appendChild(boxB);
        document.body.appendChild(choiceContainer);

        choiceStartTime = performance.now();

        // If user clicks box A
        boxA.onclick = () => {
            const choiceTime = performance.now() - choiceStartTime;
            choiceContainer.remove();
            watchChosenVideoBlock2(
                twoVideos[0],            // chosenVideo
                "A",                     // chosenLabel
                forecastData,            // forecastData
                choiceTime,              // choiceTime
                twoVideos,               // both videos
                matchedTrialsExhausted,
                onComplete,
                participantChoices       // NEW: pass it down
            );
        };

        // If user clicks box B
        boxB.onclick = () => {
            const choiceTime = performance.now() - choiceStartTime;
            choiceContainer.remove();
            watchChosenVideoBlock2(
                twoVideos[1],
                "B",
                forecastData,
                choiceTime,
                twoVideos,
                matchedTrialsExhausted,
                onComplete,
                participantChoices       // pass it down
            );
        };

        // Auto-choice if no response within 7 seconds
        setTimeout(() => {
            if (document.body.contains(choiceContainer)) {
                (Math.random() < 0.5 ? boxA : boxB).click();
            }
        }, 7000);
    });
}


//  D) watchChosenVideoBlock2 – now merges in old survey data automatically
/////////////////////////////////////////////////////////////////////////
function watchChosenVideoBlock2(
    chosenVideo,
    chosenLabel,
    forecastData,
    choiceTime,
    twoVideos,
    matchedTrialsExhausted,
    onComplete,
    participantChoices  // we pass it here from runPairTrialBlock2
) {
    videoPlayer.src = chosenVideo.src;
    videoPlayer.onloadedmetadata = () => {
        videoPlayer.currentTime = 0;
        videoPlayer.style.display = 'block';

        playVideoUntil3Seconds(() => {
            videoPlayer.style.display = 'none';

            EmoRatingChosen(chosenVideo, (emoResponse) => {
                trialNum++;

                // 1) Get the last row in participantChoices, to “inherit” all its fields
                //const lastRow = participantChoices[ participantChoices.length - 1 ] || {};

                // 2) Build the new row by merging that lastRow’s data with these new fields
                const newRow = {
                    // Copy everything from the last row (that includes BFI, Spontaneous, etc.)
                    ...masterRowWithAllData, 

                    // Then overwrite the fields for this block’s trial
                    block:               "2",
                    trialNum:            trialNum,
                    MatchedTrialsExhausted: matchedTrialsExhausted,

                    vID_A: twoVideos[0].src,
                    vID_B: twoVideos[1].src,
                    videoType_A: twoVideos[0].type,
                    videoType_B: twoVideos[1].type,

                    VideoA_ValenceForecast:  forecastData.A.valenceForecast,
                    VideoA_InterestForecast: forecastData.A.interestForecast,
                    VideoA_JoyForecast:      forecastData.A.joy,
                    VideoA_CalmForecast:     forecastData.A.calm,
                    VideoA_ExcitedForecast:  forecastData.A.excited,
                    VideoA_FearForecast:     forecastData.A.fear,
                    VideoA_SadForecast:      forecastData.A.sadness,
                    VideoA_AngerForecast:    forecastData.A.anger,

                    VideoB_ValenceForecast:  forecastData.B.valenceForecast,
                    VideoB_InterestForecast: forecastData.B.interestForecast,
                    VideoB_JoyForecast:      forecastData.B.joy,
                    VideoB_CalmForecast:     forecastData.B.calm,
                    VideoB_ExcitedForecast:  forecastData.B.excited,
                    VideoB_FearForecast:     forecastData.B.fear,
                    VideoB_SadForecast:      forecastData.B.sadness,
                    VideoB_AngerForecast:    forecastData.B.anger,

                    choice:        chosenLabel,
                    choiceTime:    choiceTime.toFixed(2),
                    chosen_vID:    chosenVideo.src,
                    chosen_VideoType: chosenVideo.type,

                    Experienced_Valence:   emoResponse.valence,
                    Experienced_Interest:  emoResponse.postInterest,
                    Experienced_Joy:       emoResponse.joy,
                    Experienced_Calm:      emoResponse.calm,
                    Experienced_Excited:   emoResponse.excited,
                    Experienced_Fear:      emoResponse.fear,
                    Experienced_Sad:       emoResponse.sadness,
                    Experienced_Anger:     emoResponse.anger,
                };

                // 3) Now push that brand-new row. We get the old fields + block2 stuff.
                participantChoices.push(newRow);

                // 4) Save & proceed
                generateAndUploadCSV(participantChoices);
                showFixationCross(onComplete);
            });
        });
    };
}


/******************************************
 *           BLOCK 3 – LEFTOVER PAIRING
 ******************************************/
function checkBlock3() {
    // After finishing Block 2, check if we actually have leftover pairs for Block 3
    const leftovers = computeBlock3Leftovers();
    const posOK = leftovers.positive.leftoverApproached.length > 0 
               && leftovers.positive.leftoverAvoided.length > 0;
    const negOK = leftovers.negative.leftoverApproached.length > 0 
               && leftovers.negative.leftoverAvoided.length > 0;

    if (posOK || negOK) {
        // We do have leftover videos => run Block 3
        ExperimentBlock3();
    } else {
        // No leftover => go straight to the ERQ
        ERQ(participantChoices); 
    }
}
function computeBlock3Leftovers() {
    const positiveTypes = ["Joy", "Calmness", "Excitement"];
    const negativeTypes = ["Fear", "Anger", "Sadness"];
    
    // Gather used video srcs from Block 2 trials.
    let usedBlock2VideoSrcs = new Set();
    participantChoices.forEach(trial => {
        if (trial.block === "2") {
            if (trial.vID_A) usedBlock2VideoSrcs.add(trial.vID_A);
            if (trial.vID_B) usedBlock2VideoSrcs.add(trial.vID_B);
          }
    });
    
    // For positive videos:
    let approachedPositive = approachedVideos.filter(v => positiveTypes.includes(v.type));
    let avoidedPositive = avoidedVideos.filter(v => positiveTypes.includes(v.type));
    
    let leftoverApproachedPositive = approachedPositive.filter(v => !usedBlock2VideoSrcs.has(v.src));
    let leftoverAvoidedPositive = avoidedPositive.filter(v => !usedBlock2VideoSrcs.has(v.src));
    
    // For negative videos:
    let approachedNegative = approachedVideos.filter(v => negativeTypes.includes(v.type));
    let avoidedNegative = avoidedVideos.filter(v => negativeTypes.includes(v.type));
    
    let leftoverApproachedNegative = approachedNegative.filter(v => !usedBlock2VideoSrcs.has(v.src));
    let leftoverAvoidedNegative = avoidedNegative.filter(v => !usedBlock2VideoSrcs.has(v.src));
    
    return {
      positive: {
        leftoverApproached: leftoverApproachedPositive,
        leftoverAvoided: leftoverAvoidedPositive
      },
      negative: {
        leftoverApproached: leftoverApproachedNegative,
        leftoverAvoided: leftoverAvoidedNegative
      }
    };
  }
  
  function generateBlock3PairsForValence(approachedArr, avoidedArr) {
    let pairs = [];
    // Work with copies so we don't modify the originals.
    let approached = approachedArr.slice();
    let avoided = avoidedArr.slice();
    
    while (approached.length > 0 && avoided.length > 0) {
      let pairFound = false;
      for (let i = 0; i < approached.length; i++) {
        for (let j = 0; j < avoided.length; j++) {
          if (approached[i].type !== avoided[j].type) {
            pairs.push([approached[i], avoided[j]]);
            // Remove these videos so they are not reused.
            approached.splice(i, 1);
            avoided.splice(j, 1);
            pairFound = true;
            break;
          }
        }
        if (pairFound) break;
      }
      if (!pairFound) break; // No further valid pairs can be formed.
    }
    return pairs;
  }
  
  function watchChosenVideoBlock3(
    chosenVideo,
    chosenLabel,
    forecastData,
    choiceTime,
    twoVideos,
    onComplete,
    participantChoices
  ) {
    videoPlayer.src = chosenVideo.src;
    videoPlayer.onloadedmetadata = () => {
      videoPlayer.currentTime = 0;
      videoPlayer.style.display = 'block';
      playVideoUntil3Seconds(() => {
        videoPlayer.style.display = 'none';
        // Use the same EmoRatingChosen function from before.
        EmoRatingChosen(chosenVideo, (emoResponse) => {
          trialNum++;
          // Retrieve the last row from participantChoices to inherit its survey data.
          const lastRow = participantChoices[participantChoices.length - 1] || {};
          // Merge all previous (between-blocks) survey fields with the new block 3 trial data.
          const newRow = {
            ...lastRow, // Inherit all fields from the previous row
            block: "3",
            trialNum: trialNum,
            vID_A: twoVideos[0].src,
            vID_B: twoVideos[1].src,
            videoType_A: twoVideos[0].type,
            videoType_B: twoVideos[1].type,
            VideoA_ValenceForecast: forecastData.A.valenceForecast,
            VideoA_InterestForecast: forecastData.A.interestForecast,
            VideoA_JoyForecast: forecastData.A.joy,
            VideoA_CalmForecast: forecastData.A.calm,
            VideoA_ExcitedForecast: forecastData.A.excited,
            VideoA_FearForecast: forecastData.A.fear,
            VideoA_SadForecast: forecastData.A.sadness,
            VideoA_AngerForecast: forecastData.A.anger,
            VideoB_ValenceForecast: forecastData.B.valenceForecast,
            VideoB_InterestForecast: forecastData.B.interestForecast,
            VideoB_JoyForecast: forecastData.B.joy,
            VideoB_CalmForecast: forecastData.B.calm,
            VideoB_ExcitedForecast: forecastData.B.excited,
            VideoB_FearForecast: forecastData.B.fear,
            VideoB_SadForecast: forecastData.B.sadness,
            VideoB_AngerForecast: forecastData.B.anger,
            choice: chosenLabel,
            choiceTime: choiceTime.toFixed(2),
            chosen_vID: chosenVideo.src,
            chosen_VideoType: chosenVideo.type,
            Experienced_Valence: emoResponse.valence,
            Experienced_Interest: emoResponse.postInterest,
            Experienced_Joy: emoResponse.joy,
            Experienced_Calm: emoResponse.calm,
            Experienced_Excited: emoResponse.excited,
            Experienced_Fear: emoResponse.fear,
            Experienced_Sad: emoResponse.sadness,
            Experienced_Anger: emoResponse.anger
          };
  
          participantChoices.push(newRow);
          generateAndUploadCSV(participantChoices);
          showFixationCross(onComplete);
        });
      });
    };
  }

  function runPairTrialBlock3(twoVideos, onComplete) {
    let choiceStartTime;
    dualForecast(twoVideos, (forecastData) => {
      clearButtons();
      feedbackContainer2.innerHTML = "";
  
      const choiceContainer = document.createElement("div");
      choiceContainer.style.display = 'flex';
      choiceContainer.style.justifyContent = 'space-between';
      choiceContainer.style.margin = '0px auto 200px auto';
      choiceContainer.style.width = '90%';
      choiceContainer.style.maxWidth = '1200px';
      choiceContainer.style.border = 'none';
      choiceContainer.style.background = 'none';
  
      const boxA = document.createElement("div");
      boxA.innerText = "Video A";
      boxA.style.flex = '1';
      boxA.style.marginRight = '20px';
      boxA.style.backgroundColor = '#fff';
      boxA.style.border = '1px solid #333';
      boxA.style.color = '#333';
      boxA.style.fontSize = '4rem';
      boxA.style.textAlign = 'center';
      boxA.style.padding = '150px 50px';
      boxA.style.cursor = 'pointer';
      boxA.style.borderRadius = '12px';
      boxA.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  
      const boxB = document.createElement("div");
      boxB.innerText = "Video B";
      boxB.style.flex = '1';
      boxB.style.marginLeft = '20px';
      boxB.style.backgroundColor = '#fff';
      boxB.style.border = '1px solid #333';
      boxB.style.color = '#333';
      boxB.style.fontSize = '4rem';
      boxB.style.textAlign = 'center';
      boxB.style.padding = '150px 50px';
      boxB.style.cursor = 'pointer';
      boxB.style.borderRadius = '12px';
      boxB.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  
      choiceContainer.appendChild(boxA);
      choiceContainer.appendChild(boxB);
      document.body.appendChild(choiceContainer);
  
      choiceStartTime = performance.now();
  
      boxA.onclick = () => {
        const choiceTime = performance.now() - choiceStartTime;
        choiceContainer.remove();
        watchChosenVideoBlock3(twoVideos[0], "A", forecastData, choiceTime, twoVideos, onComplete, participantChoices);
      };
  
      boxB.onclick = () => {
        const choiceTime = performance.now() - choiceStartTime;
        choiceContainer.remove();
        watchChosenVideoBlock3(twoVideos[1], "B", forecastData, choiceTime, twoVideos, onComplete, participantChoices);
      };
  
      // Auto-choice if no response within 7 seconds.
      setTimeout(() => {
        if (document.body.contains(choiceContainer)) {
          (Math.random() < 0.5 ? boxA : boxB).click();
        }
      }, 7000);
    });
  }
  
  function playAllPairsBlock3(pairs, index) {
    if (index >= pairs.length) {
        // Done with Block 3 entirely – now proceed to ERQ
        ERQ(participantChoices);
        return;
    }
    runPairTrialBlock3(pairs[index], () => playAllPairsBlock3(pairs, index + 1));
}

  function ExperimentBlock3() {
    participantChoices.push({ block: "3", part: "Experiment_Start_Block3" });
    clearButtons();
  
    // Compute leftover videos
    const leftovers = computeBlock3Leftovers();
    // Generate leftover pairs for positive & negative
    const positivePairs = generateBlock3PairsForValence(
      leftovers.positive.leftoverApproached, 
      leftovers.positive.leftoverAvoided
    );
    const negativePairs = generateBlock3PairsForValence(
      leftovers.negative.leftoverApproached, 
      leftovers.negative.leftoverAvoided
    );
    // Combine and shuffle
    const block3Pairs = positivePairs.concat(negativePairs);
    shuffleArray(block3Pairs);
  
    // If no valid leftover pairs, skip
    if (block3Pairs.length === 0) {
        ERQ(participantChoices);  
    } else {
      playAllPairsBlock3(block3Pairs, 0);
    }
  }
  





//Forecasting

function buildForecastColumn(video, label, responsesObj) {
    const col = document.createElement('div');
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
    col.style.alignItems = 'center';
    col.style.border = '1px solid #ccc';
    col.style.margin = '0';
    col.style.padding = '5px';
    col.style.width = '%';
    col.style.boxSizing = 'border-box';
    col.style.backgroundColor = '#fff';
    col.style.borderRadius = '8px';
    col.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    col.style.height = 'auto';
    col.style.overflow = 'visible';

    const header = document.createElement('h3');
    header.textContent = `Video ${label}`;
    header.style.marginBottom = '10px';
    header.style.fontFamily = 'Arial, sans-serif';
    header.style.color = '#333';
    header.style.fontSize = '1.2em';
    col.appendChild(header);

    // Attempt to load still frame
    const imgWrapper = document.createElement('div');
    imgWrapper.style.width = '300px';
    imgWrapper.style.height = '200px';
    imgWrapper.style.overflow = 'hidden';
    imgWrapper.style.marginBottom = '10px';

    const img = document.createElement('img');
    img.src = video.src.replace('.mp4', '.png');
    img.alt = `Still frame from ${video.src}`;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.borderRadius = '0px';

    imgWrapper.appendChild(img);
    col.appendChild(imgWrapper);

    const stillText = document.createElement('p');
    stillText.textContent = `Still frame from ${video.src}`;
    stillText.style.width = '100%';
    stillText.style.height = '60px';
    stillText.style.backgroundColor = '#eee';
    stillText.style.textAlign = 'center';
    stillText.style.lineHeight = '60px';
    stillText.style.borderRadius = '0px';
    stillText.style.marginBottom = '10px';
    stillText.style.display = 'none';
    col.appendChild(stillText);

    img.onerror = () => {
        img.style.display = 'none';
        stillText.style.display = 'block';
    };

    // interestForecast scale: 1..7
    const interestLikert = createForecastLikert(
        "interestForecast",
        "How <u>interesting</u> do you think this video will be?",
        [1, 2, 3, 4, 5, 6, 7],
        ["Not interesting at all", "", "", "Somewhat interesting", "", "", "Very interesting"],
        (val) => { responsesObj[label].interestForecast = val; },
        /* isValenceOrInterest? => larger boxes */ true
    );
    interestLikert.style.marginBottom = '15px';
    col.appendChild(interestLikert);

    // valenceForecast scale: -3..3
    const valenceLikert = createForecastLikert(
        "valenceForecast",
        "How do you think this video will make you <u>feel</u>?",
        [-3, -2, -1, 0, 1, 2, 3],
        ["Very unpleasant, negative", "", "", "Neutral", "", "", "Very pleasant, positive"],
        (val) => { responsesObj[label].valenceForecast = val; },
        /* isValenceOrInterest? => larger boxes */ true
    );
    col.appendChild(valenceLikert);

    const line = document.createElement('hr');
    line.style.width = '100%';
    line.style.margin = '15px auto';
    col.appendChild(line);

    // *** CHANGED THIS TO USE innerHTML *** 
    const subHeader = document.createElement('p');
    subHeader.innerHTML = "Rate the extent to which you expect to feel the following <u>emotions</u>:";
    subHeader.style.fontWeight = 'bold';
    subHeader.style.textAlign = 'center';
    subHeader.style.marginBottom = '10px';
    col.appendChild(subHeader);

    // Emotions: 1..5
    const emotionContainer = document.createElement('div');
    emotionContainer.style.display = 'flex';
    emotionContainer.style.alignItems = 'stretch';
    emotionContainer.style.width = '100%';
    emotionContainer.style.gap = '10px';
    emotionContainer.style.boxSizing = 'border-box';
    emotionContainer.style.padding = '0 17px';

    // Negative emotions
    const negativeEmoColumn = document.createElement('div');
    negativeEmoColumn.style.display = 'flex';
    negativeEmoColumn.style.flexDirection = 'column';
    negativeEmoColumn.style.alignItems = 'center';
    negativeEmoColumn.style.width = '45%';

    const negativeEmotions = [
        { key: "fear", name: "AFRAID" },
        { key: "sadness", name: "SAD" },
        { key: "anger", name: "ANGRY" }
    ];

    negativeEmotions.forEach(emotion => {
        const emotionLikert = createForecastLikert(
            emotion.key,
            "",
            [1, 2, 3, 4, 5],
            [
                `Not at all <u>${emotion.name}</u>`,
                "",
                `Somewhat <u>${emotion.name}</u>`,
                "",
                `Very <u>${emotion.name}</u>`
            ],
            (val) => { responsesObj[label][emotion.key] = val; },
            /* isValenceOrInterest? => false for smaller boxes */ false
        );
        emotionLikert.style.marginBottom = '5px';
        negativeEmoColumn.appendChild(emotionLikert);
    });

    // Divider for columns
    const divider = document.createElement('div');
    divider.style.borderLeft = '2px solid #333';
    divider.style.alignSelf = 'stretch';
    divider.style.margin = '0 5px';

    // Positive emotions
    const positiveEmoColumn = document.createElement('div');
    positiveEmoColumn.style.display = 'flex';
    positiveEmoColumn.style.flexDirection = 'column';
    positiveEmoColumn.style.alignItems = 'center';
    positiveEmoColumn.style.width = '45%';

    const positiveEmotions = [
        { key: "joy", name: "JOYFUL" },
        { key: "calm", name: "CALM" },
        { key: "excited", name: "EXCITED" }
    ];

    positiveEmotions.forEach(emotion => {
        const emotionLikert = createForecastLikert(
            emotion.key,
            "",
            [1, 2, 3, 4, 5],
            [
                `Not at all <u>${emotion.name}</u>`,
                "",
                `Somewhat <u>${emotion.name}</u>`,
                "",
                `Very <u>${emotion.name}</u>`
            ],
            (val) => { responsesObj[label][emotion.key] = val; },
            false
        );
        emotionLikert.style.marginBottom = '5px';
        positiveEmoColumn.appendChild(emotionLikert);
    });

    emotionContainer.appendChild(negativeEmoColumn);
    emotionContainer.appendChild(divider);
    emotionContainer.appendChild(positiveEmoColumn);
    col.appendChild(emotionContainer);

    return col;
}

function setAnchorColor(labelElement, labelText) {
    const textUpper = labelText.toUpperCase();
    // For positive
    if (
        textUpper.includes("VERY") &&
        (textUpper.includes("JOYFUL") || textUpper.includes("CALM") || textUpper.includes("EXCITED"))
    ) {
        labelElement.style.color = "#009900"; // strong green
    } else if (
        textUpper.includes("NOT AT ALL") &&
        (textUpper.includes("JOYFUL") || textUpper.includes("CALM") || textUpper.includes("EXCITED"))
    ) {
        labelElement.style.color = "#99cc99"; // pastel green
    }
    // For negative
    else if (
        textUpper.includes("VERY") &&
        (textUpper.includes("AFRAID") || textUpper.includes("SAD") || textUpper.includes("ANGRY"))
    ) {
        labelElement.style.color = "#990000"; // strong red
    } else if (
        textUpper.includes("NOT AT ALL") &&
        (textUpper.includes("AFRAID") || textUpper.includes("SAD") || textUpper.includes("ANGRY"))
    ) {
        labelElement.style.color = "#ff9999"; // pastel red
    }
}


function dualForecast(twoVideos, onSubmit) {
    feedbackContainer2.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'space-between';
    wrapper.style.alignItems = 'flex-start';
    wrapper.style.width = '100%';
    wrapper.style.maxHeight = '95vh';
    wrapper.style.boxSizing = 'border-box';
    wrapper.style.padding = '0px';
    wrapper.style.flexWrap = 'nowrap';
    wrapper.style.gap = '-5px';
    wrapper.style.overflowY = 'auto';

    const responses = { A: {}, B: {} };

    const colA = buildForecastColumn(twoVideos[0], 'A', responses);
    const colB = buildForecastColumn(twoVideos[1], 'B', responses);

    wrapper.appendChild(colA);
    wrapper.appendChild(divider());
    wrapper.appendChild(colB);
    feedbackContainer2.appendChild(wrapper);

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.style.display = 'block';
    submitBtn.style.margin = '10px auto 0 auto';
    submitBtn.style.padding = '10px 20px';
    submitBtn.style.fontSize = '16px';
    submitBtn.style.cursor = 'pointer';
    submitBtn.style.backgroundColor = '#d8d8d8';
    submitBtn.style.color = '#333';
    submitBtn.style.border = 'none';
    submitBtn.style.borderRadius = '0px';
    submitBtn.style.width = '150px';

    submitBtn.onmouseover = () => {
        submitBtn.style.backgroundColor = '#ccc';
    };
    submitBtn.onmouseout = () => {
        submitBtn.style.backgroundColor = '#d8d8d8';
    };

    submitBtn.onclick = () => {
        const needed = [
            "interestForecast", "valenceForecast",
            "fear", "sadness", "anger", "joy", "calm", "excited"
        ];

        const completeA = needed.every(q => responses.A[q] !== undefined);
        const completeB = needed.every(q => responses.B[q] !== undefined);
        if (!completeA || !completeB) { ///// UNCOMMENT, only for testing testinggg
            alert("Please answer all forecasts for each video.");
            return;
        }

        // Hide the entire feedbackContainer2 to remove the "ghost rectangle"
        feedbackContainer2.innerHTML = '';
        feedbackContainer2.style.display = 'none';

        onSubmit(responses);
    };

    feedbackContainer2.appendChild(submitBtn);

    feedbackContainer2.style.display = 'block';
    feedbackContainer2.style.padding = '5px';
    feedbackContainer2.style.backgroundColor = '#f9f9f9';
    feedbackContainer2.style.borderRadius = '8px';
    feedbackContainer2.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
    feedbackContainer2.style.width = '100%';
    feedbackContainer2.style.height = '100%';
    feedbackContainer2.style.overflow = 'hidden';
}


function createForecastLikert(
    id,
    emotionName,
    scaleValues,
    scaleLabels,
    onSelected,
    isValenceOrInterest
) {
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.width = '100%';

    if (emotionName.trim() !== "") {
        const q = document.createElement('p');
        q.style.fontWeight = 'bold';
        q.style.fontFamily = 'Arial, sans-serif';
        q.style.color = '#333';
        q.style.marginBottom = '10px';
        q.style.fontSize = '1em';
        // We use innerHTML so any <u> tags inside emotionName are rendered
        q.innerHTML = emotionName;
        container.appendChild(q);
    }

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'center';
    row.style.alignItems = 'center';
    row.style.marginBottom = '10px';
    row.style.gap = '0';

    // Slightly larger boxes for valence/interest if needed
    let boxWidth = isValenceOrInterest ? 80 : 60;
    let boxHeight = isValenceOrInterest ? 65 : 50;

    scaleValues.forEach((val, idx) => {
        const box = document.createElement('div');
        box.classList.add('likert-box2');
        box.style.border = '1px solid #999';
        box.style.margin = '0';
        box.style.padding = '4px';
        box.style.cursor = 'pointer';
        box.style.borderRadius = '0px';
        box.style.flex = `0 0 ${boxWidth}px`;
        box.style.height = `${boxHeight}px`;
        // Ensure the contents are top-aligned but horizontally centered
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'flex-start';
        box.style.boxSizing = 'border-box';
        box.style.fontSize = '12px';
        box.style.backgroundColor = '';

        // Numeric rating on top
        const numDiv = document.createElement('div');
        numDiv.textContent = val.toString();
        numDiv.style.fontWeight = 'bold';
        numDiv.style.color = '#333';
        numDiv.style.marginBottom = '2px';
        box.appendChild(numDiv);

        // Label text below the numeric rating
        const label = scaleLabels[idx] || "";
        const labDiv = document.createElement('div');
        labDiv.style.fontSize = isValenceOrInterest ? '11px' : '10px';
        labDiv.style.textAlign = 'center';
        labDiv.innerHTML = label;  // so <u> can be rendered
        setAnchorColor(labDiv, label);
        box.appendChild(labDiv);

        // Onclick highlight logic
        box.onclick = () => {
            row.querySelectorAll('.likert-box2').forEach(b => {
                b.style.backgroundColor = '';
            });
            box.style.backgroundColor = '#d8d8d8';
            onSelected(val);
        };
        row.appendChild(box);
    });

    container.appendChild(row);
    return container;
}



function divider() {
    const divider = document.createElement('div');
    // Still the vertical bar used between the two columns
    divider.style.borderLeft = '2px solid #555'; // darker grey
    divider.style.height = '100%';
    divider.style.margin = '0 10px';
    return divider;
}





  // 4) WATCH CHOSEN VIDEO + POST RATING
  
  function watchChosenVideo(
    chosenVideo,          
    chosenLabel,          
    forecastData,         
    choiceTime,           
    twoVideos,            
    onComplete
) {
    videoPlayer.src = chosenVideo.src;
    videoPlayer.onloadedmetadata = () => {
        videoPlayer.currentTime = 0;
        videoPlayer.style.display = 'block';
        playVideoUntil3Seconds(() => {
            videoPlayer.style.display = 'none';

            // Post-experience rating
            EmoRatingChosen(chosenVideo, (emoResponse) => {
                trialNum++;

                participantChoices.push({
                    trialNum: trialNum,
                    // Save both A & B video src
                    vID_A: twoVideos[0].src,
                    vID_B: twoVideos[1].src,
                    videoType_A: twoVideos[0].type, 
                    videoType_B: twoVideos[1].type,

                    VideoA_ValenceForecast: forecastData.A.valenceForecast,
                    VideoA_InterestForecast: forecastData.A.interestForecast,
                    VideoA_JoyForecast: forecastData.A.joy,
                    VideoA_CalmForecast: forecastData.A.calm,
                    VideoA_ExcitedForecast: forecastData.A.excited,
                    VideoA_FearForecast: forecastData.A.fear,
                    VideoA_SadForecast: forecastData.A.sadness,
                    VideoA_AngerForecast: forecastData.A.anger,

                    VideoB_ValenceForecast: forecastData.B.valenceForecast,
                    VideoB_InterestForecast: forecastData.B.interestForecast,
                    VideoB_JoyForecast: forecastData.B.joy,
                    VideoB_CalmForecast: forecastData.B.calm,
                    VideoB_ExcitedForecast: forecastData.B.excited,
                    VideoB_FearForecast: forecastData.B.fear,
                    VideoB_SadForecast: forecastData.B.sadness,
                    VideoB_AngerForecast: forecastData.B.anger,

                    choice: chosenLabel,
                    choiceTime: choiceTime.toFixed(2),
                    chosen_vID: chosenVideo.src,
                    chosen_VideoType: chosenVideo.type,

                    Experienced_Valence: emoResponse.valence,
                    Experienced_Interest: emoResponse.postInterest,
                    Experienced_Joy: emoResponse.joy,
                    Experienced_Calm: emoResponse.calm,
                    Experienced_Excited: emoResponse.excited,
                    Experienced_Fear: emoResponse.fear,
                    Experienced_Sad: emoResponse.sadness,
                    Experienced_Anger: emoResponse.anger
                });
                recordBlock1Choice(twoVideos, chosenLabel);
                generateAndUploadCSV(participantChoices);
                showFixationCross(onComplete);
            });
        });
    };
}



function EmoRatingChosen(video, onSubmit) {
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');

    const postRatingPane = document.createElement("div");
    postRatingPane.style.width = '110%';
    postRatingPane.style.margin = '20px auto';
    postRatingPane.style.maxWidth = '1200px';
    postRatingPane.style.border = '1px solid #333';
    postRatingPane.style.borderRadius = '12px';
    postRatingPane.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    postRatingPane.style.padding = '20px';
    postRatingPane.style.backgroundColor = '#fff';
    postRatingPane.style.boxSizing = 'border-box';

    // interest
    const q1 = createPostVideoLikert(
        "postInterest",
        "How <u>interesting</u> was this experience?",
        [1, 2, 3, 4, 5, 6, 7],
        ["Not interesting", "", "", "Somewhat", "", "", "Very interesting"],
        (val) => { postRatingPane.setAttribute("data-postInterest", val); },
        true // bigger
    );

    // valence
    const q2 = createPostVideoLikert(
        "valence",
        "How do you <u>feel</u> right now?",
        [-3, -2, -1, 0, 1, 2, 3],
        ["Very unpleasant", "", "", "Neutral", "", "", "Very pleasant"],
        (val) => { postRatingPane.setAttribute("data-valence", val); },
        true // bigger
    );

    const topPane = document.createElement("div");
    topPane.style.marginBottom = '20px';
    topPane.appendChild(q1);
    topPane.appendChild(q2);

    const dividerLine = document.createElement("hr");
    dividerLine.style.border = 'none';
    dividerLine.style.height = '1px';
    dividerLine.style.backgroundColor = '#333';
    dividerLine.style.margin = '20px 0';
    topPane.appendChild(dividerLine);

    postRatingPane.appendChild(topPane);

    // *** CHANGED THIS TO USE innerHTML ***
    const commonHeader = document.createElement("p");
    commonHeader.innerHTML = "What <u>emotions</u> do you feel?";
    commonHeader.style.fontWeight = 'bold';
    commonHeader.style.textAlign = 'center';
    commonHeader.style.marginBottom = '20px';
    postRatingPane.appendChild(commonHeader);

    const columnsContainer = document.createElement("div");
    columnsContainer.style.display = 'flex';
    columnsContainer.style.justifyContent = 'space-between';

    // Negative column
    const negColumn = document.createElement("div");
    negColumn.style.flex = '1';
    negColumn.style.marginRight = '10px';

    const negEmotions = [
        { key: "fear", name: "AFRAID" },
        { key: "sadness", name: "SAD" },
        { key: "anger", name: "ANGRY" }
    ];
    negEmotions.forEach(emotion => {
        const likert = createPostVideoLikert(
            emotion.key,
            "",
            [1, 2, 3, 4, 5],
            [
                `Not at all <u>${emotion.name}</u>`,
                "",
                `Somewhat <u>${emotion.name}</u>`,
                "",
                `Very <u>${emotion.name}</u>`
            ],
            (val) => { negColumn.setAttribute(`data-${emotion.key}`, val); },
            false // smaller
        );
        likert.style.marginBottom = '10px';
        negColumn.appendChild(likert);
    });

    // Positive column
    const posColumn = document.createElement("div");
    posColumn.style.flex = '1';
    posColumn.style.marginLeft = '10px';

    const posEmotions = [
        { key: "joy", name: "JOYFUL" },
        { key: "calm", name: "CALM" },
        { key: "excited", name: "EXCITED" }
    ];
    posEmotions.forEach(emotion => {
        const likert = createPostVideoLikert(
            emotion.key,
            "",
            [1, 2, 3, 4, 5],
            [
                `Not at all <u>${emotion.name}</u>`,
                "",
                `Somewhat <u>${emotion.name}</u>`,
                "",
                `Very <u>${emotion.name}</u>`
            ],
            (val) => { posColumn.setAttribute(`data-${emotion.key}`, val); },
            false
        );
        likert.style.marginBottom = '10px';
        posColumn.appendChild(likert);
    });

    columnsContainer.appendChild(negColumn);
    columnsContainer.appendChild(posColumn);
    postRatingPane.appendChild(columnsContainer);

    feedbackContainer.appendChild(postRatingPane);

    // Submit
    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.style.display = 'block';
    submitBtn.style.margin = '20px auto 0 auto';
    submitBtn.style.padding = '10px 20px';
    submitBtn.style.fontSize = '18px';
    submitBtn.style.cursor = 'pointer';
    submitBtn.style.border = '1px solid #333';
    submitBtn.style.backgroundColor = '#fff';
    submitBtn.style.color = '#333';
    submitBtn.style.borderRadius = '8px';

    submitBtn.onclick = () => {
        const responses = {
            postInterest: postRatingPane.getAttribute("data-postInterest"),
            valence: postRatingPane.getAttribute("data-valence"),
            fear: negColumn.getAttribute("data-fear"),
            sadness: negColumn.getAttribute("data-sadness"),
            anger: negColumn.getAttribute("data-anger"),
            joy: posColumn.getAttribute("data-joy"),
            calm: posColumn.getAttribute("data-calm"),
            excited: posColumn.getAttribute("data-excited")
        };

        const complete = Object.values(responses).every(val => val !== null);
        if (!complete) { // UNCOMMENT, only for testinggg testing
            alert("Please answer all questions.");
            return;
        }
        document.body.classList.remove('instructions-body-align');
        feedbackContainer.style.display = 'none';
        onSubmit(responses);
    };

    feedbackContainer.appendChild(submitBtn);
    feedbackContainer.style.display = 'block';
}

function createPostVideoLikert(
    id,
    emotionName,
    scaleValues,
    scaleLabels,
    onSelected,
    isValenceOrInterest
) {
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.width = '100%';

    if (emotionName.trim() !== "") {
        const q = document.createElement('p');
        q.style.fontWeight = 'bold';
        q.style.fontFamily = 'Arial, sans-serif';
        q.style.color = '#333';
        q.style.marginBottom = '10px';
        q.style.fontSize = '1em';
        // Use innerHTML so <u> can be rendered in emotionName
        q.innerHTML = emotionName;
        container.appendChild(q);
    }

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'center';
    row.style.alignItems = 'center';
    row.style.marginBottom = '10px';
    row.style.gap = '0';

    let boxWidth = isValenceOrInterest ? 80 : 60;
    let boxHeight = isValenceOrInterest ? 65 : 50;

    scaleValues.forEach((val, idx) => {
        const box = document.createElement('div');
        box.classList.add('likert-box2');
        box.style.border = '1px solid #999';
        box.style.margin = '0';
        box.style.padding = '4px';
        box.style.cursor = 'pointer';
        box.style.borderRadius = '0px';
        box.style.flex = `0 0 ${boxWidth}px`;
        box.style.height = `${boxHeight}px`;
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'flex-start';
        box.style.boxSizing = 'border-box';
        box.style.fontSize = '12px';
        box.style.backgroundColor = '';

        // Numeric rating on top
        const numDiv = document.createElement('div');
        numDiv.textContent = val.toString();
        numDiv.style.fontWeight = 'bold';
        numDiv.style.color = '#333';
        numDiv.style.marginBottom = '2px';
        box.appendChild(numDiv);

        // Label text
        const label = scaleLabels[idx] || "";
        const labDiv = document.createElement('div');
        labDiv.style.fontSize = isValenceOrInterest ? '11px' : '10px';
        labDiv.style.textAlign = 'center';
        labDiv.innerHTML = label;  // so <u> can be rendered
        setAnchorColor(labDiv, label);
        box.appendChild(labDiv);

        box.onclick = () => {
            row.querySelectorAll('.likert-box2').forEach(b => {
                b.style.backgroundColor = '';
            });
            box.style.backgroundColor = '#d8d8d8';
            onSelected(val);
        };
        row.appendChild(box);
    });

    container.appendChild(row);
    return container;
}

function createSurveyQuestion(id, questionText, scaleValues, scaleLabels) {
    // Create container for a single survey question.
    const container = document.createElement("div");
    container.style.textAlign = 'center';
    container.style.marginBottom = '20px';
    container.setAttribute("data-question", id);

    const questionLabel = document.createElement("p");
    questionLabel.innerHTML = `<strong>${questionText}</strong>`;
    questionLabel.style.marginBottom = '10px';
    container.appendChild(questionLabel);

    const row = document.createElement("div");
    row.style.display = 'flex';
    row.style.justifyContent = 'center';
    row.style.alignItems = 'center';
    row.style.gap = '0';  // No gaps between likert boxes

    scaleValues.forEach((val, idx) => {
        const box = document.createElement("div");
        box.classList.add('likert-box2');
        box.style.border = '1px solid #999';
        box.style.padding = '8px';
        box.style.cursor = 'pointer';
        // Ensure the boxes are completely square
        box.style.borderRadius = '0px';
        box.style.flex = '0 0 40px';
        box.style.height = '40px';
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.justifyContent = 'center';
        box.style.alignItems = 'center';
        box.style.fontSize = '12px';
        box.style.backgroundColor = '';

        if (idx === 0) {
            const lab = document.createElement('div');
            lab.style.fontSize = '10px';
            lab.innerHTML = `<strong>${scaleLabels[0]}</strong>`;
            lab.style.textAlign = 'center';
            box.appendChild(lab);
        } else if (idx === scaleValues.length - 1) {
            const lab = document.createElement('div');
            lab.style.fontSize = '10px';
            lab.innerHTML = `<strong>${scaleLabels[scaleLabels.length - 1]}</strong>`;
            lab.style.textAlign = 'center';
            box.appendChild(lab);
        } else {
            const num = document.createElement('div');
            num.textContent = val.toString();
            num.style.fontWeight = 'bold';
            num.style.color = '#333';
            box.appendChild(num);
        }

        box.onclick = () => {
            // Clear selection for all boxes in this row.
            row.querySelectorAll('.likert-box2').forEach(b => {
                b.style.backgroundColor = '';
            });
            box.style.backgroundColor = '#d8d8d8';
            container.setAttribute("data-response", val);
        };

        row.appendChild(box);
    });

    container.appendChild(row);
    return container;
}





  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

//                                MOTIVATION BIT

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////


function PostExperimentalInstructions(participantChoices) {//participantChoices
    message.innerHTML = `
    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
    <p><strong>Now you will revisit pictures from some of the videos you decided to watch or avoid earlier. </strong></p>
    <p>For every pair of pictures, please rate the reasons why you decided to watch the video you chose!</p><br><br><br><br><br><br>
        <div style="text-align: center;">
        <button onclick="submitPage()">Continue</button>
    </div>
</div>
`;
    message.style.display = 'block';

    window.submitPage = function() {
        message.style.display = 'none'; 
        choiceMotivation(participantChoices); // participantChoices
    };
}

// Exploratory Motivation Task
let currentVideoIndex = 0;
let videoIDs = [];
let trialData = [];


function choiceMotivation(participantChoices) {
    // 1) Make sure we have a feedback container in the DOM
    let feedbackContainer = document.getElementById('feedbackContainer');
    if (!feedbackContainer) {
      feedbackContainer = document.createElement('div');
      feedbackContainer.id = 'feedbackContainer';
      document.body.appendChild(feedbackContainer);
    }
    // Clear it out so we can display the motivation content
    feedbackContainer.innerHTML = '';
    feedbackContainer.style.display = 'block';
  
    // 2) Filter for Block 1 trials only and then select those with both video IDs
    const block1Trials = participantChoices.filter(trial => !trial.block || trial.block === "1");
    const pairTrials = block1Trials.filter(trial => trial.vID_A && trial.vID_B);
    // Slice the last 10 trials (adjust as needed)
    const selectedTrials = pairTrials.slice(-10);
  
    // 3) Create an overall container for the motivation survey
    const surveyContainer = document.createElement('div');
    surveyContainer.id = 'motivationSurveyContainer';
    surveyContainer.style.padding = '20px';
    surveyContainer.style.maxWidth = '1000px';
    surveyContainer.style.margin = '20px auto';
    surveyContainer.style.fontFamily = 'Arial, sans-serif';
  
    // 4) Build one sub-section per selected trial
    selectedTrials.forEach((trial, tIndex) => {
      // Determine which side was chosen
      let approachedSide;
      if (trial.choice === "A") {
        approachedSide = "left";
      } else if (trial.choice === "B") {
        approachedSide = "right";
      } else {
        approachedSide = "unknown";
      }
  
      // Create a container for this trial’s survey
      const trialContainer = document.createElement('div');
      trialContainer.classList.add('trial-container');
      trialContainer.style.border = '1px solid #ccc';
      trialContainer.style.borderRadius = '8px';
      trialContainer.style.padding = '15px';
      trialContainer.style.marginBottom = '20px';
  
      // Header text indicating the selected side
      const header = document.createElement('h3');
      header.innerHTML = `Why did you select the video on the <strong><u>${approachedSide}</u></strong>?`;
      header.style.textAlign = 'center';
      trialContainer.appendChild(header);
  
      // Create a row to show the two video stills side by side
      const videosRow = document.createElement('div');
      videosRow.style.display = 'flex';
      videosRow.style.justifyContent = 'space-around';
      videosRow.style.margin = '10px 0';
  
      const imgA = document.createElement('img');
      imgA.src = trial.vID_A.replace('.mp4', '.png');
      imgA.style.width = '300px';
      imgA.style.height = '200px';
      imgA.style.objectFit = 'contain';
  
      const imgB = document.createElement('img');
      imgB.src = trial.vID_B.replace('.mp4', '.png');
      imgB.style.width = '300px';
      imgB.style.height = '200px';
      imgB.style.objectFit = 'contain';
  
      videosRow.appendChild(imgA);
      videosRow.appendChild(imgB);
      trialContainer.appendChild(videosRow);
  
      // Define the three approach questions
      const approachQuestions = [
        `The <u>events</u> in this video were more interesting to me.`,
        `I preferred to feel the <u>emotions</u> in this video.`,
        `This video aligned more <u>with who I am</u>.`
      ];
  
      // Create a container for the approached-video questions
      const approachContainer = document.createElement('div');
      approachContainer.style.marginTop = '10px';
  
      // Render each approach question using createSurveyQuestion (which sets data-question)
      approachQuestions.forEach((qText, qIndex) => {
        const qDiv = createSurveyQuestion(
          `approach-${tIndex}-${qIndex}`,
          qText,
          [1, 2, 3, 4, 5],
          ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
        );
        approachContainer.appendChild(qDiv);
      });
      trialContainer.appendChild(approachContainer);
  
      // Tag the trial container with the trial index
      trialContainer.setAttribute('data-trial-index', tIndex);
      surveyContainer.appendChild(trialContainer);
    });
  
    // 5) Add a submit button for the entire survey
    const submitBtn = document.createElement('button');
    submitBtn.innerText = "Next";
    submitBtn.style.display = 'block';
    submitBtn.style.margin = '30px auto';
    submitBtn.style.padding = '10px 20px';
    submitBtn.style.fontSize = '16px';
  
    submitBtn.onclick = () => {
      // Check that every survey question has a response
      const allQuestions = surveyContainer.querySelectorAll('[data-response]');
      let allAnswered = true;
      allQuestions.forEach(q => {
        if (!q.getAttribute("data-response")) {
          allAnswered = false;
        }
      });
      if (!allAnswered) {
        alert("Please answer all questions before submitting.");
        return;
      }
  
      // For each trial container, retrieve responses via the data-question attribute
      const trialDivs = surveyContainer.querySelectorAll('.trial-container');
      trialDivs.forEach((trialDiv, idx) => {
        const approachQs = trialDiv.querySelectorAll(`[data-question^="approach-${idx}-"]`);
        const responses = Array.from(approachQs).map(q => q.getAttribute("data-response"));
        if (selectedTrials[idx]) {
          selectedTrials[idx].Motivation_Approach_1 = responses[0];
          selectedTrials[idx].Motivation_Approach_2 = responses[1];
          selectedTrials[idx].Motivation_Approach_3 = responses[2];
          // New: add fields to record which videos were compared and which was chosen.
          // We create variable names dynamically based on the trial's order (idx+1)
          selectedTrials[idx]["Motivation_" + (idx + 1) + "_Left"] = selectedTrials[idx].vID_A;
          selectedTrials[idx]["Motivation_" + (idx + 1) + "_Right"] = selectedTrials[idx].vID_B;
          if (selectedTrials[idx].choice === "A") {
            selectedTrials[idx]["Motivation_" + (idx + 1) + "_Chosen"] = selectedTrials[idx].vID_A;
          } else if (selectedTrials[idx].choice === "B") {
            selectedTrials[idx]["Motivation_" + (idx + 1) + "_Chosen"] = selectedTrials[idx].vID_B;
          } else {
            selectedTrials[idx]["Motivation_" + (idx + 1) + "_Chosen"] = "";
          }
        }
      });
  
      // Clear the survey container and proceed
      surveyContainer.remove();
      generateAndUploadCSV(participantChoices);
      postExperimentalEmo(participantChoices);
    };
    surveyContainer.appendChild(submitBtn);
  
    // 6) Append the entire survey container into feedbackContainer
    feedbackContainer.appendChild(surveyContainer);
  }

function getLikertResponse(questionIndex) {
    const scaleContainer = document.querySelector(`#scale-container-${questionIndex}`);
    return Array.from(scaleContainer.childNodes).findIndex(child => child.style.backgroundColor === "rgb(216, 216, 216)") + 1;
}

function clearPreviousElements() {
    // Clear the video player
    videoPlayer.pause();
    videoPlayer.src = '';
    
    // Remove the container with all its child elements
    const container = document.querySelector('.clearable-container');
    if (container) {
        container.parentNode.removeChild(container);
    }
}




  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

//                                          SURVEYS

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

// Spontaneous, BFI, Situational  
function Questionnaire(participantChoices) {
    let feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";

    const Situational = {
       "SS_Gen1": "When I choose how to spend my time, I place a lot of importance on how the people involved will make me feel.", //
       "SM1": "When I am upset, I make a plan of action to deal with the problem that is making me upset.",
       "SS_Av1": "I am careful to avoid people or situations that make me have negative feelings.",
       "SS_Ap1": "I regulate my emotions by choosing to spend time with people that I think will probably make me feel good.",
       "SM2": "I control my emotions by changing the particular situation I happen to be in. ",
       "SS_Ap_Joy": "I seek out situations that make me feel joy",
       "SS_Gen2": "How a situation will make me feel is of little concern to me.",
       "SS_Av_Fear": "I avoid situations that make me feel afraid",
       "SS_Ap2": "I control my emotions by approaching situations and activities that I expect will put me in a good mood.",
       "SS_AvR": "I do not manage my emotions by avoiding situations and people that I expect will make me feel bad.",
       "SM3": "When I am in a stressful situation I take steps to turn the situation around, so it becomes more positive. ",
       "SS_Ap_Excited": "I choose activities that make me feel excited",
       "SS_Gen_3": "I control my emotions by carefully choosing the situations I get myself into.",
       "SS_Av2": "I control my emotions by avoiding situations and activities that I expect will put me in a bad mood.",
       "AC2": "I can pay attention and select agree strongly",
       "SS_Ap_Calm": "I select environments that make me feel calm",
       "SM4": "When I am in an emotionally challenging situation, I take action to deal with the problem.",
       "SS_ApR": "I do not manage my emotions by seeking out situations and people that I expect will make me feel good. ",
       "SS_Av_Sad": "I steer clear of experiences that make me feel sad.",
       "SS_Gen4": "When I choose friends or activities, I do not think much about how they will make me feel.",
       "SM5": "When I am stressed, I engage with the situation to neutralize the stressor, so it becomes less negative.",
       "SS_Av_Anger": "I stay away from interactions that make me feel angry.",
       "SS_Ap3": "I am careful to seek out people or situations that make me have positive feelings.",
       "SS_Av3": "I regulate my emotions by avoiding spending time with people that I think will probably make me feel bad.",
   };

   const BFI = {
    "bfi_1": "Is outgoing, sociable.", 
    "bfi_2": "Is compassionate, has a soft heart.",
    "bfi_3": "Tends to be disorganized.",
    "bfi_4": "Is relaxed, handles stress well.",
    "bfi_5": "Has few artistic interests.",
    "bfi_6": "Has an assertive personality.",
    "bfi_7": "Is respectful, treats others with respect.",
    "bfi_8": "Tends to be lazy.",
    "bfi_9": "Stays optimistic after experiencing a setback.",
    "bfi_10": "Is curious about many different things.",
    "bfi_11": "Rarely feels excited or eager.",
    "bfi_12": "Tends to find fault with others.",
    "bfi_13": "Is dependable, steady.",
    "bfi_14": "Is moody, has up and down mood swings.",
    "bfi_15": "Is inventive, finds clever ways to do things.",
    "bfi_16": "Tends to be quiet.",
    "bfi_17": "Feels little sympathy for others.",
    "AC3": "I am paying attention and select the option strongly agree",
    "bfi_18": "Is systematic, likes to keep things in order.",
    "bfi_19": "Can be tense.",
    "bfi_20": "Is fascinated by art, music, or literature.",
    "bfi_21": "Is dominant, acts as a leader.",
    "bfi_22": "Starts arguments with others.",
    "bfi_23": "Has difficulty getting started on tasks.",
    "bfi_24": "Feels secure, comfortable with self.",
    "bfi_25": "Avoids intellectual, philosophical discussions.",
    "bfi_26": "Is less active than other people.",
    "bfi_27": "Has a forgiving nature.",
    "bfi_28": "Can be somewhat careless.",
    "bfi_29": "Is emotionally stable, not easily upset.",
    "bfi_30": "Has little creativity.",
    "bfi_31": "Is sometimes shy, introverted.",
    "bfi_32": "Is helpful and unselfish with others.",
    "bfi_33": "Keeps things neat and tidy.",
    "bfi_34": "Worries a lot.",
    "bfi_35": "Values art and beauty.",
    "bfi_36": "Finds it hard to influence people.",
    "bfi_37": "Is sometimes rude to others.",
    "bfi_38": "Is efficient, gets things done.",
    "bfi_39": "Often feels sad.",
    "bfi_40": "Is complex, a deep thinker.",
    "bfi_41": "Is full of energy.",
    "bfi_42": "Is suspicious of others intentions.",
    "bfi_43": "Is reliable, can always be counted on.",
    "bfi_44": "Keeps their emotions under control.",
    "bfi_45": "Has difficulty imagining things.",
    "bfi_46": "Is talkative.",
    "bfi_47": "Can be cold and uncaring.",
    "bfi_48": "Leaves a mess, does not clean up.", 
    "bfi_49": "Rarely feels anxious or afraid.",
    "bfi_50": "Thinks poetry and plays are boring.",
    "bfi_51": "Prefers to have others take charge.",
    "bfi_52": "Is polite, courteous to others.",
    "bfi_53": "Is persistent, works until the task is finished.",
    "bfi_54": "Tends to feel depressed, blue.",
    "bfi_55": "Has little interest in abstract ideas.",
    "bfi_56": "Shows a lot of enthusiasm.",
    "bfi_57": "Assumes the best about people.",
    "bfi_58": "Sometimes behaves irresponsibly.",
    "bfi_59": "Is temperamental, gets emotional easily.",
    "bfi_60": "Is original, comes up with new ideas."
   };

   const Spontaneous= {
    "Spontaneuous_1_Acc": "I allowed myself to feel the emotions in the videos and then I let them go",
    "Spontaneous_2_Reap": "I regulated my emotions by thinking differently about whatever was making me emotional.",
    "Spontaneous_3_Sup": "I tried to keep my emotions to myself." ,
    "Spontaneous_4_Dist": "I regulated my emotions by looking away from the screen.",
    "Spontaneous_5_ES": "I controlled my emotions by not expressing them.",
    "Spontaneous_6_Reap": "I controlled my emotions by changing the way I thought about the videos.",
    "Spontaneous_7_Sup": "I tried to suppress my emotions." ,
    "Spontaneous_8_Dist": "I changed the way I was feeling by thinking about something else.",
    "Spontaneous_9_Acc": "I simply accepted my emotions as a natural response to the particular circumstances I was in.",
    "Spontaneous_10_SS_Gen": "I controlled my emotions by carefully choosing the videos I got myself into.",
    "Spontaneous_11_SS_Ap": "I controlled my emotions by approaching videos that I expected would put me in a good mood.",
    "Spontaneous_12_SS_Av": "I controlled my emotions by avoiding videos that I expected will put me in a bad mood.",
    "Spontaneous_13_SM": "I took steps to turn the situation around, so it became more positive. ",
   };

    const scaleLabels = ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"];
    let questionnaireResponses = {};
    let currentRound = 0;

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px";

    function renderQuestions(questions, headerText) {
        feedbackContainer.innerHTML = '';

        const header = document.createElement("p");
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '20px 0';
        header.textContent = headerText;
        feedbackContainer.appendChild(header);

        Object.entries(questions).forEach(([key, item]) => {
            const itemContainer = document.createElement("div");
            itemContainer.style.display = "flex";
            itemContainer.style.justifyContent = "space-between";
            itemContainer.style.alignItems = "center"; //maybe flex-start
            itemContainer.style.paddingBottom = "10px";

            const question = document.createElement("p");
            question.style.fontWeight = 'normal';
            question.style.flex = "1";
            question.style.marginRight = "10px";
            question.textContent = item;
            question.style.maxWidth = '350px'; // Added maximum width to the question
            
            itemContainer.appendChild(question);

            const likertContainer = document.createElement("div");
            likertContainer.classList.add("likert-container");
            likertContainer.style.flex = "2";

            for (let i = 1; i <= 5; i++) {
                const likertBox = document.createElement("div");
                likertBox.classList.add("likert-box");
                likertBox.style.width = "60px";
                likertBox.style.height = "45px";

                const number = document.createElement("div");
                number.textContent = i.toString();
                number.classList.add("likert-number");
                number.style.lineHeight = "20px";
                likertBox.appendChild(number);

                const label = document.createElement("div");
                label.classList.add("likert-label");
                label.textContent = scaleLabels[i - 1];
                likertBox.appendChild(label);

                (function(currentIndex, currentKey) {
                    likertBox.onclick = function() {
                        likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                        questionnaireResponses[currentKey] = currentIndex;
                        likertBox.style.backgroundColor = "#d8d8d8";
                    };
                })(i, key);

                likertContainer.appendChild(likertBox);
            }

            itemContainer.appendChild(likertContainer);
            feedbackContainer.appendChild(itemContainer);
        });

        feedbackContainer.appendChild(submitButton);
    }

    submitButton.onclick = () => {
        let currentQuestions;
        switch (currentRound) {
            case 0:
                currentQuestions = Spontaneous;
                break;
            case 1:
                currentQuestions = BFI; 
                break;
            case 2:
                currentQuestions = Situational; 
                break;
            default:
                // Handle an unexpected case
                console.error('Unexpected round number: ' + currentRound);
                return;
        }

        if (Object.keys(currentQuestions).every(key => key in questionnaireResponses)) {


            if (currentRound === 2) { // If it's the third round, finalize.
                participantChoices = participantChoices.map(choice => {
                    if (typeof choice === 'object' && !Array.isArray(choice)) {
                        return { ...choice, ...questionnaireResponses }; // Merge the objects
                    } else {
                        console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
                        return choice;
                    }
                 });
                 generateAndUploadCSV(participantChoices);
                feedbackContainer.style.display = "none";
                document.body.classList.remove('instructions-body-align');
                feedbackContainer.style.marginTop = '0px';
                
                setTimeout(function() {
                    IdealAffect1(participantChoices); // TESTING, for full, CHANGE to -> Questionnaire2(participantChoices);
                }, 100); 
                
            } else {
                currentRound++;
                const headerText = currentRound === 1
                    ? "I am someone who..."
                    : "Please rate the extent to which you agree with the following statements"; //Think about the videos you watched earlier... 
                const nextRoundQuestions = currentRound === 1 ? BFI : Situational;
                renderQuestions(nextRoundQuestions, headerText);
            }
        } else {
            alert("Please answer all the questions.");
        }
    };
    
    renderQuestions(Spontaneous, "While watching the videos...");
}


//Post experimental emotion
let postExperimentalEmoResponses = {};
function postExperimentalEmo(participantChoices) {
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '40px'; 
    feedbackContainer.innerHTML = '';

    const emotions = ["Pleasant", "Negative",  "Joyful",  "Annoyed",  "Calm",   "Afraid",  "Excited",  "Sad", "Interested", "Anxious", "Enthusiastic", "Bored",  "Happy", "Angry", "Relaxed", "Amused",  "Down", "Positive", "Unpleasant" ]; 
  const emotionResponses = {};


    const emotionKeyMap = {
        "Pleasant": "Pleasant",
        "Negative": "Negative",
        "Joyful": "Joyful",
        "Annoyed": "Annoyed",
        "Calm": "Calm",
        "Afraid": "Afraid",
        "Excited": "Excited",
        "Sad": "Sad",
        "Interested": "Interested",
        "Anxious": "Anxious",
        "Enthusiastic": "Enthusiastic",
        "Bored": "Bored",
        "Happy": "Happy",
        "Angry": "Angry",
        "Relaxed": "Relaxed",
        "Amused": "Amused",
        "Down": "Down",
        "Positive": "Positive",
        "Unpleasant": "Unpleasant"
    };


    const header = document.createElement("p");
    header.style.fontWeight = 'bold';
    header.style.textAlign = 'center'; 
    header.style.padding = '20px 0';
    header.textContent = "Please rate the extent to which you feel right now:";
    feedbackContainer.appendChild(header);

    emotions.forEach(emotion => {
        const emotionContainer = document.createElement("div");
        emotionContainer.style.display = "flex";
        emotionContainer.style.justifyContent = "space-between";
        emotionContainer.style.alignItems = "center";
        emotionContainer.style.paddingBottom = "10px";

        const question = document.createElement("p");
        question.style.fontWeight = 'bold';
        question.style.flex = "1";
        question.style.marginRight = "10px";
        question.textContent = emotion;
        emotionContainer.appendChild(question);

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");
        likertContainer.style.flex = "2"; 

        for (let i = 0; i <= 6; i++) {
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");
            likertBox.style.width = "60px";  
            likertBox.style.height = "65px";  // Height increased to 55px

            const number = document.createElement("div");
            number.textContent = i.toString();
            number.classList.add("likert-number");
            number.style.lineHeight = "20px";

            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");

            // Dynamically set label text based on emotion and scale position
            if (i === 0) label.textContent = `Not ${emotion} at all`;
            else if (i === 3) label.textContent = `Somewhat ${emotion}`;
            else if (i === 6) label.textContent = `Very ${emotion}`;
            likertBox.appendChild(label);

            (function(currentIndex, currentEmotionKey) {
                likertBox.onclick = function() {
                    likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                    emotionResponses[currentEmotionKey] = currentIndex;
                    likertBox.style.backgroundColor = "#d8d8d8";
                    console.log(emotionResponses);
                };
            })(i, emotionKeyMap[emotion]);

            likertContainer.appendChild(likertBox);
        }

        emotionContainer.appendChild(likertContainer);
        feedbackContainer.appendChild(emotionContainer);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px"; 
    
    
    submitButton.onclick = () => {
        if (Object.keys(emotionKeyMap).every(emotion => emotionKeyMap[emotion] in emotionResponses)) {
            postExperimentalEmoResponses = Object.entries(emotionResponses).reduce((acc, [key, value]) => {
                acc["P_" + key] = value.toString();  // Use the simplified emotion key with "P_" prefix
                return acc;
            }, {});
    

            // Assuming participantChoices has individual response objects
            participantChoices.forEach((choice, index) => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    participantChoices[index] = { ...choice, ...postExperimentalEmoResponses };
                } else {
                    console.error('Choice is not an object:', choice);
                }
            });
            generateAndUploadCSV(participantChoices);
            feedbackContainer.style.display = "none";
            document.body.classList.remove('instructions-body-align');
            feedbackContainer.style.marginTop = '0px';

            
            Questionnaire(participantChoices); //testinggg place
        } else {
            alert("Please answer all the questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}

//BISBAS, Attachment, Empathy
function Questionnaire2(participantChoices) {
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";

    const Empathy = {
        "Empathy_1_PD_R": "When I see someone get hurt, I tend to remain calm.", //"Empathy_13_PD_R":
        "Empathy_2_FS": "I really get involved with the feelings of the characters in a novel.", // "Empathy_5_FS":
        "Empathy_3_EC": "When I see someone being taken advantage of, I feel kind of protective towards them.",// "Empathy_9_EC":
        "Empathy_4_PT_R": "I sometimes find it difficult to see things from the 'other guy's' point of view.", // "Empathy_3_PT_R":
        "Empathy_5_FS": "When I am reading an interesting story or novel, I imagine how I would feel if the events in the story were happening to me.",// "Empathy_26_FS":
        "Empathy_6_EC_R": "Sometimes I don't feel very sorry for other people when they are having problems.", // "Empathy_4_EC_R":
        "Empathy_7_PT": "I sometimes try to understand my friends better by imagining how things look from their perspective.",//"Empathy_11_PT":
        "Empathy_8_FS_R": "I am usually objective when I watch a movie or play, and I don't often get completely caught up in it.",//"Empathy_7_FS_R":
        "Empathy_9_EC": "I am often quite touched by things that I see happen. ",//"Empathy_20_EC":
        "AC1": "I am paying attention and can select agree strongly",
        "Empathy_10_FS": "When I watch a good movie, I can very easily put myself in the place of a leading character.",//"Empathy_23_FS":
        "Empathy_11_EC_R": "Other people's misfortunes do not usually disturb me a great deal."//, // "Empathy_14_EC_R":
        //"NEO_1": "Without strong emotions, life would be uninteresting to me.",
        //"NEO_2_R": "I rarely experience strong emotions.",
        //"NEO_3": "How I feel about things is important to me.",
        //"NEO_4_R": "I seldom pay much attention to my feelings of the moment.",
        //"NEO_5": "I experience a wide range of emotions or feelings.",
        //"NEO_6_R": "I seldom notice the moods or feelings that different environments produce.",
        //"NEO_7": "I find it easy to empathize--to feel myself what others are feeling.",
        //"NEO_8_R": "Odd things--like certain scents or the names of distant places--can evoke strong moods in me."
        //"Empathy_1_FS": "I daydream and fantasize, with some regularity, about things that might happen to me.", 
        //"Empathy_2_EC": "I often have tender, concerned feelings for people less fortunate than me.",
        //"Empathy_6_PD": "In emergency situations, I feel apprehensive and ill-at-ease.", //
        //"Empathy_8_PT": "I try to look at everybody's side of a disagreement before I make a decision.",//
        //"Empathy_10_PD": "I sometimes feel helpless when I am in the middle of a very emotional situation. ", 
        //"Empathy_12_FS_R": "Becoming extremely involved in a good book or movie is somewhat rare for me.",
        //"Empathy_15_PT_R": "If I'm sure I'm right about something, I don't waste much time listening to other people's arguments.",
        //"Empathy_16_FS": "After seeing a play or movie, I have felt as though I were one of the characters.",
        //"Empathy_17_PD": "Being in a tense emotional situation scares me. ",
        //"Empathy_18_EC_R": "When I see someone being treated unfairly, I sometimes don't feel very much pity for them. ",
        //"Empathy_19_PD_R": "I am usually pretty effective in dealing with emergencies.",
        //"Empathy_21_PT": "I believe that there are two sides to every question and try to look at them both. ", 
        //"Empathy_22_EC": "I would describe myself as a pretty soft-hearted person.",
        //"Empathy_24_PD": "I tend to lose control during emergencies. ",
        //"Empathy_25_PT": "When I'm upset at someone, I usually try to 'put myself in his shoes' for a while. ",
        //"Empathy_27_PD": "When I see someone who badly needs help in an emergency, I go to pieces. ",
        //"Empathy_28_PT": "Before criticizing somebody, I try to imagine how I would feel if I were in their place.",
    };

    const BISBAS = {
        "BIS_1_R": "Even if something bad is about to happen to me, I rarely experience fear or nervousness.", //
        "BAS_1_Drive": "I go out of my way to get things I want.",
        "BAS_2_Reward": "When I'm doing well at something I love to keep at it.",
        "BAS_3_Fun": " I'm always willing to try something new if I think it will be fun.",
        "BAS_4_Reward": "When I get something I want, I feel excited and energized.",
        "BIS_2": "Criticism or scolding hurts me quite a bit.",
        "BAS_5_Drive": "When I want something I usually go all-out to get it.",
        "BAS_6_Fun": "I will often do things for no other reason than that they might be fun.",
        "BAS_7_Drive": "If I see a chance to get something I want I move on it right away.",
        "BIS_3": "I feel pretty worried or upset when I think or know somebody is angry at me.",
        "BAS_8_Reward": "When I see an opportunity for something I like I get excited right away.",
        "BAS_15_Fun": " I often act on the spur of the moment.",
        "BIS_4": "If I think something unpleasant is going to happen I usually get pretty 'worked up.'",
        "BAS_16_Reward": "When good things happen to me, it affects me strongly.",
        "BIS_5": " I feel worried when I think I have done poorly at something important.",
        "BAS_17_Fun": "I crave excitement and new sensations.",
        "BAS_18_Drive": "When I go after something I use a 'no holds barred' approach.",
        "BIS_6_R": "I have very few fears compared to my friends.",
        "BAS_19_Reward": "It would excite me to win a contest.",
        "BIS_7": "I worry about making mistakes."//,
        //"BEQ_Intensity_1": "I experience my emotions very strongly.", 
        //"BEQ_Intensity_2": "There have been times when I have not been able to stop crying even though I tried to stop.", 
        //"BEQ_Intensity_3": "I have strong emotions.", 
        //"BEQ_Intensity_4": "My body reacts very strongly to emotional situations.", 
        //"BEQ_Intensity_5": "I sometimes cry during sad movies."
};

   const Attachment = {
        "Attach_Anx_1_R": "It helps to turn to my significant others in times of need.", 
        "Attach_Anx_2": "I need a lot of reassurance that I am loved by my significant others.",
        "Attach_Anx_3": "I want to get close to my significant others, but I keep pulling back.",
        "Attach_Anx_4": "I find that significant others don’t want to get as close as I would like.",
        "Attach_Anx_5_R": "I turn to significant others for many things, including comfort and reassurance.",
        "Attach_Anx_6": "My desire to be very close sometimes scares people away.",
        "Attach_Av_1": "I try to avoid getting too close to my significant others.",
        "Attach_Av_2_R": "I do not often worry about being abandoned.",
        "Attach_Av_3_R": "I usually discuss my problems and concerns with my significant others.",
        "Attach_Av_4": "I get frustrated if a significant other is not available when I need them.",
        "Attach_Av_5": "I am nervous when a significant other gets too close to me.",
        "Attach_Av_6": "I worry that my significant others don’t care about me as much as I care about them.",
   };

    const scaleLabels = ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"];
    let questionnaireResponses = {};
    let currentRound = 0;

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px";

    function renderQuestions(questions, headerText) {
        feedbackContainer.innerHTML = '';

        const header = document.createElement("p");
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '20px 0';
        header.textContent = headerText;
        header.style.maxWidth = '60%'; //
        header.style.margin = '0 auto';  
        feedbackContainer.appendChild(header);

        Object.entries(questions).forEach(([key, item]) => {
            const itemContainer = document.createElement("div");
            itemContainer.style.display = "flex";
            itemContainer.style.justifyContent = "space-between";
            itemContainer.style.alignItems = "center"; //maybe flex-start
            itemContainer.style.paddingBottom = "10px";

            const question = document.createElement("p");
            question.style.fontWeight = 'normal';
            question.style.flex = "1";
            question.style.textAlign = 'center';
            question.style.marginRight = "10px";
            question.style.marginLeft = "40px"; 
            question.textContent = item;
            question.style.maxWidth = '350px'; // Added maximum width to the question
            
            itemContainer.appendChild(question);

            const likertContainer = document.createElement("div");
            likertContainer.classList.add("likert-container");
            likertContainer.style.display = "flex"; 
            likertContainer.style.justifyContent = "center"; // Center likert boxes
            likertContainer.style.flexWrap = "wrap"; // Allow wrapping if necessary
            //likertContainer.style.maxWidth = "70%";
            

            for (let i = 1; i <= 5; i++) {
                const likertBox = document.createElement("div");
                likertBox.classList.add("likert-box");
                likertBox.style.width = "60px";
                likertBox.style.height = "45px";

                const number = document.createElement("div");
                number.textContent = i.toString();
                number.classList.add("likert-number");
                number.style.lineHeight = "20px";
                likertBox.appendChild(number);

                const label = document.createElement("div");
                label.classList.add("likert-label");
                label.textContent = scaleLabels[i - 1];
                likertBox.appendChild(label);

                (function(currentIndex, currentKey) {
                    likertBox.onclick = function() {
                        likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                        questionnaireResponses[currentKey] = currentIndex;
                        likertBox.style.backgroundColor = "#d8d8d8";
                    };
                })(i, key);

                likertContainer.appendChild(likertBox);
            }

            itemContainer.appendChild(likertContainer);
            feedbackContainer.appendChild(itemContainer);
        });

        feedbackContainer.appendChild(submitButton);
    }

    submitButton.onclick = () => {
        let currentQuestions;
        switch (currentRound) {
            case 0:
                currentQuestions = BISBAS;
                break;
            case 1:
                currentQuestions = Attachment;
                break;
            case 2:
                currentQuestions = Empathy;
                break;
            default:
                // Handle an unexpected case
                console.error('Unexpected round number: ' + currentRound);
                return;
        }

        if (Object.keys(currentQuestions).every(key => key in questionnaireResponses)) {


            if (currentRound === 2) { // If it's the third round, finalize.
                //participantChoices.push(questionnaireResponses); 
    // For each object within participantChoices, merge it with questionnaireResponses
    const timestamp2 = new Date();
    questionnaireResponses["finishTime"] = timestamp2;
    participantChoices = participantChoices.map(choice => {
        if (typeof choice === 'object' && !Array.isArray(choice)) {
            return { ...choice, ...questionnaireResponses }; // Merge the objects
        } else {
            console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
            return choice;
        }
    });
                generateAndUploadCSV(participantChoices);
                feedbackContainer.style.display = "none";
                document.body.classList.remove('instructions-body-align');
                feedbackContainer.style.marginTop = '0px';
                
                setTimeout(function() {
                    Reactivity(participantChoices);
                }, 100); 
            } else {
                currentRound++;
                const headerText = currentRound === 1
                    ? "How do you feel in relationships with close others such as family, friends, and romantic partners?"
                    : "Please rate the extent to which you agree with the following statements:"; 
                const nextRoundQuestions = currentRound === 1 ? Attachment : Empathy;
                renderQuestions(nextRoundQuestions, headerText);
            }
        } else {
            alert("Please answer all the questions.");
        }
    };
    
    renderQuestions(BISBAS, "Please rate the extent to which you agree with the following statements:");
}


function Reactivity(participantChoices) {
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";

    const Reactivity = {
        "BEQ_Intensity_1": "I experience my emotions very strongly.", 
        "BEQ_Intensity_2": "There have been times when I have not been able to stop crying even though I tried to stop.", 
        "BEQ_Intensity_3": "I have strong emotions.", 
        "BEQ_Intensity_4": "My body reacts very strongly to emotional situations.", 
        "BEQ_Intensity_5": "I sometimes cry during sad movies.",
        "NEO_1": "Without strong emotions, life would be uninteresting to me.",
        "NEO_2_R": "I rarely experience strong emotions.",
        "NEO_3": "How I feel about things is important to me.",
        "NEO_4_R": "I seldom pay much attention to my feelings of the moment.",
        "NEO_5": "I experience a wide range of emotions or feelings.",
        "NEO_6_R": "I seldom notice the moods or feelings that different environments produce.",
        "NEO_7": "I find it easy to empathize--to feel myself what others are feeling.",
        "NEO_8_R": "Odd things--like certain scents or the names of distant places--can evoke strong moods in me."
    };


    const scaleLabels = ["Strongly disagree", " ", "Neutral", "", "Strongly agree"];
    let questionnaireResponses = {};

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px";

    function renderQuestions(questions) {
        feedbackContainer.innerHTML = '';

        const header = document.createElement("p");
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '20px 0';
        header.textContent = "Please rate the extent to which you agree with the following statements:";
        feedbackContainer.appendChild(header);

        Object.entries(questions).forEach(([key, item]) => {
            const itemContainer = document.createElement("div");
            itemContainer.style.display = "flex";
            itemContainer.style.justifyContent = "space-between";
            itemContainer.style.alignItems = "center"; //maybe flex-start
            itemContainer.style.paddingBottom = "10px";

            const question = document.createElement("p");
            question.style.fontWeight = 'normal';
            question.style.flex = "1";
            question.style.marginRight = "10px";
            question.textContent = item;
            question.style.maxWidth = '350px'; // Added maximum width to the question
            
            itemContainer.appendChild(question);

            const likertContainer = document.createElement("div");
            likertContainer.classList.add("likert-container");
            likertContainer.style.flex = "2";

            for (let i = 1; i <= 5; i++) {
                const likertBox = document.createElement("div");
                likertBox.classList.add("likert-box");
                likertBox.style.width = "60px";
                likertBox.style.height = "45px";

                const number = document.createElement("div");
                number.textContent = i.toString();
                number.classList.add("likert-number");
                number.style.lineHeight = "20px";
                likertBox.appendChild(number);

                const label = document.createElement("div");
                label.classList.add("likert-label");
                label.textContent = scaleLabels[i - 1];
                likertBox.appendChild(label);

                (function(currentIndex, currentKey) {
                    likertBox.onclick = function() {
                        likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                        questionnaireResponses[currentKey] = currentIndex;
                        likertBox.style.backgroundColor = "#d8d8d8";
                    };
                })(i, key);

                likertContainer.appendChild(likertBox);
            }

            itemContainer.appendChild(likertContainer);
            feedbackContainer.appendChild(itemContainer);
        });

        feedbackContainer.appendChild(submitButton);
    }

    submitButton.onclick = () => {
        if (Object.keys(Reactivity).every(key => key in questionnaireResponses)) {
            participantChoices = participantChoices.map(choice => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    return { ...choice, ...questionnaireResponses}; // Merge the objects
                } else {
                    console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
                    return choice;
                }
            });
            generateAndUploadCSV(participantChoices);
            feedbackContainer.style.display = "none";
            document.body.classList.remove('instructions-body-align');
            feedbackContainer.style.marginTop = '0px';
            
            WellBeing(participantChoices);
        } else {
            alert("Please answer all the questions.");
        }
    };

    renderQuestions(Reactivity);
}

function WellBeing(participantChoices) {
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";

    const WellBeing = {
        "Ryff_1_SelfAcc": "I like most parts of my personality.", 
        "Ryff_2_SelfAcc": "When I look at the story of my life, I am pleased with how things have turned out so far.", 
        "Ryff_3_PurLife": "Some people wander aimlessly through life, but I am not one of them.", 
        "Ryff_4_EnvMast_R": "The demands of everyday life often get me down", 
        "Ryff_5_SelfAcc_R": "In many ways I feel disappointed about my achievements in life.",
        "Ryff_6_PosRelOther_R": "Maintaining close relationships has been difficult and frustrating for me.",
        "Ryff_7_PurLife_R": "I live life one day at a time and don't really think about the future.",
        "Ryff_8_EnvMast": "In general, I feel I am in charge of the situation in which I live.",
        "Ryff_9_EnvMast": "I am good at managing the responsibilities of daily life.",
        "Ryff_10_PurLife_R": "I sometimes feel as if I've done all there is to do in life.", 
        "Ryff_11_PersGrowth": "For me, life has been a continuous process of learning, changing, and growth.",
        "Ryff_12_PersGrowth": "I think it is important to have new experiences that challenge how I think about myself and the world.",
        "Ryff_13_PosRelOther": "People would describe me as a giving person, willing to share my time with others.",
        "Ryff_14_PersGrowth_R": "I gave up trying to make big improvements or changes in my life a long time ago.",
        "Ryff_15_Autonomy_R": "I tend to be influenced by people with strong opinions.",
        "Ryff_16_PosRelOther_R": "I have not experienced many warm and trusting relationships with others.",
        "Ryff_17_Autonomy": "I have confidence in my own opinions, even if they are different from the way most other people think.",
        "Ryff_18_Autonomy": "I judge myself by what I think is important, not by the values of what others think is important."
    };


    const scaleLabels = ["Strongly disagree", " ", "Neutral", "", "Strongly agree"];
    let questionnaireResponses = {};

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px";

    function renderQuestions(questions) {
        feedbackContainer.innerHTML = '';

        const header = document.createElement("p");
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '20px 0';
        header.textContent = "Please rate the extent to which you agree with the following statements:";
        feedbackContainer.appendChild(header);

        Object.entries(questions).forEach(([key, item]) => {
            const itemContainer = document.createElement("div");
            itemContainer.style.display = "flex";
            itemContainer.style.justifyContent = "space-between";
            itemContainer.style.alignItems = "center"; //maybe flex-start
            itemContainer.style.paddingBottom = "10px";

            const question = document.createElement("p");
            question.style.fontWeight = 'normal';
            question.style.flex = "1";
            question.style.marginRight = "10px";
            question.textContent = item;
            question.style.maxWidth = '350px'; // Added maximum width to the question
            
            itemContainer.appendChild(question);

            const likertContainer = document.createElement("div");
            likertContainer.classList.add("likert-container");
            likertContainer.style.flex = "2";

            for (let i = 1; i <= 5; i++) {
                const likertBox = document.createElement("div");
                likertBox.classList.add("likert-box");
                likertBox.style.width = "60px";
                likertBox.style.height = "45px";

                const number = document.createElement("div");
                number.textContent = i.toString();
                number.classList.add("likert-number");
                number.style.lineHeight = "20px";
                likertBox.appendChild(number);

                const label = document.createElement("div");
                label.classList.add("likert-label");
                label.textContent = scaleLabels[i - 1];
                likertBox.appendChild(label);

                (function(currentIndex, currentKey) {
                    likertBox.onclick = function() {
                        likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                        questionnaireResponses[currentKey] = currentIndex;
                        likertBox.style.backgroundColor = "#d8d8d8";
                    };
                })(i, key);

                likertContainer.appendChild(likertBox);
            }

            itemContainer.appendChild(likertContainer);
            feedbackContainer.appendChild(itemContainer);
        });

        feedbackContainer.appendChild(submitButton);
    }

    submitButton.onclick = () => {
        if (Object.keys(WellBeing).every(key => key in questionnaireResponses)) {
            participantChoices = participantChoices.map(choice => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    return { ...choice, ...questionnaireResponses}; // Merge the objects
                } else {
                    console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
                    return choice;
                }
            });
            generateAndUploadCSV(participantChoices);
            feedbackContainer.style.display = "none";
            document.body.classList.remove('instructions-body-align');
            feedbackContainer.style.marginTop = '0px';
            
            IdealAffect1(participantChoices);
        } else {
            alert("Please answer all the questions.");
        }
    };

    renderQuestions(WellBeing);
}

//Ideal Affect
function IdealAffect1(participantChoices) {
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";

    const IdealAffectActual = {
        "Actual_enthusiastic": "enthusiastic", 
        "Actual_down": "down",
        "Actual_astonished": "astonished", 
        "Actual_disgusted": "disgusted", 
        "Actual_dull": "dull", 
        "Actual_joyful": "joyful", 
        "Actual_quiet": "quiet", 
        "Actual_anxious": "anxious",
        "Actual_relaxed": "relaxed", 
        "Actual_craving": "craving", 
        "Actual_excited": "excited", 
        "Actual_surprised": "surprised", 
        "Actual_interested": "interested",
        "Actual_elated": "elated", 
        "Actual_gross": "gross", 
        "Actual_sleepy": "sleepy", 
        "Actual_still": "still", 
        "Actual_amused": "amused",
        "Actual_lonely": "lonely",
        "Actual_tempted": "tempted",  
        "Actual_strong": "strong", 
        "Actual_passive": "passive", 
        "Actual_content": "content", 
        "Actual_sluggish": "sluggish", 
        "Actual_inactive": "inactive", 
        "Actual_funny": "funny",
        "Actual_sad": "sad", 
        "Actual_euphoric": "euphoric", 
        "Actual_afraid": "afraid", 
        "Actual_happy": "happy", 
        "Actual_idle": "idle", 
        "Actual_calm": "calm", 
        "Actual_unhappy": "unhappy", 
        "Actual_aroused": "aroused", 
        "Actual_angry": "angry", 
        "Actual_satisfied": "satisfied", 
        "Actual_rested": "rested", 
        "Actual_annoyed": "annoyed",
        "Actual_peaceful": "peaceful", 
        "Actual_serene": "serene", 
    };

    const scaleLabels = ["Never", "A small amount of the time", "Half the time", "Most of the time", "All of the time"];
    let questionnaireResponses = {};

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px";

    function renderQuestions(questions) {
        feedbackContainer.innerHTML = '';

        const header = document.createElement("p");
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '20px 0';
        header.textContent = "Over the course of a typical week, I ACTUALLY feel:";
        feedbackContainer.appendChild(header);

        Object.entries(questions).forEach(([key, item]) => {
            const itemContainer = document.createElement("div");
            itemContainer.style.display = "flex";
            itemContainer.style.justifyContent = "space-between";
            itemContainer.style.alignItems = "center"; //maybe flex-start
            itemContainer.style.paddingBottom = "10px";

            const question = document.createElement("p");
            question.style.fontWeight = 'normal';
            question.style.flex = "1";
            question.style.marginRight = "10px";
            question.textContent = item;
            question.style.maxWidth = '350px'; // Added maximum width to the question
            
            itemContainer.appendChild(question);

            const likertContainer = document.createElement("div");
            likertContainer.classList.add("likert-container");
            likertContainer.style.flex = "2";

            for (let i = 1; i <= 5; i++) {
                const likertBox = document.createElement("div");
                likertBox.classList.add("likert-box");
                likertBox.style.width = "60px";
                likertBox.style.height = "55px";

                const number = document.createElement("div");
                number.textContent = i.toString();
                number.classList.add("likert-number");
                number.style.lineHeight = "20px";
                likertBox.appendChild(number);

                const label = document.createElement("div");
                label.classList.add("likert-label");
                label.textContent = scaleLabels[i - 1];
                likertBox.appendChild(label);

                (function(currentIndex, currentKey) {
                    likertBox.onclick = function() {
                        likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                        questionnaireResponses[currentKey] = currentIndex;
                        likertBox.style.backgroundColor = "#d8d8d8";
                    };
                })(i, key);

                likertContainer.appendChild(likertBox);
            }

            itemContainer.appendChild(likertContainer);
            feedbackContainer.appendChild(itemContainer);
        });

        feedbackContainer.appendChild(submitButton);
    }

    submitButton.onclick = () => {
        if (Object.keys(IdealAffectActual).every(key => key in questionnaireResponses)) {
            participantChoices = participantChoices.map(choice => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    return { ...choice, ...questionnaireResponses }; // Merge the objects
                } else {
                    console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
                    return choice;
                }
            });
            generateAndUploadCSV(participantChoices);
            feedbackContainer.style.display = "none";
            document.body.classList.remove('instructions-body-align');
            feedbackContainer.style.marginTop = '0px';
            
            setTimeout(function() {
                IdealAffect2(participantChoices);
            }, 100); 
        } else {
            alert("Please answer all the questions.");
        }
    };

    renderQuestions(IdealAffectActual);
}

function IdealAffect2(participantChoices) {
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";


    const IdealAffectIdeal = {
        "Ideal_enthusiastic": "enthusiastic", 
        "Ideal_down": "down",
        "Ideal_astonished": "astonished", 
        "Ideal_disgusted": "disgusted", 
        "Ideal_dull": "dull", 
        "Ideal_joyful": "joyful", 
        "Ideal_quiet": "quiet", 
        "Ideal_anxious": "anxious",
        "Ideal_relaxed": "relaxed", 
        "Ideal_craving": "craving", 
        "Ideal_excited": "excited", 
        "Ideal_surprised": "surprised", 
        "Ideal_interested": "interested",
        "Ideal_elated": "elated", 
        "Ideal_gross": "gross", 
        "Ideal_sleepy": "sleepy", 
        "Ideal_still": "still", 
        "Ideal_amused": "amused",
        "Ideal_lonely": "lonely",
        "Ideal_tempted": "tempted",  
        "Ideal_strong": "strong", 
        "Ideal_passive": "passive", 
        "Ideal_content": "content", 
        "Ideal_sluggish": "sluggish", 
        "Ideal_inactive": "inactive", 
        "Ideal_funny": "funny",
        "Ideal_sad": "sad", 
        "Ideal_euphoric": "euphoric", 
        "Ideal_afraid": "afraid", 
        "Ideal_happy": "happy", 
        "Ideal_idle": "idle", 
        "Ideal_calm": "calm", 
        "Ideal_unhappy": "unhappy", 
        "Ideal_aroused": "aroused", 
        "Ideal_angry": "angry", 
        "Ideal_satisfied": "satisfied", 
        "Ideal_rested": "rested", 
        "Ideal_annoyed": "annoyed",
        "Ideal_peaceful": "peaceful", 
        "Ideal_serene": "serene", 
    };


    const scaleLabels = ["Never", "A small amount of the time", "Half the time", "Most of the time", "All of the time"];
    let questionnaireResponses = {};

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px";

    function renderQuestions(questions) {
        feedbackContainer.innerHTML = '';

        const header = document.createElement("p");
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '20px 0';
        header.textContent = "Over the course of a typical week, I would IDEALLY like to feel:";
        feedbackContainer.appendChild(header);

        Object.entries(questions).forEach(([key, item]) => {
            const itemContainer = document.createElement("div");
            itemContainer.style.display = "flex";
            itemContainer.style.justifyContent = "space-between";
            itemContainer.style.alignItems = "center"; //maybe flex-start
            itemContainer.style.paddingBottom = "10px";

            const question = document.createElement("p");
            question.style.fontWeight = 'normal';
            question.style.flex = "1";
            question.style.marginRight = "10px";
            question.textContent = item;
            question.style.maxWidth = '350px'; // Added maximum width to the question
            
            itemContainer.appendChild(question);

            const likertContainer = document.createElement("div");
            likertContainer.classList.add("likert-container");
            likertContainer.style.flex = "2";

            for (let i = 1; i <= 5; i++) {
                const likertBox = document.createElement("div");
                likertBox.classList.add("likert-box");
                likertBox.style.width = "60px";
                likertBox.style.height = "55px";

                const number = document.createElement("div");
                number.textContent = i.toString();
                number.classList.add("likert-number");
                number.style.lineHeight = "20px";
                likertBox.appendChild(number);

                const label = document.createElement("div");
                label.classList.add("likert-label");
                label.textContent = scaleLabels[i - 1];
                likertBox.appendChild(label);

                (function(currentIndex, currentKey) {
                    likertBox.onclick = function() {
                        likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                        questionnaireResponses[currentKey] = currentIndex;
                        likertBox.style.backgroundColor = "#d8d8d8";
                    };
                })(i, key);

                likertContainer.appendChild(likertBox);
            }

            itemContainer.appendChild(likertContainer);
            feedbackContainer.appendChild(itemContainer);
        });

        feedbackContainer.appendChild(submitButton);
    }

    submitButton.onclick = () => {
        if (Object.keys(IdealAffectIdeal).every(key => key in questionnaireResponses)) {
            participantChoices = participantChoices.map(choice => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    return { ...choice, ...questionnaireResponses }; // Merge the objects
                } else {
                    console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
                    return choice;
                }
            });
            masterRowWithAllData = participantChoices[ participantChoices.length - 1 ];
            generateAndUploadCSV(participantChoices);
            feedbackContainer.style.display = "none";
            document.body.classList.remove('instructions-body-align');
            feedbackContainer.style.marginTop = '0px';
            
            setTimeout(function() {
                interim(); 
            }, 100); 
        } else {
            alert("Please answer all the questions.");
        }
    };

    renderQuestions(IdealAffectIdeal);
}

//ERQ
let participantSID2, pName; 
function ERQ(participantChoices) {
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";

    const ERQ = {
        "ERQ1": "When I want to feel more positive emotion (such as joy or amusement), I change what I’m thinking about.", 
        "ERQ2": "I keep my emotions to myself.",
        "ERQ3": "When I want to feel less negative emotion (such as sadness or anger), I change what I’m thinking about.",
        "ERQ4": "When I am feeling positive emotions, I am careful not to express them.",
        "ERQ5": "When I’m faced with a stressful situation, I make myself think about it in a way that helps me stay calm.",
        "ERQ6": "I control my emotions by not expressing them.",
        "ERQ7": "When I want to feel more positive emotion, I change the way I’m thinking about the situation.",
        "ERQ8": "I control my emotions by changing the way I think about the situation I’m in.",
        "ERQ9": "When I am feeling negative emotions, I make sure not to express them.",
        "ERQ10": "When I want to feel less negative emotion, I change the way I’m thinking about the situation.",
    };


    const scaleLabels = ["Strongly disagree", " ", "Neutral", "", "Strongly agree"];
    let questionnaireResponses = {};

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px";

    function renderQuestions(questions) {
        feedbackContainer.innerHTML = '';

        const header = document.createElement("p");
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '20px 0';
        header.textContent = "Please rate the extent to which you agree with the following statements:";
        feedbackContainer.appendChild(header);

        Object.entries(questions).forEach(([key, item]) => {
            const itemContainer = document.createElement("div");
            itemContainer.style.display = "flex";
            itemContainer.style.justifyContent = "space-between";
            itemContainer.style.alignItems = "center"; //maybe flex-start
            itemContainer.style.paddingBottom = "10px";

            const question = document.createElement("p");
            question.style.fontWeight = 'normal';
            question.style.flex = "1";
            question.style.marginRight = "10px";
            question.textContent = item;
            question.style.maxWidth = '350px'; // Added maximum width to the question
            
            itemContainer.appendChild(question);

            const likertContainer = document.createElement("div");
            likertContainer.classList.add("likert-container");
            likertContainer.style.flex = "2";

            for (let i = 1; i <= 5; i++) {
                const likertBox = document.createElement("div");
                likertBox.classList.add("likert-box");
                likertBox.style.width = "60px";
                likertBox.style.height = "45px";

                const number = document.createElement("div");
                number.textContent = i.toString();
                number.classList.add("likert-number");
                number.style.lineHeight = "20px";
                likertBox.appendChild(number);

                const label = document.createElement("div");
                label.classList.add("likert-label");
                label.textContent = scaleLabels[i - 1];
                likertBox.appendChild(label);

                (function(currentIndex, currentKey) {
                    likertBox.onclick = function() {
                        likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                        questionnaireResponses[currentKey] = currentIndex;
                        likertBox.style.backgroundColor = "#d8d8d8";
                    };
                })(i, key);

                likertContainer.appendChild(likertBox);
            }

            itemContainer.appendChild(likertContainer);
            feedbackContainer.appendChild(itemContainer);
        });

        feedbackContainer.appendChild(submitButton);
    }

    submitButton.onclick = () => {
        if (Object.keys(ERQ).every(key => key in questionnaireResponses)) {
            participantSID2 = prompt("Please enter your SID number one more time:", "");
            pName = prompt("Please enter your name:", "");
            participantChoices = participantChoices.map(choice => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    return { ...choice, ...questionnaireResponses, participantSID2, pName}; // Merge the objects
                } else {
                    console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
                    return choice;
                }
            });
            
            feedbackContainer.style.display = "none";
            document.body.classList.remove('instructions-body-align');
            feedbackContainer.style.marginTop = '0px';
            generateAndUploadCSV(participantChoices);
            attentionCheck(participantChoices);
        } else {
            alert("Please answer all the questions.");
        }
    };

    renderQuestions(ERQ);
}



function attentionCheck(participantChoices) {
    // Create a wrapper div
    let wrapper = document.createElement('div');
    wrapper.id = "attentionCheckContainer";
    wrapper.style.marginTop = '20px';
    wrapper.style.paddingBottom = '5rem';
    wrapper.style.fontFamily = "'Arial', sans-serif";
  
    // Set the initial message
    wrapper.innerHTML = `
      <div style="max-width: 800px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
        <p style="text-align:center;"><strong>You're almost done with the study!!</strong></p>
        <p>Before we wrap things up, we would like to know how focused you thought you were during the study. Don't worry, <strong>your response <u>will NOT</u> impact your credit for participating</strong>. We just want to ensure our data is as accurate as possible, so your honesty is much appreciated! :)</p>
      </div>
    `;
  
    let nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.style.marginTop = '20px';
    nextButton.setAttribute('type', 'button'); // Explicitly set the button type
    nextButton.onclick = function() {
      console.log('Next button clicked'); // Debug log
      showAttentionQuestion(wrapper, participantChoices);
    };
    wrapper.appendChild(nextButton);
  
    // Append the wrapper to the main container
    document.getElementById('mainContainer').appendChild(wrapper);
  }
  
  function showAttentionQuestion(wrapper, participantChoices) {
    // Clear previous content
    wrapper.innerHTML = '';
  
    // Helper function to create a styled label
    function createStyledLabel(content) {
      let label = document.createElement('label');
      label.textContent = content;
      label.style.fontWeight = 'bold';
      label.style.display = 'block';
      label.style.textAlign = 'center'; 
      label.style.marginTop = '2rem';
      return label;
    }
  
    // Helper function to create radio buttons displayed horizontally
    function createRadioButtons2(name, options) {
      let div = document.createElement('div');
      div.style.marginTop = '0.5rem';
      div.style.display = 'flex';
      div.style.flexWrap = 'wrap';
  
      options.forEach(option => {
        let label = document.createElement('label');
        label.style.display = 'inline-flex';
        label.style.marginRight = '15px';
        label.style.alignItems = 'center';
  
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = name;
        radio.value = option;
  
        label.appendChild(radio);
        label.appendChild(document.createTextNode(' ' + option));
        div.appendChild(label);
      });
      return div;
    }
  
    // First question: radio buttons
    let questionLabel = createStyledLabel(
      'Based on how much attention you paid throughout the study, would you recommend we use your data?'
    );
    wrapper.appendChild(questionLabel);
  
    let radioContainer = createRadioButtons2('attentionLevel', [
      'Absolutely not.',
      'Not unless you absolutely need to',
      'Probably fine but I would not recommend.',
      'YES! I paid careful attention'
    ]);
    // Add spacing below the radio question
    radioContainer.style.marginBottom = '100px';
    wrapper.appendChild(radioContainer);
  
    // Second question: free-text feedback
    let feedbackLabel = document.createElement('label');
    feedbackLabel.textContent = "Please share any thoughts you had about the experiment or any issues you encountered (Optional):";
    feedbackLabel.style.display = "block";
    feedbackLabel.style.textAlign = "center";
    feedbackLabel.style.marginTop = "10%";
    feedbackLabel.style.fontWeight = "bold"; // Make this header bold
    wrapper.appendChild(feedbackLabel);
  
    // The text area
    let feedbackInput = document.createElement('textarea');
    feedbackInput.id = "experimentFeedback";
    feedbackInput.placeholder = "Type your feedback here...";
    feedbackInput.style.width = "90%";
    feedbackInput.style.maxWidth = "600px";
    feedbackInput.style.height = "100px";
    feedbackInput.style.margin = "10px auto";
    feedbackInput.style.display = "block";
    feedbackInput.style.border = "1px solid #ccc";
    feedbackInput.style.borderRadius = "5px";
    feedbackInput.style.padding = "10px";
    feedbackInput.style.fontFamily = "Arial, sans-serif";
    feedbackInput.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    wrapper.appendChild(feedbackInput);
  
    // Create the Submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '20px';
    submitButton.onclick = function() {
      let selectedAttentionLevel = document.querySelector('input[name="attentionLevel"]:checked')?.value;
      if (selectedAttentionLevel) {
        let attentionResponse = { attentionLevel: selectedAttentionLevel };
        // Retrieve free-text feedback (optional)
        let feedbackText = feedbackInput.value.trim();
        attentionResponse.experimentFeedback = feedbackText; // Will be an empty string if no feedback provided
  
        // Merge the attention response into each object in participantChoices
        participantChoices = participantChoices.map(choice => {
          if (typeof choice === 'object' && !Array.isArray(choice)) {
            return { ...choice, ...attentionResponse };
          } else {
            console.error('Choice is not an object:', choice);
            return choice;
          }
        });
        wrapper.style.display = 'none';
        generateAndUploadCSV(participantChoices);
        showPersonalizedFeedback(participantChoices); // Move on to the next part
      } else {
        alert("Please select an option.");
      }
    };
    wrapper.appendChild(submitButton);
  }
    
    



// FEEDBACK!!!!
src="https://cdn.jsdelivr.net/npm/chart.js"


// ===========  PERSONALIZED-FEEDBACK MODULE  =========== //
/*  Utilities  ------------------------------------------------------------ */
function logStep(step, obj = null){ console.log(`[FEEDBACK] ${step}`, obj); }

function reverseScore(val){ return 6 - val; }   // 5-point scale ➔ 1↔5
function normCDF(z){
    // Abramowitz & Stegun (1964) approximation
    const t = 1/(1+0.2316419*Math.abs(z));
    const d = 0.3989423*Math.exp(-z*z/2);
    let prob = d*t*(0.3193815 + t*(-0.3565638 + t*(1.781478 + t*(-1.821256 + t*1.330274))));
    if (z>0) prob = 1-prob;
    return prob;
}

/* ------------- 1.  BFI SCORING ----------------------------------------- */
const BFI_KEYS = {
  Extraversion: ["bfi_1","bfi_6","bfi_11","bfi_16","bfi_21","bfi_26","bfi_31","bfi_36","bfi_41","bfi_46","bfi_51","bfi_56"],
  Agreeableness:["bfi_2","bfi_7","bfi_12","bfi_17","bfi_22","bfi_27","bfi_32","bfi_37","bfi_42","bfi_47","bfi_52","bfi_57"],
  Conscientiousness:["bfi_3","bfi_8","bfi_13","bfi_18","bfi_23","bfi_28","bfi_33","bfi_38","bfi_43","bfi_48","bfi_53","bfi_58"],
  Neuroticism:["bfi_4","bfi_9","bfi_14","bfi_19","bfi_24","bfi_29","bfi_34","bfi_39","bfi_44","bfi_49","bfi_54","bfi_59"],
  Openness:["bfi_5","bfi_10","bfi_15","bfi_20","bfi_25","bfi_30","bfi_35","bfi_40","bfi_45","bfi_50","bfi_55","bfi_60"]
};

const BFI_REVERSE = new Set([
  "bfi_3","bfi_4","bfi_5","bfi_8","bfi_11","bfi_12","bfi_14","bfi_16","bfi_17","bfi_19",
  "bfi_22","bfi_23","bfi_24","bfi_25","bfi_26","bfi_28","bfi_29","bfi_30","bfi_31","bfi_34",
  "bfi_37","bfi_38","bfi_41","bfi_42","bfi_44","bfi_45","bfi_47","bfi_48","bfi_49","bfi_51",
  "bfi_55","bfi_58","bfi_59"
]);

// Norms from Soto & John (2017) U.S. adult sample, BFI-2 short
const BFI_NORM_M = {Extraversion:3.29, Agreeableness:3.67, Conscientiousness:3.51, Neuroticism:2.70, Openness:3.50};
const BFI_NORM_SD= {Extraversion:0.64, Agreeableness:0.52, Conscientiousness:0.58, Neuroticism:0.67, Openness:0.57};

function scoreBFI(responses){
  const out={}; Object.entries(BFI_KEYS).forEach(([trait,items])=>{
    const vals = items.map(k=>{
      const v = parseInt(responses[k]); 
      return BFI_REVERSE.has(k)? reverseScore(v): v;
    });
    const avg = vals.reduce((a,b)=>a+b,0)/items.length;
    const z   = (avg - BFI_NORM_M[trait]) / BFI_NORM_SD[trait];
    out[trait] = {avg, percentile: Math.round(normCDF(z)*100)};
  });
  logStep("BFI scoring complete",out);
  return out;
}

/* ------------- 2.  AFFECT SCORING -------------------------------------- */
const POS_WORDS = ["enthusiastic","astonished","joyful","quiet","relaxed","excited","surprised","interested","elated","strong","content","amused","funny","euphoric","happy","calm","satisfied","peaceful","serene"];
const NEG_WORDS = ["down","disgusted","dull","anxious","gross","sleepy","passive","lonely","sad","afraid","unhappy","inactive","idle","sluggish","angry","annoyed","craving","tempted"];

function affectPercent(responses,prefix){ // prefix = 'Actual_' or 'Ideal_'
  let pos=0,neg=0, nPos=0,nNeg=0;
  POS_WORDS.forEach(w=>{
     const key = `${prefix}${w}`;
     if(key in responses){ pos += parseInt(responses[key]); nPos++; }
  });
  NEG_WORDS.forEach(w=>{
     const key = `${prefix}${w}`;
     if(key in responses){ neg += reverseScore(parseInt(responses[key])); nNeg++; }
  });
  const total = nPos + nNeg;
  if(total===0) return 0;
  const pct = ((pos+neg)/(total*5))*100;    // 0-100 scale
  logStep(`${prefix} valence %`,pct);
  return Math.round(pct);
}

/* ------------- 3.  CHOSEN-AFFECT SCORE --------------------------------- */
function chosenAffectPercent(choices){
  let hedonic=0,total=0;
  choices.forEach(trial=>{
    if(!trial || typeof trial!=="object") return;
    const valence = trial.videoValence || trial.valence || null; // expect 'positive'|'negative'
    const decision = (trial.decision || trial.choice || "").toLowerCase(); // 'watch'|'avoid'
    if(!valence||!decision) return;
    const isHedonic = (valence==="positive" && decision==="watch") || (valence==="negative" && decision==="avoid");
    if(isHedonic) hedonic++;
    total++;
  });
  const pct = total? Math.round((hedonic/total)*100):0;
  logStep("Chosen-affect %", {hedonic,total,pct});
  return pct;
}

/* ------------- 4.  MAIN RENDERING FUNCTION ----------------------------- */
function showPersonalizedFeedback(participantChoices){
  //================ Grab responses (first record is fine) ================
  const dataObj = participantChoices.find(o=>o && typeof o==="object") || {};
  logStep("Using response object",dataObj);

  /* --- Section 1: BFI Percentiles ----------------------------------- */
  const bfi = scoreBFI(dataObj);

  /* --- Section 2: Affect Scores ------------------------------------- */
  const everydayPct = affectPercent(dataObj,"Actual_");  // from IdealAffect1
  const idealPct    = affectPercent(dataObj,"Ideal_");   // from IdealAffect2
  const chosenPct   = chosenAffectPercent(participantChoices);

  /* ------------ PAGE SCAFFOLD --------------------------------------- */
  let container = document.getElementById("personalizedFeedback");
  if(!container){
      container=document.createElement("div");
      container.id="personalizedFeedback";
      document.body.appendChild(container);
  }
  container.innerHTML="";
  container.style.maxWidth="900px";
  container.style.margin="50px auto";
  container.style.fontFamily="'Helvetica Neue',Arial,sans-serif";
  container.style.textAlign="center";

  /* ------- TITLE ---------------------------------------------------- */
  const h1=document.createElement("h2");
  h1.textContent="Your Personalized Feedback";
  container.appendChild(h1);

  /* ---------- SECTION 1  (BFI) -------------------------------------- */
  const sec1=document.createElement("div");
  sec1.innerHTML="<h3>Where You Stand on the Big Five</h3><p>(Each curve = typical population; red bar = you.)</p>";
  container.appendChild(sec1);

  Object.entries(bfi).forEach(([trait,obj],i)=>{
      const c=document.createElement("canvas");
      c.id=`bfiChart_${trait}`;
      c.height=150; c.style.maxWidth="400px"; c.style.margin="20px auto";
      sec1.appendChild(c);

      // build normal curve points
      const pts=[]; const mean=BFI_NORM_M[trait], sd=BFI_NORM_SD[trait];
      for(let x=mean-3*sd;x<=mean+3*sd;x+=sd/10){
         const y=(1/(sd*Math.sqrt(2*Math.PI)))*Math.exp(-0.5*Math.pow((x-mean)/sd,2));
         pts.push({x:parseFloat(x.toFixed(2)),y});
      }
      const lineX=obj.avg;

      new Chart(c,{
        type:"line",
        data:{ datasets:[
          {label:"Distribution", data:pts, parsing:{xAxisKey:"x",yAxisKey:"y"}, borderWidth:2, fill:false, pointRadius:0, tension:0.25},
          {label:"You", data:[{x:lineX, y:0},{x:lineX, y:Math.max(...pts.map(p=>p.y))*1.05}], borderColor:"red", borderWidth:3, pointRadius:0, fill:false}
        ]},
        options:{
          plugins:{legend:{display:false}, tooltip:{enabled:false}},
          scales:{x:{display:false},y:{display:false}}
        }
      });

      const lbl=document.createElement("p");
      lbl.innerHTML=`<strong>${trait}</strong>: ${obj.percentile}<sup>th</sup> percentile`;
      sec1.appendChild(lbl);
  });

  /* ---------- SECTION 2  (VALENCE BAR CHART) ------------------------ */
  const sec2=document.createElement("div");
  sec2.innerHTML="<h3>Your Affect Profile</h3>";
  container.appendChild(sec2);

  const barCanvas=document.createElement("canvas");
  barCanvas.id="affectChart"; barCanvas.height=200; barCanvas.style.maxWidth="600px";
  sec2.appendChild(barCanvas);

  new Chart(barCanvas,{
     type:"bar",
     data:{
        labels:["Everyday Affect","Ideal Affect","Chosen Affect"],
        datasets:[{
           data:[everydayPct, idealPct, chosenPct],
           borderWidth:1
        }]
     },
     options:{
        plugins:{legend:{display:false}},
        scales:{y:{beginAtZero:true, max:100, title:{display:true, text:"Valence (%)"}}}
     }
  });

  /* ---------- CONTINUE BUTTON -------------------------------------- */
  const contBtn=document.createElement("button");
  contBtn.textContent="Continue";
  contBtn.style.marginTop="30px";
  contBtn.onclick=()=>{ container.style.display="none"; instructions3(); };
  container.appendChild(contBtn);

  window.scrollTo(0,0);
  logStep("Feedback page rendered");
}







//Finshing off
function instructions3() {
    let resultTableContainer = document.getElementById("resultTableContainer");

    // Only include the unique key at the end of the feedback for the participant
    resultTableContainer.innerHTML = `
    <br>
    <div class="content-text">
        <h2 style="text-align:center;">Completion Key:</h2><br>
        <p style="text-align:center;">
            <strong><u id="uniqueKey">${participantUniqueKey}</strong></u>
            <br><br>
            <button onclick="copyToClipboard()">Click to Copy</button>
            <br><br><br><br>
            Please save this key as proof of completion until you receive your credits!  
        </p>
    </div>`;
//// Please copy this key and send it to "ceiroasolans@berkeley.edu" to prove you have completed this exercise
    // Add the copy function to the page (or it can be added elsewhere if desired)
    let script = document.createElement('script');
    script.textContent = `
    function copyToClipboard() {
        const textToCopy = document.getElementById("uniqueKey").textContent;
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Key copied to clipboard!");
    }`;
    document.body.appendChild(script);
}




  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  //                           AUXILIARY FUNCTIONS

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

function showMessage(text) {
    message.innerText = text;
    message.style.display = "block";
}

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.innerText = text;
    button.onclick = () => {
        const reactionTime = performance.now() - startTime;
        onClick(reactionTime);
    };
    return button;
}

function addButton(button) {
    buttonsContainer.appendChild(button);
    startTimer(); 
}

function clearButtons() {
    buttonsContainer.innerHTML = "";
}

function showFixationCross(callback) {
    console.log("showFixationCross called, calling callback function");
    fixationCross.style.display = "block";
    setTimeout(() => {
        fixationCross.style.display = "none";
        console.log('showFixationCross completed, calling callback');
        callback();
    }, 1500);
}

function showFixationCross2(callback) {
    console.log("showFixationCross called, calling callback function");

    // Create or select a reminder text element
    let reminderText = document.getElementById('fixationReminder');
    if (!reminderText) {
        reminderText = document.createElement('div');
        reminderText.id = 'fixationReminder';
        reminderText.textContent = 'Please look at the fixation cross';
        reminderText.style.position = 'fixed';
        reminderText.style.top = '10px'; // Adjust as needed
        reminderText.style.left = '50%';
        reminderText.style.transform = 'translateX(-50%)';
        reminderText.style.fontSize = '20px'; // Adjust font size as needed
        reminderText.style.color = 'black'; // Adjust text color as needed
        document.body.appendChild(reminderText);
    }

    // Display the fixation cross and the reminder
    fixationCross.style.display = "block";
    reminderText.style.display = "block";

    setTimeout(() => {
        // Hide the fixation cross and the reminder
        fixationCross.style.display = "none";
        reminderText.style.display = "none";
        console.log('showFixationCross completed, calling callback');
        callback();
    }, 1500);
}




  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

//                                     GENERATE DATA

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

function downloadCSV(csvContent, filename) {
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    // Cleanup: remove the anchor link and revoke the Blob URL
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function generateAndUploadCSV(participantChoices) {
    const genres = ["Adventure", "Action", "Comedy", "Drama", "Horror", "Fiction", "Romance", "Documentary", "Thriller"];
  
    const header = [
      "part", "choice","trialNum","chosen_vID","chosen_VideoType","reactionTime", //"vID", before chosen version
      "valenceForecast","interestForecast","watchAgain",
      "predictionText",
      "interest","valence","targetEmo","counterEmo",

      // The new columns for A & B
      "vID_A","vID_B", "videoType_A", "videoType_B",
      "VideoA_ValenceForecast","VideoA_InterestForecast","VideoA_JoyForecast","VideoA_CalmForecast","VideoA_ExcitedForecast","VideoA_FearForecast","VideoA_SadForecast","VideoA_AngerForecast",
      "VideoB_ValenceForecast","VideoB_InterestForecast","VideoB_JoyForecast","VideoB_CalmForecast","VideoB_ExcitedForecast","VideoB_FearForecast","VideoB_SadForecast","VideoB_AngerForecast",
      "choiceTime",
      "Experienced_Valence","Experienced_Interest","Experienced_Joy","Experienced_Calm","Experienced_Excited","Experienced_Fear","Experienced_Sad","Experienced_Anger",
      
      // New motivation fields
      "Motivation_Approach_1", "Motivation_Approach_2", "Motivation_Approach_3",
      "Motivation_1_Left", "Motivation_1_Right", "Motivation_1_Chosen",
      "Motivation_2_Left", "Motivation_2_Right", "Motivation_2_Chosen",
      "Motivation_3_Left", "Motivation_3_Right", "Motivation_3_Chosen",
      "Motivation_4_Left", "Motivation_4_Right", "Motivation_4_Chosen",
      "Motivation_5_Left", "Motivation_5_Right", "Motivation_5_Chosen",
      "Motivation_6_Left", "Motivation_6_Right", "Motivation_6_Chosen",
      "Motivation_7_Left", "Motivation_7_Right", "Motivation_7_Chosen",
      "Motivation_8_Left", "Motivation_8_Right", "Motivation_8_Chosen",
      "Motivation_9_Left", "Motivation_9_Right", "Motivation_9_Chosen",
      "Motivation_10_Left", "Motivation_10_Right", "Motivation_10_Chosen",
      
      // The rest of your fields
      "SID", ...genres, "uniqueKey", "startTime", "age", "racialIdentity", "genderIdentity",
      "fatherEducation", "motherEducation", "familyIncome", "yearInSchool", "relationship",
      "politics", "exercise", "diet", "sleep", "stress",

      "B_Pleasant", "B_Negative", "B_Joyful", "B_Annoyed","B_Calm","B_Afraid","B_Excited", "B_Sad","B_Interested","B_Anxious", "B_Enthusiastic","B_Bored", "B_Happy","B_Angry", "B_Relaxed","B_Amused","B_Down","B_Positive","B_Unpleasant",
      "BS_1", "BS_2", "BS_3", "BS_4", "BS_5", "BS_6", "BS_7", "BS_8", "BS_9", "BS_10", "BS_11", "BS_12", "BS_13", "BS_14", "BS_15", "BS_16", "BS_17", "BS_18", "BS_19", "BS_20", "BS_21",

      "P_Pleasant", "P_Negative", "P_Joyful", "P_Annoyed","P_Calm","P_Afraid","P_Excited", "P_Sad","P_Interested","P_Anxious", "P_Enthusiastic","P_Bored", "P_Happy","P_Angry", "P_Relaxed","P_Amused","P_Down","P_Positive","P_Unpleasant",

      "SS_Gen1","SM1","SS_Av1","SS_Ap1","SM2","SS_Gen2","SS_Ap2","SS_AvR","SM3",
      "SS_Gen_3","SS_Av2","SM4","SS_ApR","SS_Gen4","SM5","SS_Ap3","SS_Av3",
      "SS_Ap_Joy", "SS_Ap_Excited", "SS_Ap_Calm", "SS_Av_Fear", "SS_Av_Sad", "SS_Av_Anger",
      "Empathy_1_PD_R","Empathy_2_FS","Empathy_3_EC","Empathy_4_PT_R","Empathy_5_FS",
      "Empathy_6_EC_R","Empathy_7_PT","Empathy_8_FS_R","Empathy_9_EC","Empathy_10_FS","Empathy_11_EC_R",
      "NEO_1","NEO_2_R","NEO_3","NEO_4_R","NEO_5","NEO_6_R","NEO_7","NEO_8_R",
      "Spontaneuous_1_Acc","Spontaneous_2_Reap","Spontaneous_3_Sup","Spontaneous_4_Dist",
      "Spontaneous_5_ES","Spontaneous_6_Reap","Spontaneous_7_Sup","Spontaneous_8_Dist",
      "Spontaneous_9_Acc","Spontaneous_10_SS_Gen","Spontaneous_11_SS_Ap","Spontaneous_12_SS_Av",
      "Spontaneous_13_SM",
      "bfi_1","bfi_2","bfi_3","bfi_4","bfi_5","bfi_6","bfi_7","bfi_8","bfi_9","bfi_10",
      "bfi_11","bfi_12","bfi_13","bfi_14","bfi_15","bfi_16","bfi_17","bfi_18","bfi_19","bfi_20",
      "bfi_21","bfi_22","bfi_23","bfi_24","bfi_25","bfi_26","bfi_27","bfi_28","bfi_29","bfi_30",
      "bfi_31","bfi_32","bfi_33","bfi_34","bfi_35","bfi_36","bfi_37","bfi_38","bfi_39","bfi_40",
      "bfi_41","bfi_42","bfi_43","bfi_44","bfi_45","bfi_46","bfi_47","bfi_48","bfi_49","bfi_50",
      "bfi_51","bfi_52","bfi_53","bfi_54","bfi_55","bfi_56","bfi_57","bfi_58","bfi_59","bfi_60",
      "BIS_1_R","BAS_1_Drive","BAS_2_Reward","BAS_3_Fun","BAS_4_Reward","BIS_2","BAS_5_Drive",
      "BAS_6_Fun","BAS_7_Drive","BIS_3","BAS_8_Reward","BAS_15_Fun","BIS_4","BAS_16_Reward",
      "BIS_5","BAS_17_Fun","BAS_18_Drive","BIS_6_R","BAS_19_Reward","BIS_7",
      "Attach_Anx_1_R","Attach_Anx_2","Attach_Anx_3","Attach_Anx_4","Attach_Anx_5_R","Attach_Anx_6",
      "Attach_Av_1","Attach_Av_2_R","Attach_Av_3_R","Attach_Av_4","Attach_Av_5","Attach_Av_6",
      "BEQ_Intensity_1","BEQ_Intensity_2","BEQ_Intensity_3","BEQ_Intensity_4","BEQ_Intensity_5",
      "Actual_enthusiastic","Actual_down","Actual_astonished","Actual_disgusted","Actual_dull",
      "Actual_joyful","Actual_quiet","Actual_anxious","Actual_relaxed","Actual_craving",
      "Actual_excited","Actual_surprised","Actual_interested","Actual_elated","Actual_gross",
      "Actual_sleepy","Actual_still","Actual_amused","Actual_lonely","Actual_tempted","Actual_strong",
      "Actual_passive","Actual_content","Actual_sluggish","Actual_inactive","Actual_funny","Actual_sad",
      "Actual_euphoric","Actual_afraid","Actual_happy","Actual_idle","Actual_calm","Actual_unhappy",
      "Actual_aroused","Actual_angry","Actual_satisfied","Actual_rested","Actual_annoyed","Actual_peaceful",
      "Actual_serene","Ideal_enthusiastic","Ideal_down","Ideal_astonished","Ideal_disgusted","Ideal_dull",
      "Ideal_joyful","Ideal_quiet","Ideal_anxious","Ideal_relaxed","Ideal_craving","Ideal_excited",
      "Ideal_surprised","Ideal_interested","Ideal_elated","Ideal_gross","Ideal_sleepy","Ideal_still",
      "Ideal_amused","Ideal_lonely","Ideal_tempted","Ideal_strong","Ideal_passive","Ideal_content",
      "Ideal_sluggish","Ideal_inactive","Ideal_funny","Ideal_sad","Ideal_euphoric","Ideal_afraid",
      "Ideal_happy","Ideal_idle","Ideal_calm","Ideal_unhappy","Ideal_aroused","Ideal_angry",
      "Ideal_satisfied","Ideal_rested","Ideal_annoyed","Ideal_peaceful","Ideal_serene",
      "ERQ1","ERQ2","ERQ3","ERQ4","ERQ5","ERQ6","ERQ7","ERQ8","ERQ9","ERQ10",
      "finishTime","windowSizeHeight","windowSizeWidth","screenSizeHeight","screenSizeWidth",
      "gazingPointX","gazingPointY","AC1","AC2","AC3","attentionLevel","participantSID2","pName",
      "Ryff_1_SelfAcc","Ryff_2_SelfAcc","Ryff_3_PurLife","Ryff_4_EnvMast_R","Ryff_5_SelfAcc_R",
      "Ryff_6_PosRelOther_R","Ryff_7_PurLife_R","Ryff_8_EnvMast","Ryff_9_EnvMast","Ryff_10_PurLife_R",
      "Ryff_11_PersGrowth","Ryff_12_PersGrowth","Ryff_13_PosRelOther","Ryff_14_PersGrowth_R","Ryff_15_Autonomy_R",
      "Ryff_16_PosRelOther_R","Ryff_17_Autonomy","Ryff_18_Autonomy", "experimentFeedback"
    ];

    console.log("Data passed to generateAndUploadCSV:", participantChoices);

    const csvRows = [header];

    function preserveZero(val) {
      return (val === null || val === undefined) ? "" : val;
    }

    // Build CSV rows for every trial in participantChoices
    for (const row of participantChoices) {
      const genreRatings = genres.map(genre => preserveZero(row[genre]));

      const rowData = [
        preserveZero(row.part),
        preserveZero(row.choice),
        preserveZero(row.trialNum),
        preserveZero(row.chosen_vID),
        preserveZero(row.chosen_VideoType),
        preserveZero(row.reactionTime),

        preserveZero(row.valenceForecast),
        preserveZero(row.interestForecast),
 
        preserveZero(row.watchAgain),
        preserveZero(row.predictionText),
        preserveZero(row.interest),
        preserveZero(row.valence),
        preserveZero(row.targetEmo),
        preserveZero(row.counterEmo),

        // The new A/B columns
        preserveZero(row.vID_A),
        preserveZero(row.vID_B),
        preserveZero(row.videoType_A),
        preserveZero(row.videoType_B),

        preserveZero(row.VideoA_ValenceForecast),
        preserveZero(row.VideoA_InterestForecast),
        preserveZero(row.VideoA_JoyForecast),
        preserveZero(row.VideoA_CalmForecast),
        preserveZero(row.VideoA_ExcitedForecast),
        preserveZero(row.VideoA_FearForecast),
        preserveZero(row.VideoA_SadForecast),
        preserveZero(row.VideoA_AngerForecast),

        preserveZero(row.VideoB_ValenceForecast),
        preserveZero(row.VideoB_InterestForecast),
        preserveZero(row.VideoB_JoyForecast),
        preserveZero(row.VideoB_CalmForecast),
        preserveZero(row.VideoB_ExcitedForecast),
        preserveZero(row.VideoB_FearForecast),
        preserveZero(row.VideoB_SadForecast),
        preserveZero(row.VideoB_AngerForecast),

        preserveZero(row.choiceTime),

        preserveZero(row.Experienced_Valence),
        preserveZero(row.Experienced_Interest),
        preserveZero(row.Experienced_Joy),
        preserveZero(row.Experienced_Calm),
        preserveZero(row.Experienced_Excited),
        preserveZero(row.Experienced_Fear),
        preserveZero(row.Experienced_Sad),
        preserveZero(row.Experienced_Anger),

        preserveZero(row.Motivation_Approach_1),
        preserveZero(row.Motivation_Approach_2),
        preserveZero(row.Motivation_Approach_3),

        preserveZero(row.Motivation_1_Left),
        preserveZero(row.Motivation_1_Right),
        preserveZero(row.Motivation_1_Chosen),
        preserveZero(row.Motivation_2_Left),
        preserveZero(row.Motivation_2_Right),
        preserveZero(row.Motivation_2_Chosen),
        preserveZero(row.Motivation_3_Left),
        preserveZero(row.Motivation_3_Right),
        preserveZero(row.Motivation_3_Chosen),

        preserveZero(row.Motivation_4_Left),
        preserveZero(row.Motivation_4_Right),
        preserveZero(row.Motivation_4_Chosen),
        preserveZero(row.Motivation_5_Left),
        preserveZero(row.Motivation_5_Right),
        preserveZero(row.Motivation_5_Chosen),
        preserveZero(row.Motivation_6_Left),
        preserveZero(row.Motivation_6_Right),
        preserveZero(row.Motivation_6_Chosen),
        preserveZero(row.Motivation_7_Left),
        preserveZero(row.Motivation_7_Right),
        preserveZero(row.Motivation_7_Chosen),
        preserveZero(row.Motivation_8_Left),
        preserveZero(row.Motivation_8_Right),
        preserveZero(row.Motivation_8_Chosen),
        preserveZero(row.Motivation_9_Left),
        preserveZero(row.Motivation_9_Right),
        preserveZero(row.Motivation_9_Chosen),
        preserveZero(row.Motivation_10_Left),
        preserveZero(row.Motivation_10_Right),
        preserveZero(row.Motivation_10_Chosen),


        preserveZero(row.SID),
        ...genreRatings,
        preserveZero(row.uniqueKey),
        preserveZero(row.startTime),
        preserveZero(row.age),
        preserveZero(row.racialIdentity),
        preserveZero(row.genderIdentity),
        preserveZero(row.fatherEducation),
        preserveZero(row.motherEducation),
        preserveZero(row.familyIncome),
        preserveZero(row.yearInSchool),
        preserveZero(row.relationship),
        preserveZero(row.politics),
        preserveZero(row.exercise),
        preserveZero(row.diet),
        preserveZero(row.sleep),
        preserveZero(row.stress),

        preserveZero(row.B_Pleasant),
        preserveZero(row.B_Negative),
        preserveZero(row.B_Joyful),
        preserveZero(row.B_Annoyed),
        preserveZero(row.B_Calm),
        preserveZero(row.B_Afraid),
        preserveZero(row.B_Excited),
        preserveZero(row.B_Sad),
        preserveZero(row.B_Interested),
        preserveZero(row.B_Anxious),
        preserveZero(row.B_Enthusiastic),
        preserveZero(row.B_Bored),
        preserveZero(row.B_Happy),
        preserveZero(row.B_Angry),
        preserveZero(row.B_Relaxed),
        preserveZero(row.B_Amused),
        preserveZero(row.B_Down),
        preserveZero(row.B_Positive),
        preserveZero(row.B_Unpleasant),


        preserveZero(row.BS_1),
        preserveZero(row.BS_2),
        preserveZero(row.BS_3),
        preserveZero(row.BS_4),
        preserveZero(row.BS_5),
        preserveZero(row.BS_6),
        preserveZero(row.BS_7),
        preserveZero(row.BS_8),
        preserveZero(row.BS_9),
        preserveZero(row.BS_10),
        preserveZero(row.BS_11),
        preserveZero(row.BS_12),
        preserveZero(row.BS_13),
        preserveZero(row.BS_14),
        preserveZero(row.BS_15),
        preserveZero(row.BS_16),
        preserveZero(row.BS_17),
        preserveZero(row.BS_18),
        preserveZero(row.BS_19),
        preserveZero(row.BS_20),
        preserveZero(row.BS_21),

        preserveZero(row.P_Pleasant),
        preserveZero(row.P_Negative),
        preserveZero(row.P_Joyful),
        preserveZero(row.P_Annoyed),
        preserveZero(row.P_Calm),
        preserveZero(row.P_Afraid),
        preserveZero(row.P_Excited),
        preserveZero(row.P_Sad),
        preserveZero(row.P_Interested),
        preserveZero(row.P_Anxious),
        preserveZero(row.P_Enthusiastic),
        preserveZero(row.P_Bored),
        preserveZero(row.P_Happy),
        preserveZero(row.P_Angry),
        preserveZero(row.P_Relaxed),
        preserveZero(row.P_Amused),
        preserveZero(row.P_Down),
        preserveZero(row.P_Positive),
        preserveZero(row.P_Unpleasant),

        preserveZero(row.SS_Gen1),
        preserveZero(row.SM1),
        preserveZero(row.SS_Av1),
        preserveZero(row.SS_Ap1),
        preserveZero(row.SM2),
        preserveZero(row.SS_Gen2),
        preserveZero(row.SS_Ap2),
        preserveZero(row.SS_AvR),
        preserveZero(row.SM3),
        preserveZero(row.SS_Gen_3),
        preserveZero(row.SS_Av2),
        preserveZero(row.SM4),
        preserveZero(row.SS_ApR),
        preserveZero(row.SS_Gen4),
        preserveZero(row.SM5),
        preserveZero(row.SS_Ap3),
        preserveZero(row.SS_Av3),

        preserveZero(row.SS_Ap_Joy),
        preserveZero(row.SS_Ap_Excited),
        preserveZero(row.SS_Ap_Calm),
        preserveZero(row.SS_Av_Fear),
        preserveZero(row.SS_Av_Sad),
        preserveZero(row.SS_Av_Anger),

        preserveZero(row.Empathy_1_PD_R),
        preserveZero(row.Empathy_2_FS),
        preserveZero(row.Empathy_3_EC),
        preserveZero(row.Empathy_4_PT_R),
        preserveZero(row.Empathy_5_FS),
        preserveZero(row.Empathy_6_EC_R),
        preserveZero(row.Empathy_7_PT),
        preserveZero(row.Empathy_8_FS_R),
        preserveZero(row.Empathy_9_EC),
        preserveZero(row.Empathy_10_FS),
        preserveZero(row.Empathy_11_EC_R),

        preserveZero(row.NEO_1),
        preserveZero(row.NEO_2_R),
        preserveZero(row.NEO_3),
        preserveZero(row.NEO_4_R),
        preserveZero(row.NEO_5),
        preserveZero(row.NEO_6_R),
        preserveZero(row.NEO_7),
        preserveZero(row.NEO_8_R),

        preserveZero(row.Spontaneuous_1_Acc),
        preserveZero(row.Spontaneous_2_Reap),
        preserveZero(row.Spontaneous_3_Sup),
        preserveZero(row.Spontaneous_4_Dist),
        preserveZero(row.Spontaneous_5_ES),
        preserveZero(row.Spontaneous_6_Reap),
        preserveZero(row.Spontaneous_7_Sup),
        preserveZero(row.Spontaneous_8_Dist),
        preserveZero(row.Spontaneous_9_Acc),
        preserveZero(row.Spontaneous_10_SS_Gen),
        preserveZero(row.Spontaneous_11_SS_Ap),
        preserveZero(row.Spontaneous_12_SS_Av),
        preserveZero(row.Spontaneous_13_SM),

        preserveZero(row.bfi_1),
        preserveZero(row.bfi_2),
        preserveZero(row.bfi_3),
        preserveZero(row.bfi_4),
        preserveZero(row.bfi_5),
        preserveZero(row.bfi_6),
        preserveZero(row.bfi_7),
        preserveZero(row.bfi_8),
        preserveZero(row.bfi_9),
        preserveZero(row.bfi_10),
        preserveZero(row.bfi_11),
        preserveZero(row.bfi_12),
        preserveZero(row.bfi_13),
        preserveZero(row.bfi_14),
        preserveZero(row.bfi_15),
        preserveZero(row.bfi_16),
        preserveZero(row.bfi_17),
        preserveZero(row.bfi_18),
        preserveZero(row.bfi_19),
        preserveZero(row.bfi_20),
        preserveZero(row.bfi_21),
        preserveZero(row.bfi_22),
        preserveZero(row.bfi_23),
        preserveZero(row.bfi_24),
        preserveZero(row.bfi_25),
        preserveZero(row.bfi_26),
        preserveZero(row.bfi_27),
        preserveZero(row.bfi_28),
        preserveZero(row.bfi_29),
        preserveZero(row.bfi_30),
        preserveZero(row.bfi_31),
        preserveZero(row.bfi_32),
        preserveZero(row.bfi_33),
        preserveZero(row.bfi_34),
        preserveZero(row.bfi_35),
        preserveZero(row.bfi_36),
        preserveZero(row.bfi_37),
        preserveZero(row.bfi_38),
        preserveZero(row.bfi_39),
        preserveZero(row.bfi_40),
        preserveZero(row.bfi_41),
        preserveZero(row.bfi_42),
        preserveZero(row.bfi_43),
        preserveZero(row.bfi_44),
        preserveZero(row.bfi_45),
        preserveZero(row.bfi_46),
        preserveZero(row.bfi_47),
        preserveZero(row.bfi_48),
        preserveZero(row.bfi_49),
        preserveZero(row.bfi_50),
        preserveZero(row.bfi_51),
        preserveZero(row.bfi_52),
        preserveZero(row.bfi_53),
        preserveZero(row.bfi_54),
        preserveZero(row.bfi_55),
        preserveZero(row.bfi_56),
        preserveZero(row.bfi_57),
        preserveZero(row.bfi_58),
        preserveZero(row.bfi_59),
        preserveZero(row.bfi_60),

        preserveZero(row.BIS_1_R),
        preserveZero(row.BAS_1_Drive),
        preserveZero(row.BAS_2_Reward),
        preserveZero(row.BAS_3_Fun),
        preserveZero(row.BAS_4_Reward),
        preserveZero(row.BIS_2),
        preserveZero(row.BAS_5_Drive),
        preserveZero(row.BAS_6_Fun),
        preserveZero(row.BAS_7_Drive),
        preserveZero(row.BIS_3),
        preserveZero(row.BAS_8_Reward),
        preserveZero(row.BAS_15_Fun),
        preserveZero(row.BIS_4),
        preserveZero(row.BAS_16_Reward),
        preserveZero(row.BIS_5),
        preserveZero(row.BAS_17_Fun),
        preserveZero(row.BAS_18_Drive),
        preserveZero(row.BIS_6_R),
        preserveZero(row.BAS_19_Reward),
        preserveZero(row.BIS_7),

        preserveZero(row.Attach_Anx_1_R),
        preserveZero(row.Attach_Anx_2),
        preserveZero(row.Attach_Anx_3),
        preserveZero(row.Attach_Anx_4),
        preserveZero(row.Attach_Anx_5_R),
        preserveZero(row.Attach_Anx_6),
        preserveZero(row.Attach_Av_1),
        preserveZero(row.Attach_Av_2_R),
        preserveZero(row.Attach_Av_3_R),
        preserveZero(row.Attach_Av_4),
        preserveZero(row.Attach_Av_5),
        preserveZero(row.Attach_Av_6),

        preserveZero(row.BEQ_Intensity_1),
        preserveZero(row.BEQ_Intensity_2),
        preserveZero(row.BEQ_Intensity_3),
        preserveZero(row.BEQ_Intensity_4),
        preserveZero(row.BEQ_Intensity_5),

        preserveZero(row.Actual_enthusiastic),
        preserveZero(row.Actual_down),
        preserveZero(row.Actual_astonished),
        preserveZero(row.Actual_disgusted),
        preserveZero(row.Actual_dull),
        preserveZero(row.Actual_joyful),
        preserveZero(row.Actual_quiet),
        preserveZero(row.Actual_anxious),
        preserveZero(row.Actual_relaxed),
        preserveZero(row.Actual_craving),
        preserveZero(row.Actual_excited),
        preserveZero(row.Actual_surprised),
        preserveZero(row.Actual_interested),
        preserveZero(row.Actual_elated),
        preserveZero(row.Actual_gross),
        preserveZero(row.Actual_sleepy),
        preserveZero(row.Actual_still),
        preserveZero(row.Actual_amused),
        preserveZero(row.Actual_lonely),
        preserveZero(row.Actual_tempted),
        preserveZero(row.Actual_strong),
        preserveZero(row.Actual_passive),
        preserveZero(row.Actual_content),
        preserveZero(row.Actual_sluggish),
        preserveZero(row.Actual_inactive),
        preserveZero(row.Actual_funny),
        preserveZero(row.Actual_sad),
        preserveZero(row.Actual_euphoric),
        preserveZero(row.Actual_afraid),
        preserveZero(row.Actual_happy),
        preserveZero(row.Actual_idle),
        preserveZero(row.Actual_calm),
        preserveZero(row.Actual_unhappy),
        preserveZero(row.Actual_aroused),
        preserveZero(row.Actual_angry),
        preserveZero(row.Actual_satisfied),
        preserveZero(row.Actual_rested),
        preserveZero(row.Actual_annoyed),
        preserveZero(row.Actual_peaceful),
        preserveZero(row.Actual_serene),

        preserveZero(row.Ideal_enthusiastic),
        preserveZero(row.Ideal_down),
        preserveZero(row.Ideal_astonished),
        preserveZero(row.Ideal_disgusted),
        preserveZero(row.Ideal_dull),
        preserveZero(row.Ideal_joyful),
        preserveZero(row.Ideal_quiet),
        preserveZero(row.Ideal_anxious),
        preserveZero(row.Ideal_relaxed),
        preserveZero(row.Ideal_craving),
        preserveZero(row.Ideal_excited),
        preserveZero(row.Ideal_surprised),
        preserveZero(row.Ideal_interested),
        preserveZero(row.Ideal_elated),
        preserveZero(row.Ideal_gross),
        preserveZero(row.Ideal_sleepy),
        preserveZero(row.Ideal_still),
        preserveZero(row.Ideal_amused),
        preserveZero(row.Ideal_lonely),
        preserveZero(row.Ideal_tempted),
        preserveZero(row.Ideal_strong),
        preserveZero(row.Ideal_passive),
        preserveZero(row.Ideal_content),
        preserveZero(row.Ideal_sluggish),
        preserveZero(row.Ideal_inactive),
        preserveZero(row.Ideal_funny),
        preserveZero(row.Ideal_sad),
        preserveZero(row.Ideal_euphoric),
        preserveZero(row.Ideal_afraid),
        preserveZero(row.Ideal_happy),
        preserveZero(row.Ideal_idle),
        preserveZero(row.Ideal_calm),
        preserveZero(row.Ideal_unhappy),
        preserveZero(row.Ideal_aroused),
        preserveZero(row.Ideal_angry),
        preserveZero(row.Ideal_satisfied),
        preserveZero(row.Ideal_rested),
        preserveZero(row.Ideal_annoyed),
        preserveZero(row.Ideal_peaceful),
        preserveZero(row.Ideal_serene),

        preserveZero(row.ERQ1),
        preserveZero(row.ERQ2),
        preserveZero(row.ERQ3),
        preserveZero(row.ERQ4),
        preserveZero(row.ERQ5),
        preserveZero(row.ERQ6),
        preserveZero(row.ERQ7),
        preserveZero(row.ERQ8),
        preserveZero(row.ERQ9),
        preserveZero(row.ERQ10),


        preserveZero(row.finishTime),
        preserveZero(row.windowSizeHeight),
        preserveZero(row.windowSizeWidth),
        preserveZero(row.screenSizeHeight),
        preserveZero(row.screenSizeWidth),
        preserveZero(row.gazingPointX),
        preserveZero(row.gazingPointY),
        preserveZero(row.AC1),
        preserveZero(row.AC2),
        preserveZero(row.AC3),
        preserveZero(row.attentionLevel),
        preserveZero(row.participantSID2),
        preserveZero(row.pName),

        preserveZero(row.Ryff_1_SelfAcc),
        preserveZero(row.Ryff_2_SelfAcc),
        preserveZero(row.Ryff_3_PurLife),
        preserveZero(row.Ryff_4_EnvMast_R),
        preserveZero(row.Ryff_5_SelfAcc_R),
        preserveZero(row.Ryff_6_PosRelOther_R),
        preserveZero(row.Ryff_7_PurLife_R),
        preserveZero(row.Ryff_8_EnvMast),
        preserveZero(row.Ryff_9_EnvMast),
        preserveZero(row.Ryff_10_PurLife_R),
        preserveZero(row.Ryff_11_PersGrowth),
        preserveZero(row.Ryff_12_PersGrowth),
        preserveZero(row.Ryff_13_PosRelOther),
        preserveZero(row.Ryff_14_PersGrowth_R),
        preserveZero(row.Ryff_15_Autonomy_R),
        preserveZero(row.Ryff_16_PosRelOther_R),
        preserveZero(row.Ryff_17_Autonomy),
        preserveZero(row.Ryff_18_Autonomy),

        preserveZero(row.experimentFeedback) 
      ];

      csvRows.push(rowData);
    }

    // Finally, build the CSV string once
    const csvContent = csvRows.map(e => e.join(",")).join("\n");

    // Upload the single, complete CSV
    const uploadUrl = '/.netlify/functions/upload-csv';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadUrl, true);

    // Derive the filename from the first valid SID in participantChoices
    function isValidSID2(sid) {
        return sid && sid.trim().length > 0;
    }
    const validEntry = participantChoices.find(choice => isValidSID2(choice.SID));
    const filename = (validEntry ? validEntry.SID : "default") + '.csv';
    xhr.setRequestHeader('X-Filename', filename);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('File uploaded successfully.');
            } else {
                console.error('Error uploading file.');
            }
        }
    };
    xhr.send(csvContent);
}



// START  
//intro(); 
experimentalInstructions();

//CHEAT CODE (to update):
// <navigate to folder first>
// git status
// git add .                               (preparing all new changes to be added)
// git commit -m "Your commit message"      (commiting changes)
// git push
// npx netlify deploy --prod               (deploy to website)
// to check new files, go to AWS S3 (amazon), buckets, emotionregulation

// or in short:         git add . && git commit -m "update" && git push && npx netlify deploy --prod

// data: https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#  --> console home --> S3 service --> emotionregulation bucket --> same name folder --> files 
