

// Write your solution in this file!
const employee = {names: "Sam", streetAdress : "00100"};

function updateEmployeeWithKeyAndValue(employee,key,value ){
    
    return { ...employee,[key]:value};
}
 function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
     employee [key] = value;
     return employee;

 }
 function deleteFromEmployeeByKey(employee,key){
    const sem = { ...employee};
    delete sem[key];
    return sem;

 }
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
