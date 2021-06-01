#!/usr/bin/env pwsh
if (Test-Path "tmp") {
    Remove-Item -Recurse -Force -Path "tmp"
}
New-Item -ItemType Directory -Force -Path "tmp"
New-Item -ItemType Directory -Force -Path "tmp/config"
Copy-Item ./config/config_lambda.yml ./tmp/config/config.yml
Copy-Item -Recurse ./node_modules ./tmp/node_modules
Copy-Item -Recurse ./obj/src ./tmp/src
Copy-Item ./package.json ./tmp/package.json
Copy-Item ./bin/lambda.js ./tmp/index.js

if (Test-Path "dist") {
    Remove-Item -Recurse -Force -Path "dist"
}
New-Item -ItemType Directory -Force -Path "dist"
cd ./tmp
zip -r9 ../dist/lambda.zip *
cd ../
Remove-Item -Recurse -Force -Path "tmp"

