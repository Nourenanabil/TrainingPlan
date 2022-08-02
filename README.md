# TrainingPlan
## Introduction:
An athlete training plan is generated in terms of weeks. Each week in the training plan has a
different type. Types of weeks in the plan are as follows:
● Test → These are 2 mandatory weeks at the beginning of the plan
● Filler → A plan includes a maximum of 1 filler week, so it can include 0 or 1 filler week.
● Main block weeks: This is a block of 4 weeks which are repeated in the middle of the
plan.
○ Recovery → 1st week of the block
○ Build 1 → 2nd week of the block
○ Build 2 → 3rd week of the block
○ Key → 4th week of the block
● Taper → Only 1 taper week as the week prior to the last one (race week)
● Race → Only 1 race week as the last week in the plan. The race date is the last day of
this week and in the plan.

## Files Structure:
1-helper.js file : hold all the logic
2-index.js file : run the program

### 1.helper.js file :
1- "FormattedDate" function takes a date on the format of "Sunday 6th of June 2021" and parse it
2-"TrainingWeeks" function takes the start and end date of the training plan and return number of weeks with the 2 dates and the first date parsed
3-"TrainingPlan" function takes the number of weeks and start date returned from the "TrainingWeeks" function and return the training plan based on the number of weeks
4-"Print" function calculates the start date and the end date of each week and print the program 
5- "eightWeeksPlan","nineWeeksPlan","tenWeeksPlan"&"elevenWeeksPlan" each one print the training plan based on it's number of weeks using the "Print" function 
6-"MainBlockWeeks" function return the printed training plan of the main block weeks

### 2.index.js file :
first it import the "TrainingWeeks" and "TarainingPlan" from the helper.js and run them

## Commands :
1- to run the program : node index.js
