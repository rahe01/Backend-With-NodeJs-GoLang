import app from "./app";
import config from "./config";
import initDB from "./config/db";

const port = config.port;




const stratServer = async () => {
  try {
    await initDB();
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (error: any) {
    console.log("Server faild", error.message);
    process.exit(1);
  }
};


stratServer();
