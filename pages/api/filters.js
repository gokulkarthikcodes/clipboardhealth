// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from "../../data/filters.json";

export default (req, res) => {
  res.status(200).json(filters)
};
