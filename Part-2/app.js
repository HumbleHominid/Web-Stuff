(function() {
    function onDiffRadioChanged() {
        // board
        let difficulties = {
            easy: {
                numMines: 10,
                boardSize: {
                    x: 8,
                    y: 8
                }
            },
            intermediate: {
                numMines: 40,
                boardSize: {
                    x: 16,
                    y: 16
                }
            },
            expert: {
                numMines: 99,
                boardSize: {
                    x: 16,
                    y: 30
                }
            }
        }

        // finish rest of handler. just have it log the change for now.
        // will have to construct the board later
    }

    // bind handler
}) ()
