exports.categoriesData = async (req, res, next) => {
  try {
    res.status(200).json({ status: "success", message: "Email has been send",data: {} });
  } catch (error) {
    res.status(400).json({ status: "error", error: error.message });
  }
};
