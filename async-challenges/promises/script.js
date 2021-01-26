// create a promise 
// wait for 4 seconds
// resolve or reject based on randomBool
// false - reject 'hero is on vacation'
// true - resolve 'batman is here'


const randomBool = Boolean(Math.round(Math.random()));

(async function() {
    try{
        const result = await pendingPromise();
        console.log(result);
    }catch(err){
        console.log(err)
    }
})();

function pendingPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(randomBool) {
                resolve('true')
            }
            else {
                reject(new Error('false'))
            }
        }, 4000);
    })
}