//typeof and in

const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
};

type NormalUser = {
  name: string;
};

type Admin = {
  name: string;
  role: string;
};

const getUser = (user: NormalUser | Admin) => {
  if ("role" in user) {
    console.log(`${user.name} , ${user.role}`);
  }

  
};
