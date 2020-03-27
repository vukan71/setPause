export function setPause(time = 0) { 
  new Promise(resolve => setTimeout(resolve, time));
} 
