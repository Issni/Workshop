  var i = 0
        let blocks = document.querySelectorAll(".block"); //getting each load to go up per click?
        let number = document.querySelector(".number"); //this part calls at the number i typed??
        // 1. Select the element you want to add the listener to
        const page = document.querySelector("#page-container");
        // 3. Attach the event listener to the element
        page.addEventListener("click", updateProgress); //each click runs update progress
        console.log(blocks.length)
        function updateProgress() {
            if (i == blocks.length) { window.location.href = "accepted.html";
                //i =  0;
                //blocks.forEach( (block) => {
                    //block.style.background = "transparent";
                //});
            } else {
                blocks[i].style.background = "rgb(255,255,255)";
                let percent = Math.floor((i + 1) * 4);
                number.textContent = percent + "%";
                i = i + 1;
            }
        };



        const hitNotes = document.querySelector('.hit-notes');

        // Define the times (in milliseconds) when you want notes to appear
        const noteTimings = [500, 1200, 2000, 3500, 5000]; // example times

        function spawnNote() {
            const note = document.createElement('div');
            note.classList.add('note');
            hitNotes.appendChild(note);

            // Remove the note after the animation finishes (match your CSS animation duration)
            setTimeout(() => {
                hitNotes.removeChild(note);
            }, 2000); // 2000ms = animation duration
        }

        const maxRuns = 24;

        function runSequence() {
            if (i >= maxRuns) { //this works only once i click through the proress bar 2 times nvm it dosent want to work anymore
                return;
            }

            noteTimings.forEach((time) => {
                setTimeout(() => {
                spawnNote();
                }, time);
            });

            // schedule next sequence after the last timing finishes
            const totalDuration = Math.max(...noteTimings);
            setTimeout(runSequence, totalDuration);
        }

        window.addEventListener("load", () => {
            const page = document.getElementById("page-container");
            page.classList.add("show");
        });


    runSequence();