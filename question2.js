function delayedGreeting(name) {
    
    //callback function
    //The delay time in milliseconds (1000ms = 1 second)
    setTimeout(function() {
      console.log(`Hello, ${name}!`);
    }, 2000); 
    // 2000 milliseconds = 2 seconds
  }
  
  
  delayedGreeting("Alice");