let checking = false;
let checkedCount = 0;
let found = 0;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const checkedDisplay = document.getElementById('checked');
const foundDisplay = document.getElementById('found');
const logOutput = document.getElementById('log-output');
const foundAmount = document.getElementById('found-amount');

const messages = [
    "shrug inhale...",
    "pudding salmon...",
    "nephew salmon...",
    "useful emerge...",
    "clock cattle...",
    "detect sound...",
    "marble excuse...",
    "lunch undo wood...",
    "pull real vine..."
];

// Navegación entre secciones
const searchSection = document.getElementById('search-section');
const dashboardSection = document.getElementById('dashboard-section');
const settingsSection = document.getElementById('settings-section');
const searchLink = document.getElementById('search-link');
const dashboardLink = document.getElementById('dashboard-link');
const settingsLink = document.getElementById('settings-link');

// Inicialización de eventos
searchLink.addEventListener('click', () => showSection(searchSection, searchLink));
dashboardLink.addEventListener('click', () => showSection(dashboardSection, dashboardLink));
settingsLink.addEventListener('click', () => showSection(settingsSection, settingsLink));

function showSection(section, link) {
    document.querySelector