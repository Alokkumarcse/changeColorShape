var curShape = "square";
var shape =["square", "circle", "rectangle", "triangle"];
var color =["green", "black","gray","red","blue","pink"];

/*
function getIndex(min, max){
    return Math.floor(Math.random()*(max - min) +min );
}

function changeColor(){
    var rand = color[getIndex(0, color.length)];
    document.getElementById('shape').style['background-color'] = rand;
}

function changeShape(){
    var rand = shape[getIndex(0, shape.length)];
    document.getElementById(curShape).setAttribute('id', rand);
    curShape = rand;
}

document.getElementById('change-shape').addEventListener('click', changeShape);
document.getElementById('change-color').addEventListener('click',changeColor);

*/


function getIndex(min, max){
    return Math.floor(Math.random()*(max - min) +min );
}

document.getElementById('change-shape').onclick = function changeShape(){
    var rand = shape[getIndex(0, shape.length)];
    document.getElementById(curShape).setAttribute('id', rand);
    curShape = rand;
};

document.getElementById('change-color').onclick = function changeColor(){
    var rand = color[getIndex(0, color.length)];
    document.getElementById('shape').style['background-color'] = rand;
};