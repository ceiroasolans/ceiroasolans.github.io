//Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");

 
// Other
const videos = [
    { src: "0036.mp4", type: "positive" },
    { src: "0055.mp4", type: "positive" },
    { src: "0060.mp4", type: "positive" },
    { src: "0074.mp4", type: "positive" },
    { src: "0080.mp4", type: "positive" },
    { src: "0087.mp4", type: "positive" },
    { src: "0089.mp4", type: "positive" },
    { src: "0090.mp4", type: "positive" },
    { src: "0096.mp4", type: "positive" },
    { src: "0098.mp4", type: "positive" },
    { src: "0107.mp4", type: "positive" },
    { src: "0110.mp4", type: "positive" },
    { src: "0116.mp4", type: "positive" },
    { src: "0124.mp4", type: "positive" },
    { src: "0174.mp4", type: "positive" },
    { src: "0187.mp4", type: "positive" },
    { src: "0195.mp4", type: "positive" },
    { src: "0202.mp4", type: "positive" },
    { src: "0204.mp4", type: "positive" },
    { src: "0228.mp4", type: "positive" },
    { src: "0235.mp4", type: "positive" },
    { src: "0252.mp4", type: "positive" },
    { src: "0329.mp4", type: "positive" },
    { src: "0339.mp4", type: "positive" },
    { src: "0344.mp4", type: "positive" },
    { src: "0348.mp4", type: "positive" },
    { src: "0360.mp4", type: "positive" },
    { src: "0369.mp4", type: "positive" },
    { src: "0402.mp4", type: "positive" },
    { src: "0414.mp4", type: "positive" },
    { src: "0458.mp4", type: "positive" },
    { src: "0479.mp4", type: "positive" },
    { src: "0492.mp4", type: "positive" },
    { src: "0519.mp4", type: "positive" },
    { src: "0550.mp4", type: "positive" },
    { src: "0551.mp4", type: "positive" },
    { src: "0560.mp4", type: "positive" },
    { src: "0573.mp4", type: "positive" },
    { src: "0574.mp4", type: "positive" },
    { src: "0590.mp4", type: "positive" },
    { src: "0593.mp4", type: "positive" },
    { src: "0595.mp4", type: "positive" },
    { src: "0598.mp4", type: "positive" },
    { src: "0611.mp4", type: "positive" },
    { src: "0615.mp4", type: "positive" },
    { src: "0650.mp4", type: "positive" },
    { src: "0656.mp4", type: "positive" },
    { src: "0666.mp4", type: "positive" },
    { src: "0681.mp4", type: "positive" },
    { src: "0684.mp4", type: "positive" },
    { src: "0688.mp4", type: "positive" },
    { src: "0701.mp4", type: "positive" },
    { src: "0713.mp4", type: "positive" },
    { src: "0722.mp4", type: "positive" },
    { src: "0724.mp4", type: "positive" },
    { src: "0741.mp4", type: "positive" },
    { src: "0744.mp4", type: "positive" },
    { src: "0756.mp4", type: "positive" },
    { src: "0767.mp4", type: "positive" },
    { src: "0780.mp4", type: "positive" },
    { src: "0795.mp4", type: "positive" },
    { src: "0803.mp4", type: "positive" },
    { src: "0817.mp4", type: "positive" },
    { src: "0834.mp4", type: "positive" },
    { src: "0860.mp4", type: "positive" },
    { src: "0876.mp4", type: "positive" },
    { src: "0883.mp4", type: "positive" },
    { src: "0893.mp4", type: "positive" },
    { src: "0898.mp4", type: "positive" },
    { src: "0921.mp4", type: "positive" },
    { src: "0929.mp4", type: "positive" },
    { src: "0940.mp4", type: "positive" },
    { src: "0975.mp4", type: "positive" },
    { src: "0986.mp4", type: "positive" },
    { src: "0996.mp4", type: "positive" },
    { src: "1009.mp4", type: "positive" },
    { src: "1012.mp4", type: "positive" },
    { src: "1056.mp4", type: "positive" },
    { src: "1145.mp4", type: "positive" },
    { src: "1164.mp4", type: "positive" },
    { src: "1165.mp4", type: "positive" },
    { src: "1191.mp4", type: "positive" },
    { src: "1194.mp4", type: "positive" },
    { src: "1197.mp4", type: "positive" },
    { src: "1202.mp4", type: "positive" },
    { src: "1216.mp4", type: "positive" },
    { src: "1229.mp4", type: "positive" },
    { src: "1232.mp4", type: "positive" },
    { src: "1261.mp4", type: "positive" },
    { src: "1267.mp4", type: "positive" },
    { src: "1282.mp4", type: "positive" },
    { src: "1311.mp4", type: "positive" },
    { src: "1323.mp4", type: "positive" },
    { src: "1349.mp4", type: "positive" },
    { src: "1358.mp4", type: "positive" },
    { src: "1374.mp4", type: "positive" },
    { src: "1400.mp4", type: "positive" },
    { src: "1411.mp4", type: "positive" },
    { src: "1423.mp4", type: "positive" },
    { src: "1424.mp4", type: "positive" },
    { src: "1432.mp4", type: "positive" },
    { src: "1440.mp4", type: "positive" },
    { src: "1449.mp4", type: "positive" },
    { src: "1468.mp4", type: "positive" },
    { src: "1471.mp4", type: "positive" },
    { src: "1498.mp4", type: "positive" },
    { src: "1518.mp4", type: "positive" },
    { src: "1560.mp4", type: "positive" },
    { src: "1592.mp4", type: "positive" },
    { src: "1606.mp4", type: "positive" },
    { src: "1623.mp4", type: "positive" },
    { src: "1647.mp4", type: "positive" },
    { src: "1666.mp4", type: "positive" },
    { src: "1667.mp4", type: "positive" },
    { src: "1687.mp4", type: "positive" },
    { src: "1717.mp4", type: "positive" },
    { src: "1740.mp4", type: "positive" },
    { src: "1745.mp4", type: "positive" },
    { src: "1755.mp4", type: "positive" },
    { src: "1760.mp4", type: "positive" },
    { src: "1780.mp4", type: "positive" },
    { src: "1786.mp4", type: "positive" },
    { src: "1795.mp4", type: "positive" },
    { src: "1798.mp4", type: "positive" },
    { src: "1819.mp4", type: "positive" },
    { src: "1826.mp4", type: "positive" },
    { src: "1828.mp4", type: "positive" },
    { src: "1830.mp4", type: "positive" },
    { src: "1832.mp4", type: "positive" },
    { src: "1835.mp4", type: "positive" },
    { src: "1844.mp4", type: "positive" },
    { src: "1868.mp4", type: "positive" },
    { src: "1876.mp4", type: "positive" },
    { src: "1911.mp4", type: "positive" },
    { src: "1924.mp4", type: "positive" },
    { src: "1935.mp4", type: "positive" },
    { src: "1955.mp4", type: "positive" },
    { src: "1959.mp4", type: "positive" },
    { src: "2013.mp4", type: "positive" },
    { src: "2018.mp4", type: "positive" },
    { src: "2021.mp4", type: "positive" },
    { src: "2025.mp4", type: "positive" },
    { src: "2049.mp4", type: "positive" },
    { src: "2058.mp4", type: "positive" },
    { src: "2066.mp4", type: "positive" },
    { src: "2083.mp4", type: "positive" },
    { src: "2085.mp4", type: "positive" },
    { src: "2168.mp4", type: "positive" },
    { src: "2181.mp4", type: "positive" },
    { src: "2183.mp4", type: "positive" }
  ];
  
  for(let i = 0; i < videos.length; i++) {
    videos[i].id = i.toString();
}



let participantChoices = [];
let startTime; 

function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}


// Create response variables
function createFeedbackForm(videoId, onSubmit) {
    feedbackContainer.innerHTML = '';

    const question = document.createElement("p");
    question.textContent = "How interesting did you find this video?";

    feedbackContainer.slider = document.createElement("input");
    feedbackContainer.slider.type = "range";
    feedbackContainer.slider.min = 0;
    feedbackContainer.slider.max = 7;
    feedbackContainer.slider.value = 3;
    feedbackContainer.slider.addEventListener('change', function(){
        feedbackContainer.button.disabled = false;
    });

    feedbackContainer.button = document.createElement("button");
    feedbackContainer.button.innerText = "Submit";
    feedbackContainer.button.disabled = true;
    feedbackContainer.button.onclick = () => {
        const rating = feedbackContainer.slider.value;
        feedbackContainer.button.disabled = true;
        onSubmit(rating);
    };

    feedbackContainer.appendChild(question);
    feedbackContainer.appendChild(feedbackContainer.slider);
    feedbackContainer.appendChild(feedbackContainer.button);
    feedbackContainer.style.display = "block";
}





function createEmotionGraph(videoId, onSubmit) {
    const emotionGraphContainer = document.getElementById('emotionGraphContainer');
    const emotionSubmit = document.getElementById('emotionSubmit');
    const emotionGraph = document.getElementById('emotionGraph');

    emotionSubmit.disabled = true; // Disable the submit button initially

    // Clear any existing dots from the graph
    const existingDots = emotionGraph.getElementsByClassName('emotion-dot');
    while (existingDots[0]) {
        existingDots[0].parentNode.removeChild(existingDots[0]);
    }

    // Create the x-axis line and add it to the SVG
    const xAxisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxisLine.setAttribute("x1", 30);
    xAxisLine.setAttribute("y1", 200); // This should be at half of the SVG height assuming it is 400px
    xAxisLine.setAttribute("x2", 370); // This should be the full width of the SVG assuming it is 400px
    xAxisLine.setAttribute("y2", 200);
    xAxisLine.setAttribute("stroke", "black");
    xAxisLine.setAttribute("stroke-width", 1);
    emotionGraph.appendChild(xAxisLine);

    // Create the y-axis line and add it to the SVG
    const yAxisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    yAxisLine.setAttribute("x1", 200); // This should be at half of the SVG width assuming it is 400px
    yAxisLine.setAttribute("y1", 30);
    yAxisLine.setAttribute("x2", 200);
    yAxisLine.setAttribute("y2", 370); // This should be the full height of the SVG assuming it is 400px
    yAxisLine.setAttribute("stroke", "black");
    yAxisLine.setAttribute("stroke-width", 1);
    emotionGraph.appendChild(yAxisLine);

    // Create the dot and add it to the SVG
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", 200);
    dot.setAttribute("cy", 200);
    dot.setAttribute("r", 10);
    dot.setAttribute("fill", "red");
    dot.setAttribute("class", "emotion-dot");
    emotionGraph.appendChild(dot);


// Create a function for creating text elements
function createText(x, y, text) {
    const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("x", x);
    textElement.setAttribute("y", y);
    textElement.textContent = text;
    return textElement;
}

// Mapping of emotions to coordinates
const emotions = {
    "Angry": [40, 90],
    "Fearful": [15, 85],
    "Disgusted": [10, 60],
    "Sad": [15, 30],
    "Calm": [60, 10],
    "Content": [80, 40],
    "Happy": [90, 60],
    "Elated": [85, 80],
    "Excited": [60, 90]
};

// Add the emotions to the SVG
for (let emotion in emotions) {
    const [xPercent, yPercent] = emotions[emotion];
    const x = 4 * xPercent; // multiply by 4 to convert percentage to 400px scale
    const y = 400 - (4 * yPercent); // subtract from 400 because SVG Y-axis goes from top to bottom
    const textElement = createText(x, y, emotion);
    emotionGraph.appendChild(textElement);
}




    // Dragging state
    let dragging = false;
    let dotMoved = false;

    const startDragging = (e) => {
        dragging = true;
    };

    const stopDragging = (e) => {
        dragging = false;
    };

    const dragDot = (e) => {
        if (dragging) {
            dotMoved = true;
            let x = Math.round(e.offsetX / 40) * 40; // change this to a small number if we want it to be fluid (and line below)
            let y = Math.round(e.offsetY / 40) * 40;

            // Boundaries for SVG (400 x 400)
            if (x < 30) x = 30;
            if (x > 370) x = 370;
            if (y < 30) y = 30;
            if (y > 370) y = 370;

            dot.setAttribute("cx", x);
            dot.setAttribute("cy", y);
            
            emotionSubmit.disabled = false; // Enable the submit button as the dot has been moved
        }
    };

    emotionGraph.addEventListener('mousedown', startDragging);
    emotionGraph.addEventListener('mousemove', dragDot);
    emotionGraph.addEventListener('mouseup', stopDragging);
    emotionGraph.addEventListener('mouseleave', stopDragging);

    // Handle submit button click
    emotionSubmit.onclick = () => {
        if(dotMoved){
            emotionGraphContainer.style.display = "none";
            const valence = dot.getAttribute("cx");
            const arousal = 400 - dot.getAttribute("cy"); // Subtract from 400 because SVG Y-axis goes from top to bottom

            onSubmit(valence, arousal);
        }
    };

    emotionGraphContainer.style.display = "block";
}



// //Experimental flow

function instructions1() {
    showMessage("Welcome! Press 'Next' to begin.");
    clearButtons();
    addButton(createButton("Next", () => {
        showMessage("");
        practiceSet();
    }));
}

function practiceSet() {
    clearButtons();
    const shuffledVideos = shuffleArray([...videos]);
    let currentVideoIndex = 0; 

    function playNextVideo() {
        if (currentVideoIndex < shuffledVideos.length) {
            const video = shuffledVideos[currentVideoIndex];
            videoPlayer.src = video.src;
            videoPlayer.style.display = "block";
            videoPlayer.play();

            videoPlayer.onended = () => {
                videoPlayer.style.display = "none";
                clearButtons();

                createFeedbackForm(video.id, (rating) => {
                    feedbackContainer.style.display = "none";
                    createEmotionGraph(video.id, (valence, arousal) => {
                        showFixationCross(playNextVideo);

                        // Consolidate data into one object and add it to the participantChoices array
                        participantChoices.push({
                            part: "Practice",
                            videoId: video.id,
                            rating: rating,
                            valence: valence, 
                            arousal: arousal
                        });
                    });
                });
            };

            currentVideoIndex++;
        } else {
            showMessage("");
            instructions2();
        }
    }

    playNextVideo();
}

function instructions2() {
    showMessage("You have finished the first exercise. Press 'Next' to move on to the next one.");
    clearButtons();
    addButton(createButton("Next", () => {
        showMessage("");
        experimentalSet();
    }));
}


function instructions() {
    showMessage("Welcome! Please press 'Next' to begin.");
    clearButtons();
    addButton(createButton("Next", () => {
        showMessage("");
        experimentalSet();
    }));
}

function playRandomVideo(excludeVideoId, videos) {
    let remainingVideos = videos.filter(video => video.id !== excludeVideoId);
    let randomVideoIndex = Math.floor(Math.random() * remainingVideos.length);
    return remainingVideos[randomVideoIndex];
}


function experimentalSet() {
    const shuffledVideos = shuffleArray([...videos]);
    let currentVideoIndex = 0;

    function playVideoUntil3Seconds(onComplete) {
        let startTime = Date.now();
        videoPlayer.play();

        videoPlayer.onended = videoPlayer.onpause = () => {
            let timeElapsed = (Date.now() - startTime) / 1000;
            if (timeElapsed < 3) {
                setTimeout(() => {
                    videoPlayer.play();
                }, 1000 * (3 - timeElapsed));
            } else {
                videoPlayer.onended = videoPlayer.onpause = null;  // remove the listeners once done
                onComplete();
            }
        };
    }

    function playNextVideo() {
        if (currentVideoIndex < shuffledVideos.length) {
            const video = shuffledVideos[currentVideoIndex];
            videoPlayer.src = video.src;
            videoPlayer.style.display = "block";

            let watchButton;
            let skipButton;

            const buttonTimeout = setTimeout(() => {
                const randomButton = Math.random() < 0.5 ? watchButton : skipButton;
                randomButton.click();
            }, 7000); // 7 seconds

            watchButton = createButton("Choose", (reactionTime) => {
                clearTimeout(buttonTimeout);
                watchButton.style.display = "none";
                skipButton.style.display = "none";

                playVideoUntil3Seconds(() => {
                    videoPlayer.style.display = "none";
                    clearButtons();

                    createFeedbackForm(video.id, (rating) => {
                        feedbackContainer.style.display = "none";
                        createEmotionGraph(video.id, (valence, arousal) => {
                            showFixationCross(playNextVideo);

                            participantChoices.push({
                                part: "Experimental_Choice",
                                decision: "watch",
                                videoId: video.id,
                                reactionTime: reactionTime,
                                rating: rating,
                                valence: valence, 
                                arousal: arousal
                            });
                        });
                    });
                });
                currentVideoIndex++;
            });

            skipButton = createButton("Avoid", (reactionTime) => {
                clearTimeout(buttonTimeout);
                watchButton.style.display = "none";
                skipButton.style.display = "none";
                const randomVideo = playRandomVideo(video.id, videos);
                videoPlayer.src = randomVideo.src;
                
                playVideoUntil3Seconds(() => {
                    videoPlayer.style.display = "none";
                    clearButtons();

                    createFeedbackForm(video.id, (rating) => {
                        feedbackContainer.style.display = "none";
                        createEmotionGraph(video.id, (valence, arousal) => {
                            showFixationCross(playNextVideo);

                            participantChoices.push({
                                part: "Experimental_Choice",
                                decision: "skip",
                                videoId: video.id,
                                reactionTime: reactionTime,
                                forcedVideoId: randomVideo.id,
                                rating: rating,
                                valence: valence, 
                                arousal: arousal
                            });
                        });
                    });
                });
                currentVideoIndex++;
            });

            clearButtons();
            addButton(watchButton);
            addButton(skipButton);
        } else {
            instructions3();
        }
    }

    playNextVideo();
}




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
    fixationCross.style.display = "block";
    setTimeout(() => {
        fixationCross.style.display = "none";
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
    const header = ["part", "decision", "videoId", "reactionTime", "forcedVideoId", "rating", "valence", "arousal"];
    const csvRows = [header];
  
    for (const row of participantChoices) {
      const rowData = [
        row.part,
        row.decision,
        row.videoId,
        row.reactionTime,
        row.forcedVideoId || "",
        row.rating || "",
        row.valence || "",
        row.arousal || "",
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

// or in short:         git add -A && git commit -m "update" && git push