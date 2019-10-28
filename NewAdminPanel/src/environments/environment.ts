// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,


  //Development 

   adminServerAddresss:"http://localhost:7001/api/v1/",
   synchServerAddress:"http://localhost:3001/datasync/",
   medaiServerAddress:"http://localhost:2001/api/v1/media/",
   websiteApiServer: "http://localhost:6001/",
   searchServerAddress: "http://localhost:3301/"

 //stage  
  
 // adminServerAddresss: "http://54.204.251.56/api/v1/",
 // medaiServerAddress: "http://54.204.251.56/api/v1/media/",
 // websiteApiServer:   "http://54.204.251.56/api/v1/website/",
 // synchServerAddress: "http://54.204.251.56/datasync/",
 // searchServerAddress: "http://54.204.251.56/api/search/"


};
