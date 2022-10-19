
import express, { Router } from "express";
//import { getMember, postMember } from "../api/member";

//* export default로 내보냈을 때
//import member from "../api/member"; 

//* module.exports.getMember = getMember로 내보냈을때
const member = require("../api/member"); 
//member.getMember과 member.postMember로 사용



const router: Router = express.Router();

router.get("/", member.getMember); //가져온 getMember 로직을 수행한다.
router.post("/", member.postMember); //postMember 수행

export default router;