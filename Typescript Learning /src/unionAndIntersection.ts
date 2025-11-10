// Union

type UserRole = 'admin' | 'user' | 'guest';

const getDashboard = (role:UserRole) =>{
    if(role === 'admin'){
        return 'Admin Dashboard';
    } else if(role === 'user'){
        return 'User Dashboard';
    } else {
        return 'Guest Dashboard';
    }
}


getDashboard('admin'); // Admin Dashboard
getDashboard('user');  // User Dashboard
getDashboard('guest'); // Guest Dashboard

// Intersection



type Employee ={
    name : string;
    employeeId : number;
    phone : string;
}

type Manager = {
    designation : string;
    teamSize : number;
}

type ManagementEmployee = Employee & Manager;

const Chowdhori: ManagementEmployee ={
    name : 'Chowdhori',
    employeeId : 101,
    phone : '123-456-7890',
    designation : 'Project Manager',
    teamSize : 10
}