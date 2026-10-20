
# The Ecosystem Project

Tying together concepts from The Nature of Code, to build an ecosystem of "living" entities. 

## Step 1

Develop a set of rules for simulating the real-world behavior of a creature, builing on top of principles from the random walk or other noise-driven motions. 
- Can you simulate a jittery bug that flies in unpredictable ways?

Random noise or gaussian can simulate a jittery bug.

- Can you simulate a floating leaf carried by inconsistent breezes?

Perlin noise tweaking params is a good surrogate for floating leaf. 

- Directional motivation? Like food? 

Generalize mouse code to add a goal. 

Explore how much you can express about a creatures personality through its behavior. This can be a fair amount, generalized variables to tweak include random movement vs. goal oriented, then the degree of randomness or jitteriness vs. perlin noise / smoothed noise. Speed also plays a factor, slow move vs. fast steps. 
