
Images:
many of the shows do not have a preview for the episodes and thus when viewing the information of the show, the image is missing. some shows such as "the batman" have all the images within the api and work perfectly well.

Tests:
For the tests i have used jest with react testing library and have implemented unit testing as well as integration testing. Each component has its' test within a file called '__test__' and the '__mock__' file within src is the jest mock data used for replacing the api data. For example, the Popup Test imports "data.tsx" and "popupShow.tsx" from the '__mock__' folder and is passed into the props when rendering the component. 

User Event tests are also implemented, eg. in the Navbar Test we input "batman" into the search field and hope to read "batman" when screening the input field.# Bondsmith-tech-test
