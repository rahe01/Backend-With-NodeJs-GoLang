// constrain : strict rules deya

type Importat = { id: number; name: string };

const addStudent = <T extends Importat>(studentInfo: T) => {
  return {
    course: "NL",
    ...studentInfo,
  };
};

const st1 = {
  id: 123,
  name: "Rahe",
  hasPen: true,
};

const st2 = {
  id: 123,
  name: "Rahe",
  hasPen: true,
  isCar: true,
};

const st3 = {
  id: 2334,
  name: "rahe",
  hasWatch: true,
};

const result = addStudent(st3);
console.log(result);
