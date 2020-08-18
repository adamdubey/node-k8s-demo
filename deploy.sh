# build and tag image
docker build -t jigglybytez/node-k8s-demo:latest -t jigglybytez/node-k8s-demo:$SHA -f ./server/Dockerfile ./server

# push image to docker hub
# two tags to ensure image is always up to date
docker push jigglybytez/node-k8s-demo:latest
docker push jigglybytez/node-k8s-demo:$SHA

# apply all configs in the k8s dir
kubectl apply -f k8s

# imperatively set latest image on each deployment
kubectl set image deployments/server-deployment server=jigglybytez/node-k8s-demo:$SHA
