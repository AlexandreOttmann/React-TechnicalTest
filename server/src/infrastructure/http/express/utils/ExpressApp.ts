import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

export default class ExpressApp {
  constructor(private readonly app: Express) {}

  public launch() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const swaggerDocument = YAML.load("./swagger.yaml");
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      swaggerUi.setup(swaggerDocument)
    );

    const port = this.normalizePort(process.env.PORT || "3000");
    this.app.set("port", port);

    this.app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  }

  private normalizePort(val: string) {
    const portNumber = parseInt(val, 10);

    if (Number.isNaN(portNumber)) {
      // named pipe
      return val;
    }

    if (portNumber >= 0) {
      // portNumber number
      return portNumber;
    }

    return 3000;
  }
}
