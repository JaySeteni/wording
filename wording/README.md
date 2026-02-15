# wording

freeapi.miniprojectideas.com


Hello world, from angular IT. 

These are notes that we will be taking down today. 

app.component.html:

imports template URL and RouterOutlet

hello world, from Angular 19

" Hello World from Angular 19"

show in browser.

title = 'dashboard-19' in app.component.ts

a string variable. {{Title}} in component html

new component from the CLI : ng g c header

new header in src file: header

defining the component:


Angular.json file to be where App name is put.


isMorning: boolean = true;

open Template: 

@if (isMorning) { 
	goodMorining

} @else {
	Good Evening.

}
 <router-outlet /> 
---------------------------------------

COMPONENT.TS

isMorning: boolean = false;


morningToggle(): boolean = {  // function call 

 this.isMorning = !this.isMorning;

 return this.isMorning;


COMPONENT.HTML

<button (click)="morningToggle()"> Hello </button>

@if (isMorning) { 
	div good Morning

} @else {
	div Good Evening.

}



 <router-outlet /> 



--------------------------


FOR LOOPS: for defining an Array of an Object ;

salutation: any= [

{
id: 1, 
message: 'Good Morning'
},
{

id: 2, 
message: 'Good Afternon'
},
{

id: 3, 
message: 'Good Evening'
},
{

id: 4, 
message: 'Good Night'
}
];


@for (sal of salutations; track sal.id) {

div h1 {{sal.message}}

Iterates over an Array and is displayed using a FOR  loop.

To track is to see how your template is  being rendered. 
improving rendering speed.

tracks changes and updates latest changes only and 

does not load everything anew everytime. 



----------------------------------------------------------



MOCK DASHBOARD DRAW UP:


MAIN NAVIGATION CONTENT:

background color : #020202;


Leftside:  Hamburger button with Main logo right next to it. 

Rightside: 


	   All Button icons are light grey, 
	   except the search button, freestlye.

	   search for with search icon botton for search input.

	   Profile icon with a down pointing arrow button.







// SIDE NAVIGATION CONTENT:

Start Bootstrap logo

core 
logo shaded :
light grey 
caps 
small bolded font.

Dashboard Button grey 

interface logo :

like core logo styling

Layouts Button 
Pages Button 

addons with core styling

Charts Button 
Tables Button

BACKGROUND DARKGREY #020202 color.


		---------- - --- - - -- -- -- -  - - - --- -

// MAIN COMPONENT CONTENT: 


Logo Dashboard

small logo 'dashboard' shaded.


four cards : array from available card in different 
templates in the app;

Primary Card | Warining Card
view Details	view Details

Success Card | Danger Card
view Details	view Details

greyened - highlighted view detail buttons underlined.

Area Chart Example // lightgrey background.

Chart 




4000  

3000

2000

1000


// line chart rising to 4 thousand.  



----------------------------------------------------
-------------------------



PROPERTY AND DATA BINDING IN ANGULAR :








