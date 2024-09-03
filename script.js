//Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");

    



 //                                                 PREP 
 let predictedPoints = []; 

const videosTrain = [
    {id: 1, src: "0074.mp4", type: "Amusement" },
    {id: 47, src: "0681.mp4", type: "Anger" },
    {id: 50, src: "0645.mp4", type: "Calmness" },
    {id: 16, src: "0883.mp4", type: "Craving" },
    {id: 17, src: "0187.mp4", type: "Disgust" },
    {id: 56, src: "0970.mp4", type: "Excitement" },
    {id: 26,  src: "0489.mp4", type: "Fear" },
    {id: 34,src: "0087.mp4", type: "Joy" },
    {id: 42, src: "0299.mp4", type: "Sadness" },
]
for(let i = 0; i < videosTrain.length; i++) {
    videosTrain[i].id = i.toString();
}

const videos = [
    {id: 2, src: "0574.mp4", type: "Amusement" },
    {id: 3, src: "0656.mp4", type: "Amusement" },
    {id: 4, src: "1043.mp4", type: "Amusement" },
    {id: 45, src: "1145.mp4", type: "Amusement" }, 

    {id: 7, src: "0414.mp4", type: "Anger" },
    {id: 8, src: "0595.mp4", type: "Anger" },
    {id: 5, src: "0124.mp4", type: "Anger" },
    {id: 73, src: "2049.mp4", type: "Anger" },

    {id: 10, src: "0339.mp4", type: "Calmness" },
    {id: 9, src: "0090.mp4", type: "Calmness" },
    {id: 76, src: "1216.mp4", type: "Calmness" },
    {id: 78, src: "1835.mp4", type: "Calmness" },

    {id: 14, src: "0458.mp4", type: "Craving" },
    {id: 15, src: "0780.mp4", type: "Craving" },
    {id: 13, src: "0110.mp4", type: "Craving" },
    {id: 52, src: "0919.mp4", type: "Craving" }, 

    {id: 18,  src: "0235.mp4", type: "Disgust" },
    {id: 20, src: "0713.mp4", type: "Disgust" },
    {id: 53, src: "1423.mp4", type: "Disgust" }, // before 0876, but still isn't great
    {id: 83, src: "1194.mp4", type: "Disgust" },

    {id: 23, src: "0546.mp4", type: "Excitement" },
    {id: 55, src: "0701.mp4", type: "Excitement" },
    {id: 22, src: "0402.mp4", type: "Excitement" },
    {id: 88, src: "1537.mp4", type: "Excitement" },

    {id: 27, src: "0706.mp4", type: "Fear" },
    {id: 28, src: "1202.mp4", type: "Fear" },
    {id: 58, src: "1726.mp4", type: "Fear" },
    {id: 94, src: "2091.mp4", type: "Fear" },

    {id: 33, src: "0035.mp4", type: "Joy" },
    {id: 35, src: "0126.mp4", type: "Joy" },
    {id: 36, src: "0597.mp4", type: "Joy" },
    {id: 61, src: "0605.mp4", type: "Joy" },

    {id: 43, src: "0611.mp4", type: "Sadness" },
    {id: 44, src: "0756.mp4", type: "Sadness" }, 
    {id: 107, src: "0975.mp4", type: "Sadness" },
    {id: 110, src: "1959.mp4", type: "Sadness" }
];
for(let i = 0; i < videos.length; i++) {
    videos[i].id = i.toString();
}



let neutralVideos = [
    'neutral/0063.mp4',
    'neutral/0303.mp4',
    'neutral/0686.mp4',
    'neutral/0761.mp4',
    'neutral/1138.mp4',
    'neutral/1251.mp4',
    'neutral/1277.mp4',
    'neutral/1348.mp4',
    'neutral/1549.mp4',
    'neutral/1994.mp4'
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(neutralVideos); // Shuffle the videos to ensure randomness

let neutralIndex = 0;



let startTime; 
function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}


function createSurvey(surveyName, questions, onSubmit) {

    console.log(questions)
    const surveyContainer = document.createElement('div');
    surveyContainer.className = 'survey-container';

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
        } else {
            alert("Please answer all questions.");
        }
    };

    surveyContainer.appendChild(submitButton);
    document.body.appendChild(surveyContainer);
}




//                                                  RATINGS


//PreTrial Forecasting
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
    const video = videosTrain.find(v => v.id === videoId);

    if (!video) {
        console.error(`Video with id ${videoId} not found.`);
        return;
    }

    const ratings = videoTypeRatings[video.type];
    const ratingsCounter = videoTypeRatingsCounter[video.type];

    const questions = [
        { id: "postInterest", text: "How interesting was this video?", scale: ["Not interesting at all", " ", " ", "Somewhat interesting", " ", " ", "Very interesting"], scaleValues: [0, 1, 2, 3, 4, 5, 6] }, 
        { id: "valence", text: "How do you feel right now?", scale: ["Very unpleasant, negative"," ", " ","Neutral", " ", " ", "Very pleasant, positive"], scaleValues: [-3, -2, -1, 0, 1, 2, 3] },
        { id: "targetEmo", text: `To what extent do you feel ${ratings}?`, scale: [`Not at all ${ratings}`, " ", " ", `Somewhat ${ratings}`, " ", " ",  `Very ${ratings}`], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "counterEmo", text: `To what extent do you feel ${ratingsCounter}?`, scale: [`Not at all ${ratingsCounter}`, " ", " ", `Somewhat ${ratingsCounter}`, " ", " ", `Very ${ratingsCounter}`], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "watchAgain", text: "Would you want to watch a similar video?", scale: ["No, never!", " ", " ", "Maybe", " ", " ", "Yes, anytime!"], scaleValues: [0, 1, 2, 3, 4, 5, 6] }
    ];

    createSurvey("EmoRatingTrain", questions, function(responses) {
        onSubmit(responses);
        document.body.classList.remove('instructions-body-align');
    });
}


function EmoRatingTest(videoId, onSubmit) {
    document.body.classList.add('instructions-body-align');
    feedbackContainer.innerHTML = '';

    const video = videos.find(v => v.id === videoId);

    if (!video) {
        console.error(`Video with id ${videoId} not found.`);
        return;
    }

    const ratings = videoTypeRatings[video.type];
    const ratingsCounter = videoTypeRatingsCounter[video.type];

    if (!ratings) {
        console.error(`No ratings found for video type ${video.type}`);
        return;
    }

    const questions = [
        { id: "postInterest", text: "How interesting was this video?", scale: ["Not interesting at all", " ", " ", "Somewhat interesting", " ", " ", "Very interesting"], scaleValues: [0, 1, 2, 3, 4, 5, 6] }, 
        { id: "valence", text: "How do you feel right now?", scale: ["Very unpleasant, negative"," ", " ","Neutral", " ", " ", "Very pleasant, positive"], scaleValues: [-3, -2, -1, 0, 1, 2, 3] },
        { id: "targetEmo", text: `To what extent do you feel ${ratings}?`, scale: [`Not at all ${ratings}`, " ", " ", `Somewhat ${ratings}`, " ", " ",  `Very ${ratings}`], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "counterEmo", text: `To what extent do you feel ${ratingsCounter}?`, scale: [`Not at all ${ratingsCounter}`, " ", " ", `Somewhat ${ratingsCounter}`, " ", " ", `Very ${ratingsCounter}`], scaleValues: [0, 1, 2, 3, 4, 5, 6] }
    ];

    createSurvey("EmoRatingTest", questions, function(responses) {
        onSubmit(responses);
        console.log("Survey Responses:", responses); 
        document.body.classList.remove('instructions-body-align');
    });
}



  
function generateVideoSequence(videosByType, order) {
    // Generate the sequence based on the specified order
    let sequence = [];
    for (let type of order) {
      if (videosByType[type] && videosByType[type].length > 0) {
        sequence.push(videosByType[type].shift());  // Select and remove the first video from the shuffled array
      } else {
        console.warn(`No more videos available for type: ${type}`);
      }
    }
  
    return { sequence, videosByType };
  }
  
  const order1 = ["Joy", "Fear",  "Amusement", "Sadness", "Excitement", "Disgust", "Calmness", "Anger", "Craving"]; 
  const order2 = ["Fear", "Calmness", "Sadness", "Amusement", "Anger",  "Joy", "Disgust", "Excitement", "Craving"];



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





//                                          EXPERIMENTAL PRESENTATION


//                              PREP

let participantSID, age, racialIdentity, genderIdentity, fatherEducation, motherEducation, familyIncome, yearInSchool, timestamp1, relationship, politics, exercise, diet, sleep, stress;
function intro() {
    timestamp1 = new Date();

    // Student enter SID 
    participantSID = prompt("To receive credit, please enter your SID number:", "");
    
    // Keep prompting the user until they provide a valid 10-digit SID
    while (!isValidSID(participantSID)) {
        participantSID = prompt("Invalid SID. Please enter a 10-digit SID number:", "");
    }

    if (participantSID === "1234567890") {
        Experiment();
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

function skipToExperiment() {
    participantChoices.push({
        part: "Skip_to_Experiment",
        SID: participantSID,
        uniqueKey: participantUniqueKey,
        startTime: timestamp1
    });
    GazeCalibration();
    // IdealAffect1(participantChoices);
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
            <p>The procedures in this research were approved by the CPHS as part of the research on the Cal Coherence and Relationships Study CPHS #2022-06-15450. This study will require about 90 minutes of your time.</p>
            <p><strong>Procedure:</strong> In this experiment, you will:</p>
            <ol style="padding-left: 30px; margin-top: 10px;">
                <li style="margin-bottom: 10px;">Answer a few questions about yourself.</li>
                <li style="margin-bottom: 10px;">Watch and rate a series of short video clips.</li>
                <li style="margin-bottom: 10px;">For this study, it is critical that you watch the screen the entire time. You can’t look at or play with your phone during the experiment. Thus, you will need to give us temporary access to your camera, so we can calibrate your gaze on the screen. To make sure that people are watching, we will use your camera to collect your gaze throughout the video portion of the experiment. We will not record or store any video of you or your face. You will receive credit only if you look at the screen the entire time.</li>
                <li style="margin-bottom: 10px;">Complete a battery of questionnaires about your emotions and personality.</li>
            </ol>
            <p><strong>Study time:</strong> The study will take a maximum of 90 minutes and needs to be completed in a single sitting.</p>
            <p><strong>Risks and discomforts:</strong> You may find some of the videoclips unpleasant or even gross. There will be no videoclips with any sexual content. Moreover, as with all research, there is a chance that confidentiality could be compromised; however, my research team will be taking precautions to minimize this risk.</p>
            <p><strong>Benefits:</strong> There is no direct benefit to you, although some individuals may enjoy watching some of these video clips. The results from the study may help us understand how different people respond to different video clips.</p>
            <p><strong>Confidentiality:</strong> The study data will be handled as confidentially as possible, and your responses to the videoclips and questionnaires will never be connected with your name.</p>
            <p><strong>Retaining research records:</strong> When the research is completed, my research team will save your responses for possible use in future research done by ourselves or others indefinitely.</p>
            <p><strong>Rights:</strong> Participation in this research is completely voluntary. You can stop participating at any time if you find the videos make you too uncomfortable.</p>
            <p>If you wish to participate in this study, please check the box below:</p>
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
            demographics();
        }, 100); // 100ms delay
    };
}



// Demographics
function demographics() {
    document.body.classList.add('instructions-body-align');

    // Main wrapper
    let wrapper = document.createElement('div');
    wrapper.id = "demographicsContainer";
    wrapper.style.marginTop = '0rem'; // before 20rem
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
    function createStyledSlider2(min, max, sliderName, step = 10000) {
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
    wrapper.appendChild(createStyledSlider2(0, 1000000, 'incomeSlider'));
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
    racialIdentity = document.querySelector('input[name="racialIdentity"]:checked').value;
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

  const emotions = ["Active, engaged", "Sad, down", "Pleasant, positive", "Disgusted, gross", "Joyful, happy", "Anxious, afraid", "Amused, funny", "Interested, excited", "Angry, annoyed", "Unpleasant, negative", "Craving, tempted", "Inactive, still", "Enthusiastic, elated", "Calm, relaxed"]; 
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
                    Experiment();
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


// EXPERIMENT

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

    // Hide the fixation cross initially
    fixationCross.style.display = "none"; 

    // Play a neutral video
    videoPlayer.src = neutralVideos[neutralIndex];
    neutralIndex = (neutralIndex + 1) % neutralVideos.length; // Move to the next video and wrap around if necessary

    // Ensure video is trimmed to 3-4 seconds
    videoPlayer.onloadedmetadata = () => {
        videoPlayer.currentTime = 0; // Start from the beginning
        videoPlayer.play();
        webgazer.resume();
        console.log("resumed");
        document.body.focus();
    };

    videoPlayer.onended = videoPlayer.onpause = () => {
        cumulativeTime += Date.now() - startTime;

        if (cumulativeTime < 4000) {
            startTime = Date.now();
            videoPlayer.play();
            webgazer.resume();
        } else {
            webgazer.pause();
            videoPlayer.onended = videoPlayer.onpause = null;
            fixationCross.style.display = "none"; // Hide the fixation cross
            if (fixationMessage) fixationMessage.style.display = 'none'; // Hide the message
            onComplete();
        }
    };

    // Optionally, display a message while the neutral video is playing
    let fixationMessage = document.getElementById('fixationMessage');
    if (!fixationMessage) {
        fixationMessage = document.createElement('div');
        fixationMessage.id = 'fixationMessage';
        fixationMessage.textContent = 'Please look at the neutral video';
        fixationMessage.style.position = 'fixed';
        fixationMessage.style.top = '50px'; // Adjust as needed
        fixationMessage.style.left = '50%';
        fixationMessage.style.transform = 'translateX(-50%)';
        fixationMessage.style.fontSize = '20px'; // Adjust font size as needed
        fixationMessage.style.color = 'black'; // Adjust text color as needed
        document.body.appendChild(fixationMessage);
    }

    fixationMessage.style.display = 'block';
}


let choice;
let trialNum = 0 ;

const allTrials = [
    ...videosTrain.map(video => ({ ...video, isPractice: true })),
    ...videos.map(video => ({ ...video, isPractice: false }))
];



shuffleArray(allTrials);


function playSingleTrainVideo(video, onComplete) {
    videoPlayer.src = video.src;
    videoPlayer.onloadedmetadata = () => {
        videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek to 60% of the video's duration
        videoPlayer.onseeked = () => {
            videoPlayer.onseeked = null;
            videoPlayer.pause(); // Pause the video after seeking
            videoPlayer.style.display = "block"; // Show the video still 
            startRecording();
            webgazer.resume();

            participantChoices.push({
                part: "Still frame"
            });

            // Show the video still for 3 seconds
            setTimeout(() => {
                videoPlayer.style.display = "none";
                webgazer.pause();
                participantChoices.push({
                    part: "End still frame"
                });

                Forecasting(video.id, (forecastData) => {
                    
                    videoPlayer.currentTime = 0; // Reset the video to the start
                    videoPlayer.style.display = "block";
                    playVideoUntil3Seconds(() => {
                        videoPlayer.style.display = "none";
                        clearButtons();
                        EmoRatingTrain(video.id, (emoRatings) => {
                            console.log("emo", emoRatings)
                            feedbackContainer.style.display = "none";
                            trialNum++;
                            participantChoices.push({
                                choice: "play",
                                trialNum: trialNum,
                                vID: video.src,
                                videoType: video.type,
                                reactionTime: "NA",
                                valenceForecast: forecastData.valenceForecast,
                                interestForecast: forecastData.interestForecast,
                                postInterest: emoRatings.postInterest, 
                                valence: emoRatings.valence, 
                                targetEmo: emoRatings.targetEmo, 
                                counterEmo: emoRatings.counterEmo,  
                                watchAgain: emoRatings.watchAgain,
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
                                B_Active: baselineEmoResponses["Active, engaged"],
                                B_Sad: baselineEmoResponses["Sad, down"],
                                B_Pleasant: baselineEmoResponses["Pleasant, positive"],
                                B_Disgusted: baselineEmoResponses["Disgusted, gross"],
                                B_Joyful: baselineEmoResponses["Joyful, happy"],
                                B_Afraid: baselineEmoResponses["Anxious, afraid"],
                                B_Amused: baselineEmoResponses["Amused, funny"],
                                B_Excited: baselineEmoResponses["Interested, excited"],
                                B_Angry: baselineEmoResponses["Angry, annoyed"],
                                B_Unpleasant: baselineEmoResponses["Unpleasant, negative"],
                                B_Craving: baselineEmoResponses["Craving, tempted"],
                                B_Inactive: baselineEmoResponses["Inactive, still"],
                                B_Enthusiastic: baselineEmoResponses["Enthusiastic, elated"],
                                B_Calm: baselineEmoResponses["Calm, relaxed"],
                                ...moviePreferences
                            });
                            console.log("trying to save csv")
                            generateAndUploadCSV(participantChoices);
                            stopRecordingAndDownload(participantSID, trialNum);
                            showFixationCross(onComplete);
                        });
                    }, 3000); // 3 second delay for still
                });
            }, 3000); // 3 second delay for still
        };
    };
}

function playSingleTestVideo(video, onComplete) {
    videoPlayer.src = video.src;
    videoPlayer.onloadedmetadata = () => {
        videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek to 60% of the video's duration
        videoPlayer.onseeked = () => {
            videoPlayer.onseeked = null;
            videoPlayer.pause(); // Pause the video after seeking
            videoPlayer.style.display = "block"; // Show the video still 
            startRecording();
            webgazer.resume();
            console.log(webgazer)

            participantChoices.push({
                part: "Still frame"
            });

            // Show the video still for 3 seconds
            setTimeout(() => {
                videoPlayer.style.display = "none";
                webgazer.pause();
                participantChoices.push({
                    part: "End still frame"
                });

                Forecasting(video.id, (forecastData) => {
                    // videoPlayer.style.display = "block"; 
                    let watchButton = createButton("Watch", (reactionTime) => {
                        clearTimeout(buttonTimeout);
                        watchButton.style.display = "none";
                        skipButton.style.display = "none";
                        videoPlayer.currentTime = 0; // Reset the video to the start

                        playVideoUntil3Seconds(() => {
                            videoPlayer.style.display = "none";
                            clearButtons();

                            EmoRatingTest(video.id, (emoRatings) => {
                                feedbackContainer.style.display = "none";
                                trialNum++;
                                participantChoices.push({
                                    choice: "watch",
                                    trialNum: trialNum,
                                    vID: video.src,
                                    videoType: video.type,
                                    reactionTime: reactionTime,
                                    valenceForecast: forecastData.valenceForecast,
                                    interestForecast: forecastData.interestForecast,
                                    postInterest: emoRatings.postInterest, 
                                    valence: emoRatings.valence, 
                                    targetEmo: emoRatings.targetEmo, 
                                    counterEmo: emoRatings.counterEmo,  
                                    watchAgain: emoRatings.watchAgain,
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
                                    B_Active: baselineEmoResponses["Active, engaged"],
                                    B_Sad: baselineEmoResponses["Sad, down"],
                                    B_Pleasant: baselineEmoResponses["Pleasant, positive"],
                                    B_Disgusted: baselineEmoResponses["Disgusted, gross"],
                                    B_Joyful: baselineEmoResponses["Joyful, happy"],
                                    B_Afraid: baselineEmoResponses["Anxious, afraid"],
                                    B_Amused: baselineEmoResponses["Amused, funny"],
                                    B_Excited: baselineEmoResponses["Interested, excited"],
                                    B_Angry: baselineEmoResponses["Angry, annoyed"],
                                    B_Unpleasant: baselineEmoResponses["Unpleasant, negative"],
                                    B_Craving: baselineEmoResponses["Craving, tempted"],
                                    B_Inactive: baselineEmoResponses["Inactive, still"],
                                    B_Enthusiastic: baselineEmoResponses["Enthusiastic, elated"],
                                    B_Calm: baselineEmoResponses["Calm, relaxed"],
                                    ...moviePreferences
                                });
                                console.log("trying to save csv");
                                generateAndUploadCSV(participantChoices);
                                stopRecordingAndDownload(participantSID, trialNum);
                                showFixationCross(onComplete);
                            });
                        });
                    });

                    let skipButton = createButton("Avoid", (reactionTime) => {
                        clearTimeout(buttonTimeout);
                        watchButton.style.display = "none";
                        skipButton.style.display = "none";
                        videoPlayer.style.display = "block";
                        playNoVideoUntil3Seconds(() => {

                            videoPlayer.style.display = "none";
                            clearButtons();

                            EmoRatingTest(video.id, (emoRatings) => {
                                feedbackContainer.style.display = "none";
                                trialNum++;

                                participantChoices.push({
                                    choice: "avoid",
                                    trialNum: trialNum,
                                    vID: video.src,
                                    videoType: video.type,
                                    reactionTime: reactionTime,
                                    valenceForecast: forecastData.Forecasting_Question1, // Update the key reference
                                    interestForecast: forecastData.Forecasting_Question2,
                                    postInterest: emoRatings.EmoRatingTest_Question1, 
                                    valence: emoRatings.EmoRatingTest_Question2, 
                                    targetEmo: emoRatings.EmoRatingTest_Question3, 
                                    counterEmo: emoRatings.EmoRatingTest_Question4, 
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
                                    B_Active: baselineEmoResponses["Active, engaged"],
                                    B_Sad: baselineEmoResponses["Sad, down"],
                                    B_Pleasant: baselineEmoResponses["Pleasant, positive"],
                                    B_Disgusted: baselineEmoResponses["Disgusted, gross"],
                                    B_Joyful: baselineEmoResponses["Joyful, happy"],
                                    B_Afraid: baselineEmoResponses["Anxious, afraid"],
                                    B_Amused: baselineEmoResponses["Amused, funny"],
                                    B_Excited: baselineEmoResponses["Interested, excited"],
                                    B_Angry: baselineEmoResponses["Angry, annoyed"],
                                    B_Unpleasant: baselineEmoResponses["Unpleasant, negative"],
                                    B_Craving: baselineEmoResponses["Craving, tempted"],
                                    B_Inactive: baselineEmoResponses["Inactive, still"],
                                    B_Enthusiastic: baselineEmoResponses["Enthusiastic, elated"],
                                    B_Calm: baselineEmoResponses["Calm, relaxed"],
                                    ...moviePreferences
                                });
                                console.log("trying to save csv");
                                generateAndUploadCSV(participantChoices);
                                stopRecordingAndDownload(participantSID, trialNum);
                                showFixationCross(onComplete);
                            });
                        });
                    });

                    const buttonTimeout = setTimeout(() => {
                        const randomButton = Math.random() < 0.5 ? watchButton : skipButton;
                        randomButton.click();
                    }, 7000); // decide automatically if no response in 7 seconds

                    watchButton.style.marginRight = "20px";
                    // watchButton.style.marginLeft = "40%";
                    watchButton.style.display = "inline-block";
                    skipButton.style.display = "inline-block";


                    clearButtons();
                    addButton(watchButton);
                    addButton(skipButton);
                }); // end of the forecasting callback
            }, 3000); // 3 second delay for still
        };
    };
}


function Experiment() {
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
        playAllVideos(0); // Start playing videos
    }));
}

function playAllVideos(index) {
    if (index < allTrials.length) {
        let trial = allTrials[index];
        if (trial.isPractice) {
            playSingleTrainVideo(trial, () => playAllVideos(index + 1));
        } else {
            playSingleTestVideo(trial, () => playAllVideos(index + 1));
        }
    } else {
        OpenBoxInstructions(participantChoices) // End of all trials
    }
}



// Handle VIDEO RECORDING

let mediaRecorder;
let recordedBlobs;
let videoStream;

async function startRecording() {
    recordedBlobs = [];
    videoStream = await navigator.mediaDevices.getUserMedia({ 
        video: {
        width: { exact: 640 },  // 360p resolution width
        height: { exact: 360 }, // 360p resolution height
        frameRate: { ideal: 30 } // Optional: specify frame rate
    },
     audio: false });
    const options = { mimeType: 'video/webm;codecs=vp9' };
    mediaRecorder = new MediaRecorder(videoStream, options);

    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    console.log('MediaRecorder started', mediaRecorder);
}


function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
    }
}

function stopRecordingAndDownload(participantName, trialNum) {
    mediaRecorder.onstop = async () => {
        const blob = new Blob(recordedBlobs, { type: 'video/webm' });
        const fileName = `${participantName}_trial_${trialNum}.webm`;
        
        // Convert blob to base64
        const arrayBuffer = await blob.arrayBuffer();
        const base64Data = btoa(
            new Uint8Array(arrayBuffer)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );

        const uploadUrl = '/.netlify/functions/upload-video';

        const xhr = new XMLHttpRequest();
        xhr.open('POST', uploadUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('X-Filename', fileName);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('Video uploaded successfully');
                } else {
                    console.error('Error uploading video');
                }
            }
        };

        xhr.send(JSON.stringify({ videoData: base64Data }));
    };

    mediaRecorder.stop();
    videoStream.getTracks().forEach(track => track.stop());
}


function downloadRecording(participantName, trialNum) {
    const blob = new Blob(recordedBlobs, { type: 'video/webm' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${participantName}_trial_${trialNum}.webm`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 100);
    return blob;
}






//                              MOTIVATION BIT


function OpenBox(participantChoices, messageText, inputPlaceholder, responseKey, minWords, onComplete) {
    message.innerHTML = `
    <div style="max-width: 800px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
        <p><strong>${messageText}</strong></p>
        <textarea id="${responseKey}" placeholder="${inputPlaceholder}" style="width: 800px; height: 150px; padding: 10px; margin-bottom: 20px; resize: none;" required></textarea>
        <div style="text-align: center;">
            <button onclick="submitForm()">Continue</button>
        </div>
    </div>
    `;
    message.style.display = 'block';

    // Define what happens when the form is submitted
    window.submitForm = function() {
        let responseValue = document.getElementById(responseKey).value;

        if (responseValue.trim().split(/\s+/).length < minWords) {
            alert(`Please write at least ${minWords} words to explain your choices.`);
            return false;
        }

        responseValue = `"${responseValue.replace(/"/g, '""').trim()}"`;

        // Create an object with the response
        const responseObject = { [responseKey]: responseValue };

        // Merge the responseObject into each choice in participantChoices
        participantChoices.forEach((choice, index) => {
            if (typeof choice === 'object' && !Array.isArray(choice)) {
                participantChoices[index] = { ...choice, ...responseObject };
            } else {
                console.error('Choice is not an object:', choice);
            }
        });

        message.style.display = 'none'; // Hide the message
        generateAndUploadCSV(participantChoices);

        if (onComplete) {
            onComplete();
        }
    };
}


function OpenBoxInstructions(participantChoices) {
    OpenBox(
        participantChoices,
        "Now we would like you to take a moment to reflect on the choices you made during the previous task.<br><i>What kinds of videos did you choose to <u>watch</u>? What were the specific reasons? Please be comprehensive!</i>",
        "Write here",
        "WhyWatch",
        50,
        function() { // Callback first OpenBox is done
            OpenBox(
                participantChoices,
                "Now we would like you to take a moment to reflect on the choices you made during the previous task.<br><i>What kinds of videos did you choose to <u>avoid</u>? What were the specific reasons? Please be comprehensive!</i>",
                "Write here",
                "WhyAvoid",
                50,
                function() { // Callback OpenBox is done
                    OpenBox(
                        participantChoices,
                        "Some of the videos showed brief scenes that people may find sad, scary, or even disgusting. Did you watch any of these videos, and if so, why? Did you skip any of these videos? Again, please explain why.",
                        "Write here",
                        "WhyCounterHedonic",
                        50,
                        function() { // Callback third OpenBox is done
                            PostExperimentalInstructions(participantChoices);
                        }
                    );
                }
            );
        }
    );
}








function PostExperimentalInstructions(participantChoices) {//participantChoices
    message.innerHTML = `
    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
    <p><strong>Now you will revisit pictures from some of the videos you decided to watch or avoid earlier. </strong></p>
    <p>For every picture, please rate the reasons why you decided to watch or avoid that particular video!</p><br><br><br><br><br><br>
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
    // Filter participantChoices to get choices with valid vID and choice data
    const validChoices = participantChoices.filter(choice => choice.vID && choice.choice !== undefined);

    // Get the watched and avoided choices
    const watchedChoices = validChoices.filter(choice => choice.choice === 'watch').map(choice => choice.vID);
    const avoidedChoices = validChoices.filter(choice => choice.choice === 'avoid').map(choice => choice.vID);

    // Determine how many videos to take from each category
    let numWatchedNeeded, numAvoidedNeeded;
    if (watchedChoices.length >= 2 && avoidedChoices.length >= 2) {
        numWatchedNeeded = numAvoidedNeeded = 2;
    } else if (watchedChoices.length === 1 && avoidedChoices.length >= 3) {
        numWatchedNeeded = 1;
        numAvoidedNeeded = 3;
    } else if (watchedChoices.length >= 3 && avoidedChoices.length === 1) {
        numWatchedNeeded = 3;
        numAvoidedNeeded = 1;
    } else if (watchedChoices.length === 0 && avoidedChoices.length >= 4) {
        numWatchedNeeded = 0;
        numAvoidedNeeded = 4;
    } else if (watchedChoices.length >= 4 && avoidedChoices.length === 0) {
        numWatchedNeeded = 4;
        numAvoidedNeeded = 0;
    }

    // Get the appropriate number of videos from each category
    const lastWatched = watchedChoices.slice(-numWatchedNeeded);
    const lastAvoided = avoidedChoices.slice(-numAvoidedNeeded);

    // Combine and shuffle the selected video IDs
    videoIDs = lastWatched.concat(lastAvoided);
    shuffleArray(videoIDs);

    // Reset the currentVideoIndex to 0 each time choiceMotivation is called
    currentVideoIndex = 0;

    const scaleLabels = ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"];
    
    
    // Function to load and display the video
    function loadVideo(videoIndex) {
        clearPreviousElements(); 

        setTimeout(function() {
            document.body.classList.add('instructions-body-align');
        }, 100); 
        
        const selectedVideoID = videoIDs[videoIndex];
        const selectedVideo = videos.find(video => video.src === selectedVideoID);
    
        if (selectedVideo) {
            // Get the participant's choice for the selected video
            const participantChoice = participantChoices.find(choice => choice.vID === selectedVideoID)?.choice;

            // Determine which set of questions to use based on participantChoice
            let currentQuestions;
            if (participantChoice === 'watch') {
                currentQuestions = [
                    "Because I was curious about the events in the video",
                    "Because I wanted to feel the emotions shown in the video",
                    "Because I am used to feeling this way",
                    "Because I did not want to feel bored by the blank screen"
                ];
            } else if (participantChoice === 'avoid') {
                currentQuestions = [
                    "Because I was not curious about the events in the video",
                    "Because I did not want to feel the emotions shown in the video",
                    "Because I am not used to feeling this way",
                    "Because I did not mind watching the blank screen"
                ];
            }
            // Create a container div
            const container = document.createElement('div');
            container.classList.add('clearable-container');
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'flex-start';
            container.style.height = '100vh';
    
            // Create and style the text
            // const textElement = document.createElement('p');
            // textElement.textContent = `Why did you ${participantChoice} this video?`;
            // textElement.style.fontWeight = 'bold';
            // textElement.style.textAlign = 'center';
            // textElement.style.marginBottom = '20px';

            const textElement = document.createElement('p');
            textElement.innerHTML = `Why did you decide to <u style="text-decoration: underline;">${participantChoice}</u> this video?`;
            textElement.style.fontWeight = 'bold';
            textElement.style.textAlign = 'center';
            textElement.style.marginBottom = '20px';
    
            // Style the video player
            videoPlayer.id = 'videoPlayer'; 
            videoPlayer.src = selectedVideo.src;
            videoPlayer.controls = false;
            videoPlayer.style.display = 'block';
            videoPlayer.style.margin = '0 auto';
            videoPlayer.onloadedmetadata = () => {
                videoPlayer.currentTime = videoPlayer.duration * 0.6;
                videoPlayer.onseeked = () => {
                    videoPlayer.pause();
                };
            };
    
            // Append elements in correct order
            container.appendChild(textElement); // Append header first
            container.appendChild(videoPlayer); // Append video second

            const questionsContainer = document.createElement("div");
            renderQuestions(questionsContainer, currentQuestions); 
            container.appendChild(questionsContainer);
    
            // Style and position the 'Next' button
            const nextButton = document.createElement('button');
            nextButton.id = 'nextButton';
            nextButton.textContent = 'Next';
            nextButton.style.display = 'block';
            nextButton.style.margin = '20px auto';
    
            // Function to check if all questions are answered
            function allQuestionsAnswered(currentQuestions) {
                let answeredCount = 0;
                currentQuestions.forEach((_, index) => {
                    const scaleContainer = document.querySelector(`#scale-container-${index}`);
                    const selectedBox = Array.from(scaleContainer.childNodes).find(child => child.style.backgroundColor === "rgb(216, 216, 216)");
                    if (selectedBox) {
                        answeredCount++;
                    }
                });
                return answeredCount === currentQuestions.length;
            }
    
            nextButton.onclick = function() {
                if (allQuestionsAnswered(currentQuestions)) {
                    let trial = {
                        vID: videoIDs[currentVideoIndex],
                        choice: participantChoices.find(choice => choice.vID === videoIDs[currentVideoIndex])?.choice,
                        Motivation_Emo: getLikertResponse(0),
                        Motivation_Normal: getLikertResponse(1),
                        Motivation_Events: getLikertResponse(2),
                        Motivation_Boredom: getLikertResponse(3) 
                    };
                    trialData.push(trial);

                    participantChoices = participantChoices.map(participantChoice => {
                        if (typeof participantChoice === 'object' && !Array.isArray(participantChoice)) {
                            const trialResponse = trialData.find(trial => trial.vID === participantChoice.vID);
                            return trialResponse ? { ...participantChoice, ...trialResponse } : participantChoice;
                        } else {
                            console.error('Choice is not an object:', participantChoice);
                            return participantChoice;
                        }
                    });


                    currentVideoIndex++;
                    if (currentVideoIndex < videoIDs.length) {
                        //clearPreviousElements();
                        loadVideo(currentVideoIndex);
                        
                    } else {
                        generateAndUploadCSV(participantChoices);
                        console.log(trialData);
                        container.style.display = 'none'; // Hide the container
                        videoPlayer.style.display = 'none'; //NOTE THIS (RE: previous task)
                        questionsContainer.style.display = 'none'; // Hide the questions container
                        nextButton.style.display = 'none';
                        setTimeout(function() {
                            Questionnaire(participantChoices); 
                        }, 100); 
                        
                    }
                } else {
                    alert("Please answer all questions before proceeding."); // Alert the user to answer all questions
                }
            };
    
            container.appendChild(nextButton); // Append 'Next' button last
            
            document.body.appendChild(container);
            //clearPreviousElements();
        } else {
            console.error('Selected video not found in the videos array.');
        }
        document.body.classList.remove('instructions-body-align');
    }
    
    function renderQuestions(container, questions) {
        const questionsContainer = document.createElement("div");
        questionsContainer.id = 'questionsContainer';
        questionsContainer.style.marginTop = "20px";
    
        questions.forEach((questionText, index) => {
            const questionContainer = document.createElement("div");
            questionContainer.style.marginBottom = "20px"; // Increased padding before each question
    
            const questionLabel = document.createElement("label");
            questionLabel.textContent = questionText;
            questionLabel.style.display = "block";
            questionLabel.style.marginBottom = "10px"; // Padding between question label and scale options
            questionLabel.style.fontWeight = "bold"; // Bold the question text
    
            questionContainer.appendChild(questionLabel);
    
            const scaleContainer = document.createElement("div");
            scaleContainer.id = `scale-container-${index}`; // Ensure this matches the ID format used in allQuestionsAnswered
            scaleContainer.style.display = "flex"; 
    
            for (let i = 0; i < 5; i++) {
                const box = document.createElement("div");
                box.style.flex = "1 0 18%"; // Set flex-grow, flex-shrink, and flex-basis
                box.style.textAlign = "center"; // Center text in the box
                box.style.padding = "10px";
                box.style.border = "1px solid #ccc";
                box.style.cursor = "pointer"; // Change cursor to indicate clickable area
                if (i < 4) {
                    box.style.borderRight = "none"; // Remove right border to make boxes touch each other
                }
    
                const numberLabel = document.createElement("div");
                numberLabel.textContent = i;
                //numberLabel.style.fontWeight = "bold"; // Bold the number
    
                const textLabel = document.createElement("div");
                textLabel.textContent = scaleLabels[i];
                textLabel.style.marginTop = "5px"; // Space between number and label
                textLabel.style.fontSize = "0.85em";

                box.appendChild(numberLabel);
                box.appendChild(textLabel);
    
                // Functionality for selecting a box
                box.onclick = function() {
                    // Clear previous selection
                    scaleContainer.childNodes.forEach(child => {
                        child.style.backgroundColor = "";
                    });
    
                    // Mark current selection
                    box.style.backgroundColor = "#d8d8d8";
                };
    
                scaleContainer.appendChild(box);
            }
    
            questionContainer.appendChild(scaleContainer);
            questionsContainer.appendChild(questionContainer);
        });
    
        container.insertBefore(questionsContainer, container.lastChild);
    }
    // Call loadVideo for the first time
    loadVideo(currentVideoIndex);
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




//                                          SURVEYS




// Spontaneous, BFI, Situational  
function Questionnaire(participantChoices) {
    let feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";

    const Situational = [
        { id: "SS_Gen1", text: "When I choose how to spend my time, I place a lot of importance on how the people involved will make me feel.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SM1", text: "When I am upset, I make a plan of action to deal with the problem that is making me upset.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Av1", text: "I am careful to avoid people or situations that make me have negative feelings.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Ap1", text: "I regulate my emotions by choosing to spend time with people that I think will probably make me feel good.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SM2", text: "I control my emotions by changing the particular situation I happen to be in.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Gen2", text: "How a situation will make me feel is of little concern to me.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Ap2", text: "I control my emotions by approaching situations and activities that I expect will put me in a good mood.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_AvR", text: "I do not manage my emotions by avoiding situations and people that I expect will make me feel bad.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SM3", text: "When I am in a stressful situation I take steps to turn the situation around, so it becomes more positive.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Gen_3", text: "I control my emotions by carefully choosing the situations I get myself into.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Av2", text: "I control my emotions by avoiding situations and activities that I expect will put me in a bad mood.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "AC2", text: "I can pay attention and select agree strongly", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "SM4", text: "When I am in an emotionally challenging situation, I take action to deal with the problem.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_ApR", text: "I do not manage my emotions by seeking out situations and people that I expect will make me feel good.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Gen4", text: "When I choose friends or activities, I do not think much about how they will make me feel.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SM5", text: "When I am stressed, I engage with the situation to neutralize the stressor, so it becomes less negative.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Ap3", text: "I am careful to seek out people or situations that make me have positive feelings.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "SS_Av3", text: "I regulate my emotions by avoiding spending time with people that I think will probably make me feel bad.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
    ];
    
    const BFI = [
        { id: "bfi_1", text: "Is outgoing, sociable.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_2", text: "Is compassionate, has a soft heart.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_3", text: "Tends to be disorganized.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_4", text: "Is relaxed, handles stress well.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_5", text: "Has few artistic interests.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_6", text: "Has an assertive personality.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_7", text: "Is respectful, treats others with respect.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_8", text: "Tends to be lazy.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_9", text: "Stays optimistic after experiencing a setback.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        // { id: "bfi_10", text: "Is curious about many different things.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_11", text: "Rarely feels excited or eager.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_12", text: "Tends to find fault with others.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_13", text: "Is dependable, steady.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_14", text: "Is moody, has up and down mood swings.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_15", text: "Is inventive, finds clever ways to do things.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_16", text: "Tends to be quiet.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_17", text: "Feels little sympathy for others.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_18", text: "Is systematic, likes to keep things in order.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_19", text: "Can be tense.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_20", text: "Is fascinated by art, music, or literature.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_21", text: "Is dominant, acts as a leader.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_22", text: "Starts arguments with others.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_23", text: "Has difficulty getting started on tasks.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_24", text: "Feels secure, comfortable with self.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_25", text: "Avoids intellectual, philosophical discussions.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_26", text: "Is less active than other people.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_27", text: "Has a forgiving nature.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_28", text: "Can be somewhat careless.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_29", text: "Is emotionally stable, not easily upset.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_30", text: "Has little creativity.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_30", text: "Has little creativity.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_31", text: "Is sometimes shy, introverted.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_32", text: "Is helpful and unselfish with others.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_33", text: "Keeps things neat and tidy.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_34", text: "Worries a lot.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_35", text: "Values art and beauty.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_36", text: "Finds it hard to influence people.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_37", text: "Is sometimes rude to others.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_38", text: "Is efficient, gets things done.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_39", text: "Often feels sad.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_40", text: "Is complex, a deep thinker.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_41", text: "Is full of energy.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_42", text: "Is suspicious of others' intentions.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_43", text: "Is reliable, can always be counted on.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_44", text: "Keeps their emotions under control.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_45", text: "Has difficulty imagining things.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_46", text: "Is talkative.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_47", text: "Can be cold and uncaring.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_48", text: "Leaves a mess, does not clean up.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_49", text: "Rarely feels anxious or afraid.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_50", text: "Thinks poetry and plays are boring.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_51", text: "Prefers to have others take charge.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_52", text: "Is polite, courteous to others.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_53", text: "Is persistent, works until the task is finished.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_54", text: "Tends to feel depressed, blue.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_55", text: "Has little interest in abstract ideas.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_56", text: "Shows a lot of enthusiasm.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_57", text: "Assumes the best about people.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_58", text: "Sometimes behaves irresponsibly.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_59", text: "Is temperamental, gets emotional easily.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] },
        { id: "bfi_60", text: "Is original, comes up with new ideas.", scale: ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"], scaleValues: [1, 2, 3, 4, 5] }
    ]


    const Spontaneous = [
        { id: "Spontaneous_1_Acc", text: "I allowed myself to feel the emotions in the videos and then I let them go", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_2_Reap", text: "I regulated my emotions by thinking differently about whatever was making me emotional.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_3_Sup", text: "I tried to keep my emotions to myself.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_4_Dist", text: "I regulated my emotions by looking away from the screen.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_5_ES", text: "I controlled my emotions by not expressing them.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_6_Reap", text: "I controlled my emotions by changing the way I thought about the videos.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_7_Sup", text: "I tried to suppress my emotions.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_8_Dist", text: "I changed the way I was feeling by thinking about something else.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_9_Acc", text: "I simply accepted my emotions as a natural response to the particular circumstances I was in.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_10_SS_Gen", text: "I controlled my emotions by carefully choosing the videos I got myself into.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_11_SS_Ap", text: "I controlled my emotions by approaching videos that I expected would put me in a good mood.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_12_SS_Av", text: "I controlled my emotions by avoiding videos that I expected will put me in a bad mood.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] },
        { id: "Spontaneous_13_SM", text: "I took steps to turn the situation around, so it became more positive.", scale: ["Not at all", " ", " ", "Somewhat", " ", " ", "Very much"], scaleValues: [0, 1, 2, 3, 4, 5, 6] }
    ];
    
    

    let currentRound = 0;



    function renderNextSurvey() {
        let currentQuestions;
        let headerText;
        let surveyName;
 
        switch (currentRound) {
            case 0:
                currentQuestions = Spontaneous;
                headerText = "While watching the videos...";
                surveyName = "Spontaneous";
                break;
            case 1:
                currentQuestions = BFI;
                headerText = "I am someone who...";
                surveyName = "BFI";
                break;
            case 2:
                currentQuestions = Situational;
                headerText = "Please rate the extent to which you agree with the following statements";
                surveyName = "Situational";
                break;
            default:
                    // This part should not reference `questionnaireResponses`
                    feedbackContainer.style.display = "none";
                    document.body.classList.remove('instructions-body-align');
                    feedbackContainer.style.marginTop = '0px';
                    console.log(participantChoices)
                    generateAndUploadCSV(participantChoices);
                    setTimeout(function() {
                        postExperimentalEmo(participantChoices);
                    }, 100);
                    return;
        }

        const existingHeader = document.querySelector('h2');
        if (existingHeader) {
            existingHeader.remove();
        }
        const header = document.createElement('h2');
        header.textContent = headerText;
        header.style.textAlign = 'center'; // Ensure the header is centered
        document.getElementById('feedbackContainer').prepend(header);




 
        createSurvey(surveyName, currentQuestions, function(questionnaireResponses) {
            participantChoices = participantChoices.map(choice => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    return { ...choice, ...questionnaireResponses };
                } else {
                    console.error('Choice is not an object:', choice);
                    return choice;
                }
            });
        
            currentRound++;
            renderNextSurvey();
        });
        
    }
 
    renderNextSurvey(); // Start the first survey
 }


//Post experimental emotion
// Post experimental emotion
let postExperimentalEmoResponses = {};

function postExperimentalEmo(participantChoices) {
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '40px'; 
    feedbackContainer.innerHTML = '';

    const emotions = ["Active, engaged", "Sad, down", "Pleasant, positive", "Disgusted, gross", "Joyful, happy", "Anxious, afraid", "Amused, funny", "Interested, excited", "Angry, annoyed", "Unpleasant, negative", "Craving, tempted", "Inactive, still", "Enthusiastic, elated", "Calm, relaxed"]; 
    const emotionResponses = {};

    const emotionKeyMap = {
        "Active, engaged": "Active",
        "Sad, down": "Sad",
        "Pleasant, positive": "Pleasant",
        "Disgusted, gross": "Disgusted",
        "Joyful, happy": "Joyful",
        "Anxious, afraid": "Afraid",
        "Amused, funny": "Amused",
        "Interested, excited": "Excited",
        "Angry, annoyed": "Angry",
        "Unpleasant, negative": "Unpleasant",
        "Craving, tempted": "Craving",
        "Inactive, still": "Inactive",
        "Enthusiastic, elated": "Enthusiastic",
        "Calm, relaxed": "Calm"
    };

    // Create and add header text
    const header = document.createElement("p");
    header.style.fontWeight = 'bold';
    header.style.textAlign = 'center'; 
    header.style.padding = '20px 0';
    header.textContent = "Please rate the extent to which you feel right now:";
    feedbackContainer.appendChild(header);

    // Create the survey questions
    const questions = emotions.map(emotion => {
        return {
            id: emotionKeyMap[emotion],
            text: emotion,
            scale: [`Not ${emotion} at all`, " ", " ", `Somewhat ${emotion}`, " ", " ", `Very ${emotion}`],
            scaleValues: [0, 1, 2, 3, 4, 5, 6]
        };
    });

    // Define the onSubmit callback
    const onSubmit = (surveyResponses) => {
        postExperimentalEmoResponses = Object.entries(surveyResponses).reduce((acc, [key, value]) => {
            acc["P_" + key] = value.toString();  // Use the simplified emotion key with "P_" prefix
            return acc;
        }, {});

        participantChoices.forEach((choice, index) => {
            if (typeof choice === 'object' && !Array.isArray(choice)) {
                participantChoices[index] = { ...choice, ...postExperimentalEmoResponses };
            } else {
                console.error('Choice is not an object:', choice);
            }
        });

        feedbackContainer.style.display = "none";
        document.body.classList.remove('instructions-body-align');
        feedbackContainer.style.marginTop = '0px';

        generateAndUploadCSV(participantChoices);
        Questionnaire2(participantChoices); 
    };

    // Use the createSurvey function to render the survey
    createSurvey("PostExperimentalEmo", questions, onSubmit);

    feedbackContainer.style.display = "block";
}

function Questionnaire2(participantChoices) {
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
    let currentRound = 0;

    function renderNextSurvey() {
        let currentQuestions;
        let headerText;
        let surveyName;
        const scaleLabels = ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"];
        const scaleValues = [1, 2, 3, 4, 5];
        
        switch (currentRound) {
            case 0:
                currentQuestions = Object.entries(BISBAS).map(([key, text]) => ({id: key, text: text, scale: scaleLabels, scaleValues: scaleValues}));
                headerText = "Please rate the extent to which you agree with the following statements:";
                surveyName = "BISBAS";
                break;
            case 1:
                currentQuestions = Object.entries(Attachment).map(([key, text]) => ({id: key, text: text, scale: scaleLabels, scaleValues: scaleValues}));
                headerText = "How do you feel in relationships with close others such as family, friends, and romantic partners?";
                surveyName = "Attachment";
                break;
            case 2:
                currentQuestions = Object.entries(Empathy).map(([key, text]) => ({id: key, text: text, scale: scaleLabels, scaleValues: scaleValues}));
                headerText = "Please rate the extent to which you agree with the following statements:";
                surveyName = "Empathy";
                break;        
            default:
                feedbackContainer.style.display = "none";
                document.body.classList.remove('instructions-body-align');
                feedbackContainer.style.marginTop = '0px';
                generateAndUploadCSV(participantChoices);
                setTimeout(function() {
                    Reactivity(participantChoices);
                }, 100);
                return;
        }

        createSurvey(surveyName, currentQuestions, questionnaireResponses => {
            participantChoices = participantChoices.map(choice => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    return { ...choice, ...questionnaireResponses };
                } else {
                    console.error('Choice is not an object:', choice);
                    return choice;
                }
            });

            currentRound++;
            renderNextSurvey();
        });
    }

    renderNextSurvey(); // Start the first survey
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

    const scaleLabels = ["Strongly disagree", "Disagree a little", "Neutral", "Agree a little", "Strongly agree"];
    const scaleValues = [1, 2, 3, 4, 5];

    const questionsArray = Object.entries(Reactivity).map(([key, text]) => ({
        id: key,
        text: text,
        scale: scaleLabels,
        scaleValues: scaleValues
    }));

    const headerText = "Please rate the extent to which you agree with the following statements:";

    createSurvey("Reactivity", questionsArray, questionnaireResponses => {
        participantChoices = participantChoices.map(choice => {
            if (typeof choice === 'object' && !Array.isArray(choice)) {
                return { ...choice, ...questionnaireResponses };
            } else {
                console.error('Choice is not an object:', choice);
                return choice;
            }
        });

        feedbackContainer.style.display = "none";
        document.body.classList.remove('instructions-body-align');
        feedbackContainer.style.marginTop = '0px';
        generateAndUploadCSV(participantChoices);
        WellBeing(participantChoices);  // Call the next function in sequence
    });
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

    const scaleLabels = ["Strongly disagree", "Disagree a little", "Neutral", "Agree a little", "Strongly agree"];
    const scaleValues = [1, 2, 3, 4, 5];

    const questionsArray = Object.entries(WellBeing).map(([key, text]) => ({
        id: key,
        text: text,
        scale: scaleLabels,
        scaleValues: scaleValues
    }));

    const headerText = "Please rate the extent to which you agree with the following statements:";

    createSurvey("WellBeing", questionsArray, questionnaireResponses => {
        participantChoices = participantChoices.map(choice => {
            if (typeof choice === 'object' && !Array.isArray(choice)) {
                return { ...choice, ...questionnaireResponses };
            } else {
                console.error('Choice is not an object:', choice);
                return choice;
            }
        });

        feedbackContainer.style.display = "none";
        document.body.classList.remove('instructions-body-align');
        feedbackContainer.style.marginTop = '0px';
        generateAndUploadCSV(participantChoices);
        IdealAffect1(participantChoices);  // Call the next function in sequence
    });
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
        "Actual_serene": "serene"
    };

    const scaleLabels = ["Never", "A small amount of the time", "Half the time", "Most of the time", "All of the time"];
    const scaleValues = [1, 2, 3, 4, 5];

    const questionsArray = Object.entries(IdealAffectActual).map(([key, text]) => ({
        id: key,
        text: `Over the course of a typical week, I ACTUALLY feel ${text}:`,
        scale: scaleLabels,
        scaleValues: scaleValues
    }));

    const headerText = "Over the course of a typical week, I ACTUALLY feel:";

    createSurvey("IdealAffectActual", questionsArray, questionnaireResponses => {
        participantChoices = participantChoices.map(choice => {
            if (typeof choice === 'object' && !Array.isArray(choice)) {
                return { ...choice, ...questionnaireResponses };
            } else {
                console.error('Choice is not an object:', choice);
                return choice;
            }
        });

        feedbackContainer.style.display = "none";
        document.body.classList.remove('instructions-body-align');
        feedbackContainer.style.marginTop = '0px';
        generateAndUploadCSV(participantChoices);
        setTimeout(function() {
            IdealAffect2(participantChoices);
        }, 100);
    });
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

    function renderQuestions() {
        createSurvey(
            'IdealAffectIdeal',
            Object.entries(IdealAffectIdeal).map(([key, text]) => ({
                id: key,
                text: text,
                scale: scaleLabels,
                scaleValues: [1, 2, 3, 4, 5]
            })),
            function (questionnaireResponses) {
                participantChoices = participantChoices.map(choice => {
                    if (typeof choice === 'object' && !Array.isArray(choice)) {
                        return { ...choice, ...questionnaireResponses }; // Merge the objects
                    } else {
                        console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
                        return choice;
                    }
                });

                feedbackContainer.style.display = "none";
                document.body.classList.remove('instructions-body-align');
                feedbackContainer.style.marginTop = '0px';
                generateAndUploadCSV(participantChoices);
                setTimeout(function () {
                    ERQ(participantChoices);
                }, 100);
            }
        );
    }

    renderQuestions();
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
    const scaleValues = [1, 2, 3, 4, 5];

    const questionsArray = Object.entries(ERQ).map(([key, text]) => ({
        id: key,
        text,
        scale: scaleLabels,
        scaleValues: scaleValues
    }));

    const headerText = "Please rate the extent to which you agree with the following statements:";

    createSurvey("ERQ", questionsArray, questionnaireResponses => {
        participantSID2 = prompt("Please enter your SID number one more time:", "");
        pName = prompt("Please enter your name:", "");

        participantChoices = participantChoices.map(choice => {
            if (typeof choice === 'object' && !Array.isArray(choice)) {
                return { ...choice, ...questionnaireResponses, participantSID2, pName };
            } else {
                console.error('Choice is not an object:', choice);
                return choice;
            }
        });

        feedbackContainer.style.display = "none";
        document.body.classList.remove('instructions-body-align');
        feedbackContainer.style.marginTop = '0px';
        generateAndUploadCSV(participantChoices);
        attentionCheck(participantChoices);
    });
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
    <p style="text-align:center;"><strong>Congratulations! You're almost done with the study.</strong></p>
        <p>Before we wrap things up, we would like to know how focused you thought were you during the study. Don't worry, <strong>your response <u>won’t</u> impact your credit for participating</strong>. We just want to ensure our data is as accurate as possible, so your honesty is much appreciated! :) </p> 
    </div>
    `;

    let nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.style.marginTop = '20px';
    nextButton.setAttribute('type', 'button'); // Explicitly set the button type
    nextButton.onclick = function() {
        console.log('Next button clicked'); // Debugging log
        showAttentionQuestion(wrapper, participantChoices);
    };
    wrapper.appendChild(nextButton);

    // Append the wrapper to the main container
    document.getElementById('mainContainer').appendChild(wrapper);
}

function showAttentionQuestion(wrapper, participantChoices) {
    wrapper.innerHTML = '';
    
        // Helper function to create a styled label
        function createStyledLabel(content) {
            let label = document.createElement('label');
            label.textContent = content;
            label.style.fontWeight = 'bold';
            label.style.display = 'block';
            label.style.textAlign = 'center'; // Center-align the text
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
    
        // Add the question and options to the wrapper
        wrapper.appendChild(createStyledLabel('How would you rate your level of attention during this study?'));
        wrapper.appendChild(createRadioButtons2('attentionLevel', ['Not very focused to be honest.', 'I was a bit distracted at times.', 'Mostly focused with a few slip-ups.', 'Fully focused and attentive.']));
    
    // Create the "Submit" button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '20px';
    submitButton.onclick = function() {
        let selectedAttentionLevel = document.querySelector('input[name="attentionLevel"]:checked')?.value;
        if (selectedAttentionLevel) {
            let attentionResponse = { attentionLevel: selectedAttentionLevel };
            participantChoices = participantChoices.map(choice => {
                if (typeof choice === 'object' && !Array.isArray(choice)) {
                    return { ...choice, ...attentionResponse }; // Merge the objects
                } else {
                    console.error('Choice is not an object:', choice);
                    return choice;
                }
            });
            wrapper.style.display = 'none';
            generateAndUploadCSV(participantChoices);
            instructions3(); // Call the next function in the flow
        } else {
            alert("Please select an option.");
        }
    };
    wrapper.appendChild(submitButton);
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




  //                                          AUXILIARY FUNCTIONS

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








//                                              GENERATE DATA

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
    const header = ["part","choice","trialNum", "vID",  "videoType", "reactionTime",
    "valenceForecast", "interestForecast","postInterest", "WatchAgain", 
     "valence", "targetEmo", "counterEmo", 
     "SID", ...genres, "uniqueKey", "startTime", "age", "racialIdentity", "genderIdentity", "fatherEducation", "motherEducation", "familyIncome", "yearInSchool", "relationship", "politics", "exercise", "diet", "sleep", "stress", 
     "B_Active","B_Sad", "B_Pleasant", "B_Disgusted", "B_Joyful", "B_Afraid", "B_Amused", "B_Excited", "B_Angry","B_Unpleasant", "B_Craving", "B_Inactive", "B_Enthusiastic","B_Calm",
     "P_Active","P_Sad", "P_Pleasant", "P_Disgusted", "P_Joyful", "P_Afraid", "P_Amused", "P_Excited", "P_Angry","P_Unpleasant", "P_Craving", "P_Inactive", "P_Enthusiastic","P_Calm",
     "SS_Gen1", "SM1", "SS_Av1", "SS_Ap1", "SM2", "SS_Gen2", "SS_Ap2", "SS_AvR", "SM3", "SS_Gen_3", "SS_Av2", "SM4", "SS_ApR", "SS_Gen4", "SM5", "SS_Ap3", "SS_Av3", 
     "Empathy_1_PD_R", "Empathy_2_FS", "Empathy_3_EC", "Empathy_4_PT_R", "Empathy_5_FS", "Empathy_6_EC_R", "Empathy_7_PT", "Empathy_8_FS_R", "Empathy_9_EC", "Empathy_10_FS", "Empathy_11_EC_R", 
     "NEO_1", "NEO_2_R", "NEO_3", "NEO_4_R", "NEO_5", "NEO_6_R", "NEO_7", "NEO_8_R", 
     "Spontaneuous_1_Acc", "Spontaneous_2_Reap", "Spontaneous_3_Sup", "Spontaneous_4_Dist", "Spontaneous_5_ES", "Spontaneous_6_Reap", "Spontaneous_7_Sup", "Spontaneous_8_Dist", "Spontaneous_9_Acc", "Spontaneous_10_SS_Gen", "Spontaneous_11_SS_Ap", "Spontaneous_12_SS_Av", "Spontaneous_13_SM",
     "bfi_1", "bfi_2", "bfi_3", "bfi_4", "bfi_5", "bfi_6", "bfi_7", "bfi_8", "bfi_9", "bfi_10", "bfi_11", "bfi_12", "bfi_13", "bfi_14", "bfi_15", "bfi_16", "bfi_17", "bfi_18", "bfi_19", "bfi_20", "bfi_21", "bfi_22", "bfi_23", "bfi_24", "bfi_25", "bfi_26", "bfi_27", "bfi_28", "bfi_29", "bfi_30", "bfi_31", "bfi_32", "bfi_33", "bfi_34", "bfi_35", "bfi_36", "bfi_37", "bfi_38", "bfi_39", "bfi_40", "bfi_41", "bfi_42", "bfi_43", "bfi_44", "bfi_45", "bfi_46", "bfi_47", "bfi_48", "bfi_49", "bfi_50", "bfi_51", "bfi_52", "bfi_53", "bfi_54", "bfi_55", "bfi_56", "bfi_57", "bfi_58", "bfi_59", "bfi_60",
     "BIS_1_R", "BAS_1_Drive", "BAS_2_Reward", "BAS_3_Fun", "BAS_4_Reward", "BIS_2", "BAS_5_Drive", "BAS_6_Fun", "BAS_7_Drive", "BIS_3", "BAS_8_Reward","BAS_15_Fun",  "BIS_4", "BAS_16_Reward", "BIS_5", "BAS_17_Fun",  "BAS_18_Drive", "BIS_6_R",  "BAS_19_Reward",  "BIS_7",
     "Attach_Anx_1_R", "Attach_Anx_2", "Attach_Anx_3", "Attach_Anx_4", "Attach_Anx_5_R", "Attach_Anx_6", "Attach_Av_1", "Attach_Av_2_R", "Attach_Av_3_R", "Attach_Av_4", "Attach_Av_5", "Attach_Av_6", 
     "BEQ_Intensity_1",  "BEQ_Intensity_2", "BEQ_Intensity_3", "BEQ_Intensity_4", "BEQ_Intensity_5",
     "Actual_enthusiastic", "Actual_down", "Actual_astonished", "Actual_disgusted", "Actual_dull", "Actual_joyful", "Actual_quiet",  "Actual_anxious", "Actual_relaxed", "Actual_craving", "Actual_excited", "Actual_surprised", "Actual_interested", "Actual_elated",  "Actual_gross", "Actual_sleepy", "Actual_still",  "Actual_amused", "Actual_lonely", "Actual_tempted",   "Actual_strong",  "Actual_passive",  "Actual_content",  "Actual_sluggish",  "Actual_inactive",  "Actual_funny", "Actual_sad",  "Actual_euphoric",  "Actual_afraid",  "Actual_happy",  "Actual_idle",  "Actual_calm",  "Actual_unhappy",  "Actual_aroused",  "Actual_angry",  "Actual_satisfied",  "Actual_rested",  "Actual_annoyed", "Actual_peaceful",  "Actual_serene", 
     "Ideal_enthusiastic", "Ideal_down", "Ideal_astonished", "Ideal_disgusted", "Ideal_dull", "Ideal_joyful", "Ideal_quiet",  "Ideal_anxious", "Ideal_relaxed", "Ideal_craving", "Ideal_excited", "Ideal_surprised", "Ideal_interested", "Ideal_elated",  "Ideal_gross", "Ideal_sleepy", "Ideal_still",  "Ideal_amused", "Ideal_lonely", "Ideal_tempted",   "Ideal_strong",  "Ideal_passive",  "Ideal_content",  "Ideal_sluggish",  "Ideal_inactive",  "Ideal_funny", "Ideal_sad",  "Ideal_euphoric",  "Ideal_afraid",  "Ideal_happy",  "Ideal_idle",  "Ideal_calm",  "Ideal_unhappy",  "Ideal_aroused",  "Ideal_angry",  "Ideal_satisfied",  "Ideal_rested",  "Ideal_annoyed", "Ideal_peaceful",  "Ideal_serene", 
     "ERQ1", "ERQ2", "ERQ3", "ERQ4", "ERQ5", "ERQ6", "ERQ7", "ERQ8", "ERQ9", "ERQ10", 
     "WhyWatch", "WhyAvoid", "WhyCounterHedonic",
     "Motivation_Emo", "Motivation_Normal", "Motivation_Events", "Motivation_Boredom",
     "finishTime", "windowSizeHeight","windowSizeWidth", "screenSizeHeight", "screenSizeWidth", "gazingPointX", "gazingPointY",
     "AC1", "AC2", "AC3", "attentionLevel",
     "participantSID2", "pName",
     "Ryff_1_SelfAcc", "Ryff_2_SelfAcc", "Ryff_3_PurLife", "Ryff_4_EnvMast_R", "Ryff_5_SelfAcc_R","Ryff_6_PosRelOther_R","Ryff_7_PurLife_R","Ryff_8_EnvMast","Ryff_9_EnvMast","Ryff_10_PurLife_R", "Ryff_11_PersGrowth","Ryff_12_PersGrowth","Ryff_13_PosRelOther","Ryff_14_PersGrowth_R","Ryff_15_Autonomy_R","Ryff_16_PosRelOther_R","Ryff_17_Autonomy","Ryff_18_Autonomy"
    ];

    console.log("Data passed to generateAndUploadCSV:", participantChoices);

     
    const csvRows = [header];

    for (const row of participantChoices) {
        const genreRatings = genres.map(genre => row[genre] || "");
      const rowData = [
        row.part, row.choice, row.trialNum, row.vID, row.videoType || "", row.reactionTime,
        row.valenceForecast || "", row.interestForecast || "", row.postInterest || "", row.watchAgain || "",
        row.valence || "", row.targetEmo || "", row.counterEmo || "",
        row.SID || "", ...genreRatings, row.uniqueKey || "", row.startTime || "",
        row.age || "", row.racialIdentity || "", row.genderIdentity || "", row.fatherEducation || "", row.motherEducation || "", row.familyIncome || "", row.yearInSchool || "", row.relationship || "", row.politics || "", row.exercise || "", row.diet || "", row.sleep || "", row.stress || "",
        row.B_Active || "", row.B_Sad || "", row.B_Pleasant || "", row.B_Disgusted || "", row.B_Joyful || "", row.B_Afraid || "", row.B_Amused || "", row.B_Excited || "", row.B_Angry || "", row.B_Unpleasant || "", row.B_Craving || "", row.B_Inactive || "", row.B_Enthusiastic || "", row.B_Calm || "",
        row.P_Active || "", row.P_Sad || "", row.P_Pleasant || "", row.P_Disgusted || "", row.P_Joyful || "", row.P_Afraid || "", row.P_Amused || "", row.P_Excited || "", row.P_Angry || "", row.P_Unpleasant || "", row.P_Craving || "", row.P_Inactive || "", row.P_Enthusiastic || "", row.P_Calm || "",
        row.SS_Gen1 || "", row.SM1 || "", row.SS_Av1 || "", row.SS_Ap1 || "", row.SM2 || "", row.SS_Gen2 || "", row.SS_Ap2 || "", row.SS_AvR || "", row.SM3 || "", row.SS_Gen_3 || "", row.SS_Av2 || "",  row.SM4 || "", row.SS_ApR || "", row.SS_Gen4 || "", row.SM5 || "", row.SS_Ap3 || "", row.SS_Av3 || "",
        row.Empathy_1_PD_R || "", row.Empathy_2_FS || "", row.Empathy_3_EC || "", row.Empathy_4_PT_R || "", row.Empathy_5_FS || "", row.Empathy_6_EC_R || "", row.Empathy_7_PT || "", row.Empathy_8_FS_R || "", row.Empathy_9_EC || "", row.Empathy_10_FS || "", row.Empathy_11_EC_R || "", 
        row.NEO_1 || "", row.NEO_2_R || "", row.NEO_3 || "", row.NEO_4_R || "", row.NEO_5 || "", row.NEO_6_R || "", row.NEO_7 || "", row.NEO_8_R || "", 
        row.Spontaneuous_1_Acc || "", row.Spontaneous_2_Reap || "", row.Spontaneous_3_Sup || "", row.Spontaneous_4_Dist || "", row.Spontaneous_5_ES || "", row.Spontaneous_6_Reap || "", row.Spontaneous_7_Sup || "", row.Spontaneous_8_Dist || "", row.Spontaneous_9_Acc || "", row.Spontaneous_10_SS_Gen || "", row.Spontaneous_11_SS_Ap || "", row.Spontaneous_12_SS_Av || "", row.Spontaneous_13_SM,
        row.bfi_1 || "", row.bfi_2 || "", row.bfi_3 || "", row.bfi_4 || "", row.bfi_5 || "", row.bfi_6 || "", row.bfi_7 || "", row.bfi_8 || "", row.bfi_9 || "", row.bfi_10 || "", row.bfi_11 || "", row.bfi_12 || "", row.bfi_13 || "", row.bfi_14 || "", row.bfi_15 || "", row.bfi_16 || "", row.bfi_17 || "", row.bfi_18 || "", row.bfi_19 || "", row.bfi_20 || "", row.bfi_21 || "", row.bfi_22 || "", row.bfi_23 || "", row.bfi_24 || "", row.bfi_25 || "", row.bfi_26 || "", row.bfi_27 || "", row.bfi_28 || "", row.bfi_29 || "", row.bfi_30 || "", row.bfi_31 || "", row.bfi_32 || "", row.bfi_33 || "", row.bfi_34 || "", row.bfi_35 || "", row.bfi_36 || "", row.bfi_37 || "", row.bfi_38 || "", row.bfi_39 || "", row.bfi_40 || "", row.bfi_41 || "", row.bfi_42 || "", row.bfi_43 || "", row.bfi_44 || "", row.bfi_45 || "", row.bfi_46 || "", row.bfi_47 || "", row.bfi_48 || "", row.bfi_49 || "", row.bfi_50 || "", row.bfi_51 || "", row.bfi_52 || "", row.bfi_53 || "", row.bfi_54 || "", row.bfi_55 || "", row.bfi_56 || "", row.bfi_57 || "", row.bfi_58 || "", row.bfi_59 || "", row.bfi_60 || "",
        row.BIS_1_R || "", row.BAS_1_Drive || "", row.BAS_2_Reward || "", row.BAS_3_Fun || "", row.BAS_4_Reward || "", row.BIS_2 || "", row.BAS_5_Drive || "", row.BAS_6_Fun || "", row.BAS_7_Drive || "", row.BIS_3 || "", row.BAS_8_Reward || "", row.BAS_15_Fun || "", row.BIS_4 || "", row.BAS_16_Reward || "", row.BIS_5 || "", row.BAS_17_Fun || "", row.BAS_18_Drive || "", row.BIS_6_R || "", row.BAS_19_Reward || "", row.BIS_7 || "", 
        row.Attach_Anx_1_R || "", row.Attach_Anx_2 || "", row.Attach_Anx_3 || "", row.Attach_Anx_4 || "", row.Attach_Anx_5_R || "", row.Attach_Anx_6 || "", row.Attach_Av_1 || "", row.Attach_Av_2_R || "", row.Attach_Av_3_R || "", row.Attach_Av_4 || "", row.Attach_Av_5 || "", row.Attach_Av_6,
        row.BEQ_Intensity_1 || "", row.BEQ_Intensity_2 || "", row.BEQ_Intensity_3 || "", row.BEQ_Intensity_4 || "", row.BEQ_Intensity_5,
        row.Actual_enthusiastic || "", row.Actual_down || "", row.Actual_astonished || "", row.Actual_disgusted || "", row.Actual_dull || "", row.Actual_joyful || "", row.Actual_quiet || "", row.Actual_anxious || "", row.Actual_relaxed || "", row.Actual_craving || "", row.Actual_excited || "", row.Actual_surprised || "", row.Actual_interested || "", row.Actual_elated || "", row.Actual_gross || "", row.Actual_sleepy || "", row.Actual_still || "", row.Actual_amused || "", row.Actual_lonely || "", row.Actual_tempted || "", row.Actual_strong || "", row.Actual_passive || "", row.Actual_content || "", row.Actual_sluggish || "", row.Actual_inactive || "", row.Actual_funny || "", row.Actual_sad || "", row.Actual_euphoric || "", row.Actual_afraid || "", row.Actual_happy || "", row.Actual_idle || "", row.Actual_calm || "", row.Actual_unhappy || "", row.Actual_aroused || "", row.Actual_angry || "", row.Actual_satisfied || "", row.Actual_rested || "", row.Actual_annoyed || "", row.Actual_peaceful || "", row.Actual_serene || "", 
        row.Ideal_enthusiastic || "", row.Ideal_down || "", row.Ideal_astonished || "", row.Ideal_disgusted || "", row.Ideal_dull || "", row.Ideal_joyful || "", row.Ideal_quiet || "", row.Ideal_anxious || "", row.Ideal_relaxed || "", row.Ideal_craving || "", row.Ideal_excited || "", row.Ideal_surprised || "", row.Ideal_interested || "", row.Ideal_elated || "", row.Ideal_gross || "", row.Ideal_sleepy || "", row.Ideal_still || "", row.Ideal_amused || "", row.Ideal_lonely || "", row.Ideal_tempted || "", row.Ideal_strong || "", row.Ideal_passive || "", row.Ideal_content || "", row.Ideal_sluggish || "", row.Ideal_inactive || "", row.Ideal_funny || "", row.Ideal_sad || "", row.Ideal_euphoric || "", row.Ideal_afraid || "", row.Ideal_happy || "", row.Ideal_idle || "", row.Ideal_calm || "", row.Ideal_unhappy || "", row.Ideal_aroused || "", row.Ideal_angry || "", row.Ideal_satisfied || "", row.Ideal_rested || "", row.Ideal_annoyed || "", row.Ideal_peaceful || "", row.Ideal_serene || "",  
        row.ERQ1 || "", row.ERQ2 || "", row.ERQ3 || "", row.ERQ4 || "", row.ERQ5 || "", row.ERQ6 || "", row.ERQ7 || "", row.ERQ8 || "", row.ERQ9 || "", row.ERQ10 || "",
        row.WhyWatch || "", row.WhyAvoid || "",  row.WhyCounterHedonic || "", 
        row.Motivation_Emo || "", row.Motivation_Normal || "", row.Motivation_Events || "", row.Motivation_Boredom || "",
        row.finishTime || "", row.windowSizeHeight, row.windowSizeWidth, row.screenSizeHeight, row.screenSizeWidth, row.gazingPointX, row.gazingPointY,
        row.AC1 || "", row.AC2 || "",row.AC3 || "", row.attentionLevel || "",
        row.participantSID2 || "", row.pName || "",
        row.Ryff_1_SelfAcc || "", row.Ryff_2_SelfAcc || "", row.Ryff_3_PurLife || "", row.Ryff_4_EnvMast_R || "", row.Ryff_5_SelfAcc_R || "", row.Ryff_6_PosRelOther_R || "", row.Ryff_7_PurLife_R || "", row.Ryff_8_EnvMast || "", row.Ryff_9_EnvMast || "", row.Ryff_10_PurLife_R || "", row.Ryff_11_PersGrowth || "", row.Ryff_12_PersGrowth || "", row.Ryff_13_PosRelOther || "", row.Ryff_14_PersGrowth_R || "", row.Ryff_15_Autonomy_R || "", row.Ryff_16_PosRelOther_R || "", row.Ryff_17_Autonomy || "", row.Ryff_18_Autonomy || ""
    ];

   
      csvRows.push(rowData);
    }
  
    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    
    // Use the SID as the filename or a default name if SID is not available
    //  const filename = participantChoices[0].SID ? `${participantChoices[0].SID}.csv` : 'participant_choices.csv';

    // Trigger the download of the CSV file
    // downloadCSV(csvContent, filename);

    //console.log(csvContent); 
    
    // Upload to serverless function
    const uploadUrl = '/.netlify/functions/upload-csv'; 
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadUrl, true);
    //xhr.setRequestHeader('Content-Type', 'text/csv;charset=utf-8');

      // Function to check if the SID is valid (not empty and possibly other criteria)
function isValidSID2(sid) {
    return sid && sid.trim().length > 0;  // Example check for non-empty SID
}

// Find the first valid entry with an SID
const validEntry = participantChoices.find(choice => isValidSID2(choice.SID));

// Use the found SID or a default value if no valid entry exists
const filename = (validEntry ? validEntry.SID : "default") + '.csv';
xhr.setRequestHeader('X-Filename', filename);  
   // Retrieve SID value for filename
   // const filename = participantChoices[0].SID + '.csv';
    //xhr.setRequestHeader('X-Filename', filename);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('File uploaded successfully:');
        } else {
          console.error('Error uploading file:');
        }
      }
    };
  
    xhr.send(csvContent);
  }

  




// START  
intro();                                             

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
