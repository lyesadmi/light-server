const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3010;

import { server } from './controller';

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});