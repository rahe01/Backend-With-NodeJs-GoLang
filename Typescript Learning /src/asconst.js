//  as const assertion
// enum
// set of fixed string letereal ek jaigay rakhe 
// type UserRoles = 'Admin' | 'Editor' | "Viewer";
// enum UserRoles {
//     Admin = 'Admin',
//     Editor ='Editor',
//     Viewer = 'Viewer'
// }
var UserRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer'
};
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
var idEditPermissable = canEdit(UserRoles.Admin);
console.log(idEditPermissable);
