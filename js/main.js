
    // Jquery for mobile nav toggle
    $(document).ready(function(){
          $(".togglebars").click(function(){
            $(".main_mobile_menu").toggle();
          });
        });

        // first li
        function mobileOnhover1(){
            var x = document.getElementById("mbl_submenu1");
            if(x.style.display === "none"){
                x.style.display = "block";
            } else{
                x.style.display = "none";
            }
        }
        // Secend li
        function mobileOnhover2(){
            var x = document.getElementById("mbl_submenu2");
            if(x.style.display === "none"){
                x.style.display = "block";
            } else{
                x.style.display = "none";
            }
        }
        // Third li
        function mobileOnhover3(){
            var x = document.getElementById("mbl_submenu3");
            if(x.style.display === "none"){
                x.style.display = "block";
            } else{
                x.style.display = "none";
            }
        }

        
    