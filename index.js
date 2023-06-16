function updateEmployeeWithKeyAndValue(employee, key, value) {
 const updatedEmployee = {
      ...employee,
      [key]: value,
    };
    return updatedEmployee;
  }
  console.log(employee);
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  const employee = {
    name: "jack",
    age: 30,
  }
 const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 31);
  console.log(updatedEmployee);

 destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 31);
 console.log(employee);

 const employeeWithoutAge = deleteFromEmployeeByKey(employee, "age");
console.log(employeeWithoutAge);

destructivelyDeleteFromEmployeeByKey(employee, "age");
console.log(employee);



 
  
  

  
  