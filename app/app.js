// Homework-eight
// Kiara Castillo Magallanes



var homeContent =` <div class="homeContent">


        <div class="hero">

          <div class="callout">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt officia id vero, eum, incidunt voluptates veniam ut ratione doloribus at, quae aliquam. Non eum, repudiandae dolore laboriosam possimus nisi.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt officia id vero, eum, incidunt voluptates veniam ut ratione doloribus at, quae aliquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt officia id vero, eum, incidunt voluptates veniam ut ratione doloribus at, quae aliquam.</p>
            </p>
            <button onclick="buttonClick()">Click</button>

           
          </div>


</div>`
 var aboutContent = ` <div id="app">
 <div class="aboutContent">
 <img src="images/about.jpg" />
 
  <h1>About</h1>

  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt officia id vero, eum, incidunt voluptates veniam ut ratione doloribus at, quae aliquam. Non eum, repudiandae dolore laboriosam possimus nisi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt officia id vero, eum, incidunt voluptates veniam ut ratione doloribus at, quae aliquam. Non eum, repudiandae dolore laboriosam possimus nisi.Amet deserunt officia id vero, eum, incidunt voluptates veniam ut ratione doloribus at, quae aliquam. Non eum, repudiandae dolore laboriosam possimus nisi.Amet deserunt officia id vero, eum, incidunt voluptates veniam ut ratione doloribus at, quae aliquam. Non eum, repudiandae dolore laboriosam possimus nisi.</p>

 

</div>`;
 var galleryContent = `
 
 <div class="content-gallery">
    

        <div class="hero">
            <div class="callout">
            <h1>Gallery</h1>
            </div>

        
        </div>

        <div class="photo">
            
            <div class="gallery">
            <a target="_blank" href="images/gallery1.jpg">
              <img src="images/gallery1.jpg"  width="800" height="600">
            </a> </div>
    
         <div class="gallery">
                <a target="_blank" href="images/gallery2.jpg">
                  <img src="images/gallery2.jpg"  width="800" height="600">
                </a> </div>
    
                <div class="gallery">
                    <a target="_blank" href="images/gallery3.jpg">
                      <img src="images/gallery3.jpg"  width="800" height="600">
                    </a> </div>
    
                    <div class="gallery">
                        <a target="_blank" href="images/gallery4.jpg">
                          <img src="images/gallery4.jpg"  width="800" height="600">
                        </a> </div>
    
                        <div class="gallery">
                            <a target="_blank" href="images/gallery5.jpg">
                              <img src="images/gallery5.jpg"  width="800" height="600">
                            </a> </div>
    
                            <div class="gallery">
                                <a target="_blank" href="images/gallery6.jpg">
                                  <img src="images/gallery6.jpg"  width="800" height="600">
                                </a> </div>

                                </div>
            </div>
 `;


 var contactContent = `
 
 <div class="contactForm">

 <h1>Contact</h1>
          <div class="map">
            <img src="images/map.png" alt="map" />
           
          </div>
          <div class="form">
            <div class="textInput">
              <input type="text" placeholder="Your name..." />
            </div>
            <div class="textInput">
              <input type="text" placeholder="Email Address..." />
            </div>
            <div class="textInput">
              <input type="text" placeholder="Company" />
            </div>
            <div class="messageInput">
              <input type="text" placeholder="Message..." />
            </div>
            <div class="subBtn">SEND MESSAGE</div>
          </div>
        </div>`;

 


function initListeners(){
    //let btnId;

    $("nav a").on("click", function (e) {
       // console.log("buttonclick", e ); //muestra toda la info y variables en el.  + e hace que el name buttonclick show
   let btnId = e.currentTarget.id;
   let pageContentID = btnId + "Content";
    
    changePageContent(pageContentID);
  

});
}


function buttonClick(){
    alert("Hi, I hope do you like my pages");
} 

function changePageContent
(pageContentVarName){
    $("#app").html(eval(pageContentVarName)); 

}


$(document).ready(function () { 
   
  changePageContent("homeContent"); 
  initListeners(); 

});

