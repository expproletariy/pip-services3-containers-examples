#!/usr/bin/env pwsh

if (Test-Path "dist") {
    try {
        aws --version
    } catch {
        Write-Output "To deploy your lambda you need to install and configure aws cli"
        exit 1
    }
    cd ./dist
    aws lambda update-function-code --function-name test --zip-file fileb://lambda.zip
} else {
    Write-Output "To deploy your lambda first pack application with pack_lambda.ps1"
}

