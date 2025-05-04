{
  // :::: Write a function that reverses a string ::::
  type Text = string;
  function reverseString(text:Text){
    const reversedText = text.split("").reverse().join("");
    console.log(reversedText)
  }
  reverseString('Hello')





  // 
}