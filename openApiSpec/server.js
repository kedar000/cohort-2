"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const openapispecjson_1 = require("./openapispecjson");
// import
const app = (0, express_1.default)();
const port = 3000;
let users = [
    { id: 1, name: "kedar" },
    { id: 2, name: "tarun" }
];
app.get('/users', (req, res) => {
    const { name } = req.query;
    if (name) {
        const filterdata = users.filter(user => user.name.toLowerCase());
        res.json(filterdata);
    }
    else {
        res.json({ mssg: "invalid name " });
    }
});
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapispecjson_1.openapispecJson));
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
