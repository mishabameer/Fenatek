const GetProductData = (name) => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, "-");
  switch (normalizedName) {
    case "ai-based-robotic-welding-systems":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/ai-based-robotic-welding-systems/1.png") },
          { id: 2, path: require("../assets/images/product/ai-based-robotic-welding-systems/2.jpg") },
          { id: 3, path: require("../assets/images/product/ai-based-robotic-welding-systems/3.png") },
          { id: 4, path: require("../assets/images/product/ai-based-robotic-welding-systems/4.png") }
        ],
        videos: [

        ]
      };

    case "aircraft-tugs":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/aircraft-tugs/1-9.jpg") },
          { id: 2, path: require("../assets/images/product/aircraft-tugs/2-8.jpg") },
          { id: 3, path: require("../assets/images/product/aircraft-tugs/4-7.jpg") },
          { id: 4, path: require("../assets/images/product/aircraft-tugs/5-4.jpg") },
          { id: 5, path: require("../assets/images/product/aircraft-tugs/6-4.jpg") },
          { id: 6, path: require("../assets/images/product/aircraft-tugs/7-2.jpg") },
          { id: 7, path: require("../assets/images/product/aircraft-tugs/key1-14.jpg") },
          { id: 8, path: require("../assets/images/product/aircraft-tugs/key10.jpg") },
          { id: 9, path: require("../assets/images/product/aircraft-tugs/key2-10.jpg") },
          { id: 10, path: require("../assets/images/product/aircraft-tugs/key3-8.jpg") },
          { id: 11, path: require("../assets/images/product/aircraft-tugs/key4-6.jpg") },
          { id: 12, path: require("../assets/images/product/aircraft-tugs/key5-5.jpg") },
          { id: 13, path: require("../assets/images/product/aircraft-tugs/key6-4.jpg") },
          { id: 14, path: require("../assets/images/product/aircraft-tugs/key7-3.jpg") },
          { id: 15, path: require("../assets/images/product/aircraft-tugs/key8-1.jpg") },
          { id: 16, path: require("../assets/images/product/aircraft-tugs/key9-1.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/watch?v=kN3vhw0Hvc8" },
          { id: 2, uri: "https://www.youtube.com/watch?v=2q1B-5oPYuU" },
          { id: 3, uri: "https://www.youtube.com/watch?v=5Uj8hyuDapM" },
          { id: 4, uri: "https://www.youtube.com/watch?v=vpiGRmvIJC0" },
          { id: 5, uri: "https://www.youtube.com/watch?v=QCBzOauCjsw" }
        ]
      };

    case "automated-vertical-storage":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/automated-vertical-storage/1-2.png") },
          { id: 2, path: require("../assets/images/product/automated-vertical-storage/1Normal.png") },
          { id: 3, path: require("../assets/images/product/automated-vertical-storage/2-1.png") },
          { id: 4, path: require("../assets/images/product/automated-vertical-storage/2-2.png") },
          { id: 5, path: require("../assets/images/product/automated-vertical-storage/3-1.png") },
          { id: 6, path: require("../assets/images/product/automated-vertical-storage/3-2.png") },
          { id: 7, path: require("../assets/images/product/automated-vertical-storage/4-3.png") },
          { id: 8, path: require("../assets/images/product/automated-vertical-storage/6-1.png") },
          { id: 9, path: require("../assets/images/product/automated-vertical-storage/key1-2.png") },
          { id: 10, path: require("../assets/images/product/automated-vertical-storage/key2-2.png") },
          { id: 11, path: require("../assets/images/product/automated-vertical-storage/key3-2.png") },
          { id: 12, path: require("../assets/images/product/automated-vertical-storage/key5-2.png") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/2kgfX2lBNWY" },
          { id: 2, uri: "https://www.youtube.com/embed/Hq83qbSW2TU" },
          { id: 3, uri: "https://www.youtube.com/embed/XGxd_RS9FHg" },
          { id: 4, uri: "https://www.youtube.com/embed/rCkcZcL7o2M" },
          { id: 5, uri: "https://www.youtube.com/embed/DWJXkZTEmO8" },
          { id: 6, uri: "https://www.youtube.com/embed/_kBbDDdOkXk" },
          { id: 7, uri: "https://www.youtube.com/embed/h3CbXKmWYiw" },
          { id: 8, uri: "https://www.youtube.com/embed/RDlJGDtJGPw" }
        ]
      };

    case "bandsaw-cutting":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/bandsaw-cutting/1.png") },
          { id: 2, path: require("../assets/images/product/bandsaw-cutting/10.png") },
          { id: 3, path: require("../assets/images/product/bandsaw-cutting/2.png") },
          { id: 4, path: require("../assets/images/product/bandsaw-cutting/3.png") },
          { id: 5, path: require("../assets/images/product/bandsaw-cutting/4.png") },
          { id: 6, path: require("../assets/images/product/bandsaw-cutting/5.png") },
          { id: 7, path: require("../assets/images/product/bandsaw-cutting/6.png") },
          { id: 8, path: require("../assets/images/product/bandsaw-cutting/7.png") },
          { id: 9, path: require("../assets/images/product/bandsaw-cutting/8.png") },
          { id: 10, path: require("../assets/images/product/bandsaw-cutting/9.png") }
        ],
        videos: [

        ]
      };

    case "cable-pulling-system":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/cable-pulling-system/1.jpg") },
          { id: 2, path: require("../assets/images/product/cable-pulling-system/10.jpg") },
          { id: 3, path: require("../assets/images/product/cable-pulling-system/11.jpg") },
          { id: 4, path: require("../assets/images/product/cable-pulling-system/12.jpg") },
          { id: 5, path: require("../assets/images/product/cable-pulling-system/2.jpg") },
          { id: 6, path: require("../assets/images/product/cable-pulling-system/3.jpg") },
          { id: 7, path: require("../assets/images/product/cable-pulling-system/4.jpg") },
          { id: 8, path: require("../assets/images/product/cable-pulling-system/5.jpg") },
          { id: 9, path: require("../assets/images/product/cable-pulling-system/6.jpg") },
          { id: 10, path: require("../assets/images/product/cable-pulling-system/7.jpg") },
          { id: 11, path: require("../assets/images/product/cable-pulling-system/8.jpg") },
          { id: 12, path: require("../assets/images/product/cable-pulling-system/9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://fenatek.com/wp-content/uploads/2024/10/KakaoTalk_20231123_190820919.mp4" },
          { id: 2, uri: "https://fenatek.com/wp-content/uploads/2024/10/Powerball-installation-and-operation-in-the-section-of-the-utility-tunnel-where-the-cable-tray-is-not-installed-1-1.mp4" },
          { id: 3, uri: "https://fenatek.com/wp-content/uploads/2024/10/Powerball-spacing-control-video.mp4" },
          { id: 4, uri: "https://fenatek.com/wp-content/uploads/2024/10/Powerball-operation-method-graphic-version.mp4" }
        ]
      };

    case "cladding-panel-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/cladding-panel-lifters/1.jpg") },
          { id: 2, path: require("../assets/images/product/cladding-panel-lifters/2.jpg") },
          { id: 3, path: require("../assets/images/product/cladding-panel-lifters/3.jpg") },
          { id: 4, path: require("../assets/images/product/cladding-panel-lifters/4.jpg") },
          { id: 5, path: require("../assets/images/product/cladding-panel-lifters/5.jpg") },
          { id: 6, path: require("../assets/images/product/cladding-panel-lifters/6.jpg") },
          { id: 7, path: require("../assets/images/product/cladding-panel-lifters/7.jpg") },
          { id: 8, path: require("../assets/images/product/cladding-panel-lifters/8.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/PiOSwfEUazY" },
          { id: 2, uri: "https://www.youtube.com/embed/BlE7KYfwLbI" },
          { id: 3, uri: "https://www.youtube.com/embed/xqrkATyp2oA" },
          { id: 4, uri: "https://www.youtube.com/embed/laOqkCQCPRg" }
        ]
      };

    case "clamps-and-pliers":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/clamps-and-pliers/1-6.jpg") },
          { id: 2, path: require("../assets/images/product/clamps-and-pliers/10.jpg") },
          { id: 3, path: require("../assets/images/product/clamps-and-pliers/11.jpg") },
          { id: 4, path: require("../assets/images/product/clamps-and-pliers/13.jpg") },
          { id: 5, path: require("../assets/images/product/clamps-and-pliers/14.jpg") },
          { id: 6, path: require("../assets/images/product/clamps-and-pliers/15.jpg") },
          { id: 7, path: require("../assets/images/product/clamps-and-pliers/3-6.jpg") },
          { id: 8, path: require("../assets/images/product/clamps-and-pliers/4-5.jpg") },
          { id: 9, path: require("../assets/images/product/clamps-and-pliers/5-3.jpg") },
          { id: 10, path: require("../assets/images/product/clamps-and-pliers/6-3.jpg") },
          { id: 11, path: require("../assets/images/product/clamps-and-pliers/7-1.jpg") },
          { id: 12, path: require("../assets/images/product/clamps-and-pliers/9.jpg") },
          { id: 13, path: require("../assets/images/product/clamps-and-pliers/key1-11.jpg") },
          { id: 14, path: require("../assets/images/product/clamps-and-pliers/key2-7.jpg") },
          { id: 15, path: require("../assets/images/product/clamps-and-pliers/key3-5.jpg") },
          { id: 16, path: require("../assets/images/product/clamps-and-pliers/key4-3.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/c9IyGZ8MYAQ" },
          { id: 2, uri: "https://www.youtube.com/embed/T3tYGYtdmf0" },
          { id: 3, uri: "https://www.youtube.com/embed/oAIEWvHM5vA" },
          { id: 4, uri: "https://www.youtube.com/embed/28lSzP0eVKg" },
          { id: 5, uri: "https://www.youtube.com/embed/XtEXPWU624Q" }
        ]
      };

    case "cnc-laser-cutting-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/cnc-laser-cutting-machine/1-44.jpg") },
          { id: 2, path: require("../assets/images/product/cnc-laser-cutting-machine/2-43.jpg") },
          { id: 3, path: require("../assets/images/product/cnc-laser-cutting-machine/3-42.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/Dktanh6ZaCM" },
          { id: 2, uri: "https://www.youtube.com/embed/ZK-3CGk3w00" },
          { id: 3, uri: "https://www.youtube.com/embed/vcQNL2ZERf0" },
          { id: 4, uri: "https://www.youtube.com/embed/DvIthUfBDuI" }
        ]
      };

    case "cnc-plasma-gas-cutting-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/1-47.jpg") },
          { id: 2, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/1-48.jpg") },
          { id: 3, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/1-49.jpg") },
          { id: 4, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/1-50.jpg") },
          { id: 5, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/10-7.jpg") },
          { id: 6, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/11-4.jpg") },
          { id: 7, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/12-4.jpg") },
          { id: 8, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/13-3.jpg") },
          { id: 9, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/14-3.jpg") },
          { id: 10, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/15-3.jpg") },
          { id: 11, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/16-2.jpg") },
          { id: 12, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/17-1.jpg") },
          { id: 13, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/18.jpg") },
          { id: 14, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/19.jpg") },
          { id: 15, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/2-46.jpg") },
          { id: 16, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/2-47.jpg") },
          { id: 17, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/2-48.jpg") },
          { id: 18, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/2-49.jpg") },
          { id: 19, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/20.jpg") },
          { id: 20, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/3-45.jpg") },
          { id: 21, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/3-46.jpg") },
          { id: 22, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/3-47.jpg") },
          { id: 23, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/3-48.jpg") },
          { id: 24, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/4-34.jpg") },
          { id: 25, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/4-35.jpg") },
          { id: 26, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/4-36.jpg") },
          { id: 27, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/5-24.jpg") },
          { id: 28, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/5-25.jpg") },
          { id: 29, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/5-26.jpg") },
          { id: 30, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/5-27.jpg") },
          { id: 31, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/6-16.jpg") },
          { id: 32, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/7-9.jpg") },
          { id: 33, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/8-8.jpg") },
          { id: 34, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/9-5.jpg") },
          { id: 35, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/key1-51.jpg") },
          { id: 36, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/key2-46.jpg") },
          { id: 37, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/key3-42.jpg") },
          { id: 38, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/key4-37.jpg") },
          { id: 39, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/key5-33.jpg") },
          { id: 40, path: require("../assets/images/product/cnc-plasma-gas-cutting-machine/key6-31.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/1-o0GnvYjbk" },
          { id: 2, uri: "https://www.youtube.com/embed/6vFt-hgWfUM" },
          { id: 3, uri: "https://www.youtube.com/embed/ZK-3CGk3w00" },
          { id: 4, uri: "https://www.youtube.com/embed/2Yw1fNy59vs" }
        ]
      };

    case "conveyor-system":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/conveyor-system/1-3.jpg") },
          { id: 2, path: require("../assets/images/product/conveyor-system/2-3.jpg") },
          { id: 3, path: require("../assets/images/product/conveyor-system/3-3.jpg") },
          { id: 4, path: require("../assets/images/product/conveyor-system/key1-8.jpg") },
          { id: 5, path: require("../assets/images/product/conveyor-system/key2-4.jpg") },
          { id: 6, path: require("../assets/images/product/conveyor-system/key3-2.jpg") },
          { id: 7, path: require("../assets/images/product/conveyor-system/key4-1.jpg") },
          { id: 8, path: require("../assets/images/product/conveyor-system/key5-1.jpg") },
          { id: 9, path: require("../assets/images/product/conveyor-system/key6.jpg") },
          { id: 10, path: require("../assets/images/product/conveyor-system/key7.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/p_rD-skYxY0" },
          { id: 2, uri: "https://www.youtube.com/embed/rKivgVztueE" },
          { id: 3, uri: "https://www.youtube.com/embed/uVSydI__Td0" },
          { id: 4, uri: "https://www.youtube.com/embed/WOowSBrWlBY" }
        ]
      };

    case "crane-system":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/crane-system/1.jpg") },
          { id: 2, path: require("../assets/images/product/crane-system/10.jpg") },
          { id: 3, path: require("../assets/images/product/crane-system/11.jpg") },
          { id: 4, path: require("../assets/images/product/crane-system/12.jpg") },
          { id: 5, path: require("../assets/images/product/crane-system/13.jpg") },
          { id: 6, path: require("../assets/images/product/crane-system/2.jpg") },
          { id: 7, path: require("../assets/images/product/crane-system/3-2.jpg") },
          { id: 8, path: require("../assets/images/product/crane-system/3.jpg") },
          { id: 9, path: require("../assets/images/product/crane-system/4.jpg") },
          { id: 10, path: require("../assets/images/product/crane-system/5.jpg") },
          { id: 11, path: require("../assets/images/product/crane-system/6.jpg") },
          { id: 12, path: require("../assets/images/product/crane-system/7.jpg") },
          { id: 13, path: require("../assets/images/product/crane-system/8.jpg") },
          { id: 14, path: require("../assets/images/product/crane-system/9.jpg") },
          { id: 15, path: require("../assets/images/product/crane-system/key2-3.jpg") },
          { id: 16, path: require("../assets/images/product/crane-system/key3-1.jpg") },
          { id: 17, path: require("../assets/images/product/crane-system/key4.jpg") },
          { id: 18, path: require("../assets/images/product/crane-system/key5.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/VMq4zFCIIVo" },
          { id: 2, uri: "https://www.youtube.com/embed/B_xAb-GejWc" },
          { id: 3, uri: "https://fenatek.com/wp-content/uploads/2024/10/IMG_2407.mp4" },
          { id: 4, uri: "https://fenatek.com/wp-content/uploads/2024/10/IMG_6704.mp4" }
        ]
      };

    case "cutting-and-machining-tools":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/cutting-and-machining-tools/1-27.jpg") },
          { id: 2, path: require("../assets/images/product/cutting-and-machining-tools/10-4.jpg") },
          { id: 3, path: require("../assets/images/product/cutting-and-machining-tools/12-2.jpg") },
          { id: 4, path: require("../assets/images/product/cutting-and-machining-tools/2-27.jpg") },
          { id: 5, path: require("../assets/images/product/cutting-and-machining-tools/3-26.jpg") },
          { id: 6, path: require("../assets/images/product/cutting-and-machining-tools/5-13.jpg") },
          { id: 7, path: require("../assets/images/product/cutting-and-machining-tools/8-4.jpg") },
          { id: 8, path: require("../assets/images/product/cutting-and-machining-tools/9-4.jpg") },
          { id: 9, path: require("../assets/images/product/cutting-and-machining-tools/key1-29.jpg") },
          { id: 10, path: require("../assets/images/product/cutting-and-machining-tools/key2-25.jpg") },
          { id: 11, path: require("../assets/images/product/cutting-and-machining-tools/key3-23.jpg") },
          { id: 12, path: require("../assets/images/product/cutting-and-machining-tools/key4-19.jpg") },
          { id: 13, path: require("../assets/images/product/cutting-and-machining-tools/key5-16.jpg") },
          { id: 14, path: require("../assets/images/product/cutting-and-machining-tools/key6-15.jpg") }
        ],
        videos: [

        ]
      };

    case "drum-handling-solutions":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/drum-handling-solutions/1.png") },
          { id: 2, path: require("../assets/images/product/drum-handling-solutions/14_lg.png") },
          { id: 3, path: require("../assets/images/product/drum-handling-solutions/160_lg.png") },
          { id: 4, path: require("../assets/images/product/drum-handling-solutions/195a-1-115_lg.png") },
          { id: 5, path: require("../assets/images/product/drum-handling-solutions/24_lg.png") },
          { id: 6, path: require("../assets/images/product/drum-handling-solutions/285a-bp_lg.png") },
          { id: 7, path: require("../assets/images/product/drum-handling-solutions/305-video_lg.png") },
          { id: 8, path: require("../assets/images/product/drum-handling-solutions/309-3_lg.png") },
          { id: 9, path: require("../assets/images/product/drum-handling-solutions/400s-xr-115_lg02.png") },
          { id: 10, path: require("../assets/images/product/drum-handling-solutions/456-3_lg.png") },
          { id: 11, path: require("../assets/images/product/drum-handling-solutions/46_lg.png") },
          { id: 12, path: require("../assets/images/product/drum-handling-solutions/510-115_lg03.png") },
          { id: 13, path: require("../assets/images/product/drum-handling-solutions/620-115_lg.png") },
          { id: 14, path: require("../assets/images/product/drum-handling-solutions/825h-n-125_lg02.png") },
          { id: 15, path: require("../assets/images/product/drum-handling-solutions/82a-gt-125_lg.png") },
          { id: 16, path: require("../assets/images/product/drum-handling-solutions/82am_lg.png") },
          { id: 17, path: require("../assets/images/product/drum-handling-solutions/83_lg.png") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/X6jiBMhkc34" },
          { id: 2, uri: "https://www.youtube.com/embed/X6jiBMhkc34" },
          { id: 3, uri: "https://www.youtube.com/embed/G_lSSz3phII" }
        ]
      };

    case "dumpers-and-carriers":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/dumpers-and-carriers/1.jpg") },
          { id: 2, path: require("../assets/images/product/dumpers-and-carriers/10.jpg") },
          { id: 3, path: require("../assets/images/product/dumpers-and-carriers/11.jpg") },
          { id: 4, path: require("../assets/images/product/dumpers-and-carriers/2.jpg") },
          { id: 5, path: require("../assets/images/product/dumpers-and-carriers/3.jpg") },
          { id: 6, path: require("../assets/images/product/dumpers-and-carriers/4.jpg") },
          { id: 7, path: require("../assets/images/product/dumpers-and-carriers/5.jpg") },
          { id: 8, path: require("../assets/images/product/dumpers-and-carriers/6.jpg") },
          { id: 9, path: require("../assets/images/product/dumpers-and-carriers/7.jpg") },
          { id: 10, path: require("../assets/images/product/dumpers-and-carriers/8.png") },
          { id: 11, path: require("../assets/images/product/dumpers-and-carriers/9.jpg") },
          { id: 12, path: require("../assets/images/product/dumpers-and-carriers/d.jpg") },
          { id: 13, path: require("../assets/images/product/dumpers-and-carriers/key2-13.jpg") },
          { id: 14, path: require("../assets/images/product/dumpers-and-carriers/key3-11.jpg") },
          { id: 15, path: require("../assets/images/product/dumpers-and-carriers/key4-9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/QfgpjnYJmWI" },
          { id: 2, uri: "https://www.youtube.com/embed/8pUcMDsANCs" },
          { id: 3, uri: "https://www.youtube.com/embed/3bhfYQM1dOk" },
          { id: 4, uri: "https://www.youtube.com/embed/jxpFQrk5oGU" },
          { id: 5, uri: "https://www.youtube.com/embed/9_PnzG9SGKs" }
        ]
      };

    case "dust-and-chip-aspirators":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/dust-and-chip-aspirators/cicloni-e-ipercicloni-13.jpg") },
          { id: 2, path: require("../assets/images/product/dust-and-chip-aspirators/customizzato-10.jpg") },
          { id: 3, path: require("../assets/images/product/dust-and-chip-aspirators/deduster-87.jpg") },
          { id: 4, path: require("../assets/images/product/dust-and-chip-aspirators/easybag-12.jpg") },
          { id: 5, path: require("../assets/images/product/dust-and-chip-aspirators/heliroto-24h-11.jpg") },
          { id: 6, path: require("../assets/images/product/dust-and-chip-aspirators/impianti-centralizzati-8.jpg") },
          { id: 7, path: require("../assets/images/product/dust-and-chip-aspirators/innova-16.jpg") },
          { id: 8, path: require("../assets/images/product/dust-and-chip-aspirators/key1-3.jpg") },
          { id: 9, path: require("../assets/images/product/dust-and-chip-aspirators/key2-2.jpg") },
          { id: 10, path: require("../assets/images/product/dust-and-chip-aspirators/key3-1.jpg") },
          { id: 11, path: require("../assets/images/product/dust-and-chip-aspirators/key4.jpg") },
          { id: 12, path: require("../assets/images/product/dust-and-chip-aspirators/longpack-72.jpg") },
          { id: 13, path: require("../assets/images/product/dust-and-chip-aspirators/masterclean-49.jpg") },
          { id: 14, path: require("../assets/images/product/dust-and-chip-aspirators/maxi-vortex-58-6.jpg") },
          { id: 15, path: require("../assets/images/product/dust-and-chip-aspirators/miniblow-14.jpg") },
          { id: 16, path: require("../assets/images/product/dust-and-chip-aspirators/normal.jpg") },
          { id: 17, path: require("../assets/images/product/dust-and-chip-aspirators/propaint-89.jpg") },
          { id: 18, path: require("../assets/images/product/dust-and-chip-aspirators/safedust-68-1.jpg") },
          { id: 19, path: require("../assets/images/product/dust-and-chip-aspirators/safedust-68.jpg") },
          { id: 20, path: require("../assets/images/product/dust-and-chip-aspirators/skid-15.jpg") },
          { id: 21, path: require("../assets/images/product/dust-and-chip-aspirators/universal-48-4.jpg") },
          { id: 22, path: require("../assets/images/product/dust-and-chip-aspirators/vortex-58-5.jpg") },
          { id: 23, path: require("../assets/images/product/dust-and-chip-aspirators/workbench-fan-90.jpg") },
          { id: 24, path: require("../assets/images/product/dust-and-chip-aspirators/workbench-hood-91.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/s5mR1RJ_BRY" },
          { id: 2, uri: "https://www.youtube.com/embed/Dd5uX7fuRjc" },
          { id: 3, uri: "https://www.youtube.com/embed/bxsrD2H-oOY" },
          { id: 4, uri: "https://www.youtube.com/embed/z2t9IsWPH7Y" }
        ]
      };

    case "electric-cutters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/electric-cutters/1-30.jpg") },
          { id: 2, path: require("../assets/images/product/electric-cutters/2-30.jpg") },
          { id: 3, path: require("../assets/images/product/electric-cutters/3-30.jpg") },
          { id: 4, path: require("../assets/images/product/electric-cutters/4-21.jpg") },
          { id: 5, path: require("../assets/images/product/electric-cutters/key1-31.jpg") },
          { id: 6, path: require("../assets/images/product/electric-cutters/key10-8.jpg") },
          { id: 7, path: require("../assets/images/product/electric-cutters/key11-4.jpg") },
          { id: 8, path: require("../assets/images/product/electric-cutters/key117.jpg") },
          { id: 9, path: require("../assets/images/product/electric-cutters/key12-4.jpg") },
          { id: 10, path: require("../assets/images/product/electric-cutters/key13-4.jpg") },
          { id: 11, path: require("../assets/images/product/electric-cutters/key14-2.jpg") },
          { id: 12, path: require("../assets/images/product/electric-cutters/key15-1.jpg") },
          { id: 13, path: require("../assets/images/product/electric-cutters/key16-1.jpg") },
          { id: 14, path: require("../assets/images/product/electric-cutters/key2-27.jpg") },
          { id: 15, path: require("../assets/images/product/electric-cutters/key3-25.jpg") },
          { id: 16, path: require("../assets/images/product/electric-cutters/key4-21.jpg") },
          { id: 17, path: require("../assets/images/product/electric-cutters/key5-18.jpg") },
          { id: 18, path: require("../assets/images/product/electric-cutters/key6-17.jpg") },
          { id: 19, path: require("../assets/images/product/electric-cutters/key7-12.jpg") },
          { id: 20, path: require("../assets/images/product/electric-cutters/key8-9.jpg") },
          { id: 21, path: require("../assets/images/product/electric-cutters/key9-9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/32hClgdtUtE" },
          { id: 2, uri: "https://www.youtube.com/embed/6t_XIU0emgc" },
          { id: 3, uri: "https://www.youtube.com/embed/ShneRdNe1N0" },
          { id: 4, uri: "https://www.youtube.com/embed/gEF93xKsRaU" },
          { id: 5, uri: "https://www.youtube.com/embed/WImtOoJx3YM" }
        ]
      };

    case "electric-tapping-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/electric-tapping-machine/1-45.jpg") },
          { id: 2, path: require("../assets/images/product/electric-tapping-machine/1-46.jpg") },
          { id: 3, path: require("../assets/images/product/electric-tapping-machine/2-44.jpg") },
          { id: 4, path: require("../assets/images/product/electric-tapping-machine/2-45.jpg") },
          { id: 5, path: require("../assets/images/product/electric-tapping-machine/3-43.jpg") },
          { id: 6, path: require("../assets/images/product/electric-tapping-machine/3-44.jpg") },
          { id: 7, path: require("../assets/images/product/electric-tapping-machine/4-32.jpg") },
          { id: 8, path: require("../assets/images/product/electric-tapping-machine/4-33.jpg") },
          { id: 9, path: require("../assets/images/product/electric-tapping-machine/5-23.jpg") },
          { id: 10, path: require("../assets/images/product/electric-tapping-machine/6-15.jpg") },
          { id: 11, path: require("../assets/images/product/electric-tapping-machine/7-8.jpg") },
          { id: 12, path: require("../assets/images/product/electric-tapping-machine/8-7.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/DAvMUFyA20E" },
          { id: 2, uri: "https://www.youtube.com/embed/oYpVDxLvi-4" },
          { id: 3, uri: "https://www.youtube.com/embed/xuP36xg3mFU" }
        ]
      };

    case "electric-tugs":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/electric-tugs/key1-15.jpg") },
          { id: 2, path: require("../assets/images/product/electric-tugs/key1-19.jpg") },
          { id: 3, path: require("../assets/images/product/electric-tugs/key10-1.jpg") },
          { id: 4, path: require("../assets/images/product/electric-tugs/key11.jpg") },
          { id: 5, path: require("../assets/images/product/electric-tugs/key12.jpg") },
          { id: 6, path: require("../assets/images/product/electric-tugs/key13.jpg") },
          { id: 7, path: require("../assets/images/product/electric-tugs/key2-11.jpg") },
          { id: 8, path: require("../assets/images/product/electric-tugs/key2-15.jpg") },
          { id: 9, path: require("../assets/images/product/electric-tugs/key3-13.jpg") },
          { id: 10, path: require("../assets/images/product/electric-tugs/key3-9.jpg") },
          { id: 11, path: require("../assets/images/product/electric-tugs/key4-11.jpg") },
          { id: 12, path: require("../assets/images/product/electric-tugs/key4-7.jpg") },
          { id: 13, path: require("../assets/images/product/electric-tugs/key5-6.jpg") },
          { id: 14, path: require("../assets/images/product/electric-tugs/key5-9.jpg") },
          { id: 15, path: require("../assets/images/product/electric-tugs/key6-5.jpg") },
          { id: 16, path: require("../assets/images/product/electric-tugs/key6-8.jpg") },
          { id: 17, path: require("../assets/images/product/electric-tugs/key7-4.jpg") },
          { id: 18, path: require("../assets/images/product/electric-tugs/key8-2.jpg") },
          { id: 19, path: require("../assets/images/product/electric-tugs/key9-2.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/r_uHlGU3W3Q" },
          { id: 2, uri: "https://www.youtube.com/embed/9kxCfkD0Vho" },
          { id: 3, uri: "https://www.youtube.com/embed/nqkmulajMMw" },
          { id: 4, uri: "https://www.youtube.com/embed/uwTL5nSmDIE" },
          { id: 5, uri: "https://www.youtube.com/embed/7T-wgsdXQB0" }
        ]
      };

    case "fastener-insertion-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/fastener-insertion-machine/1-14.jpg") },
          { id: 2, path: require("../assets/images/product/fastener-insertion-machine/2-13.jpg") },
          { id: 3, path: require("../assets/images/product/fastener-insertion-machine/3-14.jpg") },
          { id: 4, path: require("../assets/images/product/fastener-insertion-machine/4-10.jpg") },
          { id: 5, path: require("../assets/images/product/fastener-insertion-machine/key1-12.jpg") },
          { id: 6, path: require("../assets/images/product/fastener-insertion-machine/key2-12.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/e8b8R289940" },
          { id: 2, uri: "https://www.youtube.com/embed/SnBAiKAoQoA" },
          { id: 3, uri: "https://www.youtube.com/embed/cc5iyZj6hmo" },
          { id: 4, uri: "https://www.youtube.com/embed/XU2dA17QhQU" }
        ]
      };

    case "glass-vacuum-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/glass-vacuum-lifters/1-1.jpg") },
          { id: 2, path: require("../assets/images/product/glass-vacuum-lifters/2-1.jpg") },
          { id: 3, path: require("../assets/images/product/glass-vacuum-lifters/3-1.jpg") },
          { id: 4, path: require("../assets/images/product/glass-vacuum-lifters/Battery-powered.jpg") },
          { id: 5, path: require("../assets/images/product/glass-vacuum-lifters/Electric-Vacuum.jpg") },
          { id: 6, path: require("../assets/images/product/glass-vacuum-lifters/Pneumatic-Glass.jpg") },
          { id: 7, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum2-1.jpg") },
          { id: 8, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum3-1.jpg") },
          { id: 9, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum4-1.jpg") },
          { id: 10, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum5-1.jpg") },
          { id: 11, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum5.jpg") },
          { id: 12, path: require("../assets/images/product/glass-vacuum-lifters/vacuum2.jpg") },
          { id: 13, path: require("../assets/images/product/glass-vacuum-lifters/vacuum3.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/F_NEUOm7-p8" },
          { id: 2, uri: "https://www.youtube.com/embed/qPTTSMV6kY4" },
          { id: 3, uri: "https://www.youtube.com/embed/ZqIvjFDBs6s" },
          { id: 4, uri: "https://www.youtube.com/embed/F_NEUOm7-p8" }
        ]
      };

    case "gripper-tool":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/gripper-tool/1.jpg") },
          { id: 2, path: require("../assets/images/product/gripper-tool/10.jpg") },
          { id: 3, path: require("../assets/images/product/gripper-tool/11.jpg") },
          { id: 4, path: require("../assets/images/product/gripper-tool/12.jpg") },
          { id: 5, path: require("../assets/images/product/gripper-tool/13.jpg") },
          { id: 6, path: require("../assets/images/product/gripper-tool/14.jpg") },
          { id: 7, path: require("../assets/images/product/gripper-tool/15.jpg") },
          { id: 8, path: require("../assets/images/product/gripper-tool/16.jpg") },
          { id: 9, path: require("../assets/images/product/gripper-tool/17.jpg") },
          { id: 10, path: require("../assets/images/product/gripper-tool/18.jpg") },
          { id: 11, path: require("../assets/images/product/gripper-tool/19.jpg") },
          { id: 12, path: require("../assets/images/product/gripper-tool/2.jpg") },
          { id: 13, path: require("../assets/images/product/gripper-tool/3.jpg") },
          { id: 14, path: require("../assets/images/product/gripper-tool/4.jpg") },
          { id: 15, path: require("../assets/images/product/gripper-tool/5.jpg") },
          { id: 16, path: require("../assets/images/product/gripper-tool/6.jpg") },
          { id: 17, path: require("../assets/images/product/gripper-tool/7.jpg") },
          { id: 18, path: require("../assets/images/product/gripper-tool/8.jpg") },
          { id: 19, path: require("../assets/images/product/gripper-tool/9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/YIbGBD5XiS0" },
          { id: 2, uri: "https://www.youtube.com/embed/xAOLrIid0zs" },
          { id: 3, uri: "https://www.youtube.com/embed/EoyWPQkBHig" },
          { id: 4, uri: "https://www.youtube.com/embed/Df6Y2G04FrI" },
          { id: 5, uri: "https://www.youtube.com/embed/cc2WoNgLEis" }
        ]
      };

    case "heat-shrink-ovens":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/heat-shrink-ovens/1-42.jpg") },
          { id: 2, path: require("../assets/images/product/heat-shrink-ovens/2-40.jpg") },
          { id: 3, path: require("../assets/images/product/heat-shrink-ovens/3-40.jpg") },
          { id: 4, path: require("../assets/images/product/heat-shrink-ovens/key1-47.jpg") },
          { id: 5, path: require("../assets/images/product/heat-shrink-ovens/key2-43.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/watch?v=mmMb9tdiAno" },
          { id: 2, uri: "https://www.youtube.com/watch?v=9q9AqqrGUK0" },
          { id: 3, uri: "https://www.youtube.com/watch?v=k64EAlwXmHU" }
        ]
      };

    case "heavy-roll-handling-equipment":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/heavy-roll-handling-equipment/1-19.jpg") },
          { id: 2, path: require("../assets/images/product/heavy-roll-handling-equipment/1.jpg") },
          { id: 3, path: require("../assets/images/product/heavy-roll-handling-equipment/2-18.jpg") },
          { id: 4, path: require("../assets/images/product/heavy-roll-handling-equipment/key2-18.jpg") },
          { id: 5, path: require("../assets/images/product/heavy-roll-handling-equipment/key3-16.jpg") },
          { id: 6, path: require("../assets/images/product/heavy-roll-handling-equipment/key4-13.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/XT_ACaL9ZpM" },
          { id: 2, uri: "https://www.youtube.com/embed/SgDx42lEdOg" },
          { id: 3, uri: "https://www.youtube.com/embed/LQUZXOq23E0" },
          { id: 4, uri: "https://www.youtube.com/embed/SIAXjYucXVA" }
        ]
      };

    case "industrial-doors":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/industrial-doors/1-17.jpg") },
          { id: 2, path: require("../assets/images/product/industrial-doors/10-2.jpg") },
          { id: 3, path: require("../assets/images/product/industrial-doors/12-1.jpg") },
          { id: 4, path: require("../assets/images/product/industrial-doors/15-2.jpg") },
          { id: 5, path: require("../assets/images/product/industrial-doors/16-1.jpg") },
          { id: 6, path: require("../assets/images/product/industrial-doors/2-16.jpg") },
          { id: 7, path: require("../assets/images/product/industrial-doors/3-17.jpg") },
          { id: 8, path: require("../assets/images/product/industrial-doors/4-14.jpg") },
          { id: 9, path: require("../assets/images/product/industrial-doors/5-9.jpg") },
          { id: 10, path: require("../assets/images/product/industrial-doors/6-7.jpg") },
          { id: 11, path: require("../assets/images/product/industrial-doors/7-3.jpg") },
          { id: 12, path: require("../assets/images/product/industrial-doors/8-3.jpg") },
          { id: 13, path: require("../assets/images/product/industrial-doors/key1-20.jpg") },
          { id: 14, path: require("../assets/images/product/industrial-doors/key10-3.jpg") },
          { id: 15, path: require("../assets/images/product/industrial-doors/key11-2.jpg") },
          { id: 16, path: require("../assets/images/product/industrial-doors/key12-2.jpg") },
          { id: 17, path: require("../assets/images/product/industrial-doors/key13-2.jpg") },
          { id: 18, path: require("../assets/images/product/industrial-doors/key2-16.jpg") },
          { id: 19, path: require("../assets/images/product/industrial-doors/key3-14.jpg") },
          { id: 20, path: require("../assets/images/product/industrial-doors/key4-12.jpg") },
          { id: 21, path: require("../assets/images/product/industrial-doors/key5-10.jpg") },
          { id: 22, path: require("../assets/images/product/industrial-doors/key6-9.jpg") },
          { id: 23, path: require("../assets/images/product/industrial-doors/key7-6.jpg") },
          { id: 24, path: require("../assets/images/product/industrial-doors/key8-4.jpg") },
          { id: 25, path: require("../assets/images/product/industrial-doors/key9-4.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/wwy36F9d-Xs" },
          { id: 2, uri: "https://www.youtube.com/embed/JLrCjloi9tY" },
          { id: 3, uri: "https://www.youtube.com/embed/N3JNCbfOdzU" },
          { id: 4, uri: "https://www.youtube.com/embed/7ANFUAMuAn4" }
        ]
      };

    case "industrial-filtration":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/industrial-filtration/1-32.jpg") },
          { id: 2, path: require("../assets/images/product/industrial-filtration/1-33.jpg") },
          { id: 3, path: require("../assets/images/product/industrial-filtration/1-34.jpg") },
          { id: 4, path: require("../assets/images/product/industrial-filtration/2-32.jpg") },
          { id: 5, path: require("../assets/images/product/industrial-filtration/2-33.jpg") },
          { id: 6, path: require("../assets/images/product/industrial-filtration/2-34.jpg") },
          { id: 7, path: require("../assets/images/product/industrial-filtration/3-32.jpg") },
          { id: 8, path: require("../assets/images/product/industrial-filtration/3-33.jpg") },
          { id: 9, path: require("../assets/images/product/industrial-filtration/3-34.jpg") },
          { id: 10, path: require("../assets/images/product/industrial-filtration/4-23.jpg") },
          { id: 11, path: require("../assets/images/product/industrial-filtration/4-24.jpg") },
          { id: 12, path: require("../assets/images/product/industrial-filtration/4-25.jpg") },
          { id: 13, path: require("../assets/images/product/industrial-filtration/5-16.jpg") },
          { id: 14, path: require("../assets/images/product/industrial-filtration/key1-33.jpg") },
          { id: 15, path: require("../assets/images/product/industrial-filtration/key2-29.jpg") },
          { id: 16, path: require("../assets/images/product/industrial-filtration/key3-27.jpg") },
          { id: 17, path: require("../assets/images/product/industrial-filtration/key4-23.jpg") }
        ],
        videos: [

        ]
      };

    case "industrial-flooring-solutions":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/industrial-flooring-solutions/1-11.jpg") },
          { id: 2, path: require("../assets/images/product/industrial-flooring-solutions/1.jpg") },
          { id: 3, path: require("../assets/images/product/industrial-flooring-solutions/11-1.jpg") },
          { id: 4, path: require("../assets/images/product/industrial-flooring-solutions/12.jpg") },
          { id: 5, path: require("../assets/images/product/industrial-flooring-solutions/13-1.jpg") },
          { id: 6, path: require("../assets/images/product/industrial-flooring-solutions/14-1.jpg") },
          { id: 7, path: require("../assets/images/product/industrial-flooring-solutions/15-1.jpg") },
          { id: 8, path: require("../assets/images/product/industrial-flooring-solutions/16.jpg") },
          { id: 9, path: require("../assets/images/product/industrial-flooring-solutions/2-10.jpg") },
          { id: 10, path: require("../assets/images/product/industrial-flooring-solutions/2.jpg") },
          { id: 11, path: require("../assets/images/product/industrial-flooring-solutions/3-11.jpg") },
          { id: 12, path: require("../assets/images/product/industrial-flooring-solutions/3.jpg") },
          { id: 13, path: require("../assets/images/product/industrial-flooring-solutions/4-9.jpg") },
          { id: 14, path: require("../assets/images/product/industrial-flooring-solutions/4.jpg") },
          { id: 15, path: require("../assets/images/product/industrial-flooring-solutions/5-7.jpg") },
          { id: 16, path: require("../assets/images/product/industrial-flooring-solutions/5.jpg") },
          { id: 17, path: require("../assets/images/product/industrial-flooring-solutions/7.png") },
          { id: 18, path: require("../assets/images/product/industrial-flooring-solutions/8-1.jpg") },
          { id: 19, path: require("../assets/images/product/industrial-flooring-solutions/key1-16.jpg") },
          { id: 20, path: require("../assets/images/product/industrial-flooring-solutions/key10-2.jpg") },
          { id: 21, path: require("../assets/images/product/industrial-flooring-solutions/key11-1.jpg") },
          { id: 22, path: require("../assets/images/product/industrial-flooring-solutions/key12-1.jpg") },
          { id: 23, path: require("../assets/images/product/industrial-flooring-solutions/key13-1.jpg") },
          { id: 24, path: require("../assets/images/product/industrial-flooring-solutions/key14.jpg") },
          { id: 25, path: require("../assets/images/product/industrial-flooring-solutions/key15.jpg") },
          { id: 26, path: require("../assets/images/product/industrial-flooring-solutions/key16.jpg") },
          { id: 27, path: require("../assets/images/product/industrial-flooring-solutions/key2-12.jpg") },
          { id: 28, path: require("../assets/images/product/industrial-flooring-solutions/key3-10.jpg") },
          { id: 29, path: require("../assets/images/product/industrial-flooring-solutions/key4-8.jpg") },
          { id: 30, path: require("../assets/images/product/industrial-flooring-solutions/key5-7.jpg") },
          { id: 31, path: require("../assets/images/product/industrial-flooring-solutions/key6-6.jpg") },
          { id: 32, path: require("../assets/images/product/industrial-flooring-solutions/key7-5.jpg") },
          { id: 33, path: require("../assets/images/product/industrial-flooring-solutions/key8-3.jpg") },
          { id: 34, path: require("../assets/images/product/industrial-flooring-solutions/key9-3.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/ymgV5wCuxZU" },
          { id: 2, uri: "https://www.youtube.com/embed/rr00f59xfgs" },
          { id: 3, uri: "https://www.youtube.com/embed/c-cUGXVBRs8" },
          { id: 4, uri: "https://www.youtube.com/embed/9ffplC0qG7Q" }
        ]
      };

    case "industrial-hoses":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/industrial-hoses/1.png") },
          { id: 2, path: require("../assets/images/product/industrial-hoses/2.png") },
          { id: 3, path: require("../assets/images/product/industrial-hoses/3.png") },
          { id: 4, path: require("../assets/images/product/industrial-hoses/4.png") },
          { id: 5, path: require("../assets/images/product/industrial-hoses/5.png") },
          { id: 6, path: require("../assets/images/product/industrial-hoses/6.png") },
          { id: 7, path: require("../assets/images/product/industrial-hoses/7.png") },
          { id: 8, path: require("../assets/images/product/industrial-hoses/8.png") },
          { id: 9, path: require("../assets/images/product/industrial-hoses/key1-1.png") },
          { id: 10, path: require("../assets/images/product/industrial-hoses/key10.png") },
          { id: 11, path: require("../assets/images/product/industrial-hoses/key11.png") },
          { id: 12, path: require("../assets/images/product/industrial-hoses/key12-1.png") },
          { id: 13, path: require("../assets/images/product/industrial-hoses/key13.png") },
          { id: 14, path: require("../assets/images/product/industrial-hoses/key2-1.png") },
          { id: 15, path: require("../assets/images/product/industrial-hoses/key3-1.png") },
          { id: 16, path: require("../assets/images/product/industrial-hoses/key4-1.png") },
          { id: 17, path: require("../assets/images/product/industrial-hoses/key5.png") },
          { id: 18, path: require("../assets/images/product/industrial-hoses/key6.png") },
          { id: 19, path: require("../assets/images/product/industrial-hoses/key7.png") },
          { id: 20, path: require("../assets/images/product/industrial-hoses/key8.png") },
          { id: 21, path: require("../assets/images/product/industrial-hoses/key9.png") }
        ],
        videos: [

        ]
      };

    case "industrial-manipulator":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/industrial-manipulator/1.png") },
          { id: 2, path: require("../assets/images/product/industrial-manipulator/10.jpg") },
          { id: 3, path: require("../assets/images/product/industrial-manipulator/11.jpg") },
          { id: 4, path: require("../assets/images/product/industrial-manipulator/12.jpg") },
          { id: 5, path: require("../assets/images/product/industrial-manipulator/13.jpg") },
          { id: 6, path: require("../assets/images/product/industrial-manipulator/14.jpg") },
          { id: 7, path: require("../assets/images/product/industrial-manipulator/15.jpg") },
          { id: 8, path: require("../assets/images/product/industrial-manipulator/16.jpg") },
          { id: 9, path: require("../assets/images/product/industrial-manipulator/2.png") },
          { id: 10, path: require("../assets/images/product/industrial-manipulator/3.png") },
          { id: 11, path: require("../assets/images/product/industrial-manipulator/4.png") },
          { id: 12, path: require("../assets/images/product/industrial-manipulator/5.png") },
          { id: 13, path: require("../assets/images/product/industrial-manipulator/6.png") },
          { id: 14, path: require("../assets/images/product/industrial-manipulator/7.png") },
          { id: 15, path: require("../assets/images/product/industrial-manipulator/8.png") },
          { id: 16, path: require("../assets/images/product/industrial-manipulator/9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/0mdAV0fk1r8" },
          { id: 2, uri: "https://www.youtube.com/embed/o8dlQ9rxVlo" },
          { id: 3, uri: "https://www.youtube.com/embed/gNJVS_VH9jk" },
          { id: 4, uri: "https://www.youtube.com/embed/5b6Yn5ggAEw" },
          { id: 5, uri: "https://www.youtube.com/embed/-PaxWnAku6c" }
        ]
      };

    case "industrial-springs":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/industrial-springs/1.png") },
          { id: 2, path: require("../assets/images/product/industrial-springs/10.png") },
          { id: 3, path: require("../assets/images/product/industrial-springs/11.png") },
          { id: 4, path: require("../assets/images/product/industrial-springs/12.png") },
          { id: 5, path: require("../assets/images/product/industrial-springs/13.png") },
          { id: 6, path: require("../assets/images/product/industrial-springs/14.png") },
          { id: 7, path: require("../assets/images/product/industrial-springs/2.png") },
          { id: 8, path: require("../assets/images/product/industrial-springs/4.png") },
          { id: 9, path: require("../assets/images/product/industrial-springs/6.png") },
          { id: 10, path: require("../assets/images/product/industrial-springs/7.png") },
          { id: 11, path: require("../assets/images/product/industrial-springs/8.png") },
          { id: 12, path: require("../assets/images/product/industrial-springs/9.png") },
          { id: 13, path: require("../assets/images/product/industrial-springs/key1.png") },
          { id: 14, path: require("../assets/images/product/industrial-springs/key2.png") },
          { id: 15, path: require("../assets/images/product/industrial-springs/key3.png") },
          { id: 16, path: require("../assets/images/product/industrial-springs/key4.png") }
        ],
        videos: [

        ]
      };

    case "inkjet-printing":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/inkjet-printing/1.png") },
          { id: 2, path: require("../assets/images/product/inkjet-printing/2.png") },
          { id: 3, path: require("../assets/images/product/inkjet-printing/3.jpg") },
          { id: 4, path: require("../assets/images/product/inkjet-printing/4.png") },
          { id: 5, path: require("../assets/images/product/inkjet-printing/5.png") },
          { id: 6, path: require("../assets/images/product/inkjet-printing/6.png") },
          { id: 7, path: require("../assets/images/product/inkjet-printing/7.png") }
        ],
        videos: [

        ]
      };

    case "laser-cleaning-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/laser-cleaning-machine/1-10.jpg") },
          { id: 2, path: require("../assets/images/product/laser-cleaning-machine/2-9.jpg") },
          { id: 3, path: require("../assets/images/product/laser-cleaning-machine/3-9.jpg") },
          { id: 4, path: require("../assets/images/product/laser-cleaning-machine/4-6.jpg") },
          { id: 5, path: require("../assets/images/product/laser-cleaning-machine/5-8.jpg") },
          { id: 6, path: require("../assets/images/product/laser-cleaning-machine/7-5.jpg") },
          { id: 7, path: require("../assets/images/product/laser-cleaning-machine/key1-8.jpg") },
          { id: 8, path: require("../assets/images/product/laser-cleaning-machine/key2-8.jpg") },
          { id: 9, path: require("../assets/images/product/laser-cleaning-machine/key3-8.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/UQXSsXQpoj0" },
          { id: 2, uri: "https://www.youtube.com/embed/3C8tgB2moug" },
          { id: 3, uri: "https://www.youtube.com/embed/eAa6-87SLTY" },
          { id: 4, uri: "https://www.youtube.com/embed/bdMXcxSAMPQ" }
        ]
      };

    case "laser-cutting-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/laser-cutting-machine/1-12.jpg") },
          { id: 2, path: require("../assets/images/product/laser-cutting-machine/2-11.jpg") },
          { id: 3, path: require("../assets/images/product/laser-cutting-machine/3-12.jpg") },
          { id: 4, path: require("../assets/images/product/laser-cutting-machine/4-8.jpg") },
          { id: 5, path: require("../assets/images/product/laser-cutting-machine/5-10.jpg") },
          { id: 6, path: require("../assets/images/product/laser-cutting-machine/6-4.jpg") },
          { id: 7, path: require("../assets/images/product/laser-cutting-machine/key1-10.jpg") },
          { id: 8, path: require("../assets/images/product/laser-cutting-machine/key2-10.jpg") },
          { id: 9, path: require("../assets/images/product/laser-cutting-machine/key3-9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/UQXSsXQpoj0" },
          { id: 2, uri: "https://www.youtube.com/embed/3C8tgB2moug" },
          { id: 3, uri: "https://www.youtube.com/embed/eAa6-87SLTY" },
          { id: 4, uri: "https://www.youtube.com/embed/bdMXcxSAMPQ" }
        ]
      };

    case "laser-marking":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/laser-marking/1-16.jpg") },
          { id: 2, path: require("../assets/images/product/laser-marking/2-15.jpg") },
          { id: 3, path: require("../assets/images/product/laser-marking/3-16.jpg") },
          { id: 4, path: require("../assets/images/product/laser-marking/4-12.jpg") },
          { id: 5, path: require("../assets/images/product/laser-marking/5-13.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/jfAgkOyMrbI" },
          { id: 2, uri: "https://www.youtube.com/embed/IbkHCzpCDSA" },
          { id: 3, uri: "https://www.youtube.com/embed/vINH9gLnOvU" },
          { id: 4, uri: "https://www.youtube.com/embed/Ic9k8FHFB3E" }
        ]
      };

    case "laser-welding-machines":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/laser-welding-machines/1-17.jpg") },
          { id: 2, path: require("../assets/images/product/laser-welding-machines/2-16.jpg") },
          { id: 3, path: require("../assets/images/product/laser-welding-machines/3-17.jpg") },
          { id: 4, path: require("../assets/images/product/laser-welding-machines/4-13.jpg") },
          { id: 5, path: require("../assets/images/product/laser-welding-machines/5-14.jpg") },
          { id: 6, path: require("../assets/images/product/laser-welding-machines/6-7.jpg") },
          { id: 7, path: require("../assets/images/product/laser-welding-machines/7-9.jpg") },
          { id: 8, path: require("../assets/images/product/laser-welding-machines/key1-14.jpg") },
          { id: 9, path: require("../assets/images/product/laser-welding-machines/key2-14.jpg") },
          { id: 10, path: require("../assets/images/product/laser-welding-machines/key3-12.jpg") },
          { id: 11, path: require("../assets/images/product/laser-welding-machines/key4-4.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/FsRBdxXtSdE" },
          { id: 2, uri: "https://www.youtube.com/embed/Y28THnA8Eb0" },
          { id: 3, uri: "https://www.youtube.com/embed/UQXSsXQpoj0" },
          { id: 4, uri: "https://www.youtube.com/embed/UM89K6SokQM" }
        ]
      };

    case "lean-system":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/lean-system/1-19.jpg") },
          { id: 2, path: require("../assets/images/product/lean-system/10-4.jpg") },
          { id: 3, path: require("../assets/images/product/lean-system/11-4.jpg") },
          { id: 4, path: require("../assets/images/product/lean-system/12-3.jpg") },
          { id: 5, path: require("../assets/images/product/lean-system/2-18.jpg") },
          { id: 6, path: require("../assets/images/product/lean-system/3-19.jpg") },
          { id: 7, path: require("../assets/images/product/lean-system/4-15.jpg") },
          { id: 8, path: require("../assets/images/product/lean-system/5-15.jpg") },
          { id: 9, path: require("../assets/images/product/lean-system/6-9.jpg") },
          { id: 10, path: require("../assets/images/product/lean-system/7-11.jpg") },
          { id: 11, path: require("../assets/images/product/lean-system/8-7.jpg") },
          { id: 12, path: require("../assets/images/product/lean-system/9-3.jpg") },
          { id: 13, path: require("../assets/images/product/lean-system/key.jpg") },
          { id: 14, path: require("../assets/images/product/lean-system/key1-20.jpg") },
          { id: 15, path: require("../assets/images/product/lean-system/key2-19.jpg") },
          { id: 16, path: require("../assets/images/product/lean-system/key3-18.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/Ak2SfHoS1U0" },
          { id: 2, uri: "https://www.youtube.com/embed/JJKEf6zFViQ" },
          { id: 3, uri: "https://www.youtube.com/embed/9mmL0CGvbUY" },
          { id: 4, uri: "https://www.youtube.com/embed/5M3StI3WTYs" }
        ]
      };

    case "lifting-and-handling-robots":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/lifting-and-handling-robots/1.jpg") },
          { id: 2, path: require("../assets/images/product/lifting-and-handling-robots/10.jpg") },
          { id: 3, path: require("../assets/images/product/lifting-and-handling-robots/11.jpg") },
          { id: 4, path: require("../assets/images/product/lifting-and-handling-robots/12.jpg") },
          { id: 5, path: require("../assets/images/product/lifting-and-handling-robots/13.jpg") },
          { id: 6, path: require("../assets/images/product/lifting-and-handling-robots/14.jpg") },
          { id: 7, path: require("../assets/images/product/lifting-and-handling-robots/2.jpg") },
          { id: 8, path: require("../assets/images/product/lifting-and-handling-robots/3.jpg") },
          { id: 9, path: require("../assets/images/product/lifting-and-handling-robots/4.jpg") },
          { id: 10, path: require("../assets/images/product/lifting-and-handling-robots/5.jpg") },
          { id: 11, path: require("../assets/images/product/lifting-and-handling-robots/6.jpg") },
          { id: 12, path: require("../assets/images/product/lifting-and-handling-robots/7.jpg") },
          { id: 13, path: require("../assets/images/product/lifting-and-handling-robots/8.jpg") },
          { id: 14, path: require("../assets/images/product/lifting-and-handling-robots/9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/eUEw_akYEBU" },
          { id: 2, uri: "https://www.youtube.com/embed/KQxu1Sfbw-M" },
          { id: 3, uri: "https://www.youtube.com/embed/XrUaCZEfJ5s" },
          { id: 4, uri: "https://www.youtube.com/embed/dwxIH2T-cIM" }
        ]
      };

    case "magnetic-lifter":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/magnetic-lifter/2-10.jpg") },
          { id: 2, path: require("../assets/images/product/magnetic-lifter/3-11.jpg") },
          { id: 3, path: require("../assets/images/product/magnetic-lifter/4-7.jpg") },
          { id: 4, path: require("../assets/images/product/magnetic-lifter/7-6.jpg") },
          { id: 5, path: require("../assets/images/product/magnetic-lifter/key2-9.jpg") },
          { id: 6, path: require("../assets/images/product/magnetic-lifter/m.jpg") }
        ],
        videos: [

        ]
      };

    case "magnets-for-positioning-and-holding":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/magnets-for-positioning-and-holding/1-43.jpg") },
          { id: 2, path: require("../assets/images/product/magnets-for-positioning-and-holding/2-41.jpg") },
          { id: 3, path: require("../assets/images/product/magnets-for-positioning-and-holding/2-42.jpg") },
          { id: 4, path: require("../assets/images/product/magnets-for-positioning-and-holding/3-41.jpg") },
          { id: 5, path: require("../assets/images/product/magnets-for-positioning-and-holding/4-31.jpg") },
          { id: 6, path: require("../assets/images/product/magnets-for-positioning-and-holding/5-21.jpg") },
          { id: 7, path: require("../assets/images/product/magnets-for-positioning-and-holding/6-14.jpg") },
          { id: 8, path: require("../assets/images/product/magnets-for-positioning-and-holding/7-7.jpg") },
          { id: 9, path: require("../assets/images/product/magnets-for-positioning-and-holding/8-6.jpg") },
          { id: 10, path: require("../assets/images/product/magnets-for-positioning-and-holding/key1-50.jpg") },
          { id: 11, path: require("../assets/images/product/magnets-for-positioning-and-holding/key10-14.jpg") },
          { id: 12, path: require("../assets/images/product/magnets-for-positioning-and-holding/key11-8.jpg") },
          { id: 13, path: require("../assets/images/product/magnets-for-positioning-and-holding/key12-7.jpg") },
          { id: 14, path: require("../assets/images/product/magnets-for-positioning-and-holding/key13-7.jpg") },
          { id: 15, path: require("../assets/images/product/magnets-for-positioning-and-holding/key14-4.jpg") },
          { id: 16, path: require("../assets/images/product/magnets-for-positioning-and-holding/key15-3.jpg") },
          { id: 17, path: require("../assets/images/product/magnets-for-positioning-and-holding/key3-41.jpg") },
          { id: 18, path: require("../assets/images/product/magnets-for-positioning-and-holding/key4-36.jpg") },
          { id: 19, path: require("../assets/images/product/magnets-for-positioning-and-holding/key5-32.jpg") },
          { id: 20, path: require("../assets/images/product/magnets-for-positioning-and-holding/key6-30.jpg") },
          { id: 21, path: require("../assets/images/product/magnets-for-positioning-and-holding/key7-25.jpg") },
          { id: 22, path: require("../assets/images/product/magnets-for-positioning-and-holding/key8-22.jpg") },
          { id: 23, path: require("../assets/images/product/magnets-for-positioning-and-holding/key9-22.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/13GGDe7y-mI" },
          { id: 2, uri: "https://www.youtube.com/embed/iUBKw1pbZRo" },
          { id: 3, uri: "https://www.youtube.com/embed/wecstYKHABc" },
          { id: 4, uri: "https://www.youtube.com/embed/9Pj7p5NpPd8" }
        ]
      };

    case "mobile-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/mobile-lifters/1-21.jpg") },
          { id: 2, path: require("../assets/images/product/mobile-lifters/2-20.jpg") },
          { id: 3, path: require("../assets/images/product/mobile-lifters/3-21.jpg") },
          { id: 4, path: require("../assets/images/product/mobile-lifters/4-17.jpg") },
          { id: 5, path: require("../assets/images/product/mobile-lifters/key1-22.jpg") },
          { id: 6, path: require("../assets/images/product/mobile-lifters/key2-21.jpg") },
          { id: 7, path: require("../assets/images/product/mobile-lifters/key3-20.jpg") },
          { id: 8, path: require("../assets/images/product/mobile-lifters/key4-9.jpg") },
          { id: 9, path: require("../assets/images/product/mobile-lifters/key5-4.jpg") },
          { id: 10, path: require("../assets/images/product/mobile-lifters/key6-4.jpg") },
          { id: 11, path: require("../assets/images/product/mobile-lifters/key7-4.jpg") },
          { id: 12, path: require("../assets/images/product/mobile-lifters/key8-2.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/watch?v=177t5fnVEEc" },
          { id: 2, uri: "https://www.youtube.com/watch?v=CBaGcb-1D1A" },
          { id: 3, uri: "https://www.youtube.com/watch?v=x--FPIz6fE4" },
          { id: 4, uri: "https://www.youtube.com/watch?v=r-dMHajkvg4" }
        ]
      };

    case "mobile-working-stations":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/mobile-working-stations/1-5.jpg") },
          { id: 2, path: require("../assets/images/product/mobile-working-stations/2-4.jpg") },
          { id: 3, path: require("../assets/images/product/mobile-working-stations/3-4.jpg") },
          { id: 4, path: require("../assets/images/product/mobile-working-stations/key1-15.jpg") },
          { id: 5, path: require("../assets/images/product/mobile-working-stations/key2-4.jpg") },
          { id: 6, path: require("../assets/images/product/mobile-working-stations/key3-13.jpg") },
          { id: 7, path: require("../assets/images/product/mobile-working-stations/key3-4.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/EikRMWT2kyI" },
          { id: 2, uri: "https://www.youtube.com/embed/heHFOQPY-0w" },
          { id: 3, uri: "https://www.youtube.com/embed/guaYbfTvUr4" },
          { id: 4, uri: "https://www.youtube.com/embed/FtWOQ3Jdpsk" }
        ]
      };

    case "multitapper-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/multitapper-machine/1-37.jpg") },
          { id: 2, path: require("../assets/images/product/multitapper-machine/key1-35.jpg") },
          { id: 3, path: require("../assets/images/product/multitapper-machine/key2-31.jpg") },
          { id: 4, path: require("../assets/images/product/multitapper-machine/key3-29.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/Rvlqy5dRkeU" },
          { id: 2, uri: "https://www.youtube.com/embed/eSWBLUlcuQQ" }
        ]
      };

    case "nitrogen-generators":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/nitrogen-generators/1-1.jpg") },
          { id: 2, path: require("../assets/images/product/nitrogen-generators/2-1.jpg") },
          { id: 3, path: require("../assets/images/product/nitrogen-generators/3-1.jpg") },
          { id: 4, path: require("../assets/images/product/nitrogen-generators/4-1.jpg") },
          { id: 5, path: require("../assets/images/product/nitrogen-generators/key1-1.jpg") },
          { id: 6, path: require("../assets/images/product/nitrogen-generators/key2-1.jpg") }
        ],
        videos: [

        ]
      };

    case "oil-aspirators":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/oil-aspirators/blow-mist-3.jpg") },
          { id: 2, path: require("../assets/images/product/oil-aspirators/centralized-plants-21.jpg") },
          { id: 3, path: require("../assets/images/product/oil-aspirators/inter-oil2-66.jpg") },
          { id: 4, path: require("../assets/images/product/oil-aspirators/key1-4.jpg") },
          { id: 5, path: require("../assets/images/product/oil-aspirators/key1-6.jpg") },
          { id: 6, path: require("../assets/images/product/oil-aspirators/key2-3.jpg") },
          { id: 7, path: require("../assets/images/product/oil-aspirators/masterclean-oil-59.jpg") },
          { id: 8, path: require("../assets/images/product/oil-aspirators/mastermist-2.jpg") },
          { id: 9, path: require("../assets/images/product/oil-aspirators/mastertank-76.jpg") },
          { id: 10, path: require("../assets/images/product/oil-aspirators/tecnomist-57.jpg") },
          { id: 11, path: require("../assets/images/product/oil-aspirators/universal-oil-58.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/s5mR1RJ_BRY" },
          { id: 2, uri: "https://www.youtube.com/embed/Dd5uX7fuRjc" },
          { id: 3, uri: "https://www.youtube.com/embed/z2t9IsWPH7Y" },
          { id: 4, uri: "https://www.youtube.com/embed/bxsrD2H-oOY" }
        ]
      };

    case "oxygen-generators":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/oxygen-generators/1.jpg") },
          { id: 2, path: require("../assets/images/product/oxygen-generators/2.jpg") },
          { id: 3, path: require("../assets/images/product/oxygen-generators/3.jpg") },
          { id: 4, path: require("../assets/images/product/oxygen-generators/4.jpg") },
          { id: 5, path: require("../assets/images/product/oxygen-generators/5.jpg") },
          { id: 6, path: require("../assets/images/product/oxygen-generators/6.jpg") },
          { id: 7, path: require("../assets/images/product/oxygen-generators/key1.jpg") },
          { id: 8, path: require("../assets/images/product/oxygen-generators/key2.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/FiPQXCgDY-k" },
          { id: 2, uri: "https://www.youtube.com/embed/f04uLhqIqkk" },
          { id: 3, uri: "https://www.youtube.com/embed/A3pEu7CAXT8" },
          { id: 4, uri: "https://www.youtube.com/embed/E61hXl-5D88" }
        ]
      };

    case "pallet-changer":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pallet-changer/1-20.jpg") },
          { id: 2, path: require("../assets/images/product/pallet-changer/2-20.jpg") },
          { id: 3, path: require("../assets/images/product/pallet-changer/3-20.jpg") },
          { id: 4, path: require("../assets/images/product/pallet-changer/key1-36.jpg") },
          { id: 5, path: require("../assets/images/product/pallet-changer/key2-32.jpg") },
          { id: 6, path: require("../assets/images/product/pallet-changer/key3-30.jpg") },
          { id: 7, path: require("../assets/images/product/pallet-changer/key4-25.jpg") },
          { id: 8, path: require("../assets/images/product/pallet-changer/key5-22.jpg") },
          { id: 9, path: require("../assets/images/product/pallet-changer/key6-21.jpg") },
          { id: 10, path: require("../assets/images/product/pallet-changer/key7-16.jpg") },
          { id: 11, path: require("../assets/images/product/pallet-changer/key8-13.jpg") },
          { id: 12, path: require("../assets/images/product/pallet-changer/key9-13.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/D6Mrypaib4Y" },
          { id: 2, uri: "https://www.youtube.com/embed/pk5aaG17LcE" },
          { id: 3, uri: "https://www.youtube.com/embed/u8z4CLHsIjo" },
          { id: 4, uri: "https://www.youtube.com/embed/ao69b__gLrE" }
        ]
      };

    case "pallet-exchanger-and-dispensers":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pallet-exchanger-and-dispensers/1-22.jpg") },
          { id: 2, path: require("../assets/images/product/pallet-exchanger-and-dispensers/1-23.jpg") },
          { id: 3, path: require("../assets/images/product/pallet-exchanger-and-dispensers/2-22.jpg") },
          { id: 4, path: require("../assets/images/product/pallet-exchanger-and-dispensers/2-23.jpg") },
          { id: 5, path: require("../assets/images/product/pallet-exchanger-and-dispensers/3-22.jpg") },
          { id: 6, path: require("../assets/images/product/pallet-exchanger-and-dispensers/3-23.jpg") },
          { id: 7, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key1-25.jpg") },
          { id: 8, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key10-5.jpg") },
          { id: 9, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key2-21.jpg") },
          { id: 10, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key3-19.jpg") },
          { id: 11, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key4-16.jpg") },
          { id: 12, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key5-13.jpg") },
          { id: 13, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key6-12.jpg") },
          { id: 14, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key7-8.jpg") },
          { id: 15, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key8-6.jpg") },
          { id: 16, path: require("../assets/images/product/pallet-exchanger-and-dispensers/key9-6.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/xSB9a0EhI1A" },
          { id: 2, uri: "https://www.youtube.com/embed/s4WoQ4yQWh8" },
          { id: 3, uri: "https://www.youtube.com/embed/e1-ic61iiEw" },
          { id: 4, uri: "https://www.youtube.com/embed/4BXRuBI6l6I" },
          { id: 5, uri: "https://www.youtube.com/embed/baxHNrHLwGk" }
        ]
      };

    case "pallet-inverter":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pallet-inverter/2-19.jpg") },
          { id: 2, path: require("../assets/images/product/pallet-inverter/3-19.jpg") },
          { id: 3, path: require("../assets/images/product/pallet-inverter/4-15.jpg") },
          { id: 4, path: require("../assets/images/product/pallet-inverter/key1-38.jpg") },
          { id: 5, path: require("../assets/images/product/pallet-inverter/key2-34.jpg") },
          { id: 6, path: require("../assets/images/product/pallet-inverter/key3-32.jpg") },
          { id: 7, path: require("../assets/images/product/pallet-inverter/key4-27.jpg") },
          { id: 8, path: require("../assets/images/product/pallet-inverter/key5-24.jpg") },
          { id: 9, path: require("../assets/images/product/pallet-inverter/key6-23.jpg") },
          { id: 10, path: require("../assets/images/product/pallet-inverter/key7-18.jpg") },
          { id: 11, path: require("../assets/images/product/pallet-inverter/key8-15.jpg") },
          { id: 12, path: require("../assets/images/product/pallet-inverter/key9-15.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/D6Mrypaib4Y" },
          { id: 2, uri: "https://www.youtube.com/embed/pk5aaG17LcE" },
          { id: 3, uri: "https://www.youtube.com/embed/u8z4CLHsIjo" },
          { id: 4, uri: "https://www.youtube.com/embed/ao69b__gLrE" }
        ]
      };

    case "pile-turner":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pile-turner/1-21.jpg") },
          { id: 2, path: require("../assets/images/product/pile-turner/2-21.jpg") },
          { id: 3, path: require("../assets/images/product/pile-turner/3-21.jpg") },
          { id: 4, path: require("../assets/images/product/pile-turner/4-16.jpg") },
          { id: 5, path: require("../assets/images/product/pile-turner/key1-24.jpg") },
          { id: 6, path: require("../assets/images/product/pile-turner/key2-20.jpg") },
          { id: 7, path: require("../assets/images/product/pile-turner/key3-18.jpg") },
          { id: 8, path: require("../assets/images/product/pile-turner/key4-15.jpg") },
          { id: 9, path: require("../assets/images/product/pile-turner/key5-12.jpg") },
          { id: 10, path: require("../assets/images/product/pile-turner/key6-11.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/watch?v=lR2vXd5-SLI" },
          { id: 2, uri: "https://www.youtube.com/watch?v=lR2vXd5-SLI" },
          { id: 3, uri: "https://www.youtube.com/watch?v=0j_dEH9Vp_o" },
          { id: 4, uri: "https://www.youtube.com/watch?v=3OzOpqYOxIQ" },
          { id: 5, uri: "https://www.youtube.com/watch?v=HwCYD5vJMXY" }
        ]
      };

    case "pipe-bending-machines":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pipe-bending-machines/1-8.jpg") },
          { id: 2, path: require("../assets/images/product/pipe-bending-machines/2-7.jpg") },
          { id: 3, path: require("../assets/images/product/pipe-bending-machines/3-8.jpg") },
          { id: 4, path: require("../assets/images/product/pipe-bending-machines/key1-13.jpg") },
          { id: 5, path: require("../assets/images/product/pipe-bending-machines/key2-9.jpg") },
          { id: 6, path: require("../assets/images/product/pipe-bending-machines/key3-7.jpg") },
          { id: 7, path: require("../assets/images/product/pipe-bending-machines/key4-5.jpg") },
          { id: 8, path: require("../assets/images/product/pipe-bending-machines/key5-4.jpg") },
          { id: 9, path: require("../assets/images/product/pipe-bending-machines/key6-3.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/nSycvnYDauo" },
          { id: 2, uri: "https://www.youtube.com/embed/0A6_exlORXk" },
          { id: 3, uri: "https://www.youtube.com/embed/zQqGMKZ_01M" }
        ]
      };

    case "pipe-beveling-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pipe-beveling-machine/1-51.jpg") },
          { id: 2, path: require("../assets/images/product/pipe-beveling-machine/2-50.jpg") },
          { id: 3, path: require("../assets/images/product/pipe-beveling-machine/3-49.jpg") },
          { id: 4, path: require("../assets/images/product/pipe-beveling-machine/4-37.jpg") },
          { id: 5, path: require("../assets/images/product/pipe-beveling-machine/5-28.jpg") },
          { id: 6, path: require("../assets/images/product/pipe-beveling-machine/key1-52.jpg") },
          { id: 7, path: require("../assets/images/product/pipe-beveling-machine/key2-47.jpg") },
          { id: 8, path: require("../assets/images/product/pipe-beveling-machine/key3-43.jpg") },
          { id: 9, path: require("../assets/images/product/pipe-beveling-machine/key4-38.jpg") },
          { id: 10, path: require("../assets/images/product/pipe-beveling-machine/key5-34.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://player.vimeo.com/video/192022490?h=58e5d7bd05" }
        ]
      };

    case "pipe-grinding-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pipe-grinding-machine/1-5.jpg") },
          { id: 2, path: require("../assets/images/product/pipe-grinding-machine/2-5.jpg") },
          { id: 3, path: require("../assets/images/product/pipe-grinding-machine/3-5.jpg") },
          { id: 4, path: require("../assets/images/product/pipe-grinding-machine/4-4.jpg") },
          { id: 5, path: require("../assets/images/product/pipe-grinding-machine/5-2.jpg") },
          { id: 6, path: require("../assets/images/product/pipe-grinding-machine/6-2.jpg") },
          { id: 7, path: require("../assets/images/product/pipe-grinding-machine/key1-10.jpg") },
          { id: 8, path: require("../assets/images/product/pipe-grinding-machine/key2-6.jpg") },
          { id: 9, path: require("../assets/images/product/pipe-grinding-machine/key3-4.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/Or2ROSVAQG4" },
          { id: 2, uri: "https://www.youtube.com/embed/t61eLblE97o" },
          { id: 3, uri: "https://www.youtube.com/embed/F-102Aa28Y0" }
        ]
      };

    case "pipe-polishing":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pipe-polishing/1-18.jpg") },
          { id: 2, path: require("../assets/images/product/pipe-polishing/2-17.jpg") },
          { id: 3, path: require("../assets/images/product/pipe-polishing/3-18.jpg") },
          { id: 4, path: require("../assets/images/product/pipe-polishing/key1-21.jpg") },
          { id: 5, path: require("../assets/images/product/pipe-polishing/key2-17.jpg") },
          { id: 6, path: require("../assets/images/product/pipe-polishing/key3-15.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/Rmco0VFlSqg" },
          { id: 2, uri: "https://www.youtube.com/embed/y-jVUuNLe4o" },
          { id: 3, uri: "https://www.youtube.com/embed/F-102Aa28Y0" }
        ]
      };

    case "pipe-vacuum-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pipe-vacuum-lifters/1.jpg") },
          { id: 2, path: require("../assets/images/product/pipe-vacuum-lifters/10.jpg") },
          { id: 3, path: require("../assets/images/product/pipe-vacuum-lifters/11.jpg") },
          { id: 4, path: require("../assets/images/product/pipe-vacuum-lifters/12.jpg") },
          { id: 5, path: require("../assets/images/product/pipe-vacuum-lifters/2.jpg") },
          { id: 6, path: require("../assets/images/product/pipe-vacuum-lifters/3.jpg") },
          { id: 7, path: require("../assets/images/product/pipe-vacuum-lifters/4.jpg") },
          { id: 8, path: require("../assets/images/product/pipe-vacuum-lifters/5.jpg") },
          { id: 9, path: require("../assets/images/product/pipe-vacuum-lifters/6.jpg") },
          { id: 10, path: require("../assets/images/product/pipe-vacuum-lifters/7.jpg") },
          { id: 11, path: require("../assets/images/product/pipe-vacuum-lifters/8.jpg") },
          { id: 12, path: require("../assets/images/product/pipe-vacuum-lifters/9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/kMG2lIdKOoE" },
          { id: 2, uri: "https://fenatek.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-08-at-15.00.52.mp4" },
          { id: 3, uri: "https://www.youtube.com/embed/3gNEoFJxIZA" },
          { id: 4, uri: "https://www.youtube.com/embed/TyzIeP94Fbc" },
          { id: 5, uri: "https://www.youtube.com/embed/4peJY0GajmI" }
        ]
      };

    case "pipe-welding-automation":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pipe-welding-automation/1-1.png") },
          { id: 2, path: require("../assets/images/product/pipe-welding-automation/2-1.png") },
          { id: 3, path: require("../assets/images/product/pipe-welding-automation/3-1.png") },
          { id: 4, path: require("../assets/images/product/pipe-welding-automation/4-1.png") },
          { id: 5, path: require("../assets/images/product/pipe-welding-automation/key1-49.jpg") },
          { id: 6, path: require("../assets/images/product/pipe-welding-automation/key2-45.jpg") },
          { id: 7, path: require("../assets/images/product/pipe-welding-automation/key3-40.jpg") },
          { id: 8, path: require("../assets/images/product/pipe-welding-automation/key4-35.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/jjqBQWewo5M" },
          { id: 2, uri: "https://www.youtube.com/embed/61cPJkgFjmI" },
          { id: 3, uri: "https://www.youtube.com/embed/_l3obUmKpz0" },
          { id: 4, uri: "https://www.youtube.com/embed/EVBWJz8RBmQ" }
        ]
      };

    case "press-brakes":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/press-brakes/1-6.jpg") },
          { id: 2, path: require("../assets/images/product/press-brakes/2-5.jpg") },
          { id: 3, path: require("../assets/images/product/press-brakes/3-5.jpg") },
          { id: 4, path: require("../assets/images/product/press-brakes/C9HS-D2-1.jpg") },
          { id: 5, path: require("../assets/images/product/press-brakes/C9HS-D4.jpg") },
          { id: 6, path: require("../assets/images/product/press-brakes/G20X_3.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/e-iDabWy7A4" },
          { id: 2, uri: "https://www.youtube.com/embed/op0C4Z80tSw" },
          { id: 3, uri: "https://www.youtube.com/embed/4seuHkyDCRg" },
          { id: 4, uri: "https://www.youtube.com/embed/lQNp2VMYRBw" }
        ]
      };

    case "pressure-cleaning":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pressure-cleaning/1-25.jpg") },
          { id: 2, path: require("../assets/images/product/pressure-cleaning/10-3.jpg") },
          { id: 3, path: require("../assets/images/product/pressure-cleaning/2-25.jpg") },
          { id: 4, path: require("../assets/images/product/pressure-cleaning/4-18.jpg") },
          { id: 5, path: require("../assets/images/product/pressure-cleaning/5-11.jpg") },
          { id: 6, path: require("../assets/images/product/pressure-cleaning/6-8.jpg") },
          { id: 7, path: require("../assets/images/product/pressure-cleaning/7.jpg") },
          { id: 8, path: require("../assets/images/product/pressure-cleaning/9-3.jpg") },
          { id: 9, path: require("../assets/images/product/pressure-cleaning/key1-27.jpg") },
          { id: 10, path: require("../assets/images/product/pressure-cleaning/key2-23.jpg") },
          { id: 11, path: require("../assets/images/product/pressure-cleaning/key3-21.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/yjZCduTf1Ig" },
          { id: 2, uri: "https://www.youtube.com/embed/nQqriDYGShM" },
          { id: 3, uri: "https://www.youtube.com/embed/cp_JpWYWSxE" },
          { id: 4, uri: "https://www.youtube.com/embed/WSdoJae6N8g" }
        ]
      };

    case "profile-bending-machines":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/profile-bending-machines/1-7.jpg") },
          { id: 2, path: require("../assets/images/product/profile-bending-machines/2-6.jpg") },
          { id: 3, path: require("../assets/images/product/profile-bending-machines/3-7.jpg") },
          { id: 4, path: require("../assets/images/product/profile-bending-machines/4-6.jpg") },
          { id: 5, path: require("../assets/images/product/profile-bending-machines/key1-12.jpg") },
          { id: 6, path: require("../assets/images/product/profile-bending-machines/key2-8.jpg") },
          { id: 7, path: require("../assets/images/product/profile-bending-machines/key3-6.jpg") },
          { id: 8, path: require("../assets/images/product/profile-bending-machines/key4-4.jpg") },
          { id: 9, path: require("../assets/images/product/profile-bending-machines/key5-3.jpg") },
          { id: 10, path: require("../assets/images/product/profile-bending-machines/key6-2.jpg") },
          { id: 11, path: require("../assets/images/product/profile-bending-machines/key7-2.jpg") },
          { id: 12, path: require("../assets/images/product/profile-bending-machines/key8.jpg") },
          { id: 13, path: require("../assets/images/product/profile-bending-machines/key9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/7hZaGj6q328" },
          { id: 2, uri: "https://www.youtube.com/embed/zQqGMKZ_01M" }
        ]
      };

    case "rotating-arm-wrapping":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/rotating-arm-wrapping/10-5.jpg") },
          { id: 2, path: require("../assets/images/product/rotating-arm-wrapping/12-3.jpg") },
          { id: 3, path: require("../assets/images/product/rotating-arm-wrapping/2-38.jpg") },
          { id: 4, path: require("../assets/images/product/rotating-arm-wrapping/3-38.jpg") },
          { id: 5, path: require("../assets/images/product/rotating-arm-wrapping/5-20.jpg") },
          { id: 6, path: require("../assets/images/product/rotating-arm-wrapping/6-13.jpg") },
          { id: 7, path: require("../assets/images/product/rotating-arm-wrapping/7-6.jpg") },
          { id: 8, path: require("../assets/images/product/rotating-arm-wrapping/8-5.jpg") },
          { id: 9, path: require("../assets/images/product/rotating-arm-wrapping/key1-43.jpg") },
          { id: 10, path: require("../assets/images/product/rotating-arm-wrapping/key2-39.jpg") },
          { id: 11, path: require("../assets/images/product/rotating-arm-wrapping/key3-37.jpg") },
          { id: 12, path: require("../assets/images/product/rotating-arm-wrapping/key4-32.jpg") },
          { id: 13, path: require("../assets/images/product/rotating-arm-wrapping/key5-29.jpg") },
          { id: 14, path: require("../assets/images/product/rotating-arm-wrapping/key6-28.jpg") },
          { id: 15, path: require("../assets/images/product/rotating-arm-wrapping/key7-23.jpg") },
          { id: 16, path: require("../assets/images/product/rotating-arm-wrapping/key8-20.jpg") },
          { id: 17, path: require("../assets/images/product/rotating-arm-wrapping/key9-20.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/watch?v=ibqPg7B86cQ" },
          { id: 2, uri: "https://www.youtube.com/watch?v=nGocMh8Xy2M" },
          { id: 3, uri: "https://www.youtube.com/watch?v=7DxLZwDCVX8" }
        ]
      };

    case "rotating-table-wrapping":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/rotating-table-wrapping/1-39.jpg") },
          { id: 2, path: require("../assets/images/product/rotating-table-wrapping/2-37.jpg") },
          { id: 3, path: require("../assets/images/product/rotating-table-wrapping/4-28.jpg") },
          { id: 4, path: require("../assets/images/product/rotating-table-wrapping/5-19.jpg") },
          { id: 5, path: require("../assets/images/product/rotating-table-wrapping/6-12.jpg") },
          { id: 6, path: require("../assets/images/product/rotating-table-wrapping/7-5.jpg") },
          { id: 7, path: require("../assets/images/product/rotating-table-wrapping/key1-42.jpg") },
          { id: 8, path: require("../assets/images/product/rotating-table-wrapping/key2-38.jpg") },
          { id: 9, path: require("../assets/images/product/rotating-table-wrapping/key3-36.jpg") },
          { id: 10, path: require("../assets/images/product/rotating-table-wrapping/key4-31.jpg") },
          { id: 11, path: require("../assets/images/product/rotating-table-wrapping/key5-28.jpg") },
          { id: 12, path: require("../assets/images/product/rotating-table-wrapping/key6-27.jpg") },
          { id: 13, path: require("../assets/images/product/rotating-table-wrapping/key7-22.jpg") },
          { id: 14, path: require("../assets/images/product/rotating-table-wrapping/key8-19.jpg") },
          { id: 15, path: require("../assets/images/product/rotating-table-wrapping/key9-19.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/Y7fTXid3Zkg" },
          { id: 2, uri: "https://www.youtube.com/embed/AlpbdPcYitg" },
          { id: 3, uri: "https://www.youtube.com/embed/mVSUWnauqZY" },
          { id: 4, uri: "https://www.youtube.com/embed/kEP6Z0jAkm0" },
          { id: 5, uri: "https://www.youtube.com/embed/8i2juo_UC3M" }
        ]
      };

    case "safety-barriers":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/safety-barriers/12-2.jpg") },
          { id: 2, path: require("../assets/images/product/safety-barriers/13-2.jpg") },
          { id: 3, path: require("../assets/images/product/safety-barriers/13.jpg") },
          { id: 4, path: require("../assets/images/product/safety-barriers/19-1.jpg") },
          { id: 5, path: require("../assets/images/product/safety-barriers/21.jpg") },
          { id: 6, path: require("../assets/images/product/safety-barriers/3-4.jpg") },
          { id: 7, path: require("../assets/images/product/safety-barriers/321.jpg") },
          { id: 8, path: require("../assets/images/product/safety-barriers/3211.jpg") },
          { id: 9, path: require("../assets/images/product/safety-barriers/4-3.jpg") },
          { id: 10, path: require("../assets/images/product/safety-barriers/41.jpg") },
          { id: 11, path: require("../assets/images/product/safety-barriers/54.jpg") },
          { id: 12, path: require("../assets/images/product/safety-barriers/key1-48.jpg") },
          { id: 13, path: require("../assets/images/product/safety-barriers/key1-7.jpg") },
          { id: 14, path: require("../assets/images/product/safety-barriers/key10-13.jpg") },
          { id: 15, path: require("../assets/images/product/safety-barriers/key2-44.jpg") },
          { id: 16, path: require("../assets/images/product/safety-barriers/key2-6.jpg") },
          { id: 17, path: require("../assets/images/product/safety-barriers/key3-39.jpg") },
          { id: 18, path: require("../assets/images/product/safety-barriers/key3-5.jpg") },
          { id: 19, path: require("../assets/images/product/safety-barriers/key4-34.jpg") },
          { id: 20, path: require("../assets/images/product/safety-barriers/key5-31.jpg") },
          { id: 21, path: require("../assets/images/product/safety-barriers/key6-29.jpg") },
          { id: 22, path: require("../assets/images/product/safety-barriers/key7-24.jpg") },
          { id: 23, path: require("../assets/images/product/safety-barriers/key8-21.jpg") },
          { id: 24, path: require("../assets/images/product/safety-barriers/key9-21.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/WxDMRudyv2s" },
          { id: 2, uri: "https://www.youtube.com/embed/TiYYAt6WCt4" },
          { id: 3, uri: "https://www.youtube.com/embed/-K4K_rGCAtk" },
          { id: 4, uri: "https://www.youtube.com/embed/paNieLEMI1k" }
        ]
      };

    case "safety-lighting":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/safety-lighting/1-7.jpg") },
          { id: 2, path: require("../assets/images/product/safety-lighting/10.jpg") },
          { id: 3, path: require("../assets/images/product/safety-lighting/11.jpg") },
          { id: 4, path: require("../assets/images/product/safety-lighting/12.jpg") },
          { id: 5, path: require("../assets/images/product/safety-lighting/2-6.jpg") },
          { id: 6, path: require("../assets/images/product/safety-lighting/3-6.jpg") },
          { id: 7, path: require("../assets/images/product/safety-lighting/4-5.jpg") },
          { id: 8, path: require("../assets/images/product/safety-lighting/5-6.jpg") },
          { id: 9, path: require("../assets/images/product/safety-lighting/6-2.jpg") },
          { id: 10, path: require("../assets/images/product/safety-lighting/7-3.jpg") },
          { id: 11, path: require("../assets/images/product/safety-lighting/8-2.jpg") },
          { id: 12, path: require("../assets/images/product/safety-lighting/9.jpg") },
          { id: 13, path: require("../assets/images/product/safety-lighting/key1-5.jpg") },
          { id: 14, path: require("../assets/images/product/safety-lighting/key2-5.jpg") },
          { id: 15, path: require("../assets/images/product/safety-lighting/key3-5.jpg") },
          { id: 16, path: require("../assets/images/product/safety-lighting/key4-1.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/zA-jgvLZkh0" },
          { id: 2, uri: "https://www.youtube.com/embed/tV-lARrrpkE" },
          { id: 3, uri: "https://www.youtube.com/embed/2cu1npqK_mc" },
          { id: 4, uri: "https://www.youtube.com/embed/geOfE3j4iG8" }
        ]
      };

    case "sandwich-panel-lifter":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/sandwich-panel-lifter/1.jpg") },
          { id: 2, path: require("../assets/images/product/sandwich-panel-lifter/2.jpg") },
          { id: 3, path: require("../assets/images/product/sandwich-panel-lifter/3.jpg") },
          { id: 4, path: require("../assets/images/product/sandwich-panel-lifter/4.jpg") },
          { id: 5, path: require("../assets/images/product/sandwich-panel-lifter/5.jpg") },
          { id: 6, path: require("../assets/images/product/sandwich-panel-lifter/6.jpg") },
          { id: 7, path: require("../assets/images/product/sandwich-panel-lifter/7.jpg") },
          { id: 8, path: require("../assets/images/product/sandwich-panel-lifter/8.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/PiOSwfEUazY" },
          { id: 2, uri: "https://www.youtube.com/embed/BlE7KYfwLbI" },
          { id: 3, uri: "https://www.youtube.com/embed/xqrkATyp2oA" },
          { id: 4, uri: "https://www.youtube.com/embed/laOqkCQCPRg" }
        ]
      };

    case "scissor-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/scissor-lifters/10-2.jpg") },
          { id: 2, path: require("../assets/images/product/scissor-lifters/11-2.jpg") },
          { id: 3, path: require("../assets/images/product/scissor-lifters/12-1.jpg") },
          { id: 4, path: require("../assets/images/product/scissor-lifters/2-14.jpg") },
          { id: 5, path: require("../assets/images/product/scissor-lifters/3-15.jpg") },
          { id: 6, path: require("../assets/images/product/scissor-lifters/4-11.jpg") },
          { id: 7, path: require("../assets/images/product/scissor-lifters/5-12.jpg") },
          { id: 8, path: require("../assets/images/product/scissor-lifters/6-6.jpg") },
          { id: 9, path: require("../assets/images/product/scissor-lifters/7-8.jpg") },
          { id: 10, path: require("../assets/images/product/scissor-lifters/8-5.jpg") },
          { id: 11, path: require("../assets/images/product/scissor-lifters/9-2.jpg") },
          { id: 12, path: require("../assets/images/product/scissor-lifters/key1-13.jpg") },
          { id: 13, path: require("../assets/images/product/scissor-lifters/key2-13.jpg") },
          { id: 14, path: require("../assets/images/product/scissor-lifters/key3-11.jpg") },
          { id: 15, path: require("../assets/images/product/scissor-lifters/key4-3.jpg") },
          { id: 16, path: require("../assets/images/product/scissor-lifters/key6.jpg") },
          { id: 17, path: require("../assets/images/product/scissor-lifters/key7.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/HvlPhxjNsqs" },
          { id: 2, uri: "https://www.youtube.com/embed/mrF-zVwv35Y" },
          { id: 3, uri: "https://www.youtube.com/embed/OxVAqxXkhX4" },
          { id: 4, uri: "https://www.youtube.com/embed/V_uNwoHpZKU" }
        ]
      };

    case "sheet-metal-and-bar-stock-storage":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/sheet-metal-and-bar-stock-storage/key1-19.jpg") },
          { id: 2, path: require("../assets/images/product/sheet-metal-and-bar-stock-storage/key2-18.jpg") },
          { id: 3, path: require("../assets/images/product/sheet-metal-and-bar-stock-storage/key3-17.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://fenatek.astra.qa/wp-content/uploads/2024/11/Vidir-VLS-Bar-Stock-Animation-1.mp4" },
          { id: 2, uri: "https://fenatek.astra.qa/wp-content/uploads/2024/12/VLS-Sheet-Metal-Product-Large-1.webm" }
        ]
      };

    case "sheet-metal-processing-lines":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/sheet-metal-processing-lines/1-13.jpg") },
          { id: 2, path: require("../assets/images/product/sheet-metal-processing-lines/2-12.jpg") },
          { id: 3, path: require("../assets/images/product/sheet-metal-processing-lines/3-13.jpg") },
          { id: 4, path: require("../assets/images/product/sheet-metal-processing-lines/4-9.jpg") },
          { id: 5, path: require("../assets/images/product/sheet-metal-processing-lines/5-11.jpg") },
          { id: 6, path: require("../assets/images/product/sheet-metal-processing-lines/6-5.jpg") },
          { id: 7, path: require("../assets/images/product/sheet-metal-processing-lines/7-7.jpg") },
          { id: 8, path: require("../assets/images/product/sheet-metal-processing-lines/8-4.jpg") },
          { id: 9, path: require("../assets/images/product/sheet-metal-processing-lines/key1-11.jpg") },
          { id: 10, path: require("../assets/images/product/sheet-metal-processing-lines/key2-11.jpg") },
          { id: 11, path: require("../assets/images/product/sheet-metal-processing-lines/key3-10.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/DJMng4IRbt8" },
          { id: 2, uri: "https://www.youtube.com/embed/HyYumnTmAYQ" },
          { id: 3, uri: "https://www.youtube.com/embed/gG65wIbL2Rk" },
          { id: 4, uri: "https://www.youtube.com/embed/z_RhVs9aHdI" }
        ]
      };

    case "sheet-metal-vacuum-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/sheet-metal-vacuum-lifters/Sheet-metal.jpg") },
          { id: 2, path: require("../assets/images/product/sheet-metal-vacuum-lifters/Sheet-metal2-1.jpg") },
          { id: 3, path: require("../assets/images/product/sheet-metal-vacuum-lifters/Sheet-metal3.jpg") },
          { id: 4, path: require("../assets/images/product/sheet-metal-vacuum-lifters/Sheet-metal4.jpg") },
          { id: 5, path: require("../assets/images/product/sheet-metal-vacuum-lifters/Sheet-metal5.jpg") },
          { id: 6, path: require("../assets/images/product/sheet-metal-vacuum-lifters/Sheet-metal6.jpg") },
          { id: 7, path: require("../assets/images/product/sheet-metal-vacuum-lifters/Sheet-metal7.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/7eSW_sBQid0" },
          { id: 2, uri: "https://www.youtube.com/embed/bvbGNG1K7jI" },
          { id: 3, uri: "https://www.youtube.com/embed/fWRfIyQywbo" },
          { id: 4, uri: "https://www.youtube.com/embed/9XrJzUoebus" }
        ]
      };

    case "shrink-wrap":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/shrink-wrap/12-IN-X-600-FT-PREMIUM-CARPET-PROTECTION.jpg") },
          { id: 2, path: require("../assets/images/product/shrink-wrap/4-4.jpg") },
          { id: 3, path: require("../assets/images/product/shrink-wrap/61u-5b8VuHL._AC_SL1020_.jpg") },
          { id: 4, path: require("../assets/images/product/shrink-wrap/BLUE-SHRINK-WRAP-ROLLS.jpg") },
          { id: 5, path: require("../assets/images/product/shrink-wrap/PACKAGE-2-WHITE.jpg") },
          { id: 6, path: require("../assets/images/product/shrink-wrap/RIPACK-2200-HEAT-GUN.jpg") },
          { id: 7, path: require("../assets/images/product/shrink-wrap/SHRINKFAST-998-30A-COMBUSTOR-INCLUDES-30322883.jpg") },
          { id: 8, path: require("../assets/images/product/shrink-wrap/SHRINKFAST-998-HEAT-GUN-2.jpg") },
          { id: 9, path: require("../assets/images/product/shrink-wrap/key1-5.jpg") },
          { id: 10, path: require("../assets/images/product/shrink-wrap/key2-4.jpg") },
          { id: 11, path: require("../assets/images/product/shrink-wrap/key3-3.jpg") },
          { id: 12, path: require("../assets/images/product/shrink-wrap/key4-1.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/VoWnQ00nAiQ" },
          { id: 2, uri: "https://www.youtube.com/embed/6fyCsW5f1Zg" },
          { id: 3, uri: "https://www.youtube.com/embed/HuaPNx2YyhE" },
          { id: 4, uri: "https://www.youtube.com/embed/Gaf28GEf45s" }
        ]
      };

    case "signalling-and-alarm-solutions":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/signalling-and-alarm-solutions/1.jpg") },
          { id: 2, path: require("../assets/images/product/signalling-and-alarm-solutions/2.jpg") },
          { id: 3, path: require("../assets/images/product/signalling-and-alarm-solutions/21.jpg") },
          { id: 4, path: require("../assets/images/product/signalling-and-alarm-solutions/2431.png") },
          { id: 5, path: require("../assets/images/product/signalling-and-alarm-solutions/3.jpg") },
          { id: 6, path: require("../assets/images/product/signalling-and-alarm-solutions/31.png") },
          { id: 7, path: require("../assets/images/product/signalling-and-alarm-solutions/312.png") },
          { id: 8, path: require("../assets/images/product/signalling-and-alarm-solutions/4.jpg") },
          { id: 9, path: require("../assets/images/product/signalling-and-alarm-solutions/423.png") },
          { id: 10, path: require("../assets/images/product/signalling-and-alarm-solutions/4231.png") },
          { id: 11, path: require("../assets/images/product/signalling-and-alarm-solutions/5.jpg") },
          { id: 12, path: require("../assets/images/product/signalling-and-alarm-solutions/53.png") },
          { id: 13, path: require("../assets/images/product/signalling-and-alarm-solutions/unnamed.png") }
        ],
        videos: [

        ]
      };

    case "solar-panel-cleaning":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/solar-panel-cleaning/1-24.jpg") },
          { id: 2, path: require("../assets/images/product/solar-panel-cleaning/2-24.jpg") },
          { id: 3, path: require("../assets/images/product/solar-panel-cleaning/3-24.jpg") },
          { id: 4, path: require("../assets/images/product/solar-panel-cleaning/4-17.jpg") },
          { id: 5, path: require("../assets/images/product/solar-panel-cleaning/5-10.jpg") },
          { id: 6, path: require("../assets/images/product/solar-panel-cleaning/key1-26.jpg") },
          { id: 7, path: require("../assets/images/product/solar-panel-cleaning/key10-6.jpg") },
          { id: 8, path: require("../assets/images/product/solar-panel-cleaning/key2-22.jpg") },
          { id: 9, path: require("../assets/images/product/solar-panel-cleaning/key3-20.jpg") },
          { id: 10, path: require("../assets/images/product/solar-panel-cleaning/key4-17.jpg") },
          { id: 11, path: require("../assets/images/product/solar-panel-cleaning/key5-14.jpg") },
          { id: 12, path: require("../assets/images/product/solar-panel-cleaning/key6-13.jpg") },
          { id: 13, path: require("../assets/images/product/solar-panel-cleaning/key7-9.jpg") },
          { id: 14, path: require("../assets/images/product/solar-panel-cleaning/key8-7.jpg") },
          { id: 15, path: require("../assets/images/product/solar-panel-cleaning/key9-7.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/orDwrTTn9L8" },
          { id: 2, uri: "https://www.youtube.com/embed/9CNa8oa7feU" },
          { id: 3, uri: "https://www.youtube.com/embed/FkPNSWpK8dg" },
          { id: 4, uri: "https://www.youtube.com/embed/t2xgnyYJjSE" }
        ]
      };

    case "spider-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/spider-lifters/1.png") },
          { id: 2, path: require("../assets/images/product/spider-lifters/2.png") },
          { id: 3, path: require("../assets/images/product/spider-lifters/3.png") },
          { id: 4, path: require("../assets/images/product/spider-lifters/4.png") },
          { id: 5, path: require("../assets/images/product/spider-lifters/key.jpg") },
          { id: 6, path: require("../assets/images/product/spider-lifters/key2-16.jpg") },
          { id: 7, path: require("../assets/images/product/spider-lifters/key3-15.jpg") },
          { id: 8, path: require("../assets/images/product/spider-lifters/key4-6.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/qq-bpoRUYQE" },
          { id: 2, uri: "https://www.youtube.com/embed/3N7kUakoOSA" },
          { id: 3, uri: "https://www.youtube.com/embed/K0b9fWJxFHc" },
          { id: 4, uri: "https://www.youtube.com/embed/kHT8_JC5jeo" }
        ]
      };

    case "steam-cleaning":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/steam-cleaning/1-36.jpg") },
          { id: 2, path: require("../assets/images/product/steam-cleaning/2-35.jpg") },
          { id: 3, path: require("../assets/images/product/steam-cleaning/3-35.jpg") },
          { id: 4, path: require("../assets/images/product/steam-cleaning/4-26.jpg") },
          { id: 5, path: require("../assets/images/product/steam-cleaning/key1-34.jpg") },
          { id: 6, path: require("../assets/images/product/steam-cleaning/key10-11.jpg") },
          { id: 7, path: require("../assets/images/product/steam-cleaning/key11-6.jpg") },
          { id: 8, path: require("../assets/images/product/steam-cleaning/key12-6.jpg") },
          { id: 9, path: require("../assets/images/product/steam-cleaning/key13-6.jpg") },
          { id: 10, path: require("../assets/images/product/steam-cleaning/key2-30.jpg") },
          { id: 11, path: require("../assets/images/product/steam-cleaning/key3-28.jpg") },
          { id: 12, path: require("../assets/images/product/steam-cleaning/key4-24.jpg") },
          { id: 13, path: require("../assets/images/product/steam-cleaning/key5-21.jpg") },
          { id: 14, path: require("../assets/images/product/steam-cleaning/key6-20.jpg") },
          { id: 15, path: require("../assets/images/product/steam-cleaning/key7-15.jpg") },
          { id: 16, path: require("../assets/images/product/steam-cleaning/key8-12.jpg") },
          { id: 17, path: require("../assets/images/product/steam-cleaning/key9-12.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/UTIIT1d2IPc" },
          { id: 2, uri: "https://www.youtube.com/embed/NsXvDCc0Pf4" },
          { id: 3, uri: "https://www.youtube.com/embed/kIpXZm6Spgk" },
          { id: 4, uri: "https://www.youtube.com/embed/GfeayCkV-Xk" }
        ]
      };

    case "stone-vacuum-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/stone-vacuum-lifters/Stonevacuum.jpg") },
          { id: 2, path: require("../assets/images/product/stone-vacuum-lifters/st.jpg") },
          { id: 3, path: require("../assets/images/product/stone-vacuum-lifters/st1.jpg") },
          { id: 4, path: require("../assets/images/product/stone-vacuum-lifters/st2.jpg") },
          { id: 5, path: require("../assets/images/product/stone-vacuum-lifters/st3.jpg") },
          { id: 6, path: require("../assets/images/product/stone-vacuum-lifters/st4.jpg") },
          { id: 7, path: require("../assets/images/product/stone-vacuum-lifters/stone1.jpg") },
          { id: 8, path: require("../assets/images/product/stone-vacuum-lifters/stone2.jpg") },
          { id: 9, path: require("../assets/images/product/stone-vacuum-lifters/stone3.jpg") },
          { id: 10, path: require("../assets/images/product/stone-vacuum-lifters/stone4.jpg") },
          { id: 11, path: require("../assets/images/product/stone-vacuum-lifters/stone5.jpg") },
          { id: 12, path: require("../assets/images/product/stone-vacuum-lifters/stone6.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/9lcbzs3c8ZM" },
          { id: 2, uri: "https://www.youtube.com/embed/BjcjqRV2VdE" },
          { id: 3, uri: "https://www.youtube.com/embed/Dm-0IO9JxXM" },
          { id: 4, uri: "https://www.youtube.com/embed/T_sftBtImvo" }
        ]
      };

    case "strapping-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/strapping-machine/1.png") },
          { id: 2, path: require("../assets/images/product/strapping-machine/10.png") },
          { id: 3, path: require("../assets/images/product/strapping-machine/11.png") },
          { id: 4, path: require("../assets/images/product/strapping-machine/2.png") },
          { id: 5, path: require("../assets/images/product/strapping-machine/3.png") },
          { id: 6, path: require("../assets/images/product/strapping-machine/4.png") },
          { id: 7, path: require("../assets/images/product/strapping-machine/5.png") },
          { id: 8, path: require("../assets/images/product/strapping-machine/6.png") },
          { id: 9, path: require("../assets/images/product/strapping-machine/7.png") },
          { id: 10, path: require("../assets/images/product/strapping-machine/8.png") },
          { id: 11, path: require("../assets/images/product/strapping-machine/9.png") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/DAutQlrW2T0" },
          { id: 2, uri: "https://www.youtube.com/embed/ZSuWwQHVPxQ" },
          { id: 3, uri: "https://www.youtube.com/embed/k6fD9Tqq8zY" },
          { id: 4, uri: "https://www.youtube.com/embed/W6oZr-sHNKU" }
        ]
      };

    case "strapping-tools":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/strapping-tools/1.jpg") },
          { id: 2, path: require("../assets/images/product/strapping-tools/2.jpg") },
          { id: 3, path: require("../assets/images/product/strapping-tools/3.jpg") },
          { id: 4, path: require("../assets/images/product/strapping-tools/4.jpg") },
          { id: 5, path: require("../assets/images/product/strapping-tools/5.jpg") },
          { id: 6, path: require("../assets/images/product/strapping-tools/6.jpg") },
          { id: 7, path: require("../assets/images/product/strapping-tools/7.jpg") },
          { id: 8, path: require("../assets/images/product/strapping-tools/8.jpg") }
        ],
        videos: [

        ]
      };

    case "surface-protection-and-industrial-coating":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/surface-protection-and-industrial-coating/1-2.png") },
          { id: 2, path: require("../assets/images/product/surface-protection-and-industrial-coating/10.png") },
          { id: 3, path: require("../assets/images/product/surface-protection-and-industrial-coating/2-2.png") },
          { id: 4, path: require("../assets/images/product/surface-protection-and-industrial-coating/3-2.png") },
          { id: 5, path: require("../assets/images/product/surface-protection-and-industrial-coating/4-2.png") },
          { id: 6, path: require("../assets/images/product/surface-protection-and-industrial-coating/5-1.png") },
          { id: 7, path: require("../assets/images/product/surface-protection-and-industrial-coating/6-2.png") },
          { id: 8, path: require("../assets/images/product/surface-protection-and-industrial-coating/7-2.png") },
          { id: 9, path: require("../assets/images/product/surface-protection-and-industrial-coating/8-2.png") },
          { id: 10, path: require("../assets/images/product/surface-protection-and-industrial-coating/9.png") },
          { id: 11, path: require("../assets/images/product/surface-protection-and-industrial-coating/key1-3.png") },
          { id: 12, path: require("../assets/images/product/surface-protection-and-industrial-coating/key2-3.png") },
          { id: 13, path: require("../assets/images/product/surface-protection-and-industrial-coating/key3-3.png") },
          { id: 14, path: require("../assets/images/product/surface-protection-and-industrial-coating/key4-3.png") }
        ],
        videos: [

        ]
      };

    case "sweeping-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/sweeping-machine/1-4.jpg") },
          { id: 2, path: require("../assets/images/product/sweeping-machine/2-4.jpg") },
          { id: 3, path: require("../assets/images/product/sweeping-machine/3-4.jpg") },
          { id: 4, path: require("../assets/images/product/sweeping-machine/4-2.jpg") },
          { id: 5, path: require("../assets/images/product/sweeping-machine/5-1.jpg") },
          { id: 6, path: require("../assets/images/product/sweeping-machine/6-1.jpg") },
          { id: 7, path: require("../assets/images/product/sweeping-machine/7.jpg") },
          { id: 8, path: require("../assets/images/product/sweeping-machine/8.jpg") },
          { id: 9, path: require("../assets/images/product/sweeping-machine/key1-9.jpg") },
          { id: 10, path: require("../assets/images/product/sweeping-machine/key2-5.jpg") },
          { id: 11, path: require("../assets/images/product/sweeping-machine/key3-3.jpg") },
          { id: 12, path: require("../assets/images/product/sweeping-machine/key4-2.jpg") },
          { id: 13, path: require("../assets/images/product/sweeping-machine/key5-2.jpg") },
          { id: 14, path: require("../assets/images/product/sweeping-machine/key6-1.jpg") },
          { id: 15, path: require("../assets/images/product/sweeping-machine/key7-1.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/vDn6EPfjn4U" },
          { id: 2, uri: "https://www.youtube.com/embed/K7U7mOcrgO4" },
          { id: 3, uri: "https://www.youtube.com/embed/zzkPuyeFpFo" },
          { id: 4, uri: "https://www.youtube.com/embed/NwU6tb1zvsg" }
        ]
      };

    case "tool-balancer":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/tool-balancer/1.jpg") },
          { id: 2, path: require("../assets/images/product/tool-balancer/10.jpg") },
          { id: 3, path: require("../assets/images/product/tool-balancer/11.jpg") },
          { id: 4, path: require("../assets/images/product/tool-balancer/12.jpg") },
          { id: 5, path: require("../assets/images/product/tool-balancer/13.jpg") },
          { id: 6, path: require("../assets/images/product/tool-balancer/2.jpg") },
          { id: 7, path: require("../assets/images/product/tool-balancer/3.jpg") },
          { id: 8, path: require("../assets/images/product/tool-balancer/4.jpg") },
          { id: 9, path: require("../assets/images/product/tool-balancer/5.jpg") },
          { id: 10, path: require("../assets/images/product/tool-balancer/6.jpg") },
          { id: 11, path: require("../assets/images/product/tool-balancer/7.jpg") },
          { id: 12, path: require("../assets/images/product/tool-balancer/8.jpg") },
          { id: 13, path: require("../assets/images/product/tool-balancer/9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/HPBCyIjJqhA" }
        ]
      };

    case "tool-cabinets-and-road-boxes":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/tool-cabinets-and-road-boxes/1-14.jpg") },
          { id: 2, path: require("../assets/images/product/tool-cabinets-and-road-boxes/1-15.jpg") },
          { id: 3, path: require("../assets/images/product/tool-cabinets-and-road-boxes/1-16.jpg") },
          { id: 4, path: require("../assets/images/product/tool-cabinets-and-road-boxes/2-13.jpg") },
          { id: 5, path: require("../assets/images/product/tool-cabinets-and-road-boxes/2-14.jpg") },
          { id: 6, path: require("../assets/images/product/tool-cabinets-and-road-boxes/2-15.jpg") },
          { id: 7, path: require("../assets/images/product/tool-cabinets-and-road-boxes/3-13.jpg") },
          { id: 8, path: require("../assets/images/product/tool-cabinets-and-road-boxes/3-14.jpg") },
          { id: 9, path: require("../assets/images/product/tool-cabinets-and-road-boxes/3-16.jpg") },
          { id: 10, path: require("../assets/images/product/tool-cabinets-and-road-boxes/4-11.jpg") },
          { id: 11, path: require("../assets/images/product/tool-cabinets-and-road-boxes/4-12.jpg") },
          { id: 12, path: require("../assets/images/product/tool-cabinets-and-road-boxes/4-13.jpg") },
          { id: 13, path: require("../assets/images/product/tool-cabinets-and-road-boxes/key1-18.jpg") },
          { id: 14, path: require("../assets/images/product/tool-cabinets-and-road-boxes/key2-14.jpg") },
          { id: 15, path: require("../assets/images/product/tool-cabinets-and-road-boxes/key3-12.jpg") },
          { id: 16, path: require("../assets/images/product/tool-cabinets-and-road-boxes/key4-10.jpg") },
          { id: 17, path: require("../assets/images/product/tool-cabinets-and-road-boxes/key5-8.jpg") },
          { id: 18, path: require("../assets/images/product/tool-cabinets-and-road-boxes/key6-7.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/KRN12cLoAbk" },
          { id: 2, uri: "https://www.youtube.com/embed/VLjFp3zYKFE" },
          { id: 3, uri: "https://www.youtube.com/embed/k1IGe-DBjbY" },
          { id: 4, uri: "https://www.youtube.com/embed/oyNqWg_3cEc" }
        ]
      };

    case "tube-bending-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/tube-bending-machine/1-52.jpg") },
          { id: 2, path: require("../assets/images/product/tube-bending-machine/2-51.jpg") },
          { id: 3, path: require("../assets/images/product/tube-bending-machine/2-52.jpg") },
          { id: 4, path: require("../assets/images/product/tube-bending-machine/3-50.jpg") },
          { id: 5, path: require("../assets/images/product/tube-bending-machine/3-51.jpg") },
          { id: 6, path: require("../assets/images/product/tube-bending-machine/4-38.jpg") },
          { id: 7, path: require("../assets/images/product/tube-bending-machine/4-39.jpg") },
          { id: 8, path: require("../assets/images/product/tube-bending-machine/5-29.jpg") },
          { id: 9, path: require("../assets/images/product/tube-bending-machine/6-17.jpg") },
          { id: 10, path: require("../assets/images/product/tube-bending-machine/7-10.jpg") },
          { id: 11, path: require("../assets/images/product/tube-bending-machine/8-9.jpg") },
          { id: 12, path: require("../assets/images/product/tube-bending-machine/9-6.jpg") },
          { id: 13, path: require("../assets/images/product/tube-bending-machine/key1-54.jpg") }
        ],
        videos: [

        ]
      };

    case "turbine-roof-ventilators":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/turbine-roof-ventilators/1-26.jpg") },
          { id: 2, path: require("../assets/images/product/turbine-roof-ventilators/2-26.jpg") },
          { id: 3, path: require("../assets/images/product/turbine-roof-ventilators/3-25.jpg") },
          { id: 4, path: require("../assets/images/product/turbine-roof-ventilators/4-19.jpg") },
          { id: 5, path: require("../assets/images/product/turbine-roof-ventilators/5-12.jpg") },
          { id: 6, path: require("../assets/images/product/turbine-roof-ventilators/6-9.jpg") },
          { id: 7, path: require("../assets/images/product/turbine-roof-ventilators/key1-28.jpg") },
          { id: 8, path: require("../assets/images/product/turbine-roof-ventilators/key11-3.jpg") },
          { id: 9, path: require("../assets/images/product/turbine-roof-ventilators/key12-3.jpg") },
          { id: 10, path: require("../assets/images/product/turbine-roof-ventilators/key13-3.jpg") },
          { id: 11, path: require("../assets/images/product/turbine-roof-ventilators/key14-1.jpg") },
          { id: 12, path: require("../assets/images/product/turbine-roof-ventilators/key2-24.jpg") },
          { id: 13, path: require("../assets/images/product/turbine-roof-ventilators/key3-22.jpg") },
          { id: 14, path: require("../assets/images/product/turbine-roof-ventilators/key4-18.jpg") },
          { id: 15, path: require("../assets/images/product/turbine-roof-ventilators/key5-15.jpg") },
          { id: 16, path: require("../assets/images/product/turbine-roof-ventilators/key6-14.jpg") },
          { id: 17, path: require("../assets/images/product/turbine-roof-ventilators/key8-8.jpg") },
          { id: 18, path: require("../assets/images/product/turbine-roof-ventilators/key9-8.jpg") }
        ],
        videos: [

        ]
      };

    case "vacuum-lifters-for-special-use":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/vacuum-lifters-for-special-use/SPECIAL1.jpg") },
          { id: 2, path: require("../assets/images/product/vacuum-lifters-for-special-use/SPECIAL2.jpg") },
          { id: 3, path: require("../assets/images/product/vacuum-lifters-for-special-use/SPECIAL3.jpg") },
          { id: 4, path: require("../assets/images/product/vacuum-lifters-for-special-use/SPECIAL4.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/Gl4jK-vssbQ" },
          { id: 2, uri: "https://www.youtube.com/embed/vIHgVnvzlns" },
          { id: 3, uri: "https://www.youtube.com/embed/Dm-0IO9JxXM" },
          { id: 4, uri: "https://www.youtube.com/embed/BlE7KYfwLbI" }
        ]
      };

    case "vacuum-tube-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/vacuum-tube-lifters/1.jpg") },
          { id: 2, path: require("../assets/images/product/vacuum-tube-lifters/10.jpg") },
          { id: 3, path: require("../assets/images/product/vacuum-tube-lifters/2.jpg") },
          { id: 4, path: require("../assets/images/product/vacuum-tube-lifters/3.jpg") },
          { id: 5, path: require("../assets/images/product/vacuum-tube-lifters/4.jpg") },
          { id: 6, path: require("../assets/images/product/vacuum-tube-lifters/5.jpg") },
          { id: 7, path: require("../assets/images/product/vacuum-tube-lifters/6.jpg") },
          { id: 8, path: require("../assets/images/product/vacuum-tube-lifters/7.jpg") },
          { id: 9, path: require("../assets/images/product/vacuum-tube-lifters/8.jpg") },
          { id: 10, path: require("../assets/images/product/vacuum-tube-lifters/9.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/0nTIuN2BopU" },
          { id: 2, uri: "https://www.youtube.com/embed/UkPdZ8ZGSAs" }
        ]
      };

    case "vehicle-aerial-platforms":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/vehicle-aerial-platforms/1.png") },
          { id: 2, path: require("../assets/images/product/vehicle-aerial-platforms/2.png") },
          { id: 3, path: require("../assets/images/product/vehicle-aerial-platforms/3.png") },
          { id: 4, path: require("../assets/images/product/vehicle-aerial-platforms/4.png") },
          { id: 5, path: require("../assets/images/product/vehicle-aerial-platforms/5.png") },
          { id: 6, path: require("../assets/images/product/vehicle-aerial-platforms/6.png") },
          { id: 7, path: require("../assets/images/product/vehicle-aerial-platforms/7.png") },
          { id: 8, path: require("../assets/images/product/vehicle-aerial-platforms/8.png") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/O9OCodcnOxU" },
          { id: 2, uri: "https://www.youtube.com/embed/SRXiZTfOS2s" },
          { id: 3, uri: "https://www.youtube.com/embed/yYRCOKw_PNU" },
          { id: 4, uri: "https://www.youtube.com/embed/m-dIPC6LiZ8" },
          { id: 5, uri: "https://www.youtube.com/embed/Gz9B_Lvwgwk" }
        ]
      };

    case "visual-management-tools":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/visual-management-tools/1-20.jpg") },
          { id: 2, path: require("../assets/images/product/visual-management-tools/10-5.jpg") },
          { id: 3, path: require("../assets/images/product/visual-management-tools/2-19.jpg") },
          { id: 4, path: require("../assets/images/product/visual-management-tools/3-20.jpg") },
          { id: 5, path: require("../assets/images/product/visual-management-tools/4-16.jpg") },
          { id: 6, path: require("../assets/images/product/visual-management-tools/5-16.jpg") },
          { id: 7, path: require("../assets/images/product/visual-management-tools/6-10.jpg") },
          { id: 8, path: require("../assets/images/product/visual-management-tools/7-12.jpg") },
          { id: 9, path: require("../assets/images/product/visual-management-tools/8-8.jpg") },
          { id: 10, path: require("../assets/images/product/visual-management-tools/9-4.jpg") },
          { id: 11, path: require("../assets/images/product/visual-management-tools/key1-21.jpg") },
          { id: 12, path: require("../assets/images/product/visual-management-tools/key2-20.jpg") },
          { id: 13, path: require("../assets/images/product/visual-management-tools/key3-19.jpg") },
          { id: 14, path: require("../assets/images/product/visual-management-tools/key4-8.jpg") },
          { id: 15, path: require("../assets/images/product/visual-management-tools/key5-3.jpg") },
          { id: 16, path: require("../assets/images/product/visual-management-tools/key6-3.jpg") },
          { id: 17, path: require("../assets/images/product/visual-management-tools/key7-3.jpg") }
        ],
        videos: [

        ]
      };

    case "weld-cleaning-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/weld-cleaning-machine/1-4.jpg") },
          { id: 2, path: require("../assets/images/product/weld-cleaning-machine/2-3.jpg") },
          { id: 3, path: require("../assets/images/product/weld-cleaning-machine/3-3.jpg") },
          { id: 4, path: require("../assets/images/product/weld-cleaning-machine/4-4.jpg") },
          { id: 5, path: require("../assets/images/product/weld-cleaning-machine/5-4.jpg") },
          { id: 6, path: require("../assets/images/product/weld-cleaning-machine/6-1.jpg") },
          { id: 7, path: require("../assets/images/product/weld-cleaning-machine/7-2.jpg") },
          { id: 8, path: require("../assets/images/product/weld-cleaning-machine/8-1.jpg") },
          { id: 9, path: require("../assets/images/product/weld-cleaning-machine/Key1-3.jpg") },
          { id: 10, path: require("../assets/images/product/weld-cleaning-machine/key2-3.jpg") },
          { id: 11, path: require("../assets/images/product/weld-cleaning-machine/key3-3.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/M92dTUjk3Jk" },
          { id: 2, uri: "https://www.youtube.com/embed/NbhDFbu9iGY" },
          { id: 3, uri: "https://www.youtube.com/embed/Pjcrd0bUZxM" },
          { id: 4, uri: "https://www.youtube.com/embed/d3sfKns8gdo" }
        ]
      };

    case "welding-curtains":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/welding-curtains/1-31.jpg") },
          { id: 2, path: require("../assets/images/product/welding-curtains/1-35.jpg") },
          { id: 3, path: require("../assets/images/product/welding-curtains/2-31.jpg") },
          { id: 4, path: require("../assets/images/product/welding-curtains/3-31.jpg") },
          { id: 5, path: require("../assets/images/product/welding-curtains/4-22.jpg") },
          { id: 6, path: require("../assets/images/product/welding-curtains/5-15.jpg") },
          { id: 7, path: require("../assets/images/product/welding-curtains/key1-32.jpg") },
          { id: 8, path: require("../assets/images/product/welding-curtains/key10-9.jpg") },
          { id: 9, path: require("../assets/images/product/welding-curtains/key2-28.jpg") },
          { id: 10, path: require("../assets/images/product/welding-curtains/key3-26.jpg") },
          { id: 11, path: require("../assets/images/product/welding-curtains/key4-22.jpg") },
          { id: 12, path: require("../assets/images/product/welding-curtains/key5-19.jpg") },
          { id: 13, path: require("../assets/images/product/welding-curtains/key6-18.jpg") },
          { id: 14, path: require("../assets/images/product/welding-curtains/key7-13.jpg") },
          { id: 15, path: require("../assets/images/product/welding-curtains/key8-10.jpg") },
          { id: 16, path: require("../assets/images/product/welding-curtains/key9-10.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/i15BwusrkXg" },
          { id: 2, uri: "https://www.youtube.com/embed/HArShskqzHQ" },
          { id: 3, uri: "https://www.youtube.com/embed/4QA-0uxGsiQ" }
        ]
      };

    case "welding-fume-extractors":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/welding-fume-extractors/ecosmoke-5-86.jpg") },
          { id: 2, path: require("../assets/images/product/welding-fume-extractors/impianti-centralizzati-56.jpg") },
          { id: 3, path: require("../assets/images/product/welding-fume-extractors/key1-3.jpg") },
          { id: 4, path: require("../assets/images/product/welding-fume-extractors/key2-2.jpg") },
          { id: 5, path: require("../assets/images/product/welding-fume-extractors/key3-1.jpg") },
          { id: 6, path: require("../assets/images/product/welding-fume-extractors/key4.jpg") },
          { id: 7, path: require("../assets/images/product/welding-fume-extractors/safeweld-82.jpg") },
          { id: 8, path: require("../assets/images/product/welding-fume-extractors/unicube-22.jpg") },
          { id: 9, path: require("../assets/images/product/welding-fume-extractors/unismoke-48-1.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/bxsrD2H-oOY" },
          { id: 2, uri: "https://www.youtube.com/embed/s5mR1RJ_BRY" },
          { id: 3, uri: "https://www.youtube.com/embed/Dd5uX7fuRjc" },
          { id: 4, uri: "https://www.youtube.com/embed/z2t9IsWPH7Y" }
        ]
      };

    case "welding-helmets":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/welding-helmets/10-1.jpg") },
          { id: 2, path: require("../assets/images/product/welding-helmets/11-1.jpg") },
          { id: 3, path: require("../assets/images/product/welding-helmets/13.jpg") },
          { id: 4, path: require("../assets/images/product/welding-helmets/2-8.jpg") },
          { id: 5, path: require("../assets/images/product/welding-helmets/3-8.jpg") },
          { id: 6, path: require("../assets/images/product/welding-helmets/5-7.jpg") },
          { id: 7, path: require("../assets/images/product/welding-helmets/6-3.jpg") },
          { id: 8, path: require("../assets/images/product/welding-helmets/7-4.jpg") },
          { id: 9, path: require("../assets/images/product/welding-helmets/8-3.jpg") },
          { id: 10, path: require("../assets/images/product/welding-helmets/9-1.jpg") },
          { id: 11, path: require("../assets/images/product/welding-helmets/key1-6.jpg") },
          { id: 12, path: require("../assets/images/product/welding-helmets/key2-6.jpg") },
          { id: 13, path: require("../assets/images/product/welding-helmets/key3-6.jpg") },
          { id: 14, path: require("../assets/images/product/welding-helmets/key4-2.jpg") }
        ],
        videos: [

        ]
      };

    case "welding-tables":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/welding-tables/1-1.jpg") },
          { id: 2, path: require("../assets/images/product/welding-tables/1-2.jpg") },
          { id: 3, path: require("../assets/images/product/welding-tables/1.jpg") },
          { id: 4, path: require("../assets/images/product/welding-tables/2-1.jpg") },
          { id: 5, path: require("../assets/images/product/welding-tables/2-2.jpg") },
          { id: 6, path: require("../assets/images/product/welding-tables/2.jpg") },
          { id: 7, path: require("../assets/images/product/welding-tables/3-1.jpg") },
          { id: 8, path: require("../assets/images/product/welding-tables/3-2.jpg") },
          { id: 9, path: require("../assets/images/product/welding-tables/3.jpg") },
          { id: 10, path: require("../assets/images/product/welding-tables/4-1.jpg") },
          { id: 11, path: require("../assets/images/product/welding-tables/4-2.jpg") },
          { id: 12, path: require("../assets/images/product/welding-tables/4.jpg") },
          { id: 13, path: require("../assets/images/product/welding-tables/5-1.jpg") },
          { id: 14, path: require("../assets/images/product/welding-tables/5-2.jpg") },
          { id: 15, path: require("../assets/images/product/welding-tables/5.jpg") },
          { id: 16, path: require("../assets/images/product/welding-tables/key1-1.jpg") },
          { id: 17, path: require("../assets/images/product/welding-tables/key2-1.jpg") },
          { id: 18, path: require("../assets/images/product/welding-tables/key3-1.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://fenatek.astra.qa/wp-content/uploads/2024/11/BP-Tables_4-Updated-1.mov" },
          { id: 2, uri: "https://fenatek.astra.qa/wp-content/uploads/2024/11/BuildPro-Table-Beyond-Welding.mov" },
          { id: 3, uri: "https://fenatek.astra.qa/wp-content/uploads/2024/11/BuildPro-Application-Video-03.mp4" },
          { id: 4, uri: "https://fenatek.astra.qa/wp-content/uploads/2024/11/BuildPro%E2%84%A2-Modular-Welding-Table-Overview.mov" }
        ]
      };

    case "work-benches-with-storage":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/work-benches-with-storage/1-29.jpg") },
          { id: 2, path: require("../assets/images/product/work-benches-with-storage/2-29.jpg") },
          { id: 3, path: require("../assets/images/product/work-benches-with-storage/3-29.jpg") },
          { id: 4, path: require("../assets/images/product/work-benches-with-storage/key1-30.jpg") },
          { id: 5, path: require("../assets/images/product/work-benches-with-storage/key2-26.jpg") },
          { id: 6, path: require("../assets/images/product/work-benches-with-storage/key3-24.jpg") },
          { id: 7, path: require("../assets/images/product/work-benches-with-storage/key4-20.jpg") },
          { id: 8, path: require("../assets/images/product/work-benches-with-storage/key5-17.jpg") },
          { id: 9, path: require("../assets/images/product/work-benches-with-storage/key6-16.jpg") },
          { id: 10, path: require("../assets/images/product/work-benches-with-storage/key7-11.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/k1IGe-DBjbY" },
          { id: 2, uri: "https://www.youtube.com/embed/3b6HTInYkoM" },
          { id: 3, uri: "https://www.youtube.com/embed/VLjFp3zYKFE" }
        ]
      };

    case "wrapping-robots":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/wrapping-robots/1-41.jpg") },
          { id: 2, path: require("../assets/images/product/wrapping-robots/2-39.jpg") },
          { id: 3, path: require("../assets/images/product/wrapping-robots/3-39.jpg") },
          { id: 4, path: require("../assets/images/product/wrapping-robots/4-30.jpg") },
          { id: 5, path: require("../assets/images/product/wrapping-robots/key1-44.jpg") },
          { id: 6, path: require("../assets/images/product/wrapping-robots/key2-40.jpg") },
          { id: 7, path: require("../assets/images/product/wrapping-robots/key3-38.jpg") },
          { id: 8, path: require("../assets/images/product/wrapping-robots/key4-33.jpg") },
          { id: 9, path: require("../assets/images/product/wrapping-robots/key5-30.jpg") }
        ],
        videos: [
          { id: 1, uri: "https://www.youtube.com/embed/1Ab2GhxENB0" },
          { id: 2, uri: "https://www.youtube.com/embed/MqSxVLwr3_I" },
          { id: 3, uri: "https://www.youtube.com/embed/uqeSVvqMMgM" },
          { id: 4, uri: "https://www.youtube.com/embed/DQD2USDMK2E" }
        ]
      };

    default:
      return { images: [], videos: [] };
  }
};

export default GetProductData;