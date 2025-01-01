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
            subcategories: [
              { id: 1011, name: "Sheet Lifters" },
              { id: 1012, name: "Glass Lifters" },
              { id: 1013, name: "Panel Lifters" },
              { id: 1014, name: "Bag Lifters" },
              { id: 1015, name: "Drum Lifters" },
            ],
          },
          { id: 102, name: "Industrial Manipulator" },
          { id: 103, name: "Tool Balancers" },
          { id: 104, name: "Pipe Vacuum Lifter" },
          { id: 105, name: "Crane System" },
          { id: 106, name: "Magnetic Lifters" },
          { id: 107, name: "Electric Tugs" },
          { id: 108, name: "Auto Guided Vehicle (AGV)" },
          { id: 109, name: "Warehousing & Storage" },
          { id: 110, name: "Special Lifters & Trolleys" },
          { id: 111, name: "Drum Handling Solutions" },
          { id: 112, name: "Conveyor Belts" },
        ],
      };

    case "Steel Machineries":
      return {
        id: 2,
        name: "Steel Machineries",
        products: [
          { id: 201, name: "Forming Technology" },
          { id: 202, name: "Cutting Technology" },
          { id: 203, name: "CNC Machines" },
          { id: 204, name: "Tooling Solutions" },
          { id: 205, name: "Surface & Edge Finishing Technology" },
          { id: 206, name: "Welding Technology" },
          { id: 207, name: "Assembly Solutions" },
          { id: 208, name: "Sheet Metal Lifting Machine" },
          { id: 209, name: "Storage Solutions" },
          { id: 210, name: "Marking Solutions" },
        ],
      };

    case "Construction":
      return {
        id: 3,
        name: "Construction",
        products: [
          { id: 301, name: "Lifting & Handling Robot" },
          { id: 302, name: "Cable Pulling System" },
          { id: 303, name: "Sandwich Panel Lifter" },
        ],
      };

    case "Industrial Solutions":
      return {
        id: 4,
        name: "Industrial Solutions",
        products: [
          { id: 401, name: "Packaging" },
          { id: 402, name: "Robotics & Automation" },
          { id: 403, name: "Industrial Vacuum cleaner" },
          { id: 404, name: "Printing" },
          { id: 405, name: "Cleaning" },
          { id: 406, name: "Safety solutions" },
          { id: 407, name: "Industrial Flooring" },
          { id: 408, name: "Air Compressor" },
        ],
      };

    default:
      return null;
  }
};
