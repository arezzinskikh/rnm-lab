import "./config/mongodbConfig";
import server from "./config/serverConfig";
import './config/socketIOConfig';

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
