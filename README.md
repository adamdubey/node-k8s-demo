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

## Technologies & Frameworks

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Travis CI](https://travis-ci.org/dashboard)
- [Kubernetes](https://kubernetes.io/)
