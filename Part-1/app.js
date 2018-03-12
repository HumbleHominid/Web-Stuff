(function() {
    // Stuff goes in here

    // button click handler
    function onChangeTextClicked() {
        let textStuff = [ 'Text 1', 'Text 2', 'Text 3' ];
        // grab the paragraph element
        let el = document.querySelector('#someParagraph');
        // get the current inner html (the text)
        let curText = el.innerHTML;

        // recursively get new text
        function getText() {
            // pick a random text string to display
            let randNum = Math.floor(Math.random() * textStuff.length)
            let newText = textStuff[randNum];

            // if the newText !== the curText, return newText, else recurse
            return (newText !== curText) ? newText : getText();
        }

        el.innerHTML = getText();
    }

    // register the event
    document.querySelector('#changeTextButton').addEventListener('click',
            onChangeTextClicked);
}) ()
