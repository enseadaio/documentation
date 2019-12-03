#!/usr/bin/env sh

# abort on errors
set -e

npm run build

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:enseadaio/documentation.git master:gh-pages

cd -