import joi from "joi"

import { CreateUserData } from "../services/authServices"

export const authSchema = joi.object<CreateUserData>({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
})