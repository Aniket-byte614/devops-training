# devops-training

Using pipeline to automate deployment after a single commit

## Build and publish the image into Docker Hub

### First of all login to Docker Hub

```bash
docker login
```

### Build the Docker image

```bash
docker build -t aniket526/devops-training:latest .
docker push aniket526/devops-training:latest
```
