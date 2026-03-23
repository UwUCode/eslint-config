#!/bin/bash
set -e
git push
version=$(jq -r .version package.json)
git tag "v$version" -m ""
git push origin "v$version"
gh release create "v$version" --title "$version" --notes "" --fail-on-no-commits --verify-tag
