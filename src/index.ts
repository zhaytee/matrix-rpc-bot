// Order matters here
global.Olm = require("olm");
import * as matrix from "matrix-js-sdk";
import "source-map-support/register";
import { startServer } from "./grpc_server";

startServer();
