import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import SingleResort from "./SingleResort";
import City from "./City";
import Guide from "./Guide";
import Hotels from "./Hotels";
import Rentals from "./Rentals";
import Cruise from "./Cruise";

const text1 = (
  <>
    <p>
      One of italy's iconic sites, Florence was the centre of Europen medieval
      trades and finance and one of the weaalthiest city of the era. It is
      considered by many academics the birthplace of the Renaissance, and has
      been called "the Athens of the Middle Ages"
    </p>
  </>
);

const text2 = (
  <>
    <p>
      Black Star Square, also known as Independence Square, is a public square
      in Accra, Ghana,bordered by the Accra Sports Stadium and the Kwame Nkrumah
      Memorial Park.The square often hosts the annual independence celebrations
      as well as other national events
    </p>
  </>
);

const Resort = () => {
  return (
    <>
      <Tabs size="sm" variant="unstyled" isFitted>
        <div className="row tabs_row">
          <div className="col-md-8">
            <TabList>
              <Tab className="tab">RESORT</Tab>
              <Tab className="tab">TOURS & GUIDE</Tab>
              <Tab className="tab">HOTEL</Tab>
              <Tab className="tab">CAR RENTALS</Tab>
              <Tab className="tab">CRUISE</Tab>
            </TabList>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TabPanels>
              <TabPanel>
                <div className="row resorts">
                  <SingleResort
                    image={require("../../../assets/img/8.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                  <SingleResort
                    image={require("../../../assets/img/8.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                  <SingleResort
                    image={require("../../../assets/img/9.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                </div>
                <div className="row resorts">
                  <SingleResort
                    image={require("../../../assets/img/10.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                  <SingleResort
                    image={require("../../../assets/img/11.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                  <SingleResort
                    image={require("../../../assets/img/12.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                </div>

                <div className="row resorts">
                  <SingleResort
                    image={require("../../../assets/img/13.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                  <SingleResort
                    image={require("../../../assets/img/14.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                  <SingleResort
                    image={require("../../../assets/img/15.png")}
                    hotel="Hotel Madeira Regency Palace"
                    hotel_location="Madera, Portugal"
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <form className="tours_form">
                  <div className="row form_row">
                    <div className="col-md-4">
                      <input type="text" placeholder="Destination" />
                    </div>
                    <div className="col-md-2">
                      <input type="text" placeholder="From" />
                    </div>
                    <div className="col-md-2">
                      <input type="text" placeholder="To" />
                    </div>
                    <div className="col-md-2">
                      <button type="submit">FIND A TOUR GUIDE</button>
                    </div>
                  </div>
                </form>
                <div className="row destinations">
                  <City
                    image={require("../../../assets/img/17.png")}
                    text={text1}
                    city="Visit Florence, Italy"
                  />
                  <City
                    image={require("../../../assets/img/18.png")}
                    text={text2}
                    city="Visit Accra, Ghana"
                  />
                </div>
                <div className="row guides">
                  <Guide
                    image={require("../../../assets/img/19.png")}
                    name="Carlos"
                    language="Portugese, English, Spanish"
                    profile="Is a qualified tour guide with a vast knowledge of historical sites, wonderful restaurant recommendations and ..."
                  />
                  <Guide
                    image={require("../../../assets/img/20.png")}
                    name="Isaac"
                    language="English, Ashante, Twi"
                    profile="Isaac is a lincenced Tour Guide Director located in Accra Ghana and a native born Ghanaian from the Ashanti"
                  />

                  <Guide
                    image={require("../../../assets/img/21.png")}
                    name="Yi Fen"
                    language="English, Taiwanese, Mandarin"
                    profile="Please come and travel with me! It makes a big difference who you travel with. We can talk about Taiwan and..."
                  />

                  <Guide
                    image={require("../../../assets/img/22.png")}
                    name="Rene"
                    language="English, French, Italian, Deutsch"
                    profile="Now as a guide, I get to enjoy meeting people without being stressed with the selling part! changed my focus from..."
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <Hotels />
              </TabPanel>
              <TabPanel>
                <Rentals />
              </TabPanel>
              <TabPanel>
                <Cruise />
              </TabPanel>
            </TabPanels>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Resort;
