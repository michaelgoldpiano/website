# Author: Michael Gold
# Created: 8/15/2023
# Purpose: Serves node website.

# Redirect http
server {
	listen 80;
	listen [::]:80;
	server_name michaelgoldpiano.com www.michaelgoldpiano.com;

	# Cerbot certificate renewal
	location /.well-known/acme-challenge {
		root /var/www/html;
	}

	# Redirect to https://www
	location / {
		return 301 https://www.michaelgoldpiano.com$request_uri;
	}
}

# Redirect non-www https
server {
	listen 443 ssl;
	listen [::]:443 ssl;
	server_name michaelgoldpiano.com;

	# SSL certificate
	ssl_certificate /etc/letsencrypt/live/www.michaelgoldpiano.com/fullchain.pem; # managed by Certbot
	ssl_certificate_key /etc/letsencrypt/live/www.michaelgoldpiano.com/privkey.pem; # managed by Certbot
	include /etc/letsencrypt/options-ssl-nginx.conf;  # managed by Certbot
	ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;  # managed by Certbot

	# Redirect to https://www
	location / {
		return 301 https://www.michaelgoldpiano.com$request_uri;
	}
}

# Serve content
server {
	listen 443 ssl;
	listen [::]:443 ssl;
	server_name www.michaelgoldpiano.com;

	# SSL certificate
	ssl_certificate /etc/letsencrypt/live/www.michaelgoldpiano.com/fullchain.pem; # managed by Certbot
	ssl_certificate_key /etc/letsencrypt/live/www.michaelgoldpiano.com/privkey.pem; # managed by Certbot
	include /etc/letsencrypt/options-ssl-nginx.conf;  # managed by Certbot
	ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;  # managed by Certbot

	# Server
	location / {
		proxy_pass http://localhost:4000;
	}
}
