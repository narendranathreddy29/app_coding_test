#!/bin/bash

# Get the current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Build the Docker image
docker build -t app_coding_test "$DIR"

# Run the Docker image
docker run -p 5000:5000 app_coding_test

# Run the Docker image in Detached mode
docker run -d -p 5000:5000 app_coding_test