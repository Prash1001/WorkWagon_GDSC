import React, { useState, useEffect } from "react";
import Footerlabour from "../Components/Footerlabour";
import { Card, Typography } from "@material-tailwind/react";
import Navlabour from "../Components/Navlabour";
import img1 from "../assets/profile-pic-2.png";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

function TableWithStripedColumns() {
  return (
    <div className="bg-blue-100 p-2 pb-4">
      <Card className="h-full sm:w-full md:w-4/5 overflow-scroll md:overflow-hidden py-3 mx-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("/api/v1/User");
      console.log(response);

      if (response.ok) {
        const users = await response.json();
        console.log(users);
        // For simplicity, assuming the last user in the array
        const latestUser = users[users.length - 1];

        // Extract only the required fields from the user data
        const { name, uin, location } = latestUser;

        setUserProfile({ name, uin, location });
      } else {
        console.error("Error fetching user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  }

  return (
    <>
      <Navlabour />
      <div className="bg-blue-100 p-4 sm:p-6 lg:p-8">
        {userProfile && (
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8 mx-auto max-w-3xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href={img1}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden"
              >
                <img
                  src={img1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-semibold">Name: {userProfile.name}</h2>
                <p className="text-gray-700 text-base">
                  Unique Identification No: {userProfile.uin}
                </p>
                <p className="text-gray-700 text-base">Location: {userProfile.location}</p>
              </div>
            </div>
          </div>
        )}
        {/* Display the user table */}
        <TableWithStripedColumns />
      </div>
      <Footerlabour />
    </>
  );
};

export default Profile;
