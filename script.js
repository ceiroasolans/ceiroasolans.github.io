//Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");

 
// Other
const videos = [
    { id: "0036", src: "0036.mp4", type: "positive" },
    { id: "0055", src: "0055.mp4", type: "positive" },
    { id: "0060", src: "0060.mp4", type: "positive" },
    { id: "0074", src: "0074.mp4", type: "positive" },
    { id: "0080", src: "0080.mp4", type: "positive" },
    { id: "0087", src: "0087.mp4", type: "positive" },
    { id: "0089", src: "0089.mp4", type: "positive" },
    { id: "0090", src: "0090.mp4", type: "positive" },
    { id: "0096", src: "0096.mp4", type: "positive" },
    { id: "0098", src: "0098.mp4", type: "positive" },
    { id: "0107", src: "0107.mp4", type: "positive" },
    { id: "0110", src: "0110.mp4", type: "positive" },
    { id: "0116", src: "0116.mp4", type: "positive" },
    { id: "0124", src: "0124.mp4", type: "positive" },
    { id: "0174", src: "0174.mp4", type: "positive" },
    { id: "0187", src: "0187.mp4", type: "positive" },
    { id: "0195", src: "0195.mp4", type: "positive" },
    { id: "0202", src: "0202.mp4", type: "positive" },
    { id: "0204", src: "0204.mp4", type: "positive" },
    { id: "0228", src: "0228.mp4", type: "positive" },
    { id: "0235", src: "0235.mp4", type: "positive" },
    { id: "0252", src: "0252.mp4", type: "positive" },
    { id: "0329", src: "0329.mp4", type: "positive" },
    { id: "0339", src: "0339.mp4", type: "positive" },
    { id: "0344", src: "0344.mp4", type: "positive" },
    { id: "0348", src: "0348.mp4", type: "positive" },
    { id: "0360", src: "0360.mp4", type: "positive" },
    { id: "0369", src: "0369.mp4", type: "positive" },
    { id: "0402", src: "0402.mp4", type: "positive" },
    { id: "0414", src: "0414.mp4", type: "positive" },
    { id: "0458", src: "0458.mp4", type: "positive" },
    { id: "0479", src: "0479.mp4", type: "positive" },
    { id: "0492", src: "0492.mp4", type: "positive" },
    { id: "0519", src: "0519.mp4", type: "positive" },
    { id: "0531", src: "0531.mp4", type: "positive" },
    { id: "0537", src: "0537.mp4", type: "positive" },
    { id: "0559", src: "0559.mp4", type: "positive" },
    { id: "0563", src: "0563.mp4", type: "positive" },
    { id: "0573", src: "0573.mp4", type: "positive" },
    { id: "0577", src: "0577.mp4", type: "positive" },
    { id: "0590", src: "0590.mp4", type: "positive" },
    { id: "0615", src: "0615.mp4", type: "positive" },
    { id: "0646", src: "0646.mp4", type: "positive" },
    { id: "0659", src: "0659.mp4", type: "positive" },
    { id: "0671", src: "0671.mp4", type: "positive" },
    { id: "0702", src: "0702.mp4", type: "positive" },
    { id: "0713", src: "0713.mp4", type: "positive" },
    { id: "0749", src: "0749.mp4", type: "positive" },
    { id: "0767", src: "0767.mp4", type: "positive" },
    { id: "0781", src: "0781.mp4", type: "positive" },
    { id: "0802", src: "0802.mp4", type: "positive" },
    { id: "0805", src: "0805.mp4", type: "positive" },
    { id: "0809", src: "0809.mp4", type: "positive" },
    { id: "0843", src: "0843.mp4", type: "positive" },
    { id: "0846", src: "0846.mp4", type: "positive" },
    { id: "0879", src: "0879.mp4", type: "positive" },
    { id: "0897", src: "0897.mp4", type: "positive" },
    { id: "0913", src: "0913.mp4", type: "positive" },
    { id: "0942", src: "0942.mp4", type: "positive" },
    { id: "0967", src: "0967.mp4", type: "positive" },
    { id: "0981", src: "0981.mp4", type: "positive" },
    { id: "0998", src: "0998.mp4", type: "positive" },
    { id: "1004", src: "1004.mp4", type: "positive" },
    { id: "1011", src: "1011.mp4", type: "positive" },
    { id: "1016", src: "1016.mp4", type: "positive" },
    { id: "1019", src: "1019.mp4", type: "positive" },
    { id: "1026", src: "1026.mp4", type: "positive" },
    { id: "1049", src: "1049.mp4", type: "positive" },
    { id: "1074", src: "1074.mp4", type: "positive" },
    { id: "1080", src: "1080.mp4", type: "positive" },
    { id: "1088", src: "1088.mp4", type: "positive" },
    { id: "1117", src: "1117.mp4", type: "positive" },
    { id: "1124", src: "1124.mp4", type: "positive" },
    { id: "1140", src: "1140.mp4", type: "positive" },
    { id: "1158", src: "1158.mp4", type: "positive" },
    { id: "1165", src: "1165.mp4", type: "positive" },
    { id: "1169", src: "1169.mp4", type: "positive" },
    { id: "1185", src: "1185.mp4", type: "positive" },
    { id: "1207", src: "1207.mp4", type: "positive" },
    { id: "1221", src: "1221.mp4", type: "positive" },
    { id: "1227", src: "1227.mp4", type: "positive" },
    { id: "1246", src: "1246.mp4", type: "positive" },
    { id: "1251", src: "1251.mp4", type: "positive" },
    { id: "1260", src: "1260.mp4", type: "positive" },
    { id: "1275", src: "1275.mp4", type: "positive" },
    { id: "1279", src: "1279.mp4", type: "positive" },
    { id: "1283", src: "1283.mp4", type: "positive" },
    { id: "1300", src: "1300.mp4", type: "positive" },
    { id: "1307", src: "1307.mp4", type: "positive" },
    { id: "1316", src: "1316.mp4", type: "positive" },
    { id: "1335", src: "1335.mp4", type: "positive" },
    { id: "1340", src: "1340.mp4", type: "positive" },
    { id: "1351", src: "1351.mp4", type: "positive" },
    { id: "1372", src: "1372.mp4", type: "positive" },
    { id: "1377", src: "1377.mp4", type: "positive" },
    { id: "1386", src: "1386.mp4", type: "positive" },
    { id: "1394", src: "1394.mp4", type: "positive" },
    { id: "1406", src: "1406.mp4", type: "positive" },
    { id: "1413", src: "1413.mp4", type: "positive" },
    { id: "1418", src: "1418.mp4", type: "positive" },
    { id: "1434", src: "1434.mp4", type: "positive" },
    { id: "1441", src: "1441.mp4", type: "positive" },
    { id: "1447", src: "1447.mp4", type: "positive" },
    { id: "1453", src: "1453.mp4", type: "positive" },
    { id: "1467", src: "1467.mp4", type: "positive" },
    { id: "1474", src: "1474.mp4", type: "positive" },
    { id: "1488", src: "1488.mp4", type: "positive" },
    { id: "1493", src: "1493.mp4", type: "positive" },
    { id: "1502", src: "1502.mp4", type: "positive" },
    { id: "1507", src: "1507.mp4", type: "positive" },
    { id: "1515", src: "1515.mp4", type: "positive" },
    { id: "1521", src: "1521.mp4", type: "positive" },
    { id: "1526", src: "1526.mp4", type: "positive" },
    { id: "1534", src: "1534.mp4", type: "positive" },
    { id: "1541", src: "1541.mp4", type: "positive" },
    { id: "1550", src: "1550.mp4", type: "positive" },
    { id: "1555", src: "1555.mp4", type: "positive" },
    { id: "1560", src: "1560.mp4", type: "positive" },
    { id: "1569", src: "1569.mp4", type: "positive" },
    { id: "1574", src: "1574.mp4", type: "positive" },
    { id: "1582", src: "1582.mp4", type: "positive" },
    { id: "1589", src: "1589.mp4", type: "positive" },
    { id: "1595", src: "1595.mp4", type: "positive" },
    { id: "1601", src: "1601.mp4", type: "positive" },
    { id: "1608", src: "1608.mp4", type: "positive" },
    { id: "1615", src: "1615.mp4", type: "positive" },
    { id: "1622", src: "1622.mp4", type: "positive" },
    { id: "1628", src: "1628.mp4", type: "positive" },
    { id: "1636", src: "1636.mp4", type: "positive" },
    { id: "1643", src: "1643.mp4", type: "positive" },
    { id: "1651", src: "1651.mp4", type: "positive" },
    { id: "1656", src: "1656.mp4", type: "positive" },
    { id: "1663", src: "1663.mp4", type: "positive" },
    { id: "1671", src: "1671.mp4", type: "positive" },
    { id: "1677", src: "1677.mp4", type: "positive" },
    { id: "1682", src: "1682.mp4", type: "positive" },
    { id: "1690", src: "1690.mp4", type: "positive" },
    { id: "1697", src: "1697.mp4", type: "positive" },
    { id: "1703", src: "1703.mp4", type: "positive" },
    { id: "1709", src: "1709.mp4", type: "positive" },
    { id: "1717", src: "1717.mp4", type: "positive" },
    { id: "1722", src: "1722.mp4", type: "positive" },
    { id: "1730", src: "1730.mp4", type: "positive" },
    { id: "1736", src: "1736.mp4", type: "positive" },
    { id: "1742", src: "1742.mp4", type: "positive" },
    { id: "1750", src: "1750.mp4", type: "positive" },
    { id: "1756", src: "1756.mp4", type: "positive" },
    { id: "1762", src: "1762.mp4", type: "positive" },
    { id: "1768", src: "1768.mp4", type: "positive" },
    { id: "1775", src: "1775.mp4", type: "positive" },
    { id: "1782", src: "1782.mp4", type: "positive" },
    { id: "1788", src: "1788.mp4", type: "positive" },
    { id: "1794", src: "1794.mp4", type: "positive" },
    { id: "1801", src: "1801.mp4", type: "positive" },
    { id: "1808", src: "1808.mp4", type: "positive" },
    { id: "1814", src: "1814.mp4", type: "positive" },
    { id: "1820", src: "1820.mp4", type: "positive" },
    { id: "1827", src: "1827.mp4", type: "positive" },
    { id: "1834", src: "1834.mp4", type: "positive" },
    { id: "1840", src: "1840.mp4", type: "positive" },
    { id: "1846", src: "1846.mp4", type: "positive" },
    { id: "1853", src: "1853.mp4", type: "positive" },
    { id: "1859", src: "1859.mp4", type: "positive" },
    { id: "1866", src: "1866.mp4", type: "positive" },
    { id: "1872", src: "1872.mp4", type: "positive" },
    { id: "1878", src: "1878.mp4", type: "positive" },
    { id: "1885", src: "1885.mp4", type: "positive" },
    { id: "1891", src: "1891.mp4", type: "positive" },
    { id: "1897", src: "1897.mp4", type: "positive" },
    { id: "1904", src: "1904.mp4", type: "positive" },
    { id: "1910", src: "1910.mp4", type: "positive" },
    { id: "1917", src: "1917.mp4", type: "positive" },
    { id: "1923", src: "1923.mp4", type: "positive" },
    { id: "1930", src: "1930.mp4", type: "positive" },
    { id: "1936", src: "1936.mp4", type: "positive" },
    { id: "1942", src: "1942.mp4", type: "positive" },
    { id: "1949", src: "1949.mp4", type: "positive" },
    { id: "1955", src: "1955.mp4", type: "positive" },
    { id: "1961", src: "1961.mp4", type: "positive" },
    { id: "1968", src: "1968.mp4", type: "positive" },
    { id: "1974", src: "1974.mp4", type: "positive" },
    { id: "1980", src: "1980.mp4", type: "positive" },
    { id: "1987", src: "1987.mp4", type: "positive" },
    { id: "1993", src: "1993.mp4", type: "positive" },
    { id: "1999", src: "1999.mp4", type: "positive" },
    { id: "2000", src: "2000.mp4", type: "positive" }
]
  


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