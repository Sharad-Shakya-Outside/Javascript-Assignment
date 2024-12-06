/* 
Create a webpage.
    a. Leadspace
        i. Background and Text Color changes smoothly in every 5 seconds.
        ii. Text Can have additional animations - optional
    b. Swiper slider
        i. Swiper slider should have fade effect
        ii. Use same swiper twice in a page. Meaning swiper should be initialized with same code (Same class/trigger)
        iii. Both swiper should be independent of each other.
    c. Footer
        i. Small bubbles that keeps moving randomly.
            1. Collision should occur between the bubbles, between bubbles and edges
            2. When collides should move in opposite directions
            3. Bubbles should have different speeds
            4. In collision the bubbles color should change.
            5. Should have more than 3 bubbles with different sizes
    d. The page should have page progress bar
        i. At the top of the page.
    e. Things to remember
        i. Should be responsive
        ii. Use debouncing technique on resizes.


Note: You can use GSAP.
*/


/* =============================================================
    Start of Events
============================================================= */
document.addEventListener('DOMContentLoaded', (e) => {
    gsap.registerPlugin(ScrollTrigger); // Required register for Scroll Trigger in gsap

    /* ------------------------------
        Variables
    ------------------------------*/

    const togglerButton = document.querySelector('.toggler');
    const navbar = document.querySelector('.navbar--collapse');
    const navbarLinks = document.querySelectorAll('.navbar__link');
    const progressBar = document.querySelector('.progress-bar');

    const leadspaceBgColors = ["#B93038", "#A4373D", "#F97B2E", "#2f5d25", "#3A401A"];
    const leadspaceFontColors = ["#30B9B2", "#37A48E", "#2E77F9", "#5D2F5D", "#401A3A"];

    const mapTitles = document.querySelectorAll(".swiper-slide .h2");
    const mapDescriptions = document.querySelectorAll(".swiper-slide blockquote");

    let colorIndex = 0;
    let fontColorIndex = 0;

    /* ------------------------------
        Page progress bar
    ------------------------------*/
    gsap.to('.progress-bar', {
        scrollTrigger: {
            trigger: '.progress-bar',
            start: 'top top',
            endTrigger: '.footer',
            end: 'bottom bottom',
            scrub: 1,
        },
        width: '100%',
        duration: 1,
        ease: Linear.easeNone,
    });

    /* ------------------------------
        Toggler Button function
    ------------------------------*/
    togglerButton.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
    });
    navbarLinks.forEach(navbarLink => {
        navbarLink.addEventListener('click', () => {
            navbar.classList.add('hidden');
        });
    })

    /* ------------------------------------------------
        Leadspace background and text color animation
    ------------------------------------------------*/
    function changeLeadspaceColor() {
        colorIndex = (colorIndex + 1) % leadspaceBgColors.length;
        fontColorIndex = (fontColorIndex + 1) % leadspaceFontColors.length;

        gsap.to(".leadspace", {
            backgroundImage: `linear-gradient(-45deg, #ccc, ${leadspaceBgColors[colorIndex]})`,
            duration: 2,
            ease: "power2.inOut",
        });
        gsap.to(".leadspace", {
            color: leadspaceFontColors[fontColorIndex],
            duration: 2,
            ease: "power2.inOut"
        });
        gsap.to(".leadspace__btn", {
            color: leadspaceFontColors[fontColorIndex],
            borderColor: leadspaceFontColors[fontColorIndex],
            duration: 2,
            ease: "power2.inOut"
        });
    }

    changeLeadspaceColor();
    setInterval(changeLeadspaceColor, 5000);

    /* ------------------------------
        Swipers
    ------------------------------*/
    var swiper = new Swiper(".fade-swiper", {
        spaceBetween: 30,
        direction: 'horizontal',
        mousewheel: {
            forceToAxis: true,
            thresholdDelta: 10,
        },
        effect: "fade",
        on: {
            slideChangeTransitionStart: function () {

                mapTitles.forEach(title => title.classList.remove("show-title"));
                mapDescriptions.forEach(desc => desc.classList.remove("show-description"));

                const activeSlide = this.slides[this.activeIndex];
                const activeTitle = activeSlide.querySelector(".h2");
                const activeDescription = activeSlide.querySelector("blockquote");

                if (activeTitle) activeTitle.classList.add("show-title");
                if (activeDescription) activeDescription.classList.add("show-description");
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            enabled: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            enabled: false,
        },
        breakpoints: {
            768: {
                navigation: {
                    enabled: true,
                },
                pagination: {
                    enabled: true,
                }
            }
        }
    });

    /* ---------------------------------------------------
        Variables for footer and bubble elements
    ---------------------------------------------------*/
    const footer = document.querySelector('#footer');
    const bubbles = document.querySelectorAll('.bubbles');

    var footerWidth = footer.clientWidth;
    var footerHeight = footer.clientHeight;

    let bubbleStorage = []; // Array to store all the bubbles

    /* ---------------------------------------------------------------
        Select all bubbles and start the animation for each one
    ---------------------------------------------------------------*/
    function setBubbleStorage() {
        bubbles.forEach(bubble => {

            bubbleStorage.push({
                element: bubble,
                x: Math.random() * (footerWidth - bubble.clientWidth),
                y: Math.random() * (footerHeight - bubble.clientHeight),
                vx: (Math.random() - 2) * 3, // speed control horizontal
                vy: (Math.random() - 2) * 3, // vertical speed control]
                radius: bubble.clientWidth / 2,
                backgroundColor: '#489565',
            });
        });
    }

    setBubbleStorage();

    /* ---------------------------------------------------------------
        Debounce on resize to reset footer dimensions and bubbles
    ---------------------------------------------------------------*/
    window.addEventListener("resize", debounce(() => {
        bubbleStorage = [];
        footerWidth = footer.clientWidth;
        footerHeight = footer.clientHeight;
        setBubbleStorage();
    }));

    // start the animation for each bubble
    function animate() {

        // Loop to store and animate bubbles
        for (let i = 0; i < bubbleStorage.length; i++) {
            let bubble1 = bubbleStorage[i];



            bubble1.x += bubble1.vx;
            bubble1.y += bubble1.vy;

            if (bubble1.x + bubble1.vx + (2 * bubble1.radius) > footerWidth || bubble1.x < 0) {
                bubble1.vx *= -1; // speed control horizontal
                bubble1.backgroundColor = randomBgColor();
            }
            if (bubble1.y + bubble1.vy + (2 * bubble1.radius) > footerHeight || bubble1.y < 0) {
                bubble1.vy *= -1;
                bubble1.backgroundColor = randomBgColor();
            }

            /*-------------------------------------
                Collision detection algorithm
            -------------------------------------- */
            for (let j = i + 1; j < bubbleStorage.length; j++) {

                let bubble2 = bubbleStorage[j];
                let dx = bubble1.x - bubble2.x;
                let dy = bubble1.y - bubble2.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < bubble1.radius + bubble2.radius) {
                    bubble1.vx *= -1;
                    bubble1.vy *= -1;
                    bubble2.vx *= -1;
                    bubble2.vy *= -1;
                    bubble1.backgroundColor = randomBgColor();
                    bubble2.backgroundColor = randomBgColor();
                }
            }

            /*-------------------------------------------
                Set bubble translation values in gsap
            ------------------------------------------- */
            gsap.set(bubble1.element, {
                x: bubble1.x,
                y: bubble1.y,
                background: bubble1.backgroundColor,
                ease: "power2.inOut",
            });


        }

        requestAnimationFrame(animate); // Continue animation
    }
    animate();


    /*-------------------------------------
        Debounce function
    -------------------------------------- */
    function debounce(func) {
        var timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func, 400, event);
        }
    }

    /*--------------------------------------------
        Background color randomizer function
    --------------------------------------------- */
    function randomBgColor() {
        let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
        let a;

        function populate(a) {
            for (let i = 0; i < 6; i++) {
                let x = Math.round(Math.random() * 14);
                let y = hex[x];
                a += y;
            }
            return a;
        }
        let Color1 = populate('#');
        let Color2 = populate('#');
        var angle = 'to right';

        let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
        return gradient;
    }

});