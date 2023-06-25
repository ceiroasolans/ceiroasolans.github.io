// Double Task; comment things out to choose one or the other 

//Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");

 
// Videos
const videos = [
    { src: "0074.mp4", type: "Amusement" },
    // { src: "0574.mp4", type: "Amusement" },
    // { src: "0656.mp4", type: "Amusement" },
    // { src: "1043.mp4", type: "Amusement" },
    // { src: "1145.mp4", type: "Amusement" },
    // { src: "1411.mp4", type: "Amusement" },
    // { src: "1564.mp4", type: "Amusement" },
    // { src: "1606.mp4", type: "Amusement" },
    // { src: "2072.mp4", type: "Amusement" },
    // { src: "2083.mp4", type: "Amusement" },
    // { src: "0124.mp4", type: "Anger" },
    // { src: "0252.mp4", type: "Anger" },
    // { src: "0414.mp4", type: "Anger" },
    // { src: "0595.mp4", type: "Anger" },
    // { src: "0681.mp4", type: "Anger" },
    // { src: "0948.mp4", type: "Anger" },
    // { src: "1229.mp4", type: "Anger" },
    // { src: "1844.mp4", type: "Anger" },
    { src: "2049.mp4", type: "Anger" },
    // { src: "2066.mp4", type: "Anger" },
    // { src: "0090.mp4", type: "Calmness" },
    { src: "0339.mp4", type: "Calmness" },
    // { src: "0493.mp4", type: "Calmness" },
    // { src: "0553.mp4", type: "Calmness" },
    // { src: "0580.mp4", type: "Calmness" },
    // { src: "0645.mp4", type: "Calmness" },
    // { src: "0671.mp4", type: "Calmness" },
    // { src: "1216.mp4", type: "Calmness" },
    // { src: "1760.mp4", type: "Calmness" },
    // { src: "1835.mp4", type: "Calmness" },
    // { src: "0110.mp4", type: "Craving" },
    // { src: "0458.mp4", type: "Craving" },
    // { src: "0780.mp4", type: "Craving" },
    // { src: "0883.mp4", type: "Craving" },
    // { src: "0898.mp4", type: "Craving" },
    // { src: "0919.mp4", type: "Craving" },
    // { src: "1449.mp4", type: "Craving" },
    // { src: "1498.mp4", type: "Craving" },
    { src: "1740.mp4", type: "Craving" },
    // { src: "1826.mp4", type: "Craving" },
    // { src: "0187.mp4", type: "Disgust" },
    { src: "0235.mp4", type: "Disgust" },
    // { src: "0355.mp4", type: "Disgust" },
    // { src: "0713.mp4", type: "Disgust" },
    // { src: "0876.mp4", type: "Disgust" },
    // { src: "0929.mp4", type: "Disgust" },
    // { src: "1194.mp4", type: "Disgust" },
    // { src: "1423.mp4", type: "Disgust" },
    // { src: "1907.mp4", type: "Disgust" },
    // { src: "2018.mp4", type: "Disgust" },
    // { src: "0041.mp4", type: "Excitement" },
    // { src: "0202.mp4", type: "Excitement" },
    // { src: "0402.mp4", type: "Excitement" },
    // { src: "0546.mp4", type: "Excitement" },
    // { src: "0550.mp4", type: "Excitement" },
    // { src: "0701.mp4", type: "Excitement" },
    // { src: "0970.mp4", type: "Excitement" },
    // { src: "1297.mp4", type: "Excitement" },
    // { src: "1537.mp4", type: "Excitement" },
    { src: "1717.mp4", type: "Excitement" },
    // { src: "2021.mp4", type: "Excitement" },
    // { src: "0379.mp4", type: "Fear" },
    { src: "0489.mp4", type: "Fear" },
    // { src: "0706.mp4", type: "Fear" },
    // { src: "1202.mp4", type: "Fear" },
    // { src: "1375.mp4", type: "Fear" },
    // { src: "1726.mp4", type: "Fear" },
    // { src: "1780.mp4", type: "Fear" },
    // { src: "1832.mp4", type: "Fear" },
    // { src: "1964.mp4", type: "Fear" },
    // { src: "2091.mp4", type: "Fear" },
    // { src: "0723.mp4", type: "Interest" },
    // { src: "0735.mp4", type: "Interest" },
    // { src: "1066.mp4", type: "Interest" },
    // { src: "1068.mp4", type: "Interest" },
    // { src: "1301.mp4", type: "Interest" },
    // { src: "1619.mp4", type: "Interest" },
    // { src: "1624.mp4", type: "Interest" },
    // { src: "1641.mp4", type: "Interest" },
    { src: "1664.mp4", type: "Interest" },
    // { src: "1945.mp4", type: "Interest" },
    // { src: "0035.mp4", type: "Joy" },
    { src: "0087.mp4", type: "Joy" },
    // { src: "0126.mp4", type: "Joy" },
    // { src: "0597.mp4", type: "Joy" },
    // { src: "0605.mp4", type: "Joy" },
    // { src: "0666.mp4", type: "Joy" },
    // { src: "1032.mp4", type: "Joy" },
    // { src: "1034.mp4", type: "Joy" },
    // { src: "1093.mp4", type: "Joy" },
    // { src: "2013.mp4", type: "Joy" },
    // { src: "0204.mp4", type: "Romance" },
    // { src: "0369.mp4", type: "Romance" },
    // { src: "0773.mp4", type: "Romance" },
    // { src: "1074.mp4", type: "Romance" },
    // { src: "1295.mp4", type: "Romance" },
    // { src: "1407.mp4", type: "Romance" },
    // { src: "1424.mp4", type: "Romance" },
    // { src: "1551.mp4", type: "Romance" },
    { src: "1911.mp4", type: "Romance" },
    // { src: "1978.mp4", type: "Romance" },
    // { src: "0226.mp4", type: "Sadness" },
    { src: "0299.mp4", type: "Sadness" }//,
    // { src: "0611.mp4", type: "Sadness" },
    // { src: "0756.mp4", type: "Sadness" },
    // { src: "0803.mp4", type: "Sadness" },
    // { src: "0860.mp4", type: "Sadness" },
    // { src: "0975.mp4", type: "Sadness" },
    // { src: "1164.mp4", type: "Sadness" },
    // { src: "1485.mp4", type: "Sadness" },
    // { src: "1959.mp4", type: "Sadness" },
];
  
  for(let i = 0; i < videos.length; i++) {
    videos[i].id = i.toString();
}



let participantChoices = [];
let startTime; 

function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}





// // Valence and arousal
function createFeedbackForm(videoId, onSubmit) {
    feedbackContainer.innerHTML = '';

    const questions = [
        { text: "How do you feel?", scale: ["Quiet, still, inactive", "Neutral", "Activated, intense, aroused"] },
        { text: " ", scale: ["Negative, dissatisfied, unhappy", "Neutral", "Positive, satisfied, pleased"] }
    ];

    const responses = {};

    questions.forEach((questionObj, index) => {
        const question = document.createElement("p");
        question.textContent = questionObj.text;

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");

        for(let i = 1; i <= 7; i++){
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
            if (i === 1) label.textContent += questionObj.scale[0];
            else if (i === 4) label.textContent += questionObj.scale[1];
            else if (i === 7) label.textContent += questionObj.scale[2];

            likertBox.onclick = function() {
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");

                // Depending on the index, save to valence or arousal
                if(index === 0) {
                    responses['valence'] = i;
                } else if(index === 1) {
                    responses['arousal'] = i;
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
            // Remove 'selected' class from all boxes in the container
            let boxes = container.getElementsByClassName('likert-box');
            for (let j = 0; j < boxes.length; j++) {
                boxes[j].classList.remove('selected');
                boxes[j].style.backgroundColor = ""; // Remove previous background color
            }

            // If this box was already selected, do not re-add the 'selected' class
            if(this.classList.contains('selected')){
                this.classList.remove('selected');
                this.style.backgroundColor = ""; // Remove previous background color
            } else {
                // Add 'selected' class to the clicked box
                this.classList.add('selected');
                this.style.backgroundColor = "#ccc"; // Set background color to darker shade
            }
        });

        let contentContainer = document.createElement('div');
        contentContainer.className = 'likert-content';

        let number = document.createElement('div');
        number.className = 'likert-number';
        number.textContent = i;

        let label = document.createElement('div');
        label.className = 'likert-label';
        
        if (i === min) {
            label.textContent = minLabel;
        } else if (i === max) {
            label.textContent = maxLabel;
        } else if (i === 4) {
            label.textContent = midLabel;
        }

        contentContainer.appendChild(number);
        contentContainer.appendChild(label);
        box.appendChild(contentContainer);
        container.appendChild(box);
    }

    return mainContainer;
} 

function createRatingForm(videoId, onSubmit) {
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

    const video = videos.find(v => v.id === videoId); //change to v.id

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
    header.innerText = 'How do you feel?';
    feedbackContainer.appendChild(header);

    ratings.forEach((rating, index) => {
        let likertContainer = createLikertContainer(1, 7, `not ${rating}`, `very ${rating}`,`moderately ${rating}`, rating);
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

            userRatings.push({
                videoType: video.type,
                EmoRated: ratings[i - 1], // get the rating type from the ratings array
                EmoScore: parseInt(selectedBox.textContent),
                vID: video.src
            });
                
        }

        feedbackContainer.innerHTML = ''; // Clear the feedback container after successful submission
        onSubmit(userRatings);
    });

    feedbackContainer.appendChild(submitButton); // Append the button directly to the feedbackContainer

    feedbackContainer.style.display = 'block';
}

//Watch again? 

function createWatchAgainForm(onSubmit) {
    feedbackContainer.innerHTML = '';

    const questionObj = {
        text: "Would you watch this video again?",
        scale: ["No, never!", "Maybe", "Yes, anytime!"]
    };

    const WatchAgain = {};

    const question = document.createElement("p");
    question.textContent = questionObj.text;

    const likertContainer = document.createElement("div");
    likertContainer.classList.add("likert-container");

    for (let i = 1; i <= 7; i++) {
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
        if (i === 1) label.textContent += questionObj.scale[0];
        else if (i === 4) label.textContent += questionObj.scale[1];
        else if (i === 7) label.textContent += questionObj.scale[2];

        likertBox.onclick = function () {
            likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
            WatchAgain[questionObj.text] = i;
            likertBox.style.backgroundColor = "#d8d8d8";  // Change color to indicate selection
        };

        likertContainer.appendChild(likertBox);
    }

    feedbackContainer.appendChild(question);
    feedbackContainer.appendChild(likertContainer);

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        if (WatchAgain[questionObj.text]) {
            onSubmit(WatchAgain);
        } else {
            alert("Please answer the question.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";

    console.log("WatchAgain:", WatchAgain);
}





// Function to shuffle an array
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
  


// EXPERIMENTAL

function instructions() {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
            <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Welcome!</strong>
            <p style="margin-top: 20px;">You're about to watch a series of videos.  </p>
            <ol style="padding-left: 30px; margin-top: 20px;">
                <li style="margin-bottom: 10px;"> Please sit back and immerse yourself!</li>
                <li style="margin-bottom: 10px;">After every video, you will complete two simple ratings.</li>
            </ol>
        </div>
    `;
    message.style.display = 'block';  // Make sure the message is visible

    clearButtons();
    addButton(createButton("Next", () => {
        message.style.display = 'none';  // Make sure the message is visible
        experimentalSet();
    }));
}


const order1 = ["Joy", "Fear", "Interest", "Craving", "Anger", "Romance", "Sadness", "Excitement", "Amusement", "Disgust", "Calmness"];
const order2 = ["Romance", "Fear", "Craving", "Sadness", "Calmness", "Amusement", "Anger", "Interest", "Excitement", "Disgust", "Joy"];



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
            if (cumulativeTime < 3000) {
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
                                        watchAgain: WatchAgainResponse["Would you watch this video again?"]
                                });
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
                instructions3();
            }
        }
    }
    
    playNextVideo();
}










// Byebye
function instructions3() {
    showMessage("Congratulations! You have completed this study :)");
    clearButtons();
    generateAndUploadCSV(participantChoices);
    
}






// Auxiliary functions
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



// Generate data 
function generateAndUploadCSV(participantChoices) {
    const header = ["vID", "reactionTime",  "valence", "arousal", "videoType", "EmoRated", "EmoScore", "WatchAgain"]; //initialValence and initialArousal if new flow
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
        row.WatchAgain || ""
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
  


  //START
  instructions();       




//CHEAT CODE (to update):
// git status
// git add .                               (preparing all new changes to be added)
// git commit -m "Your commit message"     (commiting changes)
// git push
// npx netlify deploy --prod               (deploy to website)
// to check new files, go to AWS S3 (amazon), buckets, emotionregulation

// or in short:         git add . && git commit -m "update" && git push

// data: https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#  --> console home --> S3 service --> emotionregulation bucket --> same name folder --> files 
