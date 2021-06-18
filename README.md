# build the image
docker build -t first-dockerfile -f Dockerfile1 .
# list image
docker images
# run the image
docker run -it -d first-dockerfile
# use exec for interaction
docker exec -it f1edbfca3eac bash


