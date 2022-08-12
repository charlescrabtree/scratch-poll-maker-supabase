// import functions and grab DOM elements
import { createNewPoll, getPolls } from "./fetch-utils.js";
import { renderPoll } from "./render-utils.js";

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
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
