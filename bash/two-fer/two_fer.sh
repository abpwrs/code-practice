#!/usr/bin/env bash
# Author: "abpwrs"
# Date: 20190417

# args:
# 1 --
# 2 --

name='you'
if [[ $# -eq 1 ]]; then
    name=$1
fi

echo "One for $name, one for me."

