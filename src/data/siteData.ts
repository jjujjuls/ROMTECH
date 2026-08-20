import bellagioTowersImage from "../assets/bellagio-towers.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: string;
  image: string;
  sourceUrl: string;
  summary: string;
  confirmationNote?: string;
};

export const projects: Project[] = [
  {
    slug: "viridian-greenhills",
    name: "Viridian in Greenhills",
    location: "San Juan City",
    category: "Residential",
    image:
      "https://www.mka.com/wp-content/uploads/2023/06/96591_00_N28_indesign-jpg.webp",
    sourceUrl: "https://www.ortigas.com.ph/residences/viridian-in-greenhills",
    summary: "A landmark residential tower within the Greenhills district.",
  },
  {
    slug: "radiance-manila-bay",
    name: "The Radiance Manila Bay",
    location: "Pasay City",
    category: "Residential",
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1555029529075995838/original/d2b34303-4be9-4d8b-b0b1-02b7c633f6b5.jpeg",
    sourceUrl: "https://robinsonscondominium.com/the-radiance-manila-bay/",
    summary: "Twin residential towers along historic Roxas Boulevard.",
  },
  {
    slug: "bellagio-towers",
    name: "The Bellagio Towers",
    location: "Bonifacio Global City, Taguig",
    category: "Residential",
    image: bellagioTowersImage,
    sourceUrl: "https://www.real.ph/development/bellagio-towers-bgc",
    summary: "A premium residential development in Forbestown, BGC.",
  },
  {
    slug: "royalton-capitol-commons",
    name: "The Royalton at Capitol Commons",
    location: "Pasig City",
    category: "Residential",
    image:
      "https://1.bp.blogspot.com/-SjrL_c9lJus/Uan7lg4jpeI/AAAAAAAAEQE/x3XSB-fs5rA/s600/00.jpg",
    sourceUrl:
      "https://www.ortigas.com.ph/residences/the-royalton-at-capitol-commons",
    summary: "A distinctive residential landmark in Capitol Commons.",
  },
  {
    slug: "newport-world-resorts",
    name: "Resorts World Manila",
    location: "Pasay City",
    category: "Hospitality & Leisure",
    image:
      "https://businessmirror.com.ph/wp-content/uploads/2022/07/top01-072121-1.jpg",
    sourceUrl: "https://www.newportworldresorts.com/",
    summary: "The integrated resort now known as Newport World Resorts.",
  },
  {
    slug: "oxford-suites-makati",
    name: "Oxford Suites",
    location: "Makati City",
    category: "Hospitality",
    image:
      "https://static.guestcentric.net/bin/75f90654f428841c/oxford-suites-makati-imageLinkrockwell2-1.webp",
    sourceUrl: "https://www.oxfordsuitesmakati.com/",
    summary: "A hospitality establishment in the Makati central district.",
    confirmationNote:
      "Confirm that the old ROMTECH listing refers to Oxford Suites Makati.",
  },
  {
    slug: "one-castilla-place",
    name: "One Castilla Place",
    location: "Quezon City",
    category: "Residential",
    image:
      "https://i0.wp.com/www.dmci-online.com/dmci-images/OCP/1/building-facade.jpg?resize=650%2C790",
    sourceUrl: "https://www.dmcihomes.com/one-castilla-place",
    summary: "A high-rise residential development by DMCI Homes.",
  },
  {
    slug: "naia-terminal-3",
    name: "NAIA Terminal 3",
    location: "Pasay City",
    category: "Transport Infrastructure",
    image:
      "https://lemcon-philippines.com/wp-content/uploads/2023/03/NAIA-T3-1.jpg",
    sourceUrl: "https://www.miaa.gov.ph/",
    summary:
      "One of the primary international airport terminals serving Metro Manila.",
  },
  {
    slug: "mcdonalds-philippines",
    name: "McDonald's",
    location: "Philippines",
    category: "Commercial",
    image:
      "https://franchise.ph/wp-content/uploads/2025/01/img-mcdonals-1-1.jpg",
    sourceUrl: "https://www.mcdonalds.com.ph/",
    summary:
      "Commercial waterproofing work represented in the archived ROMTECH gallery.",
    confirmationNote:
      "Replace this reference photograph once the exact branch is confirmed.",
  },
  {
    slug: "eastwood-mall",
    name: "Eastwood Mall",
    location: "Quezon City",
    category: "Commercial",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493465310.jpg?k=0e68b76adfa5bd843244e5f9d38c0e8b780acdc0da75454d9a39cfe299d25ced&o=",
    sourceUrl: "https://megaworld-lifestylemalls.com/malls/eastwood-mall",
    summary: "A shopping and dining destination in Eastwood City.",
  },
  {
    slug: "carmelite-monastery",
    name: "Carmelite Monastery",
    location: "Location to confirm",
    category: "Institutional",
    image:
      "https://cbcpnews.net/cbcpnews/wp-content/uploads/2022/08/CarmeliteMonastery-Cebu.jpg",
    sourceUrl: "https://cbcpnews.net/",
    summary:
      "An institutional project retained from ROMTECH’s archived project gallery.",
    confirmationNote:
      "Confirm the monastery location before production launch.",
  },
];

export type ServiceCategory = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  products: { name: string; description: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "coatings",
    name: "Coatings",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85",
    summary:
      "Flexible and protective systems for exposed, concrete, and specialized surfaces.",
    products: [
      {
        name: "Anacryl Elastoliquid",
        description:
          "Single-component flexible acrylic waterproofing membrane for external surfaces.",
      },
      {
        name: "Polyurea",
        description:
          "Fast-curing elastomeric protective coating for demanding applications.",
      },
    ],
  },
  {
    slug: "flooring-materials",
    name: "Flooring Materials",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=85",
    summary:
      "Durable floor finishes for industrial, institutional, and commercial environments.",
    products: [
      {
        name: "Epoxy Floor Coatings",
        description: "Seamless, resilient finishes for high-use areas.",
      },
      {
        name: "Industrial Flooring Systems",
        description:
          "Purpose-selected systems for wear, traffic, and environmental exposure.",
      },
    ],
  },
  {
    slug: "graco-machines",
    name: "Graco Machines",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    summary:
      "Technologically capable application equipment supporting consistent project delivery.",
    products: [
      {
        name: "Airless Sprayers",
        description:
          "Professional application equipment for coatings and protective systems.",
      },
      {
        name: "Plural-Component Equipment",
        description:
          "Controlled equipment for multi-component material application.",
      },
    ],
  },
  {
    slug: "insulation",
    name: "Insulation",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1400&q=85",
    summary:
      "Thermal and specialty insulation systems suited to building performance requirements.",
    products: [
      {
        name: "Sprayed Polyurethane Foam",
        description:
          "Applied insulation for thermal performance and building-envelope continuity.",
      },
      {
        name: "Thermal Insulation Systems",
        description:
          "Project-specific insulation materials and installation solutions.",
      },
    ],
  },
  {
    slug: "roof-garden",
    name: "Roof Garden",
    image:
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1400&q=85",
    summary:
      "Coordinated waterproofing, drainage, protection, and green-roof layer systems.",
    products: [
      {
        name: "Root-Resistant Membranes",
        description:
          "Waterproofing protection designed for planted roof assemblies.",
      },
      {
        name: "Drainage & Protection Layers",
        description:
          "Supporting layers that manage water and protect the waterproofing system.",
      },
    ],
  },
  {
    slug: "structural-repair",
    name: "Structural Repair",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    summary:
      "Rehabilitation systems that restore integrity and extend structural service life.",
    products: [
      {
        name: "Epoxy Injection & Grouting",
        description:
          "Repair approaches for cracks, voids, and localized structural requirements.",
      },
      {
        name: "Carbon Fiber Strengthening",
        description:
          "Advanced reinforcement systems for selected structural applications.",
      },
    ],
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    summary:
      "Integrated protection for roofs, decks, wet areas, tanks, basements, and façades.",
    products: [
      {
        name: "Waterproofing Membranes",
        description:
          "Membrane systems selected for exposed and concealed applications.",
      },
      {
        name: "Cementitious & Crystalline Systems",
        description:
          "Rigid and penetrating protection for concrete and wet-area conditions.",
      },
      {
        name: "Sealants & Flexible Coatings",
        description:
          "Joint and surface protection accommodating movement and exposure.",
      },
    ],
  },
];

export const positions = [
  "Labor",
  "Painter",
  "Waterproofing Applicator",
  "Security Guard",
  "Accounting Staff",
  "Safety Officer",
];
export const affiliations = [
  ["ISO", "ISO Registered Firm"],
  ["CPMAP", "Construction Project Management Association of the Philippines"],
  ["PCA", "Philippines Contractors Association"],
  [
    "PSVARE",
    "Philippine Society of Ventilating, Air-Conditioning and Refrigerating Engineers",
  ],
  ["PCAB", "Philippine Contractors Accreditation Board"],
  ["ACCI", "Architectural Centre Club, Inc."],
];
