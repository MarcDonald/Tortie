#!/usr/bin/sh

yarn run build-storybook
storybook-to-ghpages --existing-output-dir=.storybook-public --branch=storybook-deploy