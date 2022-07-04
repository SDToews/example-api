
```
docker run --name tutorial -p 3306:3306 -e MYSQL_ROOT_PASSWORD=pword -d mysql:8.0.29
```
# Nestjs architecture
## main.ts
- entrypoint for application
## Modules
- main routes of api
- allows for separation of concern
### app.module
- root module
- all other modules are imported to app.module
- no code goes into app.module
## Controllers
- handles requests and responses
## Services
- handles logic
- interacts with data repository
