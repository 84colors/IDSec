`use strict`;
const isLocal = true;

console.log("hello from local");

//Tabs
let tabContainer = $("[tabs='tabs-container']");
let tabItem = $("[tabs='tabs-container']").find($("[tabs='tabs-items'] > div"));
let tabImg = $("[tabs='tabs-container']").find(
    $("[tabs='tabs-images] > image")
);

// make first tab active on page loads
function makeItemActive(itemNumber) {
    tabItem.removeClass("is-active");
    tabItem.eq(itemNumber).addClass("is-active");
    tabImg.removeClass("is-active");
    tabImg.eq(itemNumber).addClass("is-active");
}

// create infinitely looping timeline
let tlTabs = gsap.timeline({
    repeat: -1,
    defaults: {
        ease: "none",
    },
});

// add a step to the timeline for each cms item

tabItem.each(function (index) {
    // add a label to this step
    tlTabs.addLabel(`step${index}`);

    // animate the progress bar inside this item
    tlTabs.to($(this).find(".tab-line.is-green"), {
        height: "100%",
        duration: 5,
        onStart: () => {
            // switch active class to this item when animation starts
            makeItemActive(index);
            // set video inside this item back to beginning
            $(this)
                .closest(".has-tabs")
                .find(".tab-video")
                .eq(index)
                .find("video")
                .get(0)
                .play();
        },
    });

    tlTabs.fromTo(
        $(this).find(".tab-text"),
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "<"
    );

    // jump to this step on the timeline on click of this cms item
    $(this).on("click", function () {
        tlTabs.seek(`step${index}`);
    });
});
