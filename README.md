# rule34-downloader
Downloads rule34 images using the r34.app API

# Supported domains
- rule34.xxx
- rule34.paheal.net
- danbooru.donmai.us
- gelbooru.com
- e621.net
- safebooru.org
- e926.net

# Setup
## Requirements
- Node.Js (https://nodejs.org)

## Installing depencies
- Download the the source and open a terminal inside of that folder.
- Type ``npm install``
- Wait for it to finish and the depencies are installed.

## Running
To run you type ``node . domain amount tags``.
- domain is the domain it downloads from, see Supported domains for domains available.
- amount is the number of images you want, can be 100 or less.
- tags are the tags you want to search for, example: cat_ears fox_tail.

## Downloads
Downloads are in the **out** folder, you can find all downloaded images there. Some may not work, most will.
If you get a timeout error dont worry, just restart it and it'll work.
