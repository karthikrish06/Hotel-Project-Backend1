export const createError = (req, message) => {
    const err = new Error();
    err.status = req,
    err.message = message
    return err;
};
