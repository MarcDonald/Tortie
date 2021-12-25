#!/usr/bin/sh

build-storybook -o .storybook-public
echo 'TORTIE.MARCDONALD.COM' > '.storybook-public/CNAME'