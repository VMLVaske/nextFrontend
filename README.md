# Encode Club x Chainlink Hackathon Submission

## Table Of Contents

- [Encode Club x Chainlink Hackathon Submission](#encode-club-x-chainlink-hackathon-submission)
  * [Steps To Use This Repo](#steps-to-use-this-repo)
  * [Demo](#visit-the-vercel-demo)
  * [Presentation](#presentation)
  * [Video](#demo-video)
  * [Techstack](#techstack)
  * [MISC](#misc)

## Steps To Use This Repo 

First, git clone the repo. Then cd into the frontend folder: 

```bash
git clone 
cd frontend
```

There, install all the dependencies: 

```bash
npm install
```
After installing the dependencies, you can run the prototype with

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Visit the Vercel Demo

The frontend has been deployed to vercel for easy access of a working demo. 
Visit here: 
[Working Demo](https://next-frontend-sigma.vercel.app/)

## Presentation
The pitch presentation for the project can be found here: 
[Presentation](https://www.beautiful.ai/player/-NAACVMW5fw8h-Dx8vZf)

## Demo Video
The Video demo of the project can be found here: 
[Demo Video Pitch](https://www.loom.com/share/3ca0469c910c4f339fc8bb78d197e4af)

## Techstack
For building this app, we used ReactJs, NextJs and NextUI for the frontend parts. For the backend integration of the marketplace and the nft contracts we used Thirdweb Dashboard, as well as the Thirdweb SDK to connect everything. 

Our Dapp is running on Mumbai testnet. 

A particularly interesting tidbit is the security aspect: While the frontend parts are far from production ready, the contracts deployed via ThirdWeb are actually standardised and audited. Since they're largely based off of OpenZeppelin Standards and audited for the other parts, a high aspect of security is automatically assumed. 


### Chainlink Integration

This submissions special integration was done by Chainlink, more especially the Chainlink Data Feeds. 
In our current version, we implemented Data Feeds in such a way that the latest Matic price is displayed in the navbar. 

For future iterations we would love to figure out how to actually price our NFTs and peg them towards real life assets, like bread or beer :D 
Having a beer or bread (or both!) pegged coin circulating in a small, local community could be a fun experiment! 

## MISC
### What we learned
We learned how to build a NextJs app, how to integrate Chainlink Data Feeds and we learned how comfortable Thirdweb is when trying to rapidly prototype. 
