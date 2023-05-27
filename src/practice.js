 
 let sum = (x)=>{
  return x*2
 }

 let cache = {}
 let a = (fun)=>{
    return (x)=>{
        
        if(cache[x]){
            console.log("from cache")
            return cache[x]
        }else{
            let result = fun(x)
            cache[x] = result
           
            return result
        }
    }
 }
let temp = a(sum)(2)
 console.log(temp)
