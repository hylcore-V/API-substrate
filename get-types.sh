#!/bin/bash
# this script is used to parse substrate node types into a JSON file.
# this should only be used on a local node
curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933 > ./plasm.json