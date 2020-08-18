# node-k8s-demo

Technical collaboration exercise.

## Quick Start

1. Clone the project repo locally:

```
git clone https://github.com/adamdubey/node-k8s-demo.git
```

2. Install package dependencies:

```
cd
npm install
```

3. Start the backend server:

```
npm run start
```

4. Test the API endpoint:

```
# in Browser, goto localhost:5000/api/automate
# in Postman, perform GET request to localhost:5000
```

## Testing Kubernetes via localhost

NOTE: If you are using OS X, please ensure you follow these steps to enable the `hyperkit` driver.

```
brew install hyperkit
minikube start --driver=hyperkit
minikube config set driver hyperkit
```

To spin up a local k8s cluster of this application:

```
kubectl apply -f server-deployment.yaml
kubectl apply -f server-service.yaml
kubectl apply -f server-node-port.yaml
# in browser, goto <minikube-IP>:31515/api/automate
```

## Deployments

This is handled in two phases, with the first phase being entirely depending upon the CI Service. To get started, simply make a new branch, make some changes, push and open a new PR. Upon opening this PR, the CI Service will begin to build a "test" containerized application build, and additionally perform testing. If all the tests pass, then the PR can be merged...

...Which initiates phase two, the full end-to-end CI/CD pipeline workflow, in which the application will be built in a containerized fashion, tests will be executed against the build, and if everything passes, then the containerized build artifact will be pushed up to Docker Hub. Within the CI Service config file, there is a callout to a `deploy.sh` script, which handles tagging the build with the corresponding Git SHA, as well as invoke `kubectl` inside of GCP to begin constructing the production Kubernetes cluster with the containerized application build artifact.

Available routes for testing:

```
/api/automate   # returns a message and timestamp
/api/status     # a "pretend" status-check
/api/ping       # Pong!
```

## Technologies & Frameworks

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Travis CI](https://travis-ci.org/dashboard)
- [Kubernetes](https://kubernetes.io/)
- [Google Cloud](https://console.cloud.google.com)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
