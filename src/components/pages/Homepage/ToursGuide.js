import React from "react";
import "./ToursGuide.css";
import SingleTour from "./SingleTour";
import CheckboxColumn from "./CheckboxColumn";

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
                <div className="col-md-5">
                  <input type="text" placeholder="Destination" />
                </div>
                <div className="col-md-3">
                  <input type="date" placeholder="Select a Date" />
                </div>
                <div className="col-md-3">
                  <input type="date" placeholder="Select a Date" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="tourguideThirdSection" className="container-fluid">
        <div className="row parent">
          <div className="col-md-2 column_1">
            <div className="row">
              <div className="col-md-10">
                <h1>Filter Search</h1>
                <form>
                  <select>
                    <option value="country">Country</option>
                  </select>
                </form>
              </div>
            </div>
            <CheckboxColumn />
          </div>
          <div className="col-md-8">
            <SingleTour
              img={require("../../../assets/img/46.png")}
              rating={require("../../../assets/img/51.png")}
              tour_name="Hiking and Cultural Tour Adventure"
              city="Panama"
              tour_details={tour_1}
              room_number="Tour for up to 4 persons"
              bed_number="Duaration: 4 hours"
              price="NGN 199,100"
              taxes="(for one person)"
            />

            <SingleTour
              img={require("../../../assets/img/47.png")}
              rating={require("../../../assets/img/51.png")}
              tour_name="Mineral Shopping Tour"
              city="Madagasca"
              tour_details={tour_2}
              room_number="Tour for up to 2 persons"
              bed_number="Duration: 8 days"
              price="NGN 506, 800"
              taxes="(for one person)"
            />

            <SingleTour
              img={require("../../../assets/img/48.png")}
              rating={require("../../../assets/img/51.png")}
              tour_name="The Best Nepa Valley Private Tour"
              city="Carlifornia, USA"
              tour_details={tour_3}
              room_number="Tour for up to 6 persons"
              bed_number="Duration: 7 hour"
              price="NGN 216,838"
              taxes="(for one person)"
            />

            <SingleTour
              img={require("../../../assets/img/49.png")}
              rating={require("../../../assets/img/51.png")}
              tour_name="Terra Cotta Army Tour"
              city="Xi'an China"
              tour_details={tour_4}
              room_number="Tour for up to 10 persons"
              bed_number="Duration: 8 hours"
              price="NGN 97,740"
              taxes="(for one person)"
            />

            <SingleTour
              img={require("../../../assets/img/50.png")}
              rating={require("../../../assets/img/51.png")}
              tour_name="St Petersburg Driving City Tour"
              city="St Petersburg, Russia"
              tour_details={tour_5}
              room_number="Tour for up to 5 persons"
              bed_number="Duration: 5 hours"
              price="NGN 76,020"
              taxes="(for one person)"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToursGuide;
