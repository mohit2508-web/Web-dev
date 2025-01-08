// function dataSaver(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("Data Saved")
//         }else{
//             reject('Week Connection')
//         }
//     })
// }
// dataSaver('Apna College')
// .then((result)=>{
//     console.log('data1 saved')
//     console.log("result:",result)
//     return dataSaver('shiv baba')
   
// })
// .then((result)=>{
//     console.log('data2 saved')
//     console.log("result:",result)
//     return dataSaver('mohit jadon')
   
// })
// .then((result)=>{
//     console.log('data3 saved')
//     console.log("result:",result)

// })
// .catch((error)=>{
//     console.log('promise  was rejected')
//     console.log("error:",error)
// })
