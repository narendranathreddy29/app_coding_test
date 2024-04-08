This app exposes a REST API

Steps to use the app;
1. Clone the repo
2. RUN "npm i"
3. RUN "npm run serve"
4. Navigate to "http://localhost:5000"


To run the app as a Docker container
1. Build the Docker Image with the DockerFile provided using the command "_docker build -t app_coding_test ._" (The image is created with the name "_app_coding_test_")
2. Run the Docker Image "_app_coding_test_" with "_docker run -d -p 5000:5000 app_coding_test_"
