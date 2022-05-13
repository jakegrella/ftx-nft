# FTX NFT

This project utilizes endpoints from the FTX API related to NFTs. This site allows a user to view collections of NFTs on multiple different blockchains.

KNOWN ISSUE: As of May 13, there is a CORS error that blocks access to the API. I believe this to be a server-side issue that I cannot remedy from the frontend. Throughout development I utilized the CORS Changer Chrome Extension in order to access API data, and anyone trying to access the deployed site will likely have to do the same.

# Technlogies Used

### JavaScript Library: React

React is my frontend library of choice. I enjoy developing in React, mostly because it's what I know best and use most often.

### State Management: Zustand

I chose to use Zustand because this is such a small project. I've only used this library once before, but I love using it for concept projects where the most important thing is efficiency. Zustand is extremely lightweight and works well for these types of use cases.

### Style: SCSS

I enjoy SCSS because of the nesting capabilities. Until CSS fully implements this, I think SCSS is where I'll be.

### Testing: React Testing Library

This repository is severely lacking sufficient testing, but I'm happy testing with React Testing Library. I think it allows the developer to write tests in a way that better resembles what a human sees or interacts with on the screen than when using Enzyme.
