interface Developer<T , X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike: X;
}



type nonBrand = {
  hartRate: string;
  stopWatch: boolean;
};

type Brand = {
  hartRate: string;
  stopWatch: boolean;
  callSupport: boolean;
};

type Bike={
    model : string;
}



const poorDeveloper: Developer<nonBrand , Bike> = {
  name: "Mr rahe",
  salary: 34,
  device: {
    brand: "raee",
    model: "dfd",
    releasedYear: "re",
  },

  smartWatch: {
    hartRate: "34",
    stopWatch: false,
  },
  bike:{
    model:"df"
  }
};




const richDeveloper: Developer<Brand> = {
  name: "Mr rahe",
  salary: 3434545,
  device: {
    brand: "raee",
    model: "dfd",
    releasedYear: "re",
  },

  smartWatch: {
    hartRate: "34",
    stopWatch: false,
    callSupport: true,
  },
  bike:null
};
