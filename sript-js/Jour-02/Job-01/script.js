const userArray = [
{ firstname: 'Alice', lastName: 'Dupont', isActive: true},
{ firstname: 'Bob', lastName: 'Martin', isActive: false},
{ firstname: 'Charlie', lastName: 'Durand', isActive: true},
{ firstname: 'Diana', lastName: 'Leclerc', isActive: false},
{ firstname: 'Eve', lastName: 'Lambert', isActive: true}
];

function myLength(toCount) {
    let i = 0;
    while (toCount[i] != null) {
      i++;
    }
    return i;
}
function printUser(){
    const testDiv = document.querySelector('.test')
    testDiv.innerHTML = ''
    for (let i = 0; i < myLength(userArray); i++) {
        const user = document.createElement('h1')
        user.textContent = userArray[i].firstname + ' ' + userArray[i].lastName
        user.className = userArray[i].isActive ? 'active' : 'inactive'
        user.addEventListener('click' , () => changeIsActive(i))
        testDiv.appendChild(user)
    }
}

function changeIsActive(i) {
     userArray[i].isActive = !userArray[i].isActive
     printUser()
}

document.addEventListener('DOMContentLoaded', printUser);
