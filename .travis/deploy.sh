npm config set "@process-creative:registry" "https://npm.pkg.github.com/" --global
echo "registry=https://npm.pkg.github.com/" > ".npmrc"
echo "//npm.pkg.github.com/:_authToken=${GH_TOKEN}" > ".npmrc"
npm publish