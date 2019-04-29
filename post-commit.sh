#!/bin/sh
echo
if [ -a .commit ]
    then
    rm .commit
    git add report.json
    git commit --amend -C HEAD --no-verify
fi
exit