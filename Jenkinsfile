pipeline {
    agent any

    environment {
        IMAGE = 'aniket526/devops-training:latest'
    }

    stages {
        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
            }
        }

        stage('Pull Image') {
            steps {
                sh 'docker pull $IMAGE'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d --name devops-training --rm -p 3000:3000 $IMAGE'
            }
        }
        
    }
}

