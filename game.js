  var i = 0
        let blocks = document.querySelectorAll(".block"); //calls the blocks i have - make array - so I can change colour one at a time in order
        let number = document.querySelector(".number"); //this part calls at the number i typed (percentage)
        const page = document.querySelector("#page-container");
        page.addEventListener("click", updateProgress); //each click runs update progress
        console.log(blocks.length)
        function updateProgress() {
            if (i == blocks.length) { window.location.href = "accepted.html";
            
            } else {
                blocks[i].style.background = "rgb(255,255,255)";
                let percent = Math.floor((i + 1) * 4); //Colby magic
                number.textContent = percent + "%";
                i = i + 1;
            }
        };



        // I asked ChatGPT to generate a code for the notes to apear at exact times 
        const hitNotes = document.querySelector('.hit-notes');

       
        const noteTimings = [500, 1200, 2000, 3500, 5000]; 

        function spawnNote() {
            const note = document.createElement('div');
            note.classList.add('note');
            hitNotes.appendChild(note);

            setTimeout(() => {
                hitNotes.removeChild(note);
            }, 2000); // 2000ms = animation duration
        }

        const maxRuns = 24;
        // if i is 24 or more stop running the function 
        function runSequence() {
            if (i >= maxRuns) { 
                return;
            }

            //gets the time it takes for the notes spawning in restarts it after the last note has spawned
                //first chunk spawns the next set of notes in relation to the noteTimings with the use of the time (setTimeout) 
                //second chunk gets the time of delay using the time it takes from the first note to last note to spawn
            noteTimings.forEach((time) => {
                setTimeout(() => {
                spawnNote();
                }, time);
            });

            const totalDuration = Math.max(...noteTimings);
            setTimeout(runSequence, totalDuration);
        }


        //page load animation javascript came with the Youtube animation tutorial
            //* once page loads, adding show to group triggers animation  ie. once Billy arrives give him an apple which tells him its time to go to the dentist*/
        window.addEventListener("load", () => {
            const page = document.getElementById("page-container");
            page.classList.add("show");
        });


    runSequence();