FROM nginx:latest

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION v22.14.0

# Install system dependencies
RUN apt-get update \
    && apt-get install -y \
        libgtk2.0-0 \
        libgtk-3-0 \
        libgbm-dev \
        libnotify-dev \
        libnss3 \
        libxss1 \
        libasound2 \
        libxtst6 \
        xauth \
        xvfb \
        curl \
        unzip \
        bzip2 \
        git \
        nano \
    && rm -rf \
        /var/lib/apt/lists/*

# Configure nginx
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf

# Install NVM
RUN mkdir -p $NVM_DIR && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    npm install -g corepack

# Add NVM directory to nginx user
ENV NVM_DIR /usr/local/nvm
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Copy the current directory contents into the container
COPY . /var/www/html

# Set working directory
WORKDIR /var/www/html
