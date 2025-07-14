export const errorMiddleware =(err, res, req,next)=>{
    err.statusCode = statusCode || 500;
    err.message = err.message ||"all field are required"

    res.status(err.statusCode).json(
        {
            success: false,
            message: err.message
        }
    )
}