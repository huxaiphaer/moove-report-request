# Moove Request  frontend.

## Project setup
```
npm install
```


Then add, a `.env` file with the base URL of the backend `http://0.0.0.0:8070/api/v1/`.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### unit tests
```
npm run test:unit
```

## Run app with Docker.

Alternatively, you can run the whole project with docket

### Build docker image
```
docker build -t report-request .
```

### Run docker image
```
docker run -it -p 8080:80 --rm --name report-request-app report-request

```

Access the web application via :

```
 http:localhost:8080/
```


### Contributors

* [Lutaaya Idris](https://github.com/huxaiphaer)
