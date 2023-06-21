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
    { src: "0124.mp4", type: "Anger" },
    // { src: "0252.mp4", type: "Anger" },
    // { src: "0414.mp4", type: "Anger" },
    // { src: "0595.mp4", type: "Anger" },
    // { src: "0681.mp4", type: "Anger" },
    // { src: "0948.mp4", type: "Anger" },
    // { src: "1229.mp4", type: "Anger" },
    // { src: "1844.mp4", type: "Anger" },
    // { src: "2049.mp4", type: "Anger" },
    // { src: "2066.mp4", type: "Anger" },
    { src: "0090.mp4", type: "Calmness" },
    // { src: "0339.mp4", type: "Calmness" },
    // { src: "0493.mp4", type: "Calmness" },
    // { src: "0553.mp4", type: "Calmness" },
    // { src: "0580.mp4", type: "Calmness" },
    // { src: "0645.mp4", type: "Calmness" },
    // { src: "0671.mp4", type: "Calmness" },
    // { src: "1216.mp4", type: "Calmness" },
    // { src: "1760.mp4", type: "Calmness" },
    // { src: "1835.mp4", type: "Calmness" },
    { src: "0110.mp4", type: "Craving" },
    // { src: "0458.mp4", type: "Craving" },
    // { src: "0780.mp4", type: "Craving" },
    // { src: "0883.mp4", type: "Craving" },
    // { src: "0898.mp4", type: "Craving" },
    // { src: "0919.mp4", type: "Craving" },
    // { src: "1449.mp4", type: "Craving" },
    // { src: "1498.mp4", type: "Craving" },
    // { src: "1740.mp4", type: "Craving" },
    // { src: "1826.mp4", type: "Craving" },
    { src: "0187.mp4", type: "Disgust" },
    // { src: "0235.mp4", type: "Disgust" },
    // { src: "0355.mp4", type: "Disgust" },
    // { src: "0713.mp4", type: "Disgust" },
    // { src: "0876.mp4", type: "Disgust" },
    // { src: "0929.mp4", type: "Disgust" },
    // { src: "1194.mp4", type: "Disgust" },
    // { src: "1423.mp4", type: "Disgust" },
    // { src: "1907.mp4", type: "Disgust" },
    // { src: "2018.mp4", type: "Disgust" },
    { src: "0041.mp4", type: "Excitement" },
    // { src: "0202.mp4", type: "Excitement" },
    // { src: "0402.mp4", type: "Excitement" },
    // { src: "0546.mp4", type: "Excitement" },
    // { src: "0550.mp4", type: "Excitement" },
    // { src: "0701.mp4", type: "Excitement" },
    // { src: "0970.mp4", type: "Excitement" },
    // { src: "1297.mp4", type: "Excitement" },
    // { src: "1537.mp4", type: "Excitement" },
    // { src: "1717.mp4", type: "Excitement" },
    // { src: "2021.mp4", type: "Excitement" },
    { src: "0379.mp4", type: "Fear" },
    // { src: "0489.mp4", type: "Fear" },
    // { src: "0706.mp4", type: "Fear" },
    // { src: "1202.mp4", type: "Fear" },
    // { src: "1361.mp4", type: "Fear" },
    // { src: "1375.mp4", type: "Fear" },
    // { src: "1726.mp4", type: "Fear" },
    // { src: "1780.mp4", type: "Fear" },
    // { src: "1832.mp4", type: "Fear" },
    // { src: "1964.mp4", type: "Fear" },
    // { src: "2091.mp4", type: "Fear" },
    { src: "0723.mp4", type: "Interest" },
    // { src: "0735.mp4", type: "Interest" },
    // { src: "1066.mp4", type: "Interest" },
    // { src: "1068.mp4", type: "Interest" },
    // { src: "1265.mp4", type: "Interest" },
    // { src: "1301.mp4", type: "Interest" },
    // { src: "1619.mp4", type: "Interest" },
    // { src: "1624.mp4", type: "Interest" },
    // { src: "1641.mp4", type: "Interest" },
    // { src: "1664.mp4", type: "Interest" },
    // { src: "1945.mp4", type: "Interest" },
    { src: "0035.mp4", type: "Joy" },
    // { src: "0087.mp4", type: "Joy" },
    // { src: "0126.mp4", type: "Joy" },
    // { src: "0597.mp4", type: "Joy" },
    // { src: "0605.mp4", type: "Joy" },
    // { src: "0666.mp4", type: "Joy" },
    // { src: "0915.mp4", type: "Joy" },
    // { src: "1032.mp4", type: "Joy" },
    // { src: "1034.mp4", type: "Joy" },
    // { src: "1093.mp4", type: "Joy" },
    // { src: "1245.mp4", type: "Joy" },
    // { src: "2013.mp4", type: "Joy" },
    { src: "0204.mp4", type: "Romance" },
    // { src: "0369.mp4", type: "Romance" },
    // { src: "0773.mp4", type: "Romance" },
    // { src: "1074.mp4", type: "Romance" },
    // { src: "1295.mp4", type: "Romance" },
    // { src: "1407.mp4", type: "Romance" },
    // { src: "1424.mp4", type: "Romance" },
    // { src: "1551.mp4", type: "Romance" },
    // { src: "1911.mp4", type: "Romance" },
    // { src: "1978.mp4", type: "Romance" },
    { src: "0226.mp4", type: "Sadness" } //,
//     { src: "0299.mp4", type: "Sadness" },
//     { src: "0611.mp4", type: "Sadness" },
//     { src: "0756.mp4", type: "Sadness" },
//     { src: "0803.mp4", type: "Sadness" },
//     { src: "0860.mp4", type: "Sadness" },
//     { src: "0975.mp4", type: "Sadness" },
//     { src: "1164.mp4", type: "Sadness" },
//     { src: "1485.mp4", type: "Sadness" },
//     { src: "1959.mp4", type: "Sadness" },
];

  
  for(let i = 0; i < videos.length; i++) {
    videos[i].id = i.toString();
}



let participantChoices = [];
let startTime; 

function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}





// Response variable 1: Interest
function createFeedbackForm(videoId, onSubmit) {
    feedbackContainer.innerHTML = '';

    const question = document.createElement("p");
    question.textContent = "How interesting is this?";

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

// //  Response variable 2: Emotion circumplex
// function createEmotionGraph(videoId, onSubmit) {
//     const emotionGraphContainer = document.getElementById('emotionGraphContainer');
//     const emotionSubmit = document.getElementById('emotionSubmit');
//     const emotionGraph = document.getElementById('emotionGraph');

//     emotionSubmit.disabled = true; // Disable the submit button initially

//     // Clear any existing dots from the graph
//     const existingDots = emotionGraph.getElementsByClassName('emotion-dot');
//     while (existingDots[0]) {
//         existingDots[0].parentNode.removeChild(existingDots[0]);
//     }

//     // Create the x-axis line and add it to the SVG
//     const xAxisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
//     xAxisLine.setAttribute("x1", 30);
//     xAxisLine.setAttribute("y1", 200);
//     xAxisLine.setAttribute("x2", 370);
//     xAxisLine.setAttribute("y2", 200);
//     xAxisLine.setAttribute("stroke", "black");
//     xAxisLine.setAttribute("stroke-width", 1);
//     emotionGraph.appendChild(xAxisLine);

//     // Create the y-axis line and add it to the SVG
//     const yAxisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
//     yAxisLine.setAttribute("x1", 200);
//     yAxisLine.setAttribute("y1", 30);
//     yAxisLine.setAttribute("x2", 200);
//     yAxisLine.setAttribute("y2", 370);
//     yAxisLine.setAttribute("stroke", "black");
//     yAxisLine.setAttribute("stroke-width", 1);
//     emotionGraph.appendChild(yAxisLine);




//     // Create a function for creating text elements
//     function createText(x, y, text) {
//         const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
//         textElement.setAttribute("x", x);
//         textElement.setAttribute("y", y);
//         textElement.textContent = text;
//         textElement.style.fontSize = "12px";
//         textElement.style.fontStyle = "italic";
//         textElement.setAttribute("fill", "#808080");
//         return textElement;
//     }

//     // Function to create line
//     function createLine(x1, y1, x2, y2) {
//         const lineElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
//         lineElement.setAttribute("x1", x1);
//         lineElement.setAttribute("y1", y1);
//         lineElement.setAttribute("x2", x2);
//         lineElement.setAttribute("y2", y2);
//         lineElement.setAttribute("stroke", "#D3D3D3"); // Light Grey Color
//         lineElement.setAttribute("stroke-width", 1);
//         return lineElement;
//     }




//     // Mapping of emotions to coordinates
//     const emotions = {
//         "Anger": [25, 90],
//         "Fear": [10, 83],
//        // "Horrified": [10, 73], //don't include?? 
//         "Disgust": [10, 62],
//         "Sadness": [10, 30],
//         //"Fatigued": [35, 10],
//         "Calmness": [63, 10],
//         //"Content": [75, 40],
//         "Joy": [90, 65],
//         "Affection": [85, 55], // Love and affection? or just Affection? 
//         "Awe": [70, 30],
//         "Excitement": [85, 80],
//         //"Elated": [85, 80],
//         "Amusement": [60, 90]
//     };


//     //Adoration, Amusement, Excitement, Joy, Romance, Craving, Calmness, Awe, Interest, Anger, Sadness, Disgust, Fear, Horror



//     // Add the emotions to the SVG
//     for (let emotion in emotions) {
//         const [xPercent, yPercent] = emotions[emotion];
//         const x = 4 * xPercent;
//         const y = 400 - (4 * yPercent);

//         // Create and add the line to the SVG before the text
//         const lineElement = createLine(x, y, 200, 200);
//         emotionGraph.appendChild(lineElement);

//         const textElement = createText(x, y, emotion);
//         emotionGraph.appendChild(textElement);
//     }

//             // Add "neutral" label to the midpoint (200, 200)
//             function createText2(x, y, text) {
//                 const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
//                 textElement.setAttribute("x", x);
//                 textElement.setAttribute("y", y);
//                 textElement.textContent = text;
//                 textElement.style.fontSize = "20px";
//                 textElement.style.fontWeight = "bold";
//                 textElement.setAttribute("fill", "#000000");
//                 return textElement;
//             }
    
    
//             const neutralLabel = createText2(173, 205, "Neutral");
//             emotionGraph.appendChild(neutralLabel);
    

//     let dot; // Declare the dot variable

//     const createDot = (e) => {
//         // Create the dot and add it to the SVG
//         dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         dot.setAttribute("cx", e.offsetX);
//         dot.setAttribute("cy", e.offsetY);
//         dot.setAttribute("r", 10);
//         dot.setAttribute("fill", "red");
//         dot.setAttribute("class", "emotion-dot");
//         emotionGraph.appendChild(dot);

//         // Remove the click event listener after the first click
//         emotionGraph.removeEventListener('click', createDot);
//         emotionSubmit.disabled = false; // Enable the submit button as the dot has been created
//     }

//     emotionGraph.addEventListener('click', createDot);

//     // Dragging state
//     let dragging = false;
//     let dotMoved = false;

//     const startDragging = (e) => {
//         // Ensure the drag only begins if the mouse is over the dot
//         if (e.target === dot) {
//             dragging = true;
//         }
//     };

//     const stopDragging = (e) => {
//         dragging = false;
//     };

//     const dragDot = (e) => {
//         if (dragging && dot) {
//             dotMoved = true;
//             let x = e.offsetX;
//             let y = e.offsetY;
    
//             // Boundaries for SVG (400 x 400)
//             if (x < 30) x = 30;
//             if (x > 370) x = 370;
//             if (y < 30) y = 30;
//             if (y > 370) y = 370;
    
//             dot.setAttribute("cx", x);
//             dot.setAttribute("cy", y);
//         }
//     };
    

//     emotionGraph.addEventListener('mousedown', startDragging);
//     emotionGraph.addEventListener('mousemove', dragDot);
//     emotionGraph.addEventListener('mouseup', stopDragging);
//     emotionGraph.addEventListener('mouseleave', stopDragging);

//     // Handle submit button click
//     emotionSubmit.onclick = () => {
//         emotionGraphContainer.style.display = "none";
//         const valence = dot.getAttribute("cx");
//         const arousal = 400 - dot.getAttribute("cy");

//         onSubmit(valence, arousal);
//     };

//     emotionGraphContainer.style.display = "block";
// } 


// Response variable: List of emotions (erase "2" in name and mute previous to work)
function createEmotionGraph(videoId, onSubmit) {
    const emotionGraphContainer = document.getElementById('emotionGraphContainer');
    emotionGraphContainer.style.display = "flex";  // Change layout to Flexbox
    emotionGraphContainer.style.flexDirection = "row";
    emotionGraphContainer.style.justifyContent = "space-around";
    

    const emotionSubmit = document.createElement("button");
    emotionSubmit.id = 'emotionSubmit';
    emotionSubmit.textContent = 'Submit';
    emotionSubmit.disabled = true; // Disable the submit button initially

    // Mapping of emotions to valence categories
    const emotions = {
        "Positive": ["Amusement", "Excitement", "Joy", "Heartwarming", "Love"],
        "Other": ["Craving", "Peacefulness", "Interest"],
        "Negative": ["Anger", "Sadness", "Disgust", "Fear"]
    };

    // Function to create an emotion item in the list
    function createEmotionItem(emotion) {
        const emotionItem = document.createElement("li");
        emotionItem.textContent = emotion;
        emotionItem.style.cursor = "pointer"; // Change cursor to pointer when hovering over the item

        // Add a click event listener to the item
        emotionItem.addEventListener("click", function() {
            if (emotionItem.classList.contains("selected")) {
                emotionItem.classList.remove("selected"); // Deselect the item if it was already selected
            } else {
                emotionItem.classList.add("selected"); // Select the item if it wasn't selected
            }

            // Check if any emotions are selected and enable/disable the submit button accordingly
            const selectedEmotions = document.getElementsByClassName('selected');
            emotionSubmit.disabled = selectedEmotions.length === 0;
        });

        return emotionItem;
    }

    // Clear any existing emotions from the container
    while (emotionGraphContainer.firstChild) {
        emotionGraphContainer.firstChild.remove();
    }

    // Create the list of emotions
    for (let valence in emotions) {
        const valenceContainer = document.createElement("div");  // Container for each valence category
        valenceContainer.style.flex = "1";  // Distribute space equally between the categories
        valenceContainer.style.margin = "10px";  // Add some margin around each category
        valenceContainer.style.display = "flex";  // Use Flexbox for the layout
        valenceContainer.style.flexDirection = "column";  // Stack the items vertically
        valenceContainer.style.alignItems = "center";  // Center the items

        const valenceHeader = document.createElement("h3");
        valenceHeader.textContent = valence;
        valenceContainer.appendChild(valenceHeader);

        const emotionList = document.createElement("ul");
        for (let emotion of emotions[valence]) {
            const emotionItem = createEmotionItem(emotion);
            emotionList.appendChild(emotionItem);
        }
        valenceContainer.appendChild(emotionList);
        emotionGraphContainer.appendChild(valenceContainer);
    }

    emotionGraphContainer.appendChild(emotionSubmit); // Add submit button to container

    // Handle submit button click
    emotionSubmit.onclick = () => {
        const selectedEmotions = document.getElementsByClassName('selected');
        let emotionsArray = [];
        for (let i = 0; i < selectedEmotions.length; i++) {
            emotionsArray.push(selectedEmotions[i].textContent);
        }
        emotionGraphContainer.style.display = "none";
        onSubmit(emotionsArray);
    };

    emotionGraphContainer.style.display = "block";
}

// Response variable 3: Strategies
function strategies(callback) {
    let strategiesContainer = document.getElementById('strategiesContainer');
    if (!strategiesContainer) {
        console.error('strategiesContainer is not defined');
        return;
    }

    strategiesContainer.innerHTML = '';
    strategiesContainer.style.padding = "20px"; // Add more space around the container

    const strategiesTitle = document.createElement("h2");
    strategiesTitle.textContent = "Which strategies did you use?";
    strategiesTitle.style.fontWeight = "bold";
    strategiesTitle.style.textAlign = "center";
    strategiesTitle.style.marginBottom = "20px"; // Add more space below the title

    strategiesContainer.appendChild(strategiesTitle);

    const strategiesOptions = ["Stimulus selection", "Stimulus modification", "Reappraisal", "Distraction", "Acceptance", "Suppression"];
    let strategiesData = {};

    for (let option of strategiesOptions) {
        let optionContainer = document.createElement("div");
        optionContainer.style.display = "flex";
        optionContainer.style.alignItems = "center";
        optionContainer.style.cursor = "pointer";
        optionContainer.style.margin = "20px 0"; // Increase space around each option

        optionContainer.addEventListener('click', function() {
            try {
                let checkbox = this.querySelector('input[type="checkbox"]');
                let customCheckbox = this.querySelector('span');
                strategiesData[option] = !checkbox.checked;
                checkbox.checked = !checkbox.checked;
                // Update the color of the checkbox when checked
                customCheckbox.style.background = checkbox.checked ? "#000" : "#fff";
            } catch (error) {
                console.error('Error handling option click:', error);
            }
        });

        let checkboxContainer = document.createElement("div");
        checkboxContainer.style.display = "flex";
        checkboxContainer.style.alignItems = "center";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = option;
        checkbox.style.display = "none"; // Hide the original checkbox

        let label = document.createElement("label");
        label.htmlFor = option;
        label.innerText = option;
        label.style.fontSize = "20px"; // Increase font size
        label.style.fontWeight = "500"; // Increase font weight
        label.style.marginLeft = "10px"; // Add space between the checkbox and the text

        // Create a new checkbox using a span element
        let customCheckbox = document.createElement("span");
        customCheckbox.style.display = "inline-block";
        customCheckbox.style.width = "20px"; // Width of the custom checkbox
        customCheckbox.style.height = "20px"; // Height of the custom checkbox
        customCheckbox.style.background = "#fff"; // Color of the checkbox when not checked
        customCheckbox.style.border = "2px solid #000"; // Border of the checkbox
        customCheckbox.style.boxSizing = "border-box"; // Make sure the border is included in the checkbox size
        customCheckbox.style.marginRight = "10px"; // Add space between the checkbox and the text

        checkbox.addEventListener('change', function() {
            try {
                strategiesData[option] = this.checked;
                // Update the color of the checkbox when checked
                customCheckbox.style.background = this.checked ? "#000" : "#fff";
            } catch (error) {
                console.error('Error handling checkbox state change:', error);
            }
        });

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(customCheckbox);

        optionContainer.appendChild(checkboxContainer);
        optionContainer.appendChild(label);

        strategiesContainer.appendChild(optionContainer);
    }

    const strategiesSubmitButton = document.createElement("button");
    strategiesSubmitButton.innerText = "Submit";
    strategiesSubmitButton.disabled = false;
    strategiesSubmitButton.style.display = "block";
    strategiesSubmitButton.style.margin = "20px auto";

    strategiesSubmitButton.addEventListener('click', () => {
        if (typeof callback === 'function') {
            callback(strategiesData);
        } else {
            console.error('callback is not a function');
        }
        strategiesSubmitButton.disabled = true;
        strategiesContainer.style.display = "none";
    });

    strategiesContainer.appendChild(strategiesSubmitButton);
    strategiesContainer.style.visibility = "visible";
    strategiesContainer.style.display = "block";
}







// Instructions
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

//Draw random video
function playRandomVideo(excludeVideoId, videos) {
    let remainingVideos = videos.filter(video => video.id !== excludeVideoId);
    let randomVideoIndex = Math.floor(Math.random() * remainingVideos.length);
    return remainingVideos[randomVideoIndex];
}

//Video Pilot
// function experimentalSet() {
//     clearButtons();
//     const shuffledVideos = shuffleArray([...videos]);
//     let currentVideoIndex = 0;

//     function playVideoUntil3Seconds(onComplete) {
//         let startTime = Date.now();
//         let cumulativeTime = 0;
//         videoPlayer.play();

//         videoPlayer.onended = videoPlayer.onpause = () => {
//             cumulativeTime += Date.now() - startTime; // add time of current play to cumulativeTime
//             if (cumulativeTime < 3000) {
//                 // check if cumulativeTime is less than 3 seconds
//                 startTime = Date.now(); // reset startTime for the next play
//                 videoPlayer.play(); // immediately replay video
//             } else {
//                 videoPlayer.onended = videoPlayer.onpause = null; // remove the listeners once done
//                 onComplete();
//             }
//         };
//     }

//     function playNextVideo() {
//         if (currentVideoIndex < shuffledVideos.length) {
//             const video = shuffledVideos[currentVideoIndex];
//             videoPlayer.src = video.src;
//             videoPlayer.onloadedmetadata = () => {
//                 videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek to 60% of the video's duration
//                 videoPlayer.onseeked = () => {
//                     videoPlayer.onseeked = null;
//                     videoPlayer.pause(); // Pause the video after seeking
//                     videoPlayer.style.display = "block"; // Show the video still for 3 seconds
    
//                     let watchButton = createButton("Play", (reactionTime) => {
//                         watchButton.style.display = "none";
    
//                         videoPlayer.currentTime = 0; // Reset the video to the start
//                         playVideoUntil3Seconds(() => {
//                             videoPlayer.style.display = "none";
//                             clearButtons();
    
//                             // Change the text "How do you feel?" to "How do you think this video will make you feel?"
//                             const emotionGraphContainer = document.getElementById("emotionGraphContainer");
//                             const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
//                             emotionGraphTitle.textContent = "How do you feel?";
    
//                             // Create the feedback form
//                             createFeedbackForm(video.id, (rating) => {
//                                 feedbackContainer.style.display = "none";
//                                 createEmotionGraph(video.id, (valence, arousal) => {
//                                     showFixationCross(playNextVideo);
    
//                                     participantChoices.push({
//                                         part: "Experimental_Choice",
//                                         decision: "watch",
//                                         videoId: video.id,
//                                         reactionTime: reactionTime,
//                                         rating: rating,
//                                         valence: valence,
//                                         arousal: arousal
//                                     });
//                                 });
//                             });
//                         });
//                     });
    
//                     clearButtons();
//                     addButton(watchButton);
    
//                     // Increment the video index after initializing this video
//                     currentVideoIndex++;
//                 };
//             };
//         } else {
//             instructions3();
//         }
//     }
    
//     playNextVideo();
    
// }

function experimentalSet() {
    clearButtons();
    const shuffledVideos = shuffleArray([...videos]);
    let currentVideoIndex = 0;
    const dimOverlay = document.getElementById('dimOverlay');
    let dimnessLevel = 0.5;  // initial dimness level

    function setDimness(level) {
        dimOverlay.style.backgroundColor = `rgba(0, 0, 0, ${level})`;
    }

    function playVideoUntil3Seconds(onComplete) {
        let startTime = Date.now();
        let cumulativeTime = 0;
        videoPlayer.play();

        const adjustDimness = (event) => {
            if (event.key === 'f') {
                dimnessLevel = Math.min(1, dimnessLevel + 0.15);
            } else if (event.key === 'j') {
                dimnessLevel = Math.max(0, dimnessLevel - 0.15);
            }
            setDimness(dimnessLevel);
        };

        document.body.focus();

        // Attach the event listener
        document.addEventListener('keyup', adjustDimness);

        videoPlayer.onended = videoPlayer.onpause = () => {
            cumulativeTime += Date.now() - startTime; // add time of current play to cumulativeTime
            if (cumulativeTime < 3000) {
                // check if cumulativeTime is less than 3 seconds
                startTime = Date.now(); // reset startTime for the next play
                videoPlayer.play(); // immediately replay video
            } else {
                videoPlayer.onended = videoPlayer.onpause = null; // remove the listeners once done
                document.removeEventListener('keyup', adjustDimness); // Remove the event listener when done
                dimOverlay.style.display = 'none'; // hide dimOverlay when video stops
                onComplete();
            }
        };
    }

    function playNextVideo() {
        if (currentVideoIndex < shuffledVideos.length) {
            dimnessLevel = 0.5;  // Reset dimness level
            setDimness(dimnessLevel);  // Set initial dimness
            const video = shuffledVideos[currentVideoIndex];
            videoPlayer.src = video.src;
            videoPlayer.onloadedmetadata = () => {
                videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek to 60% of the video's duration
                videoPlayer.onseeked = () => {
                    videoPlayer.onseeked = null;
                    videoPlayer.pause(); // Pause the video after seeking
                    videoPlayer.style.display = "block"; // Show the video still for 3 seconds

                    dimOverlay.style.width = videoPlayer.offsetWidth + 'px';
                    dimOverlay.style.height = videoPlayer.offsetHeight + 'px';
                    dimOverlay.style.display = 'block'; // Display dimOverlay
                    setDimness(dimnessLevel);  // Set initial dimness

                    setTimeout(() => {
                        videoPlayer.style.display = "none"; // Hide the video for emotion graph
                        dimOverlay.style.display = 'none';

                        // Change the text "How do you feel?" to "How do you think this video will make you feel?"
                        const emotionGraphContainer = document.getElementById("emotionGraphContainer");
                        const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
                        emotionGraphTitle.textContent = "What do you think this video will make you feel?";

                        createEmotionGraph(video.id, (initialValence, initialArousal) => {
                            createFeedbackForm(video.id, (rating) => {
                                feedbackContainer.style.display = "none";
                                // Show the video again for choice
                                videoPlayer.style.display = "block";
                                dimOverlay.style.display = 'block';
                                let watchButton;
                                let skipButton;

    
                            const buttonTimeout = setTimeout(() => {
                                const randomButton = Math.random() < 0.5 ? watchButton : skipButton;
                                randomButton.click();
                            }, 7000);

                            watchButton = createButton("Choose", (reactionTime) => {
                                clearTimeout(buttonTimeout);
                                watchButton.style.display = "none";
                                skipButton.style.display = "none";

                                videoPlayer.currentTime = 0; // Reset the video to the start

                                playVideoUntil3Seconds(() => {
                                    videoPlayer.style.display = "none";
                                    clearButtons();

                                    // Change the text "How do you feel?" to "How do you feel now?"
                                    const emotionGraphContainer = document.getElementById("emotionGraphContainer");
                                    const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
                                    emotionGraphTitle.textContent = "What do you feel now?";

                                    createEmotionGraph(video.id, (valence, arousal) => {
                                        strategies((selectedStrategies) => {
                                            showFixationCross(playNextVideo);

                                            participantChoices.push({
                                                part: "Experimental_Choice",
                                                decision: "watch",
                                                videoId: video.id,
                                                reactionTime: reactionTime,
                                                initialValence: initialValence,
                                                initialArousal: initialArousal,
                                                valence: valence, 
                                                arousal: arousal,
                                                strategies: selectedStrategies
                                            });
                                        });
                                    });
                                    currentVideoIndex++;
                                });
                            });

                            skipButton = createButton("Avoid", (reactionTime) => {
                                clearTimeout(buttonTimeout);
                                watchButton.style.display = "none";
                                skipButton.style.display = "none";

                                const randomVideo = playRandomVideo(video.id, videos);
        
                                videoPlayer.src = randomVideo.src;
                                videoPlayer.onloadedmetadata = () => {
                                    videoPlayer.currentTime = 0; // Reset the video to the start
                                    videoPlayer.oncanplay = () => {
                                        videoPlayer.oncanplay = null;
                                        playVideoUntil3Seconds(() => {
                                            videoPlayer.style.display = "none";
                                            clearButtons();
        
                                            // Change the text "How do you feel?" to "How do you feel now?"
                                            const emotionGraphContainer = document.getElementById("emotionGraphContainer");
                                            const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
                                            emotionGraphTitle.textContent = "What do you feel now?";

                                            createEmotionGraph(video.id, (valence, arousal) => {
                                                strategies((selectedStrategies) => {
                                                    showFixationCross(playNextVideo);
        
                                                    participantChoices.push({
                                                        part: "Experimental_Choice",
                                                        decision: "skip",
                                                        videoId: video.id,
                                                        reactionTime: reactionTime,
                                                        forcedVideoId: randomVideo.id,
                                                        initialValence: initialValence,
                                                        initialArousal: initialArousal,
                                                        valence: valence, 
                                                        arousal: arousal,
                                                        strategies: selectedStrategies
                                                    });
                                                });
                                            });
                                        });
                                    };
                                    setTimeout(() => {
                                        dimOverlay.style.width = videoPlayer.offsetWidth + 'px';
                                        dimOverlay.style.height = videoPlayer.offsetHeight + 'px';
                                        setDimness(dimnessLevel);  // Set initial dimness
                                    }, 100);
                                };
                                currentVideoIndex++;
                            });
        
                            clearButtons();
                            addButton(watchButton);
                            addButton(skipButton);
                        });
                    });
                }, 3000);
            };
        };
    } else {
        instructions3();
    }
}

setDimness(dimnessLevel);  // Set initial dimness
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
    const header = ["part", "decision", "videoId", "reactionTime", "forcedVideoId", "rating", "valence", "arousal", "initialValence", "initialArousal"]; //initialValence and initialArousal if new flow
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

// or in short:         git add . && git commit -m "update" && git push

// data: https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#  --> console home --> S3 service --> emotionregulation bucket --> same name folder --> files 