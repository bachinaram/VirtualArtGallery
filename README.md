**Which file to run first to start project**
home.html

# SSD8 - Virtual Art Gallery

Main Functionalities to implement
a. function to create http json query method to hit pathogen and get results of it
b. recursive program to implement walls and 
c. function to display images on planes from array of images



# VirtualArtGallery Progress status

1. 01/10/2020 - Initial notes about project from Sai Anirudh, documented it in VirtualArtGalery_Startup.docx
2. 10/10/2020 - Project outline document 
3. 12/10/2020 - Project Outline Discussion with Mentor (Raghav)
4. 13/10/2020 - uploading second draft of outline document after discussion with mentor
5. 14/10/2020 - index.html with floor code with floor image upload
                        uploading wall image
                        image sources 
                        https://www.tiles-direct.com/patterned-tiles-c1683/paisley-range-c2388/paisley-plain-white-25cm-x-25cm-wall-floor-tile-p5697

6. 15/10/2020 - New repo is created by Ritvik, repo room_v1.0 and main file video_7.html
                a-box for room and 6 planes on side of left and right walls

7. 15/10/2020 - I have added 6 images to my repo main and room_v1.0.
                I also took planes concept to my repo and displayed planes and images on top of it
8. 20/10/2020 - Testing room component
9. 22/10/2020 - created new pull request to merge the js changes to fetch positional x,y(constant),z of camera view
10. 23/10/2020 -  faced cors issue with raghav shared api and handled the issue from client side by 
                    allowing all access-control-allow-headers
11. 24/10/2020 - Team is had internal discussion about project status
12. 25/10/2020 - Raghav fixed cors problem from server-side
13. 26/10/2020 - Mentor asked for individual contributions and roles towards the projects
14. 26/10/2020 - Internal team project discussion about status             
                **RaviKumar Nandigam**
                Home page, exit strategy and UI designing
                **Shubham Swetank**
                Images and planes inside left and right wall looping
                Exploring and better design of room component.
                Testing
                **Ram Pratap Bachina and Rithvik Garg**
                Initial design of room, implementation of 3d and Working with restApi
                Backend integration, Path creations and implementations
                Testing

15. 29/10/2020 - Discussion with mentor regarding the api usage
16. 30/10/2020 - Internal team discussion for mid evaluation of project we need to prepare current stage 
                    of project preparation and youtube video link 
17. 31/10/2020 - Internal team discussion for to test pathogen return values
18. 02/11/2020 - Internal team discussion about presentation preparation
19. 02/11/2020 - Demo given to ravi to record youtube video
20. 02/11/2020 - Ravi prepared the youtube video (https://youtu.be/Z2Xn_OIbCVE)
21. 03/11/2020 - We have made some changes to presentation as per suggestion by Mentor Raghav
22. 03/11/2020 - Mid presentations
23. 03/11/2020 - Creation of home/start/welcome page for gallery home.html
24. 04/11/2020 - adding audio and text to home page (designing)
25. 07/11/2020 - Team had call with Raghav about project status
26. 09/11/2020 - Team discussion at 10PM ist about tthe projects status and work tahtt was allotted
27. 10/11/2020 - Team discussion at 10PM IST about tthe projects status and work that was allotted
28. 11/11/2020 - Team discussion before we reply to raghav about project status

    replied by Ritvik
    Hi Raghav, here is the progress from our last meeting :
tried the code for turned rooms with api returned values (for now - hard-coded values in html), giving descent result on placing wall at some angle..
	written the pseudo code logic for auto room creation (for JS), working on it now..
	also working on logic for looping images on wall.

29. 13/11/2020 - Internal team discussion Shubham able to complete random image selection. We are able to insert images randomly in each plane.
31. 13/11/2020 - Internal team discussion about status of everyone allocated activity
32. 13/11/2020 - Dynamic room creation but the rooms are generating straight
33. 14/11/2020 - Bug fixes to the plane entity insertion in each a-box room componentt
34. 17/11/2020 - Dynamically able to adjust fences in each room
35. 18/11/2020 - Dynamic animation testing
36. 19/11/2020 - auto shaded glass creation in begining and ending of the room dynamically
37. 20/11/2020 - team work on making the adding-api branch to make the turning rooms
38. 20/11/2020 - Api working fine for next room turn with 45 degrees only one room getting created
39. 21/11/2020 - added dynamic 3d creation in the middle of room
40. 21/11/2020 - last minute bug fixes for straight dynamic room creation
41. 21/11/2020 - team call with Raghav for final evaluation and project approval
42. 21/11/2020 - adding screenshot to readme.MD
43. 21/11/2020 - adding more images with naming picture(number) to increase random image generation accross rooms



High level Project Directory Structure

assets -
	|
	|
	|_____audio
	|_____Images
cssfiles -
	|
	|
	|_____home.css
docs - 	|
	|
	|_____ SSD8_ProjectOutline.docx
	|_____SSD_SSD8.pptx
	|_____VirtualArtGalery_Startup.docx
	|_____readme.txt 
jsfiles - 
	|
	|
	|_____camera_view.js
	|_____dynamicScene.js
README.md
gallery.html
home.html
test.html 

Project Screenshots
![alt text](https://github.com/bachinaram/SSD8/blob/main/assets/images/SS1.png)
![alt text](https://github.com/bachinaram/SSD8/blob/main/assets/images/SS2.png)
![alt text](https://github.com/bachinaram/SSD8/blob/main/assets/images/SS3.png)
![alt text](https://github.com/bachinaram/SSD8/blob/main/assets/images/SS4.png)


Final project demo
https://youtu.be/qGWZj3l2aoA

[![Watch the video](https://github.com/bachinaram/SSD8/blob/main/assets/images/SS2.png)](https://youtu.be/qGWZj3l2aoA)

