REPORTER = spec

test:
	@./node_modules/.bin/mocha \
	--reporter $(REPORTER) \
	--ui tdd \
	test/*.js

test-all: test

.PHONY: test-all
