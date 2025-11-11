// enum

// set of fixed string letereal ek jaigay rakhe 


// type UserRoles = 'Admin' | 'Editor' | "Viewer";

enum UserRoles {
    Admin = 'Admin',
    Editor ='Editor',
    Viewer = 'Viewer'
}


const canEdit =(role : UserRoles) =>{

    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }

    else {
        return false;
    }





}


const idEditPermissable = canEdit(UserRoles.Admin);
console.log(idEditPermissable);