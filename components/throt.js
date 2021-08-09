function throttler(){
    let timer_ref;
    return function (delay_time, callback){
      if(timer_ref !== undefined){
        return
      }
  
      timer_ref = setTimeout(() =>{
        callback()
        timer_ref = undefined
      }, delay_time)
    }
  }

  export default throttler