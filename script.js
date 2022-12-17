fetch("https://api.github.com/users")
.then((res) => res.json())
.then((data) => {
    console.log(data[0].avatar_url);
    document
    .getElementById("profileimg1")
    .setAttribute("src",data[1].avatar_url);

     document.getElementById("username1").innerText = data[1].login;

     document.getElementById("visitprofile1").setAttribute("href",data[1].html_url);
     //------------------------------------------------card2----------------------------------------------
     document
     .getElementById("profileimg2")
     .setAttribute("src",data[2].avatar_url);
 
      document.getElementById("username2").innerText = data[2].login;
 
      document.getElementById("visitprofile2").setAttribute("href",data[2].html_url);
      //------------------------------------------------card3----------------------------------------------
     document
     .getElementById("profileimg3")
     .setAttribute("src",data[3].avatar_url);
 
      document.getElementById("username3").innerText = data[3].login;
 
      document.getElementById("visitprofile3").setAttribute("href",data[3].html_url);
      //------------------------------------------------card4----------------------------------------------
     document
     .getElementById("profileimg4")
     .setAttribute("src",data[8].avatar_url);
 
      document.getElementById("username4").innerText = data[8].login;
 
      document.getElementById("visitprofile4").setAttribute("href",data[8].html_url);
     
});