function printUserInfo(
  name: string,
  age: number,
  role?: 'admin'|'user'|'guest'
){
  console.log(`Name is ${name}`)
  console.log(`Age is ${age}`)
  
  if(role){
    console.log(`Role is ${role}`)
  }else{
    console.log('Role is specified.')
  }
}

printUserInfo('Mithun', 35, 'admin')