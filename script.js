// Double Task; comment things out to choose one or the other 

//Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");



 //                                             PREP 

// Videos (first is old, pilot 1)
// const allVideos = [
//     {id: 1, src: "0074.mp4", type: "Amusement" },
//     {id: 2, src: "0574.mp4", type: "Amusement" },
//     {id: 3, src: "0656.mp4", type: "Amusement" },
//     {id: 4, src: "1043.mp4", type: "Amusement" },
//     {id: 44, src: "1145.mp4", type: "Amusement" }, //this should've started on 45?
//     {id: 45, src: "1411.mp4", type: "Amusement" },
//     {id: 67, src: "1564.mp4", type: "Amusement" },
//     {id: 68, src: "1606.mp4", type: "Amusement" },
//     {id: 69, src: "2072.mp4", type: "Amusement" },
//     {id: 70, src: "2083.mp4", type: "Amusement" },
//     {id: 5, src: "0124.mp4", type: "Anger" },
//     {id: 6, src: "0252.mp4", type: "Anger" },
//     {id: 7, src: "0414.mp4", type: "Anger" },
//     {id: 8, src: "0595.mp4", type: "Anger" },
//     {id: 46, src: "0681.mp4", type: "Anger" },
//     {id: 47, src: "0948.mp4", type: "Anger" },
//     {id: 71, src: "1229.mp4", type: "Anger" },
//     {id: 72, src: "1844.mp4", type: "Anger" },
//     {id: 73, src: "2049.mp4", type: "Anger" },
//     {id: 74, src: "2066.mp4", type: "Anger" },
//     {id: 9, src: "0090.mp4", type: "Calmness" },
//     {id: 10, src: "0339.mp4", type: "Calmness" },
//     {id: 11, src: "0493.mp4", type: "Calmness" },
//     {id: 12, src: "0553.mp4", type: "Calmness" },
//     {id: 48, src: "0580.mp4", type: "Calmness" },
//     {id: 49, src: "0645.mp4", type: "Calmness" },
//     {id: 75, src: "0671.mp4", type: "Calmness" },
//     {id: 76, src: "1216.mp4", type: "Calmness" },
//     {id: 77, src: "1760.mp4", type: "Calmness" },
//     {id: 78, src: "1835.mp4", type: "Calmness" },
//     {id: 13, src: "0110.mp4", type: "Craving" },
//     {id: 14, src: "0458.mp4", type: "Craving" },
//     {id: 15, src: "0780.mp4", type: "Craving" },
//     {id: 16, src: "0883.mp4", type: "Craving" },
//     {id: 50, src: "0898.mp4", type: "Craving" },
//     {id: 51, src: "0919.mp4", type: "Craving" },
//     {id: 79, src: "1449.mp4", type: "Craving" },
//     {id: 80, src: "1498.mp4", type: "Craving" },
//     {id: 81,  src: "1740.mp4", type: "Craving" },
//     {id: 82, src: "1826.mp4", type: "Craving" },
//     {id: 17, src: "0187.mp4", type: "Disgust" },
//     {id: 18,  src: "0235.mp4", type: "Disgust" },
//     {id: 19, src: "0355.mp4", type: "Disgust" },
//     {id: 20, src: "0713.mp4", type: "Disgust" },
//     {id: 52, src: "0876.mp4", type: "Disgust" },
//     {id: 53, src: "0929.mp4", type: "Disgust" },
//     {id: 83, src: "1194.mp4", type: "Disgust" },
//     {id: 84, src: "1423.mp4", type: "Disgust" },
//     {id: 85, src: "1907.mp4", type: "Disgust" },
//     {id: 86, src: "2018.mp4", type: "Disgust" },
//     {id: 21, src: "0202.mp4", type: "Excitement" },
//     {id: 22, src: "0402.mp4", type: "Excitement" },
//     {id: 23, src: "0546.mp4", type: "Excitement" },
//     {id: 24, src: "0550.mp4", type: "Excitement" },
//     {id: 54, src: "0701.mp4", type: "Excitement" },
//     {id: 55, src: "0970.mp4", type: "Excitement" },
//     {id: 87, src: "1297.mp4", type: "Excitement" },
//     {id: 88, src: "1537.mp4", type: "Excitement" },
//     {id: 89,  src: "1717.mp4", type: "Excitement" },
//     {id: 90, src: "2021.mp4", type: "Excitement" },
//     {id: 25, src: "0379.mp4", type: "Fear" },
//     {id: 26,  src: "0489.mp4", type: "Fear" },
//     {id: 27, src: "0706.mp4", type: "Fear" },
//     {id: 28, src: "1202.mp4", type: "Fear" },
//     {id: 56, src: "1375.mp4", type: "Fear" },
//     {id: 57, src: "1726.mp4", type: "Fear" },
//     {id: 91, src: "1780.mp4", type: "Fear" },
//     {id: 92, src: "1832.mp4", type: "Fear" },
//     {id: 93, src: "1964.mp4", type: "Fear" },
//     {id: 94, src: "2091.mp4", type: "Fear" },
//     {id: 29, src: "0723.mp4", type: "Interest" },
//     {id: 30, src: "0735.mp4", type: "Interest" },
//     {id: 31, src: "1066.mp4", type: "Interest" },
//     {id: 32, src: "1068.mp4", type: "Interest" },
//     {id: 58, src: "1301.mp4", type: "Interest" },
//     {id: 59, src: "1619.mp4", type: "Interest" },
//     {id: 95, src: "1624.mp4", type: "Interest" },
//     {id: 96, src: "1641.mp4", type: "Interest" },
//     {id: 97, src: "1664.mp4", type: "Interest" },
//     {id: 98, src: "1945.mp4", type: "Interest" },
//     {id: 33, src: "0035.mp4", type: "Joy" },
//     {id: 34,src: "0087.mp4", type: "Joy" },
//     {id: 35, src: "0126.mp4", type: "Joy" },
//     {id: 36, src: "0597.mp4", type: "Joy" },
//     {id: 60, src: "0605.mp4", type: "Joy" },
//     {id: 61, src: "0666.mp4", type: "Joy" },
//     {id: 99, src: "1032.mp4", type: "Joy" },
//     {id: 100, src: "1034.mp4", type: "Joy" },
//     {id: 101, src: "1093.mp4", type: "Joy" },
//     {id: 102, src: "2013.mp4", type: "Joy" },
//     {id: 37, src: "0204.mp4", type: "Romance" },
//     {id: 38, src: "0369.mp4", type: "Romance" },
//     {id: 39, src: "0773.mp4", type: "Romance" },
//     {id: 40, src: "1074.mp4", type: "Romance" },
//     {id: 62, src: "1295.mp4", type: "Romance" },
//     {id: 63, src: "1407.mp4", type: "Romance" },
//     {id: 103, src: "1424.mp4", type: "Romance" },
//     {id: 104, src: "1551.mp4", type: "Romance" },
//     {id: 105, src: "1911.mp4", type: "Romance" },
//     {id: 106, src: "1978.mp4", type: "Romance" },
//     {id: 41, src: "0226.mp4", type: "Sadness" },
//     {id: 42, src: "0299.mp4", type: "Sadness" },
//     {id: 43, src: "0611.mp4", type: "Sadness" },
//     {id: 44, src: "0756.mp4", type: "Sadness" }, //fucked
//     {id: 64, src: "0803.mp4", type: "Sadness" },
//     {id: 65, src: "0860.mp4", type: "Sadness" },
//     {id: 107, src: "0975.mp4", type: "Sadness" },
//     {id: 108, src: "1164.mp4", type: "Sadness" },
//     {id: 109, src: "1485.mp4", type: "Sadness" },
//     {id: 110, src: "1959.mp4", type: "Sadness" }
// ];
  
const allVideos = [
    {id: 1, src: "0074.mp4", type: "Amusement" },
   // {id: 2, src: "0574.mp4", type: "Amusement" },
    // {id: 3, src: "0656.mp4", type: "Amusement" },
    // {id: 4, src: "1043.mp4", type: "Amusement" },
    // {id: 45, src: "1145.mp4", type: "Amusement" }, //this should've started on 45? now does
    // {id: 46, src: "1411.mp4", type: "Amusement" },
    // {id: 67, src: "1564.mp4", type: "Amusement" },
    // {id: 68, src: "1606.mp4", type: "Amusement" },
    // {id: 69, src: "2072.mp4", type: "Amusement" },
    // {id: 70, src: "2083.mp4", type: "Amusement" },
    // {id: 5, src: "0124.mp4", type: "Anger" },
    // {id: 6, src: "0252.mp4", type: "Anger" },
    // {id: 7, src: "0414.mp4", type: "Anger" },
    // {id: 8, src: "0595.mp4", type: "Anger" },
    // {id: 47, src: "0681.mp4", type: "Anger" },
    // {id: 48, src: "0948.mp4", type: "Anger" },
    // {id: 71, src: "1229.mp4", type: "Anger" },
    // {id: 72, src: "1844.mp4", type: "Anger" },
    // {id: 73, src: "2049.mp4", type: "Anger" },
    // {id: 74, src: "2066.mp4", type: "Anger" },
    // {id: 9, src: "0090.mp4", type: "Calmness" },
    // {id: 10, src: "0339.mp4", type: "Calmness" },
    // {id: 11, src: "0493.mp4", type: "Calmness" },
    // {id: 12, src: "0553.mp4", type: "Calmness" },
    // {id: 49, src: "0580.mp4", type: "Calmness" },
    // {id: 50, src: "0645.mp4", type: "Calmness" },
    // {id: 75, src: "0671.mp4", type: "Calmness" },
    // {id: 76, src: "1216.mp4", type: "Calmness" },
    // {id: 77, src: "1760.mp4", type: "Calmness" },
    // {id: 78, src: "1835.mp4", type: "Calmness" },
    // {id: 13, src: "0110.mp4", type: "Craving" },
    // {id: 14, src: "0458.mp4", type: "Craving" },
    // {id: 15, src: "0780.mp4", type: "Craving" },
    // {id: 16, src: "0883.mp4", type: "Craving" },
    // {id: 51, src: "0898.mp4", type: "Craving" },
    // {id: 52, src: "0919.mp4", type: "Craving" },
    // {id: 79, src: "1449.mp4", type: "Craving" },
    // {id: 80, src: "1498.mp4", type: "Craving" },
    // {id: 81,  src: "1740.mp4", type: "Craving" },
    // {id: 82, src: "1826.mp4", type: "Craving" },
    // {id: 17, src: "0187.mp4", type: "Disgust" },
    // {id: 18,  src: "0235.mp4", type: "Disgust" },
    // {id: 19, src: "0355.mp4", type: "Disgust" },
    // {id: 20, src: "0713.mp4", type: "Disgust" },
    // {id: 53, src: "0876.mp4", type: "Disgust" },
    // {id: 54, src: "0929.mp4", type: "Disgust" },
    // {id: 83, src: "1194.mp4", type: "Disgust" },
    // {id: 84, src: "1423.mp4", type: "Disgust" },
    // {id: 85, src: "1907.mp4", type: "Disgust" },
    // {id: 86, src: "2018.mp4", type: "Disgust" },
    // {id: 21, src: "0202.mp4", type: "Excitement" },
    // {id: 22, src: "0402.mp4", type: "Excitement" },
    // {id: 23, src: "0546.mp4", type: "Excitement" },
    // {id: 24, src: "0550.mp4", type: "Excitement" },
    // {id: 55, src: "0701.mp4", type: "Excitement" },
    // {id: 56, src: "0970.mp4", type: "Excitement" },
    // {id: 87, src: "1297.mp4", type: "Excitement" },
    // {id: 88, src: "1537.mp4", type: "Excitement" },
    // {id: 89,  src: "1717.mp4", type: "Excitement" },
    // {id: 90, src: "2021.mp4", type: "Excitement" },
    // {id: 25, src: "0379.mp4", type: "Fear" },
    // {id: 26,  src: "0489.mp4", type: "Fear" },
    // {id: 27, src: "0706.mp4", type: "Fear" },
    // {id: 28, src: "1202.mp4", type: "Fear" },
    // {id: 57, src: "1375.mp4", type: "Fear" },
    // {id: 58, src: "1726.mp4", type: "Fear" },
    // {id: 91, src: "1780.mp4", type: "Fear" },
    // {id: 92, src: "1832.mp4", type: "Fear" },
    // {id: 93, src: "1964.mp4", type: "Fear" },
    // {id: 94, src: "2091.mp4", type: "Fear" },
    // {id: 29, src: "0723.mp4", type: "Interest" },
    // {id: 30, src: "0735.mp4", type: "Interest" },
    // {id: 31, src: "1066.mp4", type: "Interest" },
    // {id: 32, src: "1068.mp4", type: "Interest" },
    // {id: 59, src: "1301.mp4", type: "Interest" },
    // {id: 60, src: "1619.mp4", type: "Interest" },
    // {id: 95, src: "1624.mp4", type: "Interest" },
    // {id: 96, src: "1641.mp4", type: "Interest" },
    // {id: 97, src: "1664.mp4", type: "Interest" },
    // {id: 98, src: "1945.mp4", type: "Interest" },
    // {id: 33, src: "0035.mp4", type: "Joy" },
    // {id: 34,src: "0087.mp4", type: "Joy" },
    // {id: 35, src: "0126.mp4", type: "Joy" },
    // {id: 36, src: "0597.mp4", type: "Joy" },
    // {id: 61, src: "0605.mp4", type: "Joy" },
    // {id: 62, src: "0666.mp4", type: "Joy" },
    // {id: 99, src: "1032.mp4", type: "Joy" },
    // {id: 100, src: "1034.mp4", type: "Joy" },
    // {id: 101, src: "1093.mp4", type: "Joy" },
    // {id: 102, src: "2013.mp4", type: "Joy" },
    // {id: 37, src: "0204.mp4", type: "Romance" },
    // {id: 38, src: "0369.mp4", type: "Romance" },
    // {id: 39, src: "0773.mp4", type: "Romance" },
    // {id: 40, src: "1074.mp4", type: "Romance" },
    // {id: 63, src: "1295.mp4", type: "Romance" },
    // {id: 64, src: "1407.mp4", type: "Romance" },
    // {id: 103, src: "1424.mp4", type: "Romance" },
    // {id: 104, src: "1551.mp4", type: "Romance" },
    // {id: 105, src: "1911.mp4", type: "Romance" },
    // {id: 106, src: "1978.mp4", type: "Romance" },
    // {id: 41, src: "0226.mp4", type: "Sadness" },
    // {id: 42, src: "0299.mp4", type: "Sadness" },
    // {id: 43, src: "0611.mp4", type: "Sadness" },
    // {id: 44, src: "0756.mp4", type: "Sadness" }, //previously fucked -- not any more
    // {id: 65, src: "0803.mp4", type: "Sadness" },
    // {id: 66, src: "0860.mp4", type: "Sadness" }, // now this could've been fucked but it's not! Line 133 (starts with 67)
    // {id: 107, src: "0975.mp4", type: "Sadness" },
    // {id: 108, src: "1164.mp4", type: "Sadness" },
    // {id: 109, src: "1485.mp4", type: "Sadness" },
    // {id: 110, src: "1959.mp4", type: "Sadness" }
];

// Randomize into group A or B (for videos)
let userGroup;
if (localStorage.getItem('userGroup')) {
    // If user group already exists in local storage, retrieve it
    userGroup = localStorage.getItem('userGroup');
} else {
    // If not, randomly assign user to groupA or groupB
    userGroup = Math.random() < 0.5 ? 'groupA' : 'groupB';
    // Then store it in local storage for future visits
    localStorage.setItem('userGroup', userGroup);
}

let videos;
if(userGroup === 'groupA') {
    // Filter the videos to show only those with IDs between 1 and 66
    videos = allVideos.filter(video => video.id >= 1 && video.id <= 66); // before I had 55 (wrong)
} else {
    // Filter the videos to show only those with IDs between 45 and 110
    videos = allVideos.filter(video => video.id >= 45 && video.id <= 110); //before I had 55 (wrong). Now 45-66. 11 emotions, 12 numbers, 2 per emo, checks out. 
}


// Now script as normal
for(let i = 0; i < videos.length; i++) {
    videos[i].id = i.toString();
}

let participantChoices = [];
let startTime; 

function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}




//                                                  RATINGS


// Valence and arousal
function createFeedbackForm(videoId, onSubmit) {
    feedbackContainer.innerHTML = '';

    const questions = [
        { text: "How do you feel right now?", scale: ["Very unpleasant, negative", "Neutral", "Very pleasant, positive"] },
        { text: " ", scale: ["Not activated / aroused at all", "Somewhat", "Very activated / aroused"] }
    ];

    const responses = {};

    questions.forEach((questionObj, index) => {
        const question = document.createElement("p");
        question.style.fontWeight = 'bold'; // Add bold font-weight
        question.style.textAlign = 'center';
        question.textContent = questionObj.text;

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");

        for(let i = 0; i <= 6; i++){ // Update from 1-7 to 0-6
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");

            const number = document.createElement("div");
            number.textContent = i;
            number.classList.add("likert-number");
            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");
            likertBox.appendChild(label);

            // Add labels on the edges and in the middle
            if (i === 0) label.textContent += questionObj.scale[0]; // Update from 1 to 0
            else if (i === 3) label.textContent += questionObj.scale[1];
            else if (i === 6) label.textContent += questionObj.scale[2]; // Update from 7 to 6

            likertBox.onclick = function() {
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");

                // Depending on the index, save to valence or arousal
                if(index === 0) {
                    responses['valence'] = i.toString(); // Convert to string
                } else if(index === 1) {
                    responses['arousal'] = i.toString(); // Convert to string
                }
                
                likertBox.style.backgroundColor = "#d8d8d8";  // Change color to indicate selection
            };

            likertContainer.appendChild(likertBox);
        }

        feedbackContainer.appendChild(question);
        feedbackContainer.appendChild(likertContainer);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        if (Object.keys(responses).length === questions.length) {
            onSubmit(responses);
        } else {
            alert("Please answer all questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}

// Relevant emotions 
function createLikertContainer(min, max, minLabel, maxLabel, midLabel, emotion) {
    let mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';

    let emotionLabel = document.createElement('div');
    emotionLabel.textContent = emotion;
    emotionLabel.style.fontWeight = 'bold';
    emotionLabel.className = 'emotion-label';
    mainContainer.appendChild(emotionLabel);

    let container = document.createElement('div');
    container.className = 'likert-container';

    for (let i = min; i <= max; i++) {
        let box = document.createElement('div');
        box.className = 'likert-box';
        box.addEventListener('click', function () {
            // If this box was already selected, deselect it
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                this.style.backgroundColor = ""; // Remove background color
                return;
            }
            
            // Remove 'selected' class from all boxes in the container
            let boxes = container.getElementsByClassName('likert-box');
            for (let j = 0; j < boxes.length; j++) {
                boxes[j].classList.remove('selected');
                boxes[j].style.backgroundColor = ""; // Remove previous background color
            }
            
            // Add 'selected' class to the clicked box
            this.classList.add('selected');
            this.style.backgroundColor = "#ccc"; // Set background color to darker shade
        });
        
        let number = document.createElement('div');
        number.className = 'likert-number';
        number.textContent = i;
        box.appendChild(number);

        let label = document.createElement('div');
        label.className = 'likert-label';
        if (i === min) {
            label.textContent = minLabel;
        } else if (i === max) {
            label.textContent = maxLabel;
        } else if (i === 3) {
            label.textContent = midLabel;
        }
        box.appendChild(label);
        
        container.appendChild(box);
    }
   
    mainContainer.appendChild(container);
    return mainContainer;
}

// function createRatingForm(videoId, onSubmit) {
//     // An object to store the rating types for each video type
//     document.body.classList.add('instructions-body-align');
//     const videoTypeRatings = {
//         "Excitement": ["excited", "interested", "amused", "happy"],
//         "Amusement": ["happy", "amused", "excited", "interested"],
//         "Joy": ["amused", "loving", "happy", "peaceful"],
//         "Romance": ["excited", "peaceful", "happy", "loving"],
//         "Craving": ["hungry", "interested", "happy", "excited"],
//         "Calmness": ["interested", "calm", "happy", "peaceful"],
//         "Interest": ["peaceful", "excited", "interested", "happy"],
//         "Disgust": ["disgusted", "afraid", "angry", "sad"],
//         "Anger": ["sad", "angry", "afraid", "disgusted"],
//         "Sadness": ["afraid", "disgusted", "sad", "angry"],
//         "Fear": ["angry", "sad", "disgusted", "afraid"]
//     };

//     const video = videos.find(v => v.id === videoId);

//     if (!video) {
//         console.error(`Video with id ${videoId} not found.`);
//         return;
//     }

//     // Get the appropriate ratings for this video type
//     const ratings = videoTypeRatings[video.type];

//     if (!ratings) {
//         console.error(`No ratings found for video type ${video.type}`);
//         return;
//     }

//     feedbackContainer.innerHTML = '';

//     // Add the header "How do you feel?"
//     let header = document.createElement('h3');
//     header.style.fontWeight = 'bold';
//     header.style.textAlign = 'center';
//     header.innerText = 'How do you feel right now?';
//     feedbackContainer.appendChild(header);

//     ratings.forEach((rating, index) => {
//         let likertContainer = createLikertContainer(0, 6, `not ${rating} at all`, `very ${rating}`, `somewhat ${rating}`, rating);
//         likertContainer.id = `likert-${index + 1}`;
//         likertContainer.style.marginBottom = '20px'; // Add spacing between the ratings
//         feedbackContainer.appendChild(likertContainer);
//     });

//     let submitButton = createButton("Submit", () => {
//         let userRatings = [];

//         for (let i = 1; i <= 4; i++) {
//             let likertContainer = document.getElementById(`likert-${i}`);
//             let selectedBox = likertContainer.querySelector('.likert-box.selected');

//             if (!selectedBox) {
//                 alert('Please answer all the questions before submitting.');
//                 return;
//             }

//             userRatings.push({
//                 videoType: video.type,
//                 EmoRated: ratings[i - 1], // get the rating type from the ratings array
//                 EmoScore: parseInt(selectedBox.textContent),
//                 vID: video.src
//             });
//         }

//         feedbackContainer.innerHTML = ''; // Clear the feedback container after successful submission
//         onSubmit(userRatings);
//     });

//     feedbackContainer.appendChild(submitButton); // Append the button directly to the feedbackContainer
//     feedbackContainer.style.display = 'block';
//     submitButton.addEventListener('click', () => {
//         document.body.classList.remove('instructions-body-align'); // Remove the class when the submit button is clicked
//     });
// }

function createRatingForm(videoId, onSubmit) {
    
    document.body.classList.add('instructions-body-align');
    // An object to store the rating types for each video type
    const videoTypeRatings = {
        "Excitement": ["excited", "interested", "amused", "happy"],
        "Amusement": ["happy", "amused", "excited", "interested"],
        "Joy": ["amused", "loving", "happy", "peaceful"],
        "Romance": ["excited", "peaceful", "happy", "loving"],
        "Craving": ["hungry", "interested", "happy", "excited"],
        "Calmness": ["interested", "calm", "happy", "peaceful"],
        "Interest": ["peaceful", "excited", "interested", "happy"],
        "Disgust": ["disgusted", "afraid", "angry", "sad"],
        "Anger": ["sad", "angry", "afraid", "disgusted"],
        "Sadness": ["afraid", "disgusted", "sad", "angry"],
        "Fear": ["angry", "sad", "disgusted", "afraid"]
    };

    const video = videos.find(v => v.id === videoId);

    if (!video) {
        console.error(`Video with id ${videoId} not found.`);
        return;
    }

    // Get the appropriate ratings for this video type
    const ratings = videoTypeRatings[video.type];

    if (!ratings) {
        console.error(`No ratings found for video type ${video.type}`);
        return;
    }

    feedbackContainer.innerHTML = '';

    // Add the header "How do you feel?"
    let header = document.createElement('h3');
    header.style.fontWeight = 'bold';
    header.style.textAlign = 'center';
    header.innerText = 'How do you feel right now?';
    feedbackContainer.appendChild(header);

    ratings.forEach((rating, index) => {
        let likertContainer = createLikertContainer(0, 6, `not ${rating} at all`, `very ${rating}`, `somewhat ${rating}`, rating);
        likertContainer.id = `likert-${index + 1}`;
        likertContainer.style.marginBottom = '20px'; // Add spacing between the ratings
        feedbackContainer.appendChild(likertContainer);
    });

    let submitButton = createButton("Submit", () => {
        let userRatings = [];
    
        for (let i = 1; i <= 4; i++) {
            let likertContainer = document.getElementById(`likert-${i}`);
            let selectedBox = likertContainer.querySelector('.likert-box.selected');
    
            if (!selectedBox) {
                alert('Please answer all the questions before submitting.');
                return;
            }
    
            let emoScore = selectedBox.textContent.trim();
            const regex = /^(\d+)/;
            const match = emoScore.match(regex);
            if (match) {
                emoScore = match[1];
            }
    
            userRatings.push({
                videoType: video.type,
                EmoRated: ratings[i - 1], // get the rating type from the ratings array
                EmoScore: emoScore,
                vID: video.src
            });
        }
    
        feedbackContainer.innerHTML = ''; // Clear the feedback container after successful submission
        onSubmit(userRatings);
    });
    

    feedbackContainer.appendChild(submitButton); // Append the button directly to the feedbackContainer
    feedbackContainer.style.display = 'block';

    submitButton.addEventListener('click', () => {
        document.body.classList.remove('instructions-body-align'); // Remove the class when the submit button is clicked
    });
}

// Watch Again
function createWatchAgainForm(onSubmit) {
    feedbackContainer.innerHTML = '';

    const questionObj = {
        text: "Would you watch this video again?",
        scale: ["No, never!", "Maybe", "Yes, anytime!"]
    };

    const WatchAgainResponse = {};

    const question = document.createElement("p");
    question.style.fontWeight = 'bold'; 
    question.style.textAlign = 'center';
    question.textContent = questionObj.text;

    const likertContainer = document.createElement("div");
    likertContainer.classList.add("likert-container");

    for (let i = 0; i <= 6; i++) {
        const likertBox = document.createElement("div");
        likertBox.classList.add("likert-box");

        const number = document.createElement("div");
        number.textContent = i === 0 ? "0" : i.toString(); 
        number.classList.add("likert-number");
        likertBox.appendChild(number);

        const label = document.createElement("div");
        label.classList.add("likert-label");
        likertBox.appendChild(label);

        if (i === 0) label.textContent += questionObj.scale[0];
        else if (i === 3) label.textContent += questionObj.scale[1];
        else if (i === 6) label.textContent += questionObj.scale[2];

        // IIFE to correctly capture the value of i
        (function(currentIndex) {
            likertBox.onclick = function () {
                console.log("Clicked value:", currentIndex); // Check the value when clicked
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                WatchAgainResponse[questionObj.text] = currentIndex;
                likertBox.style.backgroundColor = "#d8d8d8";
                console.log("Updated WatchAgain:", WatchAgainResponse); // Check the updated object
            };
        })(i);
        

        likertContainer.appendChild(likertBox);
    }

    feedbackContainer.appendChild(question);
    feedbackContainer.appendChild(likertContainer);

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        if (typeof WatchAgainResponse[questionObj.text] !== 'undefined') {
            WatchAgainResponse[questionObj.text] = WatchAgainResponse[questionObj.text].toString();
            onSubmit(WatchAgainResponse);
        } else {
            alert("Please answer the question.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";

    console.log("WatchAgain:", WatchAgainResponse);
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
//   function generateVideoSequence(videos, order) {
//     let videosByType = {};
  
//     // Group the videos by type
//     for (let video of videos) {
//       if (!videosByType[video.type]) {
//         videosByType[video.type] = [];
//       }
//       videosByType[video.type].push(video);
//     }
  
//     // Shuffle videos in each category
//     for (let type in videosByType) {
//       shuffleArray(videosByType[type]);
//     }
  
//     // Generate the sequence based on the specified order
//     let sequence = [];
//     for (let type of order) {
//       if (videosByType[type] && videosByType[type].length > 0) {
//         sequence.push(videosByType[type].shift());  // Select and remove the first video from the shuffled array
//       } else {
//         console.warn(`No more videos available for type: ${type}`);
//       }
//     }
  
//     return sequence;
//   }
  


// Instructions


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
  
  const order1 = ["Joy", "Fear", "Interest", "Craving", "Anger", "Romance", "Sadness", "Excitement", "Amusement", "Disgust", "Calmness"];
  const order2 = ["Romance", "Fear", "Craving", "Sadness", "Calmness", "Amusement", "Anger", "Interest", "Joy", "Disgust", "Excitement"];


// Global variable to store the SID number
let participantSID;
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


// Validate the SID to be 10 digits
function isValidSID(sid) {
    return /^\d{10}$/.test(sid);
}


//                                          EXPERIMENTAL PRESENTATION


// Demographics
let age, racialIdentity, genderIdentity, fatherEducation, motherEducation, familyIncome, yearInSchool;

function demographics() {
    // Prompt the user to enter their SID number
    participantSID = prompt("Please enter your SID number:", "");

    // Keep prompting the user until they provide a valid 10-digit SID
    while (!isValidSID(participantSID)) {
        participantSID = prompt("Invalid SID. Please enter a 10-digit SID number:", "");
    }

    // Main wrapper
    let wrapper = document.createElement('div');
    wrapper.id = "demographicsContainer";
    wrapper.style.marginTop = '20rem';
    wrapper.style.paddingBottom = '5rem';
    wrapper.style.fontFamily = "'Arial', sans-serif";

    // Adding a header
    let header = document.createElement('h2');
    header.textContent = "Please respond to the following questions";
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
    // Append and style each question and input
    wrapper.appendChild(createStyledLabel('What is your age?'));
    wrapper.appendChild(createStyledSlider(18, 80, 'ageSlider'));

    wrapper.appendChild(createStyledLabel('What is your racial identity?'));
    wrapper.appendChild(createRadioButtons('racialIdentity', ['Asian', 'Black', 'Latino', 'Native American', 'White']));

    wrapper.appendChild(createStyledLabel('What is your gender identity?'));
    wrapper.appendChild(createRadioButtons('genderIdentity', ['Female', 'Male', 'Non-binary']));

    wrapper.appendChild(createStyledLabel('What is the highest level of education obtained by your father?'));
    wrapper.appendChild(createRadioButtons('fatherEducation', ['Some high school', 'High school diploma', 'Associate degree', 'Bachelor\'s degree', 'Master\'s degree', 'Ph.D.']));

    wrapper.appendChild(createStyledLabel('What is the highest level of education obtained by your mother?'));
    wrapper.appendChild(createRadioButtons('motherEducation', ['Some high school', 'High school diploma', 'Associate degree', 'Bachelor\'s degree', 'Master\'s degree', 'Ph.D.']));

    wrapper.appendChild(createStyledLabel('What is your family income, in thousands of dollars?'));
    wrapper.appendChild(createStyledSlider(0, 200, 'incomeSlider'));

    wrapper.appendChild(createStyledLabel('What year are you in?'));
    wrapper.appendChild(createRadioButtons('yearInSchool', ['Freshmen', 'Sophomore', 'Junior', 'Senior']));

    // Create the button
    let nextButton = document.createElement('button');
    nextButton.textContent = "Proceed";
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
    
        document.getElementById('demographicsContainer').style.display = 'none';  // Hide the demographics container
        baselineEmo();  // Then display the baseline survey
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

        if (answeredQuestions.size === 5 && allSlidersAnswered) {
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

//Baseline Emo
let baselineEmoResponses = {};

// function baselineEmo() {
//      // Top-anchor
//     document.body.classList.add('instructions-body-align');


//     feedbackContainer.innerHTML = '';

//     const emotions = ["Active", "Afraid", "Amused", "Angry", "Aroused", "Calm", "Disgusted", "Excited", "Happy", "Hungry", "Inactive", "Loving", "Negative", "Peaceful", "Pleasant", "Positive", "Sad", "Still (quiet)", "Unpleasant"];
//     const scaleLabels = ["Not at all", "", "", "Somewhat", "", "", "Very"];
//     const emotionResponses = {};

//     // Add header
//     const header = document.createElement("p");
//     header.style.fontWeight = 'bold';
//     header.style.textAlign = 'center';
//     header.style.padding = '20px 0';
//     header.textContent = "Please rate the extent to which you feel the following emotions:";
//     feedbackContainer.appendChild(header);

//     emotions.forEach(emotion => {
//         const question = document.createElement("p");
//         question.style.fontWeight = 'bold';
//         question.style.textAlign = 'center';
//         question.textContent = emotion;

//         const likertContainer = document.createElement("div");
//         likertContainer.classList.add("likert-container");
//         likertContainer.style.paddingBottom = "20px";  // Padding added here

//         for (let i = 0; i <= 6; i++) {
//             const likertBox = document.createElement("div");
//             likertBox.classList.add("likert-box");

//             const number = document.createElement("div");
//             number.textContent = i.toString();
//             number.classList.add("likert-number");
//             likertBox.appendChild(number);

//             const label = document.createElement("div");
//             label.classList.add("likert-label");
//             label.textContent = scaleLabels[i];
//             likertBox.appendChild(label);

//             (function(currentIndex, currentEmotion) {
//                 likertBox.onclick = function() {
//                     likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
//                     emotionResponses[currentEmotion] = currentIndex;
//                     likertBox.style.backgroundColor = "#d8d8d8";
//                 };
//             })(i, emotion);

//             likertContainer.appendChild(likertBox);
//         }

//         feedbackContainer.appendChild(question);
//         feedbackContainer.appendChild(likertContainer);
//     });

//     const submitButton = document.createElement("button");
//     submitButton.innerText = "Submit";
//     submitButton.style.marginTop = "20px"; // Padding added here
//     submitButton.onclick = () => {
//         if (emotions.every(emotion => emotion in emotionResponses)) {
//             baselineEmoResponses = Object.keys(emotionResponses).reduce((acc, key) => {
//                 acc[key] = emotionResponses[key].toString();
//                 return acc;
//             }, {});
//             feedbackContainer.style.display = "none";
//             document.body.classList.remove('instructions-body-align'); // Remove the class when the submit button is clicked
//             instructions();
//         } else {
//             alert("Please answer all the questions.");
//         }
//     };

//     feedbackContainer.appendChild(submitButton);
//     feedbackContainer.style.display = "block";
// }

function baselineEmo() {
    // Top-anchor
    document.body.classList.add('instructions-body-align');

    feedbackContainer.innerHTML = '';

    const emotions = ["Active", "Afraid", "Amused", "Angry", "Aroused", "Calm", "Disgusted", "Excited", "Happy", "Hungry", "Inactive", "Loving", "Negative", "Peaceful", "Pleasant", "Positive", "Sad", "Still (quiet)", "Unpleasant"];
    const scaleLabels = ["Not at all", "", "", "Somewhat", "", "", "Very"];
    const emotionResponses = {};

    // Add header
    const header = document.createElement("p");
    header.style.fontWeight = 'bold';
    header.style.textAlign = 'center';
    header.style.padding = '20px 0';
    header.textContent = "Please rate the extent to which you feel the following emotions:";
    feedbackContainer.appendChild(header);

    emotions.forEach(emotion => {
        const emotionContainer = document.createElement("div");
        emotionContainer.style.display = "flex";
        emotionContainer.style.justifyContent = "space-between";
        emotionContainer.style.alignItems = "center";
        emotionContainer.style.paddingBottom = "20px";

        const question = document.createElement("p");
        question.style.fontWeight = 'bold';
        question.style.flex = "1";
        question.style.marginRight = "20px"; // Padding to the right of the emotion text
        question.textContent = emotion;

        emotionContainer.appendChild(question);

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");
        likertContainer.style.flex = "2"; 

        for (let i = 0; i <= 6; i++) {
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");

            const number = document.createElement("div");
            number.textContent = i.toString();
            number.classList.add("likert-number");
            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");
            label.textContent = scaleLabels[i];
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
            document.body.classList.remove('instructions-body-align'); 
            instructions();
        } else {
            alert("Please answer all the questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}



//Instructions
function instructions() {
    let message = document.getElementById("message");
    message.innerHTML = `
    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
    <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;"></strong>
    <p style="margin-top: 20px;">You're about to watch a series of videos.</p>
    <ol style="padding-left: 30px; margin-top: 20px;">
        <li style="margin-bottom: 10px;">Please sit back and immerse yourself!</li>
        <li style="margin-bottom: 10px;">After every video, you will complete a few simple ratings.</li>
    </ol>
    <p style="margin-top: 20px; text-align: center; text-decoration: underline;">Make sure your window covers the entire screen!</p>
</div>
    `;
    message.style.display = 'block';  // Make sure the message is visible

    clearButtons();
    addButton(createButton("Next", () => {
        message.style.display = 'none';  // Make sure the message is visible
        experimentalSet();
    }));
}




//Video Pilot
function experimentalSet() {
    clearButtons();

    let currentVideoIndex = 0;
    let videosByType = {};

    // Group the videos by type
    for (let video of videos) {
        if (!videosByType[video.type]) {
          videosByType[video.type] = [];
        }
        videosByType[video.type].push(video);
    }

    // Shuffle videos in each category
    for (let type in videosByType) {
        shuffleArray(videosByType[type]);
    }
  
    let sequenceData = generateVideoSequence(videosByType, order1);
    let shuffledVideos = sequenceData.sequence;
    videosByType = sequenceData.videosByType;
      
    let roundNumber = 1;

    function playVideoUntil3Seconds(onComplete) {
        let startTime = Date.now();
        let cumulativeTime = 0;
        videoPlayer.play();

        videoPlayer.onended = videoPlayer.onpause = () => {
            cumulativeTime += Date.now() - startTime; // add time of current play to cumulativeTime
            if (cumulativeTime < 6000) {
                // check if cumulativeTime is less than 3 seconds
                startTime = Date.now(); // reset startTime for the next play
                videoPlayer.play(); // immediately replay video
            } else {
                videoPlayer.onended = videoPlayer.onpause = null; // remove the listeners once done
                onComplete();
            }
        };
    }

    function playNextVideo() {
        if (currentVideoIndex < shuffledVideos.length) {
            const video = shuffledVideos[currentVideoIndex];
            videoPlayer.src = video.src;
            videoPlayer.onloadedmetadata = () => {
                videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek to 60% of the video's duration
                videoPlayer.onseeked = () => {
                    videoPlayer.onseeked = null;
                    videoPlayer.pause(); // Pause the video after seeking
                    videoPlayer.style.display = "block"; // Show the video still for 3 seconds
    
                    let watchButton = createButton("Play", (reactionTime) => {
                        watchButton.style.display = "none";
    
                        videoPlayer.currentTime = 0; // Reset the video to the start
                        playVideoUntil3Seconds(() => {
                            videoPlayer.style.display = "none";
                            clearButtons();
    
                            // Change the text "How do you feel?" to "How do you think this video will make you feel?"
                            const emotionGraphContainer = document.getElementById("emotionGraphContainer");
                            const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
                            emotionGraphTitle.textContent = "How do you feel?";
    
                            let ratingData = {};
                            
                            // Create the feedback form
                            createFeedbackForm(video.id, (responses) => {
                                feedbackContainer.style.display = "none";
                                createRatingForm(video.id, (userRatings) => {
                                    console.log('Ratings submitted:', userRatings);
                                    feedbackContainer.style.display = "none";
                                    createWatchAgainForm(WatchAgainResponse  => {
                                        feedbackContainer.style.display = "none";                                    
                                showFixationCross(playNextVideo);
    
                                
                                userRatings.forEach((rating) => {
                                    participantChoices.push({
                                        vID: rating.vID,
                                        reactionTime: reactionTime,
                                        valence: responses['valence'],
                                        arousal: responses['arousal'],
                                        videoType: rating['videoType'],
                                        EmoRated: rating['EmoRated'],
                                        EmoScore: rating['EmoScore'],
                                        watchAgain: WatchAgainResponse["Would you watch this video again?"],
                                        SID: participantSID,
                                        uniqueKey: participantUniqueKey,
                                        age: age,
                                        racialIdentity: racialIdentity,
                                        genderIdentity: genderIdentity,
                                        fatherEducation: fatherEducation,
                                        motherEducation: motherEducation,
                                        familyIncome: familyIncome,
                                        yearInSchool: yearInSchool,
                                        B_Active: baselineEmoResponses["Active"],
                                        B_Afraid: baselineEmoResponses["Afraid"],
                                        B_Amused: baselineEmoResponses["Amused"],
                                        B_Angry: baselineEmoResponses["Angry"],
                                        B_Aroused: baselineEmoResponses["Aroused"],
                                        B_Calm: baselineEmoResponses["Calm"],
                                        B_Disgusted: baselineEmoResponses["Disgusted"],
                                        B_Excited: baselineEmoResponses["Excited"],
                                        B_Happy: baselineEmoResponses["Happy"],
                                        B_Hungry: baselineEmoResponses["Hungry"],
                                        B_Inactive: baselineEmoResponses["Inactive"],
                                        B_Loving: baselineEmoResponses["Loving"],
                                        B_Negative: baselineEmoResponses["Negative"],
                                        B_Peaceful: baselineEmoResponses["Peaceful"],
                                        B_Pleasant: baselineEmoResponses["Pleasant"],
                                        B_Positive: baselineEmoResponses["Positive"],
                                        B_Sad: baselineEmoResponses["Sad"],
                                        B_Still: baselineEmoResponses["Still (quiet)"],
                                        B_Unpleasant: baselineEmoResponses["Unpleasant"]
                                }
                                );
                              });
                            });
                        });
                        });
                    });   
                });         
    
                    clearButtons();
                    addButton(watchButton);
    
                    // Increment the video index after initializing this video
                    currentVideoIndex++;
                };
            };
        } else {
            // When all videos in the current sequence have been watched
            // Alternate between the two orders and generate a new sequence
            roundNumber++;
            let nextOrder = roundNumber % 2 === 0 ? order2 : order1;
            sequenceData = generateVideoSequence(videosByType, nextOrder);
            shuffledVideos = sequenceData.sequence;
            videosByType = sequenceData.videosByType;
    
            currentVideoIndex = 0;
    
            if (shuffledVideos.length > 0) {
                playNextVideo();
            } else {
                generateAndUploadCSV(participantChoices);
                instructions3();
            }
        }
    }
    
    playNextVideo();
}







const populationMeans = {
    "Amusement": {valence: 5.50},
    "Anger": {valence: 1.97},
    "Calmness": {valence: 5.29},
    "Craving": {valence: 5.74},
    "Disgust": {valence: 1.34},
    "Excitement": {valence: 4.71},
    "Fear": {valence: 2.18},
    "Joy": {valence: 6.04},
    "Sadness": {valence: 2.09},
    "Romance": {valence: 5.54}
};


function calculateMean(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

function calculateMeanRatings(participantChoices) {
    let videoTypes = ["Joy", "Fear", "Craving", "Anger", "Sadness", "Excitement", "Disgust", "Calmness", "Amusement"];
    let meanRatings = {};

    for (let type of videoTypes) {
        let choicesOfType = participantChoices.filter(choice => choice.videoType === type);
        if (choicesOfType.length > 0) {
            let meanValence = calculateMean(choicesOfType.map(choice => Number(choice.valence)));
            meanRatings[type] = { meanValence };
        }
    }

    return meanRatings;
}


// //Instructions 3 as class exercise 
// function instructions3() {
//     document.body.classList.add('instructions-body-align');
//     let meanRatings = calculateMeanRatings(participantChoices);
//     let resultTableContainer = document.getElementById("resultTableContainer");
//     let emotionGroups = {
//         positive: ["Joy", "Calmness", "Amusement", "Excitement"],
//         negative: ["Disgust", "Sadness", "Anger", "Fear"],
//         special: ["Romance", "Craving"]
//     };

//     let groupText = {
//         positive: `<div class="content-text"><h2 style="text-align:center;">Your CAPS Feedback</h2>
//             <p style="text-align:justify;"><i><strong>Important</strong>: Make a screenshot of this feedback as proof of completion.</i><br><br><br> For this feedback, all of your scores are on a scale from 1 (not at all) to 7 (very much so). Your CAPS feedback includes your own emotional reaction to 10 kinds of videos that are commonly used in emotion research to elicit emotional reactions. In addition, next to your own ratings are average ratings of an adult population taken from all over the U.S.<br> <br> The video clips covered 10 major emotional domains: four positive, four negative, and two special cases of interest to this class. Most researchers emphasize the positive and negative emotions that people feel. Positive emotions commonly include happiness or joy, peacefulness (feeling calm and contented), amusement, and excitement. <br><br> Your feedback indicates how much you reacted positively to the videos in each category. So a high value (e.g. 5, 6, and higher) would indicate that you enjoyed these videos very much, whereas low scores (e.g. 3, 2, and lower) would indicated that you found these videos unpleasant. <br><br> When you look at your feedback, you can compare your own responses to those of the normative ratings from the U.S. adult sample. Ask yourself where are your scores higher, where are they lower? Why do you think that’s the case? <br><br><br> <strong>1-Within the positive videos:</strong><br>
//             <br>Compare how you felt about each of the four positive emotion videos. Check which of the four positive videos you enjoyed the most and which you enjoyed the least. In addition, consider what we learned about theories of extraversion. For example, Eysenck and the approach system researchers emphasized that more extraverted individuals seek out and enjoy exciting situations in their lives. In contrast, more introverted individuals seek out and enjoy peaceful situations. What is your pattern for these two emotions?<br><br>`,
//         negative: `<div class="content-text"><p style="text-align:justify;"><br><br><strong>2- Within the negative videos:</strong><br> <br>Again, compare how you felt about each of the four negative emotion videos. In all likelihood you have rated all of these below 4, which is the neutral midpoint of the 7-point rating scale. Most people find the disgusting videos the most unpleasant. But what about the other three, anger, sadness, and fear? We talked about automatic vigilance which Is Kahneman’s system 1 warning us about impending dangers or threats. <br><br>`,
//         special: `<div class="content-text"><p style="text-align:justify;"><br><br><strong>3-We also included two special emotional situations</strong> (here: videos).<br><br> The first is romance, which is obviously related to adult attachment. How positively or negatively did you respond to these romantic videos? The other special emotional situation involves cravings, which is usually studied by showing people photos of appealing and tempting foods. Again, how did you respond to these videos? Also, compare the positivity of your response to these two special situations with the other positive videos in the first block. In the normative study, both romance and cravings were rated in the top 4 most positive emotions. How about you? <br>.`
//     };

//     for (let group in emotionGroups) {
//         let tableHtml = `
//         <table class="result-table">
//             <thead>
//                 <tr>
//                     <th></th>
//                     <th colspan="2" style="text-align:center;">Positivity</th>
//                 </tr>
//                 <tr>
//                     <th>Video Type</th>
//                     <th>You</th>
//                     <th>Population</th>
//                 </tr>
//             </thead>
//             <tbody>
//         `;

//         let participantTotal = [];
//         let populationTotal = [];
//         let count = 0;

//         for (let type of emotionGroups[group]) {
//             let participantValence = meanRatings[type] ? meanRatings[type].meanValence.toFixed(2) : "N/A";
//             let populationValence = populationMeans[type] ? populationMeans[type].valence.toFixed(2) : "N/A";
//             tableHtml += `
//             <tr>
//                 <td>${type}</td>
//                 <td>${participantValence}</td>
//                 <td>${populationValence}</td>
//             </tr>
//             `;
//             if (meanRatings[type] && populationMeans[type]) {
//                 participantTotal.push(meanRatings[type].meanValence);
//                 populationTotal.push(populationMeans[type].valence);
//                 count++;
//             }
//         }

//         if (group === "positive" || group === "negative") {
//             let participantAverage = calculateMean(participantTotal);
//             let populationAverage = calculateMean(populationTotal);

//             tableHtml += `
//             <tr>
//                 <td>Overall</td>
//                 <td>${participantAverage.toFixed(2)}</td>
//                 <td>${populationAverage.toFixed(2)}</td>
//             </tr>
//             `;
//         }

//         tableHtml += '</tbody></table>';

//         resultTableContainer.innerHTML += groupText[group] + tableHtml;
//     }
// // At the very end, append a unique key to the end of the feedback for the participant
// resultTableContainer.innerHTML += `<br><div class="content-text"><h2 style="text-align:center;">Completion Key</h2><p style="text-align:center;">Your unique completion key is: <strong>${participantUniqueKey}</strong>. Please copy and paste this key where required to prove you have completed this experiment.</p></div>`;
// }


//Instructions3 for student research pool


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
            Please copy and paste this key on the next Qualtrics page to prove you have completed this exercise.
        </p>
    </div>`;

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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



//                                              GENERATE DATA

function generateAndUploadCSV(participantChoices) {
    const header = ["vID", "reactionTime",  "valence", "arousal", "videoType", "EmoRated", "EmoScore", "WatchAgain", "SID", "uniqueKey", "age", "racialIdentity", "genderIdentity", "fatherEducation", "motherEducation", "familyIncome", "yearInSchool", "B_Active", "B_Afraid", "B_Amused", "B_Angry", "B_Aroused", "B_Calm", "B_Disgusted", "B_Excited", "B_Happy", "B_Hungry", "B_Inactive", "B_Loving", "B_Negative", "B_Peaceful", "B_Pleasant", "B_Positive", "B_Sad", "B_Still", "B_Unpleasant"]; //initialValence and initialArousal if new flow
    const csvRows = [header];
  
    for (const row of participantChoices) {
      const rowData = [
        row.vID,
        row.reactionTime,
        row.valence || "",
        row.arousal || "",
        row.videoType || "",
        row.EmoRated || "",
        row.EmoScore || "",
        row.watchAgain || "",
        row.SID || "",
        row.uniqueKey || "",
        row.age || "",
        row.racialIdentity || "",
        row.genderIdentity || "",
        row.fatherEducation || "",
        row.motherEducation || "",
        row.familyIncome || "",
        row.yearInSchool || "",
        row.B_Active || "",
        row.B_Afraid || "",
        row.B_Amused || "",
        row.B_Angry || "",
        row.B_Aroused || "",
        row.B_Calm || "",
        row.B_Disgusted || "",
        row.B_Excited || "",
        row.B_Happy || "",
        row.B_Hungry || "",
        row.B_Inactive || "",
        row.B_Loving || "",
        row.B_Negative || "",
        row.B_Peaceful || "",
        row.B_Pleasant || "",
        row.B_Positive || "",
        row.B_Sad || "",
        row.B_Still || "",
        row.B_Unpleasant || ""
    ];

      csvRows.push(rowData);
    }
  
    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    
    // Upload to serverless function
    const uploadUrl = '/.netlify/functions/upload-csv'; 
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadUrl, true);
    xhr.setRequestHeader('Content-Type', 'text/csv;charset=utf-8');
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
  //instructions();       
demographics();




//CHEAT CODE (to update):
// <navigate to folder first>
// git status
// git add .                               (preparing all new changes to be added)
// git commit -m "Your commit message"     (commiting changes)
// git push
// npx netlify deploy --prod               (deploy to website)
// to check new files, go to AWS S3 (amazon), buckets, emotionregulation

// or in short:         git add . && git commit -m "update" && git push

// data: https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#  --> console home --> S3 service --> emotionregulation bucket --> same name folder --> files 



