import { useSession, signOut, } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
const Profile = () => {
  const { data: session } = useSession();


  const user_stats = `https://github-readme-stats.vercel.app/api?username=${session?.user?.github_username}`;
const lang_stats=`https://github-readme-stats.vercel.app/api/top-langs/?username=${session?.user?.github_username}`;
const contri_stats=`https://github-readme-activity-graph.vercel.app/graph?username=${session?.user?.github_username}&theme=github-compact`;
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>

      <h1 className="text-6xl text-center   font-bold mb-4">
        onprogress
      </h1>
      <div className="mx-auto p-10  min-h-screen ">
        {session?.user ? (
          <>
            <div className="text-center">

              <img
                src={session.user.image || "default-profile-image-url"}
                alt="Profile"
                className="rounded-full mx-auto mb-4 w-1/3"
                width={100}
                height={100}
              />

              <h1 className="text-3xl  mb-4">
                Looking good , {session.user.name}!
              </h1>
              {/* Add more profile information as needed */}

              <button onClick={handleSignOut} className=" mt-7 text-3xl text-center rounded-lg w-1/6 bg-slate-800 hover:bg-black">


                <span className=" text-xl  text-center  text-white">
                  Sign Out
                </span>

              </button>

          <div className=" mt-10 grid  gap-2 grid-cols-2  ">
              <img src={user_stats} className=" my-auto "
                alt="Profile"
              />
               <img src={lang_stats}
                alt="Profile"
              />

            
              </div>
              <img src={contri_stats}
                alt="Profile"
              />

            </div>
          </>
        ) : (
          <>
            {" "}
            <img
              src="/img/logo.png"
              width={200}
              height={200}
              className="object-contain mx-auto "
            />
          </>
        )}

      </div>
    </>
  );
};

export default Profile;
