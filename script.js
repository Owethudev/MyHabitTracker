const addbtn = document.getElementById("addhabitbtn");
const habitinput = document.getElementById("habit-name");
const weeklytargetinput = document.getElementById("habit-target");
const categoryinput = document.getElementById("habit-category");

const allHabits = [];

class Habit{
    constructor( name, category, target, streak, doneToday )
    {
        this.name = name;
        this.category = category;
        this.target = target;
        this.streak = streak;
        this.doneToday = doneToday;
    }
    
    summary()
    {

    return `Name : ${this.name} .   Category : ${this.category} `;

    }

}

const addHabit = () => {

    //checking if any of the input fields are empty and displaying an error message if they are

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

        //this is to add the habit to the allHabits array and create a button to update the streak when the habit is done for the day
     
     let habit = new Habit(habitinput.value, categoryinput.value, Number(weeklytargetinput.value), 0, false);
     allHabits.push(habit);
     let habitElement = document.createElement("li");
     habitElement.textContent= habit.summary();
     document.getElementById("habit-list").appendChild(habitElement);

     //creating my streak button that will appear when adding a new habit
     let streakBtn = document.createElement("button");
     streakBtn.textContent = "Done Today";
     habitElement.appendChild(streakBtn);

     //creating my delete button that will appear when adding a new habit
     let delbtn = document.createElement("button");
     delbtn.textContent = "Delete Habit";
     habitElement.appendChild(delbtn);
     
     //this function is to update the streak when the habit is done for the day and change the button text to show the current streak
     const updateStreak = () => {

        if (habit.doneToday === false) {
            habit.streak += 1;
            habit.doneToday = true;
            streakBtn.textContent = "Streak started" ;
        }else if (habit.doneToday === true) {
            habit.streak += 1;
            habit.doneToday = true;
            streakBtn.textContent = `streak : ${habit.streak}`;
     }
     }
    
     //number of total habits is updated when a new habit is added
    let totalHabits = document.getElementById("total-habits");
        totalHabits.textContent = Number(totalHabits.textContent) + 1;

     //this function is to delete the habit from the list
      const delHabit = () => {
       
     event.target.parentElement.remove();
     totalHabits.textContent = Number(totalHabits.textContent) - 1;

    
     }
        streakBtn.addEventListener("click", updateStreak);
        delbtn.addEventListener("click", delHabit);

     


     //this is to clear the input fields after adding a habit
     habitinput.value = "";
     categoryinput.value = "";
     weeklytargetinput.value = "";

     }
}




addbtn.addEventListener("click", addHabit);
