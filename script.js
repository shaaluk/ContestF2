
const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].profession === "developer") {
        console.log(`Name: ${data[i].name}, Age: ${data[i].age}, Profession: ${data[i].profession}`);
      }
    }
   }
  
  
  // 2. Add Data
  function addData() 
  {
    const name = prompt("Enter the name:");
    const age = parseInt(prompt("Enter the age:"));
    const profession = prompt("Enter the profession:");

    if (name && age && profession) {
        const newData = { name, age, profession };
        data.push(newData);
        console.log("New data added:", newData);
    }

  }
  
  // 3. Remove Admins
  function removeAdmin() {
  
  const filteredData = data.filter(person => person.profession !== "admin");
  console.log("After Removing filtered data:", filteredData);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const array1 = [1,2,3];
    const array2 = [4,5,6];
    const concatenatedArray = array1.concat(array2);
    console.log("Concatenated Array", concatenatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge =0;
    for(let i =0;i<data.length;i++){
      totalAge+=data[i].age;
  
    }
    const averageAge = totalAge/data.length;
    console.log("Average age",averageAge);
  }
  
  
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.filter(person => person.age > 25);
  console.log("People above 25:", above25);
  }
  

  // 7. Unique Professions
  function uniqueProfessions()
   {
    const uniqueProfessions ={}
    for(let i =0;i<data.length;i++)
    {
  const profession = data[i].profession;
  uniqueProfessions[profession] = true;
    }
    const uniqueProfessionsArray=Object.keys(uniqueProfessions);
    console.log("Unique Profession",uniqueProfessionsArray);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age Ascending",data);
  }
  

  // 9. Update Profession
  function updateJohnsProfession() {
    const johnIndex = data.findIndex(person => person.name === "john");
    if (johnIndex !== -1) {
      data[johnIndex].profession = "manager";
    }
    console.log("John's Updated Profession",data);
  }
  

  // 10. Profession Count
  function getTotalProfessions() {

  let developerCount =0;
  let adminCount =0;
  for(let i =0;i<data.length;i++){
    const profession = data[i].profession;
    if(profession ==="developer"){
      developerCount++;
    }
    else if(profession ==="admin"){
      adminCount++;
    }
  }
  console.log("Total Developers",developerCount);
  console.log("Total Admins",adminCount);
  }