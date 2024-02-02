// fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=skyrim%20how%20to%20get%20dragon%20rider%20achievement&key=AIzaSyDLxdkAoPEq_7O3GIEVsz7vhGPmt1ffXtY").then(res => res.json()).then(data=>{
//     console.log(data);
// })

// fetch("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4399471167F94DE26086BBE4088FF0A5&format=json&input_json={steamid=76561198103111964}").then(res => res.json()).then(data=>{
//     console.log(data);
// })

fetch("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4399471167F94DE26086BBE4088FF0A5&steamid=76561198103111964&format=json").then(res => res.json()).then(data=>{
    console.log(data);
})


