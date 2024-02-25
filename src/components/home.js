import Header from './Header'
import Footer from './Footer'
import banner from '../Photos/Banner.jpg'
import cakes from '../Photos/Cakes.jpg'
import cupcakes from '../Photos/Cupcakes.jpg'
import cakesicles from '../Photos/Cakesickle.jpg'
import brownies from '../Photos/Browines.jpg'
import macroons from '../Photos/Macroons.jpg'
import brownieJars from '../Photos/Browines.jpg'
import chocolates from '../Photos/Chocolates.jpg'



export default function home(){
    return(
        <>
        <Header/>
        <div>
    <main>
        <section>
            <img id="banner-img" src={banner} alt="Banner"></img>
            <div id="description">
                <p id="below-banner-heading">TREATS FOR EVERY OCCASION</p>
                <p><b>____________________________</b></p>
                <p>Welcome to the Stairway to Heaven, where every bite tells a sweet story. Our small startup bakery is a cozy haven of homemade goodness, offering a carefully curated selection of freshly baked treats. From beautiful looking cakes to decadent cupcakes, each creation is crafted with love and attention to detail. Join us on this delightful journey, and savor the simple pleasures that our bakery brings to your day.</p>
            </div> <br></br>
            <h1>Our services include making...</h1>
           <div className="container">
                <div className="grid-container">
                    <aside className="left">    
                        <img src={cakes} alt="Cakes"></img>
                    </aside>
                    <article className="right">
                        <div className="content">
                            <p className="img-caption">CAKES</p>
                            <p className="info">Experience the magic of theme-based cakes at Stairway to Heaven. Whether it's a birthday, wedding, or any occasion, our cakes are designed to match your theme. Plus, you can choose your favorite flavor to make your celebration even sweeter.</p>
                        </div>
                    </article>
                </div>

                <div className="grid-container">
                    <div className="left">    
                        <img src={cupcakes} alt="Cupcakes"></img>
                    </div>
                    <div className="right">
                        <div className="content">
                            <p className="img-caption">CUPCAKES</p>
                            <p  className="info">Add a touch of magic to your celebrations with our theme-inspired cupcakes. Perfect for birthdays, weddings, and special events, our cupcakes are uniquely designed to complement your theme. Customize the flavors to make your moment extra special.</p>
                        </div>
                    </div>
                </div>

                <div className="grid-container">
                    <div className="left">    
                        <img src={cakesicles} alt="Cakesickles"></img>
                    </div>
                    <div className="right">
                        <div className="content">
                            <p className="img-caption">CAKESICKLES</p>
                            <p  className="info">Elevate your celebrations with a twist of innovation through our theme-based cakes, cupcakes, and even cakesickles. Whether it's a birthday, wedding, or any special event, our creations are custom-designed to match your theme. What's more, you can unleash your creativity and customize flavors for a truly one-of-a-kind experience.</p>
                        </div>
                    </div>
                </div>

                <div className="grid-container">
                    <div className="left">    
                        <img src={brownies} alt="Brownies"></img>
                    </div>
                    <div className="right">
                        <div className="content">
                            <p className="img-caption">BROWNIES</p>
                            <p  className="info">Discover pure indulgence in every bite with our gourmet brownies. Handcrafted with love, our brownies are a delightful blend of rich chocolate and your favorite add-ins. Whether you prefer classNameic fudge or innovative flavors, our brownies are a sweet treat for any occasion.</p>
                        </div>
                    </div>
                </div>
                
                <div className="grid-container">
                    <div className="left">    
                        <img src={macroons} alt="Macroons"></img>
                    </div>
                    <div className="right">
                        <div className="content">
                            <p className="img-caption">MACROONS</p>
                            <p  className="info">Experience the delicate charm of macarons, a French pastry masterpiece. These light and airy almond meringue cookies, filled with luscious ganache or buttercream, offer a delightful burst of flavor in every bite. From classNameic favorites like pistachio and raspberry to innovative creations, our macarons are a taste of pure luxury for any sweet moment.</p>
                        </div>
                    </div>
                </div>

                <div className="grid-container">
                    <div className="left">    
                        <img src= {brownieJars} alt="Brownie Jars"></img>
                    </div>
                    <div className="right">
                        <div className="content">
                            <p className="img-caption">BROWNIE JARS</p>
                            <p  className="info">Experience the decadence of our gourmet brownie jars. Each jar is a work of art, layering rich, fudgy brownie bites with layers of creamy frosting and delightful toppings. These sweet creations aren't just delicious; they're also elegantly designed to be the perfect gift or centerpiece for your special occasions. Choose from our array of flavors and give the gift of indulgence</p>
                        </div>
                    </div>
                </div>
                
                <div className="grid-container">
                    <div className="left">    
                        <img src={chocolates} alt="Chocolates"></img>
                    </div>
                    <div className="right">
                        <div className="content">
                            <p className="img-caption">CUSTOMIZED CHOCOLATES</p>
                            <p  className="info">Indulge in the art of personalized chocolate. Our skilled chocolatiers craft each chocolate with precision and passion. From classNameic milk chocolate to exotic flavors like sea salt caramel or lavender-infused dark chocolate, we offer a world of tastes to choose from. Whether it's a heartfelt gift or a treat for yourself, our custom chocolates are a true expression of flavor and luxury.</p>
                        </div>
                    </div>
                </div>
           </div> 
        </section>
    </main>
    </div>
  
    <Footer/>
        </>
    )
}