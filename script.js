const motionDropdown = document.getElementById('motion');
const startButton = document.getElementById('start');
const directionDropdown = document.getElementById('turns');
const turnButton = document.getElementById('turn')
//readiness
$(document).ready(function(){
 console.log("loading js modules");
// add event listeners
startButton.addEventListener('click',function(){
// get selected option
const selectMotion = motionDropdown.value;
switch(selectMotion) {
 case 'move_forward':
 move_forward();
 break ;
 }
switch(selectMotion) {
 case 'move_backward':
 move_backward();
 break ;
 }
}); 
// add event listeners for turn
turnButton.addEventListener('click', function(){
 // get selected option
 const selectedDirection = directionDropdown.value;
 switch(selectedDirection) {
 case 'turn_left':
 turn_left();
 break ;
 }
 switch(selectedDirection) {
 case 'turn_right':
 turn_right();
 break ;
 }
 switch(selectedDirection) {
 case 'robot_stop':
 robot_stop();
 break ;
 }
});
 $("#move_forward").click(function(){
 console.log("making robot move forward");
 move_forward();
 });
 $("#move_backward").click(function(){
 console.log("making robot move backward");
 move_backward();
 });
 $("#turn_left").click(function(){
 console.log("making robot turn left");
 turn_left();
 });
 $("#turn_right").click(function(){
 console.log("making robot turn right");
 turn_right();
 });
 $("#robot_stop").click(function(){
 console.log("making robot stop");
 robot_stop();
 });
 function move_forward()
 {
 let settings= {
 "url":"https://wizklub.com/api/secured/wiziot-poll-request/",
 "method":"POST",
 "dataType":"json",
 "contentType":"application/json ; charset=utf-8",
 "headers":{
 "Api-Access-key":"RkF1VDNJX0FDVXk1TVlDaDNsQ1U=",
 "Api-Secretkey":"MmJoSzdTQloyZWxVdHJOZGc2d1pHaDJpS1hDUkU4VU5Mdw==",
 "Content-type":"application/json",
 },
 "data": JSON.stringfy({
 "mode":"WRITE",
 "device_id":"sc13208",
 "source":"API",
 "api": "motor-driver",
 "type":"control",
 "direction1":"1",
 "direction2":"1",
 "speed1":"255",
 "speed2":"255"
 }),
 };
 $.ajax(settings).done(function(response){
 console.log(response);
 });
 }
 function move_backward()
 {
 let settings= {
 "url":"https://wizklub.com/api/secured/wiziot-poll-request/",
 "method":"POST",
 "dataType":"json",
 "contentType":"application/json ; charset=utf-8",
 "headers":{
 "Api-Access-key":"RkF1VDNJX0FDVXk1TVlDaDNsQ1U=",
 "Api-Secretkey":"MmJoSzdTQloyZWxVdHJOZGc2d1pHaDJpS1hDUkU4VU5Mdw==",
 "Content-type":"application/json",
 },
 "data": JSON.stringfy({
 "mode":"WRITE",
 "device_id":"sc13208",
 "source":"API",
 "api": "motor-driver",
 "type":"control",
 "direction1":"2",
 "direction2":"2",
 "speed1":"255",
 "speed2":"255"
 }),
 };
 $.ajax(settings).done(function(response){
 console.log(response);
 });
 }
 function turn_left()
 {
 let settings= {
 "url":"https://wizklub.com/api/secured/wiziot-poll-request/",
 "method":"POST",
 "dataType":"json",
 "contentType":"application/json ; charset=utf-8",
 "headers":{
 "Api-Access-key":"RkF1VDNJX0FDVXk1TVlDaDNsQ1U=",
 "Api-Secretkey":"MmJoSzdTQloyZWxVdHJOZGc2d1pHaDJpS1hDUkU4VU5Mdw==",
 "Content-type":"application/json",
 },
 "data": JSON.stringfy({
 "mode":"WRITE",
 "device_id":"sc13208",
 "source":"API",
 "api": "motor-driver",
 "type":"control",
 "direction1":"2",
 "direction2":"1",
 "speed1":"255",
 "speed2":"255"
 }),
 };
 $.ajax(settings).done(function(response){
 console.log(response);
 });
 }
 function turn_right()
 {
 let settings= {
 "url":"https://wizklub.com/api/secured/wiziot-poll-request/",
 "method":"POST",
 "dataType":"json",
 "contentType":"application/json ; charset=utf-8",
 "headers":{
 "Api-Access-key":"RkF1VDNJX0FDVXk1TVlDaDNsQ1U=",
 "Api-Secretkey":"MmJoSzdTQloyZWxVdHJOZGc2d1pHaDJpS1hDUkU4VU5Mdw==",
 "Content-type":"application/json",
 },
 "data": JSON.stringfy({
 "mode":"WRITE",
 "device_id":"sc13208",
 "source":"API",
 "api": "motor-driver",
 "type":"control",
 "direction1":"1",
 "direction2":"2",
 "speed1":"255",
 "speed2":"255"
 }),
 };
 $.ajax(settings).done(function(response){
 console.log(response);
 });
 }
 function robot_stop()
 {
 let settings= {
 "url":"https://wizklub.com/api/secured/wiziot-poll-request/",
 "method":"POST",
 "dataType":"json",
 "contentType":"application/json ; charset=utf-8",
 "headers":{
 "Api-Access-key":"RkF1VDNJX0FDVXk1TVlDaDNsQ1U=",
 "Api-Secretkey":"MmJoSzdTQloyZWxVdHJOZGc2d1pHaDJpS1hDUkU4VU5Mdw==",
 "Content-type":"application/json",
 },
 "data": JSON.stringfy({
 "mode":"WRITE",
 "device_id":"sc13208",
 "source":"API",
 "api": "motor-driver",
 "type":"control",
 "direction1":"1",
 "direction2":"1",
 "speed1":"0",
 "speed2":"0"
 }),
 };
 $.ajax(settings).done(function(response){
 console.log(response);
 });
 }
}); 