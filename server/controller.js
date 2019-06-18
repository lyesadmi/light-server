import { createServer } from 'http';
import { parse } from 'url';
import * as services from './services';

const send404 = (res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "msg": "lost" }));
}

export const server = createServer((req, res) => {
    const reqUrl = parse(req.url, true);
    if (reqUrl.pathname == '/' && req.method === 'GET') {
        services.sampleGetRequest(req, res);
    } else if (reqUrl.pathname == '/post' && req.method === 'POST') {
        services.samplePostRequest(req, res);
    } else {
        send404(res);
    }
});