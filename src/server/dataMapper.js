import client from "./connection";

const dataMapper = {
  async getAllData() {
    const query = `SELECT * FROM items`;
    const result = await client.query(query);
    return result.rows;
  },
};

export default dataMapper;
