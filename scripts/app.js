let firsName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codeStackEmail = document.getElementById("codeStackEmail");
let personalEmail=document.getElementById("personalEmail");
let previousNamesGenerated = document.getElementById ("previousNamesGenerated");
let pickBtn = document.getElementById("pickBtn");
let previousNames =[];

function getNameList(){
    return fetch('../data/classData.json')
    .then( response => response.json())
    .then (classData=> {
        console.log(classData)
        return classData.names
    })
}

function getRandomName(names){
    console.log("Entered get random name");
    let randomIndex = Math.floor(Math.random()*names.length);

    return names[randomIndex];
}

function updatePreviousNames(randomStudent){

    console.log("entered previous names");
    if (previousNames.length===5)
        {
            previousNames.shift();
        }

    previousNames.push(randomStudent);

}


pickBtn.addEventListener('click',(e)=>{
  getNameList().then( names =>{
      console.log("entered then");
      console.log(names);
    let randomStudent = (getRandomName(names));
    //display it in DOM
    firstName.innerText=randomStudent.firstName;
    lastName.innerText=randomStudent.lastName;
    codeStackEmail.innerText=randomStudent.codeStackEmail;
    personalEmail.innerText=randomStudent.personalEmail;

    if (previousNames.length===0)
        {
            
            previousNamesGenerated.innerText="Previous Name List is empty";
        }
        else{
            //this joins the Object.firstName + lastName values to a string separated by comma and assigns it to the DOM
            previousNamesGenerated.innerText= previousNames.map(names => names.firstName +" "+ names.lastName).join(", ");
        }


        updatePreviousNames(randomStudent);

    })
});