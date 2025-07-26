
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("firstname").value = "";
            }
        })
        function myFunction() {
            let fname = document.getElementById("firstname").value;
            let lname = document.getElementById("lastname").value;
            let age = Number(document.getElementById("age").value);
            let result='';
            let user = {
                firstname:fname,
                lastname:lname,
                age,
            } 
            for(let x in user){
                result += `${user[x]} `;
            }
            
            document.getElementById("output").style.display = "flex";
            document.getElementById('output').innerHTML =`Hello Wellcome in darnsolutions with  ${result}`;
        }

