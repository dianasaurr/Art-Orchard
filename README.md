# Art Orchard
<!-- Include title, team members, summary image, abstract, link to paper, running instructions for the software and other optional materials -->
Darius Bopp (dbopp), Diana Nguyen (nguyend)

![Summary Image](/imgs/Summary.PNG)

## Abstract
Art museums can be intimidating to walk through. Visitors are surrounded by hundreds of beautiful and unique artworks laid out in groups of cultures or mediums. The divide between groupings of art makes it difficult to imagine how art could potentially be connected by human nature. 

How is artwork connected through cultures and mediums? How are artists influenced throughout history? What inspirations did artists have? These are all questions that Art Orchard strives to answer. More specifically, Art Orchard aims to show connections between art from the Metropolitan Museum of Art (MET) and the Rijksmuseum, using a graph structure based on a similarity algorithm. To further motivate exploration of similar artwork, Art Orchard provides a WikiRace format to find pairs of similar artwork.

[Paper linked here](/final/Art_Orchard.pdf)

[Video linked here](https://youtu.be/m1fzM5I5ebw)

## Running instructions
- Navigate to inside the main folder, at the same level as `index.html`
- run `python -m http.server`
- navigate to localhost:8000 in your prefered browser

## Contributions
<!-- a breakdown of how the work was split among group members -->
We worked together to come up with the idea and research the tools/libraries needed to create this visualization. The basic visualization layout was created by Diana. Darius did most of the web development, including styling, integrating the dataset, and creating the game. Diana assisted in recommending designs, found viable start/end pairs for the ArtRace game, and maintained the repo. We worked together on the writeup. Readme created by Diana.

## Project Process
<!-- a commentary on the research/development process in the readme.md -->
We started by figuring out what exactly we wanted the user experience to be. We had a couple different ideas:
- Create a full graph visualization of a subset of the dataset
- Allow users to select 2 artworks and generate clusters of X nearest similar art, then compare similarity between the clusters
- Create multiple clusters of similar artwork, grouped by some factor
- A graph where the user ‘grows’ the graph in the directions they are interested in

To narrow down the choices, we consulted the course staff and the researcher behind the similarity algorithm to see what seemed most convincing, feasible, and enjoyable for the user. We ended up going with the last option, creating a graph where the user can explore on their own. But how do we motivate the user to explore the graph? In order to motivate the user, we decided to gamify the visualization so that users have a goal for looking around the graph and finding new, cool connections.

Our next step was to get started on developing the visualization. As per the recommendation of the staff, we used [cola.js](https://ialab.it.monash.edu/webcola/) and were able to find a [good tutorial](https://ialab.it.monash.edu/webcola/examples/browsemovies.html) for the type of visualization we wanted to use. However, we had to adapt it to our needs and our dataset. This took quite a while, as the tutorial code was written in TypeScript, and we wanted to work in JavaScript. It took a lot of debugging to convert the code and understand what the code was doing.

After we were able to integrate our dataset, we worked on styling the site, such as adding CSS, additional HTML components (the sidebars), and gamifying. The game would require us to find interesting pairs within a reasonable distance of each other, so we ran a BFS on some random artworks and picked the most compelling pairs. In the end, we integrated the pairs into the game and added additional features to handle the gameplay, such as handling what happens when the user finds the goal artwork.
