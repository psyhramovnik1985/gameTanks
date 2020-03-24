            function  directionTowerTank () {
                positionX_Y = (mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex);

                if (mousePositionX >= 550*adaptationIndex && mousePositionY < 400*adaptationIndex) {
                    topPositionTowerTank = 0;                    
                    if (positionX_Y <= 0) {leftPositionTowerTank = 0};
                    if (positionX_Y <= -0.13) {leftPositionTowerTank = 120};
                    if (positionX_Y <= -0.268) {leftPositionTowerTank = 240};
                    if (positionX_Y <= -0.412) {leftPositionTowerTank = 360};
                    if (positionX_Y <= -0.578) {leftPositionTowerTank = 480};
                    if (positionX_Y <= -0.770) {leftPositionTowerTank = 600};
                    if (positionX_Y <= -1) {leftPositionTowerTank = 720};
                    if (positionX_Y <= -1.30) {leftPositionTowerTank = 840};
                    if (positionX_Y <= -1.72) {leftPositionTowerTank = 960};
                    if (positionX_Y <= -2.2) {leftPositionTowerTank = 1080};
                    if (positionX_Y <= -2.70) {leftPositionTowerTank = 1200};
                    if (positionX_Y <= -4.5) {leftPositionTowerTank = 1320};
                };

                if (mousePositionX >= 550*adaptationIndex && mousePositionY >= 400*adaptationIndex) {
                    topPositionTowerTank = 95;
                    if (positionX_Y <= 200*adaptationIndex) {leftPositionTowerTank = 0};
                    if (positionX_Y <= 45) {leftPositionTowerTank = 120};
                    if (positionX_Y <= 12) {leftPositionTowerTank = 240};
                    if (positionX_Y <= 4.7) {leftPositionTowerTank = 360};
                    if (positionX_Y <= 3.3) {leftPositionTowerTank = 480};
                    if (positionX_Y <= 2.6) {leftPositionTowerTank = 600};
                    if (positionX_Y <= 1.9) {leftPositionTowerTank = 720};
                    if (positionX_Y <= 1.4) {leftPositionTowerTank = 840};
                    if (positionX_Y <= 1.2) {leftPositionTowerTank = 960};
                    if (positionX_Y <= 0.84) {leftPositionTowerTank = 1080};
                    if (positionX_Y <= 0.5) {leftPositionTowerTank = 1200};
                    if (positionX_Y <= 0.25) {leftPositionTowerTank = 1320};
                };
                    
                if (mousePositionX < 550*adaptationIndex && mousePositionY > 400*adaptationIndex) { 
                    topPositionTowerTank = 190;
                    if (positionX_Y <= 0) {leftPositionTowerTank = 0};
                    if (positionX_Y <= -0.14) {leftPositionTowerTank = 120};
                    if (positionX_Y <= -0.5) {leftPositionTowerTank = 240};
                    if (positionX_Y <= -0.7) {leftPositionTowerTank = 360};
                    if (positionX_Y <= -0.99) {leftPositionTowerTank = 480};
                    if (positionX_Y <= -1.5) {leftPositionTowerTank = 600};
                    if (positionX_Y <= -2.1) {leftPositionTowerTank = 720};
                    if (positionX_Y <= -2.50) {leftPositionTowerTank = 840};
                    if (positionX_Y <= -2.9) {leftPositionTowerTank = 960};
                    if (positionX_Y <= -3.9) {leftPositionTowerTank = 1080};
                    if (positionX_Y <= -4.80) {leftPositionTowerTank = 1200};
                    if (positionX_Y <= -7.8) {leftPositionTowerTank = 1320};
                };

                if (mousePositionX < 550*adaptationIndex && mousePositionY < 400*adaptationIndex) {
                    topPositionTowerTank = 285;
                    if (positionX_Y <= 300) {leftPositionTowerTank = 0};
                    if (positionX_Y <= 7.5) {leftPositionTowerTank = 120};
                    if (positionX_Y <= 3.68) {leftPositionTowerTank = 240};
                    if (positionX_Y <= 2.412) {leftPositionTowerTank = 360};
                    if (positionX_Y <= 1.9) {leftPositionTowerTank = 480};
                    if (positionX_Y <= 1.6) {leftPositionTowerTank = 600};
                    if (positionX_Y <= 1.2) {leftPositionTowerTank = 720};
                    if (positionX_Y <= 1) {leftPositionTowerTank = 840};
                    if (positionX_Y <= 0.85) {leftPositionTowerTank = 960};
                    if (positionX_Y <= 0.7) {leftPositionTowerTank = 1080};
                    if (positionX_Y <= 0.4) {leftPositionTowerTank = 1200};
                    if (positionX_Y <= 0.175) {leftPositionTowerTank = 1320};
                };
            };  


            // function  directionTowerTank () {
            //     for (var i = 0; i < 48; i++) {
            //         let radius = canvasHeight/2;
            //         let angle = (i)*7.5/180*Math.PI;
            //         topPosition = Math.round(canvasHeight/2 - radius*Math.cos(angle));
            //         leftPosition = Math.round(canvasWidth/2 + radius*Math.sin(angle)); 
            //         if ((mousePositionX < 550) && (i > 24)) {
            //             if ((((mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex)) <= ((leftPosition-550*adaptationIndex)/(topPosition-400*adaptationIndex))*1.2) && (((mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex)) >= ((leftPosition-550*adaptationIndex)/(topPosition-400*adaptationIndex))*0.8)) {
            //                 topPositionTowerTank = (Math.floor(i/12))*95;
            //                 leftPositionTowerTank = (i-12*(Math.floor(i/12)))*120;
            //             };
            //             if ((((mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex)) >= ((leftPosition-550*adaptationIndex)/(topPosition-400*adaptationIndex))*1.2) && (((mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex)) <= ((leftPosition-550*adaptationIndex)/(topPosition-400*adaptationIndex))*0.8)) {
            //                 topPositionTowerTank = (Math.floor(i/12))*95;;
            //                 leftPositionTowerTank = (i-12*(Math.floor(i/12)))*120
            //             };
            //         };
            //         if ((mousePositionX >= 550) && (i < 24)) {
            //             if ((((mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex)) <= ((leftPosition-550*adaptationIndex)/(topPosition-400*adaptationIndex))*1.2) && (((mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex)) >= ((leftPosition-550*adaptationIndex)/(topPosition-400*adaptationIndex))*0.8)) {
            //                 topPositionTowerTank = (Math.floor(i/12))*95;
            //                 leftPositionTowerTank = (i-12*(Math.floor(i/12)))*120;
            //             };
            //             if ((((mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex)) >= ((leftPosition-550*adaptationIndex)/(topPosition-400*adaptationIndex))*1.2) && (((mousePositionX-550*adaptationIndex)/(mousePositionY-400*adaptationIndex)) <= ((leftPosition-550*adaptationIndex)/(topPosition-400*adaptationIndex))*0.8)) {
            //                 topPositionTowerTank = (Math.floor(i/12))*95;;
            //                 leftPositionTowerTank = (i-12*(Math.floor(i/12)))*120
            //             };
            //         };
            //     };
            // }; 