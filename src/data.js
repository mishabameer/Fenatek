const GetProductData = (name) => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, "-");
  switch (normalizedName) {
    case "industrial-manipulator":
      return {
        images: [
          {
            id: 1,
            path: require("../assets/images/product/industrial-manipulator/1.png"),
          },
          {
            id: 2,
            path: require("../assets/images/product/industrial-manipulator/2.png"),
          },
          {
            id: 3,
            path: require("../assets/images/product/industrial-manipulator/3.png"),
          },
          {
            id: 4,
            path: require("../assets/images/product/industrial-manipulator/4.png"),
          },
          {
            id: 5,
            path: require("../assets/images/product/industrial-manipulator/5.png"),
          },
          {
            id: 6,
            path: require("../assets/images/product/industrial-manipulator/6.png"),
          },
          {
            id: 7,
            path: require("../assets/images/product/industrial-manipulator/7.png"),
          },
          {
            id: 8,
            path: require("../assets/images/product/industrial-manipulator/8.png"),
          },
        ],
        videos: [
          { id: 1, uri: "https://youtu.be/o8dlQ9rxVlo" },
          {
            id: 2,
            uri: "https://www.youtube.com/embed/0mdAV0fk1r8?si=BE1iFxx4zvZmTOsX",
          },
        ],
      };

    default:
      break;
  }
};
export default GetProductData;
