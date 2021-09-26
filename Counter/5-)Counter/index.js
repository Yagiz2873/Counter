
        var counter = prompt("Please enter the counter time as seconds");

        var p = document.getElementById("p1");
        p.innerHTML = counter;
        p.style.fontSize = "50px"; 



        var input = document.getElementById("input");
        input.addEventListener("click", startCounter);

        var div = document.getElementById("div1");


        function startCounter() {
            var time = setInterval(reduceTime, 1000);

            var input1 = document.createElement("input");
            input1.value = "STOP";
            input1.style.textAlign = "center";
            div.appendChild(input1);
            input1.addEventListener("click", stop);

            var input2 = document.createElement("input");
            input2.value = "RESET";
            input2.style.textAlign = "center";
            div.appendChild(input2);
            input2.addEventListener("click", reset);

            var input3 = document.createElement("input");
            input3.value = "CONTINUE";
            input3.style.textAlign = "center";


            var input4 = document.createElement("input");
            input4.value = "RELOAD";
            input4.style.textAlign = "center";


            input.remove();



            function reduceTime() {

                counter = counter - 1;
                p.innerHTML = counter;
                if (counter == 0) {
                    clearInterval(time);
                    input2.remove();
                    input1.remove();
                    input3.remove();
                    input.removeEventListener("click", startCounter);
                    div.innerHTML += "<p style=\"font-size:50px;\">TIME'S UP!!!</p>";

                    div.appendChild(input4);
                    input4.addEventListener("click", reload);




                }




            }

            function reset() {
                counter = 0;
                p.innerHTML = "0";
                clearInterval(time);
                input1.remove();
                input2.remove();
                input3.remove();
                input.removeEventListener("click", startCounter);
                div.innerHTML += "<p style=\"font-size:45px;\" >THE COUNTER WAS SET TO ZERO!!!</p>";

                div.appendChild(input4);
                input4.addEventListener("click", reload);
            }

            function stop() {

                // Stop All Intervals
                var interval_id = window.setInterval(() => {}, 99999);
                for (var i = 0; i < interval_id; i++)
                    window.clearInterval(i);

                input1.remove();
                div.appendChild(input3);
                input3.addEventListener("click", continueCounter);


                function continueCounter(e) {
                    input3.remove();
                    div.appendChild(input1);
                    input1.addEventListener("click", stop);

                    // Stop All Intervals 
                    var interval_id = window.setInterval(() => {}, 99999);
                    for (var i = 0; i < interval_id; i++)
                        window.clearInterval(i);

                    var time = setInterval(reduceTime, 1000);

                }

            }

            function reload() {
                location.reload();
            }




        }
    