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

### Ansible Playbook

```bash
ansible-playbook playbook.yml
```

### Run the ansible playbook in EC2 instance

1. Create an EC2 instance and SSH into it.
2. Install Ansible on the EC2 instance.
3. Install Docker on the EC2 instance.
4. Copy the `playbook.yml` file to the EC2 instance.
5. Run the Ansible playbook to deploy the application.

```bash
ansible-playbook playbook.yml
```
