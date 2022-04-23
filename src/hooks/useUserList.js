import { useEffect, useState } from "react";

const useUserList = () => {
  //set data in services
  const [allUsers, setallUsers] = useState([]);
  //fetch data from fajedb json file
  useEffect(() => {
    fetch("https://bankappsolution.herokuapp.com/userListAll")
      .then((response) => response.json())
      .then((data) => setallUsers(data));
  }, []);

  return [allUsers, setallUsers];
};

export default useUserList;
