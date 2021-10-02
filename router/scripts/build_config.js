const fs = require('fs');
const config = require('./config.json');
const { exit } = require('process');

const NGINX_CONFIG_FILE_NAME = 'default.conf';
const SUCCESS_LOG_COLOR = '\x1b[32m';
const INFO_LOG_COLOR = '\x1b[36m';
const ERROR_LOG_COLOR = '\x1b[31m';
const DEFAULT_LOG_COLOR = '\x1b[0m';

buildNGINXConfig();

function buildNGINXConfig() {
  console.log(INFO_LOG_COLOR, '---> Building NGINX config...');
  console.log(DEFAULT_LOG_COLOR);
  fs.writeFile(NGINX_CONFIG_FILE_NAME, renderConfigContent(config), function (error) {
    if (error) {
      console.log(ERROR_LOG_COLOR, '---> Failed to build NGINX config:');
      console.error(error);
      exit(1);
    }

    console.log(SUCCESS_LOG_COLOR, '---> NGINX config file built successfully.');
    console.log(DEFAULT_LOG_COLOR);
  });
}

function renderConfigContent(config) {
  const upstreams = [];
  const clientLocations = [];
  const apiLocations = [];

  Object.keys(config['apis']).forEach((api) => {
    upstreams.push(buildApiUpstream(api));

    config['apis'][api]['routes'].forEach((route) => {
      apiLocations.push(buildApiLocation(route, api));
    });
  });

  Object.keys(config['clients']).forEach((client) => {
    upstreams.push(buildClientUpstream(client));

    config['clients'][client]['routes'].forEach((route) => {
      clientLocations.push(buildClientLocation(route, client));
    });
  });

  return joinProps(upstreams, clientLocations, apiLocations);
}

function buildApiUpstream(apiName) {
  return `
upstream ${apiName}-api {
  server ${apiName}-api:${process.env[`${apiName.toUpperCase()}_API_PORT`]};
}
      `;
}

function buildClientUpstream(clientName) {
  return `
upstream ${clientName}-client {
  server ${clientName}-client:${process.env[`${clientName.toUpperCase()}_CLIENT_PORT`]};
}
      `;
}

function buildApiLocation(route, apiName) {
  return `
  location /api/${route} {
    rewrite /api/(.*) /$1 break;
    proxy_pass http://${apiName}-api;
  }
      `;
}
function buildClientLocation(route, clientName) {
  return `
  location ${route} {
    proxy_pass http://${clientName}-client;
  }
  
  location /sockjs-node {
    proxy_pass http://${clientName}-client;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
  }
      `;
}

function joinProps(upstreams, clientLocations, apiLocations) {
  return `
${upstreams.join('')}
server {

  listen 80;
  
  ${clientLocations.join('')}
    
  ${apiLocations.join('')}
}
      `;
}
