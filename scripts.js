`use strict`;
const isLocal = true;

console.log("hello from localsss");

// TABS WITH IMAGES
// -------------------
// [tabs='tabs-container'] on main section to separate from other instances
// [tabs='tabs-images'] on images container, with imgs as direct child. Img gets opacity 0 by default and opacity 100% on 'is-active' class
// [tabs='tabs-items'] on container of all items, usually a flex, with item as direct child
// [tabs='tabs-item-content'] on container of text to be hidden, gets 0 height by default and height auto on 'is-active' class
// -------------------

let tabContainer = $("[tabs='tabs-container']");

tabContainer.each(function () {
    let tabItem = $(this).find($("[tabs='tabs-items'] > div"));
    let tabImg = $(this).find($("[tabs='tabs-images'] > img"));

    //Activate first item
    tabItem.eq(0).addClass("is-active");
    tabItem.eq(0).find($("[tabs='tabs-item-content']")).addClass("is-active");
    tabImg.eq(0).addClass("is-active");

    // add a timeline for each tab item and pass index
    tabItem.each(function (index) {
        let tabContent = $(this).find("[tabs='tabs-item-content']");

        //get index
        //on click active class to clicked tab and play timeline
        $(this).on("click", function () {
            tabItem.removeClass("is-active");
            tabImg.removeClass("is-active");
            tabItem
                .find($("[tabs='tabs-item-content']"))
                .removeClass("is-active");
            $(this).addClass("is-active");
            tabImg.eq(index).addClass("is-active");
            tabContent.addClass("is-active");
        });
    });
});

// FAQ TOGGLES
// -------------------
// [faq='faq-container'] on container of all items, usually a flex, with item as direct child
// [faq='faq-item-content'] on container of text to be hidden, gets 0 height by default and height auto on 'is-active' class
// [faq='faq-item-img'] on icon that spins
// -------------------
let faqContainer = $("[faq='faq-container']");

faqContainer.each(function () {
    let faqItem = $(this).find($("[faq='faq-container'] > div"));

    // add a timeline for each tab item and pass index
    faqItem.each(function () {
        let faqContent = $(this).find("[faq='faq-item-content']");
        let faqContentImg = $(this).find("[faq='faq-item-img']");
        //on click active class to clicked tab and play timeline
        $(this).on("click", function () {
            faqItem.removeClass("is-active");
            faqItem
                .find($("[faq='faq-item-content']"))
                .removeClass("is-active");
            faqItem.find($("[faq='faq-item-img']")).removeClass("is-active");
            $(this).toggleClass("is-active");
            faqContentImg.toggleClass("is-active");
            faqContent.toggleClass("is-active");
        });
    });
});
