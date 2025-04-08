<body>
    <h3 id="myH">Hello Learners</h3>
    <button onclick="myfunc()">Click Here</button>
    
    <script>
        function myfunc() {
            var str = "Welcome to QRS Program";  
            const element = document.getElementById("myH"); 
            element.innerHTML = str; 
        }
    </script>
</body>
   
