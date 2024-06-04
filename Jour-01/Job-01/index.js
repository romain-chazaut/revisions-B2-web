const userArray = [
    { firstname: 'Alice', lastName: 'Dupont', isActive: true },
    { firstname: 'Bob', lastName: 'Martin', isActive: false },
    { firstname: 'Charlie', lastName: 'Durand', isActive: true },
    { firstname: 'Diana', lastName: 'Leclerc', isActive: false },
    { firstname: 'Eve', lastName: 'Lambert', isActive: true }
  ];
  
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].isActive) {
      console.log(userArray[i].firstname + ' ' + userArray[i].lastName);
    }
  }