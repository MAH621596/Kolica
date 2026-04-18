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

export const photoSelectionCardDataContent = [
  {
    heading: "How to publish a photo?",
    list: [
      "'Click the '+ SELECT PHOTO TO POST' button and select the photo on your computer that you want to post with your ad.",
      "'Once you have selected a photo, click on the 'ADD' button below the photo you want to add.",
    ]
  },
  {
    heading: "How many photos can I post?",
    list: [
      "A natural person/individual can publish up to 8 photos in a single ad.",
      "A registered trader can publish up to 12 photos per ad.",
      "A registered trader with the HD photo option activated can publish up to 20 photos per ad."
    ]
  },
  {
    heading: "General information about adding photos",
    list: [
      "The maximum allowed size of an individual photo is 20 Mb.",
      "We recommend posting photos in 800x600 pix size, or up to 1920x1440 if you have purchased the HD photo option.",
    ]
  },
  {
    heading: "What do the buttons under already published photos mean?",
    list: [
      "the first photo is shown",
      "by clicking the button you will move this photo to the first position",
      "by clicking the button you will move this photo one position to the left",
      "by clicking the button you will move this photo one position to the right",
      "by clicking the button you will delete this photo from the post",
    ]
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

export const adContentRightPanel_2 = [
  {
    id: 1,
    label: "fuel:",
    dropDownCount: 0,
    inputField: true,
    placeholder:"bencin"
  },
  {
    id: 2, // Price Range
    label: "drive train:",
    dropDownCount: 1,
    inputField: false,
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
    label: "gearbox:",
    dropDownCount: 1,
    inputField: false,
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
    label: "engine power:",
    dropDownCount: 2,
    inputField: false,
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
    label: "engine capacity:",
    dropDownCount: 1,
    inputField: false,
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

export const adContentRightPanel_3 = [
  {
    id: 1,
    label: "number of seats:",
    dropDownCount: 0,
    inputField: true,
    placeholder:"0"
  },
  {
    id: 2, // Price Range
    label: "upholstery:",
    dropDownCount: 1,
    inputField: false,
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
    label: "upholstery color:",
    dropDownCount: 1,
    inputField: false,
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
];

export const adContentRightPanel_4 = [
  {
    id: 1,
    label: "Combined driving:",
    dropDownCount: 0,
    inputField: true,
    placeholder:"0"
  },
  {
    id: 2, // Price Range
    label: "Emission class:",
    dropDownCount: 1,
    inputField: false,
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
    id: 3,
    label: "CO2 emission:",
    dropDownCount: 0,
    inputField: true,
    placeholder:"0"
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

export const checkboxList_4 = [
  {
    id: 1,
    label: "The vehicle is being sold as a whole and not in PARTS."
  },
  {
    id: 2,
    label: "driving"
  },
  {
    id: 3,
    label: "undamaged"
  },
  {
    id: 4,
    label: "not crashed"
  },
  {
    id: 5,
    label: "undriven"
  },
  {
    id: 6,
    label: "damaged"
  },
  {
    id: 7,
    label: "caromed"
  },
  {
    id: 8,
    label: "broken (but NOT crashed)"
  },
  {
    id: 19,
    label: "the vehicle was flooded"
  },
  {
    id: 10,
    label: "Racing car"
  },
];

export const checkboxList_5 = [
  {
    id: 1,
    label: "service book"
  },
  {
    id: 2,
    label: "Slovenian origin"
  },
  {
    id: 3,
    label: "the vehicle was garaged"
  },
  {
    id: 4,
    label: "the vehicle was not in a collision"
  },
  {
    id: 5,
    label: "confirmed (in full - after service intervals)"
  },
];

export const checkboxList_6 = [
  {
    id: 1,
    heading: "Chassis:",
    checkboxes : [
      {
        label : "brake system (ABS)"
      },
      {
        label : "four-wheel drive (4x4 / 4WD / Quattro...)"
      },
      {
        label : "brake assist (BAS / DBC / EBV)"
      },
      {
        label : "traction control (ASR / DTC)"
      },
      {
        label : "automatic differential lock (ASD / EDS ...)"
      },
      {
        label : "electronic system for better wheel traction ETS"
      },
      {
        label : "electronic system for better wheel traction ETS"
      },
      {
        label : "sports chassis"
      },
      {
        label : "electronic damper control (EDC)"
      },
      {
        label : "active suspension (ABC - Active Body Control)"
      },
      {
        label : "chassis level control (ADS)"
      },
      {
        label : "air suspension"
      },
      {
        label : "four-wheel steering (4WS / 4CONTROL)"
      },
    ]
  },
  {
    id: 2,
    heading: "Security:",
    checkboxes : [
      {
        label : "RDK tire pressure monitoring"
      },
      {
        label : "3rd brake light"
      },
      {
        label : "xenon headlights"
      },
      {
        label : "headlight washer"
      },
      {
        label : "bi-xenon headlights"
      },
      {
        label : "alarm device"
      },
      {
        label : "automatic high beam control"
      },
      {
        label : "engine immobilisation"
      },
      {
        label : "LED headlights"
      },
      {
        label : "code-protected engine ignition"
      },
      {
        label : "front (daytime) LED lights"
      },
      {
        label : "automatic emergency braking system"
      },
      {
        label : "rear LED lights"
      },
      {
        label : "lane departure warning system"
      },
      {
        label : "fog lights"
      },
      {
        label : "lane keeping system"
      },
      {
        label : "Run-Flat tires"
      },
      {
        label : "blind spot warning system"
      },
      {
        label : "Distance warning"
      },
      {
        label : "traffic sign recognition system"
      },
    ]
  },
  {
    id: 3,
    heading: "Interior:",
    checkboxes : [
      {
        label : "Virtual Cockpit"
      },
      {
        label : "seats: height adjustment"
      },
      {
        label : "ambient interior lighting"
      },
      {
        label : "seats: electric adjustment"
      },
      {
        label : "wooden interior accessories"
      },
      {
        label : "seats: Memory package"
      },
      {
        label : "ALU interior accessories"
      },
      {
        label : "seats: heated front"
      },
      {
        label : "carbon interior accessories"
      },
      {
        label : "chrome interior accessories"
      },
      {
        label : "seats: cooling / ventilation"
      },
      {
        label : "package for smokers"
      },
      {
        label : "seats: massage function"
      },
      {
        label : "seats: sports"
      },
      {
        label : "center armrest between the seats"
      },
      {
        label : "seats: comfortable"
      },
      {
        label : "refrigerator compartment"
      },
      {
        label : "seats: orthopedic"
      },
      {
        label : "12V socket"
      },
    ]
  },
  {
    id: 4,
    heading: "Comfort:",
    checkboxes : [
      {
        label : "air conditioning - manual"
      },
      {
        label : "Keyless Go"
      },
      {
        label : "automatic air conditioning / digital"
      },
      {
        label : "Start-Stop system"
      },
      {
        label : "air conditioning - 2 zones"
      },
      {
        label : "electrical package"
      },
      {
        label : "air conditioning - 3 zones"
      },
      {
        label : "height-adjustable steering wheel"
      },
      {
        label : "air conditioning - 4 zoness"
      },
      {
        label : "depth-adjustable steering wheel"
      },
      {
        label : "stationary vehicle heating (Webasto)"
      },
      {
        label : "tinted windows"
      },
      {
        label : "leather-wrapped steering wheel"
      },
      {
        label : "electric front windows"
      },
      {
        label : "multifunction steering wheel"
      },
      {
        label : "electric front and rear windows"
      },
      {
        label : "sports steering wheel"
      },
      {
        label : "electrically adjustable exterior mirrors"
      },
      {
        label : "heated steering wheel"
      },
      {
        label : "heated exterior mirrors"
      },
      {
        label : "steering wheel gearshift paddles + -"
      },
      {
        label : "electrically folding exterior mirrorss"
      },
      {
        label : "cruise control"
      },
      {
        label : "central locking"
      },
      {
        label : "adaptive cruise control (Adaptive Cruise Control)"
      },
      {
        label : "central locking with remote control"
      },
      {
        label : "electric parking brake"
      },
      {
        label : "Soft-Close closing system"
      },
      {
        label : "electric trunk closing"
      },
      {
        label : "rear window sunshade"
      },
      {
        label : "heated windshield"
      },
      {
        label : "Soft-Close closing system"
      },
      {
        label : "electric trunk closing"
      },
      {
        label : "rear window sunshade"
      },
      {
        label : "heated windshield"
      },
    ]
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

export const vehicalData = [
  {
    id: 1,
    input_label: "vehicle color:",
    checkboxes : [
      {
        label: "metallic"
      },
      {
        label: "matt"
      },
    ]
  },
  {
    id: 2,
    input_label: "vehicle roof:",
    checkboxes : [
      {
        label: "electric movement"
      },
    ]
  },
  {
    id: 3,
    input_label: "number of doors:",
    checkboxes : [
      {
        label: "sliding door"
      },
    ]
  },
];