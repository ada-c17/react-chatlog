## Baseline

Examine the JSON file located at `src/data/messages.json` to familiarize yourself with the data you will be using.

**Now consider the following:**
- What properties comprise an individual chat message?
- ---id, sender, body, timestamp, liked
- What are their data types?
- ---id=int; sender, body, timestamp=string; liked=boolean
- How are the chat messages organized?
- ---By id
- Are they sorted in a particular way?

After considering the data, you should begin to explore how React components might be used to transform that data into a static chat log web page. 

Specifically, what components will be needed? 
---chat bubble as overall component, made up of sender component (or including the sender), body component, timestamp note (which could instead be a sub part of the body), and the like icon

Are any of the components nested within another component? 
--- Hmm, body, timestamp, and like could be nested within a bubble component, and then bubble plus sender could be each message

Are there any components which appear on the page multiple times?
---Hmm, they all appear multiple times. The like button is the same every time, but it changes the state of the specific chat bubble it is on. All message components appear multiple times.

Next, link the data to the components. Take a look at the JSON file again. Each piece of data (e.g. a string or date) will be used through the `props` for a particular component, so try to match the correct component for every piece of data in the JSON file. Keep in mind that components can use multiple pieces of data.

Now, examine the components inside `src/components` to familiarize yourself with the components listed inside.

- ChatLog: holds chat entries 
- - Chat Entry: holds sender, body, timestamp, and liked info
- - - Timestamp: holds timestamp

Once you've identified which data will be used by which components, consider the structure of the data. Which pieces of data are grouped together into data structures? This is often a sign that those pieces of data will be used by the same component. Are there any nested data structures? This is usually a sign that components should be nested as well, with the more deeply nested components using the more deeply nested data.

Finally, after analyzing the provided data and designing a set of components and their relationships to the data, you should write down your proposed design.


Consider discussing your design with a classmate. Is their design different from yours? If so, discuss the reasoning for each of yours designs and determine any possible pros/cons for both approaches.

## Setup

After forking and cloning this repo you must run `yarn install` in the project directory. This will download and install all of the necessary node modules required by the project. After that finishes successfully, run `yarn start` to begin the local development server.

