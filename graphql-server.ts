import { createServer } from 'node:http';
import { createBuiltMeshHTTPHandler } from './mesh/PROJECT1/.mesh'
try {
    const GRAPH_server = createServer(createBuiltMeshHTTPHandler());
    GRAPH_server.listen(30001);
} catch (error) { }
