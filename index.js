let userInfo = {
  username: "User1",
  password: "password123",
};
function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;
    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Login successful";
    } else if (passwordAttempt !== userInfo.password && attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }
    if (attemptCount > 3) {
      return `Account locked due to too many failed login attempts`;
    }
  };
}
createLoginTracker();

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
