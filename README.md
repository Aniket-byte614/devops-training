# devops-training

Using pipeline to automate deployment after a single commit

## Build and publish the image into Docker Hub

### First of all clone the repository

```bash
git clone git@github.com:aniket526/devops-training.git
```

### Change the directory to devops-training

```bash
cd devops-training
```

### Login to Docker Hub

```bash
docker login
```

### Build the Docker image

```bash
docker build -t aniket526/devops-training:latest .
docker push aniket526/devops-training:latest
```

### Docker run the image

```bash
docker run -d -p 3000:3000 aniket526/devops-training:latest
```
