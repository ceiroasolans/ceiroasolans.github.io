//Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");
const form = document.getElementById('movie-form');
// Create an empty array to store selected movie titles and IDs
const favoriteMovies = Array.from({ length: 5 });
const selectedMovieIdList = Array.from({ length: 5 });

//The goal is to have participants choose, out of a list of x movies for every emotion, the one that made them the happiest. Then, use this choice to show them the corresponding movie clips during the task. 

//const fullSetOfVideos = [
//    { id: "positive1", src: "positive1.mp4", type: "positive" },
//    //{ id: "positive2", src: "positive2.mp4", type: "positive" },
//   //{ id: "positive3", src: "positive3.mp4", type: "positive" },
//    { id: "negative1", src: "negative1.mp4", type: "negative" },
 //   //{ id: "negative2", src: "negative2.mp4", type: "negative" },
 //   //{ id: "negative3", src: "negative3.mp4", type: "negative" },
 //   { id: "positive1", src: "positive1.mp4", type: "positive" },
 //   //{ id: "positive2", src: "positive2.mp4", type: "positive" },
 //   //{ id: "positive3", src: "positive3.mp4", type: "positive" },
  //  { id: "negative1", src: "negative1.mp4", type: "negative" },
 //   //{ id: "negative2", src: "negative2.mp4", type: "negative" },
  //  //{ id: "negative3", src: "negative3.mp4", type: "negative" },
 //   { id: "positive1", src: "positive1.mp4", type: "positive" },
 //   //{ id: "positive2", src: "positive2.mp4", type: "positive" },
 //   //{ id: "positive3", src: "positive3.mp4", type: "positive" },
 //   { id: "negative1", src: "negative1.mp4", type: "negative" },
//    //{ id: "negative2", src: "negative2.mp4", type: "negative" },
 //   //{ id: "negative3", src: "negative3.mp4", type: "negative" },
//];


// // Other
// const videosParticipantX = [
//     select the videos that correspond to Favorite1, Favorite2, etc


//     { id: "positive1", src: "positive1.mp4", type: "positive" },
//     //{ id: "positive2", src: "positive2.mp4", type: "positive" },
//     //{ id: "positive3", src: "positive3.mp4", type: "positive" },
//     { id: "negative1", src: "negative1.mp4", type: "negative" },
//     //{ id: "negative2", src: "negative2.mp4", type: "negative" },
//     //{ id: "negative3", src: "negative3.mp4", type: "negative" },
// ];





// Other
const videos = [
    { id: "positive1", src: "positive1.mp4", type: "positive" },
    //{ id: "positive2", src: "positive2.mp4", type: "positive" },
    //{ id: "positive3", src: "positive3.mp4", type: "positive" },
    { id: "negative1", src: "negative1.mp4", type: "negative" },
    //{ id: "negative2", src: "negative2.mp4", type: "negative" },
    //{ id: "negative3", src: "negative3.mp4", type: "negative" },
];

// const videos_T = [
//     { id: "disgust1", src: "disgust_1_T.mp4", type: "negative" },
//     { id: "disgust2", src: "disgust_2_T.mp4", type: "negative" },
//     { id: "disgust3", src: "disgust_3_T.mp4", type: "negative" },
//     { id: "sad1", src: "sad_1_T.mp4", type: "negative" },
//     { id: "sad2", src: "sad_2_T.mp4", type: "negative" },
//     { id: "sad3", src: "sad_3_T.mp4", type: "negative" },
//     { id: "indifference1", src: "indifference_1_T.mp4", type: "neutral" },
//     { id: "indifference2", src: "indifference_2_T.mp4", type: "neutral" },
//     { id: "indifference3", src: "indifference_3_T.mp4", type: "neutral" },
//     { id: "joy1", src: "satisfaction_1_T.mp4", type: "positive" },
//     { id: "joy2", src: "satisfaction_2_T.mp4", type: "positive" },
//     { id: "joy3", src: "satisfaction_3_T.mp4", type: "positive" },
// ];


// const videos = [
//     { id: "disgust1", src: "disgust_1.mp4", type: "negative" },
//     { id: "disgust2", src: "disgust_2.mp4", type: "negative" },
//     { id: "disgust3", src: "disgust_3.mp4", type: "negative" },
//     { id: "sad1", src: "sad_1.mp4", type: "negative" },
//     { id: "sad2", src: "sad_2.mp4", type: "negative" },
//     { id: "sad3", src: "sad_3.mp4", type: "negative" },
//     { id: "indifference1", src: "indifference_1.mp4", type: "neutral" },
//     { id: "indifference2", src: "indifference_2.mp4", type: "neutral" },
//     { id: "indifference3", src: "indifference_3.mp4", type: "neutral" },
//     { id: "joy1", src: "satisfaction_1.mp4", type: "positive" },
//     { id: "joy2", src: "satisfaction_2.mp4", type: "positive" },
//     { id: "joy3", src: "satisfaction_3.mp4", type: "positive" },
// ];



let participantChoices = [];
let startTime; 

function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}

// Create pre-study questions:
// to have participants choose out of a list of x movies for every emotion, the one that made them the happiest.
// Then use this choice to show them the corresponding movie clips during the task.
// movie lists for each questions
const movies = [
  {id: "joy1",title: "The Godfather",},
  {id: "indifference1",title: "The Godfather",},
  {id: "sad1",title: "The Godfather",},
  {id: "disgust1",title: "The Godfather",},

  {id: "joy2",title: "The Godfather",},
  {id: "indifference2",title: "The Godfather",},
  {id: "sad2",title: "The Godfather",},
  {id: "disgust2",title: "The Godfather",},

  {id: "joy3",title: "The Godfather",},
  {id: "indifference3",title: "The Godfather",},
  {id: "sad3",title: "The Godfather",},
  {id: "disgust3",title: "The Godfather",},

  {id: "joy4",title: "The Godfather",},
  {id: "indifference4",title: "The Godfather",},
  {id: "sad4",title: "The Godfather",},
  {id: "disgust4",title: "The Godfather",},

  {id: "joy5",title: "The Godfather",},
  {id: "indifference5",title: "The Godfather",},
  {id: "sad5",title: "The Godfather",},
  {id: "disgust5",title: "The Godfather",},
  // Add more movies as needed
];

// Example input: movies, "movie-select-container1", 1
// This is to generate the first question, which has four choices
function createMovieRadioButtons(movies, movieContainerName, questionNumber) {
  const movieSelectContainer = document.getElementById(movieContainerName);
  var startIndex = (questionNumber-1)*4
  for (const movie of movies.slice(startIndex, startIndex+4)) {
    const radioButtonContainer = document.createElement("div");
    radioButtonContainer.classList.add("movie-radio-button-container");

    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "favorite-movie"+questionNumber;
    radioButton.value = movie.id;

    const label = document.createElement("label");
    label.textContent = movie.title;

    radioButtonContainer.appendChild(radioButton);
    radioButtonContainer.appendChild(label);

    movieSelectContainer.appendChild(radioButtonContainer);
  }
}

function createPreStudyPage() {
    createMovieRadioButtons(movies, "movie-select-container1", 1);
    createMovieRadioButtons(movies, "movie-select-container2", 2);
    createMovieRadioButtons(movies, "movie-select-container3", 3);
    createMovieRadioButtons(movies, "movie-select-container4", 4);
    createMovieRadioButtons(movies, "movie-select-container5", 5);
    // Add more RadioButtons if needed
}

function saveFavoriteMovieIDs() {
    // Get the IDs of the selected movies
    const selectedMovieIdList = [
    document.querySelector('input[name="favorite-movie1"]:checked').value,
    document.querySelector('input[name="favorite-movie2"]:checked').value,
    document.querySelector('input[name="favorite-movie3"]:checked').value,
    document.querySelector('input[name="favorite-movie4"]:checked').value,
    document.querySelector('input[name="favorite-movie5"]:checked').value
    ];
    // Add more lines if needed

    // Create a lookup object to map movie IDs to movie names
    const movieNameLookup = {};
    for (const movie of movies) {
        movieNameLookup[movie.id] = movie.title;
    }

    // Get the names of the selected movies
    var i = 0
    for (var eachID of selectedMovieIdList) {
        favoriteMovies[i] = movieNameLookup[selectedMovieIdList[i]];
        i ++;
    }

    // The title of the selected movies got saved into favoriteMovies
    console.log(`You selected "${favoriteMovies}"`);
    console.log(`You selected "${selectedMovieIdList}"`);
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



//Experimental flow
function instructions1() {
    createPreStudyPage();
    const interestSubmit = document.getElementById("submit");
    // Add an event listener to the submit button
    interestSubmit.addEventListener("click", () => {
        // Save all the selected choices
        saveFavoriteMovieIDs()
        form.style.display = "none";
        interestSubmit.style.display = "none";
        showMessage("Thank you for submission. Now welcome to the study! Press next \n and you are going to watch several clips of videos based on your answers.");
        clearButtons();
        addButton(createButton("Next", () => {
            showMessage("");
            practiceSet();
        }));
    });
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
  instructions1();       




//CHEAT CODE (to update):
// git status
// git add .                               (preparing all new changes to be added)
// git commit -m "Your commit message"     (commiting changes)
// git push
// npx netlify deploy --prod               (deploy to website)
// to check new files, go to AWS S3 (amazon), buckets, emotionregulation

// or in short:         git add -A && git commit -m "update" && git push

//HOW TO MERGE ORIGIN MAIN TO BRANCH:
//git checkout dmgr2      # gets you "on branch dmgr2"
//git fetch origin        # gets you up to date with origin
//git merge origin