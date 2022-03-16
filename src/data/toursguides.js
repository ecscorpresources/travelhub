import React from "react";
import guide1 from "../assets/img/toursandguides/46.png";
import guide2 from "../assets/img/toursandguides/47.png";
import guide3 from "../assets/img/toursandguides/48.png";
import guide4 from "../assets/img/toursandguides/49.png";
import guide5 from "../assets/img/toursandguides/50.png";
import guide6 from "../assets/img/toursandguides/17.png";
import guide7 from "../assets/img/toursandguides/18.png";

const text1 = (
  <>
    One of italy's iconic sites, Florence was the centre of Europen medieval
    trades and finance and one of the weaalthiest city of the era. It is
    considered by many academics the birthplace of the Renaissance, and has been
    called "the Athens of the Middle Ages"
  </>
);

const text2 = (
  <>
    Black Star Square, also known as Independence Square, is a public square in
    Accra, Ghana,bordered by the Accra Sports Stadium and the Kwame Nkrumah
    Memorial Park.The square often hosts the annual independence celebrations as
    well as other national events
  </>
);

export default [
  {
    id: 1,
    img: guide1,
    name: "hiking and cultural tour adventure",
    location: "panama",
    description:
      "Campana Hill (La Cruz Trail) is a prestigious lookout point located in the Province of Panama Oeste, District of Capira, Town of Chika. It takes 1.5 hours to get by on land transportation from Panama City",

    numberofpeople: 4,
    duration: "4 hours",
    tours: {
      all: false,
      citytours: false,
      museumtours: false,
      naturetours: true,
      walktours: true,
      eatanddrinktours: false,
      historictours: true,
    },
    others: {
      groups: true,
      disabled: false,
      pets: true,
    },
    price: "199,100",
    rating: 3,
  },

  {
    id: 2,
    img: guide2,
    name: "mineral shopping tour",
    location: "madagasca",
    description:
      "Madagasca is very rich of underground resources such as minerals. The following are the minerals (both cut stones and in rough minerals) you can purchase in Madagasca: Red tourmaline, green tourmaline, black tourmaline, berylium, blue beryl, yellow beryl",

    numberofpeople: 2,
    duration: "8 days",
    tours: {
      all: false,
      citytours: false,
      museumtours: false,
      naturetours: false,
      walktours: true,
      eatanddrinktours: false,
      historictours: true,
    },
    others: {
      groups: false,
      disabled: false,
      pets: false,
    },
    price: "506,800",
    rating: 3,
  },

  {
    id: 3,
    img: guide3,
    name: "the best nepa valley private tour",
    location: "california usa",
    littletext: "The 'Nepa WOW' tours for Wine Lovers",
    description:
      "Your groups' day will be spent discovering the heart of California 'Cab Country'. Yes Cabernet Sauvignon may be king here, but this valley offers many other wine lover's treats...",

    numberofpeople: 6,
    duration: "7 hours",
    tours: {
      all: false,
      citytours: false,
      museumtours: false,
      naturetours: false,
      walktours: true,
      eatanddrinktours: true,
      historictours: true,
    },
    others: {
      groups: true,
      disabled: true,
      pets: true,
    },
    price: "216,838",
    rating: 3,
  },

  {
    id: 4,
    img: guide4,
    name: "terra cotta army tour",
    location: "xi'an China",
    description:
      "This tour includes the most amazing Terra-cotta Army and another two places in the city based on your interest. Most people from other countries get to know Xi'an because of the world renowed Terra Cotta Army",

    numberofpeople: 10,
    duration: "8 hours",
    tours: {
      all: false,
      citytours: false,
      museumtours: false,
      naturetours: false,
      walktours: true,
      eatanddrinktours: false,
      historictours: true,
    },
    others: {
      groups: true,
      disabled: false,
      pets: false,
    },
    price: "97,740",
    rating: 3,
  },

  {
    id: 5,
    img: guide5,
    name: "st petersburg driving city tour",
    location: "st petersburg, russia",
    description:
      "Any season is the right time to visit Saint-Petersburg. We live in a beautiful city and you will only want to see more",

    numberofpeople: 5,
    duration: "5 hours",
    tours: {
      all: false,
      citytours: false,
      museumtours: false,
      naturetours: false,
      walktours: false,
      eatanddrinktours: false,
      historictours: true,
    },
    others: {
      groups: true,
      disabled: true,
      pets: true,
    },

    price: "76,020",
    rating: 3,
  },

  {
    id: 5,
    img: guide5,
    name: "st petersburg driving city tour",
    location: "st petersburg, russia",
    description:
      "Any season is the right time to visit Saint-Petersburg. We live in a beautiful city and you will only want to see more",

    numberofpeople: 5,
    duration: "5 hours",
    tours: {
      all: false,
      citytours: false,
      museumtours: false,
      naturetours: false,
      walktours: false,
      eatanddrinktours: false,
      historictours: true,
    },
    others: {
      groups: true,
      disabled: true,
      pets: true,
    },

    price: "76,020",
    rating: 3,
  },

  {
    id: 6,
    img: guide6,
    name: "florence italy tour",
    location: "florence, italy",
    description: text1,
    numberofpeople: 5,
    duration: "5 hours",
    tours: {
      all: false,
      citytours: false,
      museumtours: false,
      naturetours: false,
      walktours: false,
      eatanddrinktours: false,
      historictours: true,
    },
    others: {
      groups: true,
      disabled: true,
      pets: true,
    },

    price: "76,020",
    rating: 3,
    featured: true,
  },

  {
    id: 7,
    img: guide7,
    name: "accra ghana tour",
    location: "accra, ghana",
    description: text2,
    numberofpeople: 5,
    duration: "5 hours",
    tours: {
      all: false,
      citytours: false,
      museumtours: false,
      naturetours: false,
      walktours: false,
      eatanddrinktours: false,
      historictours: true,
    },
    others: {
      groups: true,
      disabled: true,
      pets: true,
    },

    price: "76,020",
    rating: 3,
    featured: true,
  },
];
