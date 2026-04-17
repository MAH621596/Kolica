import Home_Icon from "../assets/HomeSvg.svg?react";
import { Carr, Byke, Moto, Economic, Mechanic, FreeTime, Parts, Saved, Profile, Plus, SampleImage } from "@/components";

export const navbarLinks = [
  {
    icon: Saved,
    link_text: "Saved",
    href: "/saved"
  },
  {
    icon: Profile,
    link_text: "Log in",
    href: "/profile"
  },
  {
    icon: Plus,
    link_text: "Post an ad",
    href: "/add"
  },
];

export const mobileNavbarLinks = [
  {
    icon: Carr,
    link_text: "Car",
    href: "/car"
  },
  {
    icon: Byke,
    link_text: "Byke",
    href: "/byke"
  },
  {
    icon: Moto,
    link_text: "Moto",
    href: "/moto"
  },
  {
    icon: Economic,
    link_text: "Economic",
    href: "/economic"
  },
  {
    icon: Mechanic,
    link_text: "Mechanization",
    href: "/mechanic"
  },
  {
    icon: FreeTime,
    link_text: "Free time",
    href: "/FreeTime"
  },
  {
    icon: Parts,
    link_text: "Parts & equipment",
    href: "/parts"
  },
];

export const footerLinks = [
  {
    heading: "Company",
    link1: "About Us",
    link2: "Careers",
    link3: "Press",
    link4: "Blog",
  },

  {
    heading: "Support",
    link1: "Help Center",
    link2: "Contact Us",
    link3: "PFAQ",
    link4: "Report Issue",
  },

  {
    heading: "Legal",
    link1: "Terms of Service",
    link2: "Privacy Policy",
    link3: "Cookie Policy",
    link4: "GDPR",
  },
];

export const homePagetabsMenu = [
  {
    id: 1,
    icon: <Home_Icon className="w-[20px] h-[20px] fill-white stroke-[#253A86] group-hover:fill-[#253A86] stroke-2" />,
    path: "/"
  },
  {
    id: 2,
    label: "Moto",
    path: "/moto"
  },
  {
    id: 3,
    label: "Car",
    path: "/car"
  },
  {
    id: 4,
    label: "Economic",
    path: "/economic"
  },
  {
    id: 5,
    label: "Mechanization",
    path: "/mechanization"
  },
  {
    id: 6,
    label: "Free time",
    path: "/freetime"
  },
  {
    id: 7,
    label: "Parts & equipment",
    path: "/parts_equipment"
  },
];

export const photoSelectionData = [
  {
    image: SampleImage,
    heading: "PHOTO 1",
    footerbutton: true
  },
  {
    image: SampleImage,
    heading: "PHOTO 2",
    footerbutton: true
  },
  {
    image: SampleImage,
    heading: "PHOTO 3",
    footerbutton: true
  },
  {
    image: SampleImage,
    heading: "PHOTO 4",
    footerbutton: true
  },
  {
    image: SampleImage,
    heading: "PHOTO 5",
    footerbutton: true
  },
  {
    image: SampleImage,
    heading: "PHOTO 6",
    footerbutton: true
  },
  {
    image: SampleImage,
    heading: "PHOTO 7",
    footerbutton: true
  },
  {
    image: SampleImage,
    heading: "PHOTO 8",
    footerbutton: true
  },
];

export const sectionTabsMenu = [
  {
    id: 1,
    icon: <Home_Icon className="w-[20px] h-[20px] fill-white stroke-[#253A86] group-hover:fill-[#253A86] stroke-2" />,
    path: "/"
  },
  {
    id: 2,
    label: "My ads",
    path: "/myads"
  },
  {
    id: 3,
    label: "Post a new ad",
    path: "/postad"
  },
  {
    id: 4,
    label: "Parked",
    path: "/parked"
  },
  {
    id: 5,
    label: "Archive",
    path: "/archive"
  },
  {
    id: 6,
    label: "Contact information",
    path: "/contact"
  },
  {
    id: 7,
    label: "back to Kolica",
    path: "/"
  },
];

export const sectionInnerTabsMenu = [
  {
    id: 1,
    label: "Car",
    path: "/car"
  },
  {
    id: 2,
    label: "Moto",
    path: "/moto"
  },
  {
    id: 3,
    label: "Commercial Vehicles",
    path: "/vehicles"
  },
  {
    id: 4,
    label: "Mechanization",
    path: "/mechanization"
  },
  {
    id: 5,
    label: "Free Time",
    path: "/freetime"
  },
  {
    id: 6,
    label: "Parts & equipment",
    path: "/parts"
  },
];

export const tabContent = {
  Home: {
    title: "Quick search for passenger vehicles",
    button_text: "Search Vehicle",
  },
  Car: {
    title: "Rent a Car",
    button_text: "Search Car",
  },
  Moto: {
    title: "Sell Your Bike",
    button_text: "Search Moto",
  },
  Economic: {
    title: "Sell Your Vehicle",
    button_text: "Search Economic",
  },
  Mechanization: {
    title: "Sell Equipment",
    button_text: "Search Equipment",
  },
  "Free time": {
    title: "Free Time Services",
    button_text: "Search Services",
  },
  "Parts & equipment": {
    title: "Parts Marketplace",
    button_text: "Search Parts",
  }
};

export const dropdownData = [
  {
    id: 1, // Car Names / Brands
    label: "Brands",
    options: [
      "Toyota",
      "Honda",
      "Suzuki",
      "Hyundai",
      "Kia",
      "BMW",
      "Mercedes",
      "Audi",
      "Nissan",
      "MG"
    ]
  },
  {
    id: 2, // Price Range
    label: "Model",
    options: [
      "2000 - 2005",
      "2006 - 2010",
      "2011 - 2015",
      "2016 - 2020",
      "2021 - 2022",
      "2023 - 2024",
      "2025+"
    ]
  },
  {
    id: 3, // KM Traveled
    label: "Registration date from",
    options: [
      "16 June",
      "17 June",
      "18 June",
      "19 June",
      "20 June",
      "21 June"
    ]
  },
  {
    id: 4, // All Models
    label: "Kilometers to",
    options: [
      "0 - 10,000 km",
      "10,000 - 30,000 km",
      "30,000 - 50,000 km",
      "50,000 - 80,000 km",
      "80,000 - 120,000 km",
      "120,000+ km"
    ]
  },
  {
    id: 5, // Years
    label: "Price until",
    options: [
      "Under 5 Lakh",
      "5 - 10 Lakh",
      "10 - 20 Lakh",
      "20 - 30 Lakh",
      "30 - 50 Lakh",
      "50 Lakh - 1 Crore",
      "1 Crore+"
    ]
  },
  {
    id: 6, // Fuel Types
    label: "City or postal code",
    options: [
      "75100",
      "789456",
      "25649854",
      "3545632413",
      "15649845"
    ]
  },
  {
    id: 7, // Fuel Types
    label: "Fuel",
    options: [
      "Filter By Price",
      "Filter By Model",
      "Filter By Fuel",
    ]
  }
];

export const singleDropdownData = [
  {
    id: 1, // Car Names / Brands
    label: "vehicle age:",
    options: [
      "Toyota",
      "Honda",
      "Suzuki",
      "Hyundai",
      "Kia",
      "BMW",
      "Mercedes",
      "Audi",
      "Nissan",
      "MG"
    ]
  },
];

export const selectionDropdownData = [
  {
    id: 1,
    label: "Brand",
    dropDownCount: 1,
    options: [
      "Toyota",
      "Honda",
      "Suzuki",
      "Hyundai",
      "Kia",
      "BMW",
      "Mercedes",
      "Audi",
      "Nissan",
      "MG"
    ]
  },
  {
    id: 2, // Price Range
    label: "Model",
    dropDownCount: 1,
    options: [
      "2000 - 2005",
      "2006 - 2010",
      "2011 - 2015",
      "2016 - 2020",
      "2021 - 2022",
      "2023 - 2024",
      "2025+"
    ]
  },
  {
    id: 3, // KM Traveled
    label: "Body Shape",
    dropDownCount: 1,
    options: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ]
  },
  {
    id: 4, // All Models
    label: "Year and month of first registration:",
    dropDownCount: 2,
    options: [
      "16 June",
      "17 June",
      "18 June",
      "19 June",
      "20 June",
      "21 June"
    ]
  },
];

export const adContentRightPanel_1 = [
  {
    id: 1,
    label: "Brands",
    dropDownCount: 1,
    options: [
      "Toyota",
      "Honda",
      "Suzuki",
      "Hyundai",
      "Kia",
      "BMW",
      "Mercedes",
      "Audi",
      "Nissan",
      "MG"
    ]
  },
  {
    id: 2, // Price Range
    label: "Model",
    dropDownCount: 1,
    options: [
      "2000 - 2005",
      "2006 - 2010",
      "2011 - 2015",
      "2016 - 2020",
      "2021 - 2022",
      "2023 - 2024",
      "2025+"
    ]
  },
  {
    id: 3, // KM Traveled
    label: "Type",
    dropDownCount: 1,
    options: [
      'Toyota',
      'BMW',
      'Dacia',
      'Honda',
      'Kia',
      'Mercedes-Benz',
      'Nissan',
      'Renault',
      'Suzuki',
      'Volkswagen',
    ]
  },
  {
    id: 4, // All Models
    label: "Shape",
    dropDownCount: 1,
    options: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ]
  },
  {
    id: 5, // All Models
    label: "VIN / chassis number:",
    dropDownCount: 1,
    options: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ]
  },
];

export const checkboxList = [
  {
    id: 1,
    label: "Gasoline"
  },
  {
    id: 2,
    label: "Diesel"
  },
  {
    id: 3,
    label: "Hybrid Drive"
  },
  {
    id: 4,
    label: "E-Drive"
  },
  {
    id: 5,
    label: "LPG Autogas"
  },
  {
    id: 6,
    label: "CMG Natural Gas"
  },
];

export const checkboxList_2 = [
  {
    id: 1,
    label: "the vehicle has a warranty1"
  },
  {
    id: 2,
    label: "the vehicle has a warranty2"
  },
];

export const checkboxList_3 = [
  {
    id: 1,
    label: "cash discount"
  },
  {
    id: 2,
    label: "last price!"
  },
  {
    id: 3,
    label: "leasing takeover"
  },
  {
    id: 4,
    label: "exchange"
  },
];

export const InformationParagraph = [
  {
    id: 1,
    paragraph: "Quick entry is intended for quick and easy submission of an advertisement for a passenger vehicle. We have supported the advertisement submission form with a database of all passenger vehicles that have been sold at official dealers in Slovenia over the past 15 years."
  },
  {
    id: 2,
    paragraph: " Therefore, when submitting an advertisement, you will not need to enter detailed information about the vehicle, as the technical data, as well as data on standard equipment, will be entered automatically. In order for the data to be correct, you must therefore make sure that you enter the correct year and month of the vehicle's first registration when entering."
  },
  {
    id: 3,
    paragraph: "However, since we understand that many vehicles are equipped with additional equipment or imported from abroad, the equipment data may differ from the automatically entered data. Therefore, in the next step, you will be able to adjust the data as desired with data that perfectly matches your vehicle. The same advertisement submission form is also available for submitting an advertisement for a delivery vehicle."
  },
  {
    id: 4,
    paragraph: "The same advertisement submission form is also available for submitting an advertisement for a delivery vehicle."
  },
];

export const adContentLeftPanelData = [
  {
    id: 1,
    paragraph: "An icon for additional comments may be displayed next to certain input fields. The comment appears when you hover your mouse over the selected icon."
  },
  {
    id: 2,
    paragraph: "Required fields are additionally marked/colored."
  },
  {
    id: 3,
    field: true,
    heading_: "Example",
    inp_value: "Mandatory field",
  },
  {
    id: 4,
    paragraph: "When you make a mistake while entering data, it will be highlighted in red."
  },
  {
    id: 5,
    field: true,
    heading_: "Example",
    inp_value: "Mandatory field",
  },
  {
    id: 6,
    sub_heading: "Important!",
    paragraph: "To avoid violations of the 'Act on the Prevention of Illegal Work and Employment', the 'Industrial Property Act', the 'Competition Protection Act' and the 'Consumer Protection Act', advertising in certain sections may be additionally restricted or only available to traders with registered activity."
  },
];

export const HeroCardData = [
  'Alfa Romeo',
  'Citroën',
  'FIAT',
  'Jaguar',
  'Lexus',
  'MINI',
  'Peugeot',
  'Smart',
  'Tesla',
  'Audi',
  'Cupra',
  'Ford',
  'Jeep',
  'Mazda',
  'Mitsubishi',
  'Porsche',
  'Subaru',
  'Toyota',
  'BMW',
  'Dacia',
  'Honda',
  'Kia',
  'Mercedes-Benz',
  'Nissan',
  'Renault',
  'Suzuki',
  'Volkswagen',
  'Chevrolet',
  'DS Automobiles',
  'Hyundai',
  'Land Rover',
  'MG',
  'Opel',
  'SEAT',
  'Škoda',
  'Volvo',
];