<body>
    <div id="root">
        <form name="myform" onsubmit="validate()" method="post">
            <b>Phone Number: </b><input type="text" name="ContactNumber">
            </input>
            <input type="submit" value="Submit"></input>
            </form>
            
        
    </div>
    <script>
        function validate(){
            var x= document.forms["myform"]["ContactNumber"].value;
            if (isNaN(x) || x== "") {
                alert("Please enter number")
            }
            else{
                let value ="Submitted Successfully";
                document.getElementById("root").innerHTML = value;
            }
        }
    </script>
</body>