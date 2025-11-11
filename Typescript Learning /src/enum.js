// enum
// set of fixed string letereal ek jaigay rakhe 
// type UserRoles = 'Admin' | 'Editor' | "Viewer";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
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
