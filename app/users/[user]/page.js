'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams for route parameters

const User = () => {
  const params = useParams(); // Unwrap params using useParams()
  const user = params?.user; // Get the GitHub username
  console.log(user);
  
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  async function findUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    if (user) {
      findUser();
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : userData ? (
        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <img
            src={userData.avatar_url}
            alt={userData.name}
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
          />
          <h1 className="text-2xl font-bold mt-4">{userData.name}</h1>
          <a
            href={userData.html_url}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            @{userData.login}
          </a>
          <p className="mt-2 text-gray-300">{userData.bio || "No bio available"}</p>

          <div className="flex justify-center gap-4 mt-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-bold">{userData.public_repos}</h2>
              <p className="text-sm text-gray-400">Repositories</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-bold">{userData.followers}</h2>
              <p className="text-sm text-gray-400">Followers</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-bold">{userData.following}</h2>
              <p className="text-sm text-gray-400">Following</p>
            </div>
          </div>

          <p className="mt-4 text-gray-400">
            📍 {userData.location || "Location not available"} | 🗓️ Joined {new Date(userData.created_at).toDateString()}
          </p>
        </div>
      ) : (
        <div className="text-gray-400">Loading...</div>
      )}
    </div>
  );
};

export default User;






// 'use client'
// import { useEffect, useState } from "react";

// const User = ({ params }) => {
//   const { user } = params; // Get the GitHub username from the params
//   const [userData, setUserData] = useState(null); // State to store user data
//   const [error, setError] = useState(null); // State to store errors

//   async function findUser() {
//     try {
//       const response = await fetch(https://api.github.com/users/${user});
      
//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error("User not found");
//       }
      
//       const data = await response.json();
//       setUserData(data); // Set user data to state
//     } catch (err) {
//       setError(err.message); // If error occurs, set the error state
//     }
//   }

//   useEffect(() => {
//     findUser(); // Fetch user data on component mount
//   }, [user]); // Dependency array will trigger on user change

//   return (
//     <div>
//       {error ? (
//         <div>{error}</div> // Display error if any
//       ) : userData ? (
//         <div>
//           <h1>{userData.name}</h1>
//           <p>{userData.bio}</p>
//           <img src={userData.avatar_url} alt={userData.name} width={100} />
//         </div>
//       ) : (
//         <div>Loading...</div> // Show loading until data is fetched
//       )}
//     </div>
//   );
// };

// export default User;