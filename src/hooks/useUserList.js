import { useEffect, useState } from "react";

const useUserList = () => {
  //set data in services
  const [allUsers, setallUsers] = useState([]);
  //fetch data from fajedb json file
  useEffect(() => {
    fetch("http://localhost:5000/userListAll")
      .then((response) => response.json())
      .then((data) => setallUsers(data));
  }, []);

  return [allUsers, setallUsers];
};

export default useUserList;
