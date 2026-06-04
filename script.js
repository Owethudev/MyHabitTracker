//Declaring my variables

const addbtn = document.getElementById("addhabitbtn");
const habitinput = document.getElementById("habit-name");
const weeklytargetinput = document.getElementById("habit-target");
const categoryinput = document.getElementById("habit-category");

//Creating the array that will store our habts

const allHabits = [];

//this is our class which we use as our blueprint for new habits

class Habit {
    constructor(name, category, target, streak, doneToday) {
        this.name = name;
        this.category = category;
        this.target = target;
        this.streak = streak;
        this.doneToday = doneToday;
    }
    
    //A method thatgives a summary 
    summary() {
        return `Name: ${this.name} | Category: ${this.category} | Streak: ${this.streak}`;
    }
}

//Our function to render items and give us the list of the habits

const renderHabits = () => {

    const habitList = document.getElementById("habit-list");
    const totalHabits = document.getElementById("total-habits");

    //Clears the list before we can put in a new one
    habitList.innerHTML = "";

    //these are the instrctions that for each habit in the array i want it to take it create a list item and produce a summary of the habit and also add a button to update the streak and a button to delete the habit
    allHabits.forEach((habit, index) => {

        const habitElement = document.createElement("li");
        habitElement.textContent = habit.summary();

        //Done Today button that will update the streak when we press it

        const streakBtn = document.createElement("button");
        streakBtn.textContent = "Done Today";

        const streakUpdate = () => {

            habit.streak++;

            if (!habit.doneToday) {
                habit.doneToday = true;
            }

            renderHabits();
        }
        streakBtn.addEventListener("click", streakUpdate);

         //Delete button that will remove the habit from the array and update the list

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete Habit";

        const deleteHabit = () => {

            allHabits.splice(index, 1);
            renderHabits();

        }
        delBtn.addEventListener("click", deleteHabit);

        //this is how we add our habit list to our page

        habitElement.appendChild(streakBtn);
        habitElement.appendChild(delBtn);
        habitList.appendChild(habitElement);
    });
 
      //Updates our total habits count
    totalHabits.textContent = `Total Habits: ${allHabits.length}`;
}

//our function to add a habit to the array and update the list

const addHabit = () => {
 
    //to check our inputs and give error messages when our minimum criteria is not met

    if (habitinput.value === "" || categoryinput.value === "" || weeklytargetinput.value === "") {

        let errormsg = document.createElement("p");
        errormsg.textContent = "Please fill in all fields.";
        document.getElementById("form-error").innerHTML = "";
        document.getElementById("form-error").appendChild(errormsg);
       
    }else if(habitinput.value.length < 3){

        let errormsg = document.createElement("p");
        errormsg.textContent = "Habit name must be at least 3 characters long.";
        document.getElementById("form-error").innerHTML = "";
        document.getElementById("form-error").appendChild(errormsg);
       
    }
    else{

       // tp clear any error messages that were there from invalid inputs

         document.getElementById("form-error").innerHTML = "";

       //creating a new habit using our class and adding it to our array

     let habit = new Habit(habitinput.value, categoryinput.value, Number(weeklytargetinput.value), 0, false);
     allHabits.push(habit);
        renderHabits();

        //this is to clear the input fields after adding a habit
     habitinput.value = "";
     categoryinput.value = "";
     weeklytargetinput.value = "";


}}

//eventlistener for the add habit button
addbtn.addEventListener("click", addHabit);