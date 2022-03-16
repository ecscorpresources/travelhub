import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Hotels from "./Hotels";
import Rentals from "./Rentals";
import Cruise from "./Cruise";
import Guides from "../Tours/Guides";
import Resorts from "./Resorts";
import Cities from "./Cities";
import TourSearch from "../Forms/TourSearch";

const HomeTabs = () => {
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
                  <Resorts />
                </div>
              </TabPanel>

              <TabPanel>
                <TourSearch />
                <div className="row destinations">
                  <Cities />
                </div>
                <div className="row guides">
                  <Guides />
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

export default HomeTabs;
