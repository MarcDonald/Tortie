#!/usr/bin/sh

build-storybook -o .storybook-public
echo 'STORYBOOK.TORTIE.DEV' > '.storybook-public/CNAME'