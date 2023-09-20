import React from 'react'
import "./Home.css"
import Product from './Product';
import Bannerslide from './Bannerslide';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        /> */}
        <div className="home__image">
          <Bannerslide />
        </div>
        <div className="home_row">
          <Product
            // truncate("9-in-1 Vegetable Chopper & Mandoline Slicer for Kitchen - Veggie Chopper Vegetable Cutter, Food Chopper, Onion Chopper Dicer, Veggie Chopper With Container, Vegetable Chopper With Container - Black" , 20)
            id="12321342"
            title="9-in-1 Vegetable Chopper & Mandoline Slicer for Kitchen - Veggie Chopper Vegetable Cutter, Food Chopper, Onion Chopper Dicer, Veggie Chopper With Container, Vegetable Chopper With Container - Black"
            price={16.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81V2fdmi0kL._AC_SL1500_.jpg"
          />
          <Product
            id="49538073"
            title="Kitchen Utensils Set-Umite Chef 34 Pcs Silicone Cooking Utensils Set for Nonstick Cookware-Silicone Spatulas Set, Stainless Steel Handle-Black Kitchen Gadgets Tools, Pots and Pans Accessories"
            price={35}
            rating={5}
            image="https://m.media-amazon.com/images/I/81LBooVFbcL._AC_SL1500_.jpg"
          />
          <Product
            id="49538074"
            title="Kitchen Storage Containers & 18 Lids), Plastic BPA-Free Meal Prep Container with Free Labels & Marker - Leak Proof & Freezer Safe"
            price={24.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81mYgk0KBEL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="49538074"
            title="Fruit Basket Bowls For Kitchen Counter - Metal Fruit Stand with Handle - Kitchen Vegetables Bread Snacks Storage Organization, 2 Tier Black"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/8188EmPuLbL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12321341"
            title="Bobbi Brown Makeup Manual: For Everyone from Beginner to Pro Paperback – September 30, 2011"
            price={15.49}
            rating={4}
            image="https://m.media-amazon.com/images/P/0446581348.01._SCLZZZZZZZ_SX500_.jpg"
          />
          <Product
            id="49538094"
            title="Olay Fresh Reset Pink Mineral Complex Clay Face Mask Stick, 1.7 oz"
            price={4.3}
            rating={4}
            image="https://m.media-amazon.com/images/I/71qma8YgLTL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="belif Hydrators-On-The-Go Kit | Travel Kit | Moisturizer, Eye Cream, Serum, Hydration | Daily Hydrating Skincare Set | Antioxidant Packed Moisturizing Set for All Skin Types | KBeauty | 1.01 Fl Oz"
            price={23}
            rating={5}
            image="https://m.media-amazon.com/images/I/61zf9idi4mL._SL1080_.jpg"
          />
          <Product
            id="49538094"
            title="AOA Studio Collection makeup Sponge Set Latex Free and High-definition Set of 6 makeup Wonder blender For Powder Cream and Liquid, Super Soft Wonder Beauty Cosmetic"
            price={12.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61NvTGruLoL._SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="62321341"
            title="Blueniya Dinnerware Set 12 pcs Dish Set White Plates Durable Dinner Plates Porcelain White Dinnerware Set, Kitchen Plates and Bowls set| Microwave, Dishwasher Safe | Chip resistant Plates"
            price={49}
            rating={5}
            image="https://m.media-amazon.com/images/I/71ExH0rRelL._AC_SL1500_.jpg"
          />
          <Product
            id="79538094"
            title="Amazon Basics Melamine Dinnerware Set, Service for 4, Blue Hydrangea Floral - Set of 12"
            price={46}
            rating={4}
            image="https://m.media-amazon.com/images/I/81qlfK82EmL._AC_SL1500_.jpg"
          />
          <Product
            id="29538094"
            title="belif Hydrators-On-The-Go Kit | Travel Kit | Moisturizer, Eye Cream, Serum, Hydration | Daily Hydrating Skincare Set | Antioxidant Packed Moisturizing Set for All Skin Types | KBeauty | 1.01 Fl Oz"
            price={42.92}
            rating={4}
            image="https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/308c92fd-41c2-4afa-b632-680268c51128/ce76009d-c4d0-4faf-88a2-c11ef529c833/media._SL850_FMjpg_.jpeg"
          />
          <Product
            id="29538098"
            title="Nachtmann Bossa Nova Collections, 4 Piece Serving Set, Crystal Glass Serving Dishes for Cheese, Crackers, Fruits, and Appetizers, Platter, Square and Rectangular Bowls"
            price={57.9}
            rating={5}
            image="https://m.media-amazon.com/images/I/611efmE17CL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="49538094"
            title="Gucci Gucci Guilty Pour Femme By Gucci for Women - 3 Oz Edp Spray, 3 Oz"
            price={90}
            rating={5}
            image="https://m.media-amazon.com/images/I/512yL7crV9L._SL1000_.jpg"
          />
          <Product
            id="23445930"
            title="Victoria's Secret Bombshell 3 Piece Luxe Fragrance Gift Set: 1.7 oz. Eau de Parfum, Travel Lotion, & Candle"
            price={74.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/71OGsshg2bL._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Versace Variety 3 Piece Mini Gift Set"
            price={32.87}
            rating={4}
            image="https://m.media-amazon.com/images/I/61DsdPpv4kL._SL1500_.jpg"
          />
          <Product
            id="50829332"
            title="Giorgio Armani My Way for Women Eau de Parfum Spray, Pink,3 Fl Oz (Pack of 1)"
            price={80}
            rating={5}
            image="https://m.media-amazon.com/images/I/61ZZmGbTbEL._SL1360_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="60829332"
            title="Kate Blanc Cosmetics Castor Oil (2oz), USDA Certified Organic, 100% Pure, Cold Pressed, Hexane Free Stimulate Growth for Eyelashes, Eyebrows, Hair. Skin Moisturizer & Hair Treatment Starter Kit"
            price={9.9}
            rating={4}
            image="https://m.media-amazon.com/images/I/61UsIhcZTCL._SL1500_.jpg"
          />
          <Product
            id="60829332"
            title="Aunt Jackie's Curls and Coils Quench, Large 24oz Family Sized Pump,
          Moisture Intensive Leave-In Hair Conditioner for Natural Curls, Coils
          and Waves, Enriched With Shea Butter, Green…"
            price={15.49}
            rating={5}
            image="https://m.media-amazon.com/images/I/61QaZgHcfzL._SL1500_.jpg"
          />
          <Product
            id="60829332"
            title="Urban Hydration Honey Health and Repair Daily Hair Moisturizer | Sulfate, Paraben and Dye Free, Hydrates, Prevents Breakage, Tames Frizz, and Repairs Damage for Smooth and Shiny Hair, 9.1 Fl Ounces"
            price={9.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/534c34aa-bbeb-4033-9384-5159a79cf2db/b80cac8f-bdad-4b2c-a680-ba326cf32354/media._SL850_FMjpg_.jpeg"
          />
          <Product
            id="60829332"
            title="Nykaa Naturals Onion & Fenugreek Growth Hair Oil - Hydrates, Nourishes
          & Strengthens Hair Follicles, Promotes Hair Growth - 100% Natural
          Actives, Sulphate Free, for All Hair Types, Men & Women - 200ml"
            price={21.59}
            rating={4}
            image="https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/9e581337-1733-45af-9910-f3975602d7d1/aff21a52-ef48-4713-9ece-a1c4b0de8ebe/media._SL850_FMjpg_.jpeg"
          />
        </div>
        <div className="home_row">
          <Product
            id="49538094"
            title="Polaroid IS048 Digital Camera - Small Lightweight Waterproof Instant Sharing 16 MP Digital Portable Handheld Action Camera (Black)"
            price={49.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81oIUft1nHL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation)|Smart speaker with Alexa, Charcoal Fabric"
            price={59.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ryZRPIpEL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple ipad pro (12.9-inch, Wi-Fi, 128GB)-Silver(4th Generation)"
            price={945.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Ameriwood Home Parsons Modern End Table, 20 in *20 in * 17.7 in (D * W * H),Brown"
            price={38}
            rating={4}
            image="https://m.media-amazon.com/images/I/91R3nj8+T2S._AC_SL1500_.jpg"
          />
          <Product
            id="80829332"
            title="FitDesk Desk Bike 3.0 - Folding Exercise Bike for Work from Home Fitness, Stationary Bike and Desk Exercise Equipment with Built-in Tablet Holder, Bike Desk Workout Equipment, Fully Adjustable & Lightweight"
            price={289.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61JBldnKlfS._AC_SL1500_.jpg"
          />
          <Product
            id="70829332"
            title="Crayola Ultra Clean Fine Line Washable Markers, Kids, Back To School Gifts, 40 Count"
            price={10.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81M9tXIO7xL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home