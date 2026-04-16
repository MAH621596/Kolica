import Saved from "../assets/Saved.svg";
import Profile from "../assets/Profile.svg";
import Plus from "../assets/Plus-Icon.svg";
import Carr from "../assets/Carr.png";
import Byke from "../assets/Byke.png";
import Moto from "../assets/Moto.png";
import Economic from "../assets/Economic.png";
import Mechanic from "../assets/Mechanic.png";
import FreeTime from "../assets/Free Time.png";
import Parts from "../assets/Parts.png";

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

export const tabsMenu = [
  { id: "Home", label: "Home" },
  { id: "Car", label: "Car" },
  { id: "Moto", label: "Moto" },
  { id: "Economic", label: "Economic" },
  { id: "Mechanization", label: "Mechanization" },
  { id: "Free time", label: "Free time" },
  { id: "Parts & equipment", label: "Parts & equipment" },
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