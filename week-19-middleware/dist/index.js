"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let requestcount = 0;
function middleware(req, res, next) {
    requestcount++;
    next();
}
app.use(middleware);
app.get("/", (req, res) => {
    res.send("hello kedar");
});
app.post("/requestcount", (req, res) => {
    res.json({
        mssg: requestcount
    });
});
console.log("server is running");
app.listen(3000);
