"use strict";
//::::  Create a function with parameters and an optional literal type. :::::
function printUserInfo(name, age, role) {
    console.log(`Name is ${name}`);
    console.log(`Age is ${age}`);
    if (role) {
        console.log(`Role is ${role}`);
    }
    else {
        console.log('Role is not specified.');
    }
}
// printUserInfo('Mithun', 35, 'admin')
printUserInfo('Mithun', 35);
