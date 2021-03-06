#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_build_files() {
  git remote add gh-pages https://${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git > /dev/null 2>&1
  git checkout develop
  git add -f out/
  git commit -m "Deploy WW-Tech to Github Pages"  -m "[skip ci]"
}

push_commit() {
  git push origin :master
  git subtree push --prefix out gh-pages master
}

setup_git
commit_build_files

if [ $? -eq 0 ]; then
  echo "Commiting new static files for WW-Tech site"
  push_commit
else
  echo "No changes in static files. Nothing to do"
fi