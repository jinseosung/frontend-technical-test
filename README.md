# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

## Installation Guide and Usage:
1. Download the project files.
2. Run the command `npm install` in the terminal to install the necessary dependencies.
3. To start the program, enter `npm run dev` in the terminal.
4. To run the server, enter `npm run start-server` in the terminal.

   Client-side: http://localhost:3000
   
   Server-side: https://localhost:3005

## Project Introduction:
The project is built using React and Next.js, and Tailwind is used for concise and fast CSS development. Tailwind was employed for frontend architecture to design the interface and create logic to display data on the screen using static data after adding some necessary information. A page for handling errors due to server issues was built.

Considering the project's goal of creating an interface that lists all conversations and messages exchanged by a single user for SEO purposes, I found using getServerSideProps to be a suitable choice. This is particularly beneficial for pages listing conversations and messages between multiple users where the data volume is large or dynamically changing.

## Conclusion:
I needed some time to study and understand Next.js as it was my first time using it for this project. Learning a new language is always a joy for me. Unfortunately, I didn't have the opportunity to test the project, and if given more time, I would have liked to study Jest.js for testing and apply it to the project. In the end, this project has helped me improve my programming skills in a short period, and I look forward to utilizing the skills gained through this opportunity in collaboration with the Leboncoin team.