import express from "express"
import routes from "./router";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controller/userController";

const userRouter = express.Router();

const userRouter = express.Router();

export default userRouter;

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;