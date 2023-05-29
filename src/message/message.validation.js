import joi from "joi"

export const messageSchema = joi.object({
    message: joi.string().min(3).max(500).required(),
    messageReceiver:joi.string().hex().length(24),
})