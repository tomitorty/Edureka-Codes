<body>
    <div id="root">
        <form name="myform" onsubmit="validatye()" method="post">
            Nmae:<input type="text" name="name">
            <input type="submit" value="submit"></  input>

        </form>

    </div>
    <script>
        function validate(){
            var x =document.form["myform"]["name"].value;
            if(x==""){
                alert("name Can't be Empty"); return false;
            }
            else {
                let value = "Form Submitted Successfully";
                document.getElementById("root").innerHTML = VALUE;

            }
        }
    </script>
</body>