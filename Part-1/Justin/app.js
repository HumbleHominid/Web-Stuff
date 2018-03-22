(function() {
    console.log("buttons can't reach this :(");    
    function buttonPressed() {
        var texts = ['Text things', 'More text things'];

        var textField = document.querySelector('#demo');

        var text = textField.innerHTML;

        text = (text === texts[0]) ? texts[1] : texts[0];

        textField.innerHTML = text;
    }

    //event hanlder thingy
    document.querySelector('#Button').addEventListener('click',
        buttonPressed);
})()
