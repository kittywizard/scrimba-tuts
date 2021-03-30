
async function getTV(show) {
    let result = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}&embed=seasons`);
    let data = await result.json();
    return data;
}

getTV("battlestar galactica").then(show => {
    console.log(show);
    
})