class ErrorHandle extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }
}

export const errorHandle = ErrorHandle