# # Define variables
# IMAGE_NAME = gp-tracking-service
# DOCKER_USERNAME = danielbedrack
# REPOSITORY_NAME = gp-tracking-image
# TAG = latest

# # Build the Docker image
# build:
# 	docker build -t $(IMAGE_NAME) .

# # Tag the Docker image
# tag:
# 	docker tag $(IMAGE_NAME) $(DOCKER_USERNAME)/$(REPOSITORY_NAME):$(TAG)

# # Push the Docker image to Docker Hub
# push:
# 	docker push $(DOCKER_USERNAME)/$(REPOSITORY_NAME):$(TAG)

# # Full process: build, tag, and push
# all: build tag push

# FOR DOCKER HUB ############