// import functions and grab DOM elements
import { createNewPoll, getPolls } from './fetch-utils.js';
import { renderPoll } from './render-utils.js';

const createForm = document.getElementById('create-poll');
const voteA = document.getElementById('vote-a');
const voteB = document.getElementById('vote-b');
const closePoll = document.getElementById('publish-poll');

// let state
let question = '';
let optionA = '';
let optionB = '';
let optionAVotes = 0;
let optionBVotes = 0;

// set event listeners 
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(createForm);
    question = data.get('question-input');
    optionA = data.get('option-a');
    optionB = data.get('option-b');

    displayCurrentPoll();
});

function displayCurrentPoll() {
    const questionEl = document.getElementById('question');
    questionEl.textContent = question;
    const optionAEl = document.getElementById('option-a');
    optionAEl.textContent = optionA;
    const optionBEl = document.getElementById('option-b');
    optionBEl.textContent = optionB;
    voteA.textContent = optionAVotes;
    voteB.textContent = optionBVotes;
}

voteA.addEventListener('click', () => {
    optionAVotes++;
    voteA.textContent = optionAVotes;
});

voteB.addEventListener('click', () => {
    optionBVotes++;
    voteB.textContent = optionBVotes;
});

closePoll.addEventListener('click', async () => {
    const data = {
        question,
        option_a: optionA,
        option_b: optionB,
        option_a_votes: optionAVotes,
        option_b_votes: optionBVotes,
    };
    const resp = await createNewPoll(data);
    question = '';
    optionA = '';
    optionAVotes = 0;
    optionBVotes = 0;
    displayCurrentPoll();
    displayPolls();   

    return resp.data;
});

async function displayPolls() {
    const pollList = document.getElementById('poll-list');
    pollList.textContent = '';
    const polls = await getPolls();
    for (let poll of polls) {
        const div = renderPoll(poll);
        pollList.append(div);
    }
}

displayPolls();