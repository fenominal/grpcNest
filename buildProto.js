const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const protoBasePath = 'libs/assetes/src/protos';

// Get all service directories
const services = fs.readdirSync(protoBasePath).filter(svc => 
    fs.statSync(path.join(protoBasePath, svc)).isDirectory()
);

services.forEach(service => {
    const protoPath = path.join(protoBasePath, service, `${service}.proto`);
    if (fs.existsSync(protoPath)) {
        const command = `npx protoc --proto_path=${path.join(protoBasePath, service)} \
            --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts_proto \
            --ts_proto_out=${path.join(protoBasePath, service)} \
            ${protoPath}`;
        

        const string = `npx protoc --plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts_proto -I=${protoBasePath} --ts_proto_out=${path.join(protoBasePath)}  --ts_proto_opt=nestJs=true --ts_proto_opt=fileSuffix=.pb --ts_proto_opt=exportCommonSymbols=false --ts_proto_opt=addNestjsRestParameter=true --ts_proto_opt=nestJs=true --ts_proto_opt=addGrpcMetadata=true --experimental_allow_proto3_optional --ts_proto_opt=snakeToCamel=false ${protoPath} `
        try {
            execSync(string, { stdio: 'inherit' });
            console.log(`Successfully generated pb.ts for ${service}`);
        } catch (error) {
            console.error(`Error generating pb.ts for ${service}:`, error.message);
        }

        // Create index.ts file
        const indexTsContent = `import { join } from 'path';\nimport * as pb from './${service}.pb';\nexport const ${service.toUpperCase()}_PROTO = {\n  pb,\n  libIncludeDirs: 'libs/assets/src/proto',\n  protoPath: join(\n    '/libs/assets/src/proto',\n    '${service}',\n    '${service}.proto',\n  ),\n};\n`;
        fs.writeFileSync(path.join(protoBasePath, service, 'index.ts'), indexTsContent);
        console.log(`index.ts created for ${service}`);
    } else {
        console.warn(`Skipping ${service}, ${service}.proto file not found.`);
    }
});
