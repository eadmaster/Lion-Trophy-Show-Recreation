// 1. Define your game scenes and QTE windows
const sceneData = {
    "opening": {
        videoSrc: "assets/sigla_1995.mp4",
        qteStart: null, // Pure cinematic scene, no QTE
        onEnd: "game"
    },
    "game": {
        videoSrc: "assets/game.mp4",
        // Multiple QTE windows for this video
        qtes: [
            {
                qteStart: 3.5, // seconds when prompt appears
                qteEnd: 6.0,   // seconds when window closes (failure)
                correctKey: "0",
                //onSuccess: "level1"
                //onFailure: "death",
                // no points -> normal progression
                choices: ["0"],
                position: { x: 400, y: 100 }
            },
            {
                // bonus: cherry
                qteStart: 19.10,
                qteEnd: 22.23,
                correctKey: "5",
                points: 250, // bonus points, no scene change on success
                choices: ["5"],
                position: { x: 200, y: 200 }
            },
            {
                // bonus: lion
                qteStart: 20.23,
                qteEnd: 22.23,
                correctKey: "8",
                choices: ["8"],
                position: { x: 200, y: 200 },
                points: 1000, // bonus points, no scene change on success
            },
            {
                // qte
                qteStart: 22.23,
                qteEnd: 24.23,
                correctKey: "3",
                choices: ["1", "3"],
                position: { x: 300, y: 100 },
                onFailure: "death",
            },
            {
                qteStart: 25.00,
                qteEnd: 26.00,
                correctKey: "8",
                choices: ["8"],
                points: 250,
            },
            {
                qteStart: 26.00,
                qteEnd: 27.00,
                correctKey: "4",
                choices: ["4"],
                points: 250,
            },
            {
                qteStart: 30.00,
                qteEnd: 31.00,
                correctKey: "4",
                choices: ["4"],
                points: 250,
            },
            {
                qteStart: 31.20,
                qteEnd: 32.20,
                correctKey: "6",
                choices: ["6"],
                points: 250,
            },
            {
                // qte
                qteStart: 33.20,
                qteEnd: 35.20,
                correctKey: "7",
                choices: ["7", "9"],
                onFailure: "death",
            },
            {
                qteStart: 36.00,
                qteEnd: 37.00,
                correctKey: "9",
                choices: ["9"],
                points: 250,
            },
            {
                qteStart: 41.00,
                qteEnd: 42.00,
                correctKey: "2",
                choices: ["2"],
                points: 250,
            },
            {
                qteStart: 42.20,
                qteEnd: 43.20,
                correctKey: "5",
                choices: ["5"],
                points: 250,
            },
            {
                qteStart: 45.00,
                qteEnd: 46.00,
                correctKey: "2",
                choices: ["2"],
                points: 250,
            },
            {
                qteStart: 46.10,
                qteEnd: 46.20,
                correctKey: "5",
                choices: ["4", "5"],
                onFailure: "death",
            },
            {
                qteStart: 56.10,
                qteEnd: 58.00,
                correctKey: "3",
                choices: ["1", "3"],
                onFailure: "death",
            },
            {
                qteStart: 58.20,
                qteEnd: 59.20,
                correctKey: "5",
                choices: ["5"],
                points: 250,
            },
            {
                qteStart: 60.10,
                qteEnd: 62.00,
                correctKey: "9",
                choices: ["7", "9"],
                onFailure: "death",
            },
            {
                qteStart: 62.10,
                qteEnd: 63.10,
                correctKey: "6",
                choices: ["6"],
                points: 1000,
            },
            {
                qteStart: 64.10,
                qteEnd: 66.00,
                correctKey: "1",
                choices: ["1", "3"],
                onFailure: "death",
            },
            {
                qteStart: 66.10,
                qteEnd: 67.10,
                correctKey: "6",
                choices: ["6"],
                points: 250,
            },
            {
                qteStart: 68.10,
                qteEnd: 70.00,
                correctKey: "7",
                choices: ["7", "9"],
                onFailure: "death",
            },
            {
                qteStart: 70.10,
                qteEnd: 71.10,
                correctKey: "6",
                choices: ["6"],
                points: 250,
            },
            {
                qteStart: 72.00,
                qteEnd: 73.20,
                correctKey: "3",
                choices: ["1", "3"],
                onFailure: "death",
            },
            {
                qteStart: 74.10,
                qteEnd: 75.10,
                correctKey: "6",
                choices: ["6"],
                points: 250,
            },
            {
                qteStart: 80.00,
                qteEnd: 82.00,
                correctKey: "5",
                choices: ["5"],
                onFailure: "death",
            },
            {
                qteStart: 82.10,
                qteEnd: 84.00,
                correctKey: "7",
                choices: ["7", "8", "9"],
                onFailure: "death",
            },
            {
                qteStart: 84.10,
                qteEnd: 85.10,
                correctKey: "2",
                choices: ["2"],
                points: 250,
            },
            {
                qteStart: 87.00,
                qteEnd: 88.00,
                correctKey: "8",
                choices: ["8"],
                onFailure: "death",
            },
            {
                qteStart: 88.20,
                qteEnd: 90.00,
                correctKey: "3",
                choices: ["1", "2", "3"],
                onFailure: "death",
            },
            {
                qteStart: 90.20,
                qteEnd: 91.20,
                correctKey: "7",
                choices: ["7"],
                points: 1000,
            },
            {
                qteStart: 92.00,
                qteEnd: 93.00,
                correctKey: "3",
                choices: ["3"],
                points: 250,
            },
            {
                qteStart: 93.10,
                qteEnd: 94.50,
                correctKey: "5",
                choices: ["5"],
                onFailure: "death",
            },
            {
                qteStart: 95.00,
                qteEnd: 96.10,
                correctKey: "9",
                choices: ["7", "8", "9"],
                onFailure: "death",
            },
            {
                qteStart: 96.20,
                qteEnd: 97.20,
                correctKey: "3",
                choices: ["3"],
                points: 250,
            },
            {
                qteStart: 99.00,
                qteEnd: 100.00,
                correctKey: "8",
                choices: ["8"],
                points: 250,
            },
            {
                qteStart: 100.10,
                qteEnd: 101.10,
                correctKey: "3",
                choices: ["3"],
                points: 250,
            },
            {
                qteStart: 107.20,
                qteEnd: 108.20,
                correctKey: "2",
                choices: ["2"],
                points: 250,
            },
            {
                qteStart: 109.10,
                qteEnd: 110.10,
                correctKey: "6",
                choices: ["6"],
                points: 250,
            },
            {
                qteStart: 110.20,
                qteEnd: 111.20,
                correctKey: "8",
                choices: ["8"],
                points: 1000,
            },
            {
                qteStart: 114.00,
                qteEnd: 115.20,
                correctKey: "6",
                choices: ["6"],
                points: 250,
            },
            {
                qteStart: 116.00,
                qteEnd: 117.00,
                correctKey: "2",
                choices: ["2"],
                points: 1000,
            },
            {
                qteStart: 124.00,
                qteEnd: 125.10,
                correctKey: "4",
                choices: ["4", "6"],
                onFailure: "death",
            },
            {
                qteStart: 134.10,
                qteEnd: 135.10,
                correctKey: "2",
                choices: ["2"],
                onFailure: "death",
            },
            {
                qteStart: 138.10,
                qteEnd: 139.10,
                correctKey: "8",
                choices: ["8"],
                onFailure: "death",
            },
            {
                qteStart: 143.00,
                qteEnd: 145.00,
                correctKey: "6",
                choices: ["4", "5", "6"],
                onFailure: "death",
            },
            // level 5
            {
                qteStart: 152.00,
                qteEnd: 153.00,
                correctKey: "4",
                choices: ["4"],
                onFailure: "death",
            },
            {
                qteStart: 153.10,
                qteEnd: 154.10,
                correctKey: "6",
                choices: ["6"],
                onFailure: "death",
            },
            {
                qteStart: 159.00,
                qteEnd: 160.10,
                correctKey: "7",
                choices: ["7"],
                onFailure: "death",
            },
            {
                qteStart: 162.00,
                qteEnd: 163.10,
                correctKey: "1",
                choices: ["1"],
                onFailure: "death",
            },
            {
                qteStart: 163.20,
                qteEnd: 164.20,
                correctKey: "3",
                choices: ["3"],
                onFailure: "death",
            },
            {
                qteStart: 170.00,
                qteEnd: 171.10,
                correctKey: "7",
                choices: ["7"],
                onFailure: "death",
            },
            {
                qteStart: 173.00,
                qteEnd: 174.10,
                correctKey: "1",
                choices: ["1"],
                onFailure: "death",
            },
            {
                qteStart: 183.10,
                qteEnd: 184.10,
                correctKey: "4",
                choices: ["4"],
                onFailure: "death",
            },
            {
                qteStart: 184.10,
                qteEnd: 185.00,
                correctKey: "6",
                choices: ["6"],
                onFailure: "death",
            },
            {
                qteStart: 185.10,
                qteEnd: 186.10,
                correctKey: "4",
                choices: ["4"],
                onFailure: "death",
            },
            {
                qteStart: 186.20,
                qteEnd: 187.20,
                correctKey: "4",
                choices: ["4"],
                onFailure: "death",
            },
            {
                qteStart: 187.21,
                qteEnd: 188.20,
                correctKey: "6",
                choices: ["6"],
                onFailure: "death",
            },
            {
                qteStart: 189.00,
                qteEnd: 190.00,
                correctKey: "6",
                choices: ["6"],
                onFailure: "death",
            },
            {
                qteStart: 190.10,
                qteEnd: 191.10,
                correctKey: "4",
                choices: ["4"],
                onFailure: "death",
                onSuccess: "ending"
            }
        ]
    },
    "death": {
        videoSrc: "assets/death.mp4",
        qteStart: null,
        onEnd: "opening" // Restart game on completion
    },
    "ending": {
        videoSrc: "assets/ending.png",
        qteStart: null,
        correctKey: "0",
        onEnd: "opening" // Restart game on completion
    },
};

// 2. DOM Elements
const video = document.getElementById("video-player");
const overlay = document.getElementById("qte-overlay");
const targetNumSpan = document.getElementById("target-number");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const skipPrompt = document.getElementById("skip-prompt");
const scoreCounter = document.getElementById("score-counter");
const playerNameInput = document.getElementById("player-name-input");

// Lives system
let lives = 3;
const livesContainer = document.getElementById('lives-container');
// Hide by default; will be shown only in "game" scene
livesContainer.style.display = 'none';
function updateLivesUI() {
    if (!livesContainer) return;
    livesContainer.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        const icon = document.createElement('div');
        icon.className = 'life-icon';
        livesContainer.appendChild(icon);
    }
}
// Initialize lives display
updateLivesUI();

// Global game state
let currentSceneId = "opening";
let qteActive = false;
let activeQte = null; // currently active QTE object
let activeQteIndex = -1; // index of active QTE in scene.qtes
let completedQteIndices = new Set(); // tracks completed QTEs per scene
let score = 0; // player score

function updateScoreUI() {
    if (scoreCounter) {
        scoreCounter.textContent = score;
    }
}
// Initialize score display
updateScoreUI();

function clearQteKeysUI() {
    const qteKeysDiv = document.getElementById('qte-keys');
    if (qteKeysDiv) {
        qteKeysDiv.innerHTML = '';
        qteKeysDiv.classList.add('hidden');
        qteKeysDiv.style.width = '';
        qteKeysDiv.style.justifyContent = '';
        qteKeysDiv.style.left = '';
        qteKeysDiv.style.top = '';
        qteKeysDiv.style.transform = '';
    }
}

let nextSceneResumeTime = 0;
let previousSceneId = 'game';

// 3. Load and play a scene
function playScene(sceneId, startAt = 0) {
    if (!sceneId || !sceneData[sceneId]) {
        console.warn(`Scene "${sceneId}" not found in sceneData.`);
        return;
    }
    // Handle lives when entering the death scene
    if (sceneId === 'death') {
        if (activeQte) {
            nextSceneResumeTime = Math.max(0, activeQte.qteStart - 3);
            previousSceneId = currentSceneId;
        } else {
            nextSceneResumeTime = 0;
            previousSceneId = 'game';
        }
        lives--;
        updateLivesUI();
        if (lives <= 0) {
            // Reset lives and restart from opening (game over)
            lives = 3;
            updateLivesUI();
            score = 0;
            updateScoreUI();
            // Skip playing death video; go straight to opening
            playScene('opening');
            return;
        }
    }
    currentSceneId = sceneId;
    // Show lives UI only for the "game" scene
    if (livesContainer) {
        livesContainer.style.display = (sceneId === 'game') ? 'flex' : 'none';
    }
    const scene = sceneData[sceneId];

    video.src = scene.videoSrc;
    video.load();
    if (startAt > 0) {
        const setStartTime = () => {
            video.currentTime = startAt;
            video.removeEventListener('loadedmetadata', setStartTime);
        };
        video.addEventListener('loadedmetadata', setStartTime);
    }
    video.play();

    // Reset flags
    qteActive = false;
    overlay.classList.add("hidden");

    // Clear any previous button highlights
    document.querySelectorAll('.qte-btn').forEach(btn => btn.classList.remove('active-target'));

    // Reset QTE tracking for new scene
    completedQteIndices.clear();
    activeQte = null;
    activeQteIndex = -1;

    // Clear QTE keys UI
    clearQteKeysUI();

    // Toggle skip prompt visibility for opening scene
    if (skipPrompt) {
        if (sceneId === "opening") {
            skipPrompt.classList.remove("hidden");
        } else {
            skipPrompt.classList.add("hidden");
        }
    }
}

// 4. Monitor Video Playback Time
video.addEventListener("timeupdate", () => {
    const scene = sceneData[currentSceneId];
    if (!scene || !scene.qtes) return;

    const currentTime = video.currentTime;

    // Start a QTE if none active
    if (!qteActive) {
        const pendingIndex = scene.qtes.findIndex((q, i) => !completedQteIndices.has(i) && currentTime >= q.qteStart && currentTime < q.qteEnd);
        if (pendingIndex !== -1) {
            activeQte = scene.qtes[pendingIndex];
            activeQteIndex = pendingIndex;
            qteActive = true;
            // Show overlay (target number can be displayed if desired)
            // overlay.classList.remove("hidden");
            // Render big key buttons for the active QTE
            const qteKeysDiv = document.getElementById('qte-keys');
            qteKeysDiv.innerHTML = '';
            const choices = Array.isArray(activeQte.choices) ? activeQte.choices : [activeQte.correctKey];
            choices.forEach(k => {
                const btn = document.createElement('button');
                btn.className = 'qte-key-btn';
                btn.textContent = k;

                // Mouse event listeners for click/press interaction on the on-screen buttons
                btn.addEventListener('mousedown', (e) => {
                    e.stopPropagation();
                    startDTMFTone(k);
                    btn.classList.add('pressed');
                    handleInput(k);
                });

                btn.addEventListener('mouseup', () => {
                    stopDTMFTone(k);
                    btn.classList.remove('pressed');
                });

                btn.addEventListener('mouseleave', () => {
                    stopDTMFTone(k);
                    btn.classList.remove('pressed');
                });

                qteKeysDiv.appendChild(btn);
            });
            // Position and spread the keys container
            if (choices.length > 1) {
                const leftVal = (activeQte.position && typeof activeQte.position.x === 'number') ? activeQte.position.x : 80;
                const calculatedWidth = Math.max(120, 640 - leftVal);
                qteKeysDiv.style.left = leftVal + 'px';
                qteKeysDiv.style.width = calculatedWidth + 'px';
                qteKeysDiv.style.justifyContent = 'space-between';
                qteKeysDiv.style.transform = 'none';
                if (activeQte.position && typeof activeQte.position.y === 'number') {
                    qteKeysDiv.style.top = activeQte.position.y + 'px';
                } else {
                    qteKeysDiv.style.top = '';
                }
            } else {
                qteKeysDiv.style.width = '';
                qteKeysDiv.style.justifyContent = '';
                if (activeQte.position && typeof activeQte.position.x === 'number') {
                    qteKeysDiv.style.left = activeQte.position.x + 'px';
                    qteKeysDiv.style.top = activeQte.position.y + 'px';
                    qteKeysDiv.style.transform = 'none';
                } else {
                    qteKeysDiv.style.left = '50%';
                    qteKeysDiv.style.top = '';
                    qteKeysDiv.style.transform = 'translateX(-50%)';
                }
            }
            qteKeysDiv.classList.remove('hidden');
        }
    }

    // Missed the Window (Failure Condition)
    if (qteActive && activeQte && currentTime >= activeQte.qteEnd) {
        qteActive = false;
        //overlay.classList.add("hidden");
        completedQteIndices.add(activeQteIndex);
        if (activeQte.onFailure) {
            playScene(activeQte.onFailure);
        }
        // For bonus QTEs with only points, no scene change occurs.
        activeQte = null;
        activeQteIndex = -1;
    }
});

// 5. Handle Video Ending (For scenes without QTEs or after death animations)
video.addEventListener("ended", () => {
    if (currentSceneId === "death") {
        playScene(previousSceneId, nextSceneResumeTime);
        return;
    }
    const scene = sceneData[currentSceneId];
    if (scene && scene.onEnd) {
        playScene(scene.onEnd);
    }
});

// DTMF tone synthesizer frequencies
const dtmfFrequencies = {
    "1": [697, 1209],
    "2": [697, 1336],
    "3": [697, 1477],
    "4": [770, 1209],
    "5": [770, 1336],
    "6": [770, 1477],
    "7": [852, 1209],
    "8": [852, 1336],
    "9": [852, 1477],
    "0": [941, 1336],
};

let audioCtx = null;
let activeTones = {};

function playDTMFTone(key) {
    const freqs = dtmfFrequencies[key];
    if (!freqs) return;
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.value = freqs[0];
    osc2.type = 'sine';
    osc2.frequency.value = freqs[1];
    // Continuous tone: set a modest gain
    gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc1.start();
    osc2.start();
    activeTones[key] = { osc1, osc2, gainNode };
}

// Wrapper to maintain compatibility with key handling code
function startDTMFTone(key) {
    playDTMFTone(key);

}

function stopDTMFTone(key) {
    const tone = activeTones[key];
    if (!tone) return;
    const { osc1, osc2, gainNode } = tone;
    try {
        osc1.stop();
        osc2.stop();
        osc1.disconnect();
        osc2.disconnect();
        gainNode.disconnect();
    } catch (e) {
        console.warn('Error stopping DTMF tone:', e);
    }
    delete activeTones[key];
}

// 6. Unified Input Handling (handles keyboard digits/numpad and screen buttons)
function handleInput(key) {
    // If playing the opening cinematic, any key/click skips it
    if (currentSceneId === "opening") {
        const nextScene = (sceneData["opening"] && sceneData["opening"].onEnd) || "treasure_room";
        playScene(nextScene);
        return;
    }

    if (!qteActive) return;

    // Use the currently active QTE configuration
    if (!activeQte) return;

    if (key === activeQte.correctKey) {
        // Reset QTE state
        qteActive = false;
        // Hide overlay and mark QTE as completed
        //overlay.classList.add("hidden");
        completedQteIndices.add(activeQteIndex);
        // Award points if defined
        if (activeQte.points) {
            score += activeQte.points;
            updateScoreUI();
        }
        // Transition on success if defined
        if (activeQte.onSuccess) {
            playScene(activeQte.onSuccess);
        }
        // Clear QTE keys UI
        clearQteKeysUI();
        // Remove visual pressed state on the main button grid
        const btn = document.getElementById(`btn-${key}`);
        if (btn) btn.classList.remove('pressed');
    } else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(key)) {
        qteActive = false;
        overlay.classList.add("hidden");
        completedQteIndices.add(activeQteIndex);
        if (activeQte && activeQte.onFailure) {
            playScene(activeQte.onFailure);
        }
        // Clear QTE keys UI
        clearQteKeysUI();
        // Remove visual pressed state on the main button grid
        const btn = document.getElementById(`btn-${key}`);
        if (btn) btn.classList.remove('pressed');

        // Clear active QTE configuration
        activeQte = null;
        activeQteIndex = -1;
    }
}

// 7. Listen for Player Key Presses
window.addEventListener("keydown", (event) => {
    // Ignore key repeat events (holding down a key)
    if (event.repeat) return;

    // Do not capture game inputs if typing in the player name input
    if (event.target.tagName === 'INPUT') return;

    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.key)) {
        // Remove yellow active-target highlight during press
        //document.querySelectorAll('.qte-btn.active-target').forEach(btn => btn.classList.remove('active-target'));
        startDTMFTone(event.key);
        const btn = document.getElementById(`btn-${event.key}`);
        if (btn) btn.classList.add("pressed");

        // Skip opening or process QTE
        handleInput(event.key);
    }
});

window.addEventListener("keyup", (event) => {
    if (event.target.tagName === 'INPUT') return;

    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.key)) {
        stopDTMFTone(event.key);
        const btn = document.getElementById(`btn-${event.key}`);
        if (btn) btn.classList.remove("pressed");
    }
});

// 8. Listen for screen button clicks
document.querySelectorAll(".qte-btn").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        // Remove yellow active-target highlight during press
        document.querySelectorAll('.qte-btn.active-target').forEach(b => b.classList.remove('active-target'));
        const key = btn.textContent.trim();
        startDTMFTone(key);
        btn.classList.add("pressed");
        handleInput(key);
    });

    btn.addEventListener("mouseup", () => {
        const key = btn.textContent.trim();
        stopDTMFTone(key);
        btn.classList.remove("pressed");
    });
});

// 9. Listen for click on the video container to skip opening scene
video.addEventListener("click", () => {
    if (currentSceneId === "opening") {
        handleInput("click");
    }
});

// Start the game on user interaction
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    lives = 3;
    score = 0;
    updateLivesUI();
    updateScoreUI();
    playScene("opening");
});