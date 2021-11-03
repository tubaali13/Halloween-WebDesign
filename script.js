var x = document.querySelector(".nav-list"),
        close = document.querySelector(".fa-times"),
        burger = document.querySelector(".fa-bars");

        function openNav() {
            close.style.display = "block";
            burger.style.display = "none";
            x.style.width = "250px";
        }

        function closeNav() {
            close.style.display = "none";
            burger.style.display = "block";
            x.style.width = "0";
        }