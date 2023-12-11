const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item-gallery");
const maxItems = items.length;

function clickCarouselLeft() {
    clickCarouselControl(true);
}

function clickCarouselRight() {
    clickCarouselControl(false);
}

function clickCarouselControl(isLeft) {
    console.log("isLeft:", isLeft);

    if (isLeft) {
    currentItem -= 1;
    } else {
    currentItem += 1;
    }

    if (currentItem >= maxItems) {
    currentItem = 0;
    }

    if (currentItem < 0) {
    currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
    behavior: "smooth",
    block: 'nearest',
    inline: "center"
    });

    items[currentItem].classList.add("current-item");

}

