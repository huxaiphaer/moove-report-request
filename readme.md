# Moove Request  frontend.

## Project setup
```
npm install
```

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

### Build docker image
```
docker build -t report-request .
```

### Run docker image
```
docker run -it -p 8080:80 --rm --name report-request-app report-request

```
