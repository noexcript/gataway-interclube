const error = (err, req, res, next) => {
    const status = res.statusCode ? res.statusCode : 500
    res.status(status)
    res.json({ message: err.message, object: null })
}

module.exports = { error }