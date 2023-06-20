let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');
let title = document.querySelector('.title');

const qoutes = [{
 qoute:`Simplicity 
        is the ultimate 
				sophistication.`,
 person: `Leonardo da Vinci`,
 title: `THINGS`

}, {
	qoute: `The materials of city planning are: 
	        sky, space, trees, steel and cement;
					in that order and that hierarchy.`,
	person: `Le Corbusier`,
	title: `A MOMENT`
}, {
	qoute: `You can find out how to do 
	        something and then do it or do 
	        something and then find out what
	        you do.`,
	person: `Isamu Noguchi`,
	title: `SILHOUETTE`
}, {
	qoute: `Architecture should speak 
	        of its time and place, but 
	        yearn for timelessness.`,
	person: `Frank Ghery`,
	title: `CONCISE`
	
}, {
	qoute: `To create one must first
	        question everything.`,
	person: `Eileen Gray`,
	title: `SAGE BEAUTY`
}, { 
	qoute: `Recognizing the need
	       is the primary condition
				 for design.`,
	person: `Charles Eames`,
	title: `MODERN THOUGHT`
}, {
	qoute: `A truly great structure,
	        one that is meant to stand 
					the tests of time never 
					disregards its environment.`,
	person: `Simon Wyler`,
	title: `SENSATION`
}, {
	qoute: `You never change things 
	        by fighting the existing reality. 
					To change something, build 
					a new model that makes the sense
					existing model obsolete.
					`,
	person: `Buckminster Fuller`,
	title: `NOTHING SEEN`
}, {
	qoute: `No house should ever be
	        on a hill or on anything.
					It should be of the hill.
					Belonging to it.`,
	person: `Frank Lloyd Wright`,
	title: `CLOSER`
}, {
	qoute: `Beauty is the harmony
	        of purpose and form.`,
	person: `Alvar Aalto`,
	title: `NATURE`
	
}, ];

btn.addEventListener('click', function(){

let random = Math.floor(Math.random() * qoutes.length);

qoute.innerText = qoutes[random].qoute;
person.innerText = qoutes[random].person;
title.innerText = qoutes[random].title;

})