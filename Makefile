.PHONY: install build start dev test count-loc

install:
	npm install

build:
	npm run build

start:
	npm run start

dev:
	npm run dev

test:
	node scripts/run-tests.js

count-loc:
	node scripts/count-loc.js
