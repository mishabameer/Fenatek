const GetProductData = (name) => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, "-");
  switch (normalizedName) {
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

        ]
      };

    case "automated-vertical-storage-system":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/automated-vertical-storage-system/1-2.png") },
          { id: 2, path: require("../assets/images/product/automated-vertical-storage-system/1Normal.png") },
          { id: 3, path: require("../assets/images/product/automated-vertical-storage-system/2-1.png") },
          { id: 4, path: require("../assets/images/product/automated-vertical-storage-system/2-2.png") },
          { id: 5, path: require("../assets/images/product/automated-vertical-storage-system/3-1.png") },
          { id: 6, path: require("../assets/images/product/automated-vertical-storage-system/3-2.png") },
          { id: 7, path: require("../assets/images/product/automated-vertical-storage-system/4-3.png") },
          { id: 8, path: require("../assets/images/product/automated-vertical-storage-system/6-1.png") },
          { id: 9, path: require("../assets/images/product/automated-vertical-storage-system/key1-2.png") },
          { id: 10, path: require("../assets/images/product/automated-vertical-storage-system/key2-2.png") },
          { id: 11, path: require("../assets/images/product/automated-vertical-storage-system/key3-2.png") },
          { id: 12, path: require("../assets/images/product/automated-vertical-storage-system/key5-2.png") }
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

        ]
      };

    case "cladding-vacuum-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/cladding-vacuum-lifters/1.jpg") },
          { id: 2, path: require("../assets/images/product/cladding-vacuum-lifters/2.jpg") },
          { id: 3, path: require("../assets/images/product/cladding-vacuum-lifters/3.jpg") },
          { id: 4, path: require("../assets/images/product/cladding-vacuum-lifters/4.jpg") },
          { id: 5, path: require("../assets/images/product/cladding-vacuum-lifters/5.jpg") },
          { id: 6, path: require("../assets/images/product/cladding-vacuum-lifters/6.jpg") },
          { id: 7, path: require("../assets/images/product/cladding-vacuum-lifters/7.jpg") },
          { id: 8, path: require("../assets/images/product/cladding-vacuum-lifters/8.jpg") }
        ],
        videos: [

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

        ]
      };

    case "crane-system":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/crane-system/1.jpg") },
          { id: 2, path: require("../assets/images/product/crane-system/10.jpg") },
          { id: 3, path: require("../assets/images/product/crane-system/2.jpg") },
          { id: 4, path: require("../assets/images/product/crane-system/3.jpg") },
          { id: 5, path: require("../assets/images/product/crane-system/4.jpg") },
          { id: 6, path: require("../assets/images/product/crane-system/5.jpg") },
          { id: 7, path: require("../assets/images/product/crane-system/6.jpg") },
          { id: 8, path: require("../assets/images/product/crane-system/7.jpg") },
          { id: 9, path: require("../assets/images/product/crane-system/8.jpg") },
          { id: 10, path: require("../assets/images/product/crane-system/9.jpg") }
        ],
        videos: [

        ]
      };

    case "drum-handling":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/drum-handling/1.webp") },
          { id: 2, path: require("../assets/images/product/drum-handling/14_lg.webp") },
          { id: 3, path: require("../assets/images/product/drum-handling/160_lg.webp") },
          { id: 4, path: require("../assets/images/product/drum-handling/195a-1-115_lg.webp") },
          { id: 5, path: require("../assets/images/product/drum-handling/24_lg.webp") },
          { id: 6, path: require("../assets/images/product/drum-handling/285a-bp_lg.webp") },
          { id: 7, path: require("../assets/images/product/drum-handling/305-video_lg.webp") },
          { id: 8, path: require("../assets/images/product/drum-handling/309-3_lg.webp") },
          { id: 9, path: require("../assets/images/product/drum-handling/400s-xr-115_lg02.png") },
          { id: 10, path: require("../assets/images/product/drum-handling/456-3_lg.webp") },
          { id: 11, path: require("../assets/images/product/drum-handling/46_lg.webp") },
          { id: 12, path: require("../assets/images/product/drum-handling/510-115_lg03.webp") },
          { id: 13, path: require("../assets/images/product/drum-handling/620-115_lg.webp") },
          { id: 14, path: require("../assets/images/product/drum-handling/825h-n-125_lg02.webp") },
          { id: 15, path: require("../assets/images/product/drum-handling/82a-gt-125_lg.webp") },
          { id: 16, path: require("../assets/images/product/drum-handling/82am_lg.webp") },
          { id: 17, path: require("../assets/images/product/drum-handling/83_lg.webp") }
        ],
        videos: [

        ]
      };

    case "dumpers-and-carriers":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/dumpers-and-carriers/1.jpg") },
          { id: 2, path: require("../assets/images/product/dumpers-and-carriers/10.jpg") },
          { id: 3, path: require("../assets/images/product/dumpers-and-carriers/2.jpg") },
          { id: 4, path: require("../assets/images/product/dumpers-and-carriers/3.jpg") },
          { id: 5, path: require("../assets/images/product/dumpers-and-carriers/4.jpg") },
          { id: 6, path: require("../assets/images/product/dumpers-and-carriers/5.jpg") },
          { id: 7, path: require("../assets/images/product/dumpers-and-carriers/6.jpg") },
          { id: 8, path: require("../assets/images/product/dumpers-and-carriers/7.jpg") },
          { id: 9, path: require("../assets/images/product/dumpers-and-carriers/8.jpg") },
          { id: 10, path: require("../assets/images/product/dumpers-and-carriers/9.jpg") }
        ],
        videos: [

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

        ]
      };

    case "floor-marking-solutions":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/floor-marking-solutions/1-20.jpg") },
          { id: 2, path: require("../assets/images/product/floor-marking-solutions/10-5.jpg") },
          { id: 3, path: require("../assets/images/product/floor-marking-solutions/2-19.jpg") },
          { id: 4, path: require("../assets/images/product/floor-marking-solutions/3-20.jpg") },
          { id: 5, path: require("../assets/images/product/floor-marking-solutions/4-16.jpg") },
          { id: 6, path: require("../assets/images/product/floor-marking-solutions/5-16.jpg") },
          { id: 7, path: require("../assets/images/product/floor-marking-solutions/6-10.jpg") },
          { id: 8, path: require("../assets/images/product/floor-marking-solutions/7-12.jpg") },
          { id: 9, path: require("../assets/images/product/floor-marking-solutions/8-8.jpg") },
          { id: 10, path: require("../assets/images/product/floor-marking-solutions/9-4.jpg") },
          { id: 11, path: require("../assets/images/product/floor-marking-solutions/key1-21.jpg") },
          { id: 12, path: require("../assets/images/product/floor-marking-solutions/key2-20.jpg") },
          { id: 13, path: require("../assets/images/product/floor-marking-solutions/key3-19.jpg") },
          { id: 14, path: require("../assets/images/product/floor-marking-solutions/key4-8.jpg") },
          { id: 15, path: require("../assets/images/product/floor-marking-solutions/key5-3.jpg") },
          { id: 16, path: require("../assets/images/product/floor-marking-solutions/key6-3.jpg") },
          { id: 17, path: require("../assets/images/product/floor-marking-solutions/key7-3.jpg") }
        ],
        videos: [

        ]
      };

    case "gantry-cranes":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/gantry-cranes/1.jpg") },
          { id: 2, path: require("../assets/images/product/gantry-cranes/2.jpg") },
          { id: 3, path: require("../assets/images/product/gantry-cranes/3-2.jpg") }
        ],
        videos: [

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
          { id: 8, path: require("../assets/images/product/glass-vacuum-lifters/vacuum2.jpg") },
          { id: 9, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum3-1.jpg") },
          { id: 10, path: require("../assets/images/product/glass-vacuum-lifters/vacuum3.jpg") },
          { id: 11, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum4-1.jpg") },
          { id: 12, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum5-1.jpg") },
          { id: 13, path: require("../assets/images/product/glass-vacuum-lifters/Vacuum5.jpg") }
        ],
        videos: [

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
          { id: 2, path: require("../assets/images/product/industrial-flooring-solutions/11-1.jpg") },
          { id: 3, path: require("../assets/images/product/industrial-flooring-solutions/12.jpg") },
          { id: 4, path: require("../assets/images/product/industrial-flooring-solutions/13-1.jpg") },
          { id: 5, path: require("../assets/images/product/industrial-flooring-solutions/14-1.jpg") },
          { id: 6, path: require("../assets/images/product/industrial-flooring-solutions/15-1.jpg") },
          { id: 7, path: require("../assets/images/product/industrial-flooring-solutions/16.jpg") },
          { id: 8, path: require("../assets/images/product/industrial-flooring-solutions/2-10.jpg") },
          { id: 9, path: require("../assets/images/product/industrial-flooring-solutions/3-11.jpg") },
          { id: 10, path: require("../assets/images/product/industrial-flooring-solutions/4-9.jpg") },
          { id: 11, path: require("../assets/images/product/industrial-flooring-solutions/5-7.jpg") },
          { id: 12, path: require("../assets/images/product/industrial-flooring-solutions/8-1.jpg") },
          { id: 13, path: require("../assets/images/product/industrial-flooring-solutions/key1-16.jpg") },
          { id: 14, path: require("../assets/images/product/industrial-flooring-solutions/key10-2.jpg") },
          { id: 15, path: require("../assets/images/product/industrial-flooring-solutions/key11-1.jpg") },
          { id: 16, path: require("../assets/images/product/industrial-flooring-solutions/key12-1.jpg") },
          { id: 17, path: require("../assets/images/product/industrial-flooring-solutions/key13-1.jpg") },
          { id: 18, path: require("../assets/images/product/industrial-flooring-solutions/key14.jpg") },
          { id: 19, path: require("../assets/images/product/industrial-flooring-solutions/key15.jpg") },
          { id: 20, path: require("../assets/images/product/industrial-flooring-solutions/key16.jpg") },
          { id: 21, path: require("../assets/images/product/industrial-flooring-solutions/key2-12.jpg") },
          { id: 22, path: require("../assets/images/product/industrial-flooring-solutions/key3-10.jpg") },
          { id: 23, path: require("../assets/images/product/industrial-flooring-solutions/key4-8.jpg") },
          { id: 24, path: require("../assets/images/product/industrial-flooring-solutions/key5-7.jpg") },
          { id: 25, path: require("../assets/images/product/industrial-flooring-solutions/key6-6.jpg") },
          { id: 26, path: require("../assets/images/product/industrial-flooring-solutions/key7-5.jpg") },
          { id: 27, path: require("../assets/images/product/industrial-flooring-solutions/key8-3.jpg") },
          { id: 28, path: require("../assets/images/product/industrial-flooring-solutions/key9-3.jpg") }
        ],
        videos: [

        ]
      };

    case "industrial-hoses":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/industrial-hoses/1.webp") },
          { id: 2, path: require("../assets/images/product/industrial-hoses/2.webp") },
          { id: 3, path: require("../assets/images/product/industrial-hoses/3.webp") },
          { id: 4, path: require("../assets/images/product/industrial-hoses/4.webp") },
          { id: 5, path: require("../assets/images/product/industrial-hoses/5.webp") },
          { id: 6, path: require("../assets/images/product/industrial-hoses/6.webp") },
          { id: 7, path: require("../assets/images/product/industrial-hoses/7.webp") },
          { id: 8, path: require("../assets/images/product/industrial-hoses/8.webp") }
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

        ]
      };

    case "industrial-springs":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/industrial-springs/1.webp") },
          { id: 2, path: require("../assets/images/product/industrial-springs/2.webp") },
          { id: 3, path: require("../assets/images/product/industrial-springs/4.webp") },
          { id: 4, path: require("../assets/images/product/industrial-springs/6.webp") },
          { id: 5, path: require("../assets/images/product/industrial-springs/7.webp") },
          { id: 6, path: require("../assets/images/product/industrial-springs/8.webp") },
          { id: 7, path: require("../assets/images/product/industrial-springs/key1.webp") },
          { id: 8, path: require("../assets/images/product/industrial-springs/key2.webp") },
          { id: 9, path: require("../assets/images/product/industrial-springs/key3.webp") },
          { id: 10, path: require("../assets/images/product/industrial-springs/key4.webp") }
        ],
        videos: [

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

        ]
      };

    case "lifting-&-handling-robots":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/lifting-&-handling-robots/1.jpg") },
          { id: 2, path: require("../assets/images/product/lifting-&-handling-robots/10.jpg") },
          { id: 3, path: require("../assets/images/product/lifting-&-handling-robots/11.jpg") },
          { id: 4, path: require("../assets/images/product/lifting-&-handling-robots/12.jpg") },
          { id: 5, path: require("../assets/images/product/lifting-&-handling-robots/13.jpg") },
          { id: 6, path: require("../assets/images/product/lifting-&-handling-robots/14.jpg") },
          { id: 7, path: require("../assets/images/product/lifting-&-handling-robots/2.jpg") },
          { id: 8, path: require("../assets/images/product/lifting-&-handling-robots/3.jpg") },
          { id: 9, path: require("../assets/images/product/lifting-&-handling-robots/4.jpg") },
          { id: 10, path: require("../assets/images/product/lifting-&-handling-robots/5.jpg") },
          { id: 11, path: require("../assets/images/product/lifting-&-handling-robots/6.jpg") },
          { id: 12, path: require("../assets/images/product/lifting-&-handling-robots/7.jpg") },
          { id: 13, path: require("../assets/images/product/lifting-&-handling-robots/8.jpg") },
          { id: 14, path: require("../assets/images/product/lifting-&-handling-robots/9.jpg") }
        ],
        videos: [

        ]
      };

    case "magnetic-lifter":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/magnetic-lifter/2-10.jpg") },
          { id: 2, path: require("../assets/images/product/magnetic-lifter/3-11.jpg") },
          { id: 3, path: require("../assets/images/product/magnetic-lifter/4-7.jpg") },
          { id: 4, path: require("../assets/images/product/magnetic-lifter/7-6.jpg") }
        ],
        videos: [

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

        ]
      };

    case "pallet-exchanger-dispensers":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pallet-exchanger-dispensers/1-22.jpg") },
          { id: 2, path: require("../assets/images/product/pallet-exchanger-dispensers/1-23.jpg") },
          { id: 3, path: require("../assets/images/product/pallet-exchanger-dispensers/2-22.jpg") },
          { id: 4, path: require("../assets/images/product/pallet-exchanger-dispensers/2-23.jpg") },
          { id: 5, path: require("../assets/images/product/pallet-exchanger-dispensers/3-22.jpg") },
          { id: 6, path: require("../assets/images/product/pallet-exchanger-dispensers/3-23.jpg") },
          { id: 7, path: require("../assets/images/product/pallet-exchanger-dispensers/key1-25.jpg") },
          { id: 8, path: require("../assets/images/product/pallet-exchanger-dispensers/key10-5.jpg") },
          { id: 9, path: require("../assets/images/product/pallet-exchanger-dispensers/key2-21.jpg") },
          { id: 10, path: require("../assets/images/product/pallet-exchanger-dispensers/key3-19.jpg") },
          { id: 11, path: require("../assets/images/product/pallet-exchanger-dispensers/key4-16.jpg") },
          { id: 12, path: require("../assets/images/product/pallet-exchanger-dispensers/key5-13.jpg") },
          { id: 13, path: require("../assets/images/product/pallet-exchanger-dispensers/key6-12.jpg") },
          { id: 14, path: require("../assets/images/product/pallet-exchanger-dispensers/key7-8.jpg") },
          { id: 15, path: require("../assets/images/product/pallet-exchanger-dispensers/key8-6.jpg") },
          { id: 16, path: require("../assets/images/product/pallet-exchanger-dispensers/key9-6.jpg") }
        ],
        videos: [

        ]
      };

    case "pallet-inverter-changer":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pallet-inverter-changer/2-19.jpg") },
          { id: 2, path: require("../assets/images/product/pallet-inverter-changer/3-19.jpg") },
          { id: 3, path: require("../assets/images/product/pallet-inverter-changer/4-15.jpg") },
          { id: 4, path: require("../assets/images/product/pallet-inverter-changer/key1-38.jpg") },
          { id: 5, path: require("../assets/images/product/pallet-inverter-changer/key2-34.jpg") },
          { id: 6, path: require("../assets/images/product/pallet-inverter-changer/key3-32.jpg") },
          { id: 7, path: require("../assets/images/product/pallet-inverter-changer/key4-27.jpg") },
          { id: 8, path: require("../assets/images/product/pallet-inverter-changer/key5-24.jpg") },
          { id: 9, path: require("../assets/images/product/pallet-inverter-changer/key6-23.jpg") },
          { id: 10, path: require("../assets/images/product/pallet-inverter-changer/key7-18.jpg") },
          { id: 11, path: require("../assets/images/product/pallet-inverter-changer/key8-15.jpg") },
          { id: 12, path: require("../assets/images/product/pallet-inverter-changer/key9-15.jpg") }
        ],
        videos: [

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

        ]
      };

    case "pipe-vacuum-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/pipe-vacuum-lifters/1.jpg") },
          { id: 2, path: require("../assets/images/product/pipe-vacuum-lifters/10.jpg") },
          { id: 3, path: require("../assets/images/product/pipe-vacuum-lifters/11.jpg") },
          { id: 4, path: require("../assets/images/product/pipe-vacuum-lifters/2.jpg") },
          { id: 5, path: require("../assets/images/product/pipe-vacuum-lifters/3.jpg") },
          { id: 6, path: require("../assets/images/product/pipe-vacuum-lifters/4.jpg") },
          { id: 7, path: require("../assets/images/product/pipe-vacuum-lifters/5.jpg") },
          { id: 8, path: require("../assets/images/product/pipe-vacuum-lifters/6.jpg") },
          { id: 9, path: require("../assets/images/product/pipe-vacuum-lifters/7.jpg") },
          { id: 10, path: require("../assets/images/product/pipe-vacuum-lifters/8.jpg") },
          { id: 11, path: require("../assets/images/product/pipe-vacuum-lifters/9.jpg") }
        ],
        videos: [

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

        ]
      };

    case "safety-barriers":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/safety-barriers/12-2.jpg") },
          { id: 2, path: require("../assets/images/product/safety-barriers/13-2.jpg") },
          { id: 3, path: require("../assets/images/product/safety-barriers/19-1.jpg") },
          { id: 4, path: require("../assets/images/product/safety-barriers/3-4.jpg") },
          { id: 5, path: require("../assets/images/product/safety-barriers/4-3.jpg") },
          { id: 6, path: require("../assets/images/product/safety-barriers/key1-48.jpg") },
          { id: 7, path: require("../assets/images/product/safety-barriers/key1-7.jpg") },
          { id: 8, path: require("../assets/images/product/safety-barriers/key10-13.jpg") },
          { id: 9, path: require("../assets/images/product/safety-barriers/key2-44.jpg") },
          { id: 10, path: require("../assets/images/product/safety-barriers/key2-6.jpg") },
          { id: 11, path: require("../assets/images/product/safety-barriers/key3-39.jpg") },
          { id: 12, path: require("../assets/images/product/safety-barriers/key3-5.jpg") },
          { id: 13, path: require("../assets/images/product/safety-barriers/key4-34.jpg") },
          { id: 14, path: require("../assets/images/product/safety-barriers/key5-31.jpg") },
          { id: 15, path: require("../assets/images/product/safety-barriers/key6-29.jpg") },
          { id: 16, path: require("../assets/images/product/safety-barriers/key7-24.jpg") },
          { id: 17, path: require("../assets/images/product/safety-barriers/key8-21.jpg") },
          { id: 18, path: require("../assets/images/product/safety-barriers/key9-21.jpg") }
        ],
        videos: [

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

        ]
      };

    case "shrink-wrap":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/shrink-wrap/12-IN-X-600-FT-PREMIUM-CARPET-PROTECTION.jpg") },
          { id: 2, path: require("../assets/images/product/shrink-wrap/4-4.jpg") },
          { id: 3, path: require("../assets/images/product/shrink-wrap/61u-5b8VuHL._AC_SL1020_.jpg") },
          { id: 4, path: require("../assets/images/product/shrink-wrap/BLUE-SHRINK-WRAP-ROLLS.jpg") },
          { id: 5, path: require("../assets/images/product/shrink-wrap/key1-5.jpg") },
          { id: 6, path: require("../assets/images/product/shrink-wrap/key2-4.jpg") },
          { id: 7, path: require("../assets/images/product/shrink-wrap/key3-3.jpg") },
          { id: 8, path: require("../assets/images/product/shrink-wrap/key4-1.jpg") },
          { id: 9, path: require("../assets/images/product/shrink-wrap/PACKAGE-2-WHITE.jpg") },
          { id: 10, path: require("../assets/images/product/shrink-wrap/RIPACK-2200-HEAT-GUN.jpg") },
          { id: 11, path: require("../assets/images/product/shrink-wrap/SHRINKFAST-998-30A-COMBUSTOR-INCLUDES-30322883.jpg") },
          { id: 12, path: require("../assets/images/product/shrink-wrap/SHRINKFAST-998-HEAT-GUN-2.jpg") }
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

        ]
      };

    case "spider-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/spider-lifters/1.png") },
          { id: 2, path: require("../assets/images/product/spider-lifters/2.png") },
          { id: 3, path: require("../assets/images/product/spider-lifters/3.png") },
          { id: 4, path: require("../assets/images/product/spider-lifters/4.png") }
        ],
        videos: [

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

        ]
      };

    case "stone-vacuum-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/stone-vacuum-lifters/st.jpg") },
          { id: 2, path: require("../assets/images/product/stone-vacuum-lifters/st1.jpg") },
          { id: 3, path: require("../assets/images/product/stone-vacuum-lifters/st2.jpg") },
          { id: 4, path: require("../assets/images/product/stone-vacuum-lifters/st3.jpg") },
          { id: 5, path: require("../assets/images/product/stone-vacuum-lifters/st4.jpg") },
          { id: 6, path: require("../assets/images/product/stone-vacuum-lifters/stone1.jpg") },
          { id: 7, path: require("../assets/images/product/stone-vacuum-lifters/stone2.jpg") },
          { id: 8, path: require("../assets/images/product/stone-vacuum-lifters/stone3.jpg") },
          { id: 9, path: require("../assets/images/product/stone-vacuum-lifters/stone4.jpg") },
          { id: 10, path: require("../assets/images/product/stone-vacuum-lifters/stone5.jpg") },
          { id: 11, path: require("../assets/images/product/stone-vacuum-lifters/stone6.jpg") },
          { id: 12, path: require("../assets/images/product/stone-vacuum-lifters/Stonevacuum.jpg") }
        ],
        videos: [

        ]
      };

    case "strapping-machine":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/strapping-machine/1.png") },
          { id: 2, path: require("../assets/images/product/strapping-machine/2.png") },
          { id: 3, path: require("../assets/images/product/strapping-machine/3.png") },
          { id: 4, path: require("../assets/images/product/strapping-machine/4.png") },
          { id: 5, path: require("../assets/images/product/strapping-machine/5.png") },
          { id: 6, path: require("../assets/images/product/strapping-machine/6.png") },
          { id: 7, path: require("../assets/images/product/strapping-machine/7.png") },
          { id: 8, path: require("../assets/images/product/strapping-machine/8.png") }
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

        ]
      };

    case "vacuum-tube-lifters":
      return {
        images: [
          { id: 1, path: require("../assets/images/product/vacuum-tube-lifters/1.jpg") },
          { id: 2, path: require("../assets/images/product/vacuum-tube-lifters/2.jpg") },
          { id: 3, path: require("../assets/images/product/vacuum-tube-lifters/3.jpg") },
          { id: 4, path: require("../assets/images/product/vacuum-tube-lifters/4.jpg") },
          { id: 5, path: require("../assets/images/product/vacuum-tube-lifters/5.jpg") },
          { id: 6, path: require("../assets/images/product/vacuum-tube-lifters/6.jpg") },
          { id: 7, path: require("../assets/images/product/vacuum-tube-lifters/7.jpg") },
          { id: 8, path: require("../assets/images/product/vacuum-tube-lifters/8.jpg") },
          { id: 9, path: require("../assets/images/product/vacuum-tube-lifters/9.jpg") }
        ],
        videos: [

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

        ]
      };

    default:
      return { images: [], videos: [] };
  }
};

export default GetProductData;