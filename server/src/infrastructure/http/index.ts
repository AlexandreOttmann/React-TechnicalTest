import app from "./express";
import ExpressApp from "./express/utils/ExpressApp";

const expressApp = new ExpressApp(app);

expressApp.launch();
