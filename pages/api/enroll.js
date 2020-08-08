export default (req, res) => {
  const { fullName, emailAddress } = req.body;
  console.log("Full Name: ", fullName);
  console.log("Email Address: ", emailAddress);

  res.status(200).send("");
};
