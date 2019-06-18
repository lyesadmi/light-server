const sendJsonResponse = (res, statusCode, message) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(message));
}

export const sampleGetRequest = (req, res) => {
    const response = {
        "msg": "Hello"
    };
    sendJsonResponse(res, 200, response);
}

export const samplePostRequest = (req, res) => {
    let body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        const jsonBody = JSON.parse(body);
        const response = {
            "bodySent": jsonBody
        }
        sendJsonResponse(res, 200, response);
    });
}