import React from "react";
import { Link } from "react-router-dom";
import "./ToursGuide.css";
import SingleTour from "./SingleTour";
import Pagination from "../../components/Globals/Pagination/Pagination";
import Guide from "../../pages/Homepage/HomePageTabs/Resorts/Guide";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

const tour_1 = (
  <>
    Camapana Hill (La Cruz Trail)is a pretigious lookout point loacted in the
    Province of Panama Oeste, District of Capira,Town of Chica. It takes 1.5
    hours to get on land transportation from Panama City.
  </>
);

const tour_2 = (
  <>
    Madagascar is very rich of underground resource such as minerals. These
    following are the minerals (both cut stones and in rough materials) you can
    purchase in Madagascar: Red tourmaline, green tourmaline, black tourmaline,
    berylium, blue beryl, yellow beryl ...
  </>
);

const tour_3 = (
  <>
    The “Napa WOW” tours for Wine Lovers <br /> Your group's day will be spent
    discovering the heart of California "Cab Country". Yes, <br /> Cabernet
    Sauvignon may be king here, but this valley offers many other wine lover's
    treats...
  </>
);

const tour_4 = (
  <>
    This tour includes the most amazing Terra-cotta Army and another two places
    in <br /> the city based on your own interests. Most people from other
    countries get to know Xi'an because of the world renowned Terra Cotta
    Army...
  </>
);

const tour_5 = (
  <>
    Any season- is the right time to visit Saint-Petersburg. <br /> We live in a
    beautiful city and you will only want to see more!
  </>
);

const ToursGuide = () => {
  return (
    <>
      <div id="tourguideFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Tours & Guides</h1>
          </div>
        </div>
      </div>
      <div id="tourguideSecondSection" className="container-fluid">
        <div className="row first">
          <div className="col-md-10">
            <form>
              <div className="row form_row_1">
                <div className="col-md-4">
                  <input type="text" placeholder="Tour Location" />
                </div>
                <div className="col-md-2">
                  <input type="date" placeholder="From" />
                </div>
                <div className="col-md-2">
                  <input type="date" placeholder="To" />
                </div>
                <div className="col-md-2">
                  <button type="submit">FIND TOUR</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="tourguidemapSection">
        <div className="row">
          <div className="col-md-10">
            <hr />
            <TiArrowSortedDown />
          </div>
        </div>
      </div>
      <div id="tourguideThirdSection" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Link to="monkhey">VIEW ON MAP</Link>
          </div>
        </div>
        <div className="row parent">
          <div className="col-md-2 column_1">
            <div className="row">
              <div className="col-md-10">
                <img src={require("../../assets/img/70.png")} alt="" />
                <h3>All Tours</h3>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-10">
                <img src={require("../../assets/img/71.png")} alt="" />
                <h3>City Tours</h3>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-10">
                <img src={require("../../assets/img/72.png")} alt="" />
                <h3>Museum Tours</h3>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-10">
                <img src={require("../../assets/img/73.png")} alt="" />
                <h3>Nature Tours</h3>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-10">
                <img src={require("../../assets/img/74.png")} alt="" />
                <h3>Nature Tours</h3>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-10">
                <img src={require("../../assets/img/75.png")} alt="" />
                <h3>Walk Tours</h3>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-10">
                <img src={require("../../assets/img/76.png")} alt="" />
                <h3>Eat & Drink Tours</h3>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 accessible">
                <ul>
                  <li>
                    <img src={require("../../assets/img/77.png")} alt="" />
                  </li>
                  <li>Allowed For Disabled</li>
                </ul>
                {/* <hr className="accessible" /> */}
                <ul>
                  <li>
                    <img src={require("../../assets/img/78.png")} alt="" />
                  </li>
                  <li>Allowed For Groups</li>
                </ul>
                {/* <hr className="accessible" /> */}
                <ul>
                  <li>
                    <img src={require("../../assets/img/79.png")} alt="" />
                  </li>
                  <li>Allowed For Pets</li>
                </ul>
              </div>
            </div>
            <hr />
            <CheckboxGroup>
              <span>
                <IoIosArrowDown />
                Carbin Type
              </span>
              <Checkbox value="Inside">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </Checkbox>
              <Checkbox value="Outside">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </Checkbox>
              <Checkbox value="Balcony">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </Checkbox>
              <Checkbox value="Suite">
                <IoMdStar />
                <IoMdStar />
              </Checkbox>
              <Checkbox value="Suite">
                <IoMdStar />
              </Checkbox>
            </CheckboxGroup>
          </div>
          <div className="col-md-8">
            <SingleTour
              img={require("../../assets/img/46.png")}
              rating={require("../../assets/img/51.png")}
              tour_name="Hiking and Cultural Tour Adventure"
              city="Panama"
              tour_details={tour_1}
              room_number="Tour for up to 4 persons"
              bed_number="Duaration: 4 hours"
              price="NGN 199,100"
              taxes="(for one person)"
            />

            <SingleTour
              img={require("../../assets/img/47.png")}
              rating={require("../../assets/img/51.png")}
              tour_name="Mineral Shopping Tour"
              city="Madagasca"
              tour_details={tour_2}
              room_number="Tour for up to 2 persons"
              bed_number="Duration: 8 days"
              price="NGN 506, 800"
              taxes="(for one person)"
            />

            <SingleTour
              img={require("../../assets/img/48.png")}
              rating={require("../../assets/img/51.png")}
              tour_name="The Best Nepa Valley Private Tour"
              city="Carlifornia, USA"
              tour_details={tour_3}
              room_number="Tour for up to 6 persons"
              bed_number="Duration: 7 hour"
              price="NGN 216,838"
              taxes="(for one person)"
            />

            <SingleTour
              img={require("../../assets/img/49.png")}
              rating={require("../../assets/img/51.png")}
              tour_name="Terra Cotta Army Tour"
              city="Xi'an China"
              tour_details={tour_4}
              room_number="Tour for up to 10 persons"
              bed_number="Duration: 8 hours"
              price="NGN 97,740"
              taxes="(for one person)"
            />

            <SingleTour
              img={require("../../assets/img/50.png")}
              rating={require("../../assets/img/51.png")}
              tour_name="St Petersburg Driving City Tour"
              city="St Petersburg, Russia"
              tour_details={tour_5}
              room_number="Tour for up to 5 persons"
              bed_number="Duration: 5 hours"
              price="NGN 76,020"
              taxes="(for one person)"
            />
            <Pagination />
          </div>
        </div>
      </div>

      <div id="tourguideFourthSection" className="container-fluid">
        <div className="row parent">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4">
                <h1>Find a Guide</h1>
              </div>
              <div className="col-md-8 form">
                <form>
                  <input type="text" placeholder="Enter Location" />
                  <button type="submit">LOCATE GUIDE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row guides">
          <Guide
            image={require("../../assets/img/19.png")}
            name="Carlos"
            language="Portugese, English, Spanish"
            profile="Is a qualified tour guide with a vast knowledge of historical sites, wonderful restaurant recommendations and ..."
          />
          <Guide
            image={require("../../assets/img/20.png")}
            name="Isaac"
            language="English, Ashante, Twi"
            profile="Isaac is a lincenced Tour Guide Director located in Accra Ghana and a native born Ghanaian from the Ashanti"
          />

          <Guide
            image={require("../../assets/img/21.png")}
            name="Yi Fen"
            language="English, Taiwanese, Mandarin"
            profile="Please come and travel with me! It makes a big difference who you travel with. We can talk about Taiwan and..."
          />

          <Guide
            image={require("../../assets/img/22.png")}
            name="Rene"
            language="English, French, Italian, Deutsch"
            profile="Now as a guide, I get to enjoy meeting people without being stressed with the selling part! changed my focus from..."
          />
        </div>
      </div>
    </>
  );
};

export default ToursGuide;
