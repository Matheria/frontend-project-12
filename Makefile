install:
	npm ci

start-frontend:
	make -C hexlet-chat start

start-backend:
	npx start-server

start:
	make start-backend

develop:
	make start-backend & make start-frontend

build:
	rm -rf hexlet-chat/build
	npm run build