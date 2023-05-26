// UPDATES TO DO: 
//-Short videos for practice (prototypical), extended version for testing
//-Include neutral videos (conclusion: approach or avoid tendency)


//-Add timer for selection decision: 5 seconds, or automatic choice
//-Add requirement for ratings (interest and emo)
//-Interest and emo in the same page

//DONE
//Changed button names
//Practice videos play automatically

const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");

const videos = [
    { id: "positive1", src: "positive1.mp4", type: "positive" },
    //{ id: "positive2", src: "positive2.mp4", type: "positive" },
    //{ id: "positive3", src: "positive3.mp4", type: "positive" },
    { id: "negative1", src: "negative1.mp4", type: "negative" },
    //{ id: "negative2", src: "negative2.mp4", type: "negative" },
    //{ id: "negative3", src: "negative3.mp4", type: "negative" },
];

let participantChoices = [];
let startTime; 

function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}

const feedbackContainer = document.getElementById("feedbackContainer");

function createFeedbackForm(videoId, onSubmit) {
    feedbackContainer.innerHTML = '';

    const question = document.createElement("p");
    question.textContent = "How interesting did you find this video?";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 0;
    slider.max = 7;
    slider.value = 3;

    const button = document.createElement("button");
    button.innerText = "Submit";
    button.onclick = () => {
        const rating = slider.value;
        onSubmit(rating);
    };

    feedbackContainer.appendChild(question);
    feedbackContainer.appendChild(slider);
    feedbackContainer.appendChild(button);
    feedbackContainer.style.display = "block";
}


function createEmotionGraph(videoId, onSubmit) {
    const emotionGraphContainer = document.getElementById('emotionGraphContainer');
    const emotionSubmit = document.getElementById('emotionSubmit');
    const emotionGraph = document.getElementById('emotionGraph');

    // Clear any existing dots from the graph
    const existingDots = emotionGraph.getElementsByClassName('emotion-dot');
    while (existingDots[0]) {
        existingDots[0].parentNode.removeChild(existingDots[0]);
    }

    // Create the dot and add it to the SVG
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", 200);
    dot.setAttribute("cy", 200);
    dot.setAttribute("r", 10);
    dot.setAttribute("fill", "red");
    dot.setAttribute("class", "emotion-dot");
    emotionGraph.appendChild(dot);

    // Dragging state
    let dragging = false;

    const startDragging = (e) => {
        dragging = true;
    };

    const stopDragging = (e) => {
        dragging = false;
    };

    const dragDot = (e) => {
        if (dragging) {
            let x = e.offsetX;
            let y = e.offsetY;

            // Boundaries for SVG (400 x 400)
            if (x < 0) x = 0;
            if (x > 400) x = 400;
            if (y < 0) y = 0;
            if (y > 400) y = 400;

            dot.setAttribute("cx", x);
            dot.setAttribute("cy", y);
        }
    };

    emotionGraph.addEventListener('mousedown', startDragging);
    emotionGraph.addEventListener('mousemove', dragDot);
    emotionGraph.addEventListener('mouseup', stopDragging);
    emotionGraph.addEventListener('mouseleave', stopDragging);

    // Handle submit button click
    emotionSubmit.onclick = () => {
        emotionGraphContainer.style.display = "none";
        const valence = dot.getAttribute("cx");
        const arousal = 400 - dot.getAttribute("cy"); // Subtract from 400 because SVG Y-axis goes from top to bottom

        onSubmit(valence, arousal);
    };

    emotionGraphContainer.style.display = "block";
}





function startPart1() {
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
            startPart2();
        }
    }

    playNextVideo();
}





function startPart2() {
    showMessage("You have finished the first exercise. Press 'Next' to move on to the next one.");
    clearButtons();
    addButton(createButton("Next", () => {
        showMessage("");
        startPart3();
    }));
}


function playRandomVideo(excludeVideoId, videos) {
    let remainingVideos = videos.filter(video => video.id !== excludeVideoId);
    let randomVideoIndex = Math.floor(Math.random() * remainingVideos.length);
    return remainingVideos[randomVideoIndex];
}


function startPart3() {
    const shuffledVideos = shuffleArray([...videos]);
    let currentVideoIndex = 0;

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
                videoPlayer.play();

                videoPlayer.onended = () => {
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
                };
                currentVideoIndex++;
            });

            skipButton = createButton("Avoid", (reactionTime) => {
                clearTimeout(buttonTimeout);
                watchButton.style.display = "none";
                skipButton.style.display = "none";
                const randomVideo = playRandomVideo(video.id, videos);
                videoPlayer.src = randomVideo.src;
                videoPlayer.play();

                videoPlayer.onended = () => {
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
                };
                currentVideoIndex++;
            });

            clearButtons();
            addButton(watchButton);
            addButton(skipButton);
        } else {
            startPart4();
        }
    }

    playNextVideo();
}




function startPart4() {
    showMessage("Congratulations! You have completed this study :)");
    clearButtons();
	generateAndUploadCSV(participantChoices);
	
}

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
  


startPart1();       




//CHEAT CODE (to update):
// git status
// git add .                               (preparing all new changes to be added)
// git commit -m "Your commit message"     (commiting changes)
// git push
// npx netlify deploy --prod               (deploy to website)
// to check new files, go to AWS S3 (amazon), buckets, emotionregulation