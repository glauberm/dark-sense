# DarkSense

## Running it locally

Build and run the container:

```
docker compose up
```

Enter the `darksense_app` container:

```
docker exec -it darksense_app bash
```

Install the dependencies:

```
yarn
```

Create fake log data:

```
yarn run fake:logs
```

Run the development server:

```
yarn run dev
```

Access [localhost:3000](http://localhost:3000/).

## Building for production

From inside the `darksense_app` container, create a production build:

```
yarn run build
```

Check it served by nginx by visiting [localhost:8080](http://localhost:8080/).

## Running tests

From inside the `darksense_app` container, run the cypress test suite:

```
yarn run cy:run
```

> **Heads up!** The test suite runs against the production build, so make sure you created one before running tests.
