import { error } from "console";

export function errorhandler(err, req, res, next) {
  res.status(500).json({ message: err.message });
}
export function validateMiddleWare(req, res, next) {
  let { firstName, lastName, password, email, contact } = req.body;

  if (!firstName || !lastName) {
    console.log("firstName and lastName are required");
    throw new Error("firstName and lastName are required");
  }
  if (
    firstName[0] !== firstName[0].toUpperCase() ||
    lastName[0] !== lastName[0].toUpperCase()
  ) {
    console.log(
      "First letter of first name and last name must be capitalized."
    );
    throw new Error(
      "First letter of first name and last name must be capitalized."
    );
  }
  const passwordRegex =
    /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    console.log(
      "Password must contain at least one special character, one uppercase letter, one numeric character, and be at least 8 characters long."
    );
    throw new Error(
      "Password must contain at least one special character, one uppercase letter, one numeric character, and be at least 8 characters long."
    );
  }
  if (!email.includes("@")) {
    console.log('Email must contain an "@" symbol.');
    throw new Error('Email must contain an "@" symbol.');
  }
  if (!contact || contact.length < 10) {
    console.log("Phone number must be at least 10 digits long.");

    throw new Error("Phone number must be at least 10 digits long.");
  }

  next();
}