const fs = require('fs');

const COMPONENT_NAME = process.argv[2];

const COMPONENT_DIR = 'src/components';
const COMPONENT_DATA = name => `import React from 'react';\n\nconst ${name} = () => {\n\n}\n\nexport default ${name};`;
const COMPONENT_INDEX = name => `export { default } from './${name}';`

const createFolder = async name => {
    !fs.existsSync(`${COMPONENT_DIR}/${name}`) && fs.mkdirSync(`${COMPONENT_DIR}/${name}`);
}

const createComponent = async (path, name) => {
    fs.writeFileSync(`${COMPONENT_DIR}/${path}/${name}.js`, COMPONENT_DATA(name));
}

const createIndex = async (path, name) => {
    fs.writeFileSync(`${COMPONENT_DIR}/${path}/index.js`, COMPONENT_INDEX(name));
}

const start = async name => {
    const paths = name.split("/");
    const componentName = paths[paths.length-1];
    try{
        let path = '';
        for(let i=0; i<paths.length; i++){
            path += paths[i] + "/";
            await createFolder(path);
        }
        createComponent(path,componentName);
        createIndex(path,componentName);
    }catch(err){
        console.log(err);
    }
}

start(COMPONENT_NAME);