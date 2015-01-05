compile:
	coffee --compile --output lib src

.PHONY: compile

test: compile
	mocha

package: test
	npm pack
