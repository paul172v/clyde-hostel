import React, { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import classes from "./App.module.css";

import Card from "./components/things-card/Card";
import BookingForm from "./components/booking-form/BookingForm";
import ContactForm from "./components/contact-form/ContactForm";

const slouchPara =
  "Nicknamed 'The Bartender's Bar', Slouch is a basement rock bar that is one of the last bars to close in the city. With a mix of live music and a wicked selection of rock music played over speakers, Slouch oozes atmosphere. Slouch also offers great food and drinks and the atmosphere changes drastically changes depending on the time of day. It's one of our favourite bars in the city and is just a five minute walk from the hostel.";
const moskitoPara =
  "Recently reopened, Moskito is a popular cocktail bar with a great ambience, friendly staff and rocking house music. It's the home of some of our favourite cocktails in Glasgow. If you're looking for a trendy place to take a date or hang out with friends then Moskito has you covered. Located on Bath Street, just a short walk from the hostel and open from 5pm - 4am.";
const howlinPara =
  "The Howlin Wolf is Scotland's best live music venue, according to SLTN, making it the only venue in the country to earn this award more than once. Open 12 noon to 3am, 7 days a week. Howlin Wolf has been open for 8 years and is an incredible place showcasing the best of local blues talent and international acts. Music lovers from all over the world just to visit this establishment.";
const garagePara =
  "The Garage is a music venue and nightclub located at 490 Sauchiehall Street in Glasgow, Scotland. It is Scotland's largest nightclub, opening its doors in 1994. The main hall was the first Locarno ballroom in the UK, although it has since been remodelled by the addition of an extension to the mezzanine level.";
const subPara =
  "The Sub Club is a club and music venue located at 22 Jamaica Street in Glasgow, Scotland. It opened 1 April 1987 and is the longest running underground dance club in the world. The 3,500-square-foot basement space can legally hold up to 410 people.";
const firewaterPara =
  "Firewater offers Funk, Punk Rock'n'Roll and Disco in two rooms, under one roof since 2001. Famed for legendary rock'n'roll-indie club nights and hosting huge after-show parties.";
const artPara =
  "Kelvingrove Art Gallery and Museum is a museum and art gallery in Glasgow, Scotland. It reopened in 2006 after a three-year refurbishment and since then has been one of Scotland's most popular visitor attractions.";
const necropolisPara =
  "The Glasgow Necropolis is a Victorian cemetery in Glasgow, Scotland. It is on a low but very prominent hill to the east of Glasgow Cathedral. Fifty thousand individuals have been buried here. Typical for the period, only a small percentage are named on monuments and not every grave has a stone.";
const parkPara =
  "This Sir Joseph Paxton designed park is a 34 hectares/85 acres site and a classic example of a Victorian park. Its design and setting on the banks of the River Kelvin enhance and complement the many magnificent buildings which surround the world renowned Art Gallery and Museum prominently featured within it.";

function App() {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNavHandler = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const turnOffMobileNavHandler = () => {
    setMobileNavActive(false);
  };

  const [thingsState, setThingsState] = useState("bars");

  const barsHandler = () => {
    setThingsState("bars");
  };

  const clubsHandler = () => {
    setThingsState("clubs");
  };

  const attractionsHandler = () => {
    setThingsState("attractions");
  };

  return (
    <div className={classes["app-wrapper"]}>
      <section className={classes["section-hero"]}>
        <header className={classes.header}>
          <div className={classes["logo-wrapper"]}>
            <h1>Clyde Hostel</h1>
          </div>

          <nav className={classes["nav-desktop-wrapper"]}>
            <ul>
              <Link
                className={classes["nav-link"]}
                to="aboutAnchor"
                spy={true}
                smooth={true}
                offset={-20}
              >
                About Us
              </Link>
              <Link
                className={classes["nav-link"]}
                to="facilitiesAnchor"
                spy={true}
                smooth={true}
                offset={-20}
              >
                Facilities
              </Link>
              <Link
                className={classes["nav-link"]}
                to="locationAnchor"
                spy={true}
                smooth={true}
                offset={-20}
              >
                Location
              </Link>
              <Link
                className={classes["nav-link"]}
                to="thingsAnchor"
                spy={true}
                smooth={true}
                offset={-20}
              >
                Things To Do
              </Link>
              <Link
                className={classes["nav-link"]}
                to="bookingAnchor"
                spy={true}
                smooth={true}
                offset={-20}
              >
                Book Now
              </Link>
              <Link
                className={classes["nav-link"]}
                to="contactAnchor"
                spy={true}
                smooth={true}
                offset={-20}
              >
                Contact
              </Link>
            </ul>
          </nav>
        </header>

        {/* ----- Mobile Nav Stuff ------ */}
        {/* --- Button --- */}
        <div className={classes["mobile-nav-btn-wrapper"]}>
          {!mobileNavActive && (
            <button
              onClick={toggleMobileNavHandler}
              className={classes["mobile-nav-btn"]}
            >
              <AiOutlineMenu />
            </button>
          )}
          {mobileNavActive && (
            <button
              onClick={toggleMobileNavHandler}
              className={classes["mobile-nav-btn"]}
            >
              <AiOutlineClose />
            </button>
          )}
        </div>

        {/* --- Mobile Nav --- */}
        {mobileNavActive && (
          <div className={classes["mobile-nav--background-wrapper"]}>
            <nav className={classes["mobile-nav-wrapper"]}>
              <ul>
                <Link
                  className={classes["nav-link-mobile"]}
                  to="aboutAnchor"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={turnOffMobileNavHandler}
                >
                  About Us
                </Link>
                <Link
                  className={classes["nav-link-mobile"]}
                  to="facilitiesAnchor"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={turnOffMobileNavHandler}
                >
                  Facilities
                </Link>
                <Link
                  className={classes["nav-link-mobile"]}
                  to="locationAnchor"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={turnOffMobileNavHandler}
                >
                  Location
                </Link>
                <Link
                  className={classes["nav-link-mobile"]}
                  to="thingsAnchor"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={turnOffMobileNavHandler}
                >
                  Things To Do
                </Link>
                <Link
                  className={classes["nav-link-mobile"]}
                  to="bookingAnchor"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={turnOffMobileNavHandler}
                >
                  Book Now
                </Link>
                <Link
                  className={classes["nav-link-mobile"]}
                  to="contactAnchor"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={turnOffMobileNavHandler}
                >
                  Contact
                </Link>
              </ul>
            </nav>
          </div>
        )}

        {/* ---------------------------------- */}

        <div className={classes["hero-photo-wrapper"]}>
          <img
            className={classes["hero-photo-1"]}
            src="/photos/hero-photo-1.jpg"
            alt="people make glasgow"
          />
          <img
            className={classes["hero-photo-2"]}
            src="/photos/hero-photo-2.jpg"
            alt="argyle street"
          />
          <img
            className={classes["hero-photo-3"]}
            src="/photos/hero-photo-3.jpg"
            alt="cone statue"
          />
        </div>

        <div className={classes["hero-testimonial-wrapper"]}>
          <p className={classes["hero-testimonial-para"]}>
            ❝ If you're looking for a low budget trip this is the perfect place.
            The hostel is located near supermarkets and have a kitchen for
            guests use, which is really good when you're not planning to spend
            much money eating out. The staff members were lovely. The shower had
            hot water, even during the nighttime (for me this is really
            important cause I hate to feel cold). The bed was ok, clean linen,
            the room was comfortable and it had enough space. They have lockers
            to keep your bag as well, just remember to bring your own padlock.
          </p>
          <p className={classes["hero-testimonial-author--name"]}>
            GabrielaBocaletto
          </p>
          <p className={classes["hero-testimonial-author--details"]}>
            Female, 25-30
          </p>
        </div>
      </section>

      {/*------ mobile only -----*/}
      <section className={classes["section-testimonial-mobile"]}>
        <div className={classes["hero-testimonial-wrapper-mobile"]}>
          <p className={classes["hero-testimonial-para"]}>
            ❝ If you're looking for a low budget trip this is the perfect place.
            The hostel is located near supermarkets and have a kitchen for
            guests use, which is really good when you're not planning to spend
            much money eating out. The staff members were lovely. The shower had
            hot water, even during the nighttime (for me this is really
            important cause I hate to feel cold). The bed was ok, clean linen,
            the room was comfortable and it had enough space. They have lockers
            to keep your bag as well, just remember to bring your own padlock.
          </p>
          <p className={classes["hero-testimonial-author--name"]}>
            GabrielaBocaletto
          </p>
          <p className={classes["hero-testimonial-author--details"]}>
            Female, 25-30
          </p>
        </div>
      </section>

      {/*------ mobile only -----*/}
      <section className={classes["section-hero-photos-mobile"]}>
        <img
          className={classes["hero-photo-1-mobile"]}
          src="/photos/hero-photo-1.jpg"
          alt="people make glasgow"
        />
        <img
          className={classes["hero-photo-2-mobile"]}
          src="/photos/hero-photo-2.jpg"
          alt="argyle street"
        />
        <img
          className={classes["hero-photo-3-mobile"]}
          src="/photos/hero-photo-3.jpg"
          alt="cone statue"
        />
      </section>

      <section className={classes["section-about-us"]}>
        <h2 id="aboutAnchor" className={classes["about-us-heading"]}>
          About Us
        </h2>
        <p className={classes["about-us-para"]}>
          Clyde Hostel is part of the Clyde-Glasgow Hostels Group. We are a
          small, family run hostel that provide a safe space for backpackers and
          students between the ages of 18-35{" "}
          <span className={classes["u-bold"]}>
            (Please note: We reserve the right to refuse entry to anyone outside
            of that age-range. Passports are required upon arrival).
          </span>
        </p>
      </section>

      <section className={classes["section-facilities"]}>
        <h2 id="facilitiesAnchor" className={classes["facilities-heading"]}>
          Facilities
        </h2>
        <div className={classes["facilities-list-wrapper"]}>
          <ul className={classes["facilities-ul"]}>
            <li className={classes["facilities-li"]}>Free WiFi</li>
            <li className={classes["facilities-li"]}>Free city maps</li>
            <li className={classes["facilities-li"]}>Security lockers</li>
            <li className={classes["facilities-li"]}>Common Room</li>
          </ul>
          <ul className={classes["facilities-ul"]}>
            <li className={classes["facilities-li"]}>Kitchen</li>
            <li className={classes["facilities-li"]}>Fridge</li>
            <li className={classes["facilities-li"]}>Microwave</li>
            <li className={classes["facilities-li"]}>Oven</li>
          </ul>
          <ul className={classes["facilities-ul"]}>
            <li className={classes["facilities-li"]}>Showers</li>
            <li className={classes["facilities-li"]}>Towels for sale</li>
            <li className={classes["facilities-li"]}>Adaptors for sale</li>
          </ul>
        </div>
      </section>

      <section className={classes["section-location"]}>
        <h2 id="locationAnchor" className={classes["location-heading"]}>
          Location
        </h2>
        <p className={classes["location-para"]}>
          We are located in Glasgow's West End in an ideal location just a short
          walk away from many different attractions. Whether you'd like to visit
          Sauchiehall Street and some of the best bars and nightclubs the city
          has to offer, or the University of Glasgow, the Mitchel Library, the
          Kelvingrove Art Gallery and Museum, Kelvingrove Park ect. you'll have
          easy access from the hostel. We are also close by to public transport
          routes including the bus and train stations.
        </p>
        <iframe
          title="hostel map"
          className={classes["location-map"]}
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
          src="https://www.openstreetmap.org/export/embed.html?bbox=-4.276996850967408%2C55.8644423145867%2C-4.2725175619125375%2C55.86579690710697&amp;layer=mapnik&amp;marker=55.86511961675176%2C-4.274757206439972"
        ></iframe>
        <br />
        <small>
          <a
            className={classes["location-large-map-link"]}
            href="https://www.openstreetmap.org/?mlat=55.86512&amp;mlon=-4.27476#map=19/55.86512/-4.27476"
          >
            View Larger Map
          </a>

          <p className={classes["location-address"]}>Clyde Hostel</p>
          <p className={classes["location-address"]}>65 Berkeley Street</p>
          <p className={classes["location-address"]}>Glasgow</p>
          <p className={classes["location-address"]}>G3 7DX</p>
        </small>
      </section>

      <section className={classes["section-things"]}>
        <h2 id="thingsAnchor" className={classes["things-heading"]}>
          Things to Do
        </h2>
        <div className={classes["things-cards-wrapper"]}>
          {thingsState === "bars" && (
            <React.Fragment>
              <Card
                imageSrc="/photos/slouch.jpg"
                imageAlt="slouch"
                cardHeading="Slouch"
                cardPara={slouchPara}
              />

              <Card
                imageSrc="/photos/moskito.jpg"
                imageAlt="moskito"
                cardHeading="Moskito"
                cardPara={moskitoPara}
              />

              <Card
                imageSrc="/photos/howlin-wolf.jpg"
                imageAlt="howlin wolf"
                cardHeading="The Howlin' Wolf"
                cardPara={howlinPara}
              />
            </React.Fragment>
          )}

          {thingsState === "clubs" && (
            <React.Fragment>
              <Card
                imageSrc="/photos/garage.jpg"
                imageAlt="garage"
                cardHeading="The Garage"
                cardPara={garagePara}
              />

              <Card
                imageSrc="/photos/subclub.jpg"
                imageAlt="subclub"
                cardHeading="Sub Club"
                cardPara={subPara}
              />

              <Card
                imageSrc="/photos/firewater.jpg"
                imageAlt="firewater"
                cardHeading="Firewater"
                cardPara={firewaterPara}
              />
            </React.Fragment>
          )}

          {thingsState === "attractions" && (
            <React.Fragment>
              <Card
                imageSrc="/photos/art-gallery.jpg"
                imageAlt="art gallery"
                cardHeading="Kelvingrove Art Gallery"
                cardPara={artPara}
              />

              <Card
                imageSrc="/photos/necropolis.jpeg"
                imageAlt="necropolis"
                cardHeading="The Necropolis"
                cardPara={necropolisPara}
              />

              <Card
                imageSrc="/photos/park.jpg"
                imageAlt="kelvingrove park"
                cardHeading="Kelvingrove Park"
                cardPara={parkPara}
              />
            </React.Fragment>
          )}
        </div>
        <div className={classes["things-buttons-wrapper"]}>
          <button onClick={barsHandler} className={classes["things-button"]}>
            Bars
          </button>
          <button onClick={clubsHandler} className={classes["things-button"]}>
            Clubs
          </button>
          <button
            onClick={attractionsHandler}
            className={classes["things-button"]}
          >
            Attractions
          </button>
        </div>
      </section>

      <section className={classes["section-booking"]}>
        <h2 id="bookingAnchor" className={classes["booking-heading"]}>
          Book now
        </h2>
        <BookingForm />
      </section>

      <section className={classes["section-contact"]}>
        <h2 id="contactAnchor" className={classes["contact-heading"]}>
          Contact
        </h2>
        <ContactForm />
        <div className={classes["u-row"]}>
          <h3 className={classes["contact-label"]}>Email: </h3>{" "}
          <a className={classes["contact-link"]} href="mailto: #">
            admin@clydehostel.co.uk
          </a>
        </div>
        <div className={classes["u-row"]}>
          <h3 className={classes["contact-label"]}>Call: </h3>{" "}
          <a className={classes["contact-link"]} href="tel: #">
            +44 3245 234403
          </a>
        </div>
      </section>

      <footer className={classes["footer-wrapper"]}>
        <p className={classes["footer-para"]}>©2022 Clyde Hostel</p>
      </footer>
    </div>
  );
}

export default App;

/*
 <iframe
          src="https://embed.waze.com/iframe?zoom=16&lat=55.864954&lon=-4.276592&ct=livemap&pin=1"
          width="600"
          height="450"
          allowfullscreen
        ></iframe>
 */
