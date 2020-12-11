var Home = {
    template: `
    <div class="home-content">
    <div class="header">
    <!-- <img src="header.jpg" class="header-image" /> -->

    <span class="header-text">
    <h2>CCHN - Winneba</h2>
    <span>College of Community Health Nursing</span>
    <span>2020/21 Academic year Elections</span>
    </span>
    <span class="members-tab">
        Core Members
    </span>
  </div>
  <div class="container-sm main-content">
    <div class="row left-and-right">
        <div class="col-4 left-content" style="margin-top: 80px;">
        <router-link class="nav-link" to="/"><a href="#" class="left-buttons active">Presidential</a></router-link>
            <router-link class="nav-link" to="/vice"><a href="#" class="left-buttons">Vice Preisdent</a></router-link>
            <router-link class="nav-link" to="/secretary"> <a href="#" class="left-buttons">Secretary</a></router-link>
        </div>
        <div class="col-8 right-content">
        <div class="container voting-container">
        <div class="row" style="margin-top: 80px;">
            <div class="col-6">
                <div class="card left-cards" style="width: 18rem; border-bottom: 1px blue solid;">
                    <img src="./ama.jpg" class="card-img-top" alt="..." style="height:180px; object-fit: center;">
                    <div class="card-body">
                      <h5 class="card-title" style="font-size: 1rem; text-align: left;">Ama Acheampong</h5>
                      <p class="card-text" style="font-size: 0.8rem; text-align: left;">SRC President hopeful</p>
                    </div>
                    <a style="width: 100%; margin: 0; padding: 3px 0; padding-left: 15px; text-align: left; background-color: blue; color: white;">Blue Team</a>
                    <div class="cardoverlay">
                        <img src="./thumbprint1.png" alt="" style="width: 40%; display: block; transform: translate(67%); margin-top: 20px; margin-bottom: 40px;" />
                        <button type="button" class="vote-btn">Vote</button>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card left-cards" style="width: 18rem;">
                    <img src="./agya-nto.jpg" class="card-img-top" alt="..." style="height:180px; object-fit: center;">
                    <div class="card-body">
                      <h5 class="card-title" style="font-size: 1rem; text-align: left;">Agya Nto</h5>
                      <p class="card-text" style="font-size: 0.8rem; text-align: left;">JCR President hopeful</p>
                    </div>
                    <a style="width: 100%; margin: 0; padding: 3px 0; padding-left: 15px; text-align: left; background-color: purple; color: white;">Royal Team</a>
                    <div class="cardoverlay">
                        <img src="./thumbprint1.png" alt="" style="width: 40%; display: block; transform: translate(67%); margin-top: 20px; margin-bottom: 40px;" />
                        <button type="button" class="vote-btn">Vote</button>
                    </div>
                </div>
            </div>
    
            
            <div class="col-6 left-cards-after-st-two">
                <div class="card left-cards" style="width: 18rem;">
                    <img src="./agya-nto.jpg" class="card-img-top" alt="..." style="height:180px; object-fit: center;">
                    <div class="card-body">
                      <h5 class="card-title" style="font-size: 1rem; text-align: left;">Agya Nto</h5>
                      <p class="card-text" style="font-size: 0.8rem; text-align: left;">JCR President hopeful</p>
                    </div>
                    <a style="width: 100%; margin: 0; padding: 3px 0; padding-left: 15px; text-align: left; background-color: yellow; color: white;">Gold Team</a>
                    <div class="cardoverlay">
                        <img src="./thumbprint1.png" alt="" style="width: 40%; display: block; transform: translate(67%); margin-top: 20px; margin-bottom: 40px;" />
                        <button type="button" class="vote-btn">Vote</button>
                    </div>
                </div>
            </div>
    
            <div class="col-6 left-cards-after-st-two">
                <div class="card left-cards" style="width: 18rem;">
                    <img src="./agya-nto.jpg" class="card-img-top" alt="..." style="height:180px; object-fit: center;">
                    <div class="card-body">
                      <h5 class="card-title" style="font-size: 1rem; text-align: left;">Agya Nto</h5>
                      <p class="card-text" style="font-size: 0.8rem; text-align: left;">JCR President hopeful</p>
                    </div>
                    <a style="width: 100%; margin: 0; padding: 3px 0; padding-left: 15px; text-align: left; background-color: green; color: white;">Green Team</a>
                    <div class="cardoverlay">
                        <img src="./thumbprint1.png" alt="" style="width: 40%; display: block; transform: translate(67%); margin-top: 20px; margin-bottom: 40px;" />
                        <button type="button" class="vote-btn">Vote</button>
                    </div>
                </div>
            </div>
     
            </div>
    </div>
        </div>
      </div>
  </div>
    </div> 
`
};