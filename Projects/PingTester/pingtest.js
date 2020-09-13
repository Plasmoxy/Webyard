const ping = require('ping')

const TARGET = "192.168.0.1"
const N = 120

// <5, 5-90, 90 <
const ranges = [0, 0, 0]

;(async () => {
  
  console.log(`Pinging ${TARGET} ${N}-times...`)
  
  for (let i = 0; i < N; i++) {
    
    const t = await ping.promise.probe(TARGET)
  
    if (t.avg <= 5) ranges[0]++
    else if (t.avg > 5 && t.avg <= 90) ranges[1]++
    else if (t.avg > 90) ranges[2]++
    else throw Error("wrong ping value")
    
    
    console.log(`[${i+1}/${N}] -> ${t.avg} ms`)
    await new Promise((res) => setTimeout(res, 1000))
  }
  
  console.log(`Result:\n<5ms -> ${ranges[0]}\n5-90ms -> ${ranges[1]}\n>90ms -> ${ranges[2]}`)
  
})();