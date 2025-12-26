import { prisma } from "./lib/prisma";




async function run() {
    // const createUser = await prisma.user.create(
    //     {
    //         data:{
    //            name:"Rahedddddddddddddd",
    //            email:"rahddddde@gmail.com",
 
    //         }
    //     }

    // )

    // console.log("created user" , createUser);


    // create post for user id = 1

    // const createPost = await prisma.post.create({
    //     data:{
    //         title:"this is my post",
    //         content:"this is content",
    //         authorId: 14
    //     }
    // })
    // console.log(createPost);

//    const createProfile = await prisma.profile.create({
//   data: {
//     bio: "I am a MERN developer",
//     userId: 1
//   }
// })

// console.log(createProfile)


// const user = await prisma.user.findMany({
//     // include:{
//     //     posts:true,
//     //     profile:true
//     // }

//     select:{
//         id:true,
//         email:true,
//         posts:true,
//         profile:true
//     }

// });
// console.dir(user , {depth:Infinity});


const updateUser = await prisma.user.update({
    where:{
        id:1
    },
    data:{
        name:"Ahmed"
    }
})
console.log(updateUser);

    
}
run()