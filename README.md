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

# Module 4
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

