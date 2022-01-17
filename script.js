function addInput(){
    // alert("hello");
    var parent = document.body;
    const newDiv = document.createElement("div");
    var length = document.getElementById("length").value;
        length = parseInt(length);
    for(var i = 1; i <=length*length; i++){
        var inputField = document.createElement("input");
        inputField.placeholder="Enter " + i + " Element";
        inputField.id="input"+i;
        inputField.style="display:block;";
        parent.appendChild(newDiv.appendChild(inputField));
    }
    var btn = document.createElement("button");
    btn.type = "submit";
    btn.innerHTML = "Submit";
    // btn.id = "btn";
    // document.getElementById("btn").addEventListener('click', storeArray());
    // btn.onclick = "storeArray();";
    parent.appendChild(newDiv.appendChild(btn));
}

function storeArray(){
    var array = new Array(length-1);
    var c = 1;
    for(var i = 0; i < length; i++)
    {
        array[i] = new Array(length-1);
        for(var j = 0; j < length; j++)
        {
            let element = "input" + c++;
            array[i][j] = document.getElementById(element).value;
        }
    }
    displayDiagonal();
}
function displayDiagonal(){
    var diagonal1 = "";
    var diagonal2 = "";
    let c = length-1;
    for(var i = 0; i < length; i++){
        diagonal1 = diagonal1 + array[i][i] + " ";
        diagonal2 = diagonal2 + array[i][c--] + " ";
    }
    let newDiv2 = document.createElement("div");
    newDiv2.innerHTML = diagonal1 + "<br/>"+ diagonal2;
    parent.appendChild(newDiv2);
}