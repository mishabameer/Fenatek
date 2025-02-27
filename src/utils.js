export const Category = [
  { id: 1, name: "Material Handling" },
  { id: 3, name: "Construction" },
  { id: 2, name: "Steel Machineries" },
  { id: 4, name: "Industrial Technologies" },
];
export const getProductInCategory = (catName) => {
  switch (catName) {
    case "Material Handling":
      return {
        id: 1,
        name: "Material Handling",
        products: [
          {
            id: 101,
            name: "Vacuum Lifting",
            subCategories: [
              { id: 1011, name: "Glass vacuum Lifters" },
              { id: 1012, name: "Sheet metal Vacuum Lifters" },
              { id: 1013, name: "Cladding panel lifters" },
              { id: 1014, name: "Stone vacuum lifters" },
              { id: 1015, name: "Vacuum lifters for special use" },
            ],
          },
          { id: 102, name: "Industrial Manipulator" },
          { id: 103, name: "Gripper Tool" },
          { id: 104, name: "Tool balancer" },
          { id: 105, name: "Vacuum Tube lifters" },
          { id: 106, name: "Pipe Vacuum Lifters" },
          { id: 107, name: "Crane System" },
          { id: 108, name: "Magnetic Lifter" },
          {
            id: 109,
            name: "Tugs",
            subCategories: [
              { id: 1091, name: "Electric Tugs" },
              { id: 1092, name: "Aircraft Tugs" },
            ],
          },
          {
            id: 110,
            name: "Warehousing Solutions",
            subCategories: [
              { id: 1121, name: "Lean System" },
              { id: 1122, name: "Automated Vertical Storage" },
            ],
          },
          {
            id: 111,
            name: "Special Lifters",
            subCategories: [
              { id: 1111, name: "Scissor Lifters" },
              { id: 1112, name: "Mobile Lifters" },
              { id: 1112, name: "Heavy Roll Handling Equipment" },
            ],
          },
          { id: 112, name: "Drum Handling Solutions" },
          {
            id: 113,
            name: "Pallet Handling",
            subCategories: [
              { id: 1131, name: "Pallet Inverter" },
              { id: 1132, name: "Pallet Changer" },
              { id: 1133, name: "Pile Turner" },
              { id: 1134, name: "Pallet Exchanger and Dispensers" },
            ],
          },
          { id: 114, name: "Conveyor System" },
        ],
      };

    case "Steel Machineries":
      return {
        id: 2,
        name: "Steel Machineries",
        products: [
          {
            id: 201,
            name: "Welding Technology",
            subCategories: [
              { id: 2011, name: "Pipe Welding Automation" },
              { id: 2012, name: "Welding Tables" },
              { id: 2013, name: "Mobile Working Stations" },
              { id: 2014, name: "Welding Curtains" },
              { id: 2015, name: "Weld Cleaning Machine" },
              { id: 2016, name: "Magnets for Positioning and Holding" },
              { id: 2017, name: "Welding Fume Extractors" },
              { id: 2018, name: "Welding Helmets" },
              { id: 2019, name: "AI Based Robotic Welding Systems" },
            ],
          },
          {
            id: 202,
            name: "Laser Technology",
            subCategories: [
              { id: 2021, name: "Laser Cutting Machine" },
              { id: 2022, name: "Laser Welding Machines" },
              { id: 2023, name: "Laser Cleaning Machine" },
            ],
          },
          {
            id: 203,
            name: "Piping Solutions",
            subCategories: [
              { id: 2031, name: "Pipe Grinding Machine" },
              { id: 2032, name: "Pipe Beveling Machine" },
              { id: 2033, name: "Pipe Bending Machines" },
              { id: 2034, name: "Pipe Polishing" },
            ],
          },
          {
            id: 204,
            name: "Forming Technology",
            subCategories: [
              { id: 2041, name: "Sheet Metal Processing Lines" },
              { id: 2042, name: "Press Brakes" },
              { id: 2043, name: "Profile Bending Machines" },
            ],
          },
          {
            id: 205,
            name: "Cutting Technology",
            subCategories: [
              { id: 2051, name: "Cutting and Machining Tools" },
              { id: 2052, name: "MultiTapper Machine" },
              { id: 2053, name: "Electric Tapping Machine" },
              { id: 2054, name: "Bandsaw Cutting" },
            ],
          },
          {
            id: 206,
            name: "CNC Machines",
            subCategories: [
              { id: 2061, name: "CNC Laser Cutting Machine" },
              { id: 2062, name: "CNC Plasma Gas Cutting Machine" },
            ],
          },
          {
            id: 207,
            name: "Surface Protection and Industrial Coating",
          },
          {
            id: 208,
            name: "Tube Bending Machine",
          },
          {
            id: 209,
            name: "Assembly Solutions",
            subCategories: [
              { id: 2091, name: "Clamps and Pliers" },
              { id: 2092, name: "Fastener Insertion Machine" },
            ],
          },

          {
            id: 210,
            name: "Storage Solutions",
            subCategories: [
              { id: 2101, name: "Sheet Metal and Bar Stock Storage" },
              { id: 2102, name: "Tool Cabinets and Road Boxes" },
              { id: 2103, name: "Work Benches with Storage" },
            ],
          },
          {
            id: 211,
            name: "Marking Solutions",
            subCategories: [{ id: 2111, name: "Laser Marking" }],
          },
        ],
      };

    case "Construction":
      return {
        id: 3,
        name: "Construction",
        products: [
          { id: 301, name: "Lifting and Handling Robots" },
          { id: 302, name: "Industrial Hoses" },
          { id: 303, name: "Dumpers and Carriers" },
          { id: 304, name: "Spider Lifters" },
          { id: 305, name: "Vehicle Aerial Platforms" },
          { id: 306, name: "Sandwich Panel Lifter" },
          { id: 307, name: "Cable Pulling System" },
        ],
      };

    case "Industrial Technologies":
      return {
        id: 4,
        name: "Industrial Technologies",
        products: [
          {
            id: 401,
            name: "Packaging",
            subCategories: [
              { id: 4011, name: "Shrink Wrap" },
              { id: 4012, name: "Strapping Machine" },
              { id: 4013, name: "Strapping Tools" },
            ],
          },
          {
            id: 402,
            name: "Cleaning",
            subCategories: [
              { id: 4021, name: "Sweeping Machine" },
              { id: 4022, name: "Pressure Cleaning" },
              { id: 4023, name: "Steam Cleaning" },
              { id: 4024, name: "Solar Panel Cleaning" },
            ],
          },
          {
            id: 403,
            name: "Stretch Wrapping Solutions",
            subCategories: [
              { id: 4031, name: "Rotating Arm Wrapping" },
              { id: 4032, name: "Rotating Table Wrapping" },
              { id: 4033, name: "Wrapping Robots" },
              { id: 4034, name: "Heat Shrink Ovens" },
            ],
          },
          {
            id: 404,
            name: "Industrial Vacuum Cleaner",
            subCategories: [
              { id: 4041, name: "Dust and Chip Aspirators" },
              { id: 4042, name: "Oil Aspirators" },
            ],
          },
          {
            id: 406,
            name: "Safety Solutions",
            subCategories: [
              { id: 4061, name: "Safety Barriers" },
              { id: 4062, name: "Visual Management Tools" },
              { id: 4063, name: "Safety Lighting" },
              { id: 4064, name: "Signalling and Alarm Solutions" },
            ],
          },
          { id: 407, name: "Inkjet Printing" },
          { id: 407, name: "Electric Cutters" },
          { id: 408, name: "Industrial Doors" },
          { id: 409, name: "Industrial Flooring Solutions" },
          { id: 410, name: "Industrial Springs" },
          { id: 411, name: "Turbine Roof Ventilators" },
          { id: 412, name: "Industrial Filtration" },
          {
            id: 413,
            name: "Nitrogen and Oxygen Generators",
            subCategories: [
              { id: 4131, name: "Oxygen Generators" },
              { id: 4132, name: "Nitrogen Generators" },
            ],
          },
        ],
      };

    default:
      return null;
  }
};
