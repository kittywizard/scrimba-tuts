document.getElementById("action").addEventListener("click", ()=>{
    
    // call user API
    // store random first name in a variable firstUser
    // call user API again, after you finish calling first one
    // store random first name in variable secondUser 
    // console log `${firstUser} and ${secondUser} are friends`
    
    const userApi = 'https://randomuser.me/api/'

    fetch(userApi)
        .then(response => response.json())
        .then(json => {
            let firstName = json.results[0].name.first;
            
            fetch(userApi)
                .then(response => response.json())
                .then(json => {
                    let secondName = json.results[0].name.first;
                    console.log(`${firstName} and ${secondName} are friends!`)

    )}
    
    // async function callAPI(url) {
    //     const promise = await fetch(url);
    //     const data = await promise.json();

    //     let firstName = data.results[0].name.first;
    // }