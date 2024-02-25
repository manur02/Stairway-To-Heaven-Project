import Header from './Header'
import Footer from './Footer'
import bakerPhoto from '../Photos/Baker.jpg'
import video1 from '../Photos/Video1.mp4'
import video2 from '../Photos/Video2.mp4'

export default function about(){
    return(
        <>
        <Header/>
        <main  id="background-img">
        <section class="aboutContainer">
                <div class="bakerPhoto">
                    <img class= "img-baker" src={bakerPhoto} alt="Baker"/>
                </div>
                <div class="aboutBaker">
                    <h2>&nbsp;  HIMA</h2>
                        <ul>
                            <li>I am a Chatered Accountant who loves to bake!</li>
                            <li>My team consists of me and my daughters who share the love of baking.</li>
                            <li>We are currently available only in the city of Hyderabad which is situated in the state of Telangana in India</li>
                            <li>We make theme based cakes, multiple layered cakes, cupcakes, pinata cakes, prank cakes,
                                brownies, cakesicles, brownie jars, macroons and customized chocolates.
                            </li>
                            <li>We provide all of the above mentioned in any flavour of your choice!</li>
                            <li>Since we have a dog and we love dogs, we also make cakes for our beloved pets.</li>
                            <li>Our contact information is mentioned on our Instagram profile.</li>
                        </ul>
                </div>  
        </section>

        <section>
            <h2>Taste and see, I bet you'd love it!</h2>
            <video width="320" height="240" controls="controls">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video> &nbsp;
            <video width="320" height="240"  controls="controls">
                <source src={video2} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

        </section>
        <section>
            <h3>Hope you liked the video. If you do, to see more of our work click on the link below and follow us on Instagram and Facebook!</h3>
            <h3>Click on the icons below to see more!</h3>
            <a href="https://instagram.com/stairwaytoheavencakes?igshid=MWZjMTM2ODFkZg==" class="fa fa-instagram" target="_blank"></a>
            <a href="https://www.facebook.com/stairwaytoheavencakes" class="fa fa-facebook" target="_blank"></a>
        </section>

        </main>
        <Footer/>
        </>
    )
}