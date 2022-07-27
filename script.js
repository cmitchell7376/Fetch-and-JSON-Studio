window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let div = document.getElementById("container");
            let title = document.getElementById("title");
            let newJson = sortedArray(json);
            let liId = 1;
            let count = 0;
            div.innerHTML = "";

            
            for(let i=0; i<newJson.length; i++){
                div.innerHTML +=`
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${newJson[i].firstName} ${newJson[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${newJson[i].hoursInSpace}</li>
                                <li id="${String(liId)}">Active: ${newJson[i].active}</li>
                                <li>Skills: ${newJson[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${newJson[i].picture}">
                    </div>`;
                let li = document.getElementById(String(liId));

                if(newJson[i].active === true){
                    li.style.color = "green";
                }

                count += 1;
                liId += 1;
            }
            title.innerHTML = `${count} Astronauts`;
        });
    });

    function sortedArray(jsonArray){
        let length = jsonArray.length;
        for(let i=0; i < length; ++i){
            for(let j= i + 1; j < length - 1; ++j){
                if(Number(jsonArray[i].hoursInSpace) < Number(jsonArray[j].hoursInSpace)){
                    let tmp = jsonArray[i];
                    jsonArray[i] = jsonArray[j]
                    jsonArray[j] = tmp;
                }
            }
        }
        return jsonArray;
    }
});