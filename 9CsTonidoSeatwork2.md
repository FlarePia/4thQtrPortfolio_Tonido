# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)

- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.


### Step 1 (Static vs Relative):

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
#### It was able to move from its original position without being forced to stay in one place (like static). The different values affected how much it moved.

### Step 2 (Fixed):

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
#### It behaves differently because it stays in place when scrolling, while the position relative elements remaim unchanged, moving with you as you scroll.

### Step 3 (Absolute):

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
####

### Step 4 : (Absolute)

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    - Static is the default, and isn't affected by properties done on its sides. Relative allows the element to be adjusted by its sides. Absolute adjusts based on the element closest to it (potentially overlapping) assuming that this element isn't static. Fixed is an element that always stays in the same place no matter where you scroll.

    b. How does absolute positioning depend on its parent element?
    - Absolute positioning depends on its parent element to specify the layout and ensure that you have the freedom to creatively design by overlapping elements and more.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    - When scrolling with a fixed element, it stays in one place and you can scroll away from it. Sticky however, stays on your screen once you scroll past it's original location.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    - Putting important reminders for the event as a sticky element at the sidebar of the webpage
    - Using relative elements to make a creative output and for it to be visually pleasing