(function() {
    console.log("buttons can't reach this :(");    
})()

var toggle = true
function changeText() {
    if (toggle) {
        toggle = false;
        return "things change"
    }else {
        toggle = true;
        return "texty stuff"
    }
}
