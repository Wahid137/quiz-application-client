const useAdmin = (email) => {
  let isAdmin = false; // Initialize isAdmin to false by default

  if (email === "wahidahmed5037@gmail.com") {
    isAdmin = true; // Set isAdmin to true if the user's email matches
  }
  return [isAdmin];
};
export default useAdmin;
