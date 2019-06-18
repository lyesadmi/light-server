const sendJsonResponse = (res, statusCode, message) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(message));
}

export function sampleRequest(req, res) {
    const response = {
        "msg": "Hello"
    };
    sendJsonResponse(res, 200, response);
}