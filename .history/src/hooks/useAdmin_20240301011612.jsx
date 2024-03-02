const useAdmin = (email) => {
  let isAdmin = false;

  if (email === "wahidahmed5037@gmail.com") {
    isAdmin = true;
  }

  return [isAdmin];
};
export default useAdmin;
