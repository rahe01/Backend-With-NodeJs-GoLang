//  as const assertion

// enum

// set of fixed string letereal ek jaigay rakhe

// type UserRoles = 'Admin' | 'Editor' | "Viewer";

// enum UserRoles {
//     Admin = 'Admin',
//     Editor ='Editor',
//     Viewer = 'Viewer'
// }






const UserRoles = {
  Admin: "ADMIN",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;







const canEdit = (role: (typeof UserRoles) [ keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};












const idEditPermissable = canEdit(UserRoles.Admin);
console.log(idEditPermissable);
