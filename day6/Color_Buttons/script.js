// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Use querySelector to store the div in a variable.
let box=document.querySelector("#response-box");
const redButton = document.querySelector('#red');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');
  // Use addEventListener to respond to a click event.
  greenButton.addEventListener('click', (e) =>{
    console.log("You clicked the green button!");
    box.style.backgroundColor= "green";
  });





    blueButton.addEventListener('click', (e) =>{
      console.log("You clicked the blue button!");
      box.style.backgroundColor= "blue";
      });

redButton.addEventListener('click', (e) =>{
  console.log("You clicked the red button!");
  box.style.backgroundColor= "red";

});
