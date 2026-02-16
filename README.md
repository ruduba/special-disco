# Daily Notes

## Module 1
### 4th Feb, 2026
    1. how to install vscode, liveserver, created folder with js, html, css file, wrote html code for website to display "MY html page".

## Module 2
### 5th Feb, 2026
    Notes:
    1. Element: element is any balid word that can be used in html file, eg: head, html, title, h1, br, img
    2. Tag: when element is surrounded by < >
    3. Types of Elements:
        + Semantic Elements: Provide additional and relevant info about the page
            a. SEO
            b. Automation Testing
            c. Web Scraping
        + Non Semantic Elements: Do not provide additional information
    Tasks:
    1. Changed page title
    2. Added inline css to change h1 color to red

### 6th Feb, 2026
    Notes:
    1. Fonts: To make our webpage look good
    2. Divs <div>: Divides the page into different divisons
    3. Paragraphs <p>: paragraph tag
    4. Unordered List <ul>: Used to create a non numeric list
    5. ordered List <ol>: Used to create a numeric list
    5. Semantic Elements: mainly used by other systems to search data
        + <header>
        + <footer>
        + <nav>
        + <section>
    Tasks:
    1. added style tag to head
    2. changed font family to cambria
    3. Added 2 divs to body, moved the 2 headings to each
    4. changed colors of the divs using inline css
    5. added p tag
    6. inserted lorem placeholder in p tag
    7. added margin left and right to body style
    8. Added list, and list items using <ol>, <ul>, and <li>
    9. added header tag
    10. added main tag
    11. added footer tag

    > finished until lesson 3

### 7th Feb, 2026
    Notes:
    1. anchor tag <a> is used to connect to link or url
    2. URL: Uniform Resource Locator, eg: https://example.com
    3. Every tag can have some attributes, such as "href" for a, or style. The attribute will have some value.
    4. Types of CSS:
        a. Inline CSS: when style is written inside tag itself
        b. Embedded CSS
        c. External CSS

    Tasks:
    1. Created new HTML page
    2. Added header, footer, and main
    3. Added background color
    4. created  ol for destinations
    5. Used sections tags
    6. added p tag for info about booking tickets (used singapore airlines for ref)
    7. Added button for "book now"
    8. added div and nested sections in it
    9. customized div width with inline css, used bg color to notice the difference
    10. customised p with custom font and text alignment (inline css)
    11. added anchor tags to ol to link (to all list elements)
    12. linked bangalore list element to google.com
    13. Created html form for passenger details
    14. put form in div
    15. added inline styling to form div
    16. added label and inserted the input inside it
    17. added button to form
    18. Added different inputs, like text, email, password

### 8th Feb, 2026
    Notes:
    1. images <img>, has attribute of src and alt 
        a. src: where image comes from (path)
        b. alt: if image not loaded, alt text will be shown
        c: style: the styling for the image
        4. title: shows up on hover like tooltip
    2. figure
    2. figcaption
    4. details
    5. dl, dd
    

    Tasks:
    1. adding image to div
    2. styling the image
    3. putting image into <figure>
    4. added figcaption tag
    5. added another figure with image and figcaption
    6. added details <details>
    7. added summary inside detail <summary>
    8. added <p> inside detail
    9. added another details tag for insurance
    10. added input checkbox for insurance
    11. changed it to radio
    12. added names (name attibute) to radio buttons to enable to select only 1 at once
    13. added dl tag
    14. nested dd tag inside dl

## Module 3
### 8th Feb, 2026
    Notes:
    1. CSS3: latest version, full form: Cascading style sheets
    2. why cascading: flowing accross the pages
    3. syntax: uses curly braces, colon, and semicolon
    4. selectors: an html element can become a selector, same for classname
    5. property: style attributes are properties
    6. value: the value assigned to the property
    7. CSS can be used to change text, font, background, border
    8. lot of control over: height, display, width, margin, template layout, list and markers, animations, transitions
    9. UI/UX: user interface and user experience
    10. Types of CSS:
        a. Inline CSS: when style is written inside tag itself
        b. Embedded CSS
        c. External CSS: link the css file in head
    11. Types of selectors
        a. element: group multiple elements using commas
        2. id:
        3. class:
    12. * (universal selector) applies styling to entire page

    Tasks:
    1. linked the css in head
    2. styled h1 color
    3. added p and grouped it with the h1 to style both
    > CSS Task
        a. added nav
        b. added ul
        c. added li
        d. added h2 to nav
        e. styled *
        f. styled body, text aligned
        g. fetched google fonts api for roboto
        h. styled nav, added grey border

### 9th Feb, 2026
    Notes:
        1. rem is a relatibe unit which means that all values that use it change when the rott's font size changes.
            For eg, 1rem means 1xroot font size
            For most browsers the default value is 16px. this means if the root element is 16px, an element with the value 1rem will also equal 16px
        2. @keyframes rule:
            a. the @keyframes rule specifies the animation code
            b. the animation is created by gradually changing from one set of css styles to another
            c. during animation you can change the set of CSS styles many times
            d. specify when the style change will happen in percent or with the keywords
                + "from"
                + "to"
                which is the same as 0% and 100%, where 0 is start and 100 is end
            eg: @keyframes fadeIn {
                0% {opacity: 0;}
                100% {opacity: 1;}
                }
        3. animation: rulename animation_timing repeat_cycle
            eg: animation: fadeIn 5s infinite
    Tasks:
        > CSS Task
            a. added border radius to border
            b. changed the font size
            c. changed the div width to 600px
            d. added line height
            e. styled h2 with padding
            f. gave bg color to h2, with rounded corners
            g. removed the list style
            h. added border to list items
            i. removed anchor tag underline styling
            j. used pseudoclass styling on <a> tag
            k. added on hover styling on list items
            l. added styling to li last child
            m. added airport links to the anchor tags

        > Animation using CSS rules task
            a. added h1, div, p tags with content
            b. changed font family
            c. added margin left and right
            d. added padding
            e. changed the body background color
            f. created a fade in opacity keyframes rule
            g. created a fade-in-element class, changed body color
            h. assigned class to div
            i. added border radius and border
            j. added easing to animation
            k. i added my own animation to the fadeIn
            l. copied the div to create new animation
            m. added button
            n. added sliding keyframe rule
            o. added rule to button via new class

## Module 4
### 10th Feb, 2026
    Bootstrap
    Notes:
        1. Bootstrap: Collection of predefined css classes which provide highly effective look to the page
        2. CDN: Content Delivery Network
        3. Just by adding CDNs, we can start using Bootstrap
        4. We only need to give the necessary class name to the tag
    Tasks:
        1. Added few buttons
        2. Added various bootstrap classes to the buttons
        3. Created a div for bootstrap card inside section
        4. added image placeholder
        5. added another card
        6. added table
        7. populated with rows
        8. added bootstrap class to the table
        9. used bootstrap card styling
        10. used bootstrap grid styling
        11. aligned cards in grid manner
        12. added placeholder images and text to all cards
        13. added <header> <footer>
        14. added navbar component from bootstrap
        15. added heading <h1> with bootstrap class
        16. Added footer from bootstrap

## Module 5
### 11th Feb, 2026
    React
    Notes:
        1. Installations: React, create-react-app cmd
        2. Node.js: An open soruce and cross platform javascript runtime environment, It is a populat took for almost any kind of project
        3. nodejs is basically the backenc or server for javascript based applications using advanced javascript libraries
        4. npm: node package manager
        5. it is a command used to install various commands
        6. localhost = computer is the server
        7. 3000 is port number
        8. npm start to start dev server
        9. CTRL+C to stop the server
        10. you may need to press ctrl+c couple of times if your command prompt does not respond
    Task:
        1. Go to website nodejs.org
        2. download the installer file
        3. install nodejs
        4. check nodejs installation properly
        5. npm install create-react-app
        6. created react app
        7. run react app using npm start

## Module 6
### 12th Feb, 2026
    Notes:
        1. node_modules
        2. public
        3. src
        4. react is a frontend dev framework.
        5. therefore we have html, css, ans js files
        6. according to the SPA approach, the entire project has only one index file (single page approach)
        7. src: contains components
        8. App component is created by default
        9. When we want to transfer out project on some other systems, we can just share the src folder and avoid sharing node_modules
        10. Always component name should start with capital letter
        11. name of component and function should be same
        12. App.js will be referred by index.js, after component import, then connected with index.html
        13. html has div with id root
        14. JSX: javascript xml. 
        15. in return block, we not only have the html code, but we also have js code and many other references to the data and functions which finally create the desired output.
        16. SVG: vector graphics image
        17. return block can deliver only single element
        18. therefore we can put all elements inside <> </> tags
    Tasks:
        1. run react app in vscode terminal
        2. change <p> tag in App.js
        3. add <h1> tag in App.js
        4. removed all default code from App.js
        5. added new div, h1, button, and ul


### 13th Feb, 2026
    Notes:
        1. JSX: it helps react to combine the markup, data, events, state management easily using javascript xml
        2. it is  = html + js + event + data
        3. previous versions used to have class components, they are not used anymore
        4. we use functional components now
        3. useState = used to set state
        4. you can comment code by using ctrl + ?
        5. data associated with the component is also called state
        6. map() -> used for traversing therough the array, also part of jsx
        7. it selects each record or item in the array at a time
    Tasks:
        1. deleted all previous code
        2. added h1
        3. created variable age using usestate
        4. called age in the h1 tag using {}
        5. added another variable using usestate and added it
        6. Create a react component to display the employees in the organization and implement the logic to promote employees
            a. create component
            b. create employee data
            c. display employee data in table
        7. created components folder
        8. created Promote.js component
        9. added h1 to promote, added it to index.js after importing
        10. added array employee using use state
        11. added table
        12. used map to map array to table
        13. added promote button
        14. styled the table, buttons, thead

## Module 7
### 14th Feb, 2026
    Notes:
    Tasks:
        1. created new variable staff
        2. added data to staff array
        3. added bootstrap cdn to index.html
        4. added bootstrap btn to component
        5. added onclick function to button
        6. added card from bootstrap into card div
        7. styled card div
        8. mapped staff array to card
        9. added image
        10. styled image
        11. added decription
        12. styled the card

## Module 8
### 15th Feb, 2025
    Notes:
        1. React Hooks:
            - State hooks
            - context hooks
            - reference hooks
            - effect hooks
            - performance hooks
            - resource hooks
        2. React hooks are a feature introduced in React 16.8 to allow functional components to manage
            state and side effects, previously only possible with class components. Hooks provide a more
            concise and readable way to woek with stateful logic in functional components.
            Eg: useState: allows functional components to have local state
                useEffect: is used to perform side effects in your components, such as fetching data, 
                    subscribing to external events etc
                useContext: is used to consume values from react context within a functional component
                useReducer: alternative to useState for managing more complex state logic
        3. useEffect hook gets executed whenever the page renders
            - any actions need to be performced during the page load such as initialising variables, or fetching data from the cloud, etc
            - run only once, or everytime the page renders
        4. when the page is loaded, its called rendered
        5. to make it run only once, provide an empty array [] as the second parameter
    Tasks:
        1. Added new component for useeffect demo
        2. added new variable for usestate
        3. added the demo component to index.js
        4. added useeffect to create a counter for page renders
        5. created new component for posts list

## Module 9
### 16th Feb, 2025
    Notes:
        1. we need to fetch the above data using the url and using the fetch funtion
        2. asynchronous javascript
        3. we are trying to fetch the cloud json data using url
    Tasks:
        1. created variable for posts
        2. Added useeffect hook
        3. used fetch function
        4. added error handling
        5. creating array to hold the json object
        6. mapped response json to list
        7. mapped response to table
        8. added button, with delete handling
        9. styled table and delete button
        10. to remove row when button clicked
        11. successfully implemented delete functionality

